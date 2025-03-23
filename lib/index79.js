function c(n = "") {
  function r(...e) {
    if (!e.length)
      return "";
    const t = e[0];
    return typeof t == "string" && !t.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${n ? `${n}-` : ""}${t}${r(...e.slice(1))})` : `, ${t}`;
  }
  return (e, ...t) => `var(--${n ? `${n}-` : ""}${e}${r(...t)})`;
}
export {
  c as default
};
