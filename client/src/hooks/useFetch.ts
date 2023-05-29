import { useEffect, useState } from "react";
import { FetchFn, State } from "src/types/helpers";

export const useFetch = <T>(fetchFunction: FetchFn, ...params: unknown[]): State<T> => {

  const [state, setState] = useState<State<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetchFunction(...params)
      .then((res) => {
        setState({
          loading: false,
          error: null,
          data: res as T,
        });
      })
      .catch((error) => {
        setState({
          data: null,
          loading: false,
          error,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFunction]);

  return state;
};
