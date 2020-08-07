import { createStyles, Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 300,
      padding: 20,
      backgroundColor: theme.palette.background.paper,
    },
    quickBar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh - 100px)", // viewhieght - nav element - padding
    },
  }),
);

export default useStyles;
