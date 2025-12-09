function showInfo(type) {
    let box = document.getElementById("info");
    let text = "";

    if (type === "age") text = "Мне ___ лет.";
    if (type === "place") text = "Я живу в ______________.";
    if (type === "hobby") text = "Мои увлечения: ____________.";

    box.innerHTML = text;
    box.classList.add("show");
}
