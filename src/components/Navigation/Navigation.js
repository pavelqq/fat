/* eslint-disable react/no-multi-comp */
import React from 'react';
import {matchPath} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {List, Typography} from '@material-ui/core';


import {NavigationListItem} from './components';
import useRouter from "../../utils/useRouter";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(3)
    }
}));

const NavigationList = props => {
    const {pages, ...rest} = props;

    return (
        <List>
            {pages.reduce(
                (items, page) => reduceChildRoutes({items, page, ...rest}),
                []
            )}
        </List>
    );
};

const reduceChildRoutes = props => {
    const {router, items, page, depth} = props;

    if (page.children) {
        const open = false;
        // const open = matchPath(router.location.pathname, {
        //   path: page.href,
        //   exact: false
        // });

        items.push(
            <NavigationListItem
                depth={depth}
                icon={page.icon}
                key={page.title}
                label={page.label}
                open={Boolean(open)}
                title={page.title}
            >
                <NavigationList
                    depth={depth + 1}
                    pages={page.children}
                    router={router}
                />
            </NavigationListItem>
        );
    } else {
        items.push(
            <NavigationListItem
                depth={depth}
                href={page.href}
                icon={page.icon}
                key={page.title}
                label={page.label}
                title={page.title}
            />
        );
    }

    return items;
};

const Navigation = props => {
    const {title, pages, className, component: Component, ...rest} = props;

    const classes = useStyles();
    const router = useRouter();

    return (
        <Component
            {...rest}
            className={clsx(classes.root, className)}
        >
            {title && <Typography variant="overline">{title}</Typography>}
            <NavigationList
                depth={0}
                pages={pages}
                router={router}
            />
        </Component>
    );
};

Navigation.defaultProps = {
    component: 'nav'
};

export default Navigation;
