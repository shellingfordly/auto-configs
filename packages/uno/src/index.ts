import {
  type UserConfig,
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";

import { handleShortcuts } from "./shortcuts"
import { handleVariants } from "./variants";

function defineUnocssConfig(config: UserConfig) {
  return defineConfig({
    ...config,

    shortcuts: handleShortcuts(config),
    presets: [
      presetUno(),
      presetIcons({
        extraProperties: {
          display: "inline-block",
          height: "1.2em",
          width: "1.2em",
          "vertical-align": "text-bottom",
        },
      }),
      presetAttributify(),
      presetWebFonts({
        fonts: {
          sans: "Inter:400,600,800",
          mono: "DM Mono:400,600",
        },
      }),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
  })
};

export { defineUnocssConfig };
export default defineUnocssConfig;