import cpt from './src/index.vue'

// eslint-disable-next-line no-unused-vars
cpt.install = function (Vue, options) {
  // Register component
  Vue.component(cpt.name, cpt)
  // Add extra function
  // Read document to get more details.
  // https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6
}

export default cpt
