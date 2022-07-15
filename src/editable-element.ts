import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators";

@customElement("editable-element")
export class EditableReceipt extends LitElement {
  static styles = css`
    .Edit-mode {
      margin: 4px 0 4px 0;
      padding: 4px 0 4px 0;
      box-shadow: 0px 0px 2px 2px #1996fd;
    }
  `;

  @property()
  unsavedChanges: Boolean = false;

  @property()
  template!: TemplateResult;

  private edit(target: any) {
    // TODO: add ability to edit any target passed in
    this.unsavedChanges = !this.unsavedChanges;
  }

  private save(target?: any) {
    // TODO: commit change to target
    this.unsavedChanges = false;
  }
  private cancel(target?: any) {
    this.unsavedChanges = false;
  }
  render() {
    return html`<span
      class=${`"Editable-element" ${this.unsavedChanges ? "Edit-mode" : ""}`}
      >${this.template}</span
    >`;
  }
}
