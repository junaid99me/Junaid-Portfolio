// ===== GLOBAL VARIABLES =====
let cursor = null;
let cursorTrail = null;
let isMouseMoving = false;
let mouseTimeout = null;

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ===== INITIALIZE APPLICATION =====
function initializeApp() {
    initializeCustomCursor();
    initializeTypewriter();
    initializeHero();

    initializeNavigation();
    initializeProjectModals();
    initializeContactForm();
    initializeSkillBars();
    initializeSkillsTabs();
    initializeScrollAnimations();
    initializeProcessInteractions();
    initializeTechStack();
    initializeScrollEffects();
    initializeEasterEggs();
    initializeParticles();
    initializeAbout();
    
    // Initialize all scroll functionality
    initializeScrollToTop();
    initializeEnhancedScrollEffects();
    optimizeScrollPerformance();
    initializeMobileScrollOptimizations();
    initializeSmoothScrolling();
    initializeScrollProgress();
    initializeScrollBasedAnimations();
    initializeScrollEventListeners();
    
    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
}

// ===== CUSTOM CURSOR =====
function initializeCustomCursor() {
    console.log('Initializing custom cursor...');
    
    // Create cursor elements dynamically
    cursor = document.createElement('div');
    cursorTrail = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorTrail.className = 'cursor-trail';
    
    // Set initial styles
    cursor.style.opacity = '1';
    cursorTrail.style.opacity = '1';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorTrail);
    
    console.log('Cursor elements created and added to DOM');
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add hover effects for different elements
    addCursorHoverEffects();
    
    console.log('Custom cursor initialized successfully');
}

function handleMouseMove(e) {
    if (!cursor || !cursorTrail) {
        console.log('Cursor or cursorTrail not found');
        return;
    }
    
    const x = e.clientX;
    const y = e.clientY;
    
    // Update cursor position with smooth animation (centered)
    cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
    
    // Update trail with delay for smooth effect (centered)
    setTimeout(() => {
        cursorTrail.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
    }, 50);
    
    // Show cursor
    cursor.style.opacity = '1';
    cursorTrail.style.opacity = '1';
    
    // Reset mouse movement timer
    isMouseMoving = true;
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
        cursor.style.opacity = '0';
        cursorTrail.style.opacity = '0';
    }, 3000);
}

function handleMouseDown() {
    if (!cursor) return;
    cursor.classList.add('cursor-click');
}

function handleMouseUp() {
    if (!cursor) return;
    cursor.classList.remove('cursor-click');
}

function addCursorHoverEffects() {
    // Interactive elements with different cursor states
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .tech-item, input, textarea, h1, h2, h3, h4, h5, h6');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (!cursor) return;
            cursor.classList.add('cursor-hover');
            
            // Different cursor states based on element type
            if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                cursor.classList.add('cursor-link');
            } else if (element.tagName.match(/H[1-6]/)) {
                cursor.classList.add('cursor-heading');
            } else if (element.classList.contains('project-card')) {
                cursor.classList.add('cursor-project');
            } else if (element.classList.contains('skill-item')) {
                cursor.classList.add('cursor-skill');
            } else if (element.classList.contains('tech-item')) {
                cursor.classList.add('cursor-tech');
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                cursor.classList.add('cursor-text');
            }
        });
        
        element.addEventListener('mouseleave', () => {
            if (!cursor) return;
            cursor.classList.remove('cursor-hover', 'cursor-link', 'cursor-heading', 'cursor-project', 'cursor-skill', 'cursor-tech', 'cursor-text');
        });
    });
}

// ===== TYPEWRITER EFFECT =====
function initializeTypewriter() {
    const typewriterElement = document.querySelector('.typewriter');
    if (!typewriterElement) return;
    
    const roles = ['Developer', 'Designer', 'Creator', 'Innovator'];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typewriterElement.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentCharIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    typeWriter();
}

// ===== HERO SECTION =====
function initializeHero() {
    initializeHeroAnimations();
    initializeHeroStats();
    initializeHeroInteractions();
    initializeHeroParticles();
    initializeScrollProgress();
}

