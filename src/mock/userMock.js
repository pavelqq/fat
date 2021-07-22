import moment from 'moment';
import mock from '../utils/mock';
import {v4 as uuidv4} from "uuid";

// mock.onGet('/api/users').reply(200, {
//   users: []
// });

mock.onGet('/api/users/1/posts').reply(200, {
    posts: [
        {
            id: uuidv4(),
            author: {
                name: 'Ирина Николаева',
                avatar: '/images/avatars/avatar_11.png'
            },
            message: 'Здарова. Как дела?',
            liked: true,
            likes: 24,
            comments: [
                {
                    id: uuidv4(),
                    author: {
                        name: 'Аня Пупкина',
                        avatar: '/images/avatars/avatar_5.png'
                    },
                    message: 'Лол',
                    created_at: moment().subtract(3, 'hours')
                },
                {
                    id: uuidv4(),
                    author: {
                        name: 'Женя Грибоедова',
                        avatar: '/images/avatars/avatar_8.png'
                    },
                    message:
                        'Хмм, вот это гений мысли',
                    created_at: moment().subtract(2, 'hours')
                },
                {
                    id: uuidv4(),
                    author: {
                        name: 'Женя Грибоедова',
                        avatar: '/images/avatars/avatar_8.png'
                    },
                    message:
                        'Ахахахах',
                    created_at: moment().subtract(2, 'hours')
                },
                {
                    id: uuidv4(),
                    author: {
                        name: 'Аня Пупкина',
                        avatar: '/images/avatars/avatar_5.png'
                    },
                    message: 'Это точно',
                    created_at: moment().subtract(2, 'hours')
                },
            ],
            created_at: moment().subtract(4, 'hours')
        },
        {
            id: uuidv4(),
            author: {
                name: 'Ирина Николаева',
                avatar: '/images/avatars/avatar_11.png'
            },
            media: 'https://pp.userapi.com/c850224/v850224250/14bda2/Jcnvta1AAQk.jpg',
            message:
                'Ну ты и жирдяй, худей давай, а то совсем уродом стал!',
            liked: false,
            likes: 65,
            comments: [
                {
                    id: uuidv4(),
                    author: {
                        name: 'Ваня Пупкин',
                        avatar: '/images/avatars/avatar_6.png'
                    },
                    message:
                        'Она права...',
                    created_at: moment().subtract(3, 'hours')
                },
                {
                    id: uuidv4(),
                    author: {
                        name: 'Аня Жирова',
                        avatar: '/images/avatars/avatar_4.png'
                    },
                    message: 'Хахахах',
                    created_at: moment().subtract(2, 'hours')
                }
            ],
            created_at: moment().subtract(7, 'hours')
        }
    ]
});
