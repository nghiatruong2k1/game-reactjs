import { CircularProgress } from '@mui/material';
import { memo } from 'react';
import useGlobalTitle from '~/hooks/useGlobalTitle';
import { isLoadingSelector } from '~/hooks/useLoading/selectors';
import { routers } from '~/router';
import { Console, ViewContent } from '~/screens/components';
import Playing from './pages/Playing';
import { useSelectorSokuban } from './Provider';
import styles from './Sokuban.module.css';
function SokubanAppComponent() {
  useGlobalTitle(() => {
    return routers.games.sokuban.title;
  }, []);
  const loading = useSelectorSokuban(isLoadingSelector);
  return (
    <Console title={routers.games.sokuban.title}>
      <ViewContent
        empty={false}
        loading={loading}
        viewLoading={<CircularProgress className={styles.loading} />}
      >
        <Playing />
      </ViewContent>
    </Console>
  );
}
export default memo(SokubanAppComponent);
