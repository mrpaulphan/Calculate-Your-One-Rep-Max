function card() {
    var settingsBtn = $('#settings');
    var settingsSaveBtn = $('#save');
    var settingsCloseBtn = $('#close');
    var saveSettings = $('#saveSettings');

    settingsBtn.click(function() {
        console.log('showcard');
        $(this).parents('.card').addClass('flipped');
        //  .mouseleave(function() {
        //     $(this).removeClass('flipped');
        //  });
        return false;
    });

    saveSettings.click(function() {
        localStorage.setItem("weight", "red");
        localStorage.setItem("formula", "blue");

    })


}
