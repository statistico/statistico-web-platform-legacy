import { act, renderHook } from '@testing-library/react-hooks';

import useTogglesActiveState from '../useTogglesActiveState';

describe('useTogglesActiveState', () => {
  describe('selected', () => {
    it('should return the value passed as function argument as selected value', () => {
      const { result } = renderHook(() => useTogglesActiveState('value'));
      expect(result.current.selected).toBe('value');
    });
  });

  describe('selectionToggleHandler', () => {
    it('should set the selected value to the value passed into the method provided', () => {
      const { result } = renderHook(() => useTogglesActiveState('value'));
      act(() => result.current.selectionToggleHandler('updatedValue'));
      expect(result.current.selected).toBe('updatedValue');
    });
  });
});
