const langSwitcher = document.querySelector(".language-switcher");
const langBtns = document.querySelectorAll(".lang-btn");

langBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        langBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (btn.dataset.lang === "es") {
            langSwitcher.classList.add("es-active");
        } else {
            langSwitcher.classList.remove("es-active");
        }
    });
});

// Language data object
const languageData = {
    en: {
        // Page Title
        'page-title': 'About Us - Signoco Refrigeration | Barcelona',

        // Navigation
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-products': 'Products',
        'nav-industries': 'Industries',
        'nav-contact': 'Contact',
        'nav-get-quote': 'Get Quote',

        // Hero Section
        'hero-title': 'Engineering Cooling Excellence Since 2009',
        'hero-subtitle': 'Pioneering refrigeration solutions across Spain with innovative technology, unmatched expertise, and a commitment to sustainable cooling for commercial and industrial applications.',

        // Story Section
        'story-intro': 'At the intersection of innovation and reliability, Signoco Refrigeration stands as a testament to Spanish engineering excellence in temperature control solutions.',
        'story-title': 'Our Story',
        'story-text-1': 'Founded in Barcelona in 2009, Signoco Refrigeration began with a simple vision: to provide reliable, energy-efficient cooling solutions for Spain\'s growing commercial sector. What started as a small team of refrigeration engineers has evolved into one of Spain\'s most trusted refrigeration solution providers.',
        'story-text-2': 'Our journey has been marked by continuous innovation, strategic partnerships with leading equipment manufacturers, and an unwavering commitment to customer satisfaction. Today, we serve clients across Spain, from small businesses to multinational corporations.',

        // Journey Section
        'journey-title': 'The Evolution of Excellence',
        'journey-subtitle': 'A visual journey through the key milestones that define Signoco\'s growth and innovation in the refrigeration industry.',

        // Timeline Cards
        'year-1965': '1965',
        'year-1985': '1985',
        'year-1990': '1990',
        'year-2005': '2005',
        'year-2015': '2015',
        'year-2023': '2023',

        'card-title-1': 'The Foundation',
        'card-desc-1': 'Signoco Refrigeration was founded, pioneering plug-in cabinets and cold room production with innovative cooling technology that set new industry standards.',

        'card-title-2': 'Innovation Era',
        'card-desc-2': 'Revolutionized the industry with remote refrigerated cabinets, introducing energy-efficient technology that reduced power consumption by 40%.',

        'card-title-3': 'Strategic Growth',
        'card-desc-3': 'Acquired Detroit, a leader in remote cabinet production, expanding manufacturing capabilities and establishing European distribution networks.',

        'card-title-4': 'Unified Vision',
        'card-desc-4': 'Merged companies to establish Signoco Refrigeration as a unified force, combining expertise to deliver comprehensive cooling solutions across Europe.',

        'card-title-5': 'Global Reach',
        'card-desc-5': 'Expanded operations internationally, establishing partnerships in 15 countries and implementing AI-powered energy management systems.',

        'card-title-6': 'Sustainable Future',
        'card-desc-6': 'Leading the industry with eco-friendly refrigeration solutions, achieving 60% energy savings and implementing smart IoT technology across all systems.',

        'year-1': 'Year 1',
        'year-20': 'Year 20',
        'year-25': 'Year 25',
        'year-40': 'Year 40',
        'year-50': 'Year 50',
        'year-58': 'Year 58',

        // Vision Section
        'vision-title': 'Our Vision Forward',
        'vision-subtitle': 'Guiding principles that drive our commitment to excellence in refrigeration technology.',
        'vision-1-title': 'Innovation',
        'vision-1-text': 'Continuously advancing refrigeration technology through research, development, and implementation of cutting-edge solutions.',
        'vision-2-title': 'Sustainability',
        'vision-2-text': 'Committed to eco-friendly practices and energy-efficient systems that reduce environmental impact while maintaining peak performance.',
        'vision-3-title': 'Partnership',
        'vision-3-text': 'Building lasting relationships with clients through transparent communication, reliable service, and customized solutions.',

        // CTA Section
        'cta-title': 'Ready to Upgrade Your Refrigeration System?',
        'cta-subtitle': 'Contact us today for a free consultation and a customized quote tailored for your business.',
        'cta-button': 'Get a Quote',

        // Footer
        'footer-desc': 'Leading refrigeration solutions provider in Barcelona, serving commercial and industrial clients across Spain with high-quality, energy-efficient systems.',
        'footer-links': 'Quick Links',
        'footer-services': 'Our Services',
        'footer-contact': 'Contact Info',

        'nav-home': 'Home',
        'nav-home-text': 'Home',
        'nav-services-text': 'Services',
        'nav-products-text': 'Products',
        'nav-industries-text': 'Industries',
        'nav-projects-text': 'Projects',
        'nav-contact-text': 'Contact',

        'service-remote': 'Remote Systems',
            'service-plugin': 'Plug-in Units',
            'service-coldrooms': 'Cold Rooms',
            'service-refrigeration-systems': 'Refrigeration Systems',
            'service-islands': 'Islands',
            'service-freezers': 'Freezers',

        'contact-address-title': 'Address',
        'contact-address': 'Carrer de la Indústria, 123<br>08025 Barcelona, Spain',
        'contact-phone-title': 'Phone',
        'contact-email-title': 'Email',
        'contact-hours-title': 'Business Hours',
        'contact-hours': 'Mon-Fri: 8:00-18:00<br>Sat: 9:00-13:00',

        'footer-rights': 'All rights reserved.',
        'privacy-policy': 'Privacy Policy',
        'terms-conditions': 'Terms & Conditions',
        'cookie-policy': 'Cookie Policy',
        'sitemap': 'Sitemap',

        // Sticky CTA
        'sticky-quote': 'Get Quote',
        'sticky-quote-text': 'Get Quote',
        'sticky-whatsapp': 'WhatsApp',
        'sticky-whatsapp-text': 'WhatsApp'
    },

    es: {
        // Page Title
        'page-title': 'Sobre Nosotros - Signoco Refrigeración | Barcelona',

        // Navigation
        'nav-about': 'Acerca de',
        'nav-services': 'Servicios',
        'nav-products': 'Productos',
        'nav-industries': 'Industrias',
        'nav-contact': 'Contacto',
        'nav-get-quote': 'Pedir presupuesto',

        // Hero Section
        'hero-title': 'Ingeniería de Excelencia en Enfriamiento Desde 2009',
        'hero-subtitle': 'Soluciones pioneras de refrigeración en toda España con tecnología innovadora, experiencia incomparable y un compromiso con el enfriamiento sostenible para aplicaciones comerciales e industriales.',

        // Story Section
        'story-intro': 'En la intersección de la innovación y la confiabilidad, Signoco Refrigeration se erige como un testimonio de la excelencia de la ingeniería española en soluciones de control de temperatura.',
        'story-title': 'Nuestra Historia',
        'story-text-1': 'Fundada en Barcelona en 2009, Signoco Refrigeration comenzó con una visión simple: proporcionar soluciones de enfriamiento confiables y energéticamente eficientes para el creciente sector comercial de España. Lo que comenzó como un pequeño equipo de ingenieros de refrigeración ha evolucionado hasta convertirse en uno de los proveedores de soluciones de refrigeración más confiables de España.',
        'story-text-2': 'Nuestro viaje ha estado marcado por la innovación continua, asociaciones estratégicas con fabricantes líderes de equipos y un compromiso inquebrantable con la satisfacción del cliente. Hoy, servimos a clientes en toda España, desde pequeñas empresas hasta corporaciones multinacionales.',

        // Journey Section
        'journey-title': 'La Evolución de la Excelencia',
        'journey-subtitle': 'Un recorrido visual por los hitos clave que definen el crecimiento e innovación de Signoco en la industria de la refrigeración.',

        // Timeline Cards
        'year-1965': '1965',
        'year-1985': '1985',
        'year-1990': '1990',
        'year-2005': '2005',
        'year-2015': '2015',
        'year-2023': '2023',

        'card-title-1': 'Los Cimientos',
        'card-desc-1': 'Signoco Refrigeration fue fundada, pionera en gabinetes enchufables y producción de cámaras frigoríficas con tecnología de enfriamiento innovadora que estableció nuevos estándares en la industria.',

        'card-title-2': 'Era de Innovación',
        'card-desc-2': 'Revolucionó la industria con gabinetes refrigerados remotos, introduciendo tecnología energéticamente eficiente que redujo el consumo de energía en un 40%.',

        'card-title-3': 'Crecimiento Estratégico',
        'card-desc-3': 'Adquirió Detroit, líder en producción de gabinetes remotos, expandiendo capacidades de fabricación y estableciendo redes de distribución europeas.',

        'card-title-4': 'Visión Unificada',
        'card-desc-4': 'Fusionó empresas para establecer Signoco Refrigeration como una fuerza unificada, combinando experiencia para ofrecer soluciones integrales de enfriamiento en toda Europa.',

        'card-title-5': 'Alcance Global',
        'card-desc-5': 'Expandió operaciones internacionalmente, estableciendo asociaciones en 15 países e implementando sistemas de gestión de energía con IA.',

        'card-title-6': 'Futuro Sostenible',
        'card-desc-6': 'Liderando la industria con soluciones de refrigeración ecológicas, logrando un 60% de ahorro energético e implementando tecnología IoT inteligente en todos los sistemas.',

        'year-1': 'Año 1',
        'year-20': 'Año 20',
        'year-25': 'Año 25',
        'year-40': 'Año 40',
        'year-50': 'Año 50',
        'year-58': 'Año 58',

        // Vision Section
        'vision-title': 'Nuestra Visión Futura',
        'vision-subtitle': 'Principios rectores que impulsan nuestro compromiso con la excelencia en tecnología de refrigeración.',
        'vision-1-title': 'Innovación',
        'vision-1-text': 'Avanzando continuamente en la tecnología de refrigeración a través de investigación, desarrollo e implementación de soluciones de vanguardia.',
        'vision-2-title': 'Sostenibilidad',
        'vision-2-text': 'Comprometidos con prácticas ecológicas y sistemas energéticamente eficientes que reducen el impacto ambiental manteniendo un rendimiento óptimo.',
        'vision-3-title': 'Asociación',
        'vision-3-text': 'Construyendo relaciones duraderas con clientes a través de comunicación transparente, servicio confiable y soluciones personalizadas.',

        // CTA Section
        'cta-title': '¿Listo para Actualizar Su Sistema de Refrigeración?',
        'cta-subtitle': 'Contáctenos hoy para una consulta gratuita y un presupuesto personalizado para su negocio.',
        'cta-button': 'Obtener Presupuesto',

        // Footer
       'footer-desc': 'Proveedor líder de soluciones de refrigeración en Barcelona, atendiendo a clientes comerciales e industriales en toda España con sistemas de alta calidad y eficiencia energética.',
            'footer-links': 'Enlaces Rápidos',
            'footer-services': 'Nuestros Servicios',
            'footer-contact': 'Información de Contacto',

            'nav-home': 'Inicio',
            'nav-home-text': 'Inicio',
            'nav-services-text': 'Servicios',
            'nav-products-text': 'Productos',
            'nav-industries-text': 'Industrias',
            'nav-projects-text': 'Proyectos',
            'nav-contact-text': 'Contacto',

            'service-remote': 'unidades remotas',
            'service-plugin': 'unidades plug-in',
            'service-coldrooms': 'cámaras frigoríficas',
            'service-refrigeration-systems': 'sistemas de refrigeración',
            'service-islands': 'islas refrigeradas',
            'service-freezers': 'congeladores',

            'contact-address-title': 'Dirección',
            'contact-address': 'Carrer de la Indústria, 123<br>08025 Barcelona, España',
            'contact-phone-title': 'Teléfono',
            'contact-email-title': 'Correo Electrónico',
            'contact-hours-title': 'Horario Comercial',
            'contact-hours': 'Lun-Vie: 8:00-18:00<br>Sáb: 9:00-13:00',

            'footer-rights': 'Todos los derechos reservados.',
            'privacy-policy': 'Política de Privacidad',
            'terms-conditions': 'Términos y Condiciones',
            'cookie-policy': 'Política de Cookies',
            'sitemap': 'Mapa del Sitio',

            // Sticky CTA
            'sticky-quote': 'Obtener Presupuesto',
            'sticky-quote-text': 'Obtener Presupuesto',
            'sticky-whatsapp': 'WhatsApp',
            'sticky-whatsapp-text': 'WhatsApp'
    }
};

