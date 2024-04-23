import { html, css} from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class PlayList extends DDD {
    static get tag() {
      return 'play-list';
    }

    constructor() {
        super();
    }

    static get styles() {
        return [
          super.styles,
          css``
        ];
    }

    render() {
        return html`
        <dialog class="transparent-background">
            <button class="back-button"></button>
            <p class="num-indicater">1 of 10</p>
            <div class="image-wrapper">
                <img src="${this.Image}" alt="funny-dog.png">
            </div>
            <div class="text-wrapper">
                <p class="Caption">${this.caption}</p>
                <p class="Description">${this.description}</p>
            </div>
            <button class="forward-button"></button>
            <button class="close-button"></button>
        </dialog>
        `
    }

    static get properties() {
        return {

        }
    }
}
globalThis.customElements.define(MediaImage.tag, MediaImage);