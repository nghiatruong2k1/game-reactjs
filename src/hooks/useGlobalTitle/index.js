import { useEffect } from 'react';
import { actionAddTitle, actionRemoveTitle } from '~/hooks/useTitle/actions';
import { useDispatchGlobal } from '~/states';
export default function useGlobalTitle(callback, params) {
  const dispath = useDispatchGlobal();
  useEffect(() => {
    const title = callback();
    if (typeof title === 'string') {
        dispath(actionAddTitle(title));
      return () => {
        dispath(actionRemoveTitle());
      };
    }
  }, params);
}
