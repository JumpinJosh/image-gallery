import { html, css} from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class PlayList extends DDD {
    static get tag() {
      return 'play-list';
    }

    constructor() {
        super();
        this.visible = false;
        this.Image = "https://th.bing.com/th/id/OIP.PDlm3trgAkY6pGPcbRt4SQHaEK?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        this.caption = "Image of funny dog."
        this.description = "This is an image of a dog making a funny face."
    }

    static get styles() {
        return [
          super.styles,
          css`
          :host {
            display: none;
          }

          :host([visible]) {
            display: flex;
            z-index: 100000;
          }
          `
        ];
    }

    closeButton() {
        this.visible = false;
    }

    updateStatus() {
        window.addEventListener('dialog-opened', (e) => {
            this.visible = true;
        });
    }

    render() {
        return (!this.visible) ? `` : html`
        <div class="transparent-background">
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
            <button class="close-button" @click=${this.closeButton}></button>
        </div>
        `
    }

    static get properties() {
        return {
            visible: { type: Boolean, reflect: true},
            Image: { type: String },
            caption: { type: String },
            description: { type: String },
        }
    }
}
globalThis.customElements.define(PlayList.tag, PlayList);