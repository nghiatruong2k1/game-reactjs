import { memo, Fragment, useMemo } from 'react';
import { routers } from '~/router';
import { ListNav } from '~/screens/components';
const ListGameWidgetComponent = memo(() => {
  const datas = useMemo(() => {
    return routers.games.map((action) => {
      return {
        text: action.title,
        to: action.getAction(),
      };
    });
  }, []);
  return (
    <Fragment>
      <ListNav title={routers.games.title} datas={datas} />
    </Fragment>
  );
});
export default ListGameWidgetComponent;
