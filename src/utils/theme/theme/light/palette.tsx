import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    contrastText: white,
    main: "#3384F3",
  },
  secondary: {
    contrastText: white,
    main: "#FFA850",
  },
  success: {
    contrastText: white,
    main: "#47C796",
  },
  info: {
    contrastText: white,
    main: colors.blue[600],
  },
  warning: {
    contrastText: white,
    main: colors.orange[600],
  },
  error: {
    contrastText: white,
    main: "#F04545",
  },
  text: {
    primary: "#002B5D",
    secondary: "#5F789B",
    link: colors.blue[600],
  },
  background: {
    default: "#F5F6FA",
    paper: "#FFFFFF",
  },
  icon: "#91A1BB",
  divider: "#E1E4EA",
  contrastThreshold: 3,
  tonalOffset: 0.2,
};
