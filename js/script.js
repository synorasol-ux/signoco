// Language Switching Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

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




    // Language data
    const translations = {
        en: {
            // Navigation
            'nav-about': 'About',
            'nav-services': 'Services',
            'nav-products': 'Products',
            'nav-industries': 'Industries',
            'nav-contact': 'Contact',



            // Services
            'service1-title': 'Superstore Chillers',
            'service1-desc': 'High-capacity chilling systems for hypermarkets and large retail spaces, ensuring optimal temperature control.',
            'service2-title': 'Cold Storage Units',
            'service2-desc': 'Custom cold rooms and freezer warehouses for bulk storage with precise climate management.',
            'service3-title': 'Display Refrigeration',
            'service3-desc': 'Commercial display cases, refrigerated shelves, and glass-door merchandisers for retail environments.',
            'service4-title': 'Custom Installations',
            'service4-desc': 'Tailored refrigeration solutions designed to meet specific operational requirements and space constraints.',

            // Benefits
            'benefit1-title': 'High-Quality Systems',
            'benefit1-desc': 'We use premium components and follow strict quality control standards.',
            'benefit2-title': 'Energy Efficient',
            'benefit2-desc': 'Our systems reduce energy consumption by up to 30% compared to conventional solutions.',
            'benefit3-title': 'Professional Installation',
            'benefit3-desc': 'Certified technicians ensure proper installation and optimal system performance.',
            'benefit4-title': 'Industry Experience',
            'benefit4-desc': '15+ years serving supermarkets, warehouses, and commercial facilities across Spain.',

            // Products
            "cat-remote": "Remote",
            "cat-plugin": "Plug-in",
            "cat-coldrooms": "Cold Rooms",
            "cat-systems": "Refrigeration Systems",
            "cat-islands": "Islands",
            "cat-freezers": "Freezers",

            // Industries
            'industry1-title': 'Superstores & Hypermarkets',
            'industry1-desc': 'Complete refrigeration systems for large retail spaces and supermarkets.',
            'industry2-title': 'Warehouses & Logistics',
            'industry2-desc': 'Cold storage solutions for logistics centers and distribution warehouses.',
            'industry3-title': 'Food & Beverage',
            'industry3-desc': 'Refrigeration for restaurants, food processing, and beverage storage.',
            'industry4-title': 'Pharmaceutical Storage',
            'industry4-desc': 'Precision temperature-controlled units for medical and pharmaceutical products.',

            // Projects
            'project1-title': 'Industrial Chiller Installation',
            'project1-location': 'Barcelona Superstore',
            'project2-title': 'Cold Storage Warehouse',
            'project2-location': 'Madrid Logistics Center',
            'project3-title': 'Supermarket Display Cases',
            'project3-location': 'Valencia Hypermarket',

            // Contact Form
            'contact-name': 'Name',
            'contact-email': 'Email',
            'contact-company': 'Company',
            'contact-phone': 'Phone',
            'contact-service-default': 'Select Service',
            'contact-service-chillers': 'Industrial Chillers',
            'contact-service-storage': 'Cold Storage',
            'contact-service-display': 'Display Refrigeration',
            'contact-service-custom': 'Custom Solutions',
            'contact-message': 'Message',
            'contact-submit': 'Send Message',
            'contact-info': 'Contact Information',
            'contact-address-title': 'Our Location',
            'contact-address': 'Carrer de la Indústria, 123<br>08025 Barcelona, Spain',
            'contact-phone-title': 'Phone Number',
            'contact-email-title': 'Email Address',
            'contact-hours-title': 'Business Hours',
            'contact-hours': 'Monday - Friday: 8:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 1:00 PM',
            'contact-whatsapp': 'Contact us on WhatsApp',

            // Footer
            'footer-desc': 'Leading refrigeration solutions provider in Barcelona, serving commercial and industrial clients across Spain with high-quality, energy-efficient systems.',
            'footer-links': 'Quick Links',
            'footer-services': 'Our Services',
            'footer-contact': 'Contact Info',
            'footer-rights': 'All rights reserved.',

            // Sticky CTA
            'sticky-quote': 'Get Quote',
            'sticky-whatsapp': 'WhatsApp'
        },
        es: {
            // Navigation
            'nav-about': 'Acerca de',
            'nav-services': 'Servicios',
            'nav-products': 'Productos',
            'nav-industries': 'Industrias',
            'nav-contact': 'Contacto',
            'nav-get-quote': 'Pedir presupuesto',

            // Services
            'service1-title': 'Enfriadores para Supermercados',
            'service1-desc': 'Sistemas de refrigeración de alta capacidad para hipermercados y grandes espacios comerciales, garantizando un control de temperatura óptimo.',
            'service2-title': 'Cámaras Frigoríficas',
            'service2-desc': 'Cámaras frigoríficas y almacenes congeladores personalizados para almacenamiento a granel con gestión climática precisa.',
            'service3-title': 'Refrigeración Expositores',
            'service3-desc': 'Vitrinas comerciales, estanterías refrigeradas y expositores con puertas de vidrio para entornos minoristas.',
            'service4-title': 'Instalaciones Personalizadas',
            'service4-desc': 'Soluciones de refrigeración a medida diseñadas para cumplir con requisitos operativos específicos y limitaciones de espacio.',

            // Products
            'product1-title': 'Unidades Enfriadoras Industriales',
            'product1-desc': 'Refrigeración de alta capacidad para grandes espacios comerciales. Energéticamente eficiente y fiable.',
            'product2-title': 'Cámaras Frigoríficas Modulares',
            'product2-desc': 'Soluciones de almacenamiento en frío personalizables para almacenes y procesamiento de alimentos.',
            'product3-title': 'Expositores Refrigerados',
            'product3-desc': 'Expositores comerciales con puertas de vidrio para supermercados y tiendas de conveniencia.',
            'product4-title': 'Refrigeración Personalizada',
            'product4-desc': 'Soluciones a medida para necesidades industriales específicas, incluido el almacenamiento farmacéutico.',
            'request-quote': 'Solicitar Presupuesto',

            // Benefits
            'benefit1-title': 'Sistemas de Alta Calidad',
            'benefit1-desc': 'Utilizamos componentes premium y seguimos estrictos estándares de control de calidad.',
            'benefit2-title': 'Eficiencia Energética',
            'benefit2-desc': 'Nuestros sistemas reducen el consumo energético hasta un 30% en comparación con soluciones convencionales.',
            'benefit3-title': 'Instalación Profesional',
            'benefit3-desc': 'Técnicos certificados garantizan una instalación adecuada y un rendimiento óptimo del sistema.',
            'benefit4-title': 'Experiencia en la Industria',
            'benefit4-desc': 'Más de 15 años sirviendo a supermercados, almacenes e instalaciones comerciales en toda España.',

            // Industries
            'industry1-title': 'Supermercados e Hipermercados',
            'industry1-desc': 'Sistemas de refrigeración completos para grandes espacios comerciales y supermercados.',
            'industry2-title': 'Almacenes y Logística',
            'industry2-desc': 'Soluciones de almacenamiento en frío para centros logísticos y almacenes de distribución.',
            'industry3-title': 'Alimentación y Bebidas',
            'industry3-desc': 'Refrigeración para restaurantes, procesamiento de alimentos y almacenamiento de bebidas.',
            'industry4-title': 'Almacenamiento Farmacéutico',
            'industry4-desc': 'Unidades con control de temperatura de precisión para productos médicos y farmacéuticos.',

            // Products
            "cat-remote": "Remoto",
            "cat-plugin": "Plug-in",
            "cat-coldrooms": "Cámaras Frías",
            "cat-systems": "Sistemas de Refrigeración",
            "cat-islands": "Islas",
            "cat-freezers": "Congeladores",

            // Projects
            'project1-title': 'Instalación de Enfriador Industrial',
            'project1-location': 'Supermercado Barcelona',
            'project2-title': 'Almacén de Almacenamiento en Frío',
            'project2-location': 'Centro Logístico Madrid',
            'project3-title': 'Expositores de Supermercado',
            'project3-location': 'Hipermercado Valencia',

            // Contact Form
            'contact-name': 'Nombre',
            'contact-email': 'Correo Electrónico',
            'contact-company': 'Empresa',
            'contact-phone': 'Teléfono',
            'contact-service-default': 'Seleccionar Servicio',
            'contact-service-chillers': 'Enfriadores Industriales',
            'contact-service-storage': 'Almacenamiento en Frío',
            'contact-service-display': 'Refrigeración Expositores',
            'contact-service-custom': 'Soluciones Personalizadas',
            'contact-message': 'Mensaje',
            'contact-submit': 'Enviar Mensaje',
            'contact-info': 'Información de Contacto',
            'contact-address-title': 'Nuestra Ubicación',
            'contact-address': 'Carrer de la Indústria, 123<br>08025 Barcelona, España',
            'contact-phone-title': 'Teléfono',
            'contact-email-title': 'Correo Electrónico',
            'contact-hours-title': 'Horario Comercial',
            'contact-hours': 'Lunes - Viernes: 8:00 AM - 6:00 PM<br>Sábado: 9:00 AM - 1:00 PM',
            'contact-whatsapp': 'Contáctenos por WhatsApp',

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

    // Language switcher functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    const langContents = document.querySelectorAll('.lang-content');

    // Function to switch language
    function switchLanguage(lang) {
        // Update active button
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update visible content
        langContents.forEach(content => {
            if (content.dataset.lang === lang) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        // Update text elements
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update CTA button text in banner
        const ctaButton = document.querySelector('.cta-banner .btn-primary-custom');
        if (ctaButton) {
            ctaButton.textContent = lang === 'en' ? 'Get a Quote' : 'Solicitar Presupuesto';
        }
    }

    // Add click event to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.dataset.lang;
            switchLanguage(lang);
        });
    });

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the current language
        const currentLang = document.querySelector('.lang-btn.active').dataset.lang;

        // Show a success message in the current language
        const successMessage = currentLang === 'en'
            ? 'Thank you! Your message has been sent. We will contact you soon.'
            : '¡Gracias! Su mensaje ha sido enviado. Nos pondremos en contacto pronto.';

        alert(successMessage);
        this.reset();
    });

    // Sticky CTA button functionality
    document.querySelector('.quote-btn').addEventListener('click', function () {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Initialize with English
    switchLanguage('en');

});


