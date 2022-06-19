let cleared = 0;

function showSchedule() {
  document.querySelector("table").style.display = "block";
}

function switchLights() {
  if (cleared == 0) {
    document.querySelector(".dark-button").textContent =
      "There is no going back.";
    document.querySelector(".dark-button").style.cursor = "not-allowed";

    let cfmButton = document.createElement("button");
    cfmButton.classList.add("confirm-button");
    cfmButton.textContent = "I'm ready to change the world";
    cfmButton.style.borderBlockColor = "blue";
    cfmButton.style.cursor = "pointer";

    submitSection = document.querySelector(".submit");
    submitSection.appendChild(cfmButton);

    document.body.style.backgroundColor = "black";
    let fieldset = document.querySelector("fieldset");
    fieldset.disabled = false;
    fieldset.style.backgroundColor = "gray";
    cleared = 1;

    showSchedule();
  }
}

let darkButton = document.querySelector(".dark-button");
darkButton.addEventListener("click", switchLights);