function initializeHeroAnimations() {
    // Typewriter effect for hero subtitle
    const typewriterElement = document.querySelector('.hero-subtitle');
    if (typewriterElement) {
        const texts = ['Creative Developer', 'UI/UX Designer', 'Digital Creator', 'Tech Innovator'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeWriter() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            
            const speed = isDeleting ? 100 : 150;
            setTimeout(typeWriter, speed);
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Hero stats counter animation
    const statNumbers = document.querySelectorAll('.hero-stats .stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        // Start counter when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat);
    });
    

    
    // Hero particles
    initializeHeroParticles();
}

function initializeHeroStats() {
    const statNumbers = document.querySelectorAll('.hero-stats .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, targetValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function initializeHeroInteractions() {
    // CTA button interactions
    const ctaButton = document.getElementById('ctaButton');
    const contactButton = document.getElementById('contactButton');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            createButtonParticles(ctaButton);
            trackEvent('cta_clicked', { location: 'hero', button: 'view_work' });
            // Scroll to work section
            document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            createButtonParticles(contactButton);
            trackEvent('cta_clicked', { location: 'hero', button: 'contact' });
            // Scroll to contact section
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Avatar interactions
    const avatar = document.querySelector('.avatar-placeholder');
    if (avatar) {
        avatar.addEventListener('mouseenter', () => {
            createAvatarParticles(avatar);
        });
        
        avatar.addEventListener('click', () => {
            createAvatarClickParticles(avatar);
        });
    }
    

    
    // Advanced visual interactions
    initializeAdvancedInteractions();
    
    // Initialize creative avatar interactions
    initializeCreativeAvatar();
    
    // Initialize status indicator interactions
    initializeStatusIndicator();
}

function initializeAdvancedInteractions() {
    // Tech orbs interactions
    document.querySelectorAll('.tech-orbs .tech-orb').forEach(orb => {
        orb.addEventListener('mouseenter', () => {
            createOrbParticles(orb);
            gsap.to(orb, {
                duration: 0.3,
                scale: 1.3,
                ease: 'power2.out'
            });
        });
        
        orb.addEventListener('mouseleave', () => {
            gsap.to(orb, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
        
        orb.addEventListener('click', () => {
            createOrbExplosion(orb);
            showTechTooltip(orb);
        });
    });
    
    // Holographic sphere interactions
    const holoSphere = document.querySelector('.holo-sphere');
    if (holoSphere) {
        holoSphere.addEventListener('mouseenter', () => {
            gsap.to(holoSphere, {
                duration: 0.5,
                rotationY: '+=45',
                ease: 'power2.out'
            });
        });
        
        holoSphere.addEventListener('click', () => {
            createSphereExplosion(holoSphere);
        });
    }
    
    // Neural network interactions
    document.querySelectorAll('.neural-network .neuron').forEach(neuron => {
        neuron.addEventListener('mouseenter', () => {
            gsap.to(neuron, {
                duration: 0.3,
                scale: 1.5,
                boxShadow: '0 0 25px rgba(34, 211, 238, 1)',
                ease: 'power2.out'
            });
        });
        
        neuron.addEventListener('mouseleave', () => {
            gsap.to(neuron, {
                duration: 0.3,
                scale: 1,
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)',
                ease: 'power2.out'
            });
        });
    });
    
    // Interactive grid interactions
    document.querySelectorAll('.interactive-grid .grid-node').forEach(node => {
        node.addEventListener('mouseenter', () => {
            gsap.to(node, {
                duration: 0.3,
                scale: 1.4,
                boxShadow: '0 0 20px rgba(34, 211, 238, 0.9)',
                ease: 'power2.out'
            });
        });
        
        node.addEventListener('mouseleave', () => {
            gsap.to(node, {
                duration: 0.3,
                scale: 1,
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)',
                ease: 'power2.out'
            });
        });
    });
}

function initializeStatusIndicator() {
    const statusIndicator = document.querySelector('.status-indicator');
    if (!statusIndicator) return;

    // Add hover effects
    statusIndicator.addEventListener('mouseenter', () => {
        gsap.to('.status-pulse', {
            duration: 0.3,
            scale: 1.2,
            opacity: 0.8,
            ease: 'power2.out'
        });

        gsap.to('.status-icon', {
            duration: 0.3,
            scale: 1.1,
            ease: 'power2.out'
        });

        // Enhance glow effect
        gsap.to('.status-indicator', {
            duration: 0.3,
            boxShadow: '0 20px 60px rgba(34, 211, 238, 0.3)',
            ease: 'power2.out'
        });
    });

    statusIndicator.addEventListener('mouseleave', () => {
        gsap.to('.status-pulse', {
            duration: 0.3,
            scale: 1,
            opacity: 0.3,
            ease: 'power2.out'
        });

        gsap.to('.status-icon', {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });

        gsap.to('.status-indicator', {
            duration: 0.3,
            boxShadow: '0 12px 40px rgba(34, 211, 238, 0.15)',
            ease: 'power2.out'
        });
    });

    // Add click effects
    statusIndicator.addEventListener('click', () => {
        // Create status change effect
        createStatusChangeEffect(statusIndicator);
        
        // Pulse animation
        gsap.to('.status-core', {
            duration: 0.2,
            scale: 1.3,
            ease: 'power2.out',
            yoyo: true,
            repeat: 1
        });

        // Rotate icon
        gsap.to('.status-icon', {
            duration: 0.5,
            rotation: '+=180',
            ease: 'power2.out'
        });

        // Change status text with animation
        const statusValue = statusIndicator.querySelector('.status-value');
        if (statusValue) {
            const statuses = [
                'Quantum Coding',
                'Neural Processing',
                'Holographic Design',
                'AI Integration',
                'Future Building'
            ];
            
            const currentIndex = statuses.indexOf(statusValue.textContent);
            const nextIndex = (currentIndex + 1) % statuses.length;
            
            gsap.to(statusValue, {
                duration: 0.3,
                opacity: 0,
                y: -10,
                ease: 'power2.out',
                onComplete: () => {
                    statusValue.textContent = statuses[nextIndex];
                    gsap.to(statusValue, {
                        duration: 0.3,
                        opacity: 1,
                        y: 0,
                        ease: 'power2.out'
                    });
                }
            });
        }
    });

    // Add continuous floating animation
    gsap.to('.status-indicator', {
        duration: 4,
        y: -5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
    });
}

function createStatusChangeEffect(statusIndicator) {
    const rect = statusIndicator.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Create status change particles
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'status-change-particle';
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: linear-gradient(45deg, #22d3ee, #7C3AED);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;

        document.body.appendChild(particle);

        const angle = (i / 8) * Math.PI * 2;
        const distance = 40 + Math.random() * 30;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;

        gsap.to(particle, {
            x: targetX - centerX,
            y: targetY - centerY,
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    }
}

function initializeHeroParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

function initializeScrollProgress() {
    const progressBar = document.querySelector('.progress-bar');
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.transform = `translateY(${100 - scrollPercent}%)`;
    });
}

function createButtonParticles(button) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'button-particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--primary-cyan);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        gsap.to(particle, {
            x: targetX - centerX,
            y: targetY - centerY,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    }
}

function createAvatarParticles(avatar) {
    const rect = avatar.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'avatar-particle';
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: var(--primary-cyan);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 20;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        gsap.to(particle, {
            x: targetX - centerX,
            y: targetY - centerY,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    }
}

function createAvatarClickParticles(avatar) {
    const rect = avatar.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'avatar-click-particle';
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: var(--primary-purple);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 60 + Math.random() * 40;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        gsap.to(particle, {
            x: targetX - centerX,
            y: targetY - centerY,
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    }
}

function initializeCreativeAvatar() {
    const creativeAvatar = document.querySelector('.creative-avatar');
    if (!creativeAvatar) return;
    
    // Add hover effects
    creativeAvatar.addEventListener('mouseenter', () => {
        gsap.to('.avatar-pulse', {
            duration: 0.3,
            scale: 1.2,
            opacity: 0.8,
            ease: 'power2.out'
        });
        
        gsap.to('.avatar-symbol', {
            duration: 0.3,
            scale: 1.1,
            ease: 'power2.out'
        });
        
        // Create floating particles
        createAvatarParticles(creativeAvatar);
    });
    
    creativeAvatar.addEventListener('mouseleave', () => {
        gsap.to('.avatar-pulse', {
            duration: 0.3,
            scale: 1,
            opacity: 0.3,
            ease: 'power2.out'
        });
        
        gsap.to('.avatar-symbol', {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
    
    // Add click effects
    creativeAvatar.addEventListener('click', () => {
        // Create explosion effect
        createAvatarExplosion(creativeAvatar);
        
        // Pulse animation
        gsap.to('.avatar-core', {
            duration: 0.2,
            scale: 1.3,
            ease: 'power2.out',
            yoyo: true,
            repeat: 1
        });
        
        // Rotate symbol
        gsap.to('.avatar-symbol', {
            duration: 0.5,
            rotation: '+=180',
            ease: 'power2.out'
        });
    });
    
    // Add floating animation
    gsap.to('.avatar-core', {
        duration: 4,
        y: -10,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
    });
}

function createAvatarExplosion(avatar) {
    const rect = avatar.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, #22d3ee, #7C3AED, #f59e0b);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 60 + Math.random() * 40;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        gsap.to(particle, {
            x: targetX - centerX,
            y: targetY - centerY,
            opacity: 0,
            scale: 0,
            duration: 1.2,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    }
}

function createIconParticles(icon) {
    const rect = icon.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.className = 'icon-particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--primary-cyan);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 15;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        gsap.to(particle, {
            x: targetX - centerX,
            y: targetY - centerY,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    }
}

function createIconClickParticles(icon) {
    const rect = icon.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'icon-click-particle';
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: var(--primary-amber);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 6) * Math.PI * 2;
        const distance = 40 + Math.random() * 20;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        gsap.to(particle, {
            x: targetX - centerX,
            y: targetY - centerY,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    }
}

function createBackgroundParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--primary-cyan);
        border-radius: 50%;
        opacity: 0.3;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
    `;
    
    container.appendChild(particle);
    
    gsap.to(particle, {
        y: -100,
        opacity: 0,
        duration: 10 + Math.random() * 10,
        ease: 'none',
        repeat: -1,
        delay: Math.random() * 5
    });
}

// Advanced visual effect functions
function createOrbParticles(orb) {
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary-cyan);
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 8px rgba(34, 211, 238, 0.8);
        `;
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 30 + Math.random() * 20;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.transform = 'translate(-50%, -50%)';
        
        orb.appendChild(particle);
        
        gsap.to(particle, {
            duration: 1,
            x: x,
            y: y,
            opacity: 0,
            scale: 0,
            ease: 'power2.out',
            onComplete: () => {
                if (orb.contains(particle)) {
                    orb.removeChild(particle);
                }
            }
        });
    }
}

function createOrbExplosion(orb) {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: var(--gradient-primary);
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.9);
        `;
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.transform = 'translate(-50%, -50%)';
        
        orb.appendChild(particle);
        
        gsap.to(particle, {
            duration: 1.5,
            x: x,
            y: y,
            opacity: 0,
            scale: 0,
            ease: 'power3.out',
            onComplete: () => {
                if (orb.contains(particle)) {
                    orb.removeChild(particle);
                }
            }
        });
    }
}

function createSphereExplosion(sphere) {
    // Create energy burst effect
    const burst = document.createElement('div');
    burst.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10;
    `;
    
    sphere.appendChild(burst);
    
    gsap.to(burst, {
        duration: 1,
        scale: 2,
        opacity: 0,
        ease: 'power3.out',
        onComplete: () => {
            if (sphere.contains(burst)) {
                sphere.removeChild(burst);
            }
        }
    });
    
    // Create particle ring
    for (let i = 0; i < 16; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background: var(--primary-cyan);
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 20px rgba(34, 211, 238, 1);
        `;
        
        const angle = (i / 16) * Math.PI * 2;
        const distance = 80;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.transform = 'translate(-50%, -50%)';
        
        sphere.appendChild(particle);
        
        gsap.to(particle, {
            duration: 2,
            x: x * 2,
            y: y * 2,
            opacity: 0,
            scale: 0,
            ease: 'power3.out',
            onComplete: () => {
                if (sphere.contains(particle)) {
                    sphere.removeChild(particle);
                }
            }
        });
    }
}

function showTechTooltip(orb) {
    const tech = orb.getAttribute('data-tech');
    if (!tech) return;
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(15, 15, 26, 0.95);
        border: 1px solid var(--primary-cyan);
        border-radius: 10px;
        padding: 8px 12px;
        color: var(--primary-cyan);
        font-size: 0.8rem;
        font-weight: 600;
        pointer-events: none;
        z-index: 1000;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 20px rgba(34, 211, 238, 0.3);
        transform: translateY(-40px);
        opacity: 0;
    `;
    tooltip.textContent = tech;
    
    orb.appendChild(tooltip);
    
    // Position tooltip
    const rect = orb.getBoundingClientRect();
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%) translateY(-40px)';
    
    // Animate in
    gsap.to(tooltip, {
        duration: 0.3,
        opacity: 1,
        y: -50,
        ease: 'power2.out'
    });
    
    // Animate out after delay
    setTimeout(() => {
        gsap.to(tooltip, {
            duration: 0.3,
            opacity: 0,
            y: -40,
            ease: 'power2.out',
            onComplete: () => {
                if (orb.contains(tooltip)) {
                    orb.removeChild(tooltip);
                }
            }
        });
    }, 2000);
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
    }
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// ===== PROJECT MODALS =====
function initializeProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    
    if (!modal || !modalContent) return;
    
    // Project data
    const projectData = {
        'project-1': {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with React frontend and Node.js backend.',
            problem: 'Businesses needed a scalable, user-friendly e-commerce platform with advanced features.',
            solution: 'Built a modern React SPA with Redux state management, Node.js API with Express, MongoDB database, and Stripe payment integration.',
            results: 'Increased conversion rates by 40%, reduced cart abandonment by 25%, and improved page load times by 60%.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
            image: 'https://via.placeholder.com/600x400/22d3ee/ffffff?text=E-Commerce+Platform'
        },
        'project-2': {
            title: 'AI-Powered Dashboard',
            description: 'Real-time analytics dashboard with machine learning insights.',
            problem: 'Companies struggled to make sense of large datasets and needed actionable insights.',
            solution: 'Developed a real-time dashboard using Vue.js, Python Flask API, TensorFlow for ML models, and WebSocket connections.',
            results: 'Reduced data analysis time by 70%, improved decision-making accuracy by 35%, and increased user engagement by 50%.',
            tech: ['Vue.js', 'Python', 'TensorFlow', 'WebSocket', 'Chart.js'],
            image: 'https://via.placeholder.com/600x400/7C3AED/ffffff?text=AI+Dashboard'
        },
        'project-3': {
            title: 'Mobile Fitness App',
            description: 'Cross-platform fitness tracking app with social features.',
            problem: 'Fitness enthusiasts needed a comprehensive app that worked across all devices with social motivation.',
            solution: 'Created a React Native app with Firebase backend, real-time tracking, social features, and gamification elements.',
            results: 'Achieved 100k+ downloads, 4.8-star rating, and 80% user retention rate after 6 months.',
            tech: ['React Native', 'Firebase', 'Redux', 'Expo', 'Social APIs'],
            image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Fitness+App'
        },
        'project-4': {
            title: 'Blockchain Portfolio Tracker',
            description: 'Cryptocurrency portfolio management with real-time tracking.',
            problem: 'Crypto investors needed a secure, real-time portfolio tracker with advanced analytics.',
            solution: 'Built a secure web app with React, Web3.js for blockchain integration, real-time price feeds, and advanced charting.',
            results: 'Secured $2M+ in user assets, achieved 99.9% uptime, and gained 50k+ active users.',
            tech: ['React', 'Web3.js', 'Ethereum', 'Chart.js', 'WebSocket'],
            image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Crypto+Tracker'
        }
    };
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            const data = projectData[projectId];
            
            if (data) {
                openModal(data);
            }
        });
    });
    
    function openModal(data) {
        modalContent.innerHTML = `
            <div class="modal-header">
                <h2>${data.title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <img src="${data.image}" alt="${data.title}" class="modal-image">
                <div class="modal-description">
                    <p>${data.description}</p>
                </div>
                <div class="modal-case-study">
                    <div class="case-section">
                        <h3>Problem</h3>
                        <p>${data.problem}</p>
                    </div>
                    <div class="case-section">
                        <h3>Solution</h3>
                        <p>${data.solution}</p>
                    </div>
                    <div class="case-section">
                        <h3>Results</h3>
                        <p>${data.results}</p>
                    </div>
                </div>
                <div class="modal-tech">
                    <h3>Technologies Used</h3>
                    <div class="tech-tags">
                        ${data.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Re-attach close event
        const newCloseBtn = modal.querySelector('.modal-close');
        newCloseBtn.addEventListener('click', closeModal);
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Close modal on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    const submitButton = contactForm?.querySelector('.submit-button');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validate form
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span class="button-icon">✈️</span> Sending...';
        submitButton.disabled = true;
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    });
    
    // Input focus effects
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary-cyan)' : type === 'error' ? '#ef4444' : 'var(--primary-purple)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// ===== SKILL BARS =====
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percentage = progressBar.dataset.progress || 0;
                progressBar.style.width = `${percentage}%`;
                progressBar.classList.add('animate-progress');
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
    
    // Initialize stats counter animation
    initializeStatsCounter();
    
    // Initialize orbital skills interaction
    initializeOrbitalSkills();
}

// ===== STATS COUNTER =====
function initializeStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const target = parseInt(statElement.dataset.target);
                animateCounter(statElement, target);
                observer.unobserve(statElement);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (element.textContent.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else if (element.textContent.includes('-')) {
            element.textContent = element.dataset.target;
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// ===== ORBITAL SKILLS =====
function initializeOrbitalSkills() {
    const orbitingSkills = document.querySelectorAll('.orbiting-skill');
    
    orbitingSkills.forEach(skill => {
        skill.addEventListener('click', () => {
            const skillName = skill.dataset.skill;
            highlightSkill(skillName);
            createSkillParticles(skill);
        });
        
        skill.addEventListener('mouseenter', () => {
            skill.style.transform = 'scale(1.3)';
            skill.style.zIndex = '20';
        });
        
        skill.addEventListener('mouseleave', () => {
            skill.style.transform = 'scale(1)';
            skill.style.zIndex = '1';
        });
    });
}

function highlightSkill(skillName) {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        if (item.dataset.skill === skillName) {
            item.style.transform = 'scale(1.05)';
            item.style.borderColor = 'var(--primary-cyan)';
            item.style.boxShadow = '0 0 30px rgba(34, 211, 238, 0.5)';
            
            setTimeout(() => {
                item.style.transform = 'scale(1)';
                item.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                item.style.boxShadow = 'none';
            }, 2000);
        }
    });
}

function createSkillParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--primary-cyan);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            document.body.removeChild(particle);
        };
    }
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('projects-grid') || 
                    entry.target.classList.contains('skills-grid') ||
                    entry.target.classList.contains('testimonials-grid') ||
                    entry.target.classList.contains('tech-grid') ||
                    entry.target.classList.contains('achievements-grid')) {
                    
                    const items = entry.target.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate-in');
                        }, index * 100);
                    });
                }
                
                // Special animation for process steps
                if (entry.target.classList.contains('process-timeline')) {
                    const steps = entry.target.querySelectorAll('.process-step');
                    steps.forEach((step, index) => {
                        setTimeout(() => {
                            step.classList.add('animate-in');
                            animateProcessStep(step);
                        }, index * 300);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections and grid containers
    const animatedElements = document.querySelectorAll('section, .projects-grid, .skills-grid, .testimonials-grid, .tech-grid, .achievements-grid, .process-timeline');
    animatedElements.forEach(el => observer.observe(el));
}

// ===== PROCESS STEP ANIMATIONS =====
function animateProcessStep(step) {
    const icon = step.querySelector('.icon-container');
    const content = step.querySelector('.step-content');
    
    // Animate icon
    if (icon) {
        icon.style.transform = 'scale(0)';
        icon.style.opacity = '0';
        
        setTimeout(() => {
            icon.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            icon.style.transform = 'scale(1)';
            icon.style.opacity = '1';
        }, 200);
    }
    
    // Animate content
    if (content) {
        content.style.transform = 'translateX(50px)';
        content.style.opacity = '0';
        
        setTimeout(() => {
            content.style.transition = 'all 0.6s ease-out';
            content.style.transform = 'translateX(0)';
            content.style.opacity = '1';
        }, 400);
    }
}

// ===== PROCESS INTERACTIONS =====
function initializeProcessInteractions() {
    const processSteps = document.querySelectorAll('.process-step');
    
    processSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            // Add glow effect
            const icon = step.querySelector('.icon-container');
            if (icon) {
                icon.style.boxShadow = '0 0 50px rgba(34, 211, 238, 0.8)';
            }
            
            // Animate timeline line
            const timelineLine = document.querySelector('.timeline-line');
            if (timelineLine) {
                const progress = ((index + 1) / processSteps.length) * 100;
                timelineLine.style.background = `linear-gradient(to bottom, var(--primary-cyan) ${progress}%, var(--primary-purple) ${progress}%)`;
            }
        });
        
        step.addEventListener('mouseleave', () => {
            const icon = step.querySelector('.icon-container');
            if (icon) {
                icon.style.boxShadow = '0 0 30px rgba(34, 211, 238, 0.3)';
            }
        });
        
        // Add click interaction
        step.addEventListener('click', () => {
            createProcessParticles(step);
            showProcessDetails(step, index);
        });
    });
}

function createProcessParticles(step) {
    const rect = step.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: ${i % 2 === 0 ? 'var(--primary-cyan)' : 'var(--primary-purple)'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 80 + Math.random() * 40;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1200,
            easing: 'ease-out',
            delay: i * 50
        }).onfinish = () => {
            document.body.removeChild(particle);
        };
    }
}

function showProcessDetails(step, index) {
    const stepTitle = step.querySelector('.step-title')?.textContent;
    const stepDescription = step.querySelector('.step-description')?.textContent;
    
    // Create a floating info card
    const infoCard = document.createElement('div');
    infoCard.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--card-bg);
        border: 1px solid var(--primary-cyan);
        border-radius: 15px;
        padding: 2rem;
        max-width: 400px;
        z-index: 10000;
        backdrop-filter: blur(20px);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    infoCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3 style="color: var(--primary-cyan); margin: 0; font-size: 1.5rem;">${stepTitle}</h3>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: var(--text-secondary); font-size: 1.5rem; cursor: pointer;">×</button>
        </div>
        <p style="color: var(--text-secondary); line-height: 1.6; margin: 0;">${stepDescription}</p>
    `;
    
    document.body.appendChild(infoCard);
    
    // Animate in
    setTimeout(() => {
        infoCard.style.opacity = '1';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(infoCard)) {
            infoCard.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(infoCard)) {
                    document.body.removeChild(infoCard);
                }
            }, 300);
        }
    }, 5000);
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Parallax effect for floating icons and particles
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-icon, .particle');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    

    
    // Navbar background on scroll
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 15, 26, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(15, 15, 26, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
            }
        });
    }
}

