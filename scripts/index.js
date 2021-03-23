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
  console.log(classesToChange, valuesToChange)


  for (let cTC = 0; cTC < classesToChange.length; cTC++) {
    let elementsToChange = document.getElementsByClassName(
      classesToChange[cTC]);
      console.log(classesToChange, cTC)
    for (let eTC = 0; eTC < elementsToChange.length; eTC++) {
      elementsToChange[eTC].innerText = valuesToChange[cTC];
      console.log(eTC, cTC, elementsToChange, valuesToChange)
    }
  }
}
