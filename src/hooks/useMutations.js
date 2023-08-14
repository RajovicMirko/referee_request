import { useState } from "react";

const useMutation = (fn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [localErrorMessage, setLocalErrorMessage] = useState(null);

  const clearErrorMessage = () => {
    setLocalErrorMessage(null);
  };

  const mutation = async ({
    onSuccess,
    onError,
    errorMessage,
    skip,
    fetchOptions,
    ...props
  }) => {
    try {
      if (skip) return;
      setIsLoading(true);
      const response = await fn(props, fetchOptions);

      if (!!onSuccess) {
        const data = await onSuccess?.(response);
        return data;
      } else {
        return response;
      }
    } catch (error) {
      const msg = error.error;

      await onError?.(error);

      if (msg) setLocalErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutation,
    isLoading,
    errorMessage: localErrorMessage,
    clearErrorMessage,
  };
};

export default useMutation;
