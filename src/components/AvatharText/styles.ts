import { createStyles, Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            padding: 12,
        },
        textWrapper: {
            flexDirection: 'column',
            paddingLeft: 16
        },
        salutationText: {
            color: theme.palette.text.primary,
        },
        nameText: {
            color: theme.palette.text.primary,
            fontWeight: 'bold',
        },
    }),
);

export default useStyles;