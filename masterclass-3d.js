// ===== MASTERCLASS 3D ANIMATION INTERACTIONS =====

document.addEventListener('DOMContentLoaded', function() {
    initializeMasterclass3D();
});

function initializeMasterclass3D() {
    console.log('Initializing Masterclass 3D Animation System...');
    
    // Check if elements exist
    const scene = document.querySelector('.masterclass-3d-scene');
    const core = document.querySelector('.holographic-core');
    const particles = document.querySelectorAll('.q-particle');
    
    console.log('Scene element:', scene);
    console.log('Core element:', core);
    console.log('Particles found:', particles.length);
    
    if (!scene) {
        console.error('Masterclass 3D scene not found!');
        return;
    }
    
    // Initialize interactive controls
    initializeInteractiveControls();
    
    // Initialize mouse interactions
    initializeMouseInteractions();
    
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
    // Initialize dynamic effects
    initializeDynamicEffects();
    
    console.log('Masterclass 3D Animation System initialized successfully!');
}

// Interactive Controls
function initializeInteractiveControls() {
    const controlButtons = document.querySelectorAll('.control-button');
    
    controlButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            executeControlAction(action, this);
            createControlParticles(this);
        });
        
        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 25px rgba(34, 211, 238, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 20px rgba(34, 211, 238, 0.3)';
        });
    });
}

function executeControlAction(action, button) {
    const scene = document.querySelector('.scene-3d-container');
    const core = document.querySelector('.holographic-core');
    const orbitalSystem = document.querySelector('.orbital-system');
    const floatingTech = document.querySelector('.floating-tech');
    
    // Add visual feedback
    button.style.background = 'linear-gradient(135deg, rgba(34, 211, 238, 0.3) 0%, rgba(124, 58, 237, 0.3) 100%)';
    setTimeout(() => {
        button.style.background = 'linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)';
    }, 200);
    
    switch(action) {
        case 'accelerate':
            accelerateSystem(scene, core, orbitalSystem);
            break;
        case 'stabilize':
            stabilizeSystem(scene, core, orbitalSystem);
            break;
        case 'quantum':
            quantumMode(scene, core, floatingTech);
            break;
    }
}

function accelerateSystem(scene, core, orbitalSystem) {
    console.log('🚀 ACCELERATING SYSTEM...');
    
    // Speed up all animations dramatically
    scene.style.animationDuration = '5s';
    core.style.animationDuration = '3s';
    
    // Speed up particles (now 20 particles)
    const particles = document.querySelectorAll('.q-particle');
    particles.forEach(particle => {
        particle.style.animationDuration = '2s';
        particle.style.filter = 'brightness(2) saturate(2)';
    });
    
    // Speed up 3D holographic cubes
    const cubes = document.querySelectorAll('.holographic-cube');
    cubes.forEach((cube, index) => {
        cube.style.animationDuration = `${3 + index}s`;
        cube.style.filter = 'brightness(1.5)';
    });
    
    // Speed up tech elements
    const techElements = document.querySelectorAll('.tech-element');
    techElements.forEach(element => {
        element.style.animationDuration = '2s';
        element.style.transform = 'scale(1.2)';
        element.style.filter = 'brightness(1.8)';
    });
    
    // Create dramatic acceleration effects
    createAccelerationParticles();
    createSpeedLines();
    
    // Show notification
    showSystemNotification('🚀 SYSTEM ACCELERATED!', 'success');
    
    // Reset after 5 seconds
    setTimeout(() => {
        resetToNormal();
    }, 5000);
}

function stabilizeSystem(scene, core, orbitalSystem) {
    console.log('⚖️ STABILIZING SYSTEM...');
    
    // Slow down all animations for smooth stabilization
    scene.style.animationDuration = '30s';
    core.style.animationDuration = '25s';
    
    // Stabilize particles with smooth movement
    const particles = document.querySelectorAll('.q-particle');
    particles.forEach(particle => {
        particle.style.animationDuration = '15s';
        particle.style.filter = 'brightness(1.2)';
        particle.style.animationTimingFunction = 'ease-in-out';
    });
    
    // Stabilize 3D holographic cubes
    const cubes = document.querySelectorAll('.holographic-cube');
    cubes.forEach((cube, index) => {
        cube.style.animationDuration = `${20 + index * 3}s`;
        cube.style.filter = 'brightness(1.1)';
        cube.style.animationTimingFunction = 'ease-in-out';
    });
    
    // Stabilize tech elements
    const techElements = document.querySelectorAll('.tech-element');
    techElements.forEach(element => {
        element.style.animationDuration = '12s';
        element.style.transform = 'scale(1)';
        element.style.filter = 'brightness(1.1)';
        element.style.animationTimingFunction = 'ease-in-out';
    });
    
    // Create stabilization effects
    createStabilizationEffect();
    createHarmonyWaves();
    
    // Show notification
    showSystemNotification('⚖️ SYSTEM STABILIZED', 'info');
    
    // Reset after 5 seconds
    setTimeout(() => {
        resetToNormal();
    }, 5000);
}

