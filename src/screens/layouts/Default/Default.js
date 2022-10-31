import { memo } from 'react';
import { Container, Grid } from '@mui/material';
import { ListGameWidget } from '~/screens/widgets';
function DefaultLayoutComponent({ children }) {
  return (
    <Container>
      <Grid container>
        <Grid item xs={3}>
          <ListGameWidget />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
export default memo(DefaultLayoutComponent);
