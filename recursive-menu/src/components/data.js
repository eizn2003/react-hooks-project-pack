const menus = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'Profile',
        to: '/profile',
        children: [
            {
                label: 'Details',
                to: '/profile/details',
                children: [
                    {
                        label: 'Address',
                        to: '/profile/details/address',
                    },
                    {
                        label: 'Phone',
                        to: '/profile/details/phone',
                    },
                ]
            },

        ],
    },
    {
        label: 'Settings',
        to: '/settings',
        children: [
            {
                label: 'Account',
                to: '/settings/account',
            },
            {
                label: 'Privacy',
                to: '/settings/privacy',
            },
            {
                label: 'Notifications',
                to: '/settings/notifications',
            },
            {
                label: 'Login',
                to: '/settings/login',
            },
            {
                label: 'Register',
                to: '/settings/register',
            }
        ]
    },
];

export default menus;