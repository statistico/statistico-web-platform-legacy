import { useCallback, useState } from 'react';

const useTogglesMenu = (open) => {
  const [menuOpen, setMenuOpen] = useState(open);

  const menuToggleHandler = useCallback(
    (state) => {
      setMenuOpen(state ?? !menuOpen);
    },
    [menuOpen],
  );

  return {
    menuOpen,
    menuToggleHandler,
  };
};

export default useTogglesMenu;
