import {v4 from uuidv4} from 'uuid';
import moment from 'moment';

import mock from '../utils/mock';

mock.onGet('/api/management/customers/1/summary').reply(200, {
    summary: {
        name: 'Ekaterina Tankova',
        email: 'ekaterina@devias.io',
        phone: '+55 748 327 439',
        state: 'Alabama',
        country: 'United States',
        zipCode: '240355',
        address1: 'Street John Wick, no. 7',
        address2: 'House #25',
        iban: '4142 **** **** **** ****',
        autoCC: false,
        verified: true,
        currency: '$',
        invoices: [
            {
                id: uuidv4(),
                type: 'paid',
                value: 10.0
            },
            {
                id: uuidv4(),
                type: 'paid',
                value: 15.0
            },
            {
                id: uuidv4(),
                type: 'due',
                value: 5
            },
            {
                id: uuidv4(),
                type: 'income',
                value: 10.0
            }
        ],
        vat: 19,
        balance: 0,
        emails: [
            {
                id: uuidv4(),
                description: 'Order confirmation',
                created_at: moment()
                    .subtract(3, 'days')
                    .subtract(5, 'hours')
                    .subtract(34, 'minutes')
            },
            {
                id: uuidv4(),
                description: 'Order confirmation',
                created_at: moment()
                    .subtract(4, 'days')
                    .subtract(11, 'hours')
                    .subtract(49, 'minutes')
            }
        ]
    }
});

mock.onGet('/api/management/customers/1/invoices').reply(200, {
    invoices: [
        {
            id: uuidv4(),
            date: moment(),
            description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
            paymentMethod: 'Credit Card',
            value: '5.25',
            currency: '$',
            status: 'paid'
        },
        {
            id: uuidv4(),
            date: moment(),
            description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
            paymentMethod: 'Credit Card',
            value: '5.25',
            currency: '$',
            status: 'paid'
        }
    ]
});

mock.onGet('/api/management/customers/1/logs').reply(200, {
    logs: [
        {
            id: uuidv4(),
            status: 200,
            method: 'POST',
            route: '/api/purchase',
            desc: 'Purchase',
            IP: '84.234.243.42',
            created_at: moment()
                .subtract(2, 'days')
                .subtract(2, 'minutes')
                .subtract(56, 'seconds')
        },
        {
            id: uuidv4(),
            status: 522,
            error: 'Invalid credit card',
            method: 'POST',
            route: '/api/purchase',
            desc: 'Purchase',
            IP: '84.234.243.42',
            created_at: moment()
                .subtract(2, 'days')
                .subtract(2, 'minutes')
                .subtract(56, 'seconds')
        },
        {
            id: uuidv4(),
            status: 200,
            method: 'DELETE',
            route: '/api/products/d65654e/remove',
            desc: 'Cart remove',
            IP: '84.234.243.42',
            created_at: moment()
                .subtract(2, 'days')
                .subtract(8, 'minutes')
                .subtract(23, 'seconds')
        },
        {
            id: uuidv4(),
            status: 200,
            method: 'GET',
            route: '/api/products/d65654e/add',
            desc: 'Cart add',
            IP: '84.234.243.42',
            created_at: moment()
                .subtract(2, 'days')
                .subtract(20, 'minutes')
                .subtract(54, 'seconds')
        },
        {
            id: uuidv4(),
            status: 200,
            method: 'GET',
            route: '/api/products/c85727f/add',
            desc: 'Cart add',
            IP: '84.234.243.42',
            created_at: moment()
                .subtract(2, 'days')
                .subtract(34, 'minutes')
                .subtract(16, 'seconds')
        },
        {
            id: uuidv4(),
            status: 200,
            method: 'GET',
            route: '/api/products/c85727f',
            desc: 'View product',
            IP: '84.234.243.42',
            created_at: moment()
                .subtract(2, 'days')
                .subtract(54, 'minutes')
                .subtract(30, 'seconds')
        },
        {
            id: uuidv4(),
            status: 200,
            method: 'GET',
            route: '/api/products',
            desc: 'Get products',
            IP: '84.234.243.42',
            created_at: moment()
                .subtract(2, 'days')
                .subtract(56, 'minutes')
                .subtract(40, 'seconds')
        },
        {
            id: uuidv4(),
            status: 200,
            method: 'POST',
            route: '/api/login',
            desc: 'Login',
            IP: '84.234.243.42',
            created_at: moment()
                .subtract(2, 'days')
                .subtract(57, 'minutes')
                .subtract(5, 'seconds')
        }
    ]
});
