import { createMuiTheme } from "@material-ui/core";

import typography from "../typography";
import palette from "./palette";

const theme = createMuiTheme({
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
