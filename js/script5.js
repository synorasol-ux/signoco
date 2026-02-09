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
                    'page-title': 'Remote Refrigeration Systems | Signoco Refrigeration | Barcelona',
                    
                    // Navigation
                    'nav-about': 'About',
                    'nav-services': 'Services',
                    'nav-products': 'Products',
                    'nav-industries': 'Industries',
                    'nav-contact': 'Contact',
                    'nav-get-quote': 'Get Quote',
                    
                    // Hero Section
                    'hero-title': 'Remote Refrigeration Systems',
                    'hero-subtitle': 'Advanced centralized cooling solutions for industrial, commercial, and large-scale applications. Our remote systems deliver superior efficiency, reliability, and performance with energy savings up to 40%.',
                    
                    // Stats
                    'stat-energy': '40%',
                    'stat-energy-label': 'Energy Saving',
                    'stat-operation': '24/7',
                    'stat-operation-label': 'Operation',
                    'stat-temp': '-30°C',
                    'stat-temp-label': 'Temperature Range',
                    'stat-cert': 'ISO 9001',
                    'stat-cert-label': 'Certified',
                    
                    // Products Section
                    'products-title': 'Our Remote Systems Products',
                    'products-subtitle': 'Explore our comprehensive range of remote refrigeration systems, designed for optimal performance across various industrial and commercial applications.',
                    
                    // Badges
                    'badge-bestseller': 'Best Seller',
                    'badge-new': 'New',
                    'badge-specialized': 'Specialized',
                    
                    // Product 1
                    'product-1-title': 'Industrial Remote Condensing Units',
                    'product-1-desc': 'High-capacity condensing units for large industrial facilities, featuring advanced inverter technology and intelligent control systems for maximum efficiency.',
                    
                    // Product 2
                    'product-2-title': 'Commercial Remote Systems',
                    'product-2-desc': 'Versatile remote systems for supermarkets, hotels, and commercial buildings with modular design for easy expansion and maintenance.',
                    
                    // Product 3
                    'product-3-title': 'Modular Remote Units',
                    'product-3-desc': 'Scalable modular systems that can be expanded as your needs grow, perfect for warehouses, logistics centers, and manufacturing plants.',
                    
                    // Product 4
                    'product-4-title': 'Low-Temperature Remote Systems',
                    'product-4-desc': 'Specialized systems for deep freezing applications, featuring cascade refrigeration technology for temperatures down to -60°C.',
                    
                    // Specifications
                    'spec-capacity': 'Capacity',
                    'spec-refrigerant': 'Refrigerant',
                    'spec-efficiency': 'Efficiency',
                    'spec-noise': 'Noise Level',
                    'spec-temp': 'Temperature',
                    'spec-modules': 'Modules',
                    'spec-control': 'Control',
                    'spec-cert': 'Certification',
                    
                    // Buttons
                    'btn-details': 'Details',
                    'btn-quote': 'Quote',
                    
                    // CTA Section
                    'cta-title': 'Ready to Transform Your Cooling System?',
                    'cta-subtitle': 'Our experts are ready to help you choose the perfect remote refrigeration system for your specific needs. Get a personalized quote or schedule a consultation today.',
                    'cta-button': 'Get a Quote',
                    
                    // Footer
                    'footer-desc': 'Leading provider of premium refrigeration solutions in Barcelona and across Spain, specializing in remote systems for industrial and commercial applications.',
                    'footer-links': 'Quick Links',
                    'footer-services': 'Our Services',
                    'footer-contact': 'Contact Info',
                    
                    'nav-home': 'Home',
                    'nav-products': 'Products',
                    'nav-remote': 'Remote Systems',
                    'nav-plugin': 'Plug-in Units',
                    'nav-coldrooms': 'Cold Rooms',
                    'nav-contact': 'Contact Us',
                    
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
                    'page-title': 'Sistemas de Refrigeración Remotos | Signoco Refrigeración | Barcelona',
                    
                    // Navigation
                    'nav-about': 'Acerca de',
                    'nav-services': 'Servicios',
                    'nav-products': 'Productos',
                    'nav-industries': 'Industrias',
                    'nav-contact': 'Contacto',
                    'nav-get-quote': 'Pedir Presupuesto',
                    
                    // Hero Section
                    'hero-title-es': 'Sistemas de Refrigeración Remotos',
                    'hero-subtitle-es': 'Soluciones avanzadas de enfriamiento centralizado para aplicaciones industriales, comerciales y a gran escala. Nuestros sistemas remotos ofrecen eficiencia superior, confiabilidad y rendimiento con ahorros de energía de hasta el 40%.',
                    
                    // Stats
                    'stat-energy': '40%',
                    'stat-energy-label': 'Ahorro Energético',
                    'stat-operation': '24/7',
                    'stat-operation-label': 'Operación',
                    'stat-temp': '-30°C',
                    'stat-temp-label': 'Rango de Temperatura',
                    'stat-cert': 'ISO 9001',
                    'stat-cert-label': 'Certificado',
                    
                    // Products Section
                    'products-title-es': 'Nuestros Sistemas Remotos',
                    'products-subtitle-es': 'Explore nuestra gama completa de sistemas de refrigeración remotos, diseñados para un rendimiento óptimo en diversas aplicaciones industriales y comerciales.',
                    
                    // Badges
                    'badge-bestseller': 'Más Vendido',
                    'badge-new': 'Nuevo',
                    'badge-specialized': 'Especializado',
                    
                    // Product 1
                    'product-1-title-es': 'Unidades de Condensación Remotas Industriales',
                    'product-1-desc-es': 'Unidades de condensación de alta capacidad para grandes instalaciones industriales, con tecnología inversora avanzada y sistemas de control inteligente para máxima eficiencia.',
                    
                    // Product 2
                    'product-2-title-es': 'Sistemas Remotos Comerciales',
                    'product-2-desc-es': 'Sistemas remotos versátiles para supermercados, hoteles y edificios comerciales con diseño modular para fácil expansión y mantenimiento.',
                    
                    // Product 3
                    'product-3-title-es': 'Unidades Remotas Modulares',
                    'product-3-desc-es': 'Sistemas modulares escalables que se pueden expandir según sus necesidades, perfectos para almacenes, centros logísticos y plantas de fabricación.',
                    
                    // Product 4
                    'product-4-title-es': 'Sistemas Remotos de Baja Temperatura',
                    'product-4-desc-es': 'Sistemas especializados para aplicaciones de congelación profunda, con tecnología de refrigeración en cascada para temperaturas de hasta -60°C.',
                    
                    // Specifications
                    'spec-capacity-es': 'Capacidad',
                    'spec-refrigerant-es': 'Refrigerante',
                    'spec-efficiency-es': 'Eficiencia',
                    'spec-noise-es': 'Nivel de Ruido',
                    'spec-temp-es': 'Temperatura',
                    'spec-modules-es': 'Módulos',
                    'spec-control-es': 'Control',
                    'spec-cert-es': 'Certificación',
                    
                    // Buttons
                    'btn-details': 'Detalles',
                    'btn-quote': 'Presupuesto',
                    
                    // CTA Section
                    'cta-title-es': '¿Listo para Transformar Su Sistema de Enfriamiento?',
                    'cta-subtitle-es': 'Nuestros expertos están listos para ayudarle a elegir el sistema de refrigeración remoto perfecto para sus necesidades específicas. Obtenga un presupuesto personalizado o programe una consulta hoy.',
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
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                window.addEventListener('scroll', function() {
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

            // -------- Smooth scroll for anchor links --------
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // -------- Sticky CTA functionality --------
            const quoteBtn = document.querySelector('.quote-btn');
            if (quoteBtn) {
                quoteBtn.addEventListener('click', function() {
                    window.location.href = 'contact.html';
                });
            }
        });