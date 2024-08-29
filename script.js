function changeBackgroundColor(button) {
    
    let buttons = document.querySelectorAll(".button .btn");
    buttons.forEach(btn => btn.style.background = "transparent");

    
    button.style.background = "white";
}


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    
    console.log('Card clicked:', card.textContent);
  });
});

function changeBackgroundColor(button) {
  
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
      btn.style.background = "transparent";
      btn.style.color = "black"; 
      btn.classList.remove('active');   });

  
  button.style.background = "blue";
  button.style.color = "white";
  button.classList.add('active'); 
}


document.querySelector('.btn.active').click();


document.getElementById("dropdownButton").addEventListener("click", function() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
      dropdownMenu.style.display = "block";
  } else {
      dropdownMenu.style.display = "none";
  }
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#dropdownButton') && !event.target.closest('.dropdown')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
          }
      }
  }
}


// expanding sidebar

function changeBackgroundColor(button) {
            // Clear the active class from all buttons
            document.querySelectorAll('.menu ul li button').forEach(btn => {
                btn.classList.remove('active');
            });

            
            button.classList.add('active');
        }