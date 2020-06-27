class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
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
                width: 100%;
                background: black;
                background-image: url("https://cdn.shopify.com/s/files/1/2391/5185/articles/UPDATED_List_of_filmmaking_blogs_and_Websites_for_Guest_Blogging_wallpaper.png?v=1560254668");
                background-size: contain;
                background-repeat: space;
                font-family: 'Press Start 2P', cursive;
            }

            .neons {
                padding: 50px 25px;
                text-align: center;
             }
             
            .neons h1 {
                font-size: 35px;
                text-align: center;
                font-weight: bolder;
                -webkit-animation: glow 2s ease-in-out infinite alternate;
                -moz-animation: glow 2s ease-in-out infinite alternate;
                animation: glow 2s ease-in-out infinite alternate;
            }
             
            @-webkit-keyframes glow {
                from {
                    color: #fff;
                    text-shadow: 0 0 10px #1709e4, 0 0 20px #1709e4, 0 0 30px #1709e4, 0 0 40px #1709e4, 0 0 50px #1709e4, 0 0 60px #1709e4, 0 0 70px #1709e4, 0 0 90px #1709e4;
                }
               
                to {
                    color: gray;
                    text-shadow: 0 0 20px #1709e4, 0 0 30px #1709e4, 0 0 40px #1709e4, 0 0 50px #1709e4, 0 0 60px #1709e4, 0 0 70px #1709e4, 0 0 80px #1709e4, 0 1 90px #1709e4;
                }
            }
        </style>

        <div class="neons">
            <h1><em>Movie's Search</em></h2>
        </div>`;
    }
}
  
customElements.define("app-bar", AppBar);