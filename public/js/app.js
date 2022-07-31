document.getElementById("random1").innerHTML = Math.floor(Math.random() * 20) + 15;
document.getElementById("random2").innerHTML = Math.floor(Math.random() * 10) + 1;

function displayBuying1() {
    document.getElementById("random1").innerHTML = Math.floor(Math.random() * 20) + 10;
  }

  function displayBuying2() {
    document.getElementById("random2").innerHTML = Math.floor(Math.random() * 10) + 1;
  }

  setInterval(displayBuying1, 10000);
  setInterval(displayBuying2, 20000);