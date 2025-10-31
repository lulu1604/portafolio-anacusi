// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { configure } from 'quasar/wrappers'

export default configure(() => ({
  htmlVariables: {
  title: 'Portafolio Ana Cusi',
  links: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap'
    }
  ]
  },

  css: ['app.scss'],

extras: [
  'roboto-font',
  'material-icons',
  'fontawesome-v6'
],

  framework: {
    config: {},
    plugins: []
  },

  devServer: {
    open: true
  }
}))
