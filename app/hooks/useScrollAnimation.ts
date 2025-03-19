export const useScrollAnimation = () => {
    const createObserver = () => {
        if (typeof window === 'undefined') return null;
        
        return new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
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

        rightElements.forEach(el => observer.observe(el));
        leftElements.forEach(el => observer.observe(el));

        return observer;
    };

    return { observeElements };
};
