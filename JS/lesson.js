////Команда будет спрашивать логин. Если пользователь вводит "admin" -> спрашивает пароль. Если ввел 123, то выводит "Добро пожаловать", если иной - то "вход невозможен"
//// если не "админ", то выводит информацию "неверный логин"
//
///*var login, pwd;
//
//login = prompt('Введите логин', '');
//	if (login == 'admin') {pwd = prompt('Enter your password', '');
//		if (pwd == '123') {alert('Добро пожаловать', '');
//		} else {alert('Bad login', '');}}
//else {alert('Я тебя не знаю, ублюдок!', '');}
//(login === 'admin') ? console.log('ok') : alert('bad login');
////тернальный оператор ?
//
////(условие) ? Код1, если тру : код2, если фолс*/
//
////switch(value) {
////	case 12: 
////	console.log();
////	case 'userName': 
////	console.log('userName'); 
////	default: 
////	console.log('OK');
////'use strict';
////
////var i = 1;
////var a = ++i;
////console.log(a);
//
////цикл с предусловием
//
////while(условие) {
////	код(тело цикла);
////}
//
////var pictures = 5;
////	while (pictures) {
////		pictures--;
////		console.log(pictures);
////	}
//
////do {
////	код(тело цикла);
////} whle (условие);
//
////var users = 7;
////do {
////	console.log(users);
////	if (users === 3) break;
////	users--;
////} while (users);
////
////var tara = 10;
////var fairy = 16;
////	while(fairy || fairy) {
////		tara--; 
////		fairy -= 0.5;
////		if (tara <= 0 || fairy <= 0) break;
////	} console.log('Средства -' + fairy, 'Тарелок -' + tara);
//
//// цикл for
////var (начало, условие, шаг) {
////	код(тело цикла);
////}
//
////var summ = 0;
////for (var i = 0; i < 5; i++) {
////	summ += i;
////	console.log(summ);
////}
//
////Создать таблицу соответсвтия между весом в фкнтах  весом в киллограмамах  для занений от 1 до 10.
//// 1 фунт = 453 грамма
////var pound = 1
////var g;
//// for (var kg = 0.453; pound <= 10; pound++) {
//// 	g = pound * kg;
//// 	console.log(pound + ' фунтов = ' + g.toFixed(3) + ' килограммов');
//// }
//
//// continue 
//
////for (var i = 0; i < 10; i++) {
////	if (i%2 === 0) continue;
////	console.log(i);
////}
//
////var pictures = ['lala', 'blabla', 'wqwe', 'qwqwe'];
////console.log(pictures);
////
////var picturesLeng = pictures.length;
////console.log(picturesLeng);
////
////// Методы массивов
////
////var a = pictures.pop(); // удаляет и возвращает последний элемент массива
////console.log(a);
////console.log(pictures);
////
////pictures.push('spring'); //добавляет элемент в конец массива
////console.log(pictures);
////
////pictures.shift(); // удаляет и возвращает первый элемент массива
////pictures.unshift(); // Добавляет элемент в начало массива
//
//// метод .split() - берет строку и переводит е в массив по разделителю.
//
////var str = 'Very, long, string';
////var arr = str.split(' ', 2);
////console.log(arr);
//
//// метод .join() - берет масиив и переводит его в строку по разделителю.
//
////arr = ['lala', 'blabla', 'wqwe', 'qwqwe'];
////var str = arr.join(' ');
////console.log(str);
//
////Метод .reverse() - переворачивает массив наоборот
//
//arr = ['lala', 'blabla', 'wqwe', 'qwqwe'];
//console.log(arr);
//
////arr = arr.reverse();
////console.log(arr);
//
////.splice(индекс, []); - вставляет, удаляет, заменяет элементы
//
////arr.splice(1, 2);
////console.log(arr);
//
////arr.splice(1, 0, 'newElement');
////console.log(arr);
//
//// Метод .slice(начало, конец) -  
//
////var newArr = arr.slice(1, 3);
////console.log(newArr)
//
//// метод .indexOf() - возвращает номер, под которым числится элемент в массиве. 
////Если элемента в массиве нет, то возвращает -1
//
//var b = arr.indexOf('lala');
//console.log(b)
//
////.lastIndexOf() - тоже самое, но начинает поиск с конца массива.
//
//var c = arr.lastIndexOf('blabla');
//console.log(c)

