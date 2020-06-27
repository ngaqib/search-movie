const { months } = require("moment");

class ModalDetail extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    set detail(detail) {
        this._detail = detail;

        const monthName = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
        const splitData = this._detail.release_date.split("-");
        const month = monthName[splitData[1] - 1]
        this._date = `${splitData[2]} ${month} ${splitData[0]}`;
        
        this.genres = ''
        this._detail.genres.map(item => {
            if (this.genres == '') {
                this.genres = item.name
            } else {
                this.genres = `${this.genres}, ${item.name}`
            }
        })

        this.render();
    }

    get closeElement() {
        return this.shadowDOM.querySelector("#close");
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
            }

            :host {
                display: block;
                padding: 20px;
                width: 100%;
                height: auto;
            }

            .modal_detail {
                left: 50px;
                right: 50px;
                top: 50px;
                bottom: 50px;
                position: fixed;
                z-index: 1;
                border-radius: 15px;
                background-size: cover;
                background-image: url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this._detail.backdrop_path}");
                background-position-y: center;   
            }

            h3 {
                margin-bottom: 10px;
            }

            .poster_image {
                position: relative;
                margin-top: 5px;
                margin-right: 20px;
                margin-bottom: 10px;
                width: 200px;
                float: left;
            }

            .wrapper {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding: 30px;
                background-color: rgba(0,0,0,0.5);
                color: #fff;
                border-radius: 15px;
                word-spacing: 1.5px;
                line-height: 1.4;
                text-align: justify;
            }

            .close {
                width: 50px;
                height: 50px;
                position: absolute;
                top: 15px;
                right: 30px;
                font-size: 30px;
                color: #fff;
                background-color: rgba(0,0,0,0.75);
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

            .list {
                list-style-type: none;
                font-weight: bold;
            }

            h4 {
                margin-top: 20px;
            }

            span {
                margin-top: -3px;
            }
        </style>
        
        <div class="modal_detail">
            <div class="wrapper">
                <h1 class="modal_title">${this._detail.original_title}</h1>
                <h3>${this.genres}</h3>
                <img class="poster_image" src='https://image.tmdb.org/t/p/w220_and_h330_face${this._detail.poster_path}' alt="poster_image">
                <ul class="list">
                    <li>Status: ${this._detail.status}</li>
                    <li>Release Date: ${this._date}</li>
                    <li>Language: ${this._detail.original_language}</li>
                    <li>Popularity: ${this._detail.popularity}</li>
                </ul>
                <h4>Overview:</h4>
                <p class="overview">${this._detail.overview}</p>

                <div class="close" id="close"><span>x</span></div>
            </div>
        </div>`;
    }
 }
  
 customElements.define("modal-detail", ModalDetail);