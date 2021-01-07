import { useCallback, useState } from 'react';

const useModal = (show) => {
  const [isShowing, setIsShowing] = useState(show);

  const toggle = useCallback(() => {
    setIsShowing(!isShowing);
  }, [isShowing]);

  return { isShowing, toggle };
};

export default useModal;
