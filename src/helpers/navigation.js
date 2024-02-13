export function scrollTo(id) {
  const div = document.querySelector(`#${id}`);
  div.scrollIntoView({ block: "center" });
}
