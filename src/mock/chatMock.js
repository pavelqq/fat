import {v4 as uuidv4} from 'uuid'
import moment from 'moment';

import mock from '../utils/mock'

mock.onGet('/api/chat/conversations').reply(200, {
    conversations: [
        {
            id: uuidv4(),
            otherUser: {
                name: 'Вася Пупкин',
                avatar: '/images/avatars/avatar_7.png',
                active: true,
                lastActivity: moment()
            },
            messages: [
                {
                    id: uuidv4(),
                    sender: {
                        authUser: false,
                        name: 'Вася Пупкин',
                        avatar: '/images/avatars/avatar_7.png',
                        lastActivity: moment()
                    },
                    content:
                        'Здарова!',
                    contentType: 'text',
                    created_at: moment().subtract(10, 'hours')
                },
                {
                    id: uuidv4(),
                    sender: {
                        authUser: true,
                        name: 'Павел Буре',
                        avatar: '/images/avatars/avatar_11.png'
                    },
                    content:
                        'Привет',
                    contentType: 'text',
                    created_at: moment().subtract(2, 'hours')
                },
                {
                    id: uuidv4(),
                    sender: {
                        authUser: false,
                        name: 'Вася Пупкин',
                        avatar: '/images/avatars/avatar_7.png'
                    },
                    content:
                        'Как твои треньки?',
                    contentType: 'text',
                    created_at: moment().subtract(5, 'minutes')
                },
                {
                    id: uuidv4(),
                    sender: {
                        authUser: true,
                        name: 'Павел Буре',
                        avatar: '/images/avatars/avatar_11.png'
                    },
                    content:
                        'Супер, вот скинул 20 кг',
                    contentType: 'text',
                    created_at: moment().subtract(3, 'minutes')
                },
                {
                    id: uuidv4(),
                    sender: {
                        authUser: false,
                        name: 'Вася Пупкин',
                        avatar: '/images/avatars/avatar_7.png'
                    },
                    content: 'Скинь фотку',
                    contentType: 'text',
                    created_at: moment().subtract(1, 'minute')
                },
                {
                    id: uuidv4(),
                    sender: {
                        authUser: true,
                        name: 'Павел Буре',
                        avatar: '/images/avatars/avatar_11.png'
                    },
                    content: 'https://avatars.mds.yandex.net/get-zen_doc/1583391/pub_5cfa5c3f91dc1000af2ba51a_5cfa5c5d95ea7300af21b9db/scale_1200',
                    contentType: 'image',
                    created_at: moment().subtract(1, 'minute')
                }
            ],
            unread: 0,
            created_at: moment().subtract(1, 'minute')
        },
        // {
        //   id: uuidv4(),
        //   otherUser: {
        //     name: 'Ekaterina Tankova',
        //     avatar: '/images/avatars/avatar_2.png',
        //     active: true,
        //     lastActivity: moment()
        //   },
        //   messages: [
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: true,
        //         name: 'Shen Zhi',
        //         avatar: '/images/avatars/avatar_11.png'
        //       },
        //       content: 'Hey, would you like to collaborate?',
        //       contentType: 'text',
        //       created_at: moment().subtract(6, 'minutes')
        //     },
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: false,
        //         name: 'Ekaterina Tankova',
        //         avatar: '/images/avatars/avatar_2.png'
        //       },
        //       content: 'I don\'t think that\'s ideal',
        //       contentType: 'text',
        //       created_at: moment().subtract(5, 'minutes')
        //     }
        //   ],
        //   unread: 3,
        //   created_at: moment().subtract(26, 'minutes')
        // },
        // {
        //   id: uuidv4(),
        //   otherUser: {
        //     name: 'Emilee Simchenko',
        //     avatar: '/images/avatars/avatar_9.png',
        //     active: false,
        //     lastActivity: moment().subtract(2, 'minutes')
        //   },
        //   messages: [
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: false,
        //         name: 'Emilee Simchenko',
        //         avatar: '/images/avatars/avatar_9.png'
        //       },
        //       content: 'Hi Shen, we should submit the product today',
        //       contentType: 'text',
        //       created_at: moment().subtract(2, 'hours')
        //     },
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: true,
        //         name: 'Shen Zhi',
        //         avatar: '/images/avatars/avatar_11.png'
        //       },
        //       content: 'Oh, totally forgot about it',
        //       contentType: 'text',
        //       created_at: moment()
        //         .subtract(1, 'hour')
        //         .subtract(2, 'minutes')
        //     },
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: true,
        //         name: 'Shen Zhi',
        //         avatar: '/images/avatars/avatar_11.png'
        //       },
        //       content: 'Alright then',
        //       contentType: 'text',
        //       created_at: moment().subtract(1, 'hour')
        //     }
        //   ],
        //   unread: 0,
        //   created_at: moment().subtract(3, 'hours')
        // },
        // {
        //   id: uuidv4(),
        //   otherUser: {
        //     name: 'Kwak Seong-Min',
        //     avatar: '/images/avatars/avatar_10.png',
        //     active: true,
        //     lastActivity: moment()
        //   },
        //   messages: [
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: true,
        //         name: 'Shen Zhi',
        //         avatar: '/images/avatars/avatar_11.png'
        //       },
        //       content:
        //         'Hi Kwak! I\'ve seen your projects and we can work together on a project. Will send you the details later.',
        //       contentType: 'text',
        //       created_at: moment().subtract(3, 'days')
        //     },
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: false,
        //         name: 'Kwak Seong-Min',
        //         avatar: '/images/avatars/avatar_10.png'
        //       },
        //       content: 'Haha, right, we\'ll do it',
        //       contentType: 'text',
        //       created_at: moment().subtract(2, 'days')
        //     }
        //   ],
        //   unread: 1,
        //   created_at: moment().subtract(2, 'days')
        // },
        // {
        //   id: uuidv4(),
        //   otherUser: {
        //     name: 'Cao Yu',
        //     avatar: '/images/avatars/avatar_3.png',
        //     active: false,
        //     lastActivity: moment().subtract(4, 'hours')
        //   },
        //   messages: [
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: true,
        //         name: 'Shen Zhi',
        //         avatar: '/images/avatars/avatar_11.png'
        //       },
        //       content: 'Did you receive my email about the brief?',
        //       contentType: 'text',
        //       created_at: moment().subtract(3, 'days')
        //     },
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: false,
        //         name: 'Cao Yu',
        //         avatar: '/images/avatars/avatar_3.png'
        //       },
        //       content: 'I\'m not sure, but I will check it later',
        //       contentType: 'text',
        //       created_at: moment().subtract(2, 'days')
        //     }
        //   ],
        //   unread: 0,
        //   created_at: moment().subtract(5, 'days')
        // },
        // {
        //   id: uuidv4(),
        //   otherUser: {
        //     name: 'Clarke Gillebert',
        //     avatar: '/images/avatars/avatar_6.png',
        //     active: true,
        //     lastActivity: moment()
        //   },
        //   messages: [
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: false,
        //         name: 'Clarke Gillebert',
        //         avatar: '/images/avatars/avatar_6.png'
        //       },
        //       content: 'Hey Shen! I love your projects!!!',
        //       contentType: 'text',
        //       created_at: moment().subtract(2, 'days')
        //     },
        //     {
        //       id: uuidv4(),
        //       sender: {
        //         authUser: true,
        //         name: 'Shen Zhi',
        //         avatar: '/images/avatars/avatar_11.png'
        //       },
        //       content: 'Haha thank you Clarke, I\'m doing our best',
        //       contentType: 'text',
        //       created_at: moment().subtract(3, 'days')
        //     }
        //   ],
        //   unread: 0,
        //   created_at: moment().subtract(5, 'days')
        // }
    ]
});

