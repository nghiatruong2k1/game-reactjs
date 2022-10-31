import { useCallback, memo } from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import { AnimationText } from '~/screens/components';
import useTitle from '~/hooks/useTitle';
import { routers } from '~/router';
function NotFoundComponent() {
  const navigator = useNavigate();
  const handleClickBackButton = useCallback(function () {
    navigator(-1)
  }, []);
  useTitle(()=>{
    return routers.default.notfound.title
},[]);
  return (
    <Container maxWidth={'100%'} >
      <Stack alignItems={'center'} justifyContent={'center'} spacing={1} mb={5}>
        <Typography className={styles.number}>
          <AnimationText text="404" />
        </Typography>
        <Typography className={styles.title}>
          <AnimationText text="PAGE NOT FOUNT"/>
        </Typography>
        <Typography className={styles.description}>
          <AnimationText text="Oh no, We can't see the page you're looking for."/>
        </Typography>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <Button
            to="/"
            component={Link}
            variant="contained"
            className="error-button circle-btn"
            startIcon={<span className="fas fa-home" />}
          >
            <span className="text">Go Home</span>
          </Button>
          <Button
            to="#"
            onClick={handleClickBackButton}
            variant="contained"
            className="error-button circle-btn"
            startIcon={<span className="fas fa-chevron-left" />}
          >
            <span className="text">Go Back</span>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
export default memo(NotFoundComponent);