function quantumMode(scene, core, floatingTech) {
    console.log('⚛️ QUANTUM MODE ACTIVATED...');
    
    // Enter quantum mode with chaotic effects
    scene.style.animationDuration = '2s';
    core.style.animationDuration = '1s';
    
    // Create quantum chaos with particles
    const particles = document.querySelectorAll('.q-particle');
    particles.forEach((particle, index) => {
        particle.style.animationDuration = `${0.5 + Math.random() * 1}s`;
        particle.style.filter = 'brightness(3) saturate(3) hue-rotate(180deg)';
        particle.style.transform = `scale(${1 + Math.random() * 0.5})`;
    });
    
    // Quantum holographic cube chaos
    const cubes = document.querySelectorAll('.holographic-cube');
    cubes.forEach((cube, index) => {
        cube.style.animationDuration = `${1 + Math.random() * 2}s`;
        cube.style.filter = 'brightness(2) saturate(2) hue-rotate(90deg)';
        cube.style.animationDirection = Math.random() > 0.5 ? 'reverse' : 'normal';
    });
    
    // Quantum tech elements
    const techElements = floatingTech.querySelectorAll('.tech-element');
    techElements.forEach(element => {
        element.style.animationDuration = `${0.8 + Math.random() * 1.2}s`;
        element.style.transform = `scale(${1.5 + Math.random() * 0.5}) rotate(${Math.random() * 360}deg)`;
        element.style.filter = 'brightness(2.5) saturate(2.5) hue-rotate(270deg)';
    });
    
    // Create quantum effects
    createQuantumEffect();
    createQuantumParticles();
    createQuantumRipples();
    
    // Show notification
    showSystemNotification('⚛️ QUANTUM MODE ACTIVATED!', 'quantum');
    
    // Reset after 5 seconds
    setTimeout(() => {
        resetToNormal();
    }, 5000);
}

// Reset to normal state
function resetToNormal() {
    console.log('🔄 Resetting to normal state...');
    
    const scene = document.querySelector('.scene-3d-container');
    const core = document.querySelector('.holographic-core');
    const particles = document.querySelectorAll('.q-particle');
    const rings = document.querySelectorAll('.orbit-ring');
    const techElements = document.querySelectorAll('.tech-element');
    
    // Reset scene
    scene.style.animationDuration = '20s';
    core.style.animationDuration = '30s';
    
    // Reset particles
    particles.forEach(particle => {
        particle.style.animationDuration = '10s';
        particle.style.filter = 'brightness(1) saturate(1)';
        particle.style.transform = 'scale(1)';
    });
    
    // Reset holographic cubes
    const cubes = document.querySelectorAll('.holographic-cube');
    cubes.forEach((cube, index) => {
        cube.style.animationDuration = `${15 + index * 5}s`;
        cube.style.filter = 'brightness(1) saturate(1)';
        cube.style.animationDirection = 'normal';
    });
    
    // Reset tech elements
    techElements.forEach(element => {
        element.style.animationDuration = '8s';
        element.style.transform = 'scale(1) rotate(0deg)';
        element.style.filter = 'brightness(1) saturate(1)';
    });
}

// Create speed lines effect
function createSpeedLines() {
    const scene = document.querySelector('.scene-3d-container');
    
    for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.width = '2px';
        line.style.height = '100px';
        line.style.background = 'linear-gradient(to bottom, rgba(34, 211, 238, 0.8), transparent)';
        line.style.left = Math.random() * 100 + '%';
        line.style.top = Math.random() * 100 + '%';
        line.style.animation = 'speedLine 1s linear infinite';
        line.style.zIndex = '5';
        
        scene.appendChild(line);
        
        setTimeout(() => {
            line.remove();
        }, 1000);
    }
}

// Create quantum particles
function createQuantumParticles() {
    const scene = document.querySelector('.scene-3d-container');
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'radial-gradient(circle, rgba(124, 58, 237, 1), transparent)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = 'quantumFloat 2s ease-in-out infinite';
        particle.style.zIndex = '5';
        
        scene.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

// Create quantum ripples
function createQuantumRipples() {
    const core = document.querySelector('.holographic-core');
    
    for (let i = 0; i < 5; i++) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '200px';
        ripple.style.height = '200px';
        ripple.style.border = '2px solid rgba(124, 58, 237, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'quantumRipple 3s ease-out infinite';
        ripple.style.animationDelay = i * 0.5 + 's';
        ripple.style.zIndex = '3';
        
        core.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 3000);
    }
}