// ===== EASTER EGGS =====
function initializeEasterEggs() {
    // Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            triggerEasterEgg();
            konamiCode = [];
        }
    });
    
    // Secret click on logo
    const logo = document.querySelector('.nav-logo');
    let clickCount = 0;
    let clickTimer = null;
    
    if (logo) {
        logo.addEventListener('click', () => {
            clickCount++;
            
            if (clickTimer) clearTimeout(clickTimer);
            
            clickTimer = setTimeout(() => {
                if (clickCount >= 5) {
                    triggerEasterEgg();
                }
                clickCount = 0;
            }, 2000);
        });
    }
}

function triggerEasterEgg() {
    // Create particle explosion
    createParticleExplosion();
    
    // Show secret message
    showNotification('🎉 You found the secret! Welcome to the developer club!', 'success');
    
    // Add rainbow effect to page
    document.body.style.animation = 'rainbow 2s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
}

// ===== PARTICLE SYSTEM =====
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    // Create floating particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--primary-cyan);
        border-radius: 50%;
        opacity: 0.3;
        pointer-events: none;
        animation: float-particle ${5 + Math.random() * 10}s ease-in-out infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
    `;
    
    container.appendChild(particle);
}

function createParticleExplosion() {
    const explosion = document.createElement('div');
    explosion.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 10000;
    `;
    
    document.body.appendChild(explosion);
    
    // Create explosion particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: ${['var(--primary-cyan)', 'var(--primary-purple)', 'var(--primary-amber)'][Math.floor(Math.random() * 3)]};
            border-radius: 50%;
            animation: explode 1s ease-out forwards;
        `;
        
        const angle = (i / 20) * Math.PI * 2;
        const distance = 100 + Math.random() * 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.setProperty('--x', x + 'px');
        particle.style.setProperty('--y', y + 'px');
        
        explosion.appendChild(particle);
    }
    
    // Remove explosion after animation
    setTimeout(() => {
        document.body.removeChild(explosion);
    }, 1000);
}

// ===== ADDITIONAL CSS ANIMATIONS =====
const additionalStyles = `
    @keyframes float-particle {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
        50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
    }
    
    @keyframes explode {
        0% { transform: translate(0, 0); opacity: 1; }
        100% { transform: translate(var(--x), var(--y)); opacity: 0; }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-content-body {
        margin-top: 1rem;
    }
    
    .modal-section {
        margin-bottom: 2rem;
    }
    
    .modal-section h3 {
        color: var(--primary-cyan);
        margin-bottom: 0.5rem;
        font-family: var(--font-heading);
    }
    
    .modal-section p {
        color: var(--text-secondary);
        line-height: 1.6;
    }
    
    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .project-details {
        display: grid;
        gap: 0.5rem;
    }
    
    .detail-item {
        color: var(--text-secondary);
    }
    
    .detail-item strong {
        color: var(--text-primary);
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== TECH STACK FUNCTIONALITY =====
function initializeTechStack() {
    initializeTechCategories();
    initializeTechInteractions();
    initializeTechStats();
}

function initializeTechCategories() {
    const categoryPills = document.querySelectorAll('.category-pill');
    const techItems = document.querySelectorAll('.tech-item');
    
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const category = pill.getAttribute('data-category');
            
            // Update active pill
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            // Filter tech items
            techItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                    item.classList.add('animate-in');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('animate-in');
                }
            });
            
            // Create category switch particles
            createCategoryParticles(pill);
        });
    });
}

