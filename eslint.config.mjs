// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  
).overrideRules({
  '@typescript-eslint/no-unused-vars':'warn',
  '@typescript-eslint/no-explicit-any':'off'
})
