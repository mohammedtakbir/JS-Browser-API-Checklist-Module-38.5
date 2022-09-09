getInputById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
sendName = () => {
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
}