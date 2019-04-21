function plus() {
    let a = 1;
    setTimeout(() => console.log(++a), 1000);
    return a;
}

// const result = plus();
// console.log('result :', result);
//



const baseData = [1, 2, 3, 4, 5, 6, 100];

const asyncRun1 = (arr, fn) => {
    for (var i = 0; i < arr.length; i++) {
        setTimeout(() => fn(i), 1000);
    }
}
asyncRun1(baseData, idx => console.log(idx));
//



const asyncRun2 = (arr, fn) => {
    arr.forEach((v, i) => {
        setTimeout(() => fn(i), 1000);
    });
}
// asyncRun2(baseData, idx => console.log(idx))
//



function sync() {
    baseData.forEach((v, i) => {
        console.log("sync ", i);
    });
}

const asyncRun3 = (arr, fn) => {
    arr.forEach((v, i) => {
        setTimeout(() => fn(i), 1000);
    });
}

function sync2() {
    baseData.forEach((v, i) => {
        console.log("sync 2 ", i);
    });
}
// asyncRun3(baseData, idx => console.log(idx))
// sync();
// sync2();
//



const asyncRun4 = (arr, fn) => {
    arr.forEach((v, i) => {
        setTimeout(() => {
            setTimeout(() => {
                console.log("cb 2");
                fn(i)
            }, 1000);
            console.log("cb 1");
        }, 1000);
    });
}
// asyncRun4(baseData, idx => console.log(idx))
//