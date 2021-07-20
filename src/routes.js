import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from "./layouts/Dashboard";
import PresentationView from './views/Presentation';
import OverviewView from './views/Overview'

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="./presentation" />,
    },
    {
        path: '/auth',
        component: AuthLayout,
        routes: [
            {
                path: '/auth/register',
                exact: true,
                component: lazy(() => import('./views/Register'))
            },
            {
                path: '/auth/login',
                exact: true,
                component: lazy(() => import('./views/Login'))
            },
            {
                component: () => <Redirect to="./errors/error-404" />
            }
        ]
    },
    {
        path: '/errors',
        component: ErrorLayout,
        routes: [
            {
                path: '/errors/Error404',
                exact: true,
                component: lazy(() => import('./views/Error404'))
            },
            {
                component: () => <Redirect to="./errors/error-404" />
            }
        ]
    },
    {
        route: '*',
        component: DashboardLayout,
        routes: [
            {
                path: '/chat',
                exact: true,
                component: lazy(() => import('./views/Chat'))
            },
            {
                path: '/chat/:id',
                exact: true,
                component: lazy(() => import('./views/Chat'))
            },
            {
                path: '/overview',
                exact: true,
                component: OverviewView
            },
            {
                path: '/presentation',
                exact: true,
                component: PresentationView
            },
            {
                path: '/profile/:id',
                exact: true,
                component: lazy(() => import('./views/Profile'))
            },
            {
                path: '/profile/:id/:tab',
                exact: true,
                component: lazy(() => import('./views/Profile'))
            },
            {
                path: '/projects/create',
                exact: true,
                component: lazy(() => import('./views/ProjectCreate'))
            },
            {
                path: '/projects/:projectId/author/:userId',
                exact: true,
                component: lazy(() => import('./views/ProjectDetails'))
            },
            {
                path: '/projects/:projectId/author/:userId/:tab',
                exact: true,
                component: lazy(() => import('./views/ProjectDetails'))
            },
            {
                path: '/projects',
                exact: true,
                component: lazy(() => import('./views/ProjectList'))
            },
            {
                path: '/settings',
                exact: true,
                component: lazy(() => import('./views/Settings'))
            },
            {
                path: '/settings/:tab',
                exact: true,
                component: lazy(() => import('./views/Settings'))
            },
            {
                path: '/social-feed',
                exact: true,
                component: lazy(() => import('./views/SocialFeed'))
            },
            {
                component: () => <Redirect to="./errors/error-404" />
            }
        ]
    }
];

export default routes;
