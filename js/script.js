function changeDefaults() {
    document.documentElement.style.setProperty('--primary-color', '#f5c443', "important");
    document.documentElement.style.setProperty('--secondary-color', '#a1863e', "important");
    document.documentElement.style.setProperty('--text-secondary', '#fcd774', "important");
    document.documentElement.style.setProperty('--primary-color', '#f5c443', "important");
    document.documentElement.style.setProperty('--nav-button-border', '#3d3118', "important");
}

function showDropdown() {
    document.getElementById("servicesDropdown").classList.toggle("show");
}

function displayWorkPanel() {
    if (document.getElementById("work-panel").style.display == "block") {
        document.getElementById("work-panel").style.display = "none";
    }
    else {
        document.getElementById("work-panel").style.display = "block";
    }
}

function displaySection(sectionId) {
    var secs = document.getElementsByClassName("info-section");
    var otherSecs = [];

    for (var i = 0; i < secs.length; i++) {

        if (secs[i].id == sectionId) {
            if (secs[i].style.display == "block") {
                //secs[i].style.display = "none";
            }
            else {
                secs[i].style.display = "block";
            }
        }
        else {
            otherSecs.push(secs[i]);
            for (var j = 0; j < otherSecs.length; j++) {
                otherSecs[j].style.display = "none";
            }
        }
    }
}

function displayPanel(panelId) {
    var panels = document.getElementsByClassName("work-panel");
    var otherPanels = [];

    for (var i = 0; i < panels.length; i++) {

        if (panels[i].id == panelId) {
            if (panels[i].style.display == "block") {
                panels[i].style.display = "none";
            }
            else {
                panels[i].style.display = "block";
            }
        }
        else {
            otherPanels.push(panels[i]);
            for (var j = 0; j < otherPanels.length; j++) {
                otherPanels[j].style.display = "none";
            }
        }
    }
}

function hideOtherPanels(currentPanel) {
    var panels = document.getElementsByClassName("work-panel");

    for (var i = 0; i < panels.length; i++) {
        if (panels[i] == currentPanel) {
            console.log(`${panels[i]} == ${currentPanel}`);
        }
        else {
            panels[i].style.display = "none";
        }
    }
}

document.getElementById("colorChanger").addEventListener("change", onColorChanged);

function onColorChanged() {
    let torgb = toRgb(this.value);
    let split = torgb.split("|");

    document.documentElement.style.setProperty('--primary-color', `#ffffff`, "important");
    document.documentElement.style.setProperty('--secondary-color', `#ffffff`, "important");
    document.documentElement.style.setProperty('--text-secondary', `#ffffff`, "important");
    document.documentElement.style.setProperty('--nav-button-border', `#ffffff`, "important");

    changePrimaryColor(parseInt(split[0]), parseInt(split[1]), parseInt(split[2]));
    changeSecondaryColor(parseInt(split[0]), parseInt(split[1]), parseInt(split[2]));
    changeTextSecondary(parseInt(split[0]), parseInt(split[1]), parseInt(split[2]));
    changeButtonBorder(parseInt(split[0]), parseInt(split[1]), parseInt(split[2]));
}

function toHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function toRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    return r + "|" + g + "|" + b;
}

function changePrimaryColor(r, g, b) {
    let hex = toHex(r, g, b);
    console.log(hex);
    document.documentElement.style.setProperty('--primary-color', `${hex}`, "important");
}

function changeSecondaryColor(r, g, b) {
    let hex = toHex(r, g, b);
    console.log(hex);
    document.documentElement.style.setProperty("--secondary-color", `${hex}`, "important");
}

function changeTextSecondary(r, g, b) {
    let hex = toHex(r, g, b);
    console.log(hex);
    document.documentElement.style.setProperty("--text-secondary", `${hex}`, "important");
}

function changeButtonBorder(r, g, b) {
    let hex = toHex(r, g, b);
    console.log(hex);
    document.documentElement.style.setProperty("--nav-button-border", `${hex}`, "important");
}