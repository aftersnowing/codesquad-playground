(function callModuleChecker(){
    var result = new Date();
    console.log("WELCOME UTIL MODULE : " + result);
})();

function checkNumber(val){
    return typeof val === "number"
}

const sum = (arr) => {
    var result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (checkNumber(arr[i]) === "number"){
            result += arr[i]
        }
    }

    return result;
}

module.exports = {
    sum
}
