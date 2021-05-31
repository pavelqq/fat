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
        restricted: false,
        component: () => <Redirect to="./presentation" />,
    },
    {
        path: '/auth',
        restricted: false,
        component: AuthLayout,
        routes: [
            {
                path: '/auth/register',
                restricted: false,
                exact: true,
                component: lazy(() => import('./views/Register'))
            },
            {
                path: '/auth/login',
                restricted: false,
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
        restricted: false,
        component: ErrorLayout,
        routes: [
            {
                path: '/errors/Error404',
                restricted: false,
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
        restricted: true,
        component: DashboardLayout,
        routes: [
            // {
            //     path: '/calendar',
            //     exact: true,
            //     component: lazy(() => import('views/Calendar'))
            // },
            // {
            //     path: '/changelog',
            //     exact: true,
            //     component: lazy(() => import('views/Changelog'))
            // },
            {
                path: '/chat',
                restricted: true,
                exact: true,
                component: lazy(() => import('./views/Chat'))
            },
            {
                path: '/chat/:id',
                restricted: true,
                exact: true,
                component: lazy(() => import('./views/Chat'))
            },
            // {
            //     path: '/dashboards/analytics',
            //     exact: true,
            //     component: DashboardAnalyticsView
            // },
            // {
            //     path: '/dashboards/default',
            //     exact: true,
            //     component: DashboardDefaultView
            // },
            // {
            //     path: '/invoices/:id',
            //     exact: true,
            //     component: lazy(() => import('views/InvoiceDetails'))
            // },
            // {
            //     path: '/kanban-board',
            //     exact: true,
            //     component: lazy(() => import('views/KanbanBoard'))
            // },
            // {
            //     path: '/mail',
            //     exact: true,
            //     component: lazy(() => import('views/Mail'))
            // },
            // {
            //     path: '/management/customers',
            //     exact: true,
            //     component: lazy(() => import('views/CustomerManagementList'))
            // },
            // {
            //     path: '/management/customers/:id',
            //     exact: true,
            //     component: lazy(() => import('views/CustomerManagementDetails'))
            // },
            // {
            //     path: '/management/customers/:id/:tab',
            //     exact: true,
            //     component: lazy(() => import('views/CustomerManagementDetails'))
            // },
            // {
            //     path: '/management/projects',
            //     exact: true,
            //     component: lazy(() => import('views/ProjectManagementList'))
            // },
            // {
            //     path: '/management/orders',
            //     exact: true,
            //     component: lazy(() => import('views/OrderManagementList'))
            // },
            // {
            //     path: '/management/orders/:id',
            //     exact: true,
            //     component: lazy(() => import('views/OrderManagementDetails'))
            // },
            {
                path: '/overview',
                restricted: true,
                exact: true,
                component: OverviewView
            },
            {
                path: '/presentation',
                restricted: false,
                exact: true,
                component: PresentationView
            },
            {
                path: '/profile/:id',
                restricted: true,
                exact: true,
                component: lazy(() => import('./views/Profile'))
            },
            {
                path: '/profile/:id/:tab',
                restricted: true,
                exact: true,
                component: lazy(() => import('./views/Profile'))
            },
            {
                path: '/projects/create',
                restricted: true,
                exact: true,
                component: lazy(() => import('./views/ProjectCreate'))
            },
            {
                path: '/projects/:id',
                restricted: true,
                exact: true,
                component: lazy(() => import('./views/ProjectDetails'))
            },
            {
                path: '/projects/:id/:tab',
                restricted: true,
                exact: true,
                component: lazy(() => import('./views/ProjectDetails'))
            },
            {
                path: '/projects',
                restricted: true,
                exact: true,
                component: lazy(() => import('./views/ProjectList'))
            },
            // {
            //     path: '/settings',
            //     exact: true,
            //     component: lazy(() => import('views/Settings'))
            // },
            // {
            //     path: '/settings/:tab',
            //     exact: true,
            //     component: lazy(() => import('views/Settings'))
            // },
            {
                path: '/social-feed',
                restricted: true,
                exact: true,
                component: lazy(() => import('./views/SocialFeed'))
            },
            // {
            //     path: '/getting-started',
            //     exact: true,
            //     component: lazy(() => import('views/GettingStarted'))
            // },
            // {
            //     component: () => <Redirect to="/errors/error-404" />
            // }
            {
                component: () => <Redirect to="./errors/error-404" />
            }
        ]
    }
];

export default routes;
