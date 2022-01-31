
//$(document).sort(function(list) {
  //const fruitInput = $("input#fruit").toUpperCase();
  //const drinkInput = $("input#drink").toUpperCase();
  //const vegetableInput = $("input#vegetable").toUpperCase();
  //const snackInput = $("input#snack").toUpperCase();
  //const proteinInput = $("input#protein").toUpperCase();
  //const breadInput = $("input#bread").toUpperCase();

  //return (fruit + drink + vegetable + snack + protein + bread);
//});

const list  = ["fruit" + "drink" + "vegetable" + "snack" + "protein" + "bread"];
list.sort(function(list) {
  $("#fruit").toUpperCase();
});

  //const groceriesList = [fruit, drink, vegetable, snack, protein, bread]
//});
//groceriesList.forEach (function(grocery) {
  //sort(fruit + drink + vegetable + snack + protein);
//});



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const fruitInput = $("input#fruit").val();
    const drinkInput = $("input#drink").val();
    const vegetableInput = $("input#vegetable").val();
    const snackInput = $("input#snack").val();
    const proteinInput = $("input#protein").val();
    const breadInput = $("input#bread").val();

    $(".fruit").text(fruitInput);
    $(".drink").text(drinkInput);
    $(".vegetable").text(vegetableInput);
    $(".snack").text(snackInput);
    $(".protein").text(proteinInput);
    $(".bread").text(breadInput);

    $("#list").show();

     event.preventDefault();
  });
});

//objArray.sort(function(a, b) {
  //var textA = a.DepartmentName.toUpperCase();
  //var textB = b.DepartmentName.toUpperCase();
 // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
//});