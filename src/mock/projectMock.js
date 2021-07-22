import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import {colors} from '@material-ui/core';

import mock from '../utils/mock'


mock.onGet('/api/?projects=all').reply(200, {
    projects: [
        {
            id: 1,
            title: '"Череда-10" - программа тренировок от Дениса Борисова',
            duration: '6',
            type: 'Тренировка',
            difficult: '5 из 10',
            description: 'Тренировочная программа Борисова является системой набора мышечной массы. Как и любая система, она основывается на некоторых принципах, соблюдая которые атлет сможет нарастить солидный мышечный объем. Большим плюсом данной системы тренировок является то, что она учитывает уровень подготовленности атлетов, а так же их восстановительные возможности.',
            author: {
                name: 'Денис Борисов',
                avatar: 'https://i0.wp.com/denis-borisov.com/wp-content/uploads/2014/03/silovyie-parametryi.jpg',
                bio: 'Тренер. Стаж 10 лет. Банка - 50 см'
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
            members: [
                {
                    id: uuidv4(),
                    name: 'Ekaterina Tankova',
                    avatar: '/images/avatars/avatar_2.png',
                    bio: 'Front End Developer'
                },
                {
                    id: uuidv4(),
                    name: 'Cao Yu',
                    avatar: '/images/avatars/avatar_3.png',
                    bio: 'UX Designer'
                },
                {
                    id: uuidv4(),
                    name: 'Anje Keizer',
                    avatar: '/images/avatars/avatar_5.png',
                    bio: 'Copyright'
                }
            ],
            files: [
                {
                    id: uuidv4(),
                    name: 'example-project1.jpg',
                    url: '/images/projects/project_2.jpg',
                    mimeType: 'image/png',
                    size: 1024 * 1024 * 3
                },
                {
                    id: uuidv4(),
                    name: 'docs.zip',
                    url: '#',
                    mimeType: 'application/zip',
                    size: 1024 * 1024 * 25
                },
                {
                    id: uuidv4(),
                    name: 'example-project2.jpg',
                    url: '/images/projects/project_1.jpg',
                    mimeType: 'image/png',
                    size: 1024 * 1024 * 2
                }
            ],
            activities: [
                {
                    id: uuidv4(),
                    subject: 'Project owner',
                    subject_type: 'user',
                    action_type: 'upload_file',
                    action_desc: 'has uploaded a new file',
                    created_at: moment().subtract(23, 'minutes')
                },
                {
                    id: uuidv4(),
                    subject: 'Adrian Stefan',
                    subject_type: 'user',
                    action_type: 'join_team',
                    action_desc: 'joined team as a Front-End Developer',
                    created_at: moment().subtract(2, 'hours')
                },
                {
                    id: uuidv4(),
                    subject: 'Alexandru Robert',
                    action_type: 'join_team',
                    action_desc: 'joined team as a Full Stack Developer',
                    created_at: moment().subtract(9, 'hours')
                },
                {
                    id: uuidv4(),
                    subject: 'Project owner',
                    subject_type: 'user',
                    action_type: 'price_change',
                    action_desc: 'raised the project budget',
                    created_at: moment().subtract(2, 'days')
                },
                {
                    id: uuidv4(),
                    subject: 'Contest',
                    subject_type: 'project',
                    action_type: 'contest_created',
                    action_desc: 'created',
                    created_at: moment().subtract(4, 'days')
                }
            ],
            updated_at: moment().subtract(24, 'minutes')
        },
        {
            id: 2,
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

mock.onGet(`/api/?project=1`).reply(200,   {
    project: {
        tasks: {
                train: [
                    {
                        date: '25/05/2021',
                        exercises: [
                            {
                                id: uuidv4(),
                                name: 'Жим Лежа',
                                sets: [
                                    {
                                        set: '1',
                                        weight: '20',
                                        reps: '12',
                                        chill: '70',
                                        tonnage: '300',
                                    },
                                    {
                                        set: '2',
                                        weight: '50',
                                        reps: '12',
                                        chill: '90',
                                        tonnage: '400',
                                    },
                                    {
                                        set: '3',
                                        weight: '80',
                                        reps: '8',
                                        chill: '140',
                                        tonnage: '480',
                                    },
                                    {
                                        set: '4',
                                        weight: '80',
                                        reps: '4',
                                        chill: '120',
                                        tonnage: '320',
                                    },
                                    {
                                        set: '5',
                                        weight: '100',
                                        reps: '2',
                                        chill: '120',
                                        tonnage: '200',
                                    },
                                    {
                                        set: '6',
                                        weight: '100',
                                        reps: '2',
                                        chill: '120',
                                        tonnage: '200',
                                    },
                                    {
                                        set: '7',
                                        weight: '50',
                                        reps: '10',
                                        chill: '120',
                                        tonnage: '500',
                                    },
                                ]
                            },
                            {
                                id: uuidv4(),
                                name: 'Подтягивания',
                                sets: [
                                    {
                                        set: '1',
                                        weight: '90',
                                        reps: '10',
                                        chill: '60',
                                        tonnage: '900',
                                    },
                                    {
                                        set: '2',
                                        weight: '95',
                                        reps: '8',
                                        chill: '90',
                                        tonnage: '760',
                                    },
                                    {
                                        set: '3',
                                        weight: '100',
                                        reps: '6',
                                        chill: '120',
                                        tonnage: '600',
                                    },
                                    {
                                        set: '4',
                                        weight: '105',
                                        reps: '4',
                                        chill: '120',
                                        tonnage: '420',
                                    },
                                    {
                                        set: '5',
                                        weight: '105',
                                        reps: '4',
                                        chill: '120',
                                        tonnage: '420',
                                    },
                                    {
                                        set: '6',
                                        weight: '90',
                                        reps: '10',
                                        chill: '120',
                                        tonnage: '900',
                                    },
                                    {
                                        set: '7',
                                        weight: '90',
                                        reps: '10',
                                        chill: '120',
                                        tonnage: '900',
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        date: '26/05/2021',
                        exercises: [
                            {
                                id: uuidv4(),
                                name: 'Жим стоя',
                                sets: [
                                    {
                                        set: '1',
                                        weight: '20',
                                        reps: '15',
                                        chill: '60',
                                        tonnage: '300',
                                    },
                                    {
                                        set: '2',
                                        weight: '40',
                                        reps: '10',
                                        chill: '90',
                                        tonnage: '400',
                                    },
                                    {
                                        set: '3',
                                        weight: '60',
                                        reps: '8',
                                        chill: '120',
                                        tonnage: '480',
                                    },
                                    {
                                        set: '4',
                                        weight: '80',
                                        reps: '4',
                                        chill: '120',
                                        tonnage: '320',
                                    },
                                    {
                                        set: '5',
                                        weight: '100',
                                        reps: '2',
                                        chill: '120',
                                        tonnage: '200',
                                    },
                                    {
                                        set: '6',
                                        weight: '100',
                                        reps: '2',
                                        chill: '120',
                                        tonnage: '200',
                                    },
                                    {
                                        set: '7',
                                        weight: '50',
                                        reps: '10',
                                        chill: '120',
                                        tonnage: '500',
                                    },
                                ]
                            },
                            {
                                id: uuidv4(),
                                name: 'Тяга к подбородку',
                                sets: [
                                    {
                                        set: '1',
                                        weight: '20',
                                        reps: '15',
                                        chill: '60',
                                        tonnage: '300',
                                    },
                                    {
                                        set: '2',
                                        weight: '40',
                                        reps: '10',
                                        chill: '90',
                                        tonnage: '400',
                                    },
                                    {
                                        set: '3',
                                        weight: '60',
                                        reps: '8',
                                        chill: '120',
                                        tonnage: '480',
                                    },
                                    {
                                        set: '4',
                                        weight: '80',
                                        reps: '4',
                                        chill: '120',
                                        tonnage: '320',
                                    },
                                    {
                                        set: '5',
                                        weight: '100',
                                        reps: '2',
                                        chill: '120',
                                        tonnage: '200',
                                    },
                                    {
                                        set: '6',
                                        weight: '100',
                                        reps: '2',
                                        chill: '120',
                                        tonnage: '200',
                                    },
                                    {
                                        set: '7',
                                        weight: '50',
                                        reps: '10',
                                        chill: '120',
                                        tonnage: '500',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        date: '27/05/2021',
                        exercises: [
                            {
                                id: uuidv4(),
                                name: 'Приседания со штангой на плечах',
                                sets: [
                                    {
                                        set: '1',
                                        weight: '20',
                                        reps: '15',
                                        chill: '60',
                                        tonnage: '300',
                                    },
                                    {
                                        set: '2',
                                        weight: '40',
                                        reps: '10',
                                        chill: '90',
                                        tonnage: '400',
                                    },
                                    {
                                        set: '3',
                                        weight: '60',
                                        reps: '8',
                                        chill: '120',
                                        tonnage: '480',
                                    },
                                    {
                                        set: '4',
                                        weight: '80',
                                        reps: '4',
                                        chill: '120',
                                        tonnage: '320',
                                    },
                                    {
                                        set: '5',
                                        weight: '100',
                                        reps: '2',
                                        chill: '120',
                                        tonnage: '200',
                                    },
                                    {
                                        set: '6',
                                        weight: '100',
                                        reps: '2',
                                        chill: '120',
                                        tonnage: '200',
                                    },
                                    {
                                        set: '7',
                                        weight: '50',
                                        reps: '10',
                                        chill: '120',
                                        tonnage: '500',
                                    },
                                ]
                            },
                            {
                                id: uuidv4(),
                                name: 'Мертвая тяга',
                                sets: [
                                    {
                                        set: '1',
                                        weight: '20',
                                        reps: '15',
                                        chill: '60',
                                        tonnage: '300',
                                    },
                                    {
                                        set: '2',
                                        weight: '40',
                                        reps: '10',
                                        chill: '90',
                                        tonnage: '400',
                                    },
                                    {
                                        set: '3',
                                        weight: '60',
                                        reps: '8',
                                        chill: '120',
                                        tonnage: '480',
                                    },
                                    {
                                        set: '4',
                                        weight: '80',
                                        reps: '4',
                                        chill: '120',
                                        tonnage: '320',
                                    },
                                    {
                                        set: '5',
                                        weight: '100',
                                        reps: '2',
                                        chill: '120',
                                        tonnage: '200',
                                    },
                                    {
                                        set: '6',
                                        weight: '100',
                                        reps: '2',
                                        chill: '120',
                                        tonnage: '200',
                                    },
                                    {
                                        set: '7',
                                        weight: '50',
                                        reps: '10',
                                        chill: '120',
                                        tonnage: '500',
                                    },
                                ]
                            },
                        ]
                    },
                ],
        },
        title: 'Череда 10',
        id: 1,
        author: {
            name: 'Денис Борисов',
            avatar: 'https://денис-борисов.рф/wp-content/uploads/2018/01/denchik-denis-borisov-600x400.jpg',
            bio: 'Тренер. Стаж 10 лет. Банка - 50 см'
        },
        brief: `
#### "Череда-10": Программа Тренировок на Массу

Я давал вам очень много теории по различным аспектам тренировок в тренажерном зале.  Как показывает мой опыт - для большинства людей этого мало. Мене регулярно просят дать ПРАКТИЧЕСКУЮ СХЕМУ тренировок.  Сегодня я решил поделиться с вами одной из своих программ тренировок на массу, которая мне очень нравится благодаря чередованию упражнений на мышцы антагонисты (поэтому такое название "ЧЕРЕДА-10").  Мне показалось что сейчас самое время для программы ориентированной на МАССАНАБОР потому что лето прошло и традиционно многие люди уходят зимой в набор.  Итак, приступим...

#### ОСОБЕННОСТИ ПРОГРАММЫ "ЧЕРЕДА-10"
- УПРАЖНЕНИЯ: БАЗОВЫЕ
- ПОВЫШЕНИЕ ИНТЕНСИВНОСТИ:  РАСТЯНУТЫЕ СУПЕРСЕТЫ
- НАГРУЗКА:  ПРОГРЕССИВНАЯ весом
- ПОВТОРЕНИЯ:  10 (ДЕСЯТЬ)

#### БАЗОВЫЕ УПРАЖНЕНИЯ
Это такие упражнения, в которых задействовано несколько (больше одного) суставов.  Почему она важна в массонаборном цикле? Потому что такая нагрузка более естественна для нашего костно-мышечного аппарата и задействует больше мышц, чем изолированные упражнения.  А значит в этих упражнениях вы сильнее.

Логично, что чем больше мышц работает, тем лучше для общего развития мускулатуры. Кроме того, чем больше мышц сокращается, тем большую нагрузку можно осилить. А это уже напрямую влияет на ЦНС (связь мозг-мышцы). Т.е. в базовых упражнениях уровень нервной стимуляции мышечных сокращений более мощный.  Что приводит к лучшему росту больших мышц.

#### РАСТЯНУТЫЕ СУПЕРСЕТЫ (ЧЕРЕДОВАНИЕ)
по сути речь идет о суперсетах С ОТДЫХОМ.  Традиционно СУПЕРСЕТ - это ДВА упражнения, выполняемых на МЫШЦЫ-АНТАГОНИСТЫ, друг за другом,  без отдыха.

#### ПРИМЕР:

#### ГРУДЬ, ДЕЛЬТЫ ЗАДНИЕ

- скручивания лежа                     5 Х макс.
- Наклонный жим шт. лежа       3 размин. +   5 Х 10
- Тяга штанги к подбородку      3 размин. +   5 Х 10


- Жим гантелей лежа                   1 размин. + 5 Х 10
- Махи гантелями стоя                1 размин. + 5 Х 10
- Разводка гантелей лежа             1 размин. + 5 Х 10
- Махи гантелями в наклоне       1 размин + 5 Х 10


#### СПИНА, ДЕЛЬТЫ ПЕРЕДНИЕ

- Обратные скручивания         5 Х макс.
- Тяга Т-грифа                          3 размин. +   5 Х 10
- Жим штанги с груди стоя    3 размин. +   5 Х 10


Вертикальная тяга сверху    1 размин. + 5 Х 10
- жим гантелей сидя                  1 размин. + 5 Х 10
- Тяга одной рукой                     1 размин. + 5 Х 10
- Махи гантелью перед собой   1 размин + 5 Х 10


#### БИЦЕПС, ТРИЦЕПС

- Скручивания лежа                    5 Х макс.
- Подьем штанги на бицепс       3 размин. +   4 Х 10
- Жим лежа узким хватом          3 размин. +   4 Х 10

- Молотковые сгибания стоя       1 размин. + 4 Х 10
- Французский ж. из-за головы    1 размин. + 4 Х 10
- Сгибания на верхнем блоке       1 размин. + 4 Х 10
- Разгибания на верхнем блоке   1 размин + 4 Х 10


#### НОГИ, ИКРЫ

- обратные скручивания              5 Х макс.
- Икры стоя                                    2 размин. + 5 Х 10

- Приседания с штангой              3 размин. +   5 Х 10
- Сгибания ног лежа                     3 размин. +   5 Х 10
- Жим ногами                                  1 размин. + 5 Х 10
- Сгибания ног стоя (или сидя)    1 размин + 5 Х 10

- Мертвая тяга на прямых             1 размин. + 5 Х 10
- Разгибание ног сидя                      1 размин. + 5 Х 10
    `,
        price: '1',
        currency: 'чел',
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
        members: [
            {
                id: uuidv4(),
                name: 'Анюта Никонова',
                avatar: '/images/avatars/avatar_2.png',
                bio: 'Фитнес-модель'
            },
        ],
        files: [
            {
                id: uuidv4(),
                name: 'тренировка_по_жиму.jpg',
                url: '/images/projects/project_2.jpg',
                mimeType: 'image/png',
                size: 1024 * 1024 * 3
            },
            {
                id: uuidv4(),
                name: 'архив_статей.zip',
                url: '#',
                mimeType: 'application/zip',
                size: 1024 * 1024 * 25
            },
            {
                id: uuidv4(),
                name: 'тренировка_амбала.jpg',
                url: '/images/projects/project_1.jpg',
                mimeType: 'image/png',
                size: 1024 * 1024 * 2
            }
        ],
        activities: [
            {
                id: uuidv4(),
                subject: 'Вася Пупкин',
                subject_type: 'user',
                action_type: 'join_team',
                action_desc: 'Присоединился к проекту',
                created_at: moment().subtract(2, 'days')
            },
            {
                id: uuidv4(),
                subject: 'Автор проекта',
                subject_type: 'user',
                action_type: 'upload_file',
                action_desc: 'Загрузил новый файл',
                created_at: moment().subtract(23, 'minutes')
            },
            {
                id: uuidv4(),
                subject: 'Проект',
                subject_type: 'project',
                action_type: 'contest_created',
                action_desc: 'создан',
                created_at: moment().subtract(4, 'days')
            }
        ],
        subscribers: [
            {
                id: uuidv4(),
                name: 'Николай Станазалол',
                avatar: '/images/avatars/avatar_6.png',
                cover: '/images/covers/cover_2.jpg',
                common_connections: 17,
                labels: [
                    '-5кг',
                    'Лучшая бицепс недели'
                ]
            }
        ],
        deadline: moment().add(7, 'days'),
        updated_at: moment().subtract(23, 'minutes')
    },
});

mock.onGet(`/api/?project=2`).reply(200, {
    project: {
        tasks: {
            diet: {
                products: [
                    {
                        id: uuidv4(),
                        name: 'Рис',
                        surname: 'Бурый',
                        avatar: 'https://artdvorec.ru/wp-content/uploads/2020/09/Screenshot_8-870x400.jpg',
                        proteins: '7.8',
                        fats: '2.2',
                        carbohydrates: '76.7',
                        weight: '300',
                        calorie: '343',
                        importance: 5,
                    },
                    {
                        id: uuidv4(),
                        name: 'Грудка',
                        surname: 'Куринная',
                        avatar: 'https://5armia.ru/pic/40e012fd7ea0045d0338394fe244bc5f.jpg',
                        proteins: '23.6',
                        fats: '1.9',
                        carbohydrates: '0.4',
                        weight: '500',
                        calorie: '113',
                        importance: 5,
                    },
                    {
                        id: uuidv4(),
                        name: 'Морковь',
                        surname: '',
                        avatar: 'https://e0.edimdoma.ru/data/ingredients/0000/1043/1043-ed4_wide.jpg?1487748623',
                        proteins: '7.8',
                        fats: '2.2',
                        carbohydrates: '76.7',
                        weight: '100',
                        calorie: '41',
                        importance: 2,
                    },
                    {
                        id: uuidv4(),
                        name: 'Томаты',
                        surname: 'Черри',
                        avatar: 'https://domoidostavim.ru/images/static/products/7f6e5010-e197-4d77-b960-b37be21f07e8.jpg',
                        proteins: '1',
                        fats: '2',
                        carbohydrates: '15',
                        weight: '4',
                        calorie: '14',
                        importance: 2,
                    },
                    {
                        id: uuidv4(),
                        name: 'Огурцы',
                        surname: 'Белошипные',
                        avatar: 'https://foodcity.ru/storage/products/October2018/eP9jt5L6V510QjjT4a1B.jpg',
                        proteins: '0.8',
                        fats: '0.1',
                        carbohydrates: '2.5',
                        weight: '100',
                        calorie: '19',
                        importance: 2,
                    },
                    {
                        id: uuidv4(),
                        name: 'Спаржа',
                        surname: 'Короткая',
                        avatar: 'data:image/jpeg;base64,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',
                        proteins: '1.9',
                        fats: '0.1',
                        carbohydrates: '3.1',
                        weight: '300',
                        calorie: '94',
                        importance: 3,
                    },
                    {
                        id: uuidv4(),
                        name: 'Морс',
                        surname: 'Ягодный',
                        avatar: 'https://lh3.googleusercontent.com/proxy/dp2v-CYeFLF-Fj1b16_9KyOYqz7owvOYI9kiJ8Ipq57DP8ciwr4c3o6bO5DQXaEBBHnWAA-3yGBWiDJSRQvs0rBo58a0UpwMIjuTN7J6ep_-E4G-HPCFOH_zSgpyyr8J6DQ',
                        proteins: '0',
                        fats: '0',
                        carbohydrates: '13',
                        weight: '300',
                        calorie: '4',
                        importance: 1,
                    },
                    {
                        id: uuidv4(),
                        name: 'Яйцо',
                        surname: 'Оранжевое',
                        avatar: 'https://icdn.lenta.ru/images/2019/01/14/10/20190114105505115/detail_2d369946fd4c8521a559ed5a0eba64ba.png',
                        proteins: '12.7',
                        fats: '11.5',
                        carbohydrates: '0.7',
                        weight: '500',
                        calorie: '71',
                        importance: 5,
                    },
                    {
                        id: uuidv4(),
                        name: 'Творог',
                        surname: '5%',
                        avatar: 'https://calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-11.jpg',
                        proteins: '15',
                        fats: '18',
                        carbohydrates: '2.8',
                        weight: '100',
                        calorie: '41',
                        importance: 4,
                    },
                ],
                pfc: [
                    {
                        id: uuidv4(),
                        label: 'Белки',
                        value: 35,
                        color: colors.indigo[200]
                    },
                    {
                        id: uuidv4(),
                        label: 'Жиры',
                        value: 15,
                        color: colors.yellow[200]
                    },
                    {
                        id: uuidv4(),
                        label: 'Углеводы',
                        value: 40,
                        color: colors.red[200]
                    }
                ]
            },
        },
        title: 'Диета Дениса Семенихина',
        id: 2,
        author: {
            name: 'Денис Семинихин',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/34/%D0%94%D0%B5%D0%BD%D0%B8%D1%81_%D0%A1%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%D1%85%D0%B8%D0%BD.jpg',
            bio: 'Российский телеведущий, видеоблогер, работающий в направлении фитнеса, автор двух книг о фитнесе и одной о философии (социальное исследование). Наиболее известен благодаря реалити-шоу «Взвешенные люди» на телеканале СТС и популярным видеоблогам в YouTube о тренировках и питании.'
        },
        brief: `
#### КАК ПИТАТЬСЯ ПРАВИЛЬНО: 8 СОВЕТОВ ОТ ДЕНИСА СЕМЕНИХИНА

Мы попросили Дениса Семенихина — соавтора программ «Рацион. Fitness» и «Королевский рацион», видеоблогера, фитнес-эксперта и телеведущего — рассказать базовые принципы, на которые вы должны опираться, планируя своё ежедневное меню.

#### 1. Не забывайте про углеводы
Базовый источник энергии — это углеводы, они хранятся в мышцах и клетках печени в виде гликогена. В экстренных ситуациях при нехватке углеводов организм начинает использовать жировую ткань для производства энергии. Сбалансированный рацион предполагает преобладание сложных углеводов над простыми в пропорции 70/30. Но это не значит, что простые углеводы нужно полностью исключить, напротив — они дают организму быструю энергию и часто идут в тандеме со сложными углеводами. Так, в овсяную или манную кашу добавляют сухофрукты, а на утренний тост намазывают джем.

#### 2. Чередуйте белковые дни с углеводными
Рацион, состоящий исключительно из белковых продуктов, может существенно замедлить обмен веществ. Стоит ли говорить, что эффективность такого питания равна нулю. Чтобы своевременно пополнять запасы гликогена в мышцах и не дать метаболизму замедлиться, периодически устраивайте так называемые углеводные дни. Этот трюк позволит организму адаптироваться к небольшому количеству углеводов. Чередуйте белковые дни с углеводными, чтобы нормализовать и ускорить обменные процессы и отдохнуть от жёстких ограничений.

#### 3. Включите в свой рацион достаточное количество жиров
Жиры, несмотря на высокую калорийность, жизненно необходимы. Но чтобы избежать набора лишнего веса, важно, во-первых, ограничивать количество жиров, а во-вторых, отдавать предпочтение только полезным. Растительные жиры и те, что содержатся в рыбе, богаты омега-3 и омега-6 жирными кислотами, которые необходимы для здоровья человека. Общее количество жиров в сутки должно находиться в пределах 0,5—1 грамм на один килограмм массы тела.

#### 4. Питайтесь после тренировок правильно
После тренировок не забывайте про всем известное «углеводно-белковое окно» — момент, когда организм особенно восприимчив к любым питательным веществам. Лучше всего поесть через полчаса после окончания физических нагрузок. А если речь идёт о вечерней тренировке, важно помнить о сохранении дефицита энергии. Так, если вы сожгли 400—500 калорий (это в среднем один час активной силовой работы), то вы можете себе позволить съесть блюдо, содержащее максимум 25 граммов углеводов (100 калорий), 30 граммов белка (120 калорий) и несколько граммов жира. Общая калорийность не должна превышать 250 калорий. Я стараюсь в принципе исключать углеводы во время вечернего приёма пищи.

#### 5. Не переживайте из-за срывов
Если вы не сдержались и всё-таки съели лишний кусок торта, то ни в коем случае не казните себя и не сходите с ума. Отнеситесь к этому философски — просто осознайте, что вы это сделали. Осознали? Тогда спокойно отправляйтесь на лестницу и начинайте ходить пешком — сначала вверх, а потом вниз. Делайте это с удовольствием! Вы ведь знали, что так оно и будет, всё в ваших руках.  30—60 минут подъёма по лестнице смогут компенсировать небольшой десерт. «Цена» среднего куска торта — минимум 50 этажей.

#### 6. Уменьшите размер порций
Постарайтесь отказаться от объёмных порций. При любых обстоятельствах лучше съедать умеренное количество еды — общая калорийность одного приёма пищи не должна превышать 500 калорий.

#### 7. Разделите свой суточный рацион на 5-6 приёмов пищи
В день у вас должно быть примерно пять или шесть приёмов пищи с одинаковой калорийностью. При этом старайтесь к концу дня сводить количество углеводов к минимуму — в идеале ужин уже должен быть безуглеводным.

#### 8. Возьмите под контроль сахар
Избегайте напитков и блюд с большим количеством простых углеводов и с высоким гликемическим индексом. Проще говоря, максимально сократите сладкое. Разбавляйте водой покупные соки, не кладите сахар в кофе или чай и не налегайте на сладкие фрукты, такие как виноград и сухофрукты.

Теперь вы знаете все о «Королевском рационе»
`,
        price: '3',
        currency: 'чел',
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
        members: [
            {
                id: uuidv4(),
                name: 'Екатерина Коперник',
                avatar: '/images/avatars/avatar_2.png',
                bio: 'Кочушка'
            },
            {
                id: uuidv4(),
                name: 'Чао Мао',
                avatar: '/images/avatars/avatar_3.png',
                bio: 'Тренер, стаж 10 лет'
            },
            {
                id: uuidv4(),
                name: 'Анна Кайцер',
                avatar: '/images/avatars/avatar_5.png',
                bio: 'Фитнес-модель'
            }
        ],
        files: [
            {
                id: uuidv4(),
                name: 'диета.jpg',
                url: '/images/projects/project_2.jpg',
                mimeType: 'image/png',
                size: 1024 * 1024 * 3
            },
            {
                id: uuidv4(),
                name: 'книга_с_рецептом.zip',
                url: '#',
                mimeType: 'application/zip',
                size: 1024 * 1024 * 25
            },
            {
                id: uuidv4(),
                name: 'пример_диеты.jpg',
                url: '/images/projects/project_1.jpg',
                mimeType: 'image/png',
                size: 1024 * 1024 * 2
            }
        ],
        activities: [
            {
                id: uuidv4(),
                subject: 'Автор проекта',
                subject_type: 'user',
                action_type: 'upload_file',
                action_desc: 'Загрузил новый файл',
                created_at: moment().subtract(23, 'minutes')
            },
            {
                id: uuidv4(),
                subject: 'Адриан Стефанченко',
                subject_type: 'user',
                action_type: 'join_team',
                action_desc: 'Присоединился к проекту',
                created_at: moment().subtract(2, 'hours')
            },
            {
                id: uuidv4(),
                subject: 'Санек',
                subject_type: 'user',
                action_type: 'join_team',
                action_desc: 'Присоединился к проекту',
                created_at: moment().subtract(9, 'hours')
            },
            {
                id: uuidv4(),
                subject: 'Колян Коликов',
                subject_type: 'user',
                action_type: 'join_team',
                action_desc: 'Присоединился к проекту',
                created_at: moment().subtract(2, 'days')
            },
            {
                id: uuidv4(),
                subject: 'Проект',
                subject_type: 'project',
                action_type: 'contest_created',
                action_desc: 'создан',
                created_at: moment().subtract(4, 'days')
            }
        ],
        subscribers: [
            {
                id: uuidv4(),
                name: 'Катерина Танкова',
                avatar: '/images/avatars/avatar_2.png',
                cover: '/images/covers/cover_1.jpg',
                common_connections: 12,
                labels: [
                    '-10кг',
                    '-20кг',
                    '-30кг',
                    'Лучшая попа недели'
                ]
            },
        ],
        deadline: moment().add(7, 'days'),
        updated_at: moment().subtract(23, 'minutes')
    },
});