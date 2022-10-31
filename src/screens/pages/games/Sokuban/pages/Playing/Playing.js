import { memo, Fragment } from 'react';
// import Level from './Level';
import Map from './Map';
function PlayingComponent(props) {
  return (
    <Fragment>
      {/* <Level /> */}
      <Map />
    </Fragment>
  );
}
export default memo(PlayingComponent);
