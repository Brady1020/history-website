/**
 * Journey Through History - Script
 * FBLA Website Design Competition
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
            spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
        });
    }

    // Timeline Data
    const timelines = {
        'medieval-timeline': [
            { year: '1431', event: 'Execution of Joan of Arc', desc: 'The French heroine was burned at the stake in Rouen.' },
            { year: '1453', event: 'Fall of Constantinople', desc: 'The Ottoman Empire captures the capital of the Byzantine Empire.' },
            { year: '1455', event: 'Gutenberg Bible', desc: 'The first major book printed using mass-produced movable type.' },
            { year: '1492', event: 'Columbus Reaches Americas', desc: 'Christopher Columbus lands in the Caribbean, initiating global contact.' }
        ],
        'renaissance-timeline': [
            { year: '1512', event: 'Sistine Chapel Ceiling', desc: 'Michelangelo completes his masterpiece in the Vatican.' },
            { year: '1517', event: 'Luther\'s 95 Theses', desc: 'The start of the Protestant Reformation in Germany.' },
            { year: '1543', event: 'Heliocentric Theory', desc: 'Copernicus publishes his theory that the Earth revolves around the Sun.' },
            { year: '1588', event: 'Defeat of Spanish Armada', desc: 'England establishes itself as a major naval power.' }
        ],
        'exploration-timeline': [
            { year: '1607', event: 'Jamestown Founded', desc: 'The first permanent English settlement in North America.' },
            { year: '1610', event: 'Starry Messenger', desc: 'Galileo publishes his telescopic discoveries of the moon and Jupiter.' },
            { year: '1648', event: 'Peace of Westphalia', desc: 'Treaties ending the Thirty Years\' War, shaping modern diplomacy.' },
            { year: '1687', event: 'Newton\'s Principia', desc: 'Isaac Newton publishes the laws of motion and universal gravitation.' }
        ]
    };

    // Inject Timeline Items
    Object.keys(timelines).forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            timelines[id].forEach((item, index) => {
                const side = index % 2 === 0 ? 'left' : 'right';
                const itemEl = document.createElement('div');
                itemEl.className = `timeline-item ${side}`;
                itemEl.innerHTML = `
                    <div class="timeline-content">
                        <h3>${item.year}</h3>
                        <h4>${item.event}</h4>
                        <p>${item.desc}</p>
                    </div>
                `;
                container.appendChild(itemEl);
            });
        }
    });

    // Scroll Animations for Timeline
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
