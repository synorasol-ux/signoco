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
            'page-title': 'Plug-In Refrigeration Units | Signoco Refrigeration | Barcelona',

            // Navigation
            'nav-about': 'About',
            'nav-services': 'Services',
            'nav-products': 'Products',
            'nav-industries': 'Industries',
            'nav-contact': 'Contact',
            'nav-get-quote': 'Get Quote',

            // Hero Section
            'hero-title': 'Plug-In Refrigeration Systems',
            'hero-subtitle': 'Ready-to-use, energy-efficient plug-in refrigeration units for commercial spaces. Easy installation, immediate operation, and optimal performance for your business.',

            // Stats
            'stat-energy': '30%',
            'stat-energy-label': 'Energy Efficient',
            'stat-install': '15 min',
            'stat-install-label': 'Quick Installation',
            'stat-temp': '+2°C to +8°C',
            'stat-temp-label': 'Temperature Range',
            'stat-warranty': '2 Years',
            'stat-warranty-label': 'Warranty',

            // Benefits Section
            'benefits-title': 'Why Choose Plug-In Systems',
            'benefits-subtitle': 'Discover the advantages of our plug-in refrigeration solutions designed for modern businesses.',
            'benefit-1-title': 'Easy Installation',
            'benefit-1-desc': 'Simply plug into a standard electrical outlet - no complex installation required. Ready to use in minutes.',
            'benefit-2-title': 'Energy Efficient',
            'benefit-2-desc': 'Advanced compressor technology and insulation ensure optimal energy consumption and cost savings.',
            'benefit-3-title': 'Low Maintenance',
            'benefit-3-desc': 'Self-contained units with minimal moving parts reduce maintenance needs and ensure reliable operation.',

            // Products Section
            'products-title': 'Our Plug-In Products',
            'products-subtitle': 'Explore our range of high-quality plug-in refrigeration units for various commercial applications.',
            'product-1-title': 'Display Cabinets',
            'product-1-desc': 'Glass-front display cabinets perfect for supermarkets, convenience stores, and bakeries.',
            'product-2-title': 'Worktop Cabinets',
            'product-2-desc': 'Multi-purpose cabinets with worktop surface for food preparation and storage.',
            'product-3-title': 'Bottle Coolers',
            'product-3-desc': 'Compact coolers designed for beverage storage in bars, restaurants, and hotels.',

            // Specifications
            'spec-capacity': 'Capacity',
            'spec-temp': 'Temperature',

            // Applications Section
            'applications-title': 'Ideal Applications',
            'applications-subtitle': 'Our plug-in systems are perfect for various commercial environments.',
            'app-1-title': 'Retail Stores',
            'app-1-desc': 'Supermarkets, convenience stores, and specialty shops',
            'app-2-title': 'Food Service',
            'app-2-desc': 'Restaurants, cafes, bakeries, and catering services',
            'app-3-title': 'Hospitality',
            'app-3-desc': 'Hotels, bars, and conference centers',
            'app-4-title': 'Healthcare',
            'app-4-desc': 'Hospitals, clinics, and laboratories',

            // CTA Section
            'cta-title': 'Ready for Plug-In Solutions?',
            'cta-subtitle': 'Contact our experts today for a free consultation and find the perfect plug-in refrigeration system for your business needs.',
            'cta-button': 'Request Free Quote',

            // Footer
            'footer-desc': 'Leading provider of premium plug-in refrigeration solutions in Barcelona and across Spain, delivering ready-to-use cooling systems for commercial and hospitality sectors.',
            'footer-links': 'Quick Links',
            'footer-services': 'Plug-In Products',
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

            'product-display': 'Display Cabinets',
            'product-worktop': 'Worktop Cabinets',
            'product-bottle': 'Bottle Coolers',
            'product-freezer': 'Freezers',
            'product-counter': 'Service Counters',
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
            'page-title': 'Unidades de Refrigeración Plug-In | Signoco Refrigeración | Barcelona',

            // Navigation
            'nav-about': 'Acerca de',
            'nav-services': 'Servicios',
            'nav-products': 'Productos',
            'nav-industries': 'Industrias',
            'nav-contact': 'Contacto',
            'nav-get-quote': 'Pedir Presupuesto',

            // Hero Section
            'hero-title-es': 'Sistemas de Refrigeración Plug-In',
            'hero-subtitle-es': 'Unidades de refrigeración plug-in listas para usar y energéticamente eficientes para espacios comerciales. Instalación fácil, operación inmediata y rendimiento óptimo para su negocio.',

            // Stats
            'stat-energy': '30%',
            'stat-energy-label': 'Eficiencia Energética',
            'stat-install': '15 min',
            'stat-install-label': 'Instalación Rápida',
            'stat-temp': '+2°C a +8°C',
            'stat-temp-label': 'Rango de Temperatura',
            'stat-warranty': '2 Años',
            'stat-warranty-label': 'Garantía',

            // Benefits Section
            'benefits-title-es': 'Por Qué Elegir Sistemas Plug-In',
            'benefits-subtitle-es': 'Descubra las ventajas de nuestras soluciones de refrigeración plug-in diseñadas para negocios modernos.',
            'benefit-1-title-es': 'Fácil Instalación',
            'benefit-1-desc-es': 'Simplemente conecte a un enchufe estándar - no se requiere instalación compleja. Listo para usar en minutos.',
            'benefit-2-title-es': 'Eficiencia Energética',
            'benefit-2-desc-es': 'Tecnología avanzada de compresor y aislamiento garantizan consumo energético óptimo y ahorro de costos.',
            'benefit-3-title-es': 'Bajo Mantenimiento',
            'benefit-3-desc-es': 'Unidades autónomas con partes móviles mínimas reducen necesidades de mantenimiento y aseguran operación confiable.',

            // Products Section
            'products-title-es': 'Nuestros Productos Plug-In',
            'products-subtitle-es': 'Explore nuestra gama de unidades de refrigeración plug-in de alta calidad para diversas aplicaciones comerciales.',
            'product-1-title-es': 'Vitrinas Expositoras',
            'product-1-desc-es': 'Vitrinas con frente de vidrio perfectas para supermercados, tiendas de conveniencia y panaderías.',
            'product-2-title-es': 'Gabinetes de Encimera',
            'product-2-desc-es': 'Gabinetes multipropósito con superficie de trabajo para preparación y almacenamiento de alimentos.',
            'product-3-title-es': 'Enfriadores de Botellas',
            'product-3-desc-es': 'Enfriadores compactos diseñados para almacenamiento de bebidas en bares, restaurantes y hoteles.',

            // Specifications
            'spec-capacity-es': 'Capacidad',
            'spec-temp-es': 'Temperatura',

            // Applications Section
            'applications-title-es': 'Aplicaciones Ideales',
            'applications-subtitle-es': 'Nuestros sistemas plug-in son perfectos para diversos entornos comerciales.',
            'app-1-title-es': 'Tiendas Minoristas',
            'app-1-desc-es': 'Supermercados, tiendas de conveniencia y tiendas especializadas',
            'app-2-title-es': 'Servicio de Alimentos',
            'app-2-desc-es': 'Restaurantes, cafés, panaderías y servicios de catering',
            'app-3-title-es': 'Hospitalidad',
            'app-3-desc-es': 'Hoteles, bares y centros de conferencias',
            'app-4-title-es': 'Salud',
            'app-4-desc-es': 'Hospitales, clínicas y laboratorios',

            // CTA Section
            'cta-title-es': '¿Listo para Soluciones Plug-In?',
            'cta-subtitle-es': 'Contacte a nuestros expertos hoy para una consulta gratuita y encuentre el sistema de refrigeración plug-in perfecto para las necesidades de su negocio.',
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