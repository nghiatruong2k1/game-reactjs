import {memo} from 'react';
import {Grid,Stack,Typography} from '@mui/material/';
import styles from './styles.module.css';
function ViewLoading({component,childrenComponent}){
  return(
    <Grid item xs={12} component={component|| "div"}>
      <Stack component={childrenComponent || "div"} direction="row" alignItems="center"justifyContent="center" spacing={3}>
        <Typography component="h3" className={styles.text}>
          Đang tải...
        </Typography>
      </Stack>
    </Grid>
  )
}
export default memo(ViewLoading);