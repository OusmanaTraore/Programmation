function getColor() {
    return "#" + Math.random().toString(16).slice(2,8);
  }

function setBackground() {
    let bgColor = getColor();
    document.body.style.background = bgColor;
}

// function press space 
document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
      setBackground();
    }
  };