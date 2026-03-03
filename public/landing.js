// ============================================
// DACCOFFEE PREMIUM LANDING PAGE JAVASCRIPT
// Smooth Interactions & Scroll Animations
// ============================================

(function() {
  'use strict';

  // ============================================
  // PAGE READY - Add class when DOM loaded
  // ============================================
  document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('page-ready');
    
    // Initialize all features
    initScrollReveal();
    initSmoothScroll();
    initNavbarScroll();
    initMobileMenu();
    initActiveNavTracking();
  });

  // ============================================
  // SCROLL REVEAL - IntersectionObserver
  // ============================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (!revealElements.length) return;
    
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          
          setTimeout(function() {
            entry.target.classList.add('is-visible');
          }, parseInt(delay));
          
          // Unobserve after revealing (performance)
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    revealElements.forEach(function(el) {
      revealObserver.observe(el);
    });
  }

  // ============================================
  // SMOOTH SCROLL - Anchor links with offset
  // ============================================
  function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') return;
        
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navLinksContainer = document.getElementById('navLinks');
          if (navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
            document.getElementById('mobileToggle').classList.remove('active');
          }
        }
      });
    });
  }

  // ============================================
  // NAVBAR SCROLL - Add scrolled class
  // ============================================
  function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!mobileToggle || !navLinks) return;
    
    mobileToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.navbar')) {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }

  // ============================================
  // ACTIVE NAV TRACKING - Update on scroll
  // ============================================
  function initActiveNavTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    if (!sections.length || !navLinks.length) return;
    
    window.addEventListener('scroll', function() {
      let current = '';
      const scrollPosition = window.pageYOffset + navHeight + 100;
      
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      
      // Update active nav link
      navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });
  }

  // ============================================
  // PERFORMANCE: Debounce utility
  // ============================================
  function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

})();