////fooooter
document.addEventListener('DOMContentLoaded', function () {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();



    // Language translations
    const translations = {
        en: {
            'footer-desc': 'Leading refrigeration solutions provider in Barcelona, serving commercial and industrial clients across Spain with high-quality, energy-efficient systems.',
            'footer-links': 'Quick Links',
            'nav-home': 'Home',
            'nav-services': 'Services',
            'nav-products': 'Products',
            'nav-industries': 'Industries',
            'nav-projects': 'Projects',
            'nav-contact': 'Contact',
            'footer-services': 'Our Services',
            'service1-title': 'Industrial Chillers',
            'service2-title': 'Cold Storage Units',
            'service3-title': 'Display Refrigeration',
            'service4-title': 'Custom Installations',
            'service-maintenance': 'Maintenance Services',
            'service-consultation': 'Consultation',
            'footer-contact': 'Contact Info',
            'contact-address-title': 'Address',
            'contact-address': 'Carrer de la Indústria, 123\n08025 Barcelona, Spain',
            'contact-phone-title': 'Phone',
            'contact-email-title': 'Email',
            'contact-hours-title': 'Business Hours',
            'contact-hours': 'Mon-Fri: 8:00-18:00\nSat: 9:00-13:00',
            'newsletter-title': 'Stay Updated',
            'email-placeholder': 'Your email',
            'subscribe-btn': 'Subscribe',
            'footer-rights': 'All rights reserved.',
            'privacy-policy': 'Privacy Policy',
            'terms-conditions': 'Terms & Conditions',
            'cookie-policy': 'Cookie Policy',
            'sitemap': 'Sitemap'
        },
        es: {
            'footer-desc': 'Proveedor líder de soluciones de refrigeración en Barcelona, sirviendo a clientes comerciales e industriales en toda España con sistemas de alta calidad y eficiencia energética.',
            'footer-links': 'Enlaces Rápidos',
            'nav-home': 'Inicio',
            'nav-services': 'Servicios',
            'nav-products': 'Productos',
            'nav-industries': 'Industrias',
            'nav-projects': 'Proyectos',
            'nav-contact': 'Contacto',
            'footer-services': 'Nuestros Servicios',
            'service1-title': 'Enfriadores Industriales',
            'service2-title': 'Cámaras Frigoríficas',
            'service3-title': 'Refrigeración Expositores',
            'service4-title': 'Instalaciones Personalizadas',
            'service-maintenance': 'Servicios de Mantenimiento',
            'service-consultation': 'Consultoría',
            'footer-contact': 'Información de Contacto',
            'contact-address-title': 'Dirección',
            'contact-address': 'Carrer de la Indústria, 123\n08025 Barcelona, España',
            'contact-phone-title': 'Teléfono',
            'contact-email-title': 'Correo Electrónico',
            'contact-hours-title': 'Horario Comercial',
            'contact-hours': 'Lun-Vie: 8:00-18:00\nSáb: 9:00-13:00',
            'newsletter-title': 'Manténgase Actualizado',
            'email-placeholder': 'Su correo',
            'subscribe-btn': 'Suscribirse',
            'footer-rights': 'Todos los derechos reservados.',
            'privacy-policy': 'Política de Privacidad',
            'terms-conditions': 'Términos y Condiciones',
            'cookie-policy': 'Política de Cookies',
            'sitemap': 'Mapa del Sitio'
        }
    };

    // Language switching
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.dataset.lang;


            // Update all translatable elements
            document.querySelectorAll('[data-lang-key]').forEach(element => {
                const key = element.getAttribute('data-lang-key');
                if (translations[lang] && translations[lang][key]) {
                    if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', translations[lang][key]);
                    } else {
                        element.textContent = translations[lang][key];
                    }
                }
            });
        });
    });


    // Back to top functionality
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Footer link hover effects
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('mouseenter', function () {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.opacity = '1';
                icon.style.transform = 'translateX(0)';
            }
        });

        link.addEventListener('mouseleave', function () {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.opacity = '0';
                icon.style.transform = 'translateX(-5px)';
            }
        });
    });
});


