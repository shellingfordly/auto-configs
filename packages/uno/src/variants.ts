import type { UserConfig, Variant } from "unocss";

const hoverChild: Variant = {
  name: "parent-hover-child",
  match(matcher) {
    return matcher;
  },
};

export function handleVariants(config: UserConfig) {
  let variants: Variant[] = [hoverChild];

  if (config.variants) {
    variants = [...variants, ...config.variants];
  }

  return variants;
}
