function change(element) {
    const addButton = element.querySelector(".add-button h1");
    const list = element.querySelector("ul");

    if (addButton && list) {
        if (addButton.textContent === "+") {
            addButton.textContent = "x";
            addButton.style.position = "relative";
            addButton.style.top = "-1px";
        } else {
            addButton.textContent = "+";
            addButton.style.top = "0px"; 
        }
        list.style.display = list.style.display === "block" ? "none" : "block";
    }
}
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    };
    dateTimeElement.textContent = now.toLocaleString('en-US', options);
}
setInterval(updateDateTime, 1000);
