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