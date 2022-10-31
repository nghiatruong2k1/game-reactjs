import { useCallback } from 'react';
import { actionToggleLoading } from '~/hooks/useLoading/actions';
import { useDispatchGlobal } from '~/states';
export default function useGlobalLoading() {
  const dispath = useDispatchGlobal();
  return useCallback(() => {
    dispath(actionToggleLoading(true));
    return () => {
      dispath(actionToggleLoading(false));
    };
  }, []);
}
