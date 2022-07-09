import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./base-receipt";

const RECEIPT_DATA: LineItem[] = [
  { name: "Frozen shrimp", price: 24.5 },
  { name: "Pizza", price: 44.77 },
  { name: "Pasta", price: 2.99 },
];

@customElement("receipt-component")
export class ReceiptComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <div class="App">
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
