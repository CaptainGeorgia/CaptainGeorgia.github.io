/**
 * Portfolio Main JavaScript
 * Handles navigation, scroll effects, and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // ============================================
  // Mobile Menu Toggle
  // ============================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && 
          !navMenu.contains(e.target) && 
          !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ============================================
  // Active Navigation Link
  // ============================================
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Check if current path matches link href
    if (href === currentPath || 
        (href !== '/' && currentPath.startsWith(href)) ||
        (href === '/' && (currentPath === '/' || currentPath === '/index.html'))) {
      link.classList.add('active');
    }
  });

  // ============================================
  // Navbar Scroll Effect
  // ============================================
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  if (navbar) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Add shadow on scroll
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // Scroll Reveal Animation
  // ============================================
  const revealElements = document.querySelectorAll(
    '.hero, .highlights, .about-preview, .about-section, .project-card, .projects-cta'
  );

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 100;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('revealed');
      }
    });
  };

  // Add CSS for reveal animation
  const style = document.createElement('style');
  style.textContent = `
    .hero, .highlights, .about-preview, .about-section, .project-card, .projects-cta {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .revealed {
      opacity: 1;
      transform: translateY(0);
    }
    .project-card:nth-child(2) { transition-delay: 0.1s; }
    .project-card:nth-child(3) { transition-delay: 0.2s; }
    .project-card:nth-child(4) { transition-delay: 0.3s; }
  `;
  document.head.appendChild(style);

  // Initial check and scroll listener
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll, { passive: true });

  // ============================================
  // Scroll to Top Button
  // ============================================
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollTopBtn);

  // Add styles for scroll button
  const scrollBtnStyle = document.createElement('style');
  scrollBtnStyle.textContent = `
    .scroll-top-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: var(--color-primary);
      color: white;
      border: none;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s ease;
      z-index: 999;
      box-shadow: 0 4px 15px rgba(13, 115, 119, 0.3);
    }
    .scroll-top-btn:hover {
      background: var(--color-primary-dark);
      transform: translateY(-3px);
    }
    .scroll-top-btn.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    @media (max-width: 768px) {
      .scroll-top-btn {
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
      }
    }
  `;
  document.head.appendChild(scrollBtnStyle);

  // Show/hide scroll button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  // Scroll to top on click
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ============================================
  // Image Loading Handler
  // ============================================
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      // Set placeholder for broken images
      this.src = 'data:image/svg+xml,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
          <rect fill="#f0f4f5" width="300" height="200"/>
          <text fill="#8896a6" font-family="sans-serif" font-size="14" x="50%" y="50%" text-anchor="middle" dy=".3em">Image not found</text>
        </svg>
      `);
      this.alt = 'Image not available';
    });
  });

  // ============================================
  // Keyboard Navigation Enhancement
  // ============================================
  document.addEventListener('keydown', (e) => {
    // Skip link functionality
    if (e.key === 'Tab' && !e.shiftKey) {
      const skipLink = document.querySelector('.skip-link');
      if (skipLink && document.activeElement === document.body) {
        skipLink.focus();
      }
    }
  });

  // Log initialization
  console.log('Portfolio JS initialized');
});

