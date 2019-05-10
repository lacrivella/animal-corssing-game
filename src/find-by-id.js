function findById(array, id) {
    for(let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.id === id) {
            return element;
        }
    }
    return null;
}

export default findById;