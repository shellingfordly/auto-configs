import { UserShortcuts, UserConfig } from "@unocss/core";

const flex = {
  fc: "flex items-center",
  fcc: "flex items-center justify-center",
  fsc: "flex items-start justify-center",
  "flex-col-wrap": "flex flex-col flex-wrap",
  fb: "flex justify-between",
  fsb: "flex items-start justify-between",
  fcb: "flex items-center justify-between",
  feb: "flex items-end justify-between",
  fca: "flex items-center justify-around",
};

const hover = [
  ["hp", "hover:cursor-pointer"],
  ["hl", "hover:underline"],
  [
    /h(c|color|bg)-\[(#[0-9a-zA-Z]+)\]|\bh(c|color|bg)-([a-zA-Z]+)\b/,
    ([_, t1, c1, t2, c2]: string[]) => {
      return `hover:${t1 || t2}-${c1 || c2}`;
    },
  ],
];

const other = {
  cp: "cursor-pointer",
};

export function handleShortcuts(config: UserConfig) {
  let shortcuts: any[] = [flex, ...hover, other];

  if (config.shortcuts instanceof Array) {
    shortcuts = [...shortcuts, ...config.shortcuts];
  }

  if (config.shortcuts instanceof Object) {
    shortcuts.push(config.shortcuts);
  }

  return shortcuts as UserShortcuts;
}