//arr = ['1111', '2222', '3333', '4444'];
//
//for (var i = 0; i < arr.length; i++) {
//	console.log('Элемент массива №', i, arr[i]);
//}



// многомерный массив
//var matrix = [
//	[1, 2, 3],
//	[6, 8, 9],
//	[13, 0, 2]
//]

// Задан числовой массив 2, 3, 7, 13, 5, 0, 20. Найти максимальное значение  и минимальное не сипользуя стандартные методы. 
//Найти среднее значение суммы всех элементов массива. Удалить первый и последний элемент массива.

//var summ = 0;
//var max = 2;
//var min = max;
//var arr = [2, 3, 7, 13, 5, 0, 20];
//	for (var i = 0; i < arr.length; i++) {
//			summ = summ + arr[i];
//	}	console.log(summ / arr.length);
//		for (var i = 1; i < arr.length; i++) {
//			if (max < arr[i]) {max = arr[i]};
//			if (min > arr[i]) {min = arr[i]};
//	}	console.log(max);
//		console.log(min);
//	arr.shift(0);
//	console.log(arr);
//	arr.pop(6);
//	console.log(arr);

//Есть три вершины. Координаты X, Y, Z заданы как целые числа. 
//Нужно определить - является ли треугольник с заданными координатами прямоугольным.
//В решении использовать только математические и логические операторы. Результат в консоль.
//Обязательное условие: все вычисления производить только с целыми числами. 
//Любой переход в дробные числа запрещен!
//console.log('Triangl')
//var x1 = 0;
//var x2 = 0;
//var x3 = 4;
//var y1 = 0;
//var y2 = 3;
//var y3 = 0;
//var a, b, c;
//a = +Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//b = +Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y2 - y3, 2));
//c = +Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
//var arr = [a, b, c];
//console.log(arr);
//for (var i = 0; i < arr.length - 1; i++) {
//	for (var j = 0; j < arr.length - 1 - i; j++) {
//		if (arr[j + 1] > arr[j]) {
//			var t = arr[j + 1];
//			arr[j + 1] = arr[j];
//			arr[j] = t;
//		} 
//	} 
//}
//console.log(arr);
//var s = Math.pow(arr[0], 2); 
//var n = Math.pow(arr[1], 2);
//var m = Math.pow(arr[2], 2);
//var summ = s - n - m;
//	console.log(summ)
//		if (summ === 0) {
//			console.log(true);}
//			else {
//			console.log(false);}


//Создать массив из чисел. Выполнить сортировку массива по возрастанию методом пузырька. 
//Запрещено использовать стандартные методы.

//var arr = [2, 6, 9, 0, 3, 87, 3, 20, 10]
//
//for (var i = 0; i < arr.length - 1; i++) {
//		for (var j = 0; j < arr.length - 1 - i; j++){
//				if (arr[j + 1] > arr[j]){
//					var t = arr[j + 1];
//					arr[j + 1] = arr[j];
//					arr[j] = t;
//					
//				}
//		}
//}
//console.log(arr);


// Перевод числа из десятичной системы в двоичную и обратно.

//var a = 300;
//var j;
//var n;
//var arr = [];	
//	for (a; a >= 1;) {
//			j = a / 2; 
//				if (a%2 == 0) {
//					n = 0
//				} else {
//					n = 1
//				};
//			arr.unshift(n);
//			a = Math.floor(j);	
//	}
//	console.log(arr);
//	var summ = 0;
//		for (i = 0; i < arr.length; i++) {
//				var num;
//				num = arr[i] * Math.pow(2, [arr.length - 1 - i]);
//				summ = summ + num;
//				console.log(num);
//		} console.log(summ);





