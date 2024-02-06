const{ getPairNumberFromColor,ColorPair}=require('./color_number.js');
const{ MajorColorNames, MinorColorNames}=require('./color.js');

function colorManual() {
    let colorCodes = [];
    for (let majorColor of MajorColorNames) {
        for (let minorColor of MinorColorNames) {
            let pair = new ColorPair();
            pair.majorColor = majorColor;
            pair.minorColor = minorColor;
            let pairNumber = getPairNumberFromColor(pair);
            colorCodes.push(`  ${pairNumber}       -  ${pair.toString()}`);
        }
    }
    return colorCodes.join('\n');
}

function printManual() {
    let manual = colorManual();
    console.log('\nColor Coding Reference Manual:\n');
    console.log('PairNumber             MajorColor           MinorColor\n');
    console.log(manual);
}
printManual();
