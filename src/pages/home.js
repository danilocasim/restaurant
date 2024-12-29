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

    content.classList.add("home-content");

    title.classList.add("home-title");

    button.classList.add("home-btn");

    content.appendChild(introduction);
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(button);
};