import phone from "../assets/images/phone.png";
import location from "../assets/images/location.png";

export const contactspage = (content) => {
    const details = ["09611285610", "Raja Sansi Rd, India"];
    const icons = [phone, location];

    icons.forEach((icon, index) => {
        const detailsWrapper = document.createElement("div");

        const iconDetails = document.createElement("img");
        iconDetails.src = icon;
        iconDetails.classList.add("contacts-iconDetails");
        const textDetails = document.createElement("h2");
        textDetails.textContent = details[index];

        detailsWrapper.appendChild(iconDetails);
        detailsWrapper.appendChild(textDetails);

        detailsWrapper.classList.add("contacts-detailsWrapper");

        content.appendChild(detailsWrapper);
    });

    const map = document.createElement("iframe");
    map.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60041752.172294065!2d-19.97143494999998!3d23.291883400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391965163db2d969%3A0x912f2c84e14de35d!2sAroma%20Apex!5e0!3m2!1sen!2sph!4v1735428775153!5m2!1sen!2sph";
    map.loading = "lazy";
    map.referrerPolicy = "no-referrer-when-downgrade";
    map.classList.add("contacts-map");
    content.appendChild(map);
};