import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("base-receipt")
export class BaseReceipt extends LitElement {
  @property()
  data: LineItems = [];

  render() {
    if (!this.data.length) {
      return html`<div>no data</div>`;
    }
    return html`<article>base receipt</article>`;
  }
}
