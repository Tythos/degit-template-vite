/**
 * Initial entry point. Referenced from index.html.
 */

const TITLE = "degit-template-vite";

function onDivClick(event) {
    let div = event.target;
    let text = div.textContent;
    div.textContent = text.slice(1) + text[0];
}

function onWindowLoad(event) {
    let div = window.document.createElement("div");
    div.textContent = TITLE;
    div.classList.add("Greeting");
    div.addEventListener("click", onDivClick);
    window.document.body.appendChild(div);
    window.document.title = TITLE;
}

window.addEventListener("load", onWindowLoad);
