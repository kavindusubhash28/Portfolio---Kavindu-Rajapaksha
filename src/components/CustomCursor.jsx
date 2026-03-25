import { useEffect, useState, useCallback } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseMove = useCallback((e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
    }, [isVisible]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, [handleMouseMove]);

    // Re-attach hover listeners when DOM changes
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const handleHoverStart = () => setIsHovering(true);
            const handleHoverEnd = () => setIsHovering(false);

            document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <div
                className={`custom-cursor ${isHovering ? 'hover' : ''}`}
                style={{ left: position.x, top: position.y }}
            />
            <div
                className="cursor-dot"
                style={{ left: position.x, top: position.y }}
            />
        </>
    );
};

export default CustomCursor;
