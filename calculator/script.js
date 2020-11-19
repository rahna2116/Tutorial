
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
buttons.forEach(function(button) 
{
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === '=') 
  {
    // check if the display is not empty inorder to perform calculation
    if (display.value !== '') 
    {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  }
   else if (clickedButtonValue === 'clr') 
  {
    // clear everything on display
    display.value = '';
  }
   else if(clickedButtonValue == 'off')
   {
    let list = document.querySelectorAll("button");
    for (var i = 0; i < list.length; ++i)
    {
    list[i].classList.add('disable');
    }
   } 
  else if(clickedButtonValue == 'on')
  {
    let list = document.querySelectorAll("button");
    for (var i = 0; i < list.length; ++i) 
    {
    list[i].classList.remove('disable');
    }
  }
  else 
  {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}
setInterval(()=>{
    let element  = document.getElementById('one').innerHTML;
    if(element == 1)
    {
        document.getElementById('one').innerHTML = 'one';
        document.getElementById('two').innerHTML = 'two';
        document.getElementById('three').innerHTML = 'three';
        document.getElementById('four').innerHTML = 'four';
        document.getElementById('five').innerHTML = 'five';
        document.getElementById('six').innerHTML = 'six';
        document.getElementById('seven').innerHTML = 'seven';
        document.getElementById('eight').innerHTML = 'eight';
        document.getElementById('nine').innerHTML = 'nine';
        document.getElementById('zero').innerHTML = 'zero';
    }
    else
    {
        document.getElementById('one').innerHTML = '1';
        document.getElementById('two').innerHTML = '2';
        document.getElementById('three').innerHTML = '3';
        document.getElementById('four').innerHTML = '4';
        document.getElementById('five').innerHTML = '5';
        document.getElementById('six').innerHTML = '6';
        document.getElementById('seven').innerHTML = '7';
        document.getElementById('eight').innerHTML = '8';
        document.getElementById('nine').innerHTML = '9';
        ocument.getElementById('zero').innerHTML = '0';
    
    }
},5000);
setTimeout(()=>
{
    document.getElementById('timer').innerHTML=' ';
},4000);





