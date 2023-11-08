import { useEffect } from 'react';

type FunctionType = (ref: React.RefObject<HTMLElement>, outsideClickHandler: () => void) => void;

export const useOutsideClick: FunctionType = (ref, outsideClickHandler) => {
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (ref.current && !ref.current.contains(target)) {
      outsideClickHandler();
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleOutsideClick);

    return () => {
      document.removeEventListener('mouseup', handleOutsideClick);
    };
  }, []);
};