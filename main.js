  const url = 'https://en.wikipedia.org/w/api.php?action=query&prop=info&titles='

 const btn = document.querySelector('.talk')
const content = document.querySelector('.content')
const d = new Date()
const output = document.getElementById('output')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log ('voice recognition active');
};

recognition.onresult = function (event) {
  console.log(event)
  const current = event.resultIndex
  const text = event.results[current][0]. transcript
  console.log(text)
  content.textContent = text
  
  if(text == "hello"){
    output.innerHTML = "hey!"
  }
  
  if(text == "what is the time"){
    output.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
  }
  if(text == "search for"){
    output.innerHTML = "what do you want to search for?"
    
  }
}; 
btn.addEventListener('click', () => {
  recognition.start();
})

