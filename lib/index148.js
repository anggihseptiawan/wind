import n from "./index160.js";
const o = (f) => (e, i) => {
  const a = f.rootSelector || ":root", t = f.colorSchemeSelector;
  let r = t;
  if (t === "class" && (r = ".%s"), t === "data" && (r = "[data-%s]"), t != null && t.startsWith("data-") && !t.includes("%s") && (r = `[${t}="%s"]`), f.defaultColorScheme === e) {
    if (e === "dark") {
      const d = {};
      return n(f.cssVarPrefix).forEach((l) => {
        d[l] = i[l], delete i[l];
      }), r === "media" ? {
        [a]: i,
        "@media (prefers-color-scheme: dark)": {
          [a]: d
        }
      } : r ? {
        [r.replace("%s", e)]: d,
        [`${a}, ${r.replace("%s", e)}`]: i
      } : {
        [a]: {
          ...i,
          ...d
        }
      };
    }
    if (r && r !== "media")
      return `${a}, ${r.replace("%s", String(e))}`;
  } else if (e) {
    if (r === "media")
      return {
        [`@media (prefers-color-scheme: ${String(e)})`]: {
          [a]: i
        }
      };
    if (r)
      return r.replace("%s", String(e));
  }
  return a;
};
export {
  o as default
};
