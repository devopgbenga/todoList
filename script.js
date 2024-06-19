let inputField = document.getElementById('input')
let listContainer = document.getElementById('list-container')
function addTodo(){
    if(inputField.value ===''){
        alert("Enter your schedule")
}
else{
    let li = document.createElement('li')
    li.innerHTML = inputField.value
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
}
inputField.value = ''
saveValue()
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveValue()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveValue()
    }
}, false)

function saveValue(){
    localStorage.setItem('value', listContainer.innerHTML)
}

function showList(){
    listContainer.innerHTML = localStorage.getItem('value')
}

showList()