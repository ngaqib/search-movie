class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set movie(movie) {
        this._movie = movie;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                }

                :host::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    z-index: -1;
                    background-size: cover;
                    background-position-y: center;
                    background-image: url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this._movie.backdrop_path}");
                }
            
                .poster {
                    width: 250px;
                    height: auto;
                    object-fit: cover;
                    object-position: center;
                    margin-top: 10px;
                }
            
                .movie-info {
                    padding: 24px;
                    display: block;
                    text-align: center;
                    background-color: rgba(0,0,0,0.5);
                }

                .movie-info:hover {                    
                    background-color: #dedede;
                    opacity: 0.5;
                    cursor: pointer;
                }

                .movie-info:hover h2 {                    
                    color: #000;
                }
            
                .movie-info > h2 {
                    font-weight: lighter;
                }
            
                .movie-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10;
                }

                .title{
                    font-family: 'Suez One', serif;
                    font-size: 25px;
                    font-weight: 2500;
                    width: fit-content;
                    margin: auto;
                    border-radius: 10px;
                    color: #fff;
                }
            </style>
            
            <div class="movie-info">
                <input class="valueId" value="${this._movie.id}" type="hidden">
                <h2 class="title">${this._movie.title}</h2>
                <img class="poster" src='https://image.tmdb.org/t/p/w220_and_h330_face${this._movie.poster_path}' alt="poster">
            </div>`;
    }
 }
  
 customElements.define("movie-item", MovieItem);