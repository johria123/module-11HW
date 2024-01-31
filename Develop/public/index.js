document.addEventListener('DOMContentLoaded', function () {
    const saveNoteBtn = document.querySelector('.save-note');
    const newNoteBtn = document.querySelector('.new-note');
    const clearBtn = document.querySelector('.clear-btn');
    const listGroup = document.getElementById('list-group');
    const titleInput = document.querySelector('.note-title');
    const textarea = document.querySelector('.note-textarea');
  
    // Assuming you have existing notes data
    const existingNotes = [
      {
        title: "Test Title",
        text: "Test text"
      }
      // Add more notes as needed
    ];
  
    // Function to initialize existing notes in the list
    function initializeExistingNotes() {
      existingNotes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = note.title;
  
        listGroup.appendChild(listItem);
      });
    }
  
    // Initialize existing notes when the page loads
    initializeExistingNotes();
  
    saveNoteBtn.addEventListener('click', function () {
      const title = titleInput.value;
      const text = textarea.value;
  
      if (title && text) {
        // Create a new list item and append it to the list group
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = title;
  
        listGroup.appendChild(listItem);
  
        // Clear the form
        titleInput.value = '';
        textarea.value = '';
      }
    });
  
    newNoteBtn.addEventListener('click', function () {
      // Clear the form when the "New Note" button is clicked
      titleInput.value = '';
      textarea.value = '';
    });
  
    clearBtn.addEventListener('click', function () {
      // Clear the form when the "Clear Form" button is clicked
      titleInput.value = '';
      textarea.value = '';
    });
  
    // Example event delegation for handling note item clicks
    listGroup.addEventListener('click', function (event) {
      const target = event.target;
      if (target.tagName === 'LI') {
        // Display the clicked note's title in the form
        titleInput.value = target.textContent;
        // You might want to load the corresponding note's text from your data here
      }
    });
  });