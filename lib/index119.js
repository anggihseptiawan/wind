function c(e) {
  for (var f = 0, x, a = 0, d = e.length; d >= 4; ++a, d -= 4)
    x = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, x = /* Math.imul(k, m): */
    (x & 65535) * 1540483477 + ((x >>> 16) * 59797 << 16), x ^= /* k >>> r: */
    x >>> 24, f = /* Math.imul(k, m): */
    (x & 65535) * 1540483477 + ((x >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (f & 65535) * 1540483477 + ((f >>> 16) * 59797 << 16);
  switch (d) {
    case 3:
      f ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      f ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      f ^= e.charCodeAt(a) & 255, f = /* Math.imul(h, m): */
      (f & 65535) * 1540483477 + ((f >>> 16) * 59797 << 16);
  }
  return f ^= f >>> 13, f = /* Math.imul(h, m): */
  (f & 65535) * 1540483477 + ((f >>> 16) * 59797 << 16), ((f ^ f >>> 15) >>> 0).toString(36);
}
export {
  c as default
};
