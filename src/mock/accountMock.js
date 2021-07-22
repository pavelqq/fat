import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import {colors} from '@material-ui/core';

import mock from '../utils/mock';

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
            title: 'Тренировка спины',
            deadline: moment().add('1', 'hour').format('LT'),
            done: false
        },
        {
            id: uuidv4(),
            title: 'Выпить витамины',
            deadline: moment(),
            done: false
        },
        {
            id: uuidv4(),
            title:
                'Тренировка груди',
            deadline: moment().add(0, 'days'),
            done: false
        },
        {
            id: uuidv4(),
            title: 'Тренировка ног',
            deadline: moment().add(1, 'days'),
            done: false
        },
        {
            id: uuidv4(),
            title: 'Консультация с тренером',
            deadline: moment().add(5, 'days'),
            done: false
        },
        {
            id: uuidv4(),
            title:
                'Сделать замеры',
            deadline: moment().add(20, 'days'),
            done: false
        }
    ]
});

mock.onGet('/api/account/settings').reply(200, {
    settings: {}
});
