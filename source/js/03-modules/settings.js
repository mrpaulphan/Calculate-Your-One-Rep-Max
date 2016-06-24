function settings() {
    var defaultSettings = {
        weight: "lbs",
        formula: "brzycki"
    }
    var currentWeight = localStorage.getItem("weight");
    var currentFormula = localStorage.getItem("formula");
    if (currentWeight == null) {
        localStorage.setItem("weight", defaultSettings.weight);
    }
    if (currentFormula == null) {
        localStorage.setItem("formula", defaultSettings.formula);
    }
    console.log("Current Settings: Weight:" +currentWeight+ " Formula:" +currentFormula);
}
