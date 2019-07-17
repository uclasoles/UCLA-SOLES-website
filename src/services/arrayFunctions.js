
export const anyBlank = (strings) => {
  return strings.filter(val => val === "").length > 0
};