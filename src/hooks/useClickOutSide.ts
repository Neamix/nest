import React, { useEffect } from "react";

export function useClickOutside({ref, onClickOutSide}: {ref: React.RefObject<HTMLDivElement | null> ,onClickOutSide: () => void}) {    useEffect(() => {
        const handlerClickoutSide = (e: MouseEvent) => {
            if (!ref.current) return;
            
            if (ref.current === e.target || ref.current.contains(e.target as Node)) {
                return;
            }
            onClickOutSide();
        }

        document.addEventListener('mousedown',handlerClickoutSide);
        return () => document.removeEventListener('mousedown',handlerClickoutSide);
    }, [ref,onClickOutSide]);
}