document.addEventListener('DOMContentLoaded', function () {

    // -------- Navbar scroll effect --------
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.style.paddingTop = '0.5rem';
                navbar.style.paddingBottom = '0.5rem';
                navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.paddingTop = '0.8rem';
                navbar.style.paddingBottom = '0.8rem';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
            }
        });
    }

    // -------- Set current year in footer --------
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // -------- Language switcher --------
    const langButtons = document.querySelectorAll('.lang-btn');
    const langContents = document.querySelectorAll('.lang-content');

    function switchLanguage(lang) {
        langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        langContents.forEach(content => content.classList.toggle('active', content.dataset.lang === lang));

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (languageData[lang] && languageData[lang][key]) {
                const value = languageData[lang][key];
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.value = value;
                } else if (el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', value);
                } else if (el.hasAttribute('title')) {
                    el.setAttribute('title', value);
                } else if (el.hasAttribute('alt')) {
                    el.setAttribute('alt', value);
                } else {
                    const span = el.querySelector('span[data-lang-key-text]');
                    if (span) span.textContent = value;
                    else el.innerHTML = value;
                }
            }
        });

        if (languageData[lang] && languageData[lang]['page-title']) {
            document.title = languageData[lang]['page-title'];
        }
        document.documentElement.lang = lang;
    }

    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.dataset.lang;
            switchLanguage(lang);
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLang);

    // -------- Vision card animations --------
    const visionCards = document.querySelectorAll('.vision-card');
    visionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 + (index * 150));
    });

    // -------- Carousel functionality --------
    const carouselTrack = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.timeline-card');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    const slideDots = document.querySelector('.slide-dots');
    const mobileProgressFill = document.querySelector('.mobile-progress-fill');
    const indicatorFills = document.querySelectorAll('.indicator-fill');

    if (carouselTrack && cards.length > 0) {
        let currentIndex = 0;
        let cardWidth;
        let cardsPerView;
        const totalCards = cards.length;
        const gap = 30;

        function calculateDimensions() {
            const card = cards[0];
            cardWidth = card.offsetWidth + gap;

            if (window.innerWidth >= 1400) cardsPerView = 4;
            else if (window.innerWidth >= 992) cardsPerView = 3;
            else if (window.innerWidth >= 768) cardsPerView = 2;
            else cardsPerView = 1;

            if (currentIndex > totalCards - cardsPerView) {
                currentIndex = Math.max(totalCards - cardsPerView, 0);
            }

            updateCarousel();
        }

        function updateCarousel() {
            const maxTranslateIndex = Math.max(totalCards - cardsPerView, 0);
            const translateIndex = Math.min(currentIndex, maxTranslateIndex);
            const translateX = -translateIndex * cardWidth;
            carouselTrack.style.transform = `translateX(${translateX}px)`;

            updateDots();
            updateNavigationButtons();
            updateProgressBar();
            updateIndicatorFills();
        }

        function updateIndicatorFills() {
            const progressPercentage = ((currentIndex + 1) / totalCards) * 100;
            indicatorFills.forEach(fill => fill.style.width = `${progressPercentage}%`);
        }

        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
        }

        function updateProgressBar() {
            if (mobileProgressFill) {
                const progressPercentage = (currentIndex / (totalCards - cardsPerView)) * 100;
                mobileProgressFill.style.width = `${progressPercentage}%`;
            }
        }

        function updateNavigationButtons() {
            if (prevBtn) prevBtn.disabled = currentIndex === 0;
            if (nextBtn) nextBtn.disabled = currentIndex >= totalCards - cardsPerView;
        }

        function createDots() {
            if (!slideDots) return;
            slideDots.innerHTML = '';
            const totalDots = totalCards - cardsPerView + 1;
            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (i === currentIndex) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateCarousel();
                });
                slideDots.appendChild(dot);
            }
        }

        if (prevBtn) prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateCarousel(); } });
        if (nextBtn) nextBtn.addEventListener('click', () => { if (currentIndex < totalCards - cardsPerView) { currentIndex++; updateCarousel(); } });

        // Touch swipe
        let startX = 0, endX = 0;
        carouselTrack.addEventListener('touchstart', e => startX = e.touches[0].clientX);
        carouselTrack.addEventListener('touchend', e => { endX = e.changedTouches[0].clientX; handleSwipe(); });

        function handleSwipe() {
            const diff = startX - endX;
            if (Math.abs(diff) > 50) {
                if (diff > 0 && currentIndex < totalCards - cardsPerView) currentIndex++;
                else if (diff < 0 && currentIndex > 0) currentIndex--;
                updateCarousel();
            }
        }

        // Keyboard navigation
        document.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft' && currentIndex > 0) currentIndex--;
            else if (e.key === 'ArrowRight' && currentIndex < totalCards - cardsPerView) currentIndex++;
            updateCarousel();
        });

        // Window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(calculateDimensions, 150);
        });

        // Initial setup
        calculateDimensions();
        createDots();
    }

});
