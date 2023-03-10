/*

    MIT License

Copyright(c) 2023 Alice H.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files(the "Software"), to deal
    in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


//////////////////////////////////////
/// START: Site-wide Color Change ///
////////////////////////////////////

function forceChangeColor() {
    let colorScheme = localStorage.getItem("customColorScheme");

    if (colorScheme <= 0) {
        baseDefaults();
    }
    else {
        document.getElementById("colorChanger").value = `${colorScheme}`;
        document.documentElement.style.setProperty('--primary-color', `${colorScheme}`, "important");
        document.documentElement.style.setProperty('--secondary-color', `${colorScheme}`, "important");
        document.documentElement.style.setProperty('--text-secondary', `${colorScheme}`, "important");
        document.documentElement.style.setProperty('--nav-button-border', `${colorScheme}`, "important");
    }
}

function baseDefaults() {
    document.documentElement.style.setProperty('--primary-color', '#f5c443', "important");
    document.documentElement.style.setProperty('--secondary-color', '#a1863e', "important");
    document.documentElement.style.setProperty('--text-secondary', '#fcd774', "important");
    document.documentElement.style.setProperty('--nav-button-border', '#3d3118', "important");
}

function resetDefaultColor() {
    baseDefaults();
    localStorage.removeItem("customColorScheme");
}

document.getElementById("colorChanger").addEventListener("change", onColorChanged);

function onColorChanged() {
    let torgb = toRgb(this.value);
    let split = torgb.split("|");

    localStorage.setItem("customColorScheme", this.value);

    document.documentElement.style.setProperty('--primary-color', `#ffffff`, "important");
    document.documentElement.style.setProperty('--secondary-color', `#ffffff`, "important");
    document.documentElement.style.setProperty('--text-secondary', `#ffffff`, "important");
    document.documentElement.style.setProperty('--nav-button-border', `#ffffff`, "important");

    changeColor(parseInt(split[0]), parseInt(split[1]), parseInt(split[2]));
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

function changeColor(r, g, b) {
    let hex = toHex(r, g, b);
    console.log(hex);
    document.documentElement.style.setProperty('--primary-color', `${hex}`, "important");
    document.documentElement.style.setProperty("--secondary-color", `${hex}`, "important");
    document.documentElement.style.setProperty("--text-secondary", `${hex}`, "important");
    document.documentElement.style.setProperty("--nav-button-border", `${hex}`, "important");
}

////////////////////////////////////
/// END: Site-wide Color Change ///
//////////////////////////////////

/////////////////////////////
/// START: Nav Dropdown  ///
///////////////////////////

function showDropdown() {
    document.getElementById("servicesDropdown").classList.toggle("show");
}

///////////////////////////
/// END: Nav Dropdown  ///
/////////////////////////

///////////////////////////
/// START: Accordions  ///
/////////////////////////

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

/////////////////////////
/// END: Accordions  ///
///////////////////////