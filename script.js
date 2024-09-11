

const startUpSequence= () => {
    for(let i =3; i >= 1; i--){
        console.log(i)
    }
    console.log("Start other thing")
}
startUpSequence();

const changeBattery2=(startLevel1,endLevel1)=>{
    for(let i=startLevel1; i <= endLevel1; i++){
        console.log(i)
        startLevel1++;
    }
    console.log("Battery is fully charged")
}
changeBattery2(0,10)

let robots =[
    {
        model: Alpha,
        power: 80,
        cost: 1500,
        isAutomatic: false,
    },
    {
        model: Beta,
        power: 100,
        cost: 2000,
        isAutomatic: true,
    },
    {
        model: Gamma,
        power: 60,
        cost: 1200,
        isAutomatic: false,
    },
    {
        model: Delta,
        power: 90,
        cost: 1800,
        isAutomatic: true,
    }

];
function buildRobot(robotArray,model,power,cost,isAutomatic){
   let newRobot ={ 
    model:model,
    power:power,
    cost:cost,
    isAutomatic:isAutomatic,
   }
   robotArray.push(robots)

}

const color = function(){
console.log("the color is blue");
}
color()
// loop practice
const colors = function(allColors){
   
     return allColors.length
}
let result = colors("blue","green","yellow")
console.log(result)

