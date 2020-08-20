import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: 60,
      borderBottom: `1px solid ${theme.palette.divider}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }),
);

export default useStyles;
