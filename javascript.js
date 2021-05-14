var zLightChar = [];
var zId = null;

function fOcculting(zOcNo, zOcS) {
  zLightChar = [];
  fMovePointer(zOcS);

  for (i = 0; i < zOcNo; i++) {
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zOcS = zOcS-2;
  }

  for (i = 0; i < zOcS; i++) {
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
  }

  var zText;

  switch(zOcNo) {
  case 1:
    zText = "Notasjon: FM";
    break;
  case 2:
    zText = "Notasjon: FM2";
    break;
  case 3:
    zText = "Notasjon: FM3";
    break;
  }

  zText += '<p>Okkulterende lys har en lang periode med fast lys avbrutt av X antall mørkeperioder. '+
  'Det er det mørke/okkulte vi teller. I RS sier vi "Fast med en", "Fast med to" osv., derav notasjonen FM.</p>';
  document.getElementById("TextField").innerHTML = zText;

  fCreateTable();
};

function fFlashing(zFlNo, zFlS) {
  zLightChar = [];
  fMovePointer(zFlS);

  var zText;

  switch(zFlNo) {
  case 1:
    zText = "Notasjon: 1/" + zFlS;
    break;
  case 2:
    zText = "Notasjon: 2/" + zFlS;
    break;
  case 3:
    zText = "Notasjon: 3/" + zFlS;
    break;
  }

  zText += '<p>Blinkende lys har en lang periode med mørke avbrutt av X antall relativt korte blink. '+
  'Det er det antallet blink vi teller. I RS sier vi "En hvert tredje", "To hvert sjette" osv., derav notasjonen 1/3, 2/6 osv.</p>';
  document.getElementById("TextField").innerHTML = zText;

  for (i = 0; i < zFlNo; i++) {
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zFlS = zFlS-2;
  }

  for (i = 0; i < zFlS; i++) {
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
  }

  fCreateTable();
};

function fQ(zFlNo, zFlS, zLFlS) {
  zLightChar = [];

  var zText;

  if (zFlNo > 1 && zLFlS == 0) {
    zText = "Notasjon: Q" + zFlNo + "/" + zFlS; }
  else if (zLFlS == 1 && zFlNo > 1) {
    zText = "Notasjon: Q" + zFlNo + " + LFl1/" + zFlS;
  }
  else {
    zText = "Notasjon: Q";
  }

  zText += '<p>Hurtigblink har en lang periode med mørke avbrutt av X antall korte blink, typisk et halvt sekund. '+
  'Det er antallet blink vi teller. I RS sier vi "Hurtigblink tre hvert tiende", "Hurtigblink ni hvert femtende" osv. '+
  'Disse er typisk brukt på kardinalmerker.</p>';

  document.getElementById("TextField").innerHTML = zText;

  if (zFlS == 0) {
    fMovePointer(1)}
  else {
    fMovePointer(zFlS)
  };

  for (i = 0; i < zFlNo; i++) {
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zFlS = zFlS-1;
  }

  if (zLFlS == 1) {
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zFlS = zFlS-3;
  }

  for (i = 0; i < zFlS; i++) {
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
  }

  fCreateTable();
};

function fVQ(zFlNo, zFlS) {
  zLightChar = [];

  if (zFlS == 0) {
    fMovePointer(0.5)}
  else {
    fMovePointer(zFlS)
  };

  var zText;

  if (zFlNo > 1) {
    zText = "Notasjon: VQ" + zFlNo + "/" + zFlS; }
  else {
    zText = "Notasjon: VQ";
  }

  zText += '<p>Rask hurtigblink har en lang periode med mørke avbrutt av X antall korte blink, typisk et kvart sekund. '+
  'Det er antallet blink vi teller. I RS sier vi "Rask hurtigblink tre hvert femte", "Rask hurtigblink ni hvert tiende" osv. '+
  'Disse er typisk brukt på kardinalmerker.</p>';
  document.getElementById("TextField").innerHTML = zText;

  for (i = 0; i < zFlNo; i++) {
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(0);
    zLightChar.push(0);
    zFlS = zFlS-0.5
  }

  for (i = 0; i < zFlS*8; i++) {
    zLightChar.push(0);
  }

  fCreateTable();
};

function fUQ(zFlNo, zFlS) {
  zLightChar = [];

  if (zFlS == 0) {
    fMovePointer(0.25)}
  else {
    fMovePointer(zFlS)
  };

  var zText;

  switch(zFlNo) {
  case 1:
    zText = "Notasjon: UQ";
    break;
  }

  zText += '<p>Ultra hurtigblink blinker konstant, typisk et åttendedels sekund pr. blink. '+
  'Disse blinker for raskt til å telles, så det vil alltid være kontinuerlig blinking på disse.</p>'

  document.getElementById("TextField").innerHTML = zText;

  for (i = 0; i < zFlNo; i++) {
    zLightChar.push(1);
    zLightChar.push(0);
    zFlS = zFlS-0.25;
  }

  for (i = 0; i < zFlS; i++) {
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
  }

  fCreateTable();
};

function fISO(zISOS) {
  zLightChar = [];
  fMovePointer(zISOS);

  var zText = "Notasjon: ISO" + zISOS;

  zText += '<p>Isofase lys har like lang lys og mørk periode.'+
  'Det er den totale tiden vi måler, så en ISO' + zISOS + ' vil være mørk ' +  Number(zISOS/2) + ' sek. og lys ' + Number(zISOS/2) + ' sek.</p>';
  document.getElementById("TextField").innerHTML = zText;

  for (i = 0; i <= zISOS/2; i++) {
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(1);
    zISOS = zISOS-1;
  }

  for (i = 0; i < zISOS; i++) {
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
    zLightChar.push(0);
  }

  fCreateTable();
};

function fCreateTable() {
  var zHtml = '&nbsp;&nbsp;';

  for (i = 0; i < zLightChar.length; i++) {
    if (zLightChar[i] == 1) {
      zHtml += '<div class="square_light"></div>'}
    else {
      zHtml += '<div class="square_dark"></div>'}
  };
  zHtml += "<br><br>"

  for (i = 0; i <= Math.ceil(zLightChar.length/8); i++) {
    zHtml += '<div class="verticalline" style="left: ' + Number((i*55)+16) + 'px"></div>';
  }

  zHtml += "<div class='test'>"
  for (i = 0; i <= Math.ceil(zLightChar.length/8); i++) {
    zHtml += '<div class="timestamp" style="left: ' + Number((i*56)+14) + 'px">' + i + '</div>';
  }

  zHtml += "</div>"
  document.getElementById("lightgrid").innerHTML = zHtml;
  document.getElementById("PointingArrow").innerHTML ="&#8593";
};

function OpenTab(evt, cityName) {
  var i, tabcontent, tablinks;

  zLightChar = [];
  document.getElementById("lightgrid").innerHTML = "";
  document.getElementById("PointingArrow").innerHTML ="";
  document.getElementById("TextField").innerHTML = "";

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function fMovePointer(iDur) {
  const box = document.querySelector('.PointingArrow');
  let position = 10;

  function animate() {
    position += 1;
    if (position > Number(iDur*56)) {
      position = 0;
    };
    box.style.transform = `translateX(${ position }px)`;

    requestAnimationFrame(animate);

    if(zLightChar[Math.floor(Number(position/7))] == 1) {
      document.getElementById("lys").style.display = "block";
    }
    else {
      document.getElementById("lys").style.display = "none";
    }
  }

  animate();
};

OpenTab(event, 'tabFl')
fFlashing(2,6);