// Create harmony waves
function createHarmonyWaves() {
    const scene = document.querySelector('.scene-3d-container');
    
    for (let i = 0; i < 10; i++) {
        const wave = document.createElement('div');
        wave.style.position = 'absolute';
        wave.style.width = '300px';
        wave.style.height = '2px';
        wave.style.background = 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.6), transparent)';
        wave.style.left = '50%';
        wave.style.top = '50%';
        wave.style.transform = 'translate(-50%, -50%) rotate(' + (i * 36) + 'deg)';
        wave.style.animation = 'harmonyWave 4s ease-in-out infinite';
        wave.style.animationDelay = i * 0.2 + 's';
        wave.style.zIndex = '4';
        
        scene.appendChild(wave);
        
        setTimeout(() => {
            wave.remove();
        }, 4000);
    }
}

// Mouse Interactions
function initializeMouseInteractions() {
    const scene = document.querySelector('.masterclass-3d-scene');
    
    scene.addEventListener('mousemove', function(e) {
        const rect = scene.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        // Parallax effect for 3D elements
        updateParallaxElements(x, y);
        
        // Update cursor position for custom effects
        updateCustomCursor(e.clientX, e.clientY);
    });
    
    scene.addEventListener('mouseenter', function() {
        this.style.cursor = 'none';
        activateMouseEffects();
    });
    
    scene.addEventListener('mouseleave', function() {
        this.style.cursor = 'default';
        deactivateMouseEffects();
    });
}

function updateParallaxElements(x, y) {
    const core = document.querySelector('.holographic-core');
    const orbitalSystem = document.querySelector('.orbital-system');
    const floatingTech = document.querySelector('.floating-tech');
    
    // Convert mouse position to rotation values
    const rotateX = (y - 0.5) * 20;
    const rotateY = (x - 0.5) * 20;
    
    // Apply parallax to core
    if (core) {
        core.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
    
    // Apply parallax to orbital system
    if (orbitalSystem) {
        orbitalSystem.style.transform = `translate(-50%, -50%) rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`;
    }
    
    // Apply parallax to floating tech
    if (floatingTech) {
        floatingTech.style.transform = `rotateX(${rotateX * 0.3}deg) rotateY(${rotateY * 0.3}deg)`;
    }
}

function updateCustomCursor(x, y) {
    // Create custom cursor effect for the 3D scene
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.background = 'radial-gradient(circle, rgba(34, 211, 238, 0.8) 0%, transparent 70%)';
    }
}

function activateMouseEffects() {
    // Enhance all animations when mouse is over the scene
    const animatedElements = document.querySelectorAll('[class*="animation"], [style*="animation"]');
    animatedElements.forEach(element => {
        element.style.animationPlayState = 'running';
    });
}

function deactivateMouseEffects() {
    // Reset cursor
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = '';
    }
}

// Dynamic Effects
function initializeDynamicEffects() {
    // Create random particle bursts
    setInterval(createRandomParticleBurst, 8000);
    
    // Create energy surges
    setInterval(createEnergySurge, 12000);
    
    // Update status indicators
    setInterval(updateStatusIndicators, 3000);
}

function createRandomParticleBurst() {
    const scene = document.querySelector('.scene-3d-container');
    const burst = document.createElement('div');
    burst.className = 'particle-burst';
    burst.style.cssText = `
        position: absolute;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: 4px;
        height: 4px;
        background: var(--primary-cyan);
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(34, 211, 238, 0.8);
        pointer-events: none;
        z-index: 1000;
    `;
    
    scene.appendChild(burst);
    
    // Animate burst
    burst.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(3)', opacity: 0 }
    ], {
        duration: 2000,
        easing: 'ease-out'
    }).onfinish = () => {
        burst.remove();
    };
}

function createEnergySurge() {
    const beams = document.querySelectorAll('.beam');
    beams.forEach(beam => {
        beam.style.animationDuration = '2s';
        beam.style.opacity = '1';
        
        setTimeout(() => {
            beam.style.animationDuration = '6s';
            beam.style.opacity = '';
        }, 2000);
    });
}

function updateStatusIndicators() {
    const indicators = document.querySelectorAll('.status-indicator');
    const statuses = [
        ['AI', 'ML', 'DL', 'NN'],
        ['3D', 'VR', 'AR', 'XR'],
        ['WEB', 'APP', 'API', 'CLOUD']
    ];
    
    indicators.forEach((indicator, index) => {
        const textElement = indicator.querySelector('.status-text');
        const currentText = textElement.textContent;
        const availableStatuses = statuses[index];
        const currentIndex = availableStatuses.indexOf(currentText);
        const nextIndex = (currentIndex + 1) % availableStatuses.length;
        
        textElement.style.opacity = '0';
        setTimeout(() => {
            textElement.textContent = availableStatuses[nextIndex];
            textElement.style.opacity = '1';
        }, 300);
    });
}

