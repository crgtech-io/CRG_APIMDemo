import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Notification } from 'react-admin';
import { Header, Footer } from '../ui';

// This component exists for theming only. Indeed, we must call the useStyles hook AFTER
// the ThemeProvider has been initialized with the specified theme
export const ThemedAuthenticationLayout = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.container}>
                <div className={classes.columns}>{children}</div>
            </div>
            <Footer />
            <Notification />
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
    },
    columns: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3),
        },
        '&:first-child': {
            minWidth: '250px',
            [theme.breakpoints.down('sm')]: {
                maxWidth: '100%',
                width: '100%',
            },
        },
        '&:not(:first-child)': {
            borderStyle: 'solid',
            borderColor: theme.palette.divider,
            borderWidth: '0px 0px 0px 1px',
            marginLeft: theme.spacing(4),
            maxWidth: `calc(50% - ${theme.spacing(4)}px)`,
            [theme.breakpoints.down('sm')]: {
                borderWidth: '1px 0px 0px 0px',
                marginLeft: '0px',
                maxWidth: '100%',
                width: '100%',
            },
        },
        '&:last-child': {
            flexGrow: 1,
        },
    },
}));
