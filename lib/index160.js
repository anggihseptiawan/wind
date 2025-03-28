const t = (a) => [...[...Array(25)].map((p, o) => `--${a ? `${a}-` : ""}overlays-${o}`), `--${a ? `${a}-` : ""}palette-AppBar-darkBg`, `--${a ? `${a}-` : ""}palette-AppBar-darkColor`];
export {
  t as default
};
