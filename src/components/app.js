import PopoverWidget from "./Popover-widget/popover-widget";

document.addEventListener("DOMContentLoaded", () => {
  const perent = document.querySelector(".conteiner");
  const widget = new PopoverWidget(perent);
  widget.bindToDOM();
});
