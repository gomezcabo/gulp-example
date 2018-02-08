document.addEventListener("DOMContentLoaded", function(event) {
    var number = randomBetween(1, 10);
    var otherNumber = randomBetween(1, 10);

    var operationAdd = number + ' + ' + otherNumber + ' = ' + add(number, otherNumber);
    var operationSubstract = number + ' + ' + otherNumber + ' = ' + substract(number, otherNumber);
    var operationMultiply =  number + ' * ' + otherNumber + ' = ' + multiply(number, otherNumber);

    var content = document.getElementById('content');
    content.innerHTML = operationAdd + '<br>' + operationSubstract + '<br>' + operationMultiply;
});
