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

// Language data object for products page
const languageData = {
    en: {
        // Page Title
        'page-title': 'Products - Signoco Refrigeration | Barcelona',

        // Navigation
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-products': 'Products',
        'nav-industries': 'Industries',
        'nav-contact': 'Contact',
        'nav-get-quote': 'Get Quote',

        // Hero Section
        'hero-title': 'Premium Refrigeration Products',
        'hero-subtitle': 'Discover our comprehensive range of high-performance refrigeration solutions, from advanced remote systems to efficient plug-in units and custom cold rooms, engineered for maximum reliability and energy efficiency.',

        // prodcusts
        "cat-remote": "Remote",
        "cat-plugin": "Plug-in",
        "cat-coldrooms": "Cold Rooms",
        "cat-systems": "Refrigeration Systems",

        // CTA Section
        'cta-title': 'Ready for Premium Refrigeration Solutions?',
        'cta-subtitle': 'Contact our product specialists today for personalized recommendations, technical specifications, and competitive pricing for your specific refrigeration requirements.',
        'cta-button-primary': 'Request Product Catalog',
        'cta-button-secondary': 'Technical Consultation',

        // Footer
        'footer-desc': 'Leading refrigeration solutions provider in Barcelona, serving commercial and industrial clients across Spain with high-quality, energy-efficient systems.',
        'footer-links': 'Quick Links',
        'footer-products': 'Our Products',
        'footer-contact': 'Contact Info',

        'nav-home': 'Home',
        'nav-home-text': 'Home',
        'nav-about-text': 'About',
        'nav-services-text': 'Services',
        'nav-products-text': 'Products',
        'nav-industries-text': 'Industries',
        'nav-contact-text': 'Contact',

        'category1-text': 'Remote Systems',
        'category2-text': 'Plug-in Units',
        'category3-text': 'Cold Rooms',
        'category4-text': 'Refrigeration Systems',

        'tech1-text': 'Inverter Technology',
        'tech2-text': 'Smart Controls',

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
        'page-title': 'Productos - Signoco Refrigeración | Barcelona',

        // Navigation
        'nav-about': 'Acerca de',
        'nav-services': 'Servicios',
        'nav-products': 'Productos',
        'nav-industries': 'Industrias',
        'nav-contact': 'Contacto',
        'nav-get-quote': 'Pedir presupuesto',

        // Hero Section
        'hero-title': 'Productos Premium de Refrigeración',
        'hero-subtitle': 'Descubra nuestra gama completa de soluciones de refrigeración de alto rendimiento, desde sistemas remotos avanzados hasta unidades enchufables eficientes y cámaras frigoríficas personalizadas, diseñadas para máxima confiabilidad y eficiencia energética.',

        // prodcusts
        "cat-remote": "Remoto",
        "cat-plugin": "Plug-in",
        "cat-coldrooms": "Cámaras Frías",
        "cat-systems": "Sistemas de Refrigeración",

        // CTA Section
        'cta-title': '¿Listo para Soluciones de Refrigeración Premium?',
        'cta-subtitle': 'Contacte a nuestros especialistas en productos hoy para recomendaciones personalizadas, especificaciones técnicas y precios competitivos para sus requisitos específicos de refrigeración.',
        'cta-button-primary': 'Solicitar Catálogo de Productos',
        'cta-button-secondary': 'Consulta Técnica',

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

    // -------- Set current year --------
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

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
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = value;
                else if (el.hasAttribute('placeholder')) el.setAttribute('placeholder', value);
                else if (el.hasAttribute('title')) el.setAttribute('title', value);
                else if (el.hasAttribute('alt')) el.setAttribute('alt', value);
                else {
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

    langButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.dataset.lang;
            switchLanguage(lang);
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLang);

    // -------- Product tabs --------
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productContents = document.querySelectorAll('.product-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            tabBtns.forEach(b => b.classList.remove('active'));
            productContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');

            const tabId = this.getAttribute('data-tab');
            const content = document.getElementById(tabId + '-content');
            if (content) content.classList.add('active');
        });
    });

    // -------- Progress indicator --------
    const progressDots = document.querySelectorAll('.progress-dot');
    const sections = document.querySelectorAll('section[id]');

    function updateProgressIndicator() {
        const scrollPosition = window.scrollY + 100;
        let currentSection = '';

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.clientHeight;
            if (scrollPosition >= top && scrollPosition < top + height) currentSection = section.id;
        });

        progressDots.forEach(dot => {
            dot.classList.toggle('active', dot.getAttribute('data-section') === currentSection);
        });
    }

    progressDots.forEach(dot => {
        dot.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            const target = document.getElementById(sectionId);
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', updateProgressIndicator);
    updateProgressIndicator();

    // -------- Category card hover --------
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        const icon = card.querySelector('.category-icon');
        card.addEventListener('mouseenter', () => { if (icon) icon.style.transform = 'scale(1.15) rotate(8deg)'; });
        card.addEventListener('mouseleave', () => { if (icon) icon.style.transform = 'scale(1) rotate(0deg)'; });
    });

    // -------- CTA buttons --------
    const ctaButtons = document.querySelectorAll('.btn-primary-cta, .btn-outline-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentLang = document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
            if (this.classList.contains('btn-primary-cta')) {
                const message = currentLang === 'es'
                    ? 'Enviando catálogo de productos a su correo electrónico...'
                    : 'Sending product catalog to your email...';
                alert(message);
            } else {
                window.location.href = 'contact.html';
            }
        });
    });

    // -------- Sticky CTA button --------
    const stickyQuoteBtn = document.querySelector('.sticky-cta .quote-btn');
    if (stickyQuoteBtn) {
        stickyQuoteBtn.addEventListener('click', function () {
            window.location.href = 'contact.html#form';
        });
    }

    // -------- Animate elements on scroll --------
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.style.animationPlayState = 'running';
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    setTimeout(() => {
        document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }, 100);

});
