import { useCallback, useState } from 'react';

const useAsyncError = () => {
  const [, setError] = useState();

  return useCallback(
    (error) => {
      setError(() => {
        throw error;
      });
    },
    [setError],
  );
};

export default useAsyncError;
