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
                exact: true,
                component: lazy(() => import('./views/Chat'))
            },
            {
                path: '/chat/:id',
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
                path: '/projects/:projectId',
                exact: true,
                component: lazy(() => import('./views/ProjectDetails'))
            },
            // {
            //     path: '/projects/:projectId/:tab/',
            //     exact: true,
            //     component: lazy(() => import('./views/ProjectDetails'))
            // },
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
            // {
            //     path: '/getting-started',
            //     exact: true,
            //     component: lazy(() => import('views/GettingStarted'))
            // },
            {
                component: () => <Redirect to="./errors/error-404" />
            }
        ]
    }
];

export default routes;
