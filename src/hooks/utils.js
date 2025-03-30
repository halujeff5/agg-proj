export function cleanData(data) {

function removeDuplicates(data, keyFunction){
    let seenKeys = new Set();
    const uniqueObj =[]

    for (const obj of data) {
        const key = keyFunction(obj);
        if (!seenKeys.has(key)) {
            seenKeys.add(key);
            uniqueObj.push(obj)
        }
    }
    return uniqueObj;
}
function getTitle(obj) {
    return obj.title;
}

const unq = removeDuplicates(data, getTitle);
return unq
}