document.querySelectorAll(".radio-button").forEach((radio) => {
  radio.addEventListener("change", (event) => {
    document.querySelectorAll(".rectangle-7").forEach((rect) => {
      rect.style.border = "2px solid transparent";
    });

    const rectangle7 = event.target.closest(".rectangle-7");
    if (rectangle7) {
      rectangle7.style.border = "2px solid #ff6b82";
    }
  });
});
