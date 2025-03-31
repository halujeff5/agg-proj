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

export function handleClick(e) {
    e.preventDefault()
    let arr =[]
    arr = [...arr, e.target.value]
    arr.filter(item => item !== e.target.value)
    console.log(arr)
}

export function getImagesOnly(data) {
    let withImages = []
    for (const obj of data) {
        if (obj.image == null) {
            continue
        }else {
            withImages.push(obj)
        }
    }
    return withImages
}