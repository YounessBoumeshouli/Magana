JSON.parse(localStorage.getItem('ordreToCard'))


document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      
        window.print();
    }
});