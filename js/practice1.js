addName = () => {
    localStorage.setItem('name', 'sakib khan')
}
addAge = () => {
    localStorage.setItem('age', 40);
}
getAge = () => {
    const age = localStorage.getItem('age');
    alert(age)
}
removeAge = () => {
    localStorage.removeItem('age');
}
nameAge = () => {
    localStorage.removeItem('name');
}
setObject = () => {
    const setItem = {firstName: 'abraham', lastName: 'linkon'}
    localStorage.setItem('person', JSON.stringify(setItem));
}