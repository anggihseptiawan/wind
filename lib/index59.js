function s(r, ...o) {
  const e = new URL(`https://mui.com/production-error/?code=${r}`);
  return o.forEach((a) => e.searchParams.append("args[]", a)), `Minified MUI error #${r}; visit ${e} for the full message.`;
}
export {
  s as default
};