// Particle Effects
function createControlParticles(button) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
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
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.8);
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 60 + Math.random() * 40;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${targetX - centerX}px, ${targetY - centerY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

function createAccelerationParticles() {
    const core = document.querySelector('.holographic-core');
    const rect = core.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, var(--primary-cyan), var(--primary-purple));
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
            box-shadow: 0 0 20px rgba(34, 211, 238, 1);
        `;
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 100;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${targetX - centerX}px, ${targetY - centerY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1500,
            easing: 'ease-out'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

function createStabilizationEffect() {
    const scene = document.querySelector('.scene-3d-container');
    const effect = document.createElement('div');
    effect.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 300px;
        border: 2px solid rgba(34, 211, 238, 0.6);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 100;
    `;
    
    scene.appendChild(effect);
    
    effect.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(2)', opacity: 0 }
    ], {
        duration: 2000,
        easing: 'ease-out'
    }).onfinish = () => {
        effect.remove();
    };
}

function createQuantumEffect() {
    const scene = document.querySelector('.scene-3d-container');
    
    // Create quantum field effect
    for (let i = 0; i < 15; i++) {
        const quantum = document.createElement('div');
        quantum.style.cssText = `
            position: absolute;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, rgba(124, 58, 237, 0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            box-shadow: 0 0 30px rgba(124, 58, 237, 0.8);
        `;
        
        scene.appendChild(quantum);
        
        quantum.animate([
            { transform: 'scale(0) rotate(0deg)', opacity: 0 },
            { transform: 'scale(1) rotate(180deg)', opacity: 1 },
            { transform: 'scale(0) rotate(360deg)', opacity: 0 }
        ], {
            duration: 3000,
            easing: 'ease-in-out'
        }).onfinish = () => {
            quantum.remove();
        };
    }
}

// System Notifications
function showSystemNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `system-notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-family: var(--font-heading);
        font-weight: 600;
        font-size: 0.9rem;
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return '✅';
        case 'info': return 'ℹ️';
        case 'quantum': return '⚛️';
        default: return '🔔';
    }
}

function getNotificationColor(type) {
    switch(type) {
        case 'success': return 'linear-gradient(135deg, rgba(34, 211, 238, 0.9), rgba(16, 185, 129, 0.9))';
        case 'info': return 'linear-gradient(135deg, rgba(34, 211, 238, 0.9), rgba(59, 130, 246, 0.9))';
        case 'quantum': return 'linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(34, 211, 238, 0.9))';
        default: return 'linear-gradient(135deg, rgba(34, 211, 238, 0.9), rgba(124, 58, 237, 0.9))';
    }
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        reduceAnimations();
    }
    
    // Optimize for mobile
    if (window.innerWidth < 768) {
        optimizeForMobile();
    }
    
    // Monitor performance
    monitorPerformance();
}

function reduceAnimations() {
    console.log('Reducing animation complexity for better performance...');
    
    // Reduce animation complexity
    const animatedElements = document.querySelectorAll('[style*="animation"]');
    animatedElements.forEach(element => {
        const currentDuration = element.style.animationDuration;
        if (currentDuration) {
            const newDuration = parseFloat(currentDuration) * 2;
            element.style.animationDuration = newDuration + 's';
        }
    });
    
    // Disable some heavy effects
    const particles = document.querySelectorAll('.q-particle');
    particles.forEach((particle, index) => {
        if (index > 3) {
            particle.style.display = 'none';
        }
    });
    
    const beams = document.querySelectorAll('.beam');
    beams.forEach((beam, index) => {
        if (index > 2) {
            beam.style.display = 'none';
        }
    });
    
    const techElements = document.querySelectorAll('.tech-element');
    techElements.forEach((element, index) => {
        if (index > 2) {
            element.style.display = 'none';
        }
    });
}

function optimizeForMobile() {
    // Reduce particle count
    const particles = document.querySelectorAll('.q-particle');
    particles.forEach((particle, index) => {
        if (index > 4) {
            particle.style.display = 'none';
        }
    });
    
    // Simplify effects
    const beams = document.querySelectorAll('.beam');
    beams.forEach((beam, index) => {
        if (index > 3) {
            beam.style.display = 'none';
        }
    });
}

function monitorPerformance() {
    let frameCount = 0;
    let lastTime = performance.now();
    let optimizationApplied = false;
    
    function countFrames() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            
            if (fps < 30 && !optimizationApplied) {
                console.warn('Low FPS detected:', fps, '- Applying optimizations...');
                // Reduce animation complexity
                reduceAnimations();
                optimizationApplied = true;
            }
            
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(countFrames);
    }
    
    requestAnimationFrame(countFrames);
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeMasterclass3D,
        executeControlAction,
        createControlParticles,
        showSystemNotification
    };
}
