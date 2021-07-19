// import MoonAlgorithm from "../libs/MoonAlgorithm";

export default class PopoverWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `<div class="popover-widget">
             <button type="button" class="btn" data-title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
           </div>`;
  }

  static get widgetSelector() {
    return ".popover-widget";
  }

  static get buttonSelector() {
    return ".btn";
  }

  static get popoverSelector() {
    return ".popover";
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const widget = this.parentEl.querySelector(this.constructor.widgetSelector);
    widget.addEventListener("click", (evt) => this.onClick(evt));
  }

  onClick() {
    const popoverEl = this.parentEl.querySelector(
      this.constructor.popoverSelector
    );
    if (popoverEl) {
      popoverEl.remove();
    } else {
      this.createPopover();
    }
  }

  createPopover() {
    const widget = this.parentEl.querySelector(this.constructor.widgetSelector);
    const button = this.parentEl.querySelector(this.constructor.buttonSelector);
    const popover = document.createElement("div");
    popover.className = "popover";
    popover.innerHTML = ` <div class="popover-title"> ${button.dataset.title}</div>
                          <div class="popover-body">${button.dataset.content}</div>`;
    widget.appendChild(popover);
    const { top, left } = button.getBoundingClientRect();
    popover.style.top = `${window.scrollY + top - popover.offsetHeight - 5}px`;
    popover.style.left = `${
      window.scrollX + left - popover.offsetWidth / 2 + button.offsetWidth / 2
    }px`;
  }
}
