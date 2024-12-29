import "./style.css";

import { homepage, menupage, contactspage } from "./barrel.js";

const content = document.querySelector("#content");
const nav = document.querySelector("nav");

homepage(content);

nav.addEventListener("click", (e) => {
    const target = e.target.id;

    switch (target) {
        case "home":
            content.textContent = "";
            homepage(content);
            break;
        case "menu":
            content.textContent = "";
            menupage(content);

            break;
        case "contacts":
            content.textContent = "";
            contactspage(content);
            break;
    }
});