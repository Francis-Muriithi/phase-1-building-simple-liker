// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// Your JavaScript code goes here!
const modal = document.querySelector("#modal");
const message = document.querySelector("#modal-message");
let hearts = document.querySelectorAll(".like");

for (let heart of hearts){
  heart.addEventListener("click", like)
}

function like(e){
  if(e.target.innerText===EMPTY_HEART){
    mimicServerCall()
    .then(() => {
      e.target.innerText= FULL_HEART;
      e.target.classList.toggle('activated-heart');
    })
    .catch(err => {
      modal.classList.toggle('hidden');
      message.innerText = err;
      setTimeout(() => modal.classList.toggle('hidden'), 3000);
    })
  }
  if (e.target.innerText === FULL_HEART){
    e.target.innerText = EMPTY_HEART;
    e.target.classList.toggle('activated-heart');
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 3000);
  });
}
