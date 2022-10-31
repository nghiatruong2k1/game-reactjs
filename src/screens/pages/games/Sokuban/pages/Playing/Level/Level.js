import { memo, Fragment, useEffect } from 'react';
import { selectLevel } from './selector';
import { actionToggleLoading } from '~/hooks/useLoading/actions';
import { actionSetCurrent, actionSetTotal } from './actions';
import { useSelectorSokuban, useDispatchSokuban } from '../../../Provider';
import { useSokubanServices } from '../../../services';
function LevelComponent() {
  const { current, total } = useSelectorSokuban(selectLevel);
  const dispatch = useDispatchSokuban();
  const services = useSokubanServices(LevelComponent);
  useEffect(() => {
    dispatch(actionToggleLoading(true));
    dispatch(actionSetCurrent(0));
    return services.getTotal(
      (data) => {
        dispatch(actionSetTotal(data));
      },
      () => {},
      () => {
        dispatch(actionToggleLoading(false));
      },
    );
  }, []);
  return <Fragment></Fragment>;
}
export default memo(LevelComponent);