function initializeTechInteractions() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        // Hover effects
        item.addEventListener('mouseenter', () => {
            item.classList.add('tech-hover');
            createTechParticles(item);
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('tech-hover');
        });
        
        // Click effects
        item.addEventListener('click', () => {
            const techName = item.getAttribute('data-tech');
            showTechDetails(techName, item);
            createTechClickParticles(item);
        });
    });
}

function initializeTechStats() {
    const statNumbers = document.querySelectorAll('.tech-stats .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, finalValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function showTechDetails(techName, element) {
    // Create floating info card
    const infoCard = document.createElement('div');
    infoCard.className = 'tech-info-card';
    infoCard.innerHTML = `
        <div class="info-header">
            <span class="info-icon">${element.querySelector('.tech-icon').textContent}</span>
            <h3 class="info-title">${techName}</h3>
        </div>
        <div class="info-content">
            <p class="info-description">${element.querySelector('.tech-description').textContent}</p>
            <div class="info-meta">
                <span class="info-level">${element.querySelector('.tech-level').textContent}</span>
                <span class="info-experience">${element.querySelector('.tech-experience').textContent}</span>
            </div>
        </div>
    `;
    
    // Position and show card
    const rect = element.getBoundingClientRect();
    infoCard.style.position = 'fixed';
    infoCard.style.top = `${rect.top - 20}px`;
    infoCard.style.left = `${rect.left + rect.width + 20}px`;
    infoCard.style.zIndex = '1000';
    
    document.body.appendChild(infoCard);
    
    // Animate in
    setTimeout(() => {
        infoCard.classList.add('show');
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        infoCard.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(infoCard);
        }, 300);
    }, 3000);
}

function createTechParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'tech-particle';
        particle.style.position = 'fixed';
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        particle.style.zIndex = '999';
        
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        setTimeout(() => {
            particle.style.transform = `translate(${targetX - centerX}px, ${targetY - centerY}px)`;
            particle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            if (particle.parentNode) {
                document.body.removeChild(particle);
            }
        }, 1000);
    }
}

function createTechClickParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'tech-click-particle';
        particle.style.position = 'fixed';
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        particle.style.zIndex = '999';
        
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = (i / 12) * Math.PI * 2;
        const distance = 80 + Math.random() * 50;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        setTimeout(() => {
            particle.style.transform = `translate(${targetX - centerX}px, ${targetY - centerY}px)`;
            particle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            if (particle.parentNode) {
                document.body.removeChild(particle);
            }
        }, 1500);
    }
}

function createCategoryParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'category-particle';
        particle.style.position = 'fixed';
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        particle.style.zIndex = '999';
        
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = (i / 6) * Math.PI * 2;
        const distance = 40 + Math.random() * 20;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        setTimeout(() => {
            particle.style.transform = `translate(${targetX - centerX}px, ${targetY - centerY}px)`;
            particle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            if (particle.parentNode) {
                document.body.removeChild(particle);
            }
        }, 800);
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Throttle scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations and effects
}, 16)); // ~60fps

