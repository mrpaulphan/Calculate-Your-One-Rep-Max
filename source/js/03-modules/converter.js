function converter() {

  var calculateBtn = $('#calculateBtn');

  calculateBtn.click(function() {
    console.log('clicked');

    var weight = $('.input-weight'),
      rep = $('.input-rep'),
      inputWeightValue = parseInt(weight.val()),
      inputRepsValue = parseInt(rep.val()),
      resultPercentage = $('td').attr('data-weight-percentage');


    if (weight.length <= 1) {
      weight.val(0)
    }
    if (rep.length <= 1) {
      rep.val(0)
    }
    console.log(weight);
    //Check to see what method is selected
    if ($("#forumula option:selected").val() == "epleyFormula") {
      // Epley Formula
      var oneRepMaxFormula = inputWeightValue * (1 + inputRepsValue / 30);

    } else if ($("#forumula option:selected").val() == "brzycki") {
      // Brzycki
      var oneRepMaxFormula = inputWeightValue * (36 / (37 - inputRepsValue))

    } else if ($("#forumula option:selected").val() == "lander") {
      // Lander
      var oneRepMaxFormula = 100 * inputWeightValue / (101.3 - 2.67123 *
        inputRepsValue)

    }

    console.log(weight);


    $('span[data-weight-percentage="100"]').text(Math.round(
      oneRepMaxFormula));
    $('td[data-weight-percentage="95"]').text(Math.round(oneRepMaxFormula *
      .95));
    $('td[data-weight-percentage="90"]').text(Math.round(oneRepMaxFormula *
      .90));
    $('td[data-weight-percentage="85"]').text(Math.round(oneRepMaxFormula *
      .85));
    $('td[data-weight-percentage="80"]').text(Math.round(oneRepMaxFormula *
      .80));
    $('td[data-weight-percentage="75"]').text(Math.round(oneRepMaxFormula *
      .75));
    $('td[data-weight-percentage="70"]').text(Math.round(oneRepMaxFormula *
      .70));
    $('td[data-weight-percentage="65"]').text(Math.round(oneRepMaxFormula *
      .65));
    $('td[data-weight-percentage="60"]').text(Math.round(oneRepMaxFormula *
      .60));


    $('.count').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 1000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  });
}
