// ===== SISTEMA DE GERENCIAMENTO DE DADOS AVANÇADO =====
// Classe principal para gerenciar todos os dados do site com backend
class SportNewsApp {
    constructor() {
        // Inicialização das propriedades principais
        this.currentUser = null;
        this.currentSport = 'todas';
        this.currentView = 'news'; // 'news' ou 'profiles'
        this.currentNewsId = null;
        this.apiBase = '/api';
        
        // Inicialização dos componentes
        this.initializeEventListeners();
        this.initializeTheme();
        this.checkLoginStatus();
        this.loadContent();
    }

    // ===== UTILITÁRIOS DE API =====
    
    // Faz requisição para a API
    async apiRequest(endpoint, options = {}) {
        try {
            const response = await fetch(`${this.apiBase}${endpoint}`, {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Erro na requisição');
            }
            
            return data;
        } catch (error) {
            console.error('Erro na API:', error);
            throw error;
        }
    }

    // ===== SISTEMA DE AUTENTICAÇÃO =====
    
    // Registra novo usuário
    async register(username, email, password, bio = '', avatarUrl = '') {
        try {
            const data = await this.apiRequest('/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    bio,
                    avatar_url: avatarUrl
                })
            });
            
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Faz login do usuário
    async login(emailOrUsername, password) {
        try {
            const data = await this.apiRequest('/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    email_or_username: emailOrUsername,
                    password
                })
            });
            
            this.currentUser = data.user;
            this.updateUIForLoggedUser();
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Faz logout do usuário
    async logout() {
        try {
            await this.apiRequest('/auth/logout', {
                method: 'POST'
            });
            
            this.currentUser = null;
            this.updateUIForLoggedUser();
        } catch (error) {
            console.error('Erro no logout:', error);
            // Mesmo com erro, limpa o usuário local
            this.currentUser = null;
            this.updateUIForLoggedUser();
        }
    }

    // Verifica se há usuário logado ao carregar a página
    async checkLoginStatus() {
        try {
            const data = await this.apiRequest('/auth/me');
            this.currentUser = data;
            this.updateUIForLoggedUser();
        } catch (error) {
            // Usuário não está logado
            this.currentUser = null;
            this.updateUIForLoggedUser();
        }
    }

    // Atualiza interface baseada no status de login
    updateUIForLoggedUser() {
        const authButtons = document.getElementById('auth-buttons');
        const userArea = document.getElementById('user-area');
        const addNewsSection = document.getElementById('add-news-section');
        const usernameDisplay = document.getElementById('username-display');
        const userAvatar = document.getElementById('user-avatar');
        const adminBadge = document.getElementById('admin-badge');

        if (this.currentUser) {
            // Usuário logado
            authButtons.style.display = 'none';
            userArea.style.display = 'flex';
            addNewsSection.style.display = 'block';
            usernameDisplay.textContent = this.currentUser.username;
            
            // Avatar do usuário
            if (this.currentUser.avatar_url) {
                userAvatar.src = this.currentUser.avatar_url;
                userAvatar.style.display = 'block';
            } else {
                userAvatar.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150';
                userAvatar.style.display = 'block';
            }
            
            // Badge de admin
            if (this.currentUser.is_admin) {
                adminBadge.style.display = 'inline-block';
            } else {
                adminBadge.style.display = 'none';
            }
        } else {
            // Usuário não logado
            authButtons.style.display = 'flex';
            userArea.style.display = 'none';
            addNewsSection.style.display = 'none';
        }
    }

    // ===== GERENCIAMENTO DE NOTÍCIAS =====
    
    // Carrega notícias da API
    async loadNews() {
        try {
            const sport = this.currentSport === 'todas' ? '' : this.currentSport;
            const params = sport ? `?sport=${sport}` : '';
            const data = await this.apiRequest(`/news${params}`);
            return data;
        } catch (error) {
            console.error('Erro ao carregar notícias:', error);
            return [];
        }
    }

    // Adiciona nova notícia
    async addNews(title, sport, content, imageUrl) {
        try {
            const data = await this.apiRequest('/news', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    sport,
                    content,
                    image_url: imageUrl || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500'
                })
            });
            
            this.loadContent();
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Deleta notícia
    async deleteNews(newsId) {
        try {
            await this.apiRequest(`/news/${newsId}`, {
                method: 'DELETE'
            });
            
            this.loadContent();
            this.closeModal('news-modal');
        } catch (error) {
            throw error;
        }
    }

    // Renderiza notícias na tela
    async renderNews() {
        const newsGrid = document.getElementById('news-grid');
        const noNews = document.getElementById('no-news');
        
        // Adiciona classe para animação de transição
        newsGrid.classList.add('changing');

        try {
            const news = await this.loadNews();
            
            setTimeout(() => {
                if (news.length === 0) {
                    newsGrid.innerHTML = '';
                    noNews.style.display = 'block';
                } else {
                    noNews.style.display = 'none';
                    newsGrid.innerHTML = news.map(article => this.createNewsCard(article)).join('');
                }
                
                // Remove classe de transição
                newsGrid.classList.remove('changing');
            }, 150);
        } catch (error) {
            console.error('Erro ao renderizar notícias:', error);
            newsGrid.classList.remove('changing');
        }
    }

    // Cria card HTML para uma notícia
    createNewsCard(news) {
        const canDelete = this.currentUser && 
            (this.currentUser.id === news.author_id || this.currentUser.is_admin);
        
        // Trunca o texto se for muito longo
        const maxLength = 150;
        const isLongText = news.content.length > maxLength;
        const truncatedText = isLongText ? 
            news.content.substring(0, maxLength) + '...' : 
            news.content;

        return `
            <article class="news-card shine-effect" onclick="app.openNewsModal(${news.id})">
                <img src="${news.image_url}" alt="${news.title}" 
                     onerror="this.src='https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500'">
                <div class="news-content">
                    <h3 class="news-title">${news.title}</h3>
                    <div class="news-meta">
                        <span class="news-sport">${this.getSportDisplayName(news.sport)}</span>
                        <span class="news-date">${this.formatDate(news.created_at)}</span>
                    </div>
                    <div class="news-text ${isLongText ? 'truncated' : ''}">
                        ${truncatedText}
                        ${isLongText ? '<span class="read-more">Ler mais <i class="fas fa-arrow-right"></i></span>' : ''}
                    </div>
                    <div class="news-actions" onclick="event.stopPropagation()">
                        <button class="like-btn" onclick="app.toggleLike(${news.id})">
                            <i class="fas fa-heart"></i>
                            <span>${news.likes_count || 0}</span>
                        </button>
                        <span class="news-author">Por: ${news.author_username}</span>
                        ${canDelete ? `
                            <button class="delete-btn" onclick="app.confirmDeleteNews(${news.id})" title="Excluir notícia">
                                <i class="fas fa-trash"></i>
                            </button>
                        ` : ''}
                    </div>
                </div>
            </article>
        `;
    }

    // Abre modal da notícia em tela cheia
    async openNewsModal(newsId) {
        try {
            this.currentNewsId = newsId;
            const news = await this.apiRequest(`/news`);
            const article = news.find(n => n.id === newsId);
            
            if (!article) {
                throw new Error('Notícia não encontrada');
            }

            // Preenche dados da notícia
            document.getElementById('news-full-image').src = article.image_url;
            document.getElementById('news-full-title').textContent = article.title;
            document.getElementById('news-full-sport').textContent = this.getSportDisplayName(article.sport);
            document.getElementById('news-full-date').textContent = this.formatDate(article.created_at);
            document.getElementById('news-full-author').textContent = `Por: ${article.author_username}`;
            document.getElementById('news-full-text').textContent = article.content;
            
            // Configura botão de curtida
            const likeBtn = document.getElementById('news-full-like');
            const likesSpan = document.getElementById('news-full-likes');
            likesSpan.textContent = article.likes_count || 0;
            
            // Verifica se usuário curtiu
            if (this.currentUser) {
                try {
                    const likeData = await this.apiRequest(`/news/${newsId}/likes`);
                    if (likeData.user_liked) {
                        likeBtn.classList.add('liked');
                    } else {
                        likeBtn.classList.remove('liked');
                    }
                    likesSpan.textContent = likeData.likes_count;
                } catch (error) {
                    console.error('Erro ao verificar curtida:', error);
                }
            }
            
            // Configura botão de exclusão
            const deleteBtn = document.getElementById('news-full-delete');
            const canDelete = this.currentUser && 
                (this.currentUser.id === article.author_id || this.currentUser.is_admin);
            deleteBtn.style.display = canDelete ? 'flex' : 'none';
            
            // Configura seção de comentários
            this.setupCommentsSection();
            
            this.openModal('news-modal');
        } catch (error) {
            console.error('Erro ao abrir notícia:', error);
            this.showMessage('Erro ao carregar notícia', 'error');
        }
    }

    // Configura seção de comentários
    setupCommentsSection() {
        const commentForm = document.getElementById('comment-form');
        const loginToComment = document.getElementById('login-to-comment');
        
        if (this.currentUser) {
            commentForm.style.display = 'block';
            loginToComment.style.display = 'none';
        } else {
            commentForm.style.display = 'none';
            loginToComment.style.display = 'block';
        }
        
        // Limpa lista de comentários (implementação futura)
        document.getElementById('comments-list').innerHTML = '';
    }

    // Confirma exclusão de notícia
    confirmDeleteNews(newsId) {
        if (confirm('Tem certeza que deseja excluir esta notícia? Esta ação não pode ser desfeita.')) {
            this.deleteNews(newsId);
        }
    }

    // ===== SISTEMA DE CURTIDAS =====
    
    // Alterna curtida de uma notícia
    async toggleLike(newsId) {
        if (!this.currentUser) {
            this.showMessage('Você precisa estar logado para curtir notícias!', 'error');
            return;
        }

        try {
            const data = await this.apiRequest(`/news/${newsId}/like`, {
                method: 'POST'
            });
            
            // Atualiza interface
            this.updateLikeButtons(newsId, data.likes_count, data.user_liked);
            
        } catch (error) {
            console.error('Erro ao curtir notícia:', error);
            this.showMessage('Erro ao curtir notícia', 'error');
        }
    }

    // Atualiza botões de curtida na interface
    updateLikeButtons(newsId, likesCount, userLiked) {
        // Atualiza no card da notícia
        const cardLikeBtn = document.querySelector(`[onclick="app.toggleLike(${newsId})"]`);
        if (cardLikeBtn) {
            const span = cardLikeBtn.querySelector('span');
            if (span) span.textContent = likesCount;
            
            if (userLiked) {
                cardLikeBtn.classList.add('liked');
            } else {
                cardLikeBtn.classList.remove('liked');
            }
        }
        
        // Atualiza no modal da notícia
        if (this.currentNewsId === newsId) {
            const modalLikeBtn = document.getElementById('news-full-like');
            const modalLikesSpan = document.getElementById('news-full-likes');
            
            if (modalLikesSpan) modalLikesSpan.textContent = likesCount;
            
            if (userLiked) {
                modalLikeBtn.classList.add('liked');
            } else {
                modalLikeBtn.classList.remove('liked');
            }
        }
    }

    // ===== SISTEMA DE PERFIS =====
    
    // Carrega perfis de usuários
    async loadProfiles() {
        try {
            const data = await this.apiRequest('/users');
            return data;
        } catch (error) {
            console.error('Erro ao carregar perfis:', error);
            return [];
        }
    }

    // Renderiza perfis na tela
    async renderProfiles() {
        const profilesGrid = document.getElementById('profiles-grid');
        
        try {
            const profiles = await this.loadProfiles();
            
            profilesGrid.innerHTML = profiles.map(profile => this.createProfileCard(profile)).join('');
        } catch (error) {
            console.error('Erro ao renderizar perfis:', error);
        }
    }

    // Cria card HTML para um perfil
    createProfileCard(profile) {
        const joinDate = new Date(profile.created_at).toLocaleDateString('pt-BR');
        const avatarUrl = profile.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150';
        
        return `
            <div class="profile-card" onclick="app.openProfileModal(${profile.id})">
                <div class="profile-card-header">
                    <img src="${avatarUrl}" alt="${profile.username}" class="profile-card-avatar">
                    <div class="profile-card-info">
                        <h3>${profile.username}</h3>
                        <p>${profile.email}</p>
                        ${profile.is_admin ? '<span class="admin-badge">ADMIN</span>' : ''}
                    </div>
                </div>
                <div class="profile-card-bio">
                    ${profile.bio || 'Nenhuma biografia disponível.'}
                </div>
                <div class="profile-card-stats">
                    <div class="profile-stat">
                        <span class="profile-stat-number">${profile.news_count || 0}</span>
                        <span class="profile-stat-label">Notícias</span>
                    </div>
                    <div class="profile-stat">
                        <span class="profile-stat-number">${joinDate}</span>
                        <span class="profile-stat-label">Membro desde</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Abre modal de perfil
    async openProfileModal(userId) {
        try {
            const profile = await this.apiRequest(`/users/${userId}`);
            
            // Preenche dados do perfil
            document.getElementById('profile-modal-title').textContent = 
                userId === this.currentUser?.id ? 'Meu Perfil' : `Perfil de ${profile.username}`;
            
            const avatarUrl = profile.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150';
            document.getElementById('profile-avatar').src = avatarUrl;
            document.getElementById('profile-username').textContent = profile.username;
            document.getElementById('profile-email').textContent = profile.email;
            document.getElementById('profile-bio-text').textContent = profile.bio || 'Nenhuma biografia disponível.';
            document.getElementById('profile-news-count').textContent = profile.news_count || 0;
            document.getElementById('profile-join-date').textContent = 
                new Date(profile.created_at).toLocaleDateString('pt-BR');
            
            // Badge de admin
            const adminBadge = document.getElementById('profile-admin-badge');
            adminBadge.style.display = profile.is_admin ? 'inline-block' : 'none';
            
            // Botão de editar (apenas para o próprio perfil)
            const editBtn = document.getElementById('edit-profile-btn');
            editBtn.style.display = userId === this.currentUser?.id ? 'block' : 'none';
            
            this.openModal('profile-modal');
        } catch (error) {
            console.error('Erro ao abrir perfil:', error);
            this.showMessage('Erro ao carregar perfil', 'error');
        }
    }

    // Atualiza perfil do usuário
    async updateProfile(userId, profileData) {
        try {
            const data = await this.apiRequest(`/users/${userId}`, {
                method: 'PUT',
                body: JSON.stringify(profileData)
            });
            
            // Atualiza usuário atual se for o próprio perfil
            if (userId === this.currentUser?.id) {
                this.currentUser = data.user;
                this.updateUIForLoggedUser();
            }
            
            return data;
        } catch (error) {
            throw error;
        }
    }

    // ===== SISTEMA DE ABAS E FILTROS =====
    
    // Muda o esporte ativo ou visualização
    changeSport(sport) {
        // Remove classe ativa de todas as abas
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Adiciona classe ativa na aba clicada
        document.querySelector(`[data-sport="${sport}"]`).classList.add('active');

        // Atualiza esporte atual
        this.currentSport = sport;
        
        // Muda visualização
        if (sport === 'perfis') {
            this.currentView = 'profiles';
            this.showProfilesView();
        } else {
            this.currentView = 'news';
            this.showNewsView();
        }
    }

    // Mostra visualização de notícias
    showNewsView() {
        document.getElementById('news-section').style.display = 'block';
        document.getElementById('profiles-section').style.display = 'none';
        this.renderNews();
    }

    // Mostra visualização de perfis
    showProfilesView() {
        document.getElementById('news-section').style.display = 'none';
        document.getElementById('profiles-section').style.display = 'block';
        this.renderProfiles();
    }

    // Carrega conteúdo baseado na visualização atual
    loadContent() {
        if (this.currentView === 'profiles') {
            this.renderProfiles();
        } else {
            this.renderNews();
        }
    }

    // Volta para a página inicial
    goHome() {
        this.changeSport('todas');
    }

    // ===== SISTEMA DE TEMA (MODO ESCURO/CLARO) =====
    
    // Inicializa tema baseado na preferência salva
    initializeTheme() {
        const savedTheme = localStorage.getItem('sportsnews_theme');
        const themeIcon = document.querySelector('#theme-toggle i');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }

    // Alterna entre tema claro e escuro
    toggleTheme() {
        const body = document.body;
        const themeIcon = document.querySelector('#theme-toggle i');
        
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('sportsnews_theme', 'dark');
        } else {
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('sportsnews_theme', 'light');
        }
    }

    // ===== SISTEMA DE MODAIS =====
    
    // Abre modal
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('show');
        modal.style.display = 'flex';
        
        // Adiciona listener para fechar ao clicar fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modalId);
            }
        });
        
        // Previne scroll do body
        document.body.style.overflow = 'hidden';
    }

    // Fecha modal
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('show');
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // ===== FUNÇÕES UTILITÁRIAS =====
    
    // Converte nome do esporte para exibição
    getSportDisplayName(sport) {
        const sportNames = {
            'futebol': 'Futebol',
            'basquete': 'Basquete',
            'volei': 'Vôlei',
            'tenis': 'Tênis',
            'natacao': 'Natação',
            'atletismo': 'Atletismo'
        };
        return sportNames[sport] || sport;
    }

    // Formata data para exibição
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // Exibe mensagem para o usuário
    showMessage(message, type = 'info') {
        // Remove mensagem anterior se existir
        const existingMessage = document.querySelector('.message-toast');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Cria nova mensagem
        const messageDiv = document.createElement('div');
        messageDiv.className = `message-toast ${type}`;
        messageDiv.innerHTML = `
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i>
            <span>${message}</span>
        `;

        // Adiciona estilos inline para a mensagem
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#dc3545' : '#28a745'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideInRight 0.3s ease;
            backdrop-filter: blur(10px);
        `;

        document.body.appendChild(messageDiv);

        // Remove mensagem após 4 segundos
        setTimeout(() => {
            messageDiv.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => messageDiv.remove(), 300);
        }, 4000);
    }

    // ===== INICIALIZAÇÃO DE EVENT LISTENERS =====
    
    initializeEventListeners() {
        // Logo clicável para voltar à página inicial
        document.getElementById('logo-home').addEventListener('click', () => {
            this.goHome();
        });

        // Botão de alternância de tema
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Botões de autenticação
        document.getElementById('login-btn').addEventListener('click', () => {
            this.openModal('login-modal');
        });

        document.getElementById('register-btn').addEventListener('click', () => {
            this.openModal('register-modal');
        });

        document.getElementById('logout-btn').addEventListener('click', async () => {
            try {
                await this.logout();
                this.showMessage('Logout realizado com sucesso!', 'success');
            } catch (error) {
                this.showMessage('Erro no logout', 'error');
            }
        });

        // Botão de perfil
        document.getElementById('profile-btn').addEventListener('click', () => {
            if (this.currentUser) {
                this.openProfileModal(this.currentUser.id);
            }
        });

        // Botão para adicionar notícia
        document.getElementById('add-news-btn').addEventListener('click', () => {
            this.openModal('add-news-modal');
        });

        // Abas de esportes
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const sport = btn.getAttribute('data-sport');
                this.changeSport(sport);
            });
        });

        // Botões de fechar modais
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const modalId = btn.getAttribute('data-modal');
                this.closeModal(modalId);
            });
        });

        // Formulário de login
        document.getElementById('login-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            try {
                await this.login(email, password);
                this.closeModal('login-modal');
                this.showMessage('Login realizado com sucesso!', 'success');
                e.target.reset();
            } catch (error) {
                this.showMessage(error.message, 'error');
            }
        });

        // Formulário de registro
        document.getElementById('register-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm').value;
            const bio = document.getElementById('register-bio').value;
            const avatarUrl = document.getElementById('register-avatar').value;

            if (password !== confirmPassword) {
                this.showMessage('As senhas não coincidem!', 'error');
                return;
            }

            try {
                await this.register(username, email, password, bio, avatarUrl);
                this.closeModal('register-modal');
                this.showMessage('Conta criada com sucesso! Faça login para continuar.', 'success');
                e.target.reset();
            } catch (error) {
                this.showMessage(error.message, 'error');
            }
        });

        // Formulário de adicionar notícia
        document.getElementById('add-news-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const title = document.getElementById('news-title').value;
            const sport = document.getElementById('news-sport').value;
            const image = document.getElementById('news-image').value;
            const content = document.getElementById('news-content').value;

            try {
                await this.addNews(title, sport, content, image);
                this.closeModal('add-news-modal');
                this.showMessage('Notícia adicionada com sucesso!', 'success');
                e.target.reset();
            } catch (error) {
                this.showMessage(error.message, 'error');
            }
        });

        // Botão de curtida no modal de notícia
        document.getElementById('news-full-like').addEventListener('click', () => {
            if (this.currentNewsId) {
                this.toggleLike(this.currentNewsId);
            }
        });

        // Botão de exclusão no modal de notícia
        document.getElementById('news-full-delete').addEventListener('click', () => {
            if (this.currentNewsId) {
                this.confirmDeleteNews(this.currentNewsId);
            }
        });

        // Botão de editar perfil
        document.getElementById('edit-profile-btn').addEventListener('click', () => {
            this.toggleProfileEdit(true);
        });

        // Botão de cancelar edição de perfil
        document.getElementById('cancel-edit-btn').addEventListener('click', () => {
            this.toggleProfileEdit(false);
        });

        // Formulário de edição de perfil
        document.getElementById('edit-profile-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const profileData = {
                username: document.getElementById('edit-username').value,
                email: document.getElementById('edit-email').value,
                bio: document.getElementById('edit-bio').value,
                avatar_url: document.getElementById('edit-avatar').value
            };
            
            const password = document.getElementById('edit-password').value;
            if (password) {
                profileData.password = password;
            }

            try {
                await this.updateProfile(this.currentUser.id, profileData);
                this.toggleProfileEdit(false);
                this.showMessage('Perfil atualizado com sucesso!', 'success');
                // Recarrega o modal com os dados atualizados
                this.openProfileModal(this.currentUser.id);
            } catch (error) {
                this.showMessage(error.message, 'error');
            }
        });

        // Tecla ESC para fechar modais
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    this.closeModal(openModal.id);
                }
            }
        });
    }

    // Alterna modo de edição do perfil
    toggleProfileEdit(editing) {
        const profileContent = document.querySelector('.profile-content');
        const editForm = document.getElementById('edit-profile-form');
        const editBtn = document.getElementById('edit-profile-btn');
        
        if (editing) {
            // Preenche formulário com dados atuais
            document.getElementById('edit-username').value = this.currentUser.username;
            document.getElementById('edit-email').value = this.currentUser.email;
            document.getElementById('edit-bio').value = this.currentUser.bio || '';
            document.getElementById('edit-avatar').value = this.currentUser.avatar_url || '';
            document.getElementById('edit-password').value = '';
            
            // Mostra formulário
            editForm.style.display = 'block';
            editBtn.style.display = 'none';
            
            // Esconde informações do perfil
            profileContent.querySelectorAll('.profile-header, .profile-bio, .profile-stats').forEach(el => {
                el.style.display = 'none';
            });
        } else {
            // Esconde formulário
            editForm.style.display = 'none';
            editBtn.style.display = 'block';
            
            // Mostra informações do perfil
            profileContent.querySelectorAll('.profile-header, .profile-bio, .profile-stats').forEach(el => {
                el.style.display = '';
            });
        }
    }
}

// ===== INICIALIZAÇÃO DA APLICAÇÃO =====
// Cria instância global da aplicação quando a página carrega
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new SportNewsApp();
    
    // Adiciona animações CSS para as mensagens
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// ===== FUNÇÕES GLOBAIS =====
// Funções que podem ser chamadas diretamente do HTML

// Função global para alternar curtida (chamada pelos botões de like)
function toggleLike(newsId) {
    if (app) {
        app.toggleLike(newsId);
    }
}

