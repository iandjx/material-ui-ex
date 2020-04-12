import React from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  Theme
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

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

const useStyles = makeStyles((theme: Theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h3">Arc Development</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
