import { createStyles, Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
            width: '100%',
        },
    }),
);

export default useStyles;