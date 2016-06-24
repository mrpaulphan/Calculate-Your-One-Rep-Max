function settings() {
    var defaultSettings = {
        weight: "lbs",
        formula: "brzycki"
    }

    var weightValue = $('#weightValue');
    var currentWeight = localStorage.getItem("weight");
    var currentFormula = localStorage.getItem("formula");
    if (currentWeight == null) {
        localStorage.setItem("weight", defaultSettings.weight);
    }
    if (currentFormula == null) {
        localStorage.setItem("formula", defaultSettings.formula);
    }
    console.log("Current Settings: Weight:" + currentWeight + " Formula:" + currentFormula);

    // Assign weight format
    weightValue.attr('data-weight', currentWeight);
    weightValue.attr('placeholder', '135' + currentWeight);
    weightValue.keypress(function(e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            return false;
        }
    });

}
