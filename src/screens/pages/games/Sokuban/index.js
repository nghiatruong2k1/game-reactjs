import { memo } from 'react';
import Provider from './Provider';
import SokubanApp from './Sokuban';

function Sokuban() {
  return (
    <>
      <Provider>
        <SokubanApp />
      </Provider>
    </>
  );
}
export default memo(Sokuban);
