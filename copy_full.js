function copyText() {
    const text = document.getElementById("textToCopy").innerText;
    navigator.clipboard.writeText(text)
        .then(() => {
            const alert = document.getElementById("copyAlert");
            alert.classList.add("show");
            alert.classList.remove("hidden");

            setTimeout(() => {
                alert.classList.add("hidden");
                alert.classList.remove("show");
            }, 2000); // Уведомление исчезает через 2 секунды
        })
        .catch(err => {
            console.error("Ошибка копирования: ", err);
        });
}
