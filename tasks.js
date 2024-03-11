var xValues = ["to-do", "doing", "done"];
var yValues = [4, 0, 0];
var barColors = ["#a69ff3"];
new Chart("barChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            barThickness: 40,
            //   labels:task-count
        }]
    },
    
});
var xValues = ["to-do", "doing", "done"];
var yValues = [4, 0, 0];
var barColors = ["#a69ff3"];
new Chart("doughnutchart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },

});

document.addEventListener('DOMContentLoaded', function() {
    const addNoteBtn = document.querySelector('.add-note-btn');
    const noteDetails = document.querySelector('.note-details');
    const notesTable = document.getElementById('notesTable');
    const notesBody = document.getElementById('notesBody');
    const noteTextDisplay = document.getElementById('noteTextDisplay');
    const customizeBtn = document.querySelector('.customize-btn');
    const goBackBtns = document.querySelectorAll('.go-back-btn');
    let editingRow = null;

            const notesData = JSON.parse(localStorage.getItem('notesData')) || [];

    
    function saveNotesToLocalStorage() {
        localStorage.setItem('notesData', JSON.stringify(notesData));
    }

    
    function addNewNoteToTable(noteHeading, currentTime) {
    const newRow = notesBody.insertRow();
    newRow.innerHTML = `<td>${noteHeading}</td><td>${currentTime}</td><td><button class="view-btn">View</button></td><td><button class="remove-btn">Remove</button></td>`;
}
notesTable.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('remove-btn')) {
        const row = target.closest('tr');
        const index = row.rowIndex - 1; 
        row.remove();
        notesData.splice(index, 1);
        saveNotesToLocalStorage();
    }
});

    addNoteBtn.addEventListener('click', function() {
        document.getElementById('noteHeading').value = '';
        document.getElementById('noteText').value = '';
        noteDetails.style.display = 'block';
    });

    document.querySelector('.save-btn').addEventListener('click', function() {
        const noteHeading = document.getElementById('noteHeading').value;
        const noteText = document.getElementById('noteText').value;
        const currentTime = new Date().toLocaleString();

        if (editingRow) {
            editingRow.cells[0].textContent = noteHeading;
            editingRow.cells[1].textContent = currentTime;
            editingRow = null;
        } else {
            addNewNoteToTable(noteHeading, currentTime);
            notesData.push({ heading: noteHeading, time: currentTime });
            saveNotesToLocalStorage();
        }

        noteDetails.style.display = 'none';
        notesTable.style.display = 'table';
    });

    notesTable.addEventListener('click', function(event) {
        const row = event.target.closest('tr');
        const heading = row.cells[0].textContent;
        const text = row.cells[1].textContent;

        noteTextDisplay.textContent = text;
        noteDetails.style.display = 'block';
        notesTable.style.display = 'none';

        document.getElementById('editHeading').value = heading;
        editingRow = row;
    });

    customizeBtn.addEventListener('click', function() {
        const row = notesBody.querySelector('tr.selected');
        const textCell = row.querySelector('td:nth-child(2)');

        textCell.innerHTML = '<textarea id="noteText" placeholder="Enter Note Text">' + textCell.textContent + '</textarea>';
        customizeBtn.style.display = 'none';

        document.querySelector('.save-btn').addEventListener('click', function() {
            textCell.innerHTML = textCell.querySelector('textarea').value;
            customizeBtn.style.display = 'block';
        });
    });

    goBackBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            noteDetails.style.display = 'none';
            notesTable.style.display = 'table';
        });
    });

    
    for (const data of notesData) {
        addNewNoteToTable(data.heading, data.time);
    }
});