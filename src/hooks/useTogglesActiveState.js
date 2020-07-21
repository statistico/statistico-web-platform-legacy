import { useCallback, useState } from 'react';

const useTogglesActiveState = (state) => {
  const [selected, setSelected] = useState(state);

  const selectionToggleHandler = useCallback((active) => {
    setSelected(active);
  }, []);

  return {
    selected,
    selectionToggleHandler,
  };
};

export default useTogglesActiveState;
