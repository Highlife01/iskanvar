import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');

            // Bileşenlerin render edilmesi için biraz bekleyip tekrar kontrol eden fonksiyon
            const scrollToElement = (attempt = 0) => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else if (attempt < 10) { // En fazla 10 deneme (1 saniye)
                    setTimeout(() => scrollToElement(attempt + 1), 100);
                }
            };

            scrollToElement();
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToHash;
