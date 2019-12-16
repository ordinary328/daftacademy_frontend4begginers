
const hamburger = document.querySelector(".hamburger");

function changeToX(e) {
  e.classList.toggle("switch");
}
hamburger.addEventListener('click', function abc() {
  const menu = document.querySelector(".page-navigation");
  menu.classList.toggle("new")
});


let button = document.querySelectorAll('.button');
let abc = document.querySelectorAll('.texty')
	for (let i = 0; i < 4; i++) {
        result1 = button[i]
        result1.addEventListener('click',() => {
            button[i].style.display = "none"
            abc[i].style.display = "block"
        })
    }

      const emailInput = document.getElementById('email');
      const topicInput = document.getElementById('topic');
      
      document.getElementsByClassName('form__field')[2].addEventListener('click', function (e) {
        e.preventDefault();
      
        var formData = new FormData();
        formData.append('email', emailInput.value);
        formData.append('topic', topicInput.value);
      
        const obj = Object.fromEntries(formData);
        console.log(obj);
      });    
      
      for (let i = 0; i < 9; i += 1) {
        const query = document.getElementsByClassName("gallery__image");
        result1 = query[i]
        result1.addEventListener('mouseleave', () => {
          query[i].classList.toggle("other");
        });
      }
