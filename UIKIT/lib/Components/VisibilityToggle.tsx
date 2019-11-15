import React, {Fragment, useMemo} from 'react';

type VisibilityToggleProps = {
  children: any;
  visible: boolean;
};

function VisibilityToggle({visible, children}: VisibilityToggleProps) {
  const status = visible ? true : false;
  return useMemo(() => (status ? children : <Fragment />), [status, children]);
}

export default VisibilityToggle;
