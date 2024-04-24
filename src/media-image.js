import { html, css} from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class MediaImage extends DDD {
    static get tag() {
      return 'media-image';
    }
    
    constructor() {
      super();
      this.primary = "Green"
      this.Image = "https://th.bing.com/th/id/OIP.PDlm3trgAkY6pGPcbRt4SQHaEK?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      this.caption = "Image of funny dog."
      this.description = "This is an image of a dog making a funny face."
    }
    
    static get styles() {
      return [
        super.styles,
        css`

        :host([primary="Green"]) {
          --background-color: var(--ddd-theme-default-opportunityGreen);
        }

        :host([primary="Red"]) {
          --background-color: var(--ddd-theme-default-original87Pink);
        }

        .image-wrapper img {
          border: solid var(--ddd-border-md) var(--ddd-theme-default-limestoneGray);
          border-radius: 8px;
        }

        .background:hover {
          transform: translate(8px, -8px);
          box-shadow: -8px 8px #000;
          transition: .5s;
        }

        .background {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: .15rem solid var(--border-color, var(--ddd-theme-default-coalygrey));
          border-radius: 8px;
          width: var(--width, 650px);
          height: var(--height, 350px);
          padding: 1%;
          background-color: var(--background-color);
        }

        .description {
          display: none;
        }
        `
      ];
    }

    // opens the dialog box for the gallery of images
    openDialog() {
      console.log("Image clicked");

      const event = new CustomEvent("dialog-opened", {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {
          opened: true,
        },
      });

      this.dispatchEvent(event);
    }
    
    render() {
      return html`
      <div class="background">
        <div class="image-wrapper" @click=${this.openDialog}>
          <img src="${this.Image}">
        </div>
        <div class="text-wrapper">
          <p class="Caption">${this.caption}</p>
        </div>
      </div>
      `;
    }
    
    static get properties() {
      return {
          primary: { String },
          Image: { String },
          caption: { String },
          description: { String },
      };
    }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);