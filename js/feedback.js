const togglebtn = document.querySelector('.toggle-btn')
const togglebtnicon = document.querySelector('.toggle-btn p')
const dropdownmenu= document.querySelector('.dropdownmenu')
    togglebtn.onclick = function(){
        dropdownmenu.classList.toggle('open')
    }

/*const container = document.querySelector('.container');
const emoji = document.querySelector('.emoji');
const textarea = document.querySelector('.textarea');
    emoji.addEventListener('click',(e)=>{
        if(e.target.className.includes('emoji'))return;
            textarea.classList.add('textarea--active');
        })*/
        
        function enlarge(emoji) {
            if (emoji.style.fontSize === "40px") {
                emoji.style.fontSize = "1.7rem";
            } else {
                emoji.style.fontSize = "40px";
            }
        }

        function validateForm() {
            // Get the form
            var form = document.getElementById("my-form");
            // Check if all fields are filled
            if (form.checkValidity() === false) {
              // If not, display an error message
              alert("Please fill out all fields!");
              return false;
            }
            // If all fields are filled, display a success message
            alert("Your form has been submitted successfully!");
            
            return true;
          }