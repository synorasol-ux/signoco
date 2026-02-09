document.addEventListener('DOMContentLoaded', function () {
    // -------- Set current year in footer --------
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // -------- Language switcher --------
    const langButtons = document.querySelectorAll('.lang-btn');
    const langContents = document.querySelectorAll('.lang-content');
    const langSlider = document.querySelector('.lang-slider');

    // Language data for this page
    const languageData = {
        en: {
            // Page Title
            'page-title': 'Cold Rooms & Refrigeration Rooms | Signoco Refrigeration | Barcelona',

            // Navigation
            'nav-about': 'About',
            'nav-services': 'Services',
            'nav-products': 'Products',
            'nav-industries': 'Industries',
            'nav-contact': 'Contact',
            'nav-get-quote': 'Get Quote',

            // Hero Section
            'hero-title': 'Cold Rooms & Refrigeration Rooms',
            'hero-subtitle': 'Custom-built, energy-efficient cold storage solutions for industrial, commercial, and institutional applications. Engineered for precision temperature control and maximum durability.',

            // Stats
            'stat-temp': '-40°C to +15°C',
            'stat-temp-label': 'Temperature Range',
            'stat-size': '5-500 m³',
            'stat-size-label': 'Custom Sizes',
            'stat-efficiency': 'A+++',
            'stat-efficiency-label': 'Energy Class',
            'stat-warranty': '5 Years',
            'stat-warranty-label': 'Warranty',

            // Types Section
            'types-title': 'Cold Room Types',
            'types-subtitle': 'Explore our comprehensive range of cold room solutions designed for different temperature requirements and applications.',
            'badge-positive': 'Positive',
            'badge-negative': 'Negative',
            'badge-blast': 'Blast',
            'type-1-title': 'Positive Cold Rooms',
            'type-1-desc': 'For temperatures above 0°C. Ideal for fresh food storage, vegetables, fruits, and dairy products.',
            'type-2-title': 'Negative Cold Rooms',
            'type-2-desc': 'For freezing and deep freezing applications. Perfect for meat, fish, frozen foods, and ice cream storage.',
            'type-3-title': 'Blast Freezers',
            'type-3-desc': 'Rapid freezing technology that preserves food quality by quickly passing through the critical temperature zone.',

            // Specifications
            'spec-temp': 'Temperature',
            'spec-humidity': 'Humidity',
            'spec-freezing': 'Freezing',
            'spec-speed': 'Freezing Speed',

            // Features Section
            'features-title': 'Advanced Features',
            'features-subtitle': 'Our cold rooms incorporate state-of-the-art technology and premium materials for optimal performance.',
            'feature-1-title': 'Premium Insulation',
            'feature-1-desc': 'High-density PIR/PUR panels with thermal bridges for maximum energy efficiency and temperature stability.',
            'feature-2-title': 'Smart Control Systems',
            'feature-2-desc': 'Advanced digital controllers with remote monitoring, alarms, and data logging capabilities.',
            'feature-3-title': 'Eco-Friendly',
            'feature-3-desc': 'Low-GWP refrigerants and energy-efficient compressors for reduced environmental impact.',

            // Applications Section
            'applications-title': 'Industry Applications',
            'applications-subtitle': 'Our cold room solutions serve a wide range of industries and applications.',
            'app-1-title': 'Food Industry',
            'app-1-desc': 'Restaurants, supermarkets, food processing plants, and distribution centers',
            'app-2-title': 'Pharmaceutical',
            'app-2-desc': 'Hospitals, laboratories, pharmacies, and research facilities',
            'app-3-title': 'Beverage',
            'app-3-desc': 'Wineries, breweries, beverage production, and storage facilities',
            'app-4-title': 'Laboratory',
            'app-4-desc': 'Research labs, testing facilities, and educational institutions',

            // Customization Section
            'custom-title': 'Fully Customizable',
            'custom-subtitle': 'Every cold room is tailored to your specific requirements. Choose from a wide range of customization options.',

            // CTA Section
            'cta-title': 'Need a Custom Cold Room?',
            'cta-subtitle': 'Our engineering team is ready to design and build the perfect cold storage solution for your specific needs. Get a free consultation and quote today.',
            'cta-button': 'Request Free Quote',

            // Footer
            'footer-desc': 'Leading provider of custom-built cold room solutions in Barcelona and across Spain, specializing in industrial and commercial refrigeration systems with precision temperature control.',
            'footer-links': 'Quick Links',
            'footer-coldrooms': 'Cold Room Types',
            'footer-contact': 'Contact Info',

            'nav-home': 'Home',
            'nav-products': 'Products',
            'nav-remote': 'Remote Systems',
            'nav-plugin': 'Plug-in Units',
            'nav-coldrooms': 'Cold Rooms',
            'nav-contact': 'Contact',

            'service-remote': 'Remote Systems',
            'service-plugin': 'Plug-in Units',
            'service-coldrooms': 'Cold Rooms',
            'service-refrigeration-systems': 'Refrigeration Systems',
            'service-islands': 'Islands',
            'service-freezers': 'Freezers',

            'type-positive': 'Positive Cold Rooms',
            'type-negative': 'Negative Cold Rooms',
            'type-blast': 'Blast Freezers',
            'type-pharma': 'Pharma Rooms',
            'type-modular': 'Modular Rooms',
            'view-all': 'View All',

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
            'page-title': 'Cámaras Frigoríficas y Cuartos Fríos | Signoco Refrigeración | Barcelona',

            // Navigation
            'nav-about': 'Acerca de',
            'nav-services': 'Servicios',
            'nav-products': 'Productos',
            'nav-industries': 'Industrias',
            'nav-contact': 'Contacto',
            'nav-get-quote': 'Pedir Presupuesto',

            // Hero Section
            'hero-title-es': 'Cámaras Frigoríficas y Cuartos Fríos',
            'hero-subtitle-es': 'Soluciones de almacenamiento en frío construidas a medida y energéticamente eficientes para aplicaciones industriales, comerciales e institucionales. Diseñadas para control de temperatura de precisión y máxima durabilidad.',

            // Stats
            'stat-temp': '-40°C a +15°C',
            'stat-temp-label': 'Rango de Temperatura',
            'stat-size': '5-500 m³',
            'stat-size-label': 'Tamaños Personalizados',
            'stat-efficiency': 'A+++',
            'stat-efficiency-label': 'Clase Energética',
            'stat-warranty': '5 Años',
            'stat-warranty-label': 'Garantía',

            // Types Section
            'types-title-es': 'Tipos de Cámaras Frigoríficas',
            'types-subtitle-es': 'Explore nuestra gama completa de soluciones de cámaras frigoríficas diseñadas para diferentes requisitos de temperatura y aplicaciones.',
            'badge-positive': 'Positiva',
            'badge-negative': 'Negativa',
            'badge-blast': 'Rápida',
            'type-1-title-es': 'Cámaras Frigoríficas Positivas',
            'type-1-desc-es': 'Para temperaturas superiores a 0°C. Ideales para almacenamiento de alimentos frescos, verduras, frutas y productos lácteos.',
            'type-2-title-es': 'Cámaras Frigoríficas Negativas',
            'type-2-desc-es': 'Para aplicaciones de congelación y ultracongelación. Perfectas para carne, pescado, alimentos congelados y helados.',
            'type-3-title-es': 'Túneles de Congelación',
            'type-3-desc-es': 'Tecnología de congelación rápida que preserva la calidad de los alimentos pasando rápidamente por la zona crítica de temperatura.',

            // Specifications
            'spec-temp-es': 'Temperatura',
            'spec-humidity-es': 'Humedad',
            'spec-freezing-es': 'Congelación',
            'spec-speed-es': 'Velocidad',

            // Features Section
            'features-title-es': 'Características Avanzadas',
            'features-subtitle-es': 'Nuestras cámaras frigoríficas incorporan tecnología de última generación y materiales premium para un rendimiento óptimo.',
            'feature-1-title-es': 'Aislamiento Premium',
            'feature-1-desc-es': 'Paneles PIR/PUR de alta densidad con puentes térmicos para máxima eficiencia energética y estabilidad de temperatura.',
            'feature-2-title-es': 'Sistemas de Control Inteligente',
            'feature-2-desc-es': 'Controladores digitales avanzados con monitorización remota, alarmas y capacidades de registro de datos.',
            'feature-3-title-es': 'Ecológico',
            'feature-3-desc-es': 'Refrigerantes de bajo PCA y compresores energéticamente eficientes para reducir el impacto ambiental.',

            // Applications Section
            'applications-title-es': 'Aplicaciones Industriales',
            'applications-subtitle-es': 'Nuestras soluciones de cámaras frigoríficas sirven a una amplia gama de industrias y aplicaciones.',
            'app-1-title-es': 'Industria Alimentaria',
            'app-1-desc-es': 'Restaurantes, supermercados, plantas procesadoras de alimentos y centros de distribución',
            'app-2-title-es': 'Farmacéutica',
            'app-2-desc-es': 'Hospitales, laboratorios, farmacias e instalaciones de investigación',
            'app-3-title-es': 'Bebidas',
            'app-3-desc-es': 'Bodegas, cervecerías, producción de bebidas y instalaciones de almacenamiento',
            'app-4-title-es': 'Laboratorio',
            'app-4-desc-es': 'Laboratorios de investigación, instalaciones de pruebas e instituciones educativas',

            // Customization Section
            'custom-title-es': 'Completamente Personalizable',
            'custom-subtitle-es': 'Cada cámara frigorífica está adaptada a sus requisitos específicos. Elija entre una amplia gama de opciones de personalización.',

            // CTA Section
            'cta-title-es': '¿Necesita una Cámara Frigorífica Personalizada?',
            'cta-subtitle-es': 'Nuestro equipo de ingeniería está listo para diseñar y construir la solución de almacenamiento en frío perfecta para sus necesidades específicas. Obtenga una consulta gratuita y presupuesto hoy.',
            'cta-button': 'Solicitar Presupuesto Gratis',

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

    function switchLanguage(lang) {
        // Update language switcher buttons
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update language slider position
        if (langSlider) {
            langSlider.style.transform = lang === 'es' ? 'translateX(calc(100% + 0.25rem))' : 'translateX(0)';
        }

        // Show/hide language content
        langContents.forEach(content => {
            content.classList.toggle('active', content.dataset.lang === lang);
        });

        // Update all elements with data-lang-key
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
                    // Check if element contains a span for text
                    const span = el.querySelector('span[data-lang-key]');
                    if (span) {
                        span.textContent = value;
                    } else {
                        el.innerHTML = value;
                    }
                }
            }
        });

        // Update page title
        if (languageData[lang] && languageData[lang]['page-title']) {
            document.title = languageData[lang]['page-title'];
        }
        document.documentElement.lang = lang;
    }

    // Language switcher event listeners
    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.dataset.lang;
            switchLanguage(lang);
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLang);

    // -------- Navbar scroll effect --------
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
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

    // -------- Back to top functionality --------
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // -------- Animate elements on scroll --------
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // -------- Sticky CTA functionality --------
    const quoteBtn = document.querySelector('.quote-btn');
    if (quoteBtn) {
        quoteBtn.addEventListener('click', function () {
            window.location.href = 'contact-us.html';
        });
    }
});