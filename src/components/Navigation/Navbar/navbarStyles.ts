import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        toolbar: {
            minHeight: 150,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        },
        logo: {
            maxWidth: 200,
            minWidth: 100
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            marginRight: theme.spacing(3),
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.primary.contrastText,
        },
        button : {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(3),
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.primary.contrastText,
            fontSize: 25,
            '&:hover': {
                color: theme.palette.primary.contrastText
            }
        },
        iconButton : {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            minWidth: 100
        }
    })
);
export default useStyles;