// Debounce resize events
window.addEventListener('resize', debounce(() => {
    // Handle responsive adjustments
}, 250));

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Focus management for modals
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    e.preventDefault();
                    lastFocusableElement.focus();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    e.preventDefault();
                    firstFocusableElement.focus();
                }
            }
        }
    });
}

// Initialize focus trapping for modals
const modal = document.getElementById('projectModal');
if (modal) {
    trapFocus(modal);
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
    // Could send to analytics service here
});

// ===== ANALYTICS (PLACEHOLDER) =====
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, properties);
    // In real implementation, this would send to Google Analytics, Mixpanel, etc.
}

// Track important user interactions
document.addEventListener('click', (e) => {
    if (e.target.matches('.cta-button')) {
        trackEvent('cta_clicked', { location: 'hero' });
    }
    if (e.target.matches('.project-card')) {
        trackEvent('project_viewed', { project: e.target.getAttribute('data-project') });
    }
    if (e.target.matches('.submit-button')) {
        trackEvent('contact_form_submitted');
    }
});

// ===== ABOUT SECTION =====
function initializeAbout() {
    const navDots = document.querySelectorAll('.nav-dot');
    const textSections = document.querySelectorAll('.text-section');
    const statCards = document.querySelectorAll('.stat-card');
    
    // Text navigation functionality
    navDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const targetSection = dot.getAttribute('data-section');
            console.log('Clicked on:', targetSection); // Debug log
            
            // Update active states
            navDots.forEach(d => d.classList.remove('active'));
            textSections.forEach(s => s.classList.remove('active'));
            
            dot.classList.add('active');
            const targetTextSection = document.querySelector(`.text-section[data-section="${targetSection}"]`);
            console.log('Target section found:', targetTextSection); // Debug log
            
            if (targetTextSection) {
                targetTextSection.classList.add('active');
                console.log('Active class added to:', targetSection); // Debug log
            }
            
            // Simple transition without GSAP
            if (targetTextSection) {
                targetTextSection.style.transition = 'all 0.6s ease';
            }
        });
    });
    
    // Initialize first section
    const firstSection = document.querySelector('.text-section[data-section="passion"]');
    if (firstSection) {
        firstSection.classList.add('active');
        console.log('Initialized passion section as active');
    }
    
    // Stat cards interactions
    statCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
            createStatParticles(card);
        });
        
        card.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        
        card.addEventListener('click', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1
                });
            }
            createStatParticles(card);
            animateStatNumber(card);
        });
    });
    
    // Initialize GSAP animations for About section
    if (typeof gsap !== 'undefined') {
        gsap.from('.quantum-hologram', {
            opacity: 0,
            scale: 0.8,
            rotation: 180,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.5
        });
        
        gsap.from('.about-stats', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            delay: 1
        });
        
        gsap.from('.text-container', {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: "power2.out",
            delay: 1.2
        });
        
        gsap.from('.text-navigation', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
            delay: 1.5
        });
    }
}

