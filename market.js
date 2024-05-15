console.log('test')

let itemsDiv = document.getElementById("items");

if(itemsDiv){
    //for(let i=0; i<=100; i++){
    //    itemsDiv.innerHTML += '<div class = item></div>'
    //}
    
    
} else{
    console.log("not found")
}

let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12',
    'Акумуляторний оприскувач 12',
    'Акумуляторний оприскувач 12',
    'Акумуляторний оприскувач 12',
    'Акумуляторний оприскувач 12',
    'Акумуляторний оприскувач 12',
    'Акумуляторний оприскувач 12',
    'Акумуляторний оприскувач 12',
    'Акумуляторний оприскувач 12',
]
console.log(itemsArray)

itemsArray = itemsArray.sort().forEach((item) =>{
    console.log(item)
}
)

//for(let i =0; i<itemsArray.length; i++){
//    console.log(i + '-й елемент: ', itemsArray[i])
//}