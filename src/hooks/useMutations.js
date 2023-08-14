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

      if (response?.Message) {
        const msg = errorMessage ?? response?.Message;
        await onError?.(msg);
        setLocalErrorMessage(msg);
        return msg;
      } else {
        if (!!onSuccess) {
          const data = await onSuccess?.(response);
          return data;
        } else {
          return response;
        }
      }
    } catch (error) {
      const msg = errorMessage ?? error.message;
      await onError?.(msg);
      if (msg) setLocalErrorMessage(msg);
      return msg;
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
