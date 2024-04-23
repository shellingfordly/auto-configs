import { defineConfig, type UserConfig } from 'unocss'

function defineUnocssConfig(config: UserConfig) {
  return defineConfig({
    shortcuts: {
      "fc": "flex items-center justify-center"
    },


    ...config,
  })
}

export { defineUnocssConfig }
export default defineUnocssConfig;