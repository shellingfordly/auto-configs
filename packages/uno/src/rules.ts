import type { Rule, UserConfig } from "unocss";
import { toEscapedSelector } from "unocss";

const hoverActionChildStyle: Rule = [
  /hover>([\.|#]?\w+):(.+)/,
  async ([_, child, css], { rawSelector, generator }) => {
    const selector = toEscapedSelector(rawSelector);
    const classList = css.split(",");
    const style = await generator.generate(classList);
    let cssStr = style.getLayer("default");

    classList.forEach((name) => {
      cssStr = cssStr?.replace(`.${name}{`, "").replace(/}\n?/g, "");
    });

    return `${selector}:hover ${child} {${cssStr?.replace("\n", "")}}`;
  },
];

export function handleRules(config: UserConfig) {
  let rules: Rule[] = [hoverActionChildStyle];

  if (config.rules) {
    rules = rules.concat(config.rules);
  }

  return rules;
}
