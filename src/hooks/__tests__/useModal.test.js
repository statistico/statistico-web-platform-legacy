import { act, renderHook } from '@testing-library/react-hooks';

import useModal from '../useModal';

describe('useModal', () => {
  describe('isShowing', () => {
    it('should be true if set argument passed is true', () => {
      const { result } = renderHook(() => useModal(true));
      expect(result.current.isShowing).toBe(true);
    });

    it('should be false if set argument passed is false', () => {
      const { result } = renderHook(() => useModal(false));
      expect(result.current.isShowing).toBe(false);
    });
  });

  describe('toggle', () => {
    it('should set isShowing to true when clicked', () => {
      const { result } = renderHook(() => useModal(false));
      act(() => result.current.toggle());
      expect(result.current.isShowing).toBe(true);
    });

    it('should set isShowing to false when clicked', () => {
      const { result } = renderHook(() => useModal(true));
      act(() => result.current.toggle());
      expect(result.current.isShowing).toBe(false);
    });
  });
});
