import { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Console.module.css';

import {
  Skeleton,
  Box,
  Paper,
  Stack,
  IconButton,
  Modal,
  Divider,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';

const ModalConsole = memo(({ children, ...props }) => {
  return (
    <Modal open={true} disablePortal {...props}>
      {children}
    </Modal>
  );
});

function ConsoleComponent({ loading, title, children }) {
  const [isExpand, setExpand] = useState(false);
  const toggleExpand = useCallback(() => {
    return setExpand((prev) => !prev);
  }, []);
  const ConsoleRoot = useMemo(() => {
    if (isExpand) {
      return ModalConsole;
    } else {
      return Box;
    }
  }, [isExpand]);
  return (
    <ConsoleRoot className={clsx(styles.root, { [styles.expand]: isExpand })}>
      <Card variant="outlined" className={clsx(styles.container)}>
        <CardHeader classes={{ root: styles.header }} title={title} />
        <CardContent
          className={clsx(styles.view)}
          component={Paper}
          variant="outlined"
        >
          <Box className={clsx(styles.content)}>{children}</Box>
        </CardContent>
        <Divider className={clsx(styles.divider)} />
        <CardContent
          component={Stack}
          direction={'row'}
          className={clsx(styles.control)}
        >
          <IconButton className={styles.fullviewButton} onClick={toggleExpand}>
            <FontAwesomeIcon icon={faExpand} />
          </IconButton>
        </CardContent>
        <div></div>
        {loading && <Skeleton className={styles.skeleton} />}
      </Card>
    </ConsoleRoot>
  );
}
ConsoleComponent.defaultProps = {
  sx: {},
  classes: {},
  containerProps: {},
  contentProps: {},
};
ConsoleComponent.propTypes = {
  sx: PropTypes.object,
  classes: PropTypes.object,
};
export default memo(ConsoleComponent);
