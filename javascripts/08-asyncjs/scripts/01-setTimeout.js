const addElement = () => {
    const header = document.createElement("h1");
    header.textContent = "Programmer Zaman Now";

    document.body.appendChild(header);
}

setTimeout(addElement, 5000);
console.info("Program selesai");