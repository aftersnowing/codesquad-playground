const todos = require('./todosData');



// 첫번째 설계와 코드구현
function show(order) {
    if (order === 'all') {
        const theNumOf = status => todos.filter((el) => el['status'] === status).length;
        console.log(`현재상태 : todo ${theNumOf('todo')}개, doing ${theNumOf('doing')}개, done ${theNumOf('done')}개`);
    } else {
        const doListArr = todos.reduce((acc, cur) => {
            if (cur['status'] === order) acc.push(cur['name']);
            return acc;
        }, [])
        console.log(`총 ${doListArr.length}건 ${doListArr.join(', ')}`);
    }
}
show('all');
show('todo');
show('doing');
show('done');





// 두번째 설계와 코드구현
function show(order) {
    const countNum = { 'todo': 0, 'doing': 0, 'done': 0 };
    const statusList = todos.reduce((acc, cur) => {
        if (cur['status'] === order) { acc.push(cur['name']) };
        countNum[cur['status']]++;
        return acc;
    }, [])

    if (order === 'all') {
        console.log(`현재상태 : todo ${countNum['todo']}개, doing ${countNum['doing']}개, done ${countNum['done']}개`)
    } else {
        console.log(`총 ${statusList.length}건 ${statusList.join(', ')}`)
    }
}
show('all');
show('todo');
show('doing');
show('done');
