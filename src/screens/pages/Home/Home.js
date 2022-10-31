import { memo, Fragment } from 'react';
import useGlobalTitle from '~/hooks/useGlobalTitle';
import { routers } from '~/router';
const HomePageComponent = memo(() => {
  useGlobalTitle(() => {
    return routers.default.home.title;
  }, []);
  return <Fragment>Home</Fragment>;
});
export default HomePageComponent;
