import { useEffect } from 'react';

const useHorizontalScroll = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (ref.current) {
                event.preventDefault();
                const scrollAmount = event.deltaY;
                ref.current.scrollLeft += scrollAmount;
            }
        };

        const scrollContainerEl = ref.current;

        scrollContainerEl?.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            scrollContainerEl?.removeEventListener('wheel', handleWheel);
        };
    }, [ref]);
};

export default useHorizontalScroll;