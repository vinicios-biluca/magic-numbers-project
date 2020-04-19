import default_module from './default_module'

const vuex = {
  default_module
}

const keys = Object.keys(vuex)
const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module }), {})

export default { modules }
