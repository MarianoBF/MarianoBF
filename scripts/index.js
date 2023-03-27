document
  .getElementById("lang_switch")
  .addEventListener("click", languageSwitcher);

window.onload = setInitialLanguage;

let current_lang;

function setInitialLanguage() {
  current_lang = "EN";
  languageSwitcher();
}

function languageSwitcher() {
  if (current_lang === "ES") {
    language_strings = EN_STRINGS;
    language_class_strings = EN_CLASS_STRINGS;
    current_lang = "EN";
  } else if (current_lang === "EN") {
    language_strings = ES_STRINGS;
    language_class_strings = ES_CLASS_STRINGS;
    current_lang = "ES";
  }
  description_locations = Object.keys(language_strings);
  description_strings = Object.values(language_strings);

  for (let i = 0; i < description_locations.length; i++) {
    document.getElementById(description_locations[i]).innerText =
    description_strings[i];
  }

  classesToChange = Object.keys(language_class_strings);
  valuesToChange = Object.values(language_class_strings);

  for (let cTC = 0; cTC < classesToChange.length; cTC++) {
    let elementsToChange = document.getElementsByClassName(
      classesToChange[cTC]
    );
    for (let eTC = 0; eTC < elementsToChange.length; eTC++) {
      elementsToChange[eTC].innerText = valuesToChange[cTC];
    }
  }
}

// Modal
const body = document.getElementsByTagName("body")[0]
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const imagesToZoom = document.getElementsByClassName("projectImage");
for (let image of imagesToZoom) {
image.addEventListener("click", () => {
  openModal(image);
})
}
let modalClosebtn = document.getElementById("modalClose");
modalClosebtn.addEventListener("click", () => {
  closeModal();
});

body.addEventListener("keyup", (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
})

function openModal(image) {
  modalTitle.innerText = image.parentElement.parentElement.firstElementChild.firstElementChild.innerText
  modalImage.src = image.src
  modal.classList.add("openModal");
  body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("openModal");
  body.style.overflow = "auto";
}