// Helper function to create stat particles
function createStatParticles(card) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'stat-particle';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        document.body.appendChild(particle);
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        if (typeof gsap !== 'undefined') {
            gsap.to(particle, {
                x: endX - centerX,
                y: endY - centerY,
                opacity: 0,
                scale: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: () => particle.remove()
            });
        } else {
            // Fallback animation without GSAP
            particle.style.transition = 'all 1s ease-out';
            setTimeout(() => {
                particle.style.transform = `translate(${endX - centerX}px, ${endY - centerY}px)`;
                particle.style.opacity = '0';
                particle.style.transform = 'scale(0)';
                setTimeout(() => particle.remove(), 1000);
            }, 10);
        }
    }
}

// Helper function to animate stat numbers
function animateStatNumber(card) {
    const numberElement = card.querySelector('.stat-number');
    
    if (typeof gsap !== 'undefined') {
        gsap.to(numberElement, {
            scale: 1.2,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power2.out"
        });
    } else {
        // Fallback animation without GSAP
        numberElement.style.transition = 'transform 0.2s ease-out';
        numberElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            numberElement.style.transform = 'scale(1)';
        }, 200);
    }
}

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        initializeCustomCursor,
        initializeTypewriter,
        initializeHero,

        initializeNavigation,
        initializeProjectModals,
        initializeContactForm,
        initializeSkillBars,
        initializeScrollEffects,
        initializeEasterEggs,
        initializeParticles,
        initializeAbout
    };
}

