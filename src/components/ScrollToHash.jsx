import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash) {
            const elementId = hash.substring(1); // Видаляємо #
            const element = document.getElementById(elementId);

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }, [pathname, hash, key]);

    return null;
}

export default ScrollToHash;