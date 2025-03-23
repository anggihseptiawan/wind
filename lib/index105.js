import e from "./index11.js";
const r = process.env.NODE_ENV !== "production" ? e.oneOfType([e.number, e.string, e.object, e.array]) : {};
export {
  r as default
};
