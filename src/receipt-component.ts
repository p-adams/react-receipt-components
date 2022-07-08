import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./base-receipt";
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
          <base-receipt></base-receipt>
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
