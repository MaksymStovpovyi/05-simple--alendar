// time for header
let currentDay = $('#currentDay');
currentDay.text(dayjs().format('dddd MMM D HH:mm:ss'));

let timer = setInterval(function() {
  currentDay.text(dayjs().format('dddd MMM D HH:mm:ss'));
}, 1000);

// color of time-block 
  for ( let i = 0; i < 24; i++) {
  
    let timeList = $('.container-fluid').children().eq(i).children().eq(0)[0].textContent.substr(0, 2);
    timeList = Number(timeList);
    
    let time = dayjs().format('HH');
    time = Number(time);
  
    if (timeList < time) {
      $('.container-fluid').children().eq(i)[0].classList.toggle("past");
  
    } else if (timeList > time) {
      $('.container-fluid').children().eq(i)[0].classList.toggle("future");
  
    } else {
      $('.container-fluid').children().eq(i)[0].classList.toggle("present");
  
    }
  }

// save text
let arrOfLS = [];
if (!localStorage.saveText) { // have't LS
  localStorage.setItem('saveText', JSON.stringify([]));

} else {         
  arrOfLS = JSON.parse(localStorage.getItem('saveText'));
}

let btn = $('.fas');
for (let i = 0; i < 24; i++) {
  btn[i].addEventListener('click', () => {
    let sText = btn[i].parentElement.previousElementSibling.value;
    arrOfLS[i] = sText;
    localStorage.setItem('saveText', JSON.stringify(arrOfLS));
  })
}

let textarea = $('textarea');
for (let i = 0; i < 24; i++) {
  let arrLS = JSON.parse(localStorage.getItem('saveText'));
  if(arrLS[i] != undefined) {
    textarea[i].value = arrLS[i];
  }
}