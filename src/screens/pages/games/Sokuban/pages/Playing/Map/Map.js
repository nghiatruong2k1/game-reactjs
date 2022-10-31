import { memo, useEffect } from 'react';
import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import { ScrollArea } from '~/screens/components';
import { selectMap } from './selector';
import { useSelectorSokuban, useDispatchSokuban } from '../../../Provider';
import styles from './Map.module.css';
import Cell from './Cell';
import { selectCurrentLevel } from '../Level/selector';
import { actionToggleLoading } from '~/hooks/useLoading/actions';
import { useSokubanServices } from '../../../services';
import { actionSetMap } from './actions';
function MapComponent() {
  const service = useSokubanServices(MapComponent);
  const map = useSelectorSokuban(selectMap);
  const currentLevel = useSelectorSokuban(selectCurrentLevel);
  const dispatch = useDispatchSokuban();
  useEffect(() => {
    dispatch(actionToggleLoading(true));
    dispatch(actionSetMap());
    return service.getByLevel(
      currentLevel,
      (data) => {
        dispatch(actionSetMap(data.split('\n').map((row) => row.split(''))));
      },
      () => {},
      () => {
        dispatch(actionToggleLoading(false));
      },
    );
  }, [currentLevel]);
  return (
    <>
      <TableContainer className={styles.container}>
        <Table className={styles.table}>
          <TableBody>
            {map.map((row, index) => {
              return (
                <TableRow key={index}>
                  {row.map((cell, index) => {
                    return <Cell value={cell} key={index} />;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default memo(MapComponent);
