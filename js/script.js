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