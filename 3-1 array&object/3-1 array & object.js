const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}
function pickNumData(obj) {
    let result = [];
    (function closure(obj) {
		let keyValueArrs = Object.entries(obj);
        keyValueArrs.forEach((el) => {
			if (typeof el[1] === 'object') closure(el[1]);
            if (typeof el[1] === 'number') result.push(el[0]);
		}) 
    })(obj);
    return result;
}
// console.log(pickNumData(data));
//숫자타입으로만 구성된 요소를 뽑아 배열만들기
//실행결과
// ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]



var jsonData = [{
	"id": 1,
	"name": "Yong",
	"phone": "010-0000-0000",
	"type": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-0000-1111",
		"type": "kt",
		"childnode": [{
				"id": 115,
				"name": "hary",
				"phone": "211-1111-0000",
				"type": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-444-000",
					"type": "kt",
					"childnode": [{
							"id": 11592,
							"name": "cherry",
							"phone": "111-222-0000",
							"type": "lg",
							"childnode": []
						},
						{
							"id": 11595,
							"name": "solvin",
							"phone": "010-000-3333",
							"type": "sk",
							"childnode": []
						}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "444-111-0200",
				"type": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-222-0000",
					"type": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-000-0000",
						"type": "kt",
						"childnode": [{
								"id": 116890,
								"name": "wonsuk",
								"phone": "010-000-0000",
								"type": "kt",
								"childnode": []
							},
							{
								"id": 1168901,
								"name": "chulsu",
								"phone": "010-0000-0000",
								"type": "sk",
								"childnode": []
							}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-0000-0000",
				"type": "lg",
				"childnode": []
			}
		]
	}]
}]

function pickNameDataWithSk(arr) {
	let result = [];
	(function add(arr) {
		arr.forEach((el) => {
			if (el['type'] === 'sk') result.push(el['name'])
			if (el['childnode'].length !== 0) closure(el['childnode']);
		});
	})(arr);
	return result;
}
// console.log(pickNameDataWithSk(jsonData));
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