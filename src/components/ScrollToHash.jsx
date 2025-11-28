import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
    // 1. Отримуємо поточну location (місцезнаходження) з роутера
    const { pathname, hash, key } = useLocation();

    // 2. Виконуємо ефект при зміні hash або pathname
    useEffect(() => {
        // Перевіряємо, чи існує якір у URL-адресі (наприклад, #countries_sect)
        if (hash) {
            const elementId = hash.substring(1); // Видаляємо #
            const element = document.getElementById(elementId);

            // Якщо елемент знайдено, прокручуємо до нього
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth', // Плавно
                    block: 'start'      // Прокрутка до початку елемента
                });
            }
        }
        // Ключ 'key' допомагає примусово спрацювати ефекту при поверненні на ту ж сторінку
    }, [pathname, hash, key]);

    return null; // Компонент не відображає нічого, лише керує логікою
}

export default ScrollToHash;