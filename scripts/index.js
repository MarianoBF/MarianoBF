document.getElementById("lang_switch").addEventListener("click", languageSwitcher)

window.onload = setInitialLanguage;

let current_lang;

function setInitialLanguage() {
    current_lang = "EN"
    languageSwitcher()
}

function languageSwitcher() {
    if (current_lang === "ES") {
        console.log("a")
        language_strings = EN_STRINGS
        current_lang = "EN" 
    } else if (current_lang === "EN") {
        console.log("b")
        language_strings = ES_STRINGS
        current_lang = "ES"}
    description_locations = Object.keys(language_strings);
    description_strings = Object.values(language_strings);

    for (let i = 0; i<description_locations.length; i++) {
        document.getElementById(description_locations[i]).innerText = description_strings[i]
    }
}