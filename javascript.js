var zLightChar = [];

function fOcculting(zOcNo, zOcS) {
  zLightChar = [];

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
console.log("Long flash added");
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

  for (i = 0; i < zFlNo; i++) {
    zLightChar.push(1);
    zLightChar.push(1);
    zLightChar.push(0);
    zLightChar.push(0);
    zFlS = zFlS-0.5;
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

function fUQ(zFlNo, zFlS) {
  zLightChar = [];

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

  for (i = 0; i <= zISOS/2; i++) {
    console.log("tall "+zISOS/2+" i " + i);
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
  var zHtml = '';

  for (i = 0; i < zLightChar.length; i++) {
    if (zLightChar[i] == 1) {
      zHtml += '<div class="square_light"></div>'}
    else {
      zHtml += '<div class="square_dark"></div>'}
  };
  zHtml += "<br><br>"
  
  for (i = 0; i <= Math.ceil(zLightChar.length/8); i++) {
    zHtml += '<div class="verticalline" style="left: ' + Number((i*64)+8) + 'px"></div>';
  }

  for (i = 0; i <= Math.ceil(zLightChar.length/8); i++) {
    zHtml += '<div class="timestamp" style="left: ' + Number((i*64+8)+8) + 'px">' + i + '</div>';
  }

  document.getElementById("lightgrid").innerHTML = zHtml;
};

function OpenTab(evt, cityName) {
  var i, tabcontent, tablinks;

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
