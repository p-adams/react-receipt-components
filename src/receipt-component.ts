import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./base-receipt";

const RECEIPT_DATA: ReceiptLineItems = [
  { description: "Frozen shrimp", price: 24.5 },
  { description: "Pizza", price: 44.77 },
  { description: "Pasta", price: 2.99 },
];

@customElement("receipt-component")
export class ReceiptComponent extends LitElement {
  static styles = css`
    .Receipt {
      padding: 10px;
    }
  `;

  render() {
    return html`
      <div class="Receipt">
        <header>
          <h2>Receipt Component</h2>
        </header>
        <main class="Main-content">
          <base-receipt .data=${RECEIPT_DATA}></base-receipt>
        </main>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "receipt-component": ReceiptComponent;
  }
}
