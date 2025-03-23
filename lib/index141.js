function i(n) {
  const e = {};
  return Object.entries(n).forEach((o) => {
    const [r, t] = o;
    typeof t == "object" && (e[r] = `${t.fontStyle ? `${t.fontStyle} ` : ""}${t.fontVariant ? `${t.fontVariant} ` : ""}${t.fontWeight ? `${t.fontWeight} ` : ""}${t.fontStretch ? `${t.fontStretch} ` : ""}${t.fontSize || ""}${t.lineHeight ? `/${t.lineHeight} ` : ""}${t.fontFamily || ""}`);
  }), e;
}
export {
  i as default
};
