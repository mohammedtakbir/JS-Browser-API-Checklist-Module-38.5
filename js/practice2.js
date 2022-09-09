let count = 0;
clicked = () => {
    count++;
    localStorage.setItem('value', count);
    const p = document.getElementById('display-count')
    p.innerText = count;
}
const getValue = localStorage.getItem('value');
localStorage.setItem('value', getValue);
console.log(getValue);