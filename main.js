const commentContainer = document.querySelectorAll('.question');
const questionRight = document.getElementById('clicked');
const box = document.getElementsByClassName('top1-1');

commentContainer.forEach((question, i )  => {
  question.addEventListener('click', () => {
    question.classList.toggle('open');
    box[i].classList.toggle('bolden-question');
  })
})

