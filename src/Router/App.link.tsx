import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import * as React from "react";

const AppLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
  }
);

export default AppLink;
