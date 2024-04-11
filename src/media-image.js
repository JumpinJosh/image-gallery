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
          border: solid var(--ddd-border-sm) var(--ddd-theme-default-limestoneGray);
          border-radius: 8px;
          transition: all .3s ease-in;
        }
        `
      ];
    }
    
    render() {
      return html`
        <dialog>
          <div class="image-wrapper">
            <img src="https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?w=2560" alt="funny dog in crab costume.png">
          </div>
        </dialog>
      `;
    }
    
    static get properties() {
      return {
          
      };
    }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);

export class PlayList extends LitElement {
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

globalThis.customElements.define(PlayList.tag, PlayList);