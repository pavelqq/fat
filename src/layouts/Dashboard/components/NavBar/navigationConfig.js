import React from 'react';
import {colors} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Label from "../../../../components/Label";


export default [
    {
        title: 'Страницы',
        pages: [
            {
                title: 'Домашняя страница',
                href: '/overview',
                icon: HomeIcon
            },
            {
                title: 'Мессенджер',
                href: '/chat',
                icon: ChatIcon,
                // label: () => (
                //     <Label
                //         color={colors.red[500]}
                //         shape="rounded"
                //     >
                //         4
                //     </Label>
                // )
            },
            {
                title: 'Лента',
                href: '/social-feed',
                icon: PeopleIcon
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
                ]
            },
            // {
            //     title: 'Статистика',
            //     href: '/dashboards',
            //     icon: DashboardIcon,
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
            {
                title: 'Настройки',
                href: '/settings',
                icon: SettingsIcon,
                children: [
                  {
                    title: 'Редактировать профиль',
                    href: '/settings/general'
                  },
                  {
                    title: 'Приватность',
                    href: '/settings/access'
                  }
                ]
            },
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
            {
                title: 'О проекте',
                href: '#',
                icon: ViewModuleIcon,
                label: () => <Label color={colors.blue['500']}>v1.0.0</Label>
            }
        ]
    }
];
