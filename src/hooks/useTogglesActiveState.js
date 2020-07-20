import { useCallback, useState } from 'react';

const useTogglesActiveState = (state) => {
  const [selected, setSelected] = useState(state);

  const selectionToggleHandler = useCallback((venue) => {
    setSelected(venue);
  }, []);

  return {
    selected,
    selectionToggleHandler,
  };
};

export default useTogglesActiveState;
