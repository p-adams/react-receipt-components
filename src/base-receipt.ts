import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

/* 
Base receipt component that displays item, quantity<optional>, price line item, tax<optional>, subtotal, and total
*/

@customElement("base-receipt")
export class BaseReceipt extends LitElement {
  @property()
  data: ReceiptLineItems = [];

  @property()
  heading: String = "Bedrock Supermarket";

  render() {
    if (!this.data?.length) {
      return html`<div>no data</div>`;
    }

    return html`<article>
      <section>
        <h3>${this.heading}</h3>
        <div>
          ${this.data.map((item) => {
            return html`<div>${item.description}</div>`;
          })}
        </div>
      </section>
    </article>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "base-receipt": BaseReceipt;
  }
}
