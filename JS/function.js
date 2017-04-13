// //самовызывающаяся функция

// (function() {
// 	'use strict';
// 	console.log('Functions');

// 	//Именованные функции - их можно вызвать из любого места кода.

// //function имя_функции(аргумент1, фргумент2, ...) {
// //	тело функции
// //	[return]
// //}

// //function printFunc() {
// //	console.log(printFunc);
// //}
// //
// //printFunc(); //Вызов функции - обязательная часть.
// //
// //function printHello(name) {
// //		console.log('Hello, ' + name);
// //}
// //
// //printHello('Ivan'); //Задаем аргумент
// //
// //function summ(a, b) {
// //	console.log(a + b);
// //}
// //
// //summ(2, 5);
// //
// //arguments
// //
// //function showAllUsers() {
// //	for (var i = 0; i < arguments.length; i++) {
// //		console.log('User' + (i + 1), arguments[i])
// //	}
// //}
// //
// //showAllUsers('Иван', 'Сергей', 'Евгений', 'Ольга');

// //function printUserInfo(name, surname) {
// //	surname = surname || 'Значение по умолчанию';
// //	console.log(name, surname);
// //}
// //
// //printUserInfo('Ярослав');


// // function summ(a, b) {
// // 	if (!checkNum(a, b)) {
// // 		console.log('Вычисления не возможны');
// // 	}
// // 	return a + b;
// // }

// // var sm = summ(8, 5);
// // console.log(sm);

// // function checkNum(a, b) {
// // 	if ((typeof(a) != 'number') ||
// // 			 (typeof(b) != 'number')) {
// // 		console.log('Ошибка ввода');
// // 		return; //после return ничего не выполняется!!!
// // 	} else {
// // 		console.log('Числа');
// // 		return;
// // 	}
// // }

// // function calc(num1, num2, opr) {
// // 	if (opr == '+') {
// // 		return num1+num2;
// // 	} else if (opr == '-') {
// // 		return num1-num2;
// // 	} else if (opr == '*') {
// // 		return num1*num2;
// // 	} else if (opr == '/') {
// // 		if (num2 === 0) {
// // 			return 'На ноль делить нельзя';
// // 		}
// // 		return num1/num2;
// // 	} 
// // }
// // var res = calc(7, 9, '*');
// // console.log(res);	


// // Анонимные функции - функции созданные внутри переменной.
// //к такой функции можно обращаться только после создания.

// // var someFunc = function(number) {
// // 	if (number%2 === 0) {
// // 		return 'четное';
// // 	}
// // 	  return 'нечетное';
// // }

// // console.log(someFunc(9));

// // var name = 'Bob';

// // function showName() {
// // 	var name = 'Ivan';
// // 	console.log(name);
// // }

// // showName();


// // function numSumm(n) {
// // 	if (n === 1) return 1;
// // 	return n + numSumm(n - 1);
// // }
// // console.log(numSumm(500));


// //Замыкание

// // function имя_функции1(параметр1) {
// // 	var переменная;
// // 	function имя_функции2(параметр2) {
// // 		доступны параметр1 и переменная;
// // 	}
// // }

// //function createCounter() {
// //	var calsNumber = 100;
// //	return function() {
// //		return calsNumber++; //ЗДесь происходит запоминаниею
// //	}
// //}
// //
// //var cuont = createCounter();
// //
// //console.log(cuont());
// //console.log(cuont());
// //console.log(cuont());
// //console.log(cuont());

// //Напишите функцию, которая в зависимости от 
// //переданных в нее целочисленных аргументов
// //"количество дней", будет возвращать
// //"день" в правильной форме, например "1 день" и т.д. 


// // function calendar() {
// // 	for (var i = 0; i < arguments.length; i++){
// // 		if ((arguments[i]%10 === 0) 
// // 			|| (arguments[i]%5 === 0)
// // 			|| ((arguments[i]%5 >= 12)
// // 			|| (arguments[i]%100 <= 19))) {
// // 			return arguments[i] + ' Дней';
// // 		} else if (arguments[i]%10 === 1) {
// // 			return arguments[i] + ' День';
// // 		} else if (arguments[i]%10 >= 2 || arguments[i]%10 <= 4) {
// // 			return arguments[i] + ' Дня';
// // 		} else return arguments[i] + 'Дней'
// // 	}	
// // }

// // console.log(calendar(117));

// //Написать функцию подсчета суммы от n до m
// // console.log('Подсчет суммы от n до m');
// // function calcSumm(n, m) {
// // 	var summ = 0;
// // 		for (;n <= m; n++) {
// // 			summ = summ + n;
// // 		} return console.log(summ);
// // }

// // calcSumm(1, 12);

// // Написать функцию factorial(n), которая возвращает 
// //факториал числа n, использовать рекурсию!

// // function factorial(n) {
// // 	if (n != 1) {
// // 		return n * factorial(n-1);
// // 	} return n;
// // }
// // console.log( factorial(9) );

// //Написать функцию, которая возвращает новую функцию, 
// //которая увеличивает/уменьшает переданное число на указанный при карировании шаг. 


// //Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n

// // function sumTo(n) {
// // 		if (n!= 1) {
// // 			return n + sumTo(n - 1); 
// // 		} return n;
// // }

// // console.log(sumTo(80));

// // function sumTo(n) {
// // 	var summ = 0;
// // 		for (var i = 1; i <= n; i++) {
// // 			summ = summ + i;
// // 		} return summ;
// // } 

// // console.log(sumTo(16));

// // function sumTo(n) {
// // 	var summ = n*((n+1)/2);
// // 	return summ;
// // }	

// // console.log(sumTo(10));
// }())


// // var str = prompt('Введите любое слово', '');
// // 		var gl = ['а', 'e', 'о', 'и', 'у', 'э', 'ы', 'ю', 'я', 'ё'];
// // 			var count = 0;
// // 			for (var i = 0; i < str.length; i++) {
// // 				for (var j = 0; j < gl.length; j++) {
// // 					if (str[i] === gl[j]) {
// // 						count++;
// // 					}
// // 				}
// // 			}
// // console.log(count);

// var regExp = new RegExp('шаблон'; 'igm - флаги');
// 		regExp = /шаблон/igm;


// var str = 'Я люблю тебя, Java Script';
// var = regExp = /Ja/;		
// str.search(regExp);

// var str = 'Ой-ой-ой';

// var regExp = /ой/ig;

// str.match(regExp);

var str = 'Ой\n-ой\n-ой\n';
var regExp = /ой/ig;
str.match(regExp);