module.exports ={
    root: true,
    env: {
      node: true,
    },
    rules: {
      // override/add rules settings here, such as:
      'vue/no-unused-vars': 'error'
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'plugin:vue/essential',
      'eslint:recommended',
    ],
    plugins: ['vue'],
}