const data = require('./data');

function pickNumData(obj) {
    let result = [];
    (function closureResultArr(obj) {
		let keyValueArrs = Object.entries(obj);
        keyValueArrs.forEach((el) => {
			if (typeof el[1] === 'object') closureResultArr(el[1]);
            if (typeof el[1] === 'number') result.push(el[0]);
		}) 
    })(obj);
    return result;
}
// console.log(pickNumData(data.data1));
//숫자타입으로만 구성된 요소를 뽑아 배열만들기
//실행결과
// ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]




function pickNameDataWithSk(arr) {
	let result = [];
	(function closureResultArr(arr) {
		arr.forEach((el) => {
			if (el['type'] === 'sk') result.push(el['name'])
			if (el['childnode'].length !== 0) closureResultArr(el['childnode']);
		});
	})(arr);
	return result;
}
// console.log(pickNameDataWithSk(data.data2));
//type이 sk인, name으로 구성된 배열만 출력해본다.
//["Yong", "hary", "solvin", "hani", "chulsu"]



function myReduce(arr, callback, initial) {
	let acc;
	let index;
	initial === undefined ? (acc = arr[0], index = 1) : (acc = initial, index = 0)
	for (i = 1; i < arr.length; i++, index++) {
		acc = callback(acc, arr[i], index, arr);
	}
	return acc;
}

const arr = [3, 6, 1, 4, 5, 2, 9, 8];
let testCase1 = myReduce(arr, (acc, cur) => acc + cur);
let testCase2 = myReduce(arr, (acc, cur) => acc > cur ? acc : cur);
let testCase3 = myReduce(arr, (acc, cur, i, arr) => {
	console.log('acc :', acc, 'cur :', cur,'indxe :', i,'array :', arr)
},[]);
// console.log(testCase1);
// console.log(testCase2);
// console.log(testCase3);
// reduce 만들기.
le