mock.onGet('/api/chat/activity').reply(200, {
    groups: [
        {
            id: 'clients',
            name: 'Clients'
        },
        {
            id: 'friends',
            name: 'Friends'
        }
    ],
    connections: [
        {
            id: uuidv4(),
            name: 'Ekaterina Tankova',
            avatar: '/images/avatars/avatar_2.png',
            active: false,
            lastActivity: moment().subtract(24, 'minutes'),
            group: 'clients'
        },
        {
            id: uuidv4(),
            name: 'Cao Yu',
            avatar: '/images/avatars/avatar_3.png',
            active: true,
            lastActivity: moment(),
            group: 'clients'
        },
        {
            id: uuidv4(),
            name: 'Anje Keizer',
            avatar: '/images/avatars/avatar_5.png',
            active: false,
            lastActivity: moment().subtract(1, 'minutes'),
            group: 'clients'
        },
        {
            id: uuidv4(),
            name: 'Ava Gregoraci',
            avatar: '/images/avatars/avatar_8.png',
            active: true,
            lastActivity: moment(),
            group: 'clients'
        },
        {
            id: uuidv4(),
            name: 'Clarke Gillebert',
            avatar: '/images/avatars/avatar_6.png',
            active: true,
            lastActivity: moment(),
            group: 'friends'
        },
        {
            id: uuidv4(),
            name: 'Adam Denisov',
            avatar: '/images/avatars/avatar_7.png',
            active: false,
            lastActivity: moment().subtract(24, 'minutes'),
            group: 'friends'
        },
        {
            id: uuidv4(),
            name: 'Emilee Simchenko',
            avatar: '/images/avatars/avatar_9.png',
            active: true,
            lastActivity: moment(),
            group: 'friends'
        },
        {
            id: uuidv4(),
            name: 'Kwak Seong-Min',
            avatar: '/images/avatars/avatar_10.png',
            active: true,
            lastActivity: moment(),
            group: 'friends'
        },
        {
            id: uuidv4(),
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png',
            active: true,
            lastActivity: moment(),
            group: 'friends'
        },
        {
            id: uuidv4(),
            name: 'Merrile Burgett',
            avatar: '/images/avatars/avatar_12.png',
            active: false,
            lastActivity: moment().subtract(2, 'days')
        }
    ]
});
