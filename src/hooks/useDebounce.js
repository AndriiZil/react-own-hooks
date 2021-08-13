import {useCallback, useRef} from 'react';

export default function useDebounce(callBack, delay) {
    const timer = useRef();

    const debouncedCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callBack(...args);
        }, delay)

    }, [callBack, delay]);

    return debouncedCallback;
}
