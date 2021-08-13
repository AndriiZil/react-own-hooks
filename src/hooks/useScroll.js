import { useEffect, useRef } from 'react';

export default function useScroll(parentRef, childRef, callBack) {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0,
        };

        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected');
                callBack();
            }
        }, options);

        observer.current.observe(childRef.current);

        return function () {
            observer.current.unobserve(childRef.current);
        }

    }, [callBack]);
}
