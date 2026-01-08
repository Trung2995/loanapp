import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js"

@customElement("scroll-widget")
export class ScrollWidget extends LitElement {
    static styles = [
        css`
                        :host {
            display: flex;
            }
            .marquee-container {
            width: 30vw;
            height: 50px; /* Set a fixed height for the container */
            overflow: hidden; 
            border:solid;
            border-radius:25px;
            background-color: darkblue
            }

            .marquee {
            list-style: none; /* Remove default list styles */
            display:flex;
            padding: 0;
            margin: 0;
            height:100%;
            width:max-content;
            animation: scroll linear infinite;
            animation-duration: 7s;
            align-items:center;
            font-weight: bold;
            color: whitesmoke
            }
            .marquee li {
            display:flex;
            align-self:center;
            align-items:center;
            justify-content:center;
            flex-shrink:0;
            font-size:2rem;
            white-space:nowrap;
            padding: 0 1rem 0 1rem;
            }
            .marquee:hover{
            animation-play-state: paused;

            }

            .img1 {
                border-radius: 25%;
                padding-left: 25px;
                padding-right: 25px;
            }

            @keyframes scroll {
            0% {
                transform: translateX(0); /* Start position */
            }
            100% {
                transform: translateX(-50%); /* End position (fully scrolled) */
            }
            }
        `
    ];

    render() {
        return html`
        <div class="marquee-container">
            <ul class="marquee">
                <h1> WWT DEMO POWERED BY AI</h1>
                <img src="https://loanadminweb-448885887334.us-central1.run.app/public/img/wwt.png"  class="img1">
                <h1> WWT DEMO POWERED BY AI</h1>
                <img src="https://loanadminweb-448885887334.us-central1.run.app/public/img/wwt.png"  class="img1">
            </ul>
        </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "scroll-widget": ScrollWidget;
    }
}
