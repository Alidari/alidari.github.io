// c:\Users\Ali\Desktop\Ders\Dijital Tasarım Kültürü\portfolyo\script.js
// Language functionality
let currentLanguage = 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all text elements
    document.querySelectorAll('[data-en][data-tr]').forEach(element => {
        if (lang === 'en') {
            element.textContent = element.dataset.en;
        } else {
            element.textContent = element.dataset.tr;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language toggle event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
    
    // Set initial language to English
    switchLanguage('en');
});

// Tab Geçişleri
function showTab(tabName) {
    // Tüm tab içeriklerini gizle
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Tüm tab butonlarından active class'ını kaldır
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Seçilen tab'ı göster
    document.getElementById(tabName).classList.add('active');
    
    // Tıklanan butona active class ekle
    event.target.classList.add('active');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar'ı kaydırma sırasında gizle/göster
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('.navbar');
    
    if (scrollTop > lastScrollTop) {
        // Aşağı kaydırma
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Yukarı kaydırma
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// Sayfa yüklendiğinde animasyonlar
window.addEventListener('load', function() {
    // Kartların animasyonlu giriş yapması
    const cards = document.querySelectorAll('.project-card, .achievement-card, .personal-card, .unique-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});