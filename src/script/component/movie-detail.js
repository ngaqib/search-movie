import './modal-detail.js';
 
class MovieDetail extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set detail(detail) {
        this._detail = detail;

        if (this._detail == null) {
            this.renderEmpty()
        } else {
            this.render()
        }
    }

    set clickEvent(event) {
        this._clickEvent = event;
    }

    renderEmpty () {
        this.shadowDOM.innerHTML = "";
    }
 
    render() {
        this.shadowDOM.innerHTML = "";
        const movieDetailElement = document.createElement("modal-detail");
        movieDetailElement.detail = this._detail;
        this.shadowDOM.appendChild(movieDetailElement);
        movieDetailElement.closeElement.addEventListener("click", () => {
            this._clickEvent()
        });
    }
}
 
customElements.define("movie-detail", MovieDetail);