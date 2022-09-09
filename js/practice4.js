getInputById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
sendBtn = () => {
    const name = getInputById('name-field');
    const email = getInputById('email-field');
    const message = getInputById('message-field');
    if (!name || !email || !message) {
        alert('fill the blank')
        return;
    }
    setToLocalStorage(name, email, message)
}
getPersonInfoFromLocalStorage = () => {
    let getperson = localStorage.getItem('Person');
    let pers = {};
    if(getperson){
        pers = JSON.parse(getperson)
    }
    return pers;
}

setToLocalStorage = (name, email, message) => {
    let person = getPersonInfoFromLocalStorage();
    person[name] = name;
    person[email] = email;
    person[message] = message;

    const stringyfied = JSON.stringify(person);
    console.log(stringyfied)
}



































/* sendName = () => {
    const name = getInputById('name-field');
    localStorage.setItem('Name', name);
}

deleteName = () => {
    localStorage.removeItem('Name')
}
sendEmail = () => {
    const email = getInputById('email-field');
    localStorage.setItem('Email', email);
}
deleteEmail = () => {
    localStorage.removeItem('Email')
}
sendMessage = () => {
    const message = getInputById('message-field');
    localStorage.setItem('Message', message);
}
deleteMessage = () => {
    localStorage.removeItem('Message')
}
resetBtn = () => {
    localStorage.clear();
} */