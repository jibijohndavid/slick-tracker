import { createStyles, Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignContent: "stretch",
      backgroundColor: theme.palette.background.default,
    },
    body: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  }),
);

export default useStyles;
