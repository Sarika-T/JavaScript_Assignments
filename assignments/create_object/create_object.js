function CreateObject(arr) {
    // Write your code here
    var obj = {};
    // let res = arr.map(([arr[0], arr[1]]) => ({ arr[0]: arr[1] }));
    // return res
    // return obj
    for (let i = 0; i < arr.length; i = i + 2) {
        obj[arr[i]] = arr[i + 1]
    }
    return obj
}

module.exports = CreateObject;