// Initialize Skills Tabs
function initializeSkillsTabs() {
    const tabs = document.querySelectorAll('.skill-tab');
    const tabContents = document.querySelectorAll('.skill-tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Re-initialize skill bars for the new active tab
                setTimeout(() => {
                    initializeSkillBars();
                }, 100);
            }
        });
    });
}

// ===== SCROLL FUNCTIONALITY =====

// Initialize scroll to top button
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (!scrollToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add keyboard support
    scrollToTopBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

// Initialize enhanced scroll effects
function initializeEnhancedScrollEffects() {
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Parallax effect for hero background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background > *');
        
        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Smooth reveal animations for sections
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => revealObserver.observe(element));
}

// Optimize scroll performance
function optimizeScrollPerformance() {
    // Throttle scroll events for better performance
    let ticking = false;
    
    function updateScrollEffects() {
        // Update scroll-based animations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    // Use passive scroll listener for better performance
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Initialize mobile scroll optimizations
function initializeMobileScrollOptimizations() {
    // Check if device supports touch
    if ('ontouchstart' in window) {
        // Add touch-specific scroll optimizations
        document.addEventListener('touchstart', () => {
            // Reduce animation complexity on touch devices
            document.body.classList.add('touch-device');
        }, { passive: true });
        
        // Optimize scroll performance on mobile
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Reduce particle count and animations on mobile
                const particles = document.querySelectorAll('.particle');
                if (particles.length > 20) {
                    particles.forEach((particle, index) => {
                        if (index > 20) {
                            particle.style.display = 'none';
                        }
                    });
                }
            }, 100);
        }, { passive: true });
    }
}

// Enhanced smooth scrolling for all internal links
function initializeSmoothScrolling() {
    // Get all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Also handle programmatic scrolling for any element with data-scroll attribute
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    scrollElements.forEach(element => {
        element.addEventListener('click', () => {
            const targetId = element.getAttribute('data-scroll');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll progress indicator
function initializeScrollProgress() {
    // Create scroll progress bar if it doesn't exist
    let progressBar = document.querySelector('.scroll-progress');
    
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
    }
    
    // Update progress bar on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
    });
}

// Initialize scroll-based animations
function initializeScrollBasedAnimations() {
    // Create intersection observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class
                entry.target.classList.add('animate-in');
                
                // Handle staggered animations for grid items
                if (entry.target.classList.contains('projects-grid') || 
                    entry.target.classList.contains('skills-grid') ||
                    entry.target.classList.contains('testimonials-grid') ||
                    entry.target.classList.contains('tech-grid') ||
                    entry.target.classList.contains('achievements-grid')) {
                    
                    const items = entry.target.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections and grid containers
    const animatedElements = document.querySelectorAll('section, .projects-grid, .skills-grid, .testimonials-grid, .tech-grid, .achievements-grid, .process-timeline');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize scroll event listeners
function initializeScrollEventListeners() {
    // Handle scroll events for various effects
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        // Clear previous timeout
        clearTimeout(scrollTimeout);
        
        // Set new timeout for scroll end detection
        scrollTimeout = setTimeout(() => {
            // Handle scroll end
            document.body.classList.add('scroll-ended');
            
            // Remove class after animation
            setTimeout(() => {
                document.body.classList.remove('scroll-ended');
            }, 1000);
        }, 150);
        
        // Add scrolling class
        document.body.classList.add('scrolling');
        
        // Remove scrolling class after scroll ends
        setTimeout(() => {
            document.body.classList.remove('scrolling');
        }, 100);
    }, { passive: true });
    
    // Handle wheel events for smooth scrolling
    window.addEventListener('wheel', (e) => {
        // Prevent default only if needed for custom scroll behavior
        // e.preventDefault();
    }, { passive: true });
    
    // Handle touch events for mobile
    if ('ontouchstart' in window) {
        let touchStartY = 0;
        let touchEndY = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            touchEndY = e.changedTouches[0].clientY;
            
            // Handle swipe gestures if needed
            const diff = touchStartY - touchEndY;
            if (Math.abs(diff) > 50) {
                // Significant swipe detected
                document.body.classList.add('swipe-detected');
                setTimeout(() => {
                    document.body.classList.remove('swipe-detected');
                }, 500);
            }
        }, { passive: true });
    }
}


