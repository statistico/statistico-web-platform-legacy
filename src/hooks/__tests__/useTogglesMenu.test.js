import { act, renderHook } from '@testing-library/react-hooks';

import useTogglesMenu from '../useTogglesMenu';

describe('useTogglesMenu', () => {
  describe('menuOpen', () => {
    it('should be true if set argument passed is true', () => {
      const { result } = renderHook(() => useTogglesMenu(true));
      expect(result.current.menuOpen).toBe(true);
    });

    it('should be false if set argument passed is false', () => {
      const { result } = renderHook(() => useTogglesMenu(false));
      expect(result.current.menuOpen).toBe(false);
    });
  });

  describe('menuToggleHandler', () => {
    it('should set menuOpen to true when clicked', () => {
      const { result } = renderHook(() => useTogglesMenu(false));
      act(() => result.current.menuToggleHandler());
      expect(result.current.menuOpen).toBe(true);
    });

    it('should set menuOpen to false when clicked', () => {
      const { result } = renderHook(() => useTogglesMenu(true));
      act(() => result.current.menuToggleHandler());
      expect(result.current.menuOpen).toBe(false);
    });
  });
});
