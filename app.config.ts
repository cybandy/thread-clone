export default defineAppConfig({
    ui: {
        primary: 'azure-radiance',
        gray: 'neutral',
        icons: {
            dynamic: true
        },
        // container: {
        //     // constrained: 'max-w-[500px]',
        //     // padding: 'px-4'
        // },
        dropdown: {
            rounded: 'rounded-2xl',
            background: 'dark:bg-gray-900',
            width: 'min-w-60',
            item: {
                padding: 'px-3 py-3',
                active: 'dark:bg-gray-800 dark:text-white'
            },
            padding: 'p-2'
        },
        modal: {
            overlay: {
                background: 'dark:bg-gray-950/30'
            }
        },
        button: {
            icon: {
                size: {
                    sm: 'w-6 h-6'
                }
            }
        }

    }
})
