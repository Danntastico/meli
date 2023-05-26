export type FetchFn = <T>(...params: unknown[]) => Promise<T>;

export type State<T> = {
  data: T | null;
  loading: boolean;
  error: unknown | null;
};
