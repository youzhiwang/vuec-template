import ExampleComponent from './ExampleComponent/index'

let components = [ExampleComponent]

const install = function (Vue, options) {
  components.map(component => {
    component.install(Vue, options)
  })
}

export default {
  install
}

export {
  ExampleComponent
}