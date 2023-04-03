// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }
// function liftWeights() {
//     console.log("Pump iron");
// }

const { spy } = require("chai")

// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }
// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// } function Monday() {
//     exerciseRoutine(liftWeights);
// }
// function Tuesday (){
//     exerciseRoutine(() => console.log('No thing to do today'))
// }
// Monday()
// Tuesday()
function receivesAFunction(spy) {
spy();
}
function returnsANamedFunction() {
    return function namedFunction(){
        return namedFunction;
    }
}
function returnsAnAnonymousFunction() {
    return(AName)=>{
        return 'function'
    }
}