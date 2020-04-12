import React from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography
} from "@material-ui/core";

function ElevationScroll(props: { children: any }) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

export default function Header() {
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Typography variant="h3">Arc Development</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
