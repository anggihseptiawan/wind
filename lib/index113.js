function n(r) {
  return function(t) {
    return r === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : r ? r.startsWith("data-") && !r.includes("%s") ? `[${r}="${t}"] &` : r === "class" ? `.${t} &` : r === "data" ? `[data-${t}] &` : `${r.replace("%s", t)} &` : "&";
  };
}
export {
  n as createGetColorSchemeSelector
};
