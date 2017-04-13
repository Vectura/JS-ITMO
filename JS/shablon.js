'use strict';

// var regExp = new RegExp('шаблон'; 'igm - флаги');
// 		regExp = /шаблон/igm;

//i - позволяет находить нужное в любом регистре; g - ищет все варианты; m - многострочный поиск;

// var str = 'Я люблю тебя, Java Script';
// var regExp = /Ja/;	
// console.log(str.search(regExp));

// var str = 'Ой-ой-ой';

// var regExp = /ой/ig;

// console.log(str.match(regExp));


// var str = 'Ой\n-ой\n-ой\n';
// var regExp = /ой/igm;
// str.match(regExp);

//проверка валидации

// console.log(/o/i.test(str));

// var str = 'Привет, мир!';
// console.log(str.split(' '));

// var req = prompt('ведите номер телефона в формате: X (XXX) XXX-XX-XX', '');
// 	var result = /\d \(\d{3}\) \d{3}-\d{2}-\d{2}/ig.test(req);
// 	console.log(result);





// -------------------ДОМАШКА ПО РЕГУЛЯРКАМ---------------------------------

// Дана строка, изображающая целое число. Вывести сумму цифр этого числа.

// var str = '4654654654654654';

// var arr = str.match(/\d/g);
// console.log(arr);
// var summ = 0;
// 	for(var i=0; i < arr.length;i++) {
// 		summ = summ + (+arr[i]);
// 	}
// 	console.log(summ);

/*------------------------------------------------------------------------*/

// Дана строка S и символ C. Удвоить каждое вхождение символ C в строку S.

// var s = 'Lorem ipsum dolor sit amet, consectetur adipisicing';
// 	s = s.replace(/c/ig, 'cc');
	
// console.log(s);

// Проверить что введенный пароль удовлетворяет следующим условиям сложности:
// 	- длинна от 9 символов;
// 	- содержит обязательно английские буквы верхнего и нижнего регистра;
// 	- содержит более двух цифр;
// 	- содержит обязательно один из неалфавитных символов (например, !, $, #, %).

// function checkPass(pass) {
// 	var pass = prompt('Введите пароль', '');
// 	if (/^.{9,}/ig.test(pass) === false) {
// 		return console.log('Пароль должен содержать не менее 9 символов');
// 	} else if (/[a-z]/g.test(pass) === false) {
// 		return console.log('Пароль должен содержать хотя бы один символ нижнего регистра');
// 	}	else if (/[A-Z]/g.test(pass) === false) {
// 		return console.log('Пароль должен содержать хотя бы один символ верхнего регистра');
// 	} else if (/\d.*?\d/ig.test(pass) === false) {
// 		return console.log('Пароль должен содержать не менее 2-х цифр');
// 	} else if (/[а-яё]/g.test(pass) === true) {
// 		return console.log('Пароль должен содержать только латинские буквы');
// 	} else if (/[@#$%&!]/ig.test(pass) === false) {
// 		return console.log('Пароль должен содержать хотя бы 1 знак типа @,#,$,&,%,!');
// 	} else { 
// 		return console.log('OK')	
// 	}
// }

// checkPass();

