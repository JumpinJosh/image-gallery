import { html, css, LitElement } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class MediaImage extends DDD {
    static get tag() {
      return 'media-image';
    }
    
    constructor() {
      super();
    }
    
    static get styles() {
      return [
        super.styles,
        css`
        .image-wrapper img {
          border: solid var(--ddd-border-md) var(--ddd-theme-default-limestoneGray);
          border-radius: 8px;
          transition: all .3s ease-in;
        }
        `
      ];
    }
    
    render() {
      return html`
        <div class="image-wrapper">
          <img src="https://th.bing.com/th/id/OIP.PDlm3trgAkY6pGPcbRt4SQHaEK?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="funny-dog.png">
        </div>
      `;
    }
    
    static get properties() {
      return {
          
      };
    }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);

/*export class PlayList extends LitElement {
  static get tag() {
      return 'play-list';
    }
  
    constructor() {
      super();
    }
  
    static get styles() {
      return [
          super.styles,
          css`
          
          `
      ];
    }
  
    render() {
      return html`
      
      `;
    }
  
    static get properties() {
      return {
        
      };
    }
}

globalThis.customElements.define(PlayList.tag, PlayList);*/