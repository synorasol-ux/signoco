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
        'page-title': 'Contact Us - Signoco Refrigeration | Barcelona',

        // Navigation
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-products': 'Products',
        'nav-industries': 'Industries',
        'nav-contact': 'Contact',
        'nav-get-quote': 'Get Quote',

        // Hero Section
        'hero-title': 'Connect With Our Cooling Experts',
        'hero-subtitle': 'Ready to transform your refrigeration needs into reliable, energy-efficient solutions? Our team of specialists is here to guide you through every step.',

        // Contact Display Cards
        'office-title': 'Headquarters & Main Office',
        'address-title': 'Address',
        'address-value': 'Carrer de la Indústria, 123<br>08025 Barcelona, Spain',
        'phone-title': 'Phone',
        'phone-hours': 'Mon-Fri: 8:00-18:00',
        'email-title': 'Email',

        'service-title': 'Service & Support Centers',
        'support-title': 'Technical Support',
        'hours-title': 'Service Hours',
        'hours-value': 'Emergency: 24/7<br>Maintenance: Mon-Sat 7:00-22:00<br>Installation: By Appointment',
        'response-title': 'Response Time',
        'response-value': 'Emergency: ≤ 2 hours<br>Standard: ≤ 24 hours<br>Scheduled: Your Preferred Time',

        'regional-title': 'Regional Offices',

        // Interactive Map
        'map-title': 'Interactive Location Map',
        'map-subtitle': 'Our strategic locations across Spain',
        'map-directions': 'Get Directions',
        'map-view': 'Street View',

        // Contact Form
        'form-title': 'Request a Detailed Quote',
        'form-subtitle': 'Tell us about your refrigeration needs. Our specialists will analyze your requirements and provide a customized solution with transparent pricing.',

        'form-name': 'Full Name',
        'form-email': 'Email Address',
        'form-phone': 'Phone Number',
        'form-company': 'Company Name',
        'form-industry': 'Industry Type',
        'form-select-industry': 'Select your industry',
        'industry-food': 'Food & Beverage',
        'industry-pharma': 'Pharmaceutical',
        'industry-hospitality': 'Hospitality & Restaurants',
        'industry-retail': 'Retail & Supermarkets',
        'industry-industrial': 'Industrial Manufacturing',
        'industry-logistics': 'Logistics & Warehousing',
        'industry-other': 'Other',

        'form-service': 'Service Needed',
        'form-select-service': 'Select service',
        'service-installation': 'New Installation',
        'service-maintenance': 'Maintenance Contract',
        'service-upgrade': 'System Upgrade',
        'service-emergency': 'Emergency Repair',
        'service-consultation': 'Consultation',

        'form-budget': 'Estimated Budget',
        'form-select-budget': 'Select budget range',
        'budget-5-10': '€5,000 - €10,000',
        'budget-10-25': '€10,000 - €25,000',
        'budget-25-50': '€25,000 - €50,000',
        'budget-50-100': '€50,000 - €100,000',
        'budget-100+': '€100,000+',

        'form-equipment': 'Equipment Requirements',
        'form-space': 'Space Specifications',
        'form-timeline': 'Project Timeline',
        'form-select-timeline': 'Select urgency',
        'timeline-urgent': 'Urgent (Within 2 weeks)',
        'timeline-soon': 'Soon (1-2 months)',
        'timeline-planning': 'Planning Stage (3-6 months)',
        'timeline-future': 'Future Project (6+ months)',

        'form-consent': 'I agree to receive communications and quotes from Signoco Refrigeration regarding my inquiry.',
        'form-submit': 'Submit Quote Request',

        // Sidebar Content
        'sidebar-process-title': 'Our Process',
        'sidebar-process-text': 'After submitting your quote request, our specialist will contact you within 24 hours to discuss your specific needs and arrange a site visit if necessary.',
        'process-step-1': 'Initial Consultation & Needs Assessment',
        'process-step-2': 'Site Evaluation & Technical Analysis',
        'process-step-3': 'Custom Solution Design & Proposal',
        'process-step-4': 'Transparent Pricing & Timeline',
        'process-step-5': 'Installation & Commissioning',

        'sidebar-benefits-title': 'Why Choose Us',
        'benefit-1': '14+ Years Industry Experience',
        'benefit-2': 'Energy-Efficient Solutions',
        'benefit-3': '24/7 Emergency Support',
        'benefit-4': 'Transparent Pricing & No Hidden Fees',
        'benefit-5': 'Certified Technicians & Premium Equipment',
        'benefit-6': '100% Customer Satisfaction Guarantee',

        // Contact Channels
        'channel-live-title': 'Live Chat',
        'channel-live-desc': 'Chat instantly with our support team during business hours',
        'channel-whatsapp-title': 'WhatsApp Business',
        'channel-whatsapp-desc': 'Quick queries & instant responses via WhatsApp',
        'channel-video-title': 'Video Consultation',
        'channel-video-desc': 'Virtual site visits and technical consultations',

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
        'page-title': 'Contáctenos - Signoco Refrigeración | Barcelona',

        // Navigation
        'nav-about': 'Acerca de',
        'nav-services': 'Servicios',
        'nav-products': 'Productos',
        'nav-industries': 'Industrias',
        'nav-contact': 'Contacto',
        'nav-get-quote': 'Pedir presupuesto',

        // Hero Section
        'hero-title': 'Conecta con Nuestros Expertos en Enfriamiento',
        'hero-subtitle': '¿Listo para transformar sus necesidades de refrigeración en soluciones confiables y energéticamente eficientes? Nuestro equipo de especialistas está aquí para guiarle en cada paso.',

        // Contact Display Cards
        'office-title': 'Sede Central & Oficina Principal',
        'address-title': 'Dirección',
        'address-value': 'Carrer de la Indústria, 123<br>08025 Barcelona, España',
        'phone-title': 'Teléfono',
        'phone-hours': 'Lun-Vie: 8:00-18:00',
        'email-title': 'Correo Electrónico',

        'service-title': 'Centros de Servicio & Soporte',
        'support-title': 'Soporte Técnico',
        'hours-title': 'Horario de Servicio',
        'hours-value': 'Emergencia: 24/7<br>Mantenimiento: Lun-Sáb 7:00-22:00<br>Instalación: Con Cita Previa',
        'response-title': 'Tiempo de Respuesta',
        'response-value': 'Emergencia: ≤ 2 horas<br>Estándar: ≤ 24 horas<br>Programado: Su Hora Preferida',

        'regional-title': 'Oficinas Regionales',

        // Interactive Map
        'map-title': 'Mapa de Ubicación Interactivo',
        'map-subtitle': 'Nuestras ubicaciones estratégicas en toda España',
        'map-directions': 'Obtener Direcciones',
        'map-view': 'Vista de Calle',

        // Contact Form
        'form-title': 'Solicite un Presupuesto Detallado',
        'form-subtitle': 'Cuéntenos sobre sus necesidades de refrigeración. Nuestros especialistas analizarán sus requisitos y proporcionarán una solución personalizada con precios transparentes.',

        'form-name': 'Nombre Completo',
        'form-email': 'Correo Electrónico',
        'form-phone': 'Número de Teléfono',
        'form-company': 'Nombre de la Empresa',
        'form-industry': 'Tipo de Industria',
        'form-select-industry': 'Seleccione su industria',
        'industry-food': 'Alimentación y Bebidas',
        'industry-pharma': 'Farmacéutica',
        'industry-hospitality': 'Hostelería y Restaurantes',
        'industry-retail': 'Comercio y Supermercados',
        'industry-industrial': 'Fabricación Industrial',
        'industry-logistics': 'Logística y Almacenamiento',
        'industry-other': 'Otro',

        'form-service': 'Servicio Necesitado',
        'form-select-service': 'Seleccione servicio',
        'service-installation': 'Nueva Instalación',
        'service-maintenance': 'Contrato de Mantenimiento',
        'service-upgrade': 'Actualización del Sistema',
        'service-emergency': 'Reparación de Emergencia',
        'service-consultation': 'Consulta',

        'form-budget': 'Presupuesto Estimado',
        'form-select-budget': 'Seleccione rango de presupuesto',
        'budget-5-10': '€5,000 - €10,000',
        'budget-10-25': '€10,000 - €25,000',
        'budget-25-50': '€25,000 - €50,000',
        'budget-50-100': '€50,000 - €100,000',
        'budget-100+': '€100,000+',

        'form-equipment': 'Requisitos de Equipamiento',
        'form-space': 'Especificaciones del Espacio',
        'form-timeline': 'Cronograma del Proyecto',
        'form-select-timeline': 'Seleccione urgencia',
        'timeline-urgent': 'Urgente (En 2 semanas)',
        'timeline-soon': 'Pronto (1-2 meses)',
        'timeline-planning': 'Etapa de Planificación (3-6 meses)',
        'timeline-future': 'Proyecto Futuro (6+ meses)',

        'form-consent': 'Acepto recibir comunicaciones y presupuestos de Signoco Refrigeration con respecto a mi consulta.',
        'form-submit': 'Enviar Solicitud de Presupuesto',

        // Sidebar Content
        'sidebar-process-title': 'Nuestro Proceso',
        'sidebar-process-text': 'Después de enviar su solicitud de presupuesto, nuestro especialista se pondrá en contacto con usted dentro de las 24 horas para discutir sus necesidades específicas y organizar una visita al sitio si es necesario.',
        'process-step-1': 'Consulta Inicial & Evaluación de Necesidades',
        'process-step-2': 'Evaluación del Sitio & Análisis Técnico',
        'process-step-3': 'Diseño de Solución Personalizada & Propuesta',
        'process-step-4': 'Precios Transparentes & Cronograma',
        'process-step-5': 'Instalación & Puesta en Marcha',

        'sidebar-benefits-title': 'Por Qué Elegirnos',
        'benefit-1': '14+ Años de Experiencia en la Industria',
        'benefit-2': 'Soluciones Energéticamente Eficientes',
        'benefit-3': 'Soporte de Emergencia 24/7',
        'benefit-4': 'Precios Transparentes & Sin Costes Ocultos',
        'benefit-5': 'Técnicos Certificados & Equipamiento Premium',
        'benefit-6': 'Garantía de Satisfacción del Cliente 100%',

        // Contact Channels
        'channel-live-title': 'Chat en Vivo',
        'channel-live-desc': 'Chatea instantáneamente con nuestro equipo de soporte durante horas comerciales',
        'channel-whatsapp-title': 'WhatsApp Business',
        'channel-whatsapp-desc': 'Consultas rápidas & respuestas instantáneas por WhatsApp',
        'channel-video-title': 'Consulta por Video',
        'channel-video-desc': 'Visitas virtuales al sitio y consultas técnicas',

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

    // -------- Form submission --------
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const currentLang = document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
            const successMessage = currentLang === 'es'
                ? '¡Solicitud enviada con éxito! Nos pondremos en contacto con usted dentro de 24 horas.'
                : 'Request submitted successfully! We will contact you within 24 hours.';
            alert(successMessage);
            quoteForm.reset();
        });
    }

    // -------- Map buttons --------
    const mapDirectionsBtn = document.querySelector('[data-lang-key="map-directions"]');
    const mapViewBtn = document.querySelector('[data-lang-key="map-view"]');

    if (mapDirectionsBtn) {
        mapDirectionsBtn.addEventListener('click', function () {
            const currentLang = document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
            const message = currentLang === 'es'
                ? 'Abriendo Google Maps con direcciones a nuestra oficina principal...'
                : 'Opening Google Maps with directions to our main office...';
            alert(message);
        });
    }

    if (mapViewBtn) {
        mapViewBtn.addEventListener('click', function () {
            const currentLang = document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
            const message = currentLang === 'es'
                ? 'Abriendo Google Street View de nuestra ubicación...'
                : 'Opening Google Street View of our location...';
            alert(message);
        });
    }

    // -------- Sticky CTA button --------
    const stickyQuoteBtn = document.querySelector('.sticky-cta .quote-btn');
    if (stickyQuoteBtn) {
        stickyQuoteBtn.addEventListener('click', function () {
            const contactSection = document.querySelector('.contact-form-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // -------- Animate elements on scroll --------
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animated');
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // -------- Map marker animations --------
    const markers = document.querySelectorAll('.map-marker');
    markers.forEach((marker, index) => {
        const pulse = marker.querySelector('.marker-pulse');
        const dot = marker.querySelector('.marker-dot');
        if (!pulse || !dot) return;

        pulse.style.animationDelay = `${index * 0.5}s`;
        dot.style.animationDelay = `${index * 0.5}s`;

        marker.addEventListener('mouseenter', () => {
            pulse.style.animationPlayState = 'paused';
            dot.style.transform = 'scale(1.5)';
        });

        marker.addEventListener('mouseleave', () => {
            pulse.style.animationPlayState = 'running';
            dot.style.transform = 'scale(1)';
        });
    });

});
