import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
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
   * The name to say "Hello" to.
   */
  @property()
  name = "World";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html` <div>receipt component</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "receipt-component": ReceiptComponent;
  }
}
