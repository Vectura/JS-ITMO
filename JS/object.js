'use strict'

// var obj = {};

// // if ('name' in obj) {
// // 	obj.name......
// // }

// for (var i in obj) {
// 	console.log('В obj есть свойство + i');
// 	console.log('Значение' + obj[i];)
// }

// var objHuman = {
// 	name: 'Ivan',
// 	surname: 'Ivanov',
// 	age: 21,
// 	photo: 'photo.jpg',
// 	email: 'i.ivanov@mail.ru',
// 	homeCity: 'St Petersburg'
// };

// console.log('Объект человек содержит:');

// for(var property in objHuman) {
// 	console.log('Свойство ' + property + ' содержит ' + objHuman[property]);
// }

// var objWindow = {
// 	height: '200px',
// 	width: '400px',
// 	title: 'Тестовое окно',
// 	charset: 'utf-8'
// };
// console.log('Объект окно содержит:');
// for(var i in objWindow) {
// 	console.log('Свойство ' + i + ' содержит ' + objWindow[i]);
// }

// var objSlider = {
// 	id: 'color slider',
// 	container: '200px:400px',
// 	items: [
// 		'red', 'green', 'blue']
// };

// console.log('Объект слайдер содержит:');
// for(var i in objSlider) {
// 	console.log('Свойство ' + i + ' содержит ' + objSlider[i]);
// }

// var objMenu = {
// 	name: 'Основное меню',
// 	items: [
// 		{
// 			name: 'О компании',
// 			url: 'about.html'
// 		},
// 		{
// 			name: 'Товары',
// 			url: 'goods.html'
// 		},
// 		{
// 			name: 'Корзина',
// 			url: 'basket.html'
// 		}
// 	]
// };

// var objMenuProp;
// var objMenuItem;

// console.log('Объект меню содержит:');
// for (var i in objMenu) {
// 	objMenuProp = objMenu[i];
// if (typeof objMenuProp == 'object'
// 	&& objMenu[i].length > 0) {
// 	console.log(i + ': ');
// 	for(var j = 0; j < objMenuProp.length; j++) {
// 		objMenuItem = objMenuProp[j];
// 			for(var i2 in objMenuItem) {
// 				console.log(i2 + ': ' + objMenuItem[i2]);
// 			}
// 		}
// } else {
// 	console.log(i + ': ' + objMenu[i]);
// }
// }
/*---------------------------------------ЗАДАЧКИ ПО ОБЪЕКТАМ----------------------*/

//Создайте функцию isEmpty(obj), которая возвращает true, 
//если в объекте нет свойств и false – если хоть одно свойство есть.

// function isEmpty(obj) {
// 	for (var key in obj) {
// 		return true;
// 	}	return false;
// }

// var schedule = {
// 	time: '8:30'
// };

// console.log(isEmpty(schedule)); 

/*""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""*/

// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0

// var salaries = {
// 	Вася: 100, 
// 	Петя: 300,
// 	Даша: 250
// }
// function Salar(obj) {
// 	var summ = 0;
// 	for (var key in obj) {
// 		summ = summ + obj[key];
// 	} return summ;
// }

// console.log(Salar(salaries));

/*""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""*/

// Есть объект salaries с зарплатами. Напишите код,
// который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».

// var salaries = {
// 	'Вася': 100,
// 	'Петя': 300,
// 	'Даша': 400,
// 	'Маша': 123,
// 	'Саша': 354,
// 	'Гена': 300,
// 	'Коля': 549,
// 	'Кристина': 987,
// 	'Миша': 333,
// 	'Кеша': 457
// };

// function Max(obj) {
// 	var max = 0;
// 	var maxName;
// 	for (var name in salaries) {
// 		if (max < salaries[name]) {
// 			max = salaries[name]
// 			maxName = name;
// 		} 
// 	} return maxName || 'Нет таких сотрудников';
// } 

// console.log(Max(salaries));

/*""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""*/

// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2.
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// };


// function multiplyNumeric() {
// 	var menu = {
// 		width: 200,
// 		a: 300,
// 		b: 242,
// 		c: 255,
// 		d: 888,
// 		e: 655,
// 		title: "My menu"
// 	};
// 	for (var key in menu) {
// 		if (isNumeric(menu[key])) {
// 			menu[key] = menu[key]*2;
// 		}
// 	} return menu;
// }

// console.log(multiplyNumeric());

/*""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""*/

// Построить объект студент:
// - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// - метод выводящий в консоль биографическую справку в виде, например: 
// «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. 
// Учится в ИТМО.

// var student = {
// 	name: 'Pavel',
// 	surname: 'Smirnov',
// 	age: 18,
// 	interests: [
// 	{
// 		programming: 'PHP', 
// 		music: 'Scorpions', 
// 		drugs: 'heroin'
// 	}
// 	],
// 	PlaceOfStudy: 'Учится в ITMO'
// }

// var obj;
// var objItem;

// console.log('Информация о студенте.');
// 	for (var i in student) {
// 		obj = student[i];
// 		if (typeof obj == 'object' && obj.length > 0) {
// 			console.log(i + ': ');
// 			for (var j = 0; j < obj.length; j++) {
// 				objItem = obj[j];
// 			 for (var i2 in objItem) {
// 				console.log(i2 + ': ' + objItem[i2]);
// 			}
// 		} 
// 	} else {
// 		console.log(i + ': ' + student[i]);}
// }

/*""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""*/

// Заданы два массива A и B необходимо их объединить 
// в один массив C так, чтобы в массиве остались уникальные 
// (неповторяющиеся) элементы. 
// Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].

// var a = [1, 4, 6, 2, 7];
// var b = [1, 5, 3, 7, 6, 4];


// function concat(b, a) {
// 	var result = [];
// 	result = a.concat(b);
// 	var obj = {};
// 	for (var i=0; i<result.length;i++) {
// 		obj[result[i]] = true;
// 	} return console.log(Object.keys(obj));
// }
// concat(b, a);

// /*------------------------------------------------------------------------*/
// Задан массив целых чисел. Написать функцию filter. 
// Функция filter получает в качестве аргументов исходный 
// массив и функцию предикат проверяющую является ли число 
// отрицательным (предикат – функция, которая возвращает 
// истину или ложь). Функция filter используя предикат 
// позволяет сформировать и вернуть новый массив, в который 
// вошли все отрицательные элементы исходного массива.

// var arr = [1, 4, -5, 8, 30, -7, -45, -2, 87, 90, 0];

// function filter(arr) {
// 	var result = [];
// 	for (var i=0; i<arr.length-1; i++) {
// 		if (arr[i] < 0) 
// 			result.push(arr[i]);
// 	} return result;
// }

// console.log(filter(arr));

