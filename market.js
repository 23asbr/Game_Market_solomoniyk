// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [

    {
        title: "Царівна жаба",
        author: "Деркач Єлизавета",
        author_photo: "",
        email: "23a_dyem@liceum.ztu.edu.ua",
        group: "10-A 1",
        image: "image/ldgame.png",
        game_github: "https://github.com/liska228/Phaser2ndGame",
        game_pages: "https://liska228.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1uFrc-z8MnRAFvR7sPNM1NnN800TJOUfr",
        forms: "https://forms.gle/XDzvrjzJhjq758XFA",
        gamemarket_github:"https://github.com/liska228/GameMarket_Derkach-",
        gamemarket_pages: "https://liska228.github.io/GameMarket_Derkach-",
        market_pages:"https://liska228.github.io/GameMarket_Derkach-/market.html",
        stars: 5,
    },
    


    // 'Газоноосарка 43',
    // 'Електричний тример 110',
    // 'Електрична газонокосарка 32',
    // 'Акумуляторний оприскувач 12 N',
    // 'Газоноосарка 52',
    // 'Електричний тример 69',
    // 'Електрична газонокосарка 14',
    // 'Акумуляторний оприскувач 88 N',
    // 'Газоноосарка 19',
    // 'Електричний тример 39',
    // 'Електрична газонокосарка 04',
    // 'Акумуляторний оприскувач 20 N',
    // 'Газоноосарка 53',
    // 'Електричний тример 90',
    // 'Електрична газонокосрарка 34542',
    // 'Акумуляторний оприскувач 121 N',
    // 'Газоноосрарка 42',
    // 'Електричний равлик 19',
    // 'Електрична свиня 1487',
    // 'Акумуляторний оприскувач 28 N',
    // 'Газоноосарка 10',
    // 'Електричний тример 9',
    // 'Електрична газонокосарка 4',
    // 'Акумуляторний оприскувач 2 N',
    // 'Газоноосарка 4',
    // 'Електричний тример 150',
    // 'Електрична газонокосарка 2',
    // 'Акумуляторний оприскувач 1909 N',
    // 'Газоноосарка 1',
    // 'Електричний тример 129',
    // 'Електрична газонокосарка 1664',
    // 'Акумуляторний оприскувач 89 N',
    // 'Газоноосарка 15',
    // 'Електричний тример 19',
    // 'Електрична газонокосарка 6',
    // 'Акумуляторний оприскувач 1120 N',
]
//Отримання елементу з індифекатором items
let itemsDiv = document.getElementById("items");
//Перевірка існування знайденого блоку 
if (itemsDiv) { 
     //Створення блоків по кількості елементів масиву
itemsArray.forEach((item,index)=>{
    //Спеціальний апостроф - Англійська розкладка - біля кнопки 1 ~
    // console.log(item)
 // Виводимо на веб-сторінку елемент масиву в блок з класом item
 itemsDiv.innerHTML += 
 `
        <div class="item">
        <p>Назва гри: ${item.title}</p>
        <img src="${item.image}" alt="" srcset="">
        <p>Автор: ${item.author} </p>
        <p>Група: ${item.group} </p>
        <p>
        <button href="${item.game_pages}" target ="_blank" >Грати</button>
        <button href="${item.game_github}" target ="_blank" >Github</button>
        <button href="${item.docs}" target ="_blank" >Docs</button>
        </p>
        <p>
        <button href="${item.forms}" target ="_blank" >Forms</button>
        <button href="${item.gamemarket_github}" target ="_blank" >Gamemarket Github</button>
        <button href="${item.gamemarket_pages}" target ="_blank" >Gamemarket</button>
        </p>
        
    </div>
    `
})
    //Додавання відформатованого HTML коду в блок 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // for (let i =0; i<=100; i++){
    //     itemsDiv.innerHTML += '<div class = "item"></div>'
    // }
} else {
    //Вивід повідомлення про не знайдений блок 
    console.log('Блок товарів не знайдено')
} 


// //Виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item,index) =>{
//     console.log(index + '-й елемент:',item)
// })
// //Сортування масиву
// itemsArray = itemsArray.sort()
// // Виведення в консоль масиву
// console.log(itemsArray)
// //Виведення в консоль елементів масиву
// for(let i = 0; i<itemsArray.length; i++){
//     console.log(itemsArray[i])
// }
// //Виведення в коносль номерів та значень елементів масиву
// for(let i = 0; i < itemsArray.length; i++){
//     console.log(i +'-й елемент: ', itemsArray[i])
// }