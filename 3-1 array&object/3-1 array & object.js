const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500,
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
    var result = [];
    (function closure(obj) {
        var keysArr = Object.keys(obj);
        for (key of keysArr) {
            var val = obj[key];
            (function numFinder(val) {
                if (typeof val === 'object') {
                    return closure(val);
                } else if (typeof val === 'number') {
                    result.push(key);
                }
            })(val);
        }
    })(obj);
    return result;
}
// console.log(pickNumData(data));
//숫자타입으로만 구성된 요소를 뽑아 배열만들기
//실행결과
// ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]