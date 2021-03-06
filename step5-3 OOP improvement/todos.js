//todos.js
function Todos(data, stackSize = 3) {
    this._data = data;
    this.userInputRecord = new Array();
    this.todosRecord = new Array();
    this.recordLength = stackSize;
    this.recordPointer = 0;
    this.recordSwitch = 1;
    this.statusArr = ['todo', 'doing', 'done'];
}

Todos.prototype.randomNum = function (digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min)
};

Todos.prototype.makeUniqueNum = function (digits) {
    let generatedId = -1;
    let indexOfId = -1;
    do {
        generatedId = this.randomNum(digits);
        indexOfId = this.searchById(generatedId);
    } while (indexOfId != null);
    return generatedId
};

Todos.prototype.countAllStatus = function () {
    let resultObject = {
        todo: 0,
        doing: 0,
        done: 0
    };
    this._data.forEach(value => resultObject[value.status] += 1);
    return resultObject
};

Todos.prototype.searchById = function (id) {
    let resultIndex = null;
    this._data.forEach((value, index) => {
        if (value.id == id) resultIndex = index;
    });
    return resultIndex
};

Todos.prototype.searchByStatus = function (status) {
    let resultArr = [];
    this._data.forEach(value => {
        if (value.status === status) resultArr.push(`'${value.name}, ${value.id}번'`);
    });
    return resultArr
};

Todos.prototype.show = function (status) {
    if (status === "all") {
        const statusCountObject = this.countAllStatus();
        return `현재상태 : todo: ${statusCountObject.todo}개, doing: ${statusCountObject.doing}개, done: ${statusCountObject.done}개`
    } else if (this.statusArr.includes(status)) {
        const statusArr = this.searchByStatus(status);
        return `${status}리스트 :  총 ${statusArr.length}건 : ${statusArr.join(', ')}`
    }
};

Todos.prototype.add = function (name, tags) {
    let generatedId = this.makeUniqueNum(5);
    let newObj = {
        name,
        tags,
        status: "todo",
        id: generatedId
    };
    this.storeHistoryRecord(newObj, 'add', name, tags);
    this._data.push(newObj);
    return `'${name}' 1개가 추가됐습니다.(id : ${generatedId})`
};

Todos.prototype.delete = function (id) {
    const indexOfTarget = this.searchById(id);
    const objOfTarget = this._data[indexOfTarget];
    if (this.recordSwitch) { this.storeHistoryRecord(objOfTarget, 'delete', id); }
    this._data.splice(indexOfTarget, 1);
    return `'${objOfTarget.name}' '${objOfTarget.status}'가 목록에서 삭제됐습니다.`
};

Todos.prototype.update = function (id, status) {
    const indexOfTarget = this.searchById(id);
    let objOfTarget = this._data[indexOfTarget];
    if (objOfTarget.status === status) {
        return '바꾸려는 상태가 현재상태와 같습니다.'
    } else {
        if (this.recordSwitch) { this.storeHistoryRecord(objOfTarget, 'update', id, status, objOfTarget.status); }
        objOfTarget.status = status;
        return `'${objOfTarget.name}'이(가) '${status}'으로 상태가 변경됐습니다`
    }
};

Todos.prototype.runRecord = function (order) {
    switch (order) {
        case 'start':
            this.recordSwitch = 1;
            break;
        case 'stop':
            this.recordSwitch = 0;
            break;
    }
};

Todos.prototype.moveRecordPointer = function (appWord) {
    switch (appWord) {
        case 'undo':
            this.recordPointer++
            break;
        case 'redo':
            this.recordPointer--;
            break;
    }
};

Todos.prototype.isValidPointerLocation = function (appWord) {
    switch (appWord) {
        case 'undo':
            return this.recordPointer < this.todosRecord.length;
        case 'redo':
            return this.recordPointer > 0
    }
};

Todos.prototype.addTempData = function (todosObj, userInputArr) {
    this.userInputRecord.unshift(userInputArr);
    this.todosRecord.unshift(todosObj);
};

Todos.prototype.deleteTempData = function (start, deleteCount) {
    this.userInputRecord.splice(start, deleteCount);
    this.todosRecord.splice(start, deleteCount);
};

Todos.prototype.storeHistoryRecord = function (todosObj, appWord, ...parameter) {
    const userInputArr = [appWord, parameter];
    if (this.recordPointer === 0) {
        this.addTempData(todosObj, userInputArr);
        this.deleteTempData(this.recordLength, 1);
    } else {
        this.deleteTempData(0, this.recordPointer);
        this.addTempData(todosObj, userInputArr);
        this.recordPointer = 0;
    }
};

Todos.prototype.setDefaultVal = function (undoWord) {
    let defaultVal = {
        adjNum: 0,
        add: 'add',
        delete: 'delete',
    }
    if (undoWord === 'redo') {
        defaultVal.adjNum = 1;
        defaultVal.add = 'delete';
        defaultVal.delete = 'add';
    }
    return defaultVal;
}

Todos.prototype.restoreTodos = function(undoWord) {
    const defaultVal = this.setDefaultVal(undoWord);
    if (this.isValidPointerLocation(undoWord)) {
        const userinputArr = this.userInputRecord[this.recordPointer - defaultVal.adjNum];
        const todosObj = this.todosRecord[this.recordPointer - defaultVal.adjNum];
        const appWord = userinputArr[0];
        const appParameterArr = userinputArr[1];
        this.moveRecordPointer(undoWord);
        if (undoWord === 'undo') { this.runRecord('stop'); }
        switch (appWord) {
            case defaultVal.add:
                this.delete(todosObj.id);
                return `'${todosObj.id}번, ${todosObj.name}' 항목이 todo에서 삭제되었습니다.`
            case defaultVal.delete:
                this._data.push(todosObj);
                return `'${todosObj.id}번, ${todosObj.name}' 항목이 삭제에서 todo상태로 되었습니다.`
            case 'update':
                const originalStatus = appParameterArr[2];
                this.update(...appParameterArr);
                return `'${todosObj.id}번, ${todosObj.name}' 항목이 ${todosObj.status}에서 ${originalStatus}상태로 되었습니다.`
        }
    } else {
        return `${undoWord}할 항목이 없습니다.`
    }
};

module.exports = Todos;
