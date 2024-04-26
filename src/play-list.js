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

          .back-button {
            position: relative;
            right: 350px;
            top: 200px;
          }

          .forward-button {
            position: relative;
            left: 360px;
            bottom: 180px;
          }

          .num-indicater {
            text-align: center;
            color: white;
          }

          .Description {
            font-family: Georgia, 'Times New Roman', Times, serif;
            text-align: center;
            color: white;
          }

          .close-button {
            position: relative;
            bottom: 500px;
            left: 1100px;
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
            <p class="num-indicater">${this.currentIndex + 1} of ${this.mediaImages.length}</p>
            <div class="image-wrapper">
                <button class="back-button" @click=${this.leftClick}><</button>
                ${this.currentImage}
                <button class="forward-button" @click=${this.rightClick}>></button>
            </div>
            <div class="text-wrapper">
                <p class="Description">${this.description}</p>
            </div>
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