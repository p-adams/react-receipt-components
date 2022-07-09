import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("receipt-line-item")
export class ReceiptLineItem extends LitElement {
  render() {
    return html`<div class="Receipt-line-item">line item</div>`;
  }
}
