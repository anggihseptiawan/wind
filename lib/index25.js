import e from "./index57.js";
function o(r) {
  if (typeof r != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : e(7));
  return r.charAt(0).toUpperCase() + r.slice(1);
}
export {
  o as default
};
