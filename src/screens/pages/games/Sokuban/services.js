import { useCallback } from 'react';
import useServices from '~/hooks/useServices';

const API = 'json/sokuban.json';
export function useSokubanServices(location) {
  const service = useServices(location);
  const getAll = useCallback((onThen, onCatch, onEnd) => {
    return service({
      api: API,
      onThen: (data) => {
        onThen && onThen(data);
      },
      onCatch: (e) => {
        onThen && onThen([]);
        onCatch && onCatch(e);
      },
      onEnd,
    });
  }, []);
  const getTotal = useCallback((onThen, onCatch, onEnd) => {
    return service({
      api: API,
      onThen: (data) => {
        onThen && onThen(data.length);
      },
      onCatch: (e) => {
        onThen && onThen(0);
        onCatch && onCatch(e);
      },
      onEnd,
    });
  }, []);
  const getByLevel = useCallback((level, onThen, onCatch, onEnd) => {
    return service({
      api: API,
      onThen: (data) => {
        onThen && onThen(data.length > 0 ? data[level] : null);
      },
      onCatch: (e) => {
        onThen && onThen(null);
        onCatch && onCatch(e);
      },
      onEnd,
    });
  }, []);
  return { getAll, getTotal, getByLevel };
}
