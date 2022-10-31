import { Fragment, memo } from 'react';

import ViewEmpty from './ViewEmpty';
import ViewLoading from './ViewLoading';
function ViewContent({
  loading,
  viewLoading,
  empty,
  viewEmpty,
  children,
  ...props
}) {
  if (loading) {
    if (Boolean(viewLoading)) {
      return <ViewLoading {...props} />;
    }
  } else if (Boolean(empty)) {
    if (!Boolean(viewEmpty) || typeof viewEmpty === 'string') {
      return <ViewEmpty children={viewEmpty} {...props} />;
    } else {
      return <Fragment>{viewEmpty}</Fragment>;
    }
  }

  return <Fragment>{children}</Fragment>;
}
export default memo(ViewContent);
