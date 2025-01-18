import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'woodsmoke': {
                    '100': '#e6e6e6',
                    '200': '#cccccc',
                    '300': '#b3b3b3',
                    '400': '#999999',
                    '500': '#808080',
                    '600': '#666666',
                    '700': '#4d4d4d',
                    '800': '#333333',
                    '900': '#242424',
                    '950': '#0f0f0f',
                },
                'vue': '#42B883',
            },
        },
    },
}
