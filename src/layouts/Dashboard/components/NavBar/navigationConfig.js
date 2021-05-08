/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Label from "../../../../components/Label";



export default [
  {
    // title: 'Страницы',
    pages: [
      {
        title: 'Домашняя страница',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: 'Статистика',
        href: '/dashboards',
        icon: DashboardIcon,
        // children: [
        //   {
        //     title: 'Default',
        //     href: '/dashboards/default'
        //   },
        //   {
        //     title: 'Analytics',
        //     href: '/dashboards/analytics'
        //   }
        // ]
      },
      {
        title: 'Задачи',
        href: '/management',
        icon: BarChartIcon,
        // children: [
        //   {
        //     title: 'Customers',
        //     href: '/management/customers'
        //   },
        //   {
        //     title: 'Customer Details',
        //     href: '/management/customers/1/summary'
        //   },
        //   {
        //     title: 'Plans',
        //     href: '/management/projects'
        //   },
        //   {
        //     title: 'Orders',
        //     href: '/management/orders'
        //   },
        //   {
        //     title: 'Order Details',
        //     href: '/management/orders/1'
        //   }
        // ]
      },
      {
        title: 'Лента событий',
        href: '/social-feed',
        icon: PeopleIcon
      },
      {
        title: 'Профиль',
        href: '/profile/1',
        icon: PersonIcon,
        children: [
          {
            title: 'Стена',
            href: '/profile/1/wall'
          },
          {
            title: 'Друзья',
            href: '/profile/1/friends'
          },
          {
            title: 'Планы',
            href: '/profile/1/plans'
          },
          // {
          //   title: 'Reviews',
          //   href: '/profile/1/reviews'
          // }
        ]
      },
      {
        title: 'Проекты',
        href: '/projects',
        icon: FolderIcon,
        children: [
          {
            title: 'Найти',
            href: '/projects'
          },
          {
            title: 'Создать',
            href: '/projects/create'
          },
          // {
          //   title: 'Overview',
          //   href: '/projects/1/overview'
          // },
          // {
          //   title: 'Files',
          //   href: '/projects/1/files'
          // },
          // {
          //   title: 'Activity',
          //   href: '/projects/1/activity'
          // },
          // {
          //   title: 'Subscribers',
          //   href: '/projects/1/subscribers'
          // }
        ]
      },
      // {
      //   title: 'Invoice',
      //   href: '/invoices/1',
      //   icon: ReceiptIcon
      // },
      // {
      //   title: 'Kanban Board',
      //   href: '/kanban-board',
      //   icon: ListAltIcon
      // },
      // {
      //   title: 'Сообщения',
      //   href: '/mail',
      //   icon: MailIcon,
      //   label: () => (
      //     <Label
      //       color={colors.red[500]}
      //       shape="rounded"
      //     >
      //       2
      //     </Label>
      //   )
      // },
      {
        title: 'Чаты',
        href: '/chat',
        icon: ChatIcon,
        label: () => (
          <Label
            color={colors.red[500]}
            shape="rounded"
          >
            4
          </Label>
        )
      },
      // {
      //   title: 'Calendar',
      //   href: '/calendar',
      //   icon: CalendarTodayIcon,
      //   label: () => <Label color={colors.green[500]}>New</Label>
      // },
      {
        title: 'Настройки',
        href: '/settings',
        icon: SettingsIcon,
        // children: [
        //   {
        //     title: 'General',
        //     href: '/settings/general'
        //   },
        //   {
        //     title: 'Subscription',
        //     href: '/settings/subscription'
        //   },
        //   {
        //     title: 'Notifications',
        //     href: '/settings/notifications'
        //   },
        //   {
        //     title: 'Security',
        //     href: '/settings/security'
        //   }
        // ]
      },
      // {
      //   title: 'Authentication',
      //   href: '/auth',
      //   icon: LockOpenIcon,
      //   children: [
      //     {
      //       title: 'Login',
      //       href: '/auth/login'
      //     },
      //     {
      //       title: 'Register',
      //       href: '/auth/register'
      //     }
      //   ]
      // },
      // {
      //   title: 'Errors',
      //   href: '/errors',
      //   icon: ErrorIcon,
      //   children: [
      //     {
      //       title: 'Error 401',
      //       href: '/errors/error-401'
      //     },
      //     {
      //       title: 'Error 404',
      //       href: '/errors/error-404'
      //     },
      //     {
      //       title: 'Error 500',
      //       href: '/errors/error-500'
      //     }
      //   ]
      // }
    ]
  },
  {
    title: 'Дополнительно',
    pages: [
      {
        title: 'Презентация',
        href: '/presentation',
        icon: PresentToAllIcon
      },
      // {
      //   title: 'Getting started',
      //   href: '/getting-started',
      //   icon: CodeIcon
      // },
      {
        title: 'О проекте',
        href: '',
        icon: ViewModuleIcon,
        label: () => <Label color={colors.blue['500']}>v1.0.0</Label>
      }
    ]
  }
];
