// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [

    {
        firstName: "Лариса",
        lastName: "Забелло",
        age: "65",
        subject: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna.jpg",
        url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/"
    },

    {
        firstName: "Василь",
        lastName: "Бабій",
        age: "95",
        subject: "Фізична культура",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych.jpg",
        url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/"
    },

    {
        firstName: "Іван",
        lastName: "Севрук",
        age: "56",
        subject: "--",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych.jpg",
        url: "https://lyceum.ztu.edu.ua/team/sevruk-i-h/"
    },

    {
        firstName: "Олена",
        lastName: "Геча",
        age: "30",
        subject: "Історія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
        url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/"
    },

    {
        firstName: "Вікторія",
        lastName: "Нелипович",
        age: "19",
        subject: "Математика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
        url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/"
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
        <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>
        <p>${item.lastName} ${item.firstName}</p>
        <p><img src="${item.photo}" alt="${item.lastName} ${item.firstName}" class="item-image"></p>
        <p>Вік: ${item.age} </p>
        <p>Предмет: ${item.subject} </p>
        <p><a href="${item.url}" target ="_blank" >Перейти на сторінку</a></p>
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