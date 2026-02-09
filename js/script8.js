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
                    'page-title': 'Complete Refrigeration Systems | Signoco Refrigeration | Barcelona',
                    
                    // Navigation
                    'nav-about': 'About',
                    'nav-services': 'Services',
                    'nav-products': 'Products',
                    'nav-industries': 'Industries',
                    'nav-contact': 'Contact',
                    'nav-get-quote': 'Get Quote',
                    
                    // Hero Section
                    'hero-title': 'Complete Refrigeration Systems',
                    'hero-subtitle': 'End-to-end refrigeration solutions engineered for maximum efficiency, reliability, and performance. From design to installation and maintenance, we deliver comprehensive cooling systems for any application.',
                    
                    // Stats
                    'stat-projects': '500+',
                    'stat-projects-label': 'Projects',
                    'stat-efficiency': '40%',
                    'stat-efficiency-label': 'Energy Saving',
                    'stat-uptime': '99.8%',
                    'stat-uptime-label': 'Uptime',
                    'stat-support': '24/7',
                    'stat-support-label': 'Support',
                    
                    // Systems Section
                    'systems-title': 'Our Refrigeration Systems',
                    'systems-subtitle': 'Comprehensive cooling solutions tailored to your specific needs and industry requirements.',
                    'badge-industrial': 'Industrial',
                    'badge-commercial': 'Commercial',
                    'badge-specialized': 'Specialized',
                    'system-1-title': 'CO2 Rack Systems',
                    'system-1-desc': 'High-capacity systems for manufacturing plants, food processing facilities, and large-scale cold storage.',
                    'system-2-title': 'HFC Rack Systems',
                    'system-2-desc': 'Complete cooling solutions for supermarkets, hotels, restaurants, and retail establishments.',
                    'system-3-title': 'HFC Condensing Units',
                    'system-3-desc': 'Custom solutions for laboratories, pharmaceutical facilities, data centers, and unique applications.',
                    
                    // Features
                    'feature-1-1': 'Centralized Control',
                    'feature-1-2': 'Redundant Systems',
                    'feature-1-3': 'Energy Recovery',
                    'feature-1-4': 'IoT Monitoring',
                    'feature-2-1': 'Modular Design',
                    'feature-2-2': 'Quiet Operation',
                    'feature-2-3': 'Easy Maintenance',
                    'feature-2-4': 'Space Efficient',
                    'feature-3-1': 'Precision Control',
                    'feature-3-2': 'Redundancy',
                    'feature-3-3': 'Clean Room Grade',
                    'feature-3-4': 'GMP Compliance',
                    
                    // Components Section
                    'components-title': 'System Components',
                    'components-subtitle': 'Premium components engineered for reliability, efficiency, and long-term performance.',
                    'component-1-title': 'Compressors',
                    'component-1-desc': 'High-efficiency compressors with variable speed drives for optimal energy consumption.',
                    'component-2-title': 'Heat Exchangers',
                    'component-2-desc': 'Advanced plate and tube heat exchangers for maximum thermal efficiency.',
                    'component-3-title': 'Control Systems',
                    'component-3-desc': 'Smart PLC controllers with remote monitoring and predictive maintenance capabilities.',
                    'component-4-title': 'Condensing Units',
                    'component-4-desc': 'Air-cooled and water-cooled condensing units for various environmental conditions.',
                    
                    // Industries Section
                    'industries-title': 'Serving Key Industries',
                    'industries-subtitle': 'Our complete refrigeration systems power operations across diverse sectors.',
                    'industry-1-title': 'Manufacturing',
                    'industry-1-desc': 'Process cooling for chemical, plastic, and industrial manufacturing.',
                    'industry-2-title': 'Food & Beverage',
                    'industry-2-desc': 'Processing, storage, and distribution cooling solutions.',
                    'industry-3-title': 'Pharmaceutical',
                    'industry-3-desc': 'GMP-compliant systems for drug storage and production.',
                    'industry-4-title': 'Data Centers',
                    'industry-4-desc': 'Precision cooling for critical IT infrastructure.',
                    
                    // Process Section
                    'process-title': 'Our Implementation Process',
                    'process-subtitle': 'A structured approach to delivering complete refrigeration solutions.',
                    'step-1-title': 'Consultation & Analysis',
                    'step-1-desc': 'We assess your requirements, space constraints, and operational needs to design the optimal solution.',
                    'step-2-title': 'System Design',
                    'step-2-desc': 'Our engineers create detailed plans, including 3D models, equipment specifications, and installation schematics.',
                    'step-3-title': 'Installation',
                    'step-3-desc': 'Professional installation by certified technicians with minimal disruption to your operations.',
                    'step-4-title': 'Commissioning',
                    'step-4-desc': 'Thorough testing, calibration, and staff training to ensure optimal system performance.',
                    
                    // Benefits Section
                    'benefits-title': 'Why Choose Our Systems',
                    'benefits-subtitle': 'Comprehensive advantages of partnering with Signoco for your refrigeration needs.',
                    'benefit-1-title': 'Energy Efficiency',
                    'benefit-1-desc': 'Advanced technology reduces energy consumption by up to 40% compared to conventional systems.',
                    'benefit-2-title': 'Reliability',
                    'benefit-2-desc': 'Redundant components and fail-safe designs ensure 99.8% uptime for critical applications.',
                    'benefit-3-title': 'Full Support',
                    'benefit-3-desc': 'Comprehensive maintenance plans and 24/7 technical support for complete peace of mind.',
                    
                    // CTA Section
                    'cta-title': 'Ready for a Complete Solution?',
                    'cta-subtitle': 'Contact our systems experts today for a comprehensive assessment and customized proposal for your complete refrigeration needs.',
                    'cta-button': 'Request System Proposal',
                    
                    // Footer
                    'footer-desc': 'Leading provider of complete refrigeration systems in Barcelona and across Spain, delivering end-to-end cooling solutions for industrial, commercial, and specialized applications.',
                    'footer-links': 'Quick Links',
                    'footer-systems': 'Complete Systems',
                    'footer-contact': 'Contact Info',
                    
                    'nav-home': 'Home',
                    'nav-products': 'Products',
                    'nav-remote': 'Remote Systems',
                    'nav-plugin': 'Plug-in Units',
                    'nav-coldrooms': 'Cold Rooms',
                    'nav-contact': 'Contact',
                    
                    'system-industrial': 'Industrial Systems',
                    'system-commercial': 'Commercial Systems',
                    'system-specialized': 'Specialized Systems',
                    'system-process': 'Process Cooling',
                    'system-datacenter': 'Data Center Cooling',
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
                    'page-title': 'Sistemas de Refrigeración Completos | Signoco Refrigeración | Barcelona',
                    
                    // Navigation
                    'nav-about': 'Acerca de',
                    'nav-services': 'Servicios',
                    'nav-products': 'Productos',
                    'nav-industries': 'Industrias',
                    'nav-contact': 'Contacto',
                    'nav-get-quote': 'Pedir Presupuesto',
                    
                    // Hero Section
                    'hero-title-es': 'Sistemas de Refrigeración Completos',
                    'hero-subtitle-es': 'Soluciones de refrigeración integrales diseñadas para máxima eficiencia, confiabilidad y rendimiento. Desde el diseño hasta la instalación y mantenimiento, ofrecemos sistemas de enfriamiento completos para cualquier aplicación.',
                    
                    // Stats
                    'stat-projects': '500+',
                    'stat-projects-label': 'Proyectos',
                    'stat-efficiency': '40%',
                    'stat-efficiency-label': 'Ahorro Energético',
                    'stat-uptime': '99.8%',
                    'stat-uptime-label': 'Tiempo Activo',
                    'stat-support': '24/7',
                    'stat-support-label': 'Soporte',
                    
                    // Systems Section
                    'systems-title-es': 'Nuestros Sistemas de Refrigeración',
                    'systems-subtitle-es': 'Soluciones integrales de enfriamiento adaptadas a sus necesidades específicas y requisitos de la industria.',
                    'badge-industrial': 'Industrial',
                    'badge-commercial': 'Comercial',
                    'badge-specialized': 'Especializado',
                    'system-1-title-es': 'CO2 Rack Systems',
                    'system-1-desc-es': 'Sistemas de alta capacidad para plantas de fabricación, instalaciones de procesamiento de alimentos y almacenamiento en frío a gran escala.',
                    'system-2-title-es': 'HFC Rack Systems',
                    'system-2-desc-es': 'Soluciones integrales de enfriamiento para supermercados, hoteles, restaurantes y establecimientos minoristas.',
                    'system-3-title-es': 'HFC Condensing Units',
                    'system-3-desc-es': 'Soluciones personalizadas para laboratorios, instalaciones farmacéuticas, centros de datos y aplicaciones únicas.',
                    
                    // Features
                    'feature-1-1-es': 'Control Centralizado',
                    'feature-1-2-es': 'Sistemas Redundantes',
                    'feature-1-3-es': 'Recuperación Energética',
                    'feature-1-4-es': 'Monitoreo IoT',
                    'feature-2-1-es': 'Diseño Modular',
                    'feature-2-2-es': 'Operación Silenciosa',
                    'feature-2-3-es': 'Mantenimiento Fácil',
                    'feature-2-4-es': 'Eficiencia Espacial',
                    'feature-3-1-es': 'Control de Precisión',
                    'feature-3-2-es': 'Redundancia',
                    'feature-3-3-es': 'Grado Sala Limpia',
                    'feature-3-4-es': 'Cumplimiento GMP',
                    
                    // Components Section
                    'components-title-es': 'Componentes del Sistema',
                    'components-subtitle-es': 'Componentes premium diseñados para confiabilidad, eficiencia y rendimiento a largo plazo.',
                    'component-1-title-es': 'Compresores',
                    'component-1-desc-es': 'Compresores de alta eficiencia con variadores de velocidad para consumo energético óptimo.',
                    'component-2-title-es': 'Intercambiadores de Calor',
                    'component-2-desc-es': 'Intercambiadores de calor de placas y tubos avanzados para máxima eficiencia térmica.',
                    'component-3-title-es': 'Sistemas de Control',
                    'component-3-desc-es': 'Controladores PLC inteligentes con monitorización remota y capacidades de mantenimiento predictivo.',
                    'component-4-title-es': 'Unidades de Condensación',
                    'component-4-desc-es': 'Unidades de condensación enfriadas por aire y agua para diversas condiciones ambientales.',
                    
                    // Industries Section
                    'industries-title-es': 'Sirviendo Industrias Clave',
                    'industries-subtitle-es': 'Nuestros sistemas de refrigeración completos impulsan operaciones en diversos sectores.',
                    'industry-1-title-es': 'Manufactura',
                    'industry-1-desc-es': 'Enfriamiento de procesos para fabricación química, plástica e industrial.',
                    'industry-2-title-es': 'Alimentos & Bebidas',
                    'industry-2-desc-es': 'Soluciones de enfriamiento para procesamiento, almacenamiento y distribución.',
                    'industry-3-title-es': 'Farmacéutica',
                    'industry-3-desc-es': 'Sistemas compatibles con GMP para almacenamiento y producción de medicamentos.',
                    'industry-4-title-es': 'Centros de Datos',
                    'industry-4-desc-es': 'Enfriamiento de precisión para infraestructura IT crítica.',
                    
                    // Process Section
                    'process-title-es': 'Nuestro Proceso de Implementación',
                    'process-subtitle-es': 'Un enfoque estructurado para ofrecer soluciones de refrigeración completas.',
                    'step-1-title-es': 'Consulta & Análisis',
                    'step-1-desc-es': 'Evaluamos sus requisitos, limitaciones de espacio y necesidades operativas para diseñar la solución óptima.',
                    'step-2-title-es': 'Diseño del Sistema',
                    'step-2-desc-es': 'Nuestros ingenieros crean planes detallados, incluidos modelos 3D, especificaciones de equipos y esquemas de instalación.',
                    'step-3-title-es': 'Instalación',
                    'step-3-desc-es': 'Instalación profesional por técnicos certificados con mínima interrupción de sus operaciones.',
                    'step-4-title-es': 'Puesta en Marcha',
                    'step-4-desc-es': 'Pruebas exhaustivas, calibración y capacitación del personal para garantizar el rendimiento óptimo del sistema.',
                    
                    // Benefits Section
                    'benefits-title-es': 'Por Qué Elegir Nuestros Sistemas',
                    'benefits-subtitle-es': 'Ventajas integrales de asociarse con Signoco para sus necesidades de refrigeración.',
                    'benefit-1-title-es': 'Eficiencia Energética',
                    'benefit-1-desc-es': 'La tecnología avanzada reduce el consumo de energía hasta un 40% en comparación con los sistemas convencionales.',
                    'benefit-2-title-es': 'Confiabilidad',
                    'benefit-2-desc-es': 'Componentes redundantes y diseños a prueba de fallos garantizan un 99.8% de tiempo activo para aplicaciones críticas.',
                    'benefit-3-title-es': 'Soporte Completo',
                    'benefit-3-desc-es': 'Planes de mantenimiento integrales y soporte técnico 24/7 para total tranquilidad.',
                    
                    // CTA Section
                    'cta-title-es': '¿Listo para una Solución Completa?',
                    'cta-subtitle-es': 'Contacte a nuestros expertos en sistemas hoy para una evaluación integral y una propuesta personalizada para sus necesidades completas de refrigeración.',
                    'cta-button': 'Solicitar Propuesta del Sistema',
                    
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
                button.addEventListener('click', function() {
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
                backToTopBtn.addEventListener('click', function(e) {
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
                quoteBtn.addEventListener('click', function() {
                    window.location.href = 'contact-us.html';
                });
            }
        });