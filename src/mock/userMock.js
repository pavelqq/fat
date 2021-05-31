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

// mock.onGet('/api/users/1/projects').reply(200, {
//   projects: [
//     {
//       id: uuid(),
//       title: 'Mella Full Screen Slider',
//       author: {
//         name: 'Anje Keizer',
//         avatar: '/images/avatars/avatar_5.png'
//       },
//       price: '12,500',
//       currency: '$',
//       type: 'Full-Time',
//       location: 'Europe',
//       tags: [
//         {
//           text: 'Angular JS',
//           color: colors.red[600]
//         }
//       ],
//       updated_at: moment().subtract(24, 'minutes')
//     },
//     {
//       id: uuid(),
//       title: 'Dashboard Design',
//       author: {
//         name: 'Devias IO',
//         avatar: ''
//       },
//       price: '15,750',
//       currency: '$',
//       type: 'Full-Time',
//       location: 'Europe',
//       tags: [
//         {
//           text: 'React JS',
//           color: colors.indigo[600]
//         }
//       ],
//       updated_at: moment().subtract(1, 'hour')
//     },
//     {
//       id: uuid(),
//       title: 'Ten80 Web Design',
//       author: {
//         name: 'Devias IO',
//         avatar: ''
//       },
//       price: '15,750',
//       currency: '$',
//       type: 'Full-Time',
//       location: 'Europe',
//       tags: [
//         {
//           text: 'Vue JS',
//           color: colors.green[600]
//         }
//       ],
//       updated_at: moment().subtract(16, 'hour')
//     }
//   ]
// });
//
// mock.onGet('/api/users/1/reviews').reply(200, {
//   reviews: [
//     {
//       id: uuid(),
//       rating: 4,
//       message:
//         'Shen was really great during the all time session we created the project',
//       reviewer: {
//         name: 'Ekaterina Tankova',
//         avatar: '/images/avatars/avatar_2.png'
//       },
//       project: {
//         title: 'Mella Full Screen Slider',
//         price: '5,240.00'
//       },
//       pricePerHour: '43.00',
//       hours: 31,
//       currency: '$',
//       created_at: moment().subtract(4, 'hours')
//     },
//     {
//       id: uuid(),
//       rating: 5,
//       reviewer: {
//         name: 'Cao Yu',
//         avatar: '/images/avatars/avatar_3.png'
//       },
//       project: {
//         title: 'Dashboard Design',
//         price: '3,680.00'
//       },
//       pricePerHour: '38.00',
//       hours: 76,
//       currency: '$',
//       message:
//         'Being the savage\'s bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale\'s back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship\'s steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.',
//       created_at: moment().subtract(8, 'days')
//     }
//   ]
// });
//
// mock.onGet('/api/users/1/connections').reply(200, {
//   connections: [
//     {
//       id: uuid(),
//       name: 'Ekaterina Tankova',
//       avatar: '/images/avatars/avatar_2.png',
//       common: 12,
//       status: 'connected'
//     },
//     {
//       id: uuid(),
//       name: 'Cao Yu',
//       avatar: '/images/avatars/avatar_3.png',
//       common: 10,
//       status: 'rejected'
//     },
//     {
//       id: uuid(),
//       name: 'Alexa Richardson',
//       avatar: '/images/avatars/avatar_4.png',
//       common: 8,
//       status: 'pending'
//     },
//     {
//       id: uuid(),
//       name: 'Adam Denisov',
//       avatar: '/images/avatars/avatar_7.png',
//       common: 5,
//       status: 'not_connected'
//     },
//     {
//       id: uuid(),
//       name: 'Ava Gregoraci',
//       avatar: '/images/avatars/avatar_8.png',
//       common: 1,
//       status: 'connected'
//     }
//   ]
// });
