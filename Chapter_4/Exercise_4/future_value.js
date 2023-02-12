let investment = 0;
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 100000));
}
while (  isNaN(investment) );

let rate = 0; 
do {
     rate = parseFloat(prompt("Enter Interest Rate as xx.x", 7.5));
}
while (  isNaN(rate) );

let years = 0;
do {
    years = parseInt(prompt("Enter Number of Years", 10));

}
while ( isNaN(years) );

let futureValue = investment;
for (let i = 1; i <= years; i++) {
    futureValue += futureValue * rate / 100;
}


document.write(`<p><label>"Investment amount:</label> $(investment)</p>`);
document.write(`<p><label>"Interest Rate:</label> $(rate)</p>`);
document.write(`<p><label>"Years:</label> $(years)</p>`);
document.write(`<p><label>"Future Value :</label>
                  $(futureValue.toFixed(2)}</p>`);
               