export const useScrollAnimation = () => {
    const createObserver = () => {
        if (typeof window === 'undefined') return null;
        
        return new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add animation classes to curtains when their container is visible
                    if (entry.target.classList.contains('curtain-container')) {
                        const leftCurtain = entry.target.querySelector('.curtain-left');
                        const rightCurtain = entry.target.querySelector('.curtain-right');
                        if (leftCurtain) leftCurtain.classList.add('mobile-curtain-left');
                        if (rightCurtain) rightCurtain.classList.add('mobile-curtain-right');
                    }

                    // Handle blur-in animation
                    if (entry.target.classList.contains('opacity-0')) {
                        entry.target.classList.remove('opacity-0');
                        entry.target.classList.add('animate-blur-in');
                    }
                }
            });
        }, { threshold: 0.3 });
    };

    const observeElements = () => {
        if (typeof window === 'undefined') return;

        const observer = createObserver();
        if (!observer) return;

        const rightElements = document.querySelectorAll('.slide-from-right');
        const leftElements = document.querySelectorAll('.slide-from-left');
        const curtainElements = document.querySelectorAll('.curtain-container');
        const blurElements = document.querySelectorAll('.opacity-0');

        rightElements.forEach(el => observer.observe(el));
        leftElements.forEach(el => observer.observe(el));
        curtainElements.forEach(el => observer.observe(el));
        blurElements.forEach(el => observer.observe(el));

        return observer;
    };

    return { observeElements };
};
