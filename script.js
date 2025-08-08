  // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            const scrollIndicator = document.getElementById('scroll-indicator');
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Update scroll indicator
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollIndicator.style.width = scrollPercent + '%';
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Animate skill bars on scroll
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                }
            });
        };

        window.addEventListener('scroll', animateSkillBars);
        window.addEventListener('load', animateSkillBars);

        // Create particles
        const createParticles = () => {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        };

        // Intersection Observer for animations
        const observeElements = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                    }
                });
            }, {
                threshold: 0.1
            });

            document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(el => {
                observer.observe(el);
            });
        };

        // Initialize
        window.addEventListener('load', () => {
            createParticles();
            observeElements();
        });

        // Add some interactive elements
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Dynamic typing effect for hero title (optional)
        const typeWriter = (element, text, speed = 50) => {
            let i = 0;
            element.innerHTML = '';
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, speed);
        };



        // Add cursor trail effect
        const createCursorTrail = () => {
            const trail = [];
            const maxTrail = 10;
            
            document.addEventListener('mousemove', (e) => {
                trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
                
                if (trail.length > maxTrail) {
                    trail.shift();
                }
                
                // Remove old trail elements
                document.querySelectorAll('.cursor-trail').forEach(el => {
                    if (Date.now() - parseInt(el.dataset.time) > 1000) {
                        el.remove();
                    }
                });
                
                // Create new trail element
                if (Math.random() > 0.5) { // Only create occasionally for performance
                    const trailElement = document.createElement('div');
                    trailElement.className = 'cursor-trail';
                    trailElement.dataset.time = Date.now();
                    trailElement.style.cssText = `
                        position: fixed;
                        left: ${e.clientX}px;
                        top: ${e.clientY}px;
                        width: 4px;
                        height: 4px;
                        background: var(--primary);
                        border-radius: 50%;
                        pointer-events: none;
                        z-index: 9999;
                        animation: trailFade 1s ease-out forwards;
                    `;
                    document.body.appendChild(trailElement);
                }
            });
        };

        // Trail fade animation
        const trailFadeCSS = `
            @keyframes trailFade {
                0% { opacity: 0.8; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
        `;
        const trailStyle = document.createElement('style');
        trailStyle.textContent = trailFadeCSS;
        document.head.appendChild(trailStyle);

        // Initialize cursor trail
        createCursorTrail();

        // Add floating action button for scroll to top
        const createScrollTopButton = () => {
            const button = document.createElement('button');
            button.innerHTML = '<i class="fas fa-arrow-up"></i>';
            button.className = 'scroll-top-btn';
            button.style.cssText = `
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                background: var(--gradient);
                border: none;
                border-radius: 50%;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                z-index: 1000;
                opacity: 0;
                transform: scale(0);
                transition: all 0.3s ease;
                box-shadow: 0 4px 20px rgba(0, 210, 255, 0.3);
            `;
            
            button.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    button.style.opacity = '1';
                    button.style.transform = 'scale(1)';
                } else {
                    button.style.opacity = '0';
                    button.style.transform = 'scale(0)';
                }
            });
            
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'scale(1.1)';
                button.style.boxShadow = '0 6px 25px rgba(0, 210, 255, 0.5)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'scale(1)';
                button.style.boxShadow = '0 4px 20px rgba(0, 210, 255, 0.3)';
            });
            
            document.body.appendChild(button);
        };

        createScrollTopButton();

        // Add 3D tilt effect to project cards
        const addTiltEffect = () => {
            document.querySelectorAll('.project-card, .skill-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / centerY * -10;
                    const rotateY = (x - centerX) / centerX * 10;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                });
            });
        };

        addTiltEffect();

        // Add parallax effect to hero section
        const addParallaxEffect = () => {
            const hero = document.querySelector('.hero');
            const heroContent = document.querySelector('.hero-content');
            
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                
                if (heroContent && scrolled < hero.offsetHeight) {
                    heroContent.style.transform = `translateY(${rate}px)`;
                }
            });
        };

        addParallaxEffect();

        // Add dynamic background color change based on scroll
        const addDynamicBackground = () => {
            const sections = document.querySelectorAll('section');
            const colors = [
                '#1a1a2e', // Hero
                '#16213e', // Skills
                '#0f3460', // Projects
                '#533483'  // Contact
            ];
            
            window.addEventListener('scroll', () => {
                let current = '';
                let colorIndex = 0;
                
                sections.forEach((section, index) => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        colorIndex = index;
                    }
                });
                
                // Smooth color transition
                document.querySelector('.bg-animation').style.background = 
                    `linear-gradient(-45deg, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]}, ${colors[(colorIndex + 2) % colors.length]}, ${colors[(colorIndex + 3) % colors.length]})`;
            });
        };

        addDynamicBackground();

        // Add loading animation
        const addLoadingAnimation = () => {
            const loader = document.createElement('div');
            loader.className = 'loader';
            loader.innerHTML = `
                <div class="loader-content">
                    <div class="loader-spinner"></div>
                    <p>Chargement du portfolio...</p>
                </div>
            `;
            loader.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--dark);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 1;
                transition: opacity 0.5s ease;
            `;
            
            const loaderCSS = `
                .loader-content {
                    text-align: center;
                    color: var(--light);
                }
                .loader-spinner {
                    width: 50px;
                    height: 50px;
                    border: 3px solid rgba(0, 210, 255, 0.3);
                    border-top: 3px solid var(--primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem auto;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            
            const loaderStyle = document.createElement('style');
            loaderStyle.textContent = loaderCSS;
            document.head.appendChild(loaderStyle);
            
            document.body.appendChild(loader);
            
            window.addEventListener('load', () => {
                setTimeout(() => {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.remove();
                    }, 500);
                }, 1000);
            });
        };

        // Initialize loading animation
        addLoadingAnimation();


        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            const sections = ['#accueil', '#competences', '#projets', '#contact'];
            let currentSection = 0;
            
            // Find current section
            sections.forEach((section, index) => {
                const element = document.querySelector(section);
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = index;
                }
            });
            
            // Navigate with arrow keys
            if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
                e.preventDefault();
                document.querySelector(sections[currentSection + 1]).scrollIntoView({ behavior: 'smooth' });
            } else if (e.key === 'ArrowUp' && currentSection > 0) {
                e.preventDefault();
                document.querySelector(sections[currentSection - 1]).scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Performance optimization: Lazy load animations
        const lazyAnimations = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                } else {
                    entry.target.style.animationPlayState = 'paused';
                }
            });
        });

        // Apply lazy loading to animated elements
        document.querySelectorAll('.particle').forEach(particle => {
            particle.style.animationPlayState = 'paused';
            lazyAnimations.observe(particle);
        });

       