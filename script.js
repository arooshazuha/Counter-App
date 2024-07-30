document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.querySelector(".counter");
    const incrementButton = document.querySelector("button:nth-of-type(2)");
    const decrementButton = document.querySelector("button:nth-of-type(1)");
    const resetButton = document.querySelector("button:nth-of-type(3)");
    
    let count = 0;

    incrementButton.addEventListener("click", () => {
        count++;
        counterElement.textContent = count;
    });

    decrementButton.addEventListener("click", () => {
        count--;
        counterElement.textContent = count;
    });

    resetButton.addEventListener("click", () => {
        count = 0;
        counterElement.textContent = count;
    });
});
