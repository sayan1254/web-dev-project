document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('add-button');
    var inputBox = document.getElementById('input-box');
    var listContainer = document.getElementById('list-container');

    addButton.addEventListener('click', function() {
        addTask(inputBox, listContainer);
    });

    listContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
            saveData(listContainer);
        } else if (event.target.tagName === 'SPAN') {
            event.target.parentElement.remove();
            saveData(listContainer);
        }
    });

    function addTask(inputBox, listContainer) {
        if (inputBox.value === '') {
            alert('Please write something!');
        } else {
            var li = document.createElement('li');
            li.textContent = inputBox.value;
            listContainer.appendChild(li);
            var span = document.createElement('span');
            span.textContent = '\u00d7';
            li.appendChild(span);
        }
        inputBox.value = '';
        saveData(listContainer);
    }

    function saveData(listContainer) {
        localStorage.setItem('data', listContainer.innerHTML);
    }

    function showTask(listContainer) {
        listContainer.innerHTML = localStorage.getItem('data');
    }

    showTask(listContainer);
});
