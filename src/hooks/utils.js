// function to clean resp data from api calls
export function cleanData(data) {
    function removeDuplicates(data, keyFunction) {
        let seenKeys = new Set();
        const uniqueObj = []

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
    let arr = []
    arr = [...arr, e.target.value]
    arr.filter(item => item !== e.target.value)
    console.log(arr)
}

// function to get new array of resp obj with images only
export function getImagesOnly(data) {
    let withImages = []
    for (const obj of data) {
        if (obj.image == null) {
            continue
        } else {
            withImages.push(obj)
        }
    }
    return withImages
}

// function to clean checkbox array 
export function cleanCheckbox(array) {
    let newArr = []
    for (let i = 0; array.length; i++) {
        if (array[i] == null) {
            continue
        } else {
            newArr.push(array[i])
        }
    } return newArr
}

// function to remove dupl topic buttons before passing it as a prop onto button
export function removeDups(arr) {
    const uniqueArr = [...new Set(arr)]
    return uniqueArr
}

export function timeSince(timestamp) {
    const dateStr = new Date(timestamp)
    const now = new Date().getTime();
    const timeDifference = now - dateStr;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));

    if (hours < 1) {
        const minutes = Math.floor(timeDifference / (1000 * 60));
        return `${minutes} minutes${minutes !== 1 ? '' : 's'} ago`;
    } else {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
}

export function convertToStream(data) {
    const uint8Array = new Uint8Array(data);
    const blob = new Blob([uint8Array], {type: 'audio/mpeg'});
    const url = URL.createObjectURL(blob);
    console.log('Url created', url)
    return url
}

