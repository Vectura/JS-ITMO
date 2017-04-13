// ;(function() {

// 	function RandomMaxMin(min, max) {
// 		return Math.round(Math.random()*(max-min)+min);
// 	}

// 	function randomArr(arr) {
// 		var index = RandomMaxMin(0, arr.length-1);
// 		return arr.splice(index, 1)[0];
// 	}

// 	function colorGen() {
// 	 return 'color: rgb('+RandomMaxMin(0, 255)+','+RandomMaxMin(0, 255)+','+RandomMaxMin(0, 255)+')'
// 	};

// 	function fontGen() {
// 		return 'font-size: '+RandomMaxMin(12, 36)+'px'
// 	};

// 	window.Game = function(s) {
// 		var arr = [];
// 		for (var i = 0; i < s*s; i++)
// 			arr.push(i);
// 		str = '<table><tbody>';
// 		for (var i = 0; i < s; i++) {
// 			str = str + '<tr>';
// 			for (var j=0; j < s; j++) {
// 				str = str + '<td style ="'+colorGen()+';'+fontGen()+'">'+randomArr(arr)+'</td>';
// 			}
// 			str = str+'</tr>';
// 		} str = str + '</tbody></table>';
// 		return str;
// 	} 

// }());