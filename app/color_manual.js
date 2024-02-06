const{colorManual}=require('./color_number.js');
function printManual() {
    let manual = colorManual();
    console.log('\nColor Coding Reference Manual:\n');
    console.log('PairNumber             MajorColor           MinorColor\n');
    console.log(manual);
}
printManual();
