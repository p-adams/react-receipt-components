import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/* 
Base receipt component that displays item, quantity<optional>, price line item, tax<optional>, subtotal, and total
*/

@customElement("base-receipt")
export class BaseReceipt extends LitElement {
  static styles = css`
    .Base-receipt {
      width: 400px;
      outline: 1px solid gray;
    }
    .Wrapper {
      padding: 4px;
      margin-left: 10px;
      margin-right: 10px;
    }
    .Receipt-line-item {
      display: grid;
      grid-template-columns: 1fr 1fr;
      line-height: 2em;
    }
    .Right-align {
      text-align: right;
    }
    .Divider {
      border: 1px dashed gray;
      margin: 18px 0 10px;
    }
  `;
  @property()
  data: BaseReceiptData | null = null;

  @property()
  heading: String = "Bedrock Supermarket";

  private lineItemEl(t: TemplateResult): TemplateResult {
    return html`<div class="Receipt-line-item">${t}</div>`;
  }

  receiptLineItem(lineItem: ReceiptLineItem) {
    return this.lineItemEl(html`<div>${lineItem.description}</div>
      <div class="Right-align">${lineItem.price}</div>`);
  }

  totalLineItem(total: number | undefined) {
    return this.lineItemEl(html` <div>Total</div>
      <div class="Right-align">${total}</div>`);
  }

  total() {
    return this.data?.lineItems?.reduce((count, item) => {
      return count + item.price;
    }, 0);
  }

  render() {
    if (!this.data?.lineItems?.length) {
      return html`<div>no data</div>`;
    }

    return html`<article class="Base-receipt">
      <section class="Wrapper">
        <h3>${this.data?.heading}</h3>
        ${this.data?.lineItems?.map((item) => {
          return this.receiptLineItem(item);
        })}
        <div class="Divider"></div>
        ${this.totalLineItem(this.total())}
      </section>
    </article>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "base-receipt": BaseReceipt;
  }
}
