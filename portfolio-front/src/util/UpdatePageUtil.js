
export const handleArrayChangeEvent = (event,array,index,hook) => {
    const { name, value } = event.target;
    hook(array.map((el,ind) => (ind === index) ? { ...el, [name] : value } : el))
};

export const removeElementFromArray = (array,index,hook) => {
    hook(array.filter((el,ind) => ind !== index))
}

export const addElementToArray = (array, newObj,hook) => {
    let arr = [...array,  newObj ];
    hook(arr);
}