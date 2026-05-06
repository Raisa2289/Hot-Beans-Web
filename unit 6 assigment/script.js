document. getElementById('applyForm').addEventListener('submit', function(event)
{
event.preventDefault();
const name = document.getElementById('name').value;
const position = document.getElementById('paosition').value;
const resultDisplay = document.getElementById('result');

resultDisplay.style.color = 'green';
resultDisplay.style.marginTop = '20px'
resultDisplay.innerText = 'Thank you, $(name)! Your application for $(position) has been recieved'

this.request()
}
)



