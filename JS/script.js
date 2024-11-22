let timer;

function startCountdown() {
  const userDate = document.getElementById('target-date').value; 
  const targetDate = new Date(userDate);

  clearInterval(timer);

  timer = setInterval(()=> {
    const currentTime = new Date().getTime(); 
    const timeDifference = targetDate.getTime() - currentTime; 

    if (timeDifference <= 0) {
      clearInterval(timer); 
      alert("Countdown complete!!!!!!");
      document.getElementById('day').innerHTML = 0;
      document.getElementById('hour').innerHTML = 0;
      document.getElementById('minute').innerHTML = 0;
      document.getElementById('second').innerHTML = 0;
    } else {

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); 
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById('day').innerHTML = days;
      document.getElementById('hour').innerHTML = hours;
      document.getElementById('minute').innerHTML = minutes;
      document.getElementById('second').innerHTML = seconds;
      
      document.getElementById('span').innerHTML=`${days} days and ${hours} hours and ${minutes} minutes and ${seconds} seconds left till the mentioned date.... `;
    }
  }, 1000);
}

function clearFun() {
  clearInterval(timer); 
  document.getElementById('target-date').value = ""; 
  document.getElementById('day').innerHTML = ""; 
  document.getElementById('hour').innerHTML = "";
  document.getElementById('minute').innerHTML = "";
  document.getElementById('second').innerHTML = "";
}

window.reload(clearFun());