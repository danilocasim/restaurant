export const homepage = (content) => {
    const introduction = document.createElement("h3");
    const title = document.createElement("h1");
    const description = document.createElement("h4");
    const button = document.createElement("button");

    introduction.textContent = "We've got you covered with";
    title.textContent = "Apex Aroma";
    description.textContent =
        "It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.";
    button.textContent = "Order Now";

    content.style.backgroundColor = "#160b00c7";
    content.style.minHeight = "50vh";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.alignItems = "center";
    content.style.justifyContent = "center";
    content.style.textAlign = "center";
    content.style.gap = "1rem";
    content.style.width = "50vw";
    content.style.margin = "0 auto";
    content.style.marginTop = "100px";

    title.style.fontSize = "3rem";

    button.style.padding = "5px 20px";
    button.style.border = "2px solid #ffebd6";
    button.style.borderRadius = "20px";
    button.style.backgroundColor = "#ffebd6";
    button.style.color = "#160b00";
    button.style.fontWeight = "700";
    button.style.cursor = "pointer";

    content.appendChild(introduction);
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(button);
};