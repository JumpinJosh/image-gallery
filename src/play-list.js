import { html, css} from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class PlayList extends DDD {
    static get tag() {
      return 'play-list';
    }

    constructor() {
        super();
        this.visible = false;
        this.currentImage;
        this.mediaImages;
        this.currentIndex;
        this.caption = "Image of funny dog."
        this.description = "This is an image of a dog making a funny face."
        document.body.addEventListener("dialog-opened", (e) => this.updateStatus(e));
    }

    static get styles() {
        return [
          super.styles,
          css`
          .transparent-background {
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0px;
            left: 0px;
            background-color: rgba(0,0,0,.5);
          }

          .image-wrapper{
            display: grid;
            place-items: center;
          }

          .num-indicater {
            text-align: center;
            color: white;
          }

          .Description {
            text-align: center;
            color: white;
          }

          .close-button {
            top: 100px;
            right: 100px;
          }
          
          media-image {
            pointer-events: none;
          }
          `
        ];
    }

    closeButton() {
        this.visible = false;
    }

    updateStatus(e) {
        if (this.visible == true) {
            this.visible = false;
        }
        else {
            this.getCurrentImage(e);
            this.visible = true;
        }
        this.requestUpdate();
    }

    getImages(e) {
        this.mediaImages = document.querySelectorAll("media-image");
        var index = 0
        this.mediaImages.forEach(element => {
            if (element == e.target) {
                this.currentIndex = index;
            }
            index = index + 1;
        });
    }

    getCurrentImage(e) {
        this.getImages(e);
        this.currentImage = this.mediaImages[this.currentIndex].cloneNode(true);
    }

    leftClick() {
        if (this.mediaImages[this.currentIndex - 1]) {
            this.currentIndex = this.currentIndex - 1;
            this.currentImage = this.mediaImages[this.currentIndex].cloneNode(true);
            this.requestUpdate();
        }
    }

    rightClick() {
        if (this.mediaImages[this.currentIndex + 1]) {
            this.currentIndex = this.currentIndex + 1;
            this.currentImage = this.mediaImages[this.currentIndex].cloneNode(true);
            this.requestUpdate();
        }
    }

    render() {
        return (!this.visible) ? `` : html`
        <div class="transparent-background">
            <button class="back-button" @click=${this.leftClick}><</button>
            <p class="num-indicater">${this.currentIndex + 1} of ${this.mediaImages.length}</p>
            <div class="image-wrapper">
                ${this.currentImage}
            </div>
            <div class="text-wrapper">
                <p class="Description">${this.description}</p>
            </div>
            <button class="forward-button" @click=${this.rightClick}>></button>
            <button class="close-button" @click=${this.closeButton}>X</button>
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

globalThis.PlayList = globalThis.PlayList || {};
globalThis.PlayList.requestAvailability = () => {
  if (!window.PlayList.instance) {
    globalThis.PlayList.instance = document.createElement("play-list");
    document.body.appendChild(globalThis.PlayList.instance);
  }
  return globalThis.PlayList.instance;
};

export const PlayListStore = globalThis.PlayList.requestAvailability();