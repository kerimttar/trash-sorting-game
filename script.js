const items = document.querySelectorAll('.item');
const trash = document.getElementById('main-trash');
const statusText = document.getElementById('status');
const wasteBin = document.getElementById('waste-bin');

let draggedItem = null;

// Drag events for each waste item
items.forEach(item => {
    item.addEventListener('dragstart', () => {
        draggedItem = item;
        item.style.opacity = '0.5';
    });

    item.addEventListener('dragend', () => {
        item.style.opacity = '1';
    });
});

// Trash Can Incidents
trash.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow Drop
    trash.classList.add('hovered');
});

trash.addEventListener('dragleave', () => {
    trash.classList.remove('hovered');
});

trash.addEventListener('drop', () => {
    trash.classList.remove('hovered');
    
    // Throw the trash "into the box" (delete from the screen)
    draggedItem.remove(); 
    
    // Check the status (Is any trash left?)
    if (wasteBin.children.length === 0) {
        statusText.innerText = "CONGRATULATIONS! EVERYTHING IS SPOTLESS 🎉";
        statusText.style.color = "#059669";
        trash.innerText = "♻️ COMPLETED";
    } else {
        statusText.innerText = "Great! One more...";
    }
});