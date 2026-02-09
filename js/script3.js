
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
// Language data object for services page
const languageData = {
    en: {
        // Page Title
        'page-title': 'Services - Signoco Refrigeration | Barcelona',

        // Navigation
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-products': 'Products',
        'nav-industries': 'Industries',
        'nav-contact': 'Contact',
        'nav-get-quote': 'Get Quote',

        // Hero Section
        'hero-title': 'Comprehensive Refrigeration Services',
        'hero-subtitle': 'From 24/7 emergency support to advanced energy management, we provide complete refrigeration solutions that ensure optimal performance, maximum efficiency, and uninterrupted operations for your business.',

        // Services Section
        'services-title': 'Our Premium Services',
        'services-subtitle': 'We combine cutting-edge technology with expert engineering to deliver comprehensive refrigeration solutions that maximize efficiency, reduce downtime, and optimize your operational costs.',

        // Individual Services
        'service1-title': 'Maintenance Contracts',
        'service1-description': 'Customized maintenance programs designed to extend equipment lifespan, prevent unexpected breakdowns, and ensure regulatory compliance with proactive monitoring and scheduled servicing.',
        'service1-feature1': 'Preventive maintenance scheduling',
        'service1-feature2': 'Priority service response',
        'service1-feature3': 'Parts and labor included',
        'service1-feature4': 'Compliance documentation',

        'service2-title': '24/7 Telemonitoring & Alarms',
        'service2-description': 'Round-the-clock remote monitoring with instant alert systems that detect anomalies before they become critical issues, ensuring immediate response and minimal disruption.',
        'service2-feature1': 'Real-time temperature monitoring',
        'service2-feature2': 'Instant SMS/Email alerts',
        'service2-feature3': 'Predictive failure analysis',
        'service2-feature4': 'Performance reporting dashboards',

        'service3-title': 'Dedicated Call Center',
        'service3-description': 'Professional multilingual support team available 24/7 to handle service requests, provide technical assistance, and coordinate emergency responses with expert guidance.',
        'service3-feature1': 'Multilingual technical support',
        'service3-feature2': 'Service request management',
        'service3-feature3': 'Emergency coordination',
        'service3-feature4': 'Technical troubleshooting assistance',

        'service4-title': '24/7 Emergency Support',
        'service4-description': 'Immediate response emergency services with guaranteed response times to minimize downtime and protect your valuable inventory during critical situations.',
        'service4-feature1': 'Guaranteed 2-hour response time',
        'service4-feature2': 'Emergency spare parts availability',
        'service4-feature3': 'Mobile repair units on standby',
        'service4-feature4': 'Critical temperature recovery',

        'service5-title': 'On-site Technical Assistance',
        'service5-description': 'Certified technicians providing expert on-site support for installations, repairs, and system optimization with state-of-the-art diagnostic tools and equipment.',
        'service5-feature1': 'Certified refrigeration engineers',
        'service5-feature2': 'Advanced diagnostic equipment',
        'service5-feature3': 'Installation and commissioning',
        'service5-feature4': 'System performance optimization',

        'service6-title': 'Unified Monitoring Platform',
        'service6-description': 'Centralized dashboard that integrates multiple refrigeration systems for comprehensive oversight, real-time analytics, and proactive management from a single interface.',
        'service6-feature1': 'Multi-system integration',
        'service6-feature2': 'Customizable dashboard views',
        'service6-feature3': 'Historical data analysis',
        'service6-feature4': 'Mobile app accessibility',

        'service7-title': 'Systems Optimization',
        'service7-description': 'Data-driven analysis and optimization services that identify inefficiencies, reduce energy consumption, and enhance overall system performance for maximum ROI.',
        'service7-feature1': 'Energy efficiency audits',
        'service7-feature2': 'Performance benchmarking',
        'service7-feature3': 'Predictive maintenance planning',
        'service7-feature4': 'ROI analysis and reporting',

        'service8-title': 'Retrofit Solutions',
        'service8-description': 'Modernization of existing refrigeration systems with eco-friendly refrigerants and energy-efficient components to meet current standards while extending equipment life.',
        'service8-feature1': 'Eco-friendly refrigerant upgrades',
        'service8-feature2': 'Energy-efficient component replacement',
        'service8-feature3': 'System compatibility assessment',
        'service8-feature4': 'Regulatory compliance updates',

        'service9-title': 'Energy Management',
        'service9-description': 'Comprehensive energy management strategies that reduce operational costs, minimize environmental impact, and optimize refrigeration system performance through intelligent controls.',
        'service9-feature1': 'Smart energy monitoring',
        'service9-feature2': 'Peak demand management',
        'service9-feature3': 'Carbon footprint reduction',
        'service9-feature4': 'Energy consumption analytics',

        // Categories Section
        'categories-title': 'Service Categories',
        'categories-subtitle': 'Our services are organized into comprehensive categories designed to address every aspect of your refrigeration needs, from routine maintenance to advanced technological solutions.',

        'category1-title': 'Preventive Maintenance',
        'category1-description': 'Regular maintenance programs that prevent equipment failure and extend system lifespan.',

        'category2-title': 'Remote Monitoring',
        'category2-description': '24/7 surveillance and alert systems for proactive issue detection and resolution.',

        'category3-title': 'Emergency Response',
        'category3-description': 'Immediate support and rapid repair services to minimize downtime during critical situations.',

        'category4-title': 'System Optimization',
        'category4-description': 'Performance enhancement and energy efficiency improvements for maximum operational savings.',

        'category5-title': 'System Modernization',
        'category5-description': 'Upgrades and retrofits to bring older systems up to modern standards and efficiency levels.',

        'category6-title': 'Energy Management',
        'category6-description': 'Comprehensive energy solutions that reduce consumption and lower operational costs significantly.',

        // CTA Section
        'cta-title': 'Ready to Optimize Your Refrigeration Systems?',
        'cta-subtitle': 'Contact our expert team today for a comprehensive assessment of your refrigeration needs and discover how our premium services can enhance efficiency, reduce costs, and ensure uninterrupted operations for your business.',
        'cta-button-primary': 'Request Consultation',
        'cta-button-secondary': 'Download Services Brochure',

        // Footer
        'footer-desc': 'Leading refrigeration solutions provider in Barcelona, serving commercial and industrial clients across Spain with high-quality, energy-efficient systems.',
        'footer-links': 'Quick Links',
        'footer-services': 'Our Services',
        'footer-contact': 'Contact Info',

        'nav-home': 'Home',
        'nav-home-text': 'Home',
        'nav-about-text': 'About',
        'nav-services-text': 'Services',
        'nav-products-text': 'Products',
        'nav-industries-text': 'Industries',
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
        'page-title': 'Servicios - Signoco Refrigeración | Barcelona',

        // Navigation
        'nav-about': 'Acerca de',
        'nav-services': 'Servicios',
        'nav-products': 'Productos',
        'nav-industries': 'Industrias',
        'nav-contact': 'Contacto',
        'nav-get-quote': 'Pedir presupuesto',

        // Hero Section
        'hero-title': 'Servicios Integrales de Refrigeración',
        'hero-subtitle': 'Desde soporte de emergencia 24/7 hasta gestión energética avanzada, proporcionamos soluciones completas de refrigeración que garantizan un rendimiento óptimo, máxima eficiencia y operaciones ininterrumpidas para su negocio.',

        // Services Section
        'services-title': 'Nuestros Servicios Premium',
        'services-subtitle': 'Combinamos tecnología de vanguardia con ingeniería experta para ofrecer soluciones completas de refrigeración que maximizan la eficiencia, reducen el tiempo de inactividad y optimizan sus costos operativos.',

        // Individual Services
        'service1-title': 'Contratos de Mantenimiento',
        'service1-description': 'Programas de mantenimiento personalizados diseñados para extender la vida útil del equipo, prevenir fallos inesperados y garantizar el cumplimiento normativo con monitoreo proactivo y servicio programado.',
        'service1-feature1': 'Programación de mantenimiento preventivo',
        'service1-feature2': 'Respuesta prioritaria de servicio',
        'service1-feature3': 'Partes y mano de obra incluidos',
        'service1-feature4': 'Documentación de cumplimiento',

        'service2-title': 'Telemonitorización 24/7 & Alarmas',
        'service2-description': 'Monitoreo remoto las 24 horas con sistemas de alerta instantánea que detectan anomalías antes de que se conviertan en problemas críticos, garantizando una respuesta inmediata y una interrupción mínima.',
        'service2-feature1': 'Monitoreo de temperatura en tiempo real',
        'service2-feature2': 'Alertas instantáneas SMS/Email',
        'service2-feature3': 'Análisis predictivo de fallos',
        'service2-feature4': 'Paneles de informes de rendimiento',

        'service3-title': 'Centro de Llamadas Dedicado',
        'service3-description': 'Equipo de soporte profesional multilingüe disponible 24/7 para manejar solicitudes de servicio, proporcionar asistencia técnica y coordinar respuestas de emergencia con orientación experta.',
        'service3-feature1': 'Soporte técnico multilingüe',
        'service3-feature2': 'Gestión de solicitudes de servicio',
        'service3-feature3': 'Coordinación de emergencias',
        'service3-feature4': 'Asistencia de solución de problemas técnicos',

        'service4-title': 'Soporte de Emergencia 24/7',
        'service4-description': 'Servicios de emergencia de respuesta inmediata con tiempos de respuesta garantizados para minimizar el tiempo de inactividad y proteger su valioso inventario durante situaciones críticas.',
        'service4-feature1': 'Tiempo de respuesta garantizado de 2 horas',
        'service4-feature2': 'Disponibilidad de repuestos de emergencia',
        'service4-feature3': 'Unidades de reparación móviles en espera',
        'service4-feature4': 'Recuperación de temperatura crítica',

        'service5-title': 'Asistencia Técnica en Sitio',
        'service5-description': 'Técnicos certificados que brindan soporte experto en el sitio para instalaciones, reparaciones y optimización del sistema con herramientas y equipos de diagnóstico de última generación.',
        'service5-feature1': 'Ingenieros de refrigeración certificados',
        'service5-feature2': 'Equipos de diagnóstico avanzados',
        'service5-feature3': 'Instalación y puesta en marcha',
        'service5-feature4': 'Optimización del rendimiento del sistema',

        'service6-title': 'Plataforma de Monitoreo Unificada',
        'service6-description': 'Panel centralizado que integra múltiples sistemas de refrigeración para supervisión integral, análisis en tiempo real y gestión proactiva desde una sola interfaz.',
        'service6-feature1': 'Integración de múltiples sistemas',
        'service6-feature2': 'Vistas de panel personalizables',
        'service6-feature3': 'Análisis de datos históricos',
        'service6-feature4': 'Accesibilidad mediante aplicación móvil',

        'service7-title': 'Optimización de Sistemas',
        'service7-description': 'Servicios de análisis y optimización basados en datos que identifican ineficiencias, reducen el consumo de energía y mejoran el rendimiento general del sistema para un ROI máximo.',
        'service7-feature1': 'Auditorías de eficiencia energética',
        'service7-feature2': 'Evaluación comparativa de rendimiento',
        'service7-feature3': 'Planificación de mantenimiento predictivo',
        'service7-feature4': 'Análisis y reportes de ROI',

        'service8-title': 'Soluciones de Retrofit',
        'service8-description': 'Modernización de sistemas de refrigeración existentes con refrigerantes ecológicos y componentes energéticamente eficientes para cumplir con los estándares actuales mientras se extiende la vida útil del equipo.',
        'service8-feature1': 'Actualizaciones de refrigerantes ecológicos',
        'service8-feature2': 'Reemplazo de componentes energéticamente eficientes',
        'service8-feature3': 'Evaluación de compatibilidad del sistema',
        'service8-feature4': 'Actualizaciones de cumplimiento normativo',

        'service9-title': 'Gestión Energética',
        'service9-description': 'Estrategias integrales de gestión de energía que reducen los costos operativos, minimizan el impacto ambiental y optimizan el rendimiento del sistema de refrigeración mediante controles inteligentes.',
        'service9-feature1': 'Monitoreo inteligente de energía',
        'service9-feature2': 'Gestión de demanda máxima',
        'service9-feature3': 'Reducción de huella de carbono',
        'service9-feature4': 'Análisis de consumo energético',

        // Categories Section
        'categories-title': 'Categorías de Servicio',
        'categories-subtitle': 'Nuestros servicios están organizados en categorías integrales diseñadas para abordar cada aspecto de sus necesidades de refrigeración, desde el mantenimiento de rutina hasta soluciones tecnológicas avanzadas.',

        'category1-title': 'Mantenimiento Preventivo',
        'category1-description': 'Programas de mantenimiento regular que previenen fallos del equipo y extienden la vida útil del sistema.',

        'category2-title': 'Monitoreo Remoto',
        'category2-description': 'Sistemas de vigilancia y alerta 24/7 para detección y resolución proactiva de problemas.',

        'category3-title': 'Respuesta de Emergencia',
        'category3-description': 'Soporte inmediato y servicios de reparación rápida para minimizar el tiempo de inactividad durante situaciones críticas.',

        'category4-title': 'Optimización del Sistema',
        'category4-description': 'Mejora del rendimiento y eficiencia energética para ahorros operativos máximos.',

        'category5-title': 'Modernización del Sistema',
        'category5-description': 'Actualizaciones y mejoras para llevar los sistemas antiguos a estándares y niveles de eficiencia modernos.',

        'category6-title': 'Gestión de Energía',
        'category6-description': 'Soluciones energéticas integrales que reducen el consumo y disminuyen significativamente los costos operativos.',

        // CTA Section
        'cta-title': '¿Listo para Optimizar Sus Sistemas de Refrigeración?',
        'cta-subtitle': 'Contácte a nuestro equipo experto hoy para una evaluación integral de sus necesidades de refrigeración y descubra cómo nuestros servicios premium pueden mejorar la eficiencia, reducir costos y garantizar operaciones ininterrumpidas para su negocio.',
        'cta-button-primary': 'Solicitar Consulta',
        'cta-button-secondary': 'Descargar Folleto de Servicios',

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

    // -------- Set current year in footer --------
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // -------- Language switcher functionality --------
    const langButtons = document.querySelectorAll('.lang-btn');
    const langContents = document.querySelectorAll('.lang-content');

    function switchLanguage(lang) {
        // Update active button
        langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));

        // Update visible content
        langContents.forEach(content => content.classList.toggle('active', content.dataset.lang === lang));

        // Update data-lang-key elements
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

        // Update page title
        if (languageData[lang] && languageData[lang]['page-title']) {
            document.title = languageData[lang]['page-title'];
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    // Add click event to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.dataset.lang;
            switchLanguage(lang);
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLang);

    // -------- Progress indicator functionality --------
    const progressDots = document.querySelectorAll('.progress-dot');
    const sections = document.querySelectorAll('section[id]');

    function updateProgressIndicator() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        progressDots.forEach(dot => {
            dot.classList.toggle('active', dot.getAttribute('data-section').toLowerCase() === currentSection);
        });
    }

    progressDots.forEach(dot => {
        dot.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section').toLowerCase();
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', updateProgressIndicator);
    updateProgressIndicator(); // Initial call

    // -------- Service item hover enhancement --------
    document.querySelectorAll('.service-item').forEach(item => {
        const number = item.querySelector('.service-number');
        if (!number) return;
        item.addEventListener('mouseenter', () => {
            number.style.color = 'rgba(59, 175, 218, 0.1)';
            number.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', () => {
            number.style.color = 'rgba(11, 60, 93, 0.05)';
            number.style.transform = 'scale(1)';
        });
    });

    // -------- CTA button functionality --------
    document.querySelectorAll('.btn-primary-cta, .btn-outline-cta').forEach(button => {
        button.addEventListener('click', function () {
            const currentLang = document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
            if (this.classList.contains('btn-primary-cta')) {
                window.location.href = 'contact.html';
            } else {
                const message = currentLang === 'es'
                    ? 'Descargando folleto de servicios...'
                    : 'Downloading services brochure...';
                alert(message);
            }
        });
    });

    // -------- Sticky CTA button --------
    const stickyQuoteBtn = document.querySelector('.sticky-cta .quote-btn');
    if (stickyQuoteBtn) {
        stickyQuoteBtn.addEventListener('click', () => {
            window.location.href = 'contact.html#form';
        });
    }

    // -------- Animate elements on scroll --------
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.style.animationPlayState = 'running';
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Initialize animations after short delay
    setTimeout(() => {
        document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }, 100);
});
