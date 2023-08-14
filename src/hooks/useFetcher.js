import { useCallback, useEffect, useState } from "react";

const generateKey = (fnProps) => (!!fnProps ? JSON.stringify(fnProps) : "data");

const useFetcher = ({
  fn,
  fnProps,
  onSuccess,
  onError,
  errorMessage,
  skip = false,
  skipMemo = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [localErrorMessage, setLocalErrorMessage] = useState(null);
  const [data, setData] = useState(null);

  const [localSkip, setLocalSkip] = useState(skip !== undefined && skip);
  const [localFetchProps, setLocalFetchProps] = useState(fnProps);

  const clearErrorMessage = () => {
    setLocalErrorMessage(null);
  };

  const fetchData = useCallback(async () => {
    const setMemoizedData = (newData) => {
      if (skipMemo) {
        setData(newData);
      } else {
        const tmpKey = generateKey(localFetchProps);
        setData((prevState) => ({
          ...prevState,
          [tmpKey]: newData,
        }));
      }
    };

    try {
      setIsLoading(true);
      const response = await fn(localFetchProps);

      if (response?.Message) {
        onError?.(response?.Message);
        if (errorMessage) setLocalErrorMessage(response?.Message);
      } else {
        if (!!onSuccess) {
          setMemoizedData(onSuccess?.(response));
        } else {
          setMemoizedData(response);
        }
      }
    } catch (error) {
      onError?.(errorMessage ?? error?.message);
      if (errorMessage) setLocalErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [errorMessage, fn, localFetchProps, onError, onSuccess, skipMemo]);

  // fetch data
  useEffect(() => {
    if (!localSkip && (skipMemo || !data?.[generateKey(localFetchProps)])) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localSkip, fetchData, localFetchProps, skipMemo]);

  // reset fetch props
  useEffect(() => {
    if (JSON.stringify(localFetchProps) !== JSON.stringify(fnProps)) {
      setLocalFetchProps((prevState) => ({ ...prevState, ...fnProps }));
    }
  }, [fnProps, localFetchProps]);

  // reset skip
  useEffect(() => {
    setLocalSkip(skip !== undefined && skip);
  }, [skip]);

  const refetch = () => fetchData();

  return {
    data: skipMemo ? data : data?.[generateKey(localFetchProps)],
    isLoading,
    errorMessage: localErrorMessage,
    clearErrorMessage,
    refetch,
  };
};

export default useFetcher;
