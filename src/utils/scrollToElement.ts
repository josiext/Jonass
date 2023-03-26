export const scrollToElement = (id: string) => () => {
  const access = document.getElementById(id);
  access?.scrollIntoView({ behavior: "smooth" });
};
