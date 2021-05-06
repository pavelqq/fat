import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import {colors} from '@material-ui/core';

import mock from '../utils/mock';

mock.onGet('/api/account/profile').reply(200, {
    profile: {
        avatar: '/images/avatars/avatar_11.png',
        canHire: false,
        country: 'USA',
        email: 'shen.zhi@devias.io',
        firstName: 'Shen',
        isPublic: true,
        lastName: 'Zhi',
        phone: '+40 777666555',
        state: 'Alabama',
        timezone: '4:32PM (GMT-4)'
    }
});

mock.onGet('/api/account/statistics').reply(200, {
    statistics: {
        payout: '4,250',
        projects: '12,500',
        visitors: '230',
        watching: '5'
    }
});

mock.onGet('/api/account/projects').reply(200, {
    projects: [
        {
            id: uuidv4(),
            title: '"Череда-10" - программа тренировок от Дениса Борисова',
            duration: '6',
            type: 'Тренировка',
            difficult: '5 из 10',
            description: 'Тренировочная программа Борисова является системой набора мышечной массы. Как и любая система, она основывается на некоторых принципах, соблюдая которые атлет сможет нарастить солидный мышечный объем. Большим плюсом данной системы тренировок является то, что она учитывает уровень подготовленности атлетов, а так же их восстановительные возможности.',
            author: {
                name: 'Денис Борисов',
                avatar: 'https://i0.wp.com/denis-borisov.com/wp-content/uploads/2014/03/silovyie-parametryi.jpg'
            },
            tags: [
                {
                    id: uuidv4(),
                    text: 'Мясо',
                    color: colors.green[600]
                },
                {
                    id: uuidv4(),
                    text: 'Матюки',
                    color: colors.purple[600]
                },
                {
                    id: uuidv4(),
                    text: 'Саня',
                    color: colors.blue[600]
                },
                {
                    id: uuidv4(),
                    text: 'Силовая',
                    color: colors.red[600]
                },
                {
                    id: uuidv4(),
                    text: 'Тренировка на массу',
                    color: colors.yellow[600]
                },
                {
                    id: uuidv4(),
                    text: 'Денис Борисов',
                    color: colors.cyan[600]
                },
                {
                    id: uuidv4(),
                    text: 'Борисов',
                    color: colors.pink[600]
                },
                {
                    id: uuidv4(),
                    text: '+10кг',
                    color: colors.orange[600]
                }
            ],
            updated_at: moment().subtract(24, 'minutes')
        },
        {
            id: uuidv4(),
            title: 'Королевский рацион Дениса Семенихина',
            duration: '6',
            type: 'Диета',
            difficult: '8 из 10',
            description: 'Мне давно предлагали разработать свой "фирменный рацион" или набор блюд, чтобы упростить людям построение питания и избавить от этих забот. Чтобы все их внимание было направлено именно на тренировки. Наконец это удалось совершить.',
            author: {
                name: 'Денис Семенихин',
                avatar: 'https://lh3.googleusercontent.com/proxy/3Q7ACVeQ243tSzl923TbTnsuinD-rOlwlH5kLoFPHnc1LkSXXn_Hwlyx4O7vYQ1zj69hmZFEOix16dqas3SrikA'
            },
            tags: [
                {
                    id: uuidv4(),
                    text: 'Мясо',
                    color: colors.lightGreen[600]
                },
                {
                    id: uuidv4(),
                    text: 'Диета',
                    color: colors.purple[600]
                },
                {
                    id: uuidv4(),
                    text: 'Санчес',
                    color: colors.lightBlue[600]
                },
                {
                    id: uuidv4(),
                    text: 'Похудеть на 10 кг',
                    color: colors.yellow[600]
                },
                {
                    id: uuidv4(),
                    text: 'Убрать бока',
                    color: colors.blueGrey[600]
                },
                {
                    id: uuidv4(),
                    text: 'Денис Борисов',
                    color: colors.brown[600]
                }
            ],
            updated_at: moment().subtract(4, 'days')
        }
    ]
});

mock.onGet('/api/account/todos').reply(200, {
    todos: [
        {
            id: uuidv4(),
            title: 'Finish the proposal design and contract for the client ASAP',
            deadline: moment().subtract(2, 'days'),
            done: false
        },
        {
            id: uuidv4(),
            title: 'Finish the proposal design and contract for the client ASAP',
            deadline: moment(),
            done: false
        },
        {
            id: uuidv4(),
            title:
                'Upload the files for the client @Adrian Stefan with the fonts, assets exported and all the fancy svgs',
            deadline: moment().add(2, 'days'),
            done: false
        },
        {
            id: uuidv4(),
            title: 'Re-write the card component with hooks and context',
            deadline: moment().add(5, 'days'),
            done: false
        },
        {
            id: uuidv4(),
            title: 'Send proposal for the fintech project',
            deadline: moment().add(5, 'days'),
            done: false
        },
        {
            id: uuidv4(),
            title:
                'Create todo app with react hooks just to get a better understanding of the concept',
            deadline: moment().add(7, 'days'),
            done: true
        }
    ]
});

mock.onGet('/api/account/notifications').reply(200, {
    notifications: [
        {
            id: uuidv4(),
            title: 'New order has been received',
            type: 'order',
            created_at: moment().subtract(2, 'hours')
        },
        {
            id: uuidv4(),
            title: 'New customer is registered',
            type: 'user',
            created_at: moment().subtract(1, 'day')
        },
        {
            id: uuidv4(),
            title: 'Project has been approved',
            type: 'project',
            created_at: moment().subtract(3, 'days')
        },
        {
            id: uuidv4(),
            title: 'New feature has been added',
            type: 'feature',
            created_at: moment().subtract(7, 'days')
        }
    ]
});

mock.onGet('/api/account/subscription').reply(200, {
    subscription: {
        name: 'Freelancer',
        price: '5',
        currency: '$',
        proposalsLeft: 12,
        templatesLeft: 5,
        invitesLeft: 24,
        adsLeft: 10,
        hasAnalytics: true,
        hasEmailAlerts: true
    }
});

mock.onGet('/api/account/settings').reply(200, {
    settings: {}
});
