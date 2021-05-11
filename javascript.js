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

  fCreateTable();
};

function fFlashing(zFlNo, zFlS) {
  zLightChar = [];
  fMovePointer(zFlS);

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
