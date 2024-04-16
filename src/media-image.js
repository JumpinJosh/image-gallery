import { html, css} from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class MediaImage extends DDD {
    static get tag() {
      return 'media-image';
    }
    
    constructor() {
      super();
      this.primary = "Green"
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
          visibility: hidden;
        }
        `
      ];
    }
    
    render() {
      return html`
      <div class="background">
        <div class="image-wrapper">
          <img src="https://th.bing.com/th/id/OIP.PDlm3trgAkY6pGPcbRt4SQHaEK?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="funny-dog.png">
        </div>
        <div class="text-wrapper">
          <p class="Caption">${this.caption}</p>
          <p class="Description">${this.description}</p>
        </div>
      </div>
      `;
    }
    
    static get properties() {
      return {
          primary: { String }
      };
    }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);