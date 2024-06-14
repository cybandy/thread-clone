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
            width: 'w-60',
            background: 'bg-white dark:bg-gray-950'
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
