import { memo, useMemo } from 'react';
import { TableCell } from '@mui/material';
import { Image } from '~/screens/components';
import styles from '../Map.module.css';
import {
  boxSrc,
  box_in_dockSrc,
  dockSrc,
  floorSrc,
  playerSrc,
  player_in_dockSrc,
  wallSrc,
} from '../../../../assets/imgs';

function CellComponent({ value }) {
  const childSrc = useMemo(() => {
    switch (value) {
      case '#':
        return wallSrc;
      case '.':
        return dockSrc;
      case '@':
        return playerSrc;
      case '+':
        return player_in_dockSrc;
      case '$':
        return boxSrc;
      case '?':
        return box_in_dockSrc;
      default:
        return floorSrc;
    }
  }, [value]);
  return (
    <TableCell className={styles.cell}>
      <Image src={childSrc} alt={value} />
    </TableCell>
  );
}
export default memo(CellComponent);
