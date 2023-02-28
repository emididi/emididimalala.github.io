window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 3000,
        origin: 'left',
        distance: '100px'
    });
    sr.reveal('.matter', {
        duration: 3000,
        origin: 'left',
        distance: '-100px'
    });
    sr.reveal('.comprasangre', {
        duration: 3000,
        origin: 'left',
        distance: '-100px'
    });
    sr.reveal('.comprasangre2', {
        duration: 3000,
        origin: 'left',
        distance: '-100px'
    });
    sr.reveal('.comprasangre3', {
        duration: 3000,
        origin: 'left',
        distance: '-100px'
    });
    sr.reveal('.fondoobjetivo', {
        duration: 1000,
        origin: 'right',
        distance: '-100px'
    });
    sr.reveal('.posifondo', {
        duration: 1000,
        origin: 'bottom',
        distance: '-100px'
    });
    sr.reveal('.forms', {
        duration: 2000,
        origin: 'left',
        distance: '-100px'
    });
    sr.reveal('.imgcont', {
        duration: 2000,
        origin: 'left',
        distance: '-100px'
    });
    sr.reveal('.imgcont2', {
        duration: 2000,
        origin: 'right',
        distance: '-100px'
    });
    sr.reveal('.imgcont3', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });
    sr.reveal('.imgcont4', {
        duration: 2000,
        origin: 'top',
        distance: '-100px'
    });
    

    sr.reveal('.imgcontik', {
        duration: 2000,
        origin: 'left',
        distance: '-100px'
    });
    sr.reveal('.posifondo', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    });
    sr.reveal('.priori', {
        duration: 2000,
        origin: 'right',
        distance: '-100px'
    });
  
    consoleText(['Un esfuerzo tuyo', 'puede salvar la Vida de otros', 'AYUDALOS'], 'text',['tomato','rebeccapurple','lightblue']);

    function consoleText(words, id, colors) {
      if (colors === undefined) colors = ['#fff'];
      var visible = true;
      var con = document.getElementById('console');
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id)
      target.setAttribute('style', 'color:' + colors[0])
      window.setInterval(function() {
    
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function() {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function() {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount)
          letterCount += x;
        }
      }, 120)
      window.setInterval(function() {
        if (visible === true) {
          con.className = 'console-underscore hidden'
          visible = false;
    
        } else {
          con.className = 'console-underscore'
    
          visible = true;
        }
      }, 400)
    }  

 