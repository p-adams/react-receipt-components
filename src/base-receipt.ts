import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

/* 
Base receipt component that displays item, quantity<optional>, price line item, tax<optional>, subtotal, and total
*/

@customElement("base-receipt")
export class BaseReceipt extends LitElement {
  static styles = css`
    .Base-receipt {
      outline: 1px solid gray;
    }
  `;
  @property()
  data: ReceiptLineItems = [];

  @property()
  heading: String = "Bedrock Supermarket";

  static receiptLineItem(lineItem: ReceiptLineItem) {
    return html`<div class="Receipt-line-item">${lineItem.description}</div>`;
  }

  total() {
    return this.data.reduce((count, item) => {
      return count + item.price;
    }, 0);
  }

  render() {
    if (!this.data?.length) {
      return html`<div>no data</div>`;
    }

    return html`<article class="Base-receipt">
      <section>
        <h3>${this.heading}</h3>
        <div>
          ${this.data.map((item) => {
            return BaseReceipt.receiptLineItem(item);
          })}
        </div>
        <div>${this.total()}</div>
      </section>
    </article>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "base-receipt": BaseReceipt;
  }
}
