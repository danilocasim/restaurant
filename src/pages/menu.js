import ColdBrew from "../assets/images/ColdBrew.png";
import Americano from "../assets/images/americano.png";
import Capuccino from "../assets/images/capuccino.png";
import WhiteChoco from "../assets/images/white-choco.png";
import NitroBrew from "../assets/images/NitroColdBrew.png";
import SaltedCaramel from "../assets/images/salted-caramel-cold-brew.png";
import CaramelMach from "../assets/images/caramel-mach.png";
import NitroVanilla from "../assets/images/NitroVanillaSweetCreamColdBrew.png";

export const menupage = (content) => {
    const images = [
        ColdBrew,
        Americano,
        Capuccino,
        WhiteChoco,
        NitroBrew,
        SaltedCaramel,
        CaramelMach,
        NitroVanilla,
    ];

    const coffeeTitle = [
        "Cold Brew",
        "Americano",
        "Capuccino",
        "White Choco",
        "Nitro Brew",
        "Salted Caramel",
        "Caramel Macchiato",
        "Nitro Vanilla  ",
    ];

    const variant = document.createElement("h2");
    variant.textContent = "Cold Coffees";
    content.appendChild(variant);

    const brewWrapper = document.createElement("div");
    images.forEach((image, index) => {
        const brewContainer = document.createElement("div");
        const brewBg = document.createElement("div");
        const brew = document.createElement("img");
        brew.src = image;
        const title = document.createElement("h5");
        brew.classList.add("menu-brew-img");
        brewBg.classList.add("menu-brewBg");
        title.textContent = coffeeTitle[index];
        title.classList.add("menu-title");
        brewContainer.classList.add("menu-brewContainer");

        brewBg.appendChild(brew);
        brewContainer.appendChild(brewBg);
        brewContainer.appendChild(title);
        brewWrapper.appendChild(brewContainer);
    });

    brewWrapper.classList.add("menu-brewWrapper");

    content.classList.add("menu-content");

    content.appendChild(brewWrapper);
};