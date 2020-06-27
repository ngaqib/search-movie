class LoadingIndicator extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    set loading(state) {
        this._loading = state;
        
        if (this._loading === true) {
            this.renderLoading();
        } else {
            this.render();
        }
    }
  
    renderLoading() {
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
                background-image: url("https://cdn.shopify.com/s/files/1/2391/5185/articles/UPDATED_List_of_filmmaking_blogs_and_Websites_for_Guest_Blogging_wallpaper.png?v=1560254668");
                background-size: cover;
                background-position-y: center;
                color: white;
            }

            .modal_detail {
                background-color: rgba(0,0,0,0.5);
                left: 0px;
                right: 0px;
                top: 0px;
                bottom: 0px;
                position: fixed;
                z-index: 999;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .loader {
                border: 16px solid #f3f3f3; /* Light grey */
                border-top: 16px solid #1709e4; /* Blue */
                border-radius: 50%;
                width: 120px;
                height: 120px;
                animation: spin 2s linear infinite;
            }
              
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
        
        <div class="modal_detail">
            <div class="loader"></div>
        </div>`;
    }

    render(){
        this.shadowDOM.innerHTML = ""
    }
 }
  
 customElements.define("loading-indicator", LoadingIndicator);