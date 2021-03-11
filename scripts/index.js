let language_strings = ES_STRINGS;
description_locations = Object.keys(language_strings);
description_strings = Object.values(language_strings);

for (let i = 0; i<description_locations.length; i++) {
    document.getElementById(description_locations[i]).innerText = description_strings[i]
}
