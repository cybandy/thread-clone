import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'azure-radiance': {
          '50': '#eef9ff',
          '100': '#d8f0ff',
          '200': '#bae5ff',
          '300': '#8ad6ff',
          '400': '#53beff',
          '500': '#2b9eff',
          '600': '#1d85fc',
          '700': '#0d68e8',
          '800': '#1253bb',
          '900': '#154993',
          '950': '#122d59',
        },
        // 'neutral': {
        //   '50': '#f6f6f6',
        //   '100': '#e7e7e7',
        //   '200': '#d1d1d1',
        //   '300': '#b0b0b0',
        //   '400': '#888888',
        //   '500': '#6d6d6d',
        //   '600': '#5d5d5d',
        //   '700': '#4f4f4f',
        //   '800': '#454545',
        //   '900': '#3d3d3d',
        //   '950': '#101010',
        // },


      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        postImg: 'auto 1080 / 720'
      },
      fontSize: {
        sm: '15px'
      }
    },

  }
}
