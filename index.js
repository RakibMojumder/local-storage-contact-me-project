

document.getElementById('send-name').addEventListener('click', () => {
    const inputFieldValue = getInputFieldById('name');
    // localStorage.setItem('name', inputFieldValue);
    setItemsToLocalStorage('name', inputFieldValue)
});
document.getElementById('send-email').addEventListener('click', () => {
    const inputFieldValue = getInputFieldById('email');
    // localStorage.setItem('email', inputFieldValue);
    setItemsToLocalStorage('email', inputFieldValue)
});
document.getElementById('send-msg').addEventListener('click', () => {
    const inputFieldValue = getInputFieldById('message');
    // localStorage.setItem('message', inputFieldValue);
    setItemsToLocalStorage('message', inputFieldValue)
});


document.getElementById('send').addEventListener('click', () => {
    const name = getInputFieldById('name');
    const email = getInputFieldById('email');
    const message = getInputFieldById('message');

    const myObj = {
        name,
        email,
        message
    };

    const myObjStr = JSON.stringify(myObj);

    localStorage.setItem('contact', myObjStr);
})


const getInputFieldById = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
};


const setItemsToLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
};




document.getElementById('delete-name').addEventListener('click', () => {
    localStorage.removeItem('name')
});
document.getElementById('delete-email').addEventListener('click', () => {
    localStorage.removeItem('email')
});
document.getElementById('delete-msg').addEventListener('click', () => {
    localStorage.removeItem('message')
});

document.getElementById('reset').addEventListener('click', () => {
    localStorage.clear();
});

