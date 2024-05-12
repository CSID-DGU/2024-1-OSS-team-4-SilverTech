document.addEventListener("DOMContentLoaded", function() {
  
  let popup = document.getElementById("GreetingPopup");

  // Show popup after 8 seconds
  setTimeout(function() {
      popup.style.display = "block";  // Make the popup visible
      popup.style.opacity = 1;        // Ensure it's fully opaque
  }, 3000);

  var greetings = ["와우~ 반갑습니다!", "우와, 안녕하세요!", "짝짝짝, 환영합니다!"];
  var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]; // Choose a random greeting
  document.getElementById('random-greeting').textContent = randomGreeting; // Display it in the 'greeting' element


  //버튼으로 페이지 이동하기 js
  let FirstTimeButton = document.getElementById("FirstTimeButton");
  let NotFirstTimeButton = document.getElementById("NotFirstTimeButton");

  FirstTimeButton.addEventListener("click", function() {
    window.location.href = 'Camera.html'; // 처음 오신 분들을 위한 페이지로 이동
  });

  NotFirstTimeButton.addEventListener("click", function() {
    window.location.href = 'Camera.html'; // 재방문자를 위한 페이지로 이동
  });
//버튼으로 페이지 이동하기 js


});



function visible(current, total){
    var arr = [];
    for(let k = 0; k< total; k++){
      arr[k] = k+"text";
    }
    var con = document.getElementById(arr[current]);
    for(let j = 0; j<arr.length; j++){
      var hid = document.getElementById(arr[j]);
      hid.style.display = 'none';
    }	
    con.style.display = 'block'; 	
    
  }
  