/**
 * Event Website JavaScript
 * Funcionalidades interativas para o site do evento
 */

(function() {
    'use strict';

    // =============================================================================
    // UTILITY FUNCTIONS
    // =============================================================================

    /**
     * Debounce function para otimizar performance em eventos
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Throttle function para scroll events
     */
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Smooth scroll para links internos
     */
    function smoothScroll(target, duration = 1000) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;

        const targetPosition = targetElement.offsetTop - 80; // Offset para header fixo
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    /**
     * Verifica se elemento está visível na viewport
     */
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // =============================================================================
    // NAVIGATION FUNCTIONALITY
    // =============================================================================

    class Navigation {
        constructor() {
            this.navbar = document.querySelector('.navbar');
            this.navbarMenu = document.getElementById('navbar-menu');
            this.navbarToggle = document.getElementById('navbar-toggle');
            this.navLinks = document.querySelectorAll('.navbar__link');
            this.header = document.querySelector('.header');
            
            this.init();
        }

        init() {
            this.setupMobileMenu();
            this.setupSmoothScroll();
            this.setupScrollEffects();
            this.setupActiveNavigation();
        }

        setupMobileMenu() {
            if (this.navbarToggle && this.navbarMenu) {
                this.navbarToggle.addEventListener('click', () => {
                    this.toggleMobileMenu();
                });

                // Fechar menu ao clicar em um link
                this.navLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        this.closeMobileMenu();
                    });
                });

                // Fechar menu ao clicar fora
                document.addEventListener('click', (e) => {
                    if (!this.navbar.contains(e.target)) {
                        this.closeMobileMenu();
                    }
                });
            }
        }

        toggleMobileMenu() {
            this.navbarMenu.classList.toggle('active');
            this.navbarToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        }

        closeMobileMenu() {
            this.navbarMenu.classList.remove('active');
            this.navbarToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }

        setupSmoothScroll() {
            this.navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        smoothScroll(href);
                    }
                });
            });
        }

        setupScrollEffects() {
            const scrollHandler = throttle(() => {
                const scrolled = window.pageYOffset;
                
                // Header background no scroll
                if (scrolled > 100) {
                    this.header.classList.add('scrolled');
                } else {
                    this.header.classList.remove('scrolled');
                }
            }, 16);

            window.addEventListener('scroll', scrollHandler);
        }

        setupActiveNavigation() {
            const sections = document.querySelectorAll('section[id]');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        this.updateActiveNav(id);
                    }
                });
            }, {
                rootMargin: '-20% 0px -80% 0px'
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        }

        updateActiveNav(activeId) {
            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeId}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    // =============================================================================
    // SCHEDULE TABS
    // =============================================================================

    class ScheduleTabs {
        constructor() {
            this.tabs = document.querySelectorAll('.schedule__tab');
            this.contents = document.querySelectorAll('.schedule__day');
            
            this.init();
        }

        init() {
            this.tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetDay = tab.getAttribute('data-day');
                    this.switchTab(targetDay);
                });
            });
        }

        switchTab(targetDay) {
            // Remove active class de todas as tabs e conteúdos
            this.tabs.forEach(tab => tab.classList.remove('active'));
            this.contents.forEach(content => content.classList.remove('active'));

            // Adiciona active class na tab clicada
            const activeTab = document.querySelector(`[data-day="${targetDay}"]`);
            if (activeTab) {
                activeTab.classList.add('active');
            }

            // Mostra o conteúdo correspondente
            const activeContent = document.getElementById(targetDay);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        }
    }

    // =============================================================================
    // FORM HANDLING
    // =============================================================================

    class FormHandler {
        constructor() {
            this.registrationForm = document.getElementById('registration-form');
            this.newsletterForm = document.querySelector('.newsletter__form');
            
            this.init();
        }

        init() {
            this.setupRegistrationForm();
            this.setupNewsletterForm();
            this.setupFormValidation();
        }

        setupRegistrationForm() {
            if (this.registrationForm) {
                this.registrationForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleRegistrationSubmit();
                });
            }
        }

        setupNewsletterForm() {
            if (this.newsletterForm) {
                this.newsletterForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleNewsletterSubmit();
                });
            }
        }

        setupFormValidation() {
            const inputs = document.querySelectorAll('.form__input');
            
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });

                input.addEventListener('input', () => {
                    this.clearFieldError(input);
                });
            });
        }

        validateField(field) {
            const value = field.value.trim();
            const type = field.type;
            const required = field.hasAttribute('required');

            let isValid = true;
            let errorMessage = '';

            // Validação de campo obrigatório
            if (required && !value) {
                isValid = false;
                errorMessage = 'Este campo é obrigatório';
            }

            // Validação de email
            if (type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Por favor, insira um email válido';
                }
            }

            // Validação de telefone
            if (type === 'tel' && value) {
                const phoneRegex = /^[\d\s\-\(\)\+]+$/;
                if (!phoneRegex.test(value) || value.length < 10) {
                    isValid = false;
                    errorMessage = 'Por favor, insira um telefone válido';
                }
            }

            this.showFieldValidation(field, isValid, errorMessage);
            return isValid;
        }

        showFieldValidation(field, isValid, errorMessage) {
            const group = field.closest('.form__group');
            let errorElement = group.querySelector('.form__error');

            // Remove classes anteriores
            field.classList.remove('error', 'success');
            
            if (errorElement) {
                errorElement.remove();
            }

            if (!isValid) {
                field.classList.add('error');
                errorElement = document.createElement('span');
                errorElement.className = 'form__error';
                errorElement.textContent = errorMessage;
                group.appendChild(errorElement);
            } else if (field.value.trim()) {
                field.classList.add('success');
            }
        }

        clearFieldError(field) {
            field.classList.remove('error');
            const group = field.closest('.form__group');
            const errorElement = group.querySelector('.form__error');
            if (errorElement) {
                errorElement.remove();
            }
        }

        validateForm(form) {
            const inputs = form.querySelectorAll('.form__input[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });

            // Validar checkboxes obrigatórios
            const requiredCheckboxes = form.querySelectorAll('input[type="checkbox"][required]');
            requiredCheckboxes.forEach(checkbox => {
                if (!checkbox.checked) {
                    isValid = false;
                    this.showCheckboxError(checkbox, 'Este campo é obrigatório');
                }
            });

            return isValid;
        }

        showCheckboxError(checkbox, message) {
            const label = checkbox.closest('.form__checkbox');
            let errorElement = label.querySelector('.form__error');

            if (errorElement) {
                errorElement.remove();
            }

            errorElement = document.createElement('span');
            errorElement.className = 'form__error';
            errorElement.textContent = message;
            label.appendChild(errorElement);
        }

        handleRegistrationSubmit() {
            if (!this.validateForm(this.registrationForm)) {
                this.showNotification('Por favor, corrija os erros no formulário', 'error');
                return;
            }

            // Simular envio do formulário
            this.showLoadingState(this.registrationForm);

            setTimeout(() => {
                this.hideLoadingState(this.registrationForm);
                this.showNotification('Inscrição realizada com sucesso! Em breve você receberá um email de confirmação.', 'success');
                this.registrationForm.reset();
            }, 2000);
        }

        handleNewsletterSubmit() {
            const emailInput = this.newsletterForm.querySelector('input[type="email"]');
            
            if (!this.validateField(emailInput)) {
                return;
            }

            this.showLoadingState(this.newsletterForm);

            setTimeout(() => {
                this.hideLoadingState(this.newsletterForm);
                this.showNotification('Inscrição na newsletter realizada com sucesso!', 'success');
                emailInput.value = '';
            }, 1500);
        }

        showLoadingState(form) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.classList.add('loading');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            }
        }

        hideLoadingState(form) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.innerHTML = submitBtn.getAttribute('data-original-text') || 'Enviar';
            }
        }

        showNotification(message, type = 'info') {
            // Remove notificação anterior se existir
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }

            const notification = document.createElement('div');
            notification.className = `notification notification--${type}`;
            notification.innerHTML = `
                <span>${message}</span>
                <button class="notification__close">&times;</button>
            `;

            document.body.appendChild(notification);

            // Mostrar notificação
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);

            // Auto remover após 5 segundos
            setTimeout(() => {
                this.hideNotification(notification);
            }, 5000);

            // Botão de fechar
            const closeBtn = notification.querySelector('.notification__close');
            closeBtn.addEventListener('click', () => {
                this.hideNotification(notification);
            });
        }

        hideNotification(notification) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }

    // =============================================================================
    // SCROLL ANIMATIONS
    // =============================================================================

    class ScrollAnimations {
        constructor() {
            this.animatedElements = document.querySelectorAll('.animate-on-scroll');
            this.backToTopBtn = document.getElementById('back-to-top');
            
            this.init();
        }

        init() {
            this.setupScrollAnimations();
            this.setupBackToTop();
        }

        setupScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            this.animatedElements.forEach(element => {
                observer.observe(element);
            });
        }

        setupBackToTop() {
            if (this.backToTopBtn) {
                // Mostrar/esconder botão baseado no scroll
                const scrollHandler = throttle(() => {
                    if (window.pageYOffset > 300) {
                        this.backToTopBtn.classList.add('visible');
                    } else {
                        this.backToTopBtn.classList.remove('visible');
                    }
                }, 100);

                window.addEventListener('scroll', scrollHandler);

                // Funcionalidade de voltar ao topo
                this.backToTopBtn.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        }
    }

    // =============================================================================
    // LAZY LOADING DE IMAGENS
    // =============================================================================

    class LazyLoader {
        constructor() {
            this.images = document.querySelectorAll('img[data-src]');
            this.init();
        }

        init() {
            if ('IntersectionObserver' in window) {
                this.setupIntersectionObserver();
            } else {
                this.loadAllImages();
            }
        }

        setupIntersectionObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            });

            this.images.forEach(image => {
                observer.observe(image);
            });
        }

        loadImage(img) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
        }

        loadAllImages() {
            this.images.forEach(image => {
                this.loadImage(image);
            });
        }
    }

    // =============================================================================
    // PERFORMANCE MONITORING
    // =============================================================================

    class PerformanceMonitor {
        constructor() {
            this.init();
        }

        init() {
            // Log de performance no console (apenas em desenvolvimento)
            if (window.location.hostname === 'localhost') {
                this.logPerformanceMetrics();
            }
        }

        logPerformanceMetrics() {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.group('📊 Performance Metrics');
                    console.log('📄 DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
                    console.log('🔄 Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                    console.log('🌐 Network Time:', perfData.responseEnd - perfData.requestStart, 'ms');
                    console.groupEnd();
                }, 1000);
            });
        }
    }

    // =============================================================================
    // ACCESSIBILITY IMPROVEMENTS
    // =============================================================================

    class AccessibilityEnhancer {
        constructor() {
            this.init();
        }

        init() {
            this.setupKeyboardNavigation();
            this.setupFocusManagement();
            this.setupARIALabels();
        }

        setupKeyboardNavigation() {
            // Navegação por teclado no menu mobile
            const navToggle = document.getElementById('navbar-toggle');
            if (navToggle) {
                navToggle.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navToggle.click();
                    }
                });
            }

            // ESC para fechar menu mobile
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    const nav = new Navigation();
                    nav.closeMobileMenu();
                }
            });
        }

        setupFocusManagement() {
            // Melhoria do foco para elementos interativos
            const focusableElements = document.querySelectorAll(
                'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
            );

            focusableElements.forEach(element => {
                element.addEventListener('focus', () => {
                    element.classList.add('focused');
                });

                element.addEventListener('blur', () => {
                    element.classList.remove('focused');
                });
            });
        }

        setupARIALabels() {
            // Adicionar ARIA labels onde necessário
            const backToTopBtn = document.getElementById('back-to-top');
            if (backToTopBtn && !backToTopBtn.getAttribute('aria-label')) {
                backToTopBtn.setAttribute('aria-label', 'Voltar ao topo da página');
            }

            const navToggle = document.getElementById('navbar-toggle');
            if (navToggle && !navToggle.getAttribute('aria-label')) {
                navToggle.setAttribute('aria-label', 'Abrir menu de navegação');
            }
        }
    }

    // =============================================================================
    // INITIALIZATION
    // =============================================================================

    document.addEventListener('DOMContentLoaded', function() {
        // Inicializar todas as funcionalidades
        new Navigation();
        new ScheduleTabs();
        new FormHandler();
        new ScrollAnimations();
        new LazyLoader();
        new PerformanceMonitor();
        new AccessibilityEnhancer();

        // Adicionar classe para elementos que devem animar no scroll
        const elementsToAnimate = document.querySelectorAll(
            '.about__item, .speaker-card, .schedule__item, .contact__item'
        );
        
        elementsToAnimate.forEach(element => {
            element.classList.add('animate-on-scroll');
        });

        console.log('🚀 Event Website Initialized Successfully!');
    });

    // =============================================================================
    // CSS ADICIONAL PARA FUNCIONALIDADES JS
    // =============================================================================

    const additionalCSS = `
        /* Notificações */
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            display: flex;
            align-items: center;
            gap: 1rem;
            max-width: 400px;
            box-shadow: var(--shadow-lg);
        }

        .notification.show {
            transform: translateX(0);
        }

        .notification--success {
            background: var(--accent-color);
        }

        .notification--error {
            background: #ef4444;
        }

        .notification--info {
            background: var(--primary-color);
        }

        .notification__close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Estados de validação do formulário */
        .form__input.error {
            border-color: #ef4444;
            background-color: #fef2f2;
        }

        .form__input.success {
            border-color: var(--accent-color);
            background-color: #f0fdf4;
        }

        .form__error {
            display: block;
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }

        /* Estado de loading para botões */
        .btn.loading {
            opacity: 0.7;
            cursor: not-allowed;
        }

        /* Foco melhorado para acessibilidade */
        .focused {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }

        /* Header scrolled */
        .header.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: var(--shadow-md);
        }

        /* Lazy loading images */
        img[data-src] {
            opacity: 0;
            transition: opacity 0.3s;
        }

        img.loaded {
            opacity: 1;
        }

        /* Animações de scroll */
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }

        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }

        /* Menu mobile body lock */
        body.menu-open {
            overflow: hidden;
        }
    `;

    // Injetar CSS adicional
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalCSS;
    document.head.appendChild(styleSheet);

})();