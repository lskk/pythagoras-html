	var arena = new Array();
    var point = new Array(24);
    var player;
    var statePlayer = 1;
    var hasilRandom;
    var id,id2;
    var count;
    var deltaX,deltaY,putar,selisihX,selisihY;
    var degRotate,stateArena = 1,putaran = 1;
    var soal = new Array();
    var levelAngka = new Array();
    var jawabanBenar = 1;
    var statusSoal;
    var intAnimateBenar;
    var count;
    
    function init(){
      initSoal();
      inisiasiTitik();
      inisiasiArena();
      setPlayerPosition(statePlayer);
    }
    
    function initSoal(){
      for(var a = 0; a < 4; a++){
        levelAngka[a] = new Array();
        for(var b = 0; b < 4; b++){
          levelAngka[a][b] = new Array();
        }
      }
      
      levelAngka[0][0][0] = 3;
      levelAngka[0][0][1] = 4;
      levelAngka[0][0][2] = 5;
      
      levelAngka[0][1][0] = 6;
      levelAngka[0][1][1] = 8;
      levelAngka[0][1][2] = 10;
      
      levelAngka[0][2][0] = 9;
      levelAngka[0][2][1] = 12;
      levelAngka[0][2][2] = 15;
      
      levelAngka[0][3][0] = 12;
      levelAngka[0][3][1] = 16;
      levelAngka[0][3][2] = 20;
      
      
      
      levelAngka[1][0][0] = 5;
      levelAngka[1][0][1] = 12;
      levelAngka[1][0][2] = 13;
      
      levelAngka[1][1][0] = 10;
      levelAngka[1][1][1] = 24;
      levelAngka[1][1][2] = 26;
      
      levelAngka[1][2][0] = 15;
      levelAngka[1][2][1] = 36;
      levelAngka[1][2][2] = 39;
      
      levelAngka[1][3][0] = 20;
      levelAngka[1][3][1] = 48;
      levelAngka[1][3][2] = 52;
      
      
      
      levelAngka[2][0][0] = 7;
      levelAngka[2][0][1] = 24;
      levelAngka[2][0][2] = 25;
      
      levelAngka[2][1][0] = 14;
      levelAngka[2][1][1] = 48;
      levelAngka[2][1][2] = 50;
      
      levelAngka[2][2][0] = 21;
      levelAngka[2][2][1] = 72;
      levelAngka[2][2][2] = 75;
      
      levelAngka[2][3][0] = 28;
      levelAngka[2][3][1] = 96;
      levelAngka[2][3][2] = 100;
      
      
      
      levelAngka[3][0][0] = 8;
      levelAngka[3][0][1] = 15;
      levelAngka[3][0][2] = 17;
      
      levelAngka[3][1][0] = 16;
      levelAngka[3][1][1] = 30;
      levelAngka[3][1][2] = 34;
      
      levelAngka[3][2][0] = 24;
      levelAngka[3][2][1] = 45;
      levelAngka[3][2][2] = 51;
      
      levelAngka[3][3][0] = 32;
      levelAngka[3][3][1] = 60;
      levelAngka[3][3][2] = 68;
      
    }
    
    function ButtonOnClick(){
      var random1, random2;
      random1 = (Math.floor(Math.random() * 6) + 1);
      random2 = (Math.floor(Math.random() * 6) + 1);
      
      hasilRandom = (Math.floor(Math.sqrt(random1*random1 + random2*random2)));
      
      document.getElementById("text").innerHTML = "Hasil Random : " + hasilRandom;
      
      window.location.href="#popup1";
      document.getElementById("soal").innerHTML = "Sebuah segitiga dengan panjang " + random1 + " dan tinggi " + random2 + " memiliki kemiringan sebesar ... ";
      
      var randomJawaban = (Math.floor(Math.random() * 3));
      if(randomJawaban == 0){
        document.getElementById("jawaban0").innerHTML = hasilRandom ;
        document.getElementById("jawaban1").innerHTML = hasilRandom + 1;
        document.getElementById("jawaban2").innerHTML = hasilRandom + 2;
        jawabanBenar = 0;
      }else if(randomJawaban == 1){
        document.getElementById("jawaban0").innerHTML = hasilRandom - 1;
        document.getElementById("jawaban1").innerHTML = hasilRandom ;
        document.getElementById("jawaban2").innerHTML = hasilRandom + 1;
        jawabanBenar = 1;
      }else if(randomJawaban == 2){
        document.getElementById("jawaban0").innerHTML = hasilRandom - 2;
        document.getElementById("jawaban1").innerHTML = hasilRandom - 1;
        document.getElementById("jawaban2").innerHTML = hasilRandom ;
        jawabanBenar = 2;
      }
      
      statusSoal = 0;
      //move();
    }

    function movehalus(){
      clearInterval(id2);
      if(count > 0){
        player = document.getElementById("player");
        player.style.left = parseInt(player.style.left)-deltaX+'px';
        player.style.top = parseInt(player.style.top)-deltaY+'px';
        if(StateArena == 2)
        player.style.transform = 'rotate('+ 0 + degRotate*(11-count) +'deg)';
        if(StateArena == 3)
        player.style.transform = 'rotate('+ (90 + degRotate*(11-count)) +'deg)';
        if(StateArena == 1)
        player.style.transform = 'rotate('+ (216 + degRotate*(11-count)) +'deg)';
        count--;
        id2 = setInterval(movehalus, 100);
      }
    }
    
    function move(){
      var tempDeg;
      clearInterval(id);
      if(hasilRandom > 0){
        deltaX = getXPlayer(statePlayer);
        deltaY = getYPlayer(statePlayer);
        tempDeg = getStateArena(statePlayer);
        statePlayer +=1;
        if(statePlayer > 24){
          statePlayer-=24;
        }
        
        deltaX -= getXPlayer(statePlayer);
        deltaY -= getYPlayer(statePlayer);
        
        deltaX = deltaX/10;
        deltaY = deltaY/10;
        degRotate = getRotate(tempDeg,getStateArena(statePlayer));
        degRotate = degRotate/10;
        count = 10;
        
        movehalus();
        hasilRandom--;
        id = setInterval(move, 1000);
        }else{
          setPlayerPosition(statePlayer);
          window.location.href="#popup1";
          setSoal();
        }
    }
    
    function animateBenar(){
      clearInterval(intAnimateBenar);
      if(count > 0){
        document.getElementById("benar").style.visibility = "visible";
        document.getElementById("hitam").style.visibility = "visible";
        count--;
        intAnimateBenar= setInterval(animateBenar, 1000);
      }else{
        document.getElementById("benar").style.visibility = "hidden";
        document.getElementById("hitam").style.visibility = "hidden";
      }
    }
    
    function animateSalah(){
      clearInterval(intAnimateBenar);
      if(count > 0){
        document.getElementById("salah").style.visibility = "visible";
        document.getElementById("hitam").style.visibility = "visible";
        count--;
        intAnimateBenar= setInterval(animateSalah, 1000);
      }else{
        document.getElementById("salah").style.visibility = "hidden";
        document.getElementById("hitam").style.visibility = "hidden";
      }
    }
    
    
    function cekJawaban(a){
      if(jawabanBenar == a){
        count = 3;
        animateBenar();
        if(statusSoal == 0){
          document.getElementById("acak").style.visibility = "hidden";
          move();
        }else{
          document.getElementById("acak").style.visibility = "visible";
        }
      }
      else{
        count = 3;
        animateSalah();
        document.getElementById("acak").style.visibility = "visible";
      }
    }
    
    function setSoal(){   
      var randomKesulitan = (Math.floor(Math.random() * 10));
      var tipe;
      
      if(putaran == 1){
        if(randomKesulitan < 6)
          tipe = 0;
        else if(randomKesulitan < 10)
          tipe = 1;
      }
      
      if(putaran == 2){
        if(randomKesulitan < 5)
          tipe = 0;
        else if(randomKesulitan < 8)
          tipe = 1;
        else if(randomKesulitan < 10)
          tipe = 2;
      }
      
      if(putaran == 3){
        if(randomKesulitan < 4)
          tipe = 0;
        else if(randomKesulitan < 7)
          tipe = 1;
        else if(randomKesulitan < 9)
          tipe = 2;
        else if(randomKesulitan < 10)
          tipe = 3;
      }
      
      var randomSoal = (Math.floor(Math.random() * 4));
      var randomJadiSoal = (Math.floor(Math.random() * 3));
      var jawaban;
      
      if(randomJadiSoal == 0){
        //document.getElementById("soal").innerHTML = "panjang " + levelAngka[tipe][randomSoal][0] + " lebar " + levelAngka[tipe][randomSoal][1] +" miringnya berapa ???";
        document.getElementById("soal").innerHTML = miring(levelAngka[tipe][randomSoal][0],levelAngka[tipe][randomSoal][1]);
        jawaban = levelAngka[tipe][randomSoal][2];
      }else if(randomJadiSoal == 1){
        //document.getElementById("soal").innerHTML = "panjang " + levelAngka[tipe][randomSoal][0] + " miring" + levelAngka[tipe][randomSoal][2] +" lebarnya berapa ???";
         document.getElementById("soal").innerHTML = lebar(levelAngka[tipe][randomSoal][0],levelAngka[tipe][randomSoal][2]);
        jawaban = levelAngka[tipe][randomSoal][1];
      }else if(randomJadiSoal == 2){
        //document.getElementById("soal").innerHTML = "miring " + levelAngka[tipe][randomSoal][2] + " lebar " + levelAngka[tipe][randomSoal][1] +" panjangnya berapa ???";
         document.getElementById("soal").innerHTML = panjang(levelAngka[tipe][randomSoal][1],levelAngka[tipe][randomSoal][2]);
        jawaban = levelAngka[tipe][randomSoal][0];
      }
      
      var randomJawaban = (Math.floor(Math.random() * 3));
      if(randomJawaban == 0){
        document.getElementById("jawaban0").innerHTML = jawaban;
        document.getElementById("jawaban1").innerHTML = jawaban + 1;
        document.getElementById("jawaban2").innerHTML = jawaban + 2;
        jawabanBenar = 0;
      }else if(randomJawaban == 1){
        document.getElementById("jawaban0").innerHTML = jawaban - 1;
        document.getElementById("jawaban1").innerHTML = jawaban;
        document.getElementById("jawaban2").innerHTML = jawaban + 1;
        jawabanBenar = 1;
      }else if(randomJawaban == 2){
        document.getElementById("jawaban0").innerHTML = jawaban - 2;
        document.getElementById("jawaban1").innerHTML = jawaban - 1;
        document.getElementById("jawaban2").innerHTML = jawaban ;
        jawabanBenar = 2;
      }
      
      document.getElementById("area").innerHTML = putaran + " - " + tipe + " - " + randomSoal + " - " + randomJadiSoal + " - " + jawaban;
      
      statusSoal = 1;
      
    }
    
    function miring(panjang,lebar){
      var pilihSoal = (Math.floor(Math.random() * 3));
      if(pilihSoal == 0){
        return "<div id ='pohon'></div></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>jika sebuah pohon memiliki tinggi "+ lebar +" m dan panjang bayangan pohon tersebut adalah "+panjang+" m, maka jarak terdekat antara ujung bayangan dengan ujung pohon adalah .... m";
      }
      else if(pilihSoal == 1){
        return "diketahui triple pitagoras x,y,z. dimana nilai x = "+panjang+" dan y = "+lebar+", maka nilai z adalah";
      }
      else if(pilihSoal == 2){
        return '<div id ="segitigasukusiku"></div></br></br></br></br></br></br></br></br></br></br></br></br></br></br> jika diketahui panjang AC adalah '+ panjang +' cm dan panjang AB adalah '+lebar+' cm, maka panjang BC adalah .... cm';
      }
    }
    
    function lebar(panjang,miring){
      var pilihSoal = (Math.floor(Math.random() * 3));
      if(pilihSoal == 0){
        return "<div id ='pohon'></div></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>jika sebuah pohon memiliki panjang bayangan "+ panjang +" m dan jarak terdekat antara ujung bayangan dengan ujung pohon adalah "+ miring +" m, maka tinggi pohon adalah .... m";
      }
      else if(pilihSoal == 1){
        return "diketahui triple pitagoras x,y,z. dimana nilai y = "+panjang+" dan z = "+miring+", maka nilai x adalah";
      }
      else if(pilihSoal == 2){
        return '<div id ="segitigasukusiku"></div></br></br></br></br></br></br></br></br></br></br></br></br></br></br> jika diketahui panjang AC adalah '+panjang+' cm dan panjang BC adalah '+miring+' cm, maka panjang AB adalah .... cm';
      }
    }
    
    function panjang(lebar,miring){
      var pilihSoal = (Math.floor(Math.random() * 3));
      if(pilihSoal == 0){
        return "<div id ='pohon'></div></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>jika sebuah pohon memiliki tinggi "+ lebar +" m dan jarak terdekat antara ujung bayangan dengan ujung pohon adalah "+miring+" m, maka panjang bayangan pohon tersebut adalah .... m";
      }
      else if(pilihSoal == 1){
        return "diketahui triple pitagoras x,y,z. dimana nilai x = "+lebar+" dan z = "+miring+", maka nilai y adalah";
      }
      else if(pilihSoal == 2){
        return '<div id ="segitigasukusiku"></div></br></br></br></br></br></br></br></br></br></br></br></br></br></br> jika diketahui panjang AB adalah '+lebar+' cm dan panjang BC adalah '+miring+' cm, maka panjang AC adalah .... cm';
      }
    }
    
    
    function inisiasiTitik(){
      for (var i = 1; i <= 24; i++) {
        point[i] = new Array(2);
      }
      var x = 800;
      var y = 650;
      var a = 90;
      point[1][1] = x;
      point[1][2] = y;
      
      x = x - a;
      point[2][1] = x;
      point[2][2] = y;
      
      x = x - a;
      point[3][1] = x;
      point[3][2] = y;
      
      x = x - a;
      point[4][1] = x;
      point[4][2] = y;
      
      x = x - a;
      point[5][1] = x;
      point[5][2] = y;
      
      x = x - a;
      point[6][1] = x;
      point[6][2] = y;
      
      x = x - a;
      point[7][1] = x;
      point[7][2] = y;
      
      x = x - a;
      point[8][1] = x;
      point[8][2] = y;
      
      x=x-a-10;
      y=y-a-10;
      point[9][1] = x;
      point[9][2] = y;
      
      y=y-a;
      point[10][1] = x;
      point[10][2] = y;
      
      y=y-a;
      point[11][1] = x;
      point[11][2] = y;
      
      y=y-a;
      point[12][1] = x;
      point[12][2] = y;
      
      y=y-a;
      point[13][1] = x;
      point[13][2] = y;
      
      y=y-a;
      point[14][1] = x;
      point[14][2] = y;
      
      x = x + 120;
      y=y-60;
      point[15][1] = x;
      point[15][2] = y;
      
      a = 72;
      b = 54;
      x = x + a;
      y=y+b;
      point[16][1] = x;
      point[16][2] = y;
      
      x = x + a;
      y=y+b;
      point[17][1] = x;
      point[17][2] = y;
      
      x = x + a;
      y=y+b;
      point[18][1] = x;
      point[18][2] = y;
      
      x = x + a;
      y=y+b;
      point[19][1] = x;
      point[19][2] = y;
      
      x = x + a;
      y=y+b;
      point[20][1] = x;
      point[20][2] = y;
      
      x = x + a;
      y=y+b;
      point[21][1] = x;
      point[21][2] = y;
      
      x = x + a;
      y=y+b;
      point[22][1] = x;
      point[22][2] = y;
      
      x = x + a;
      y=y+b;
      point[23][1] = x;
      point[23][2] = y;
      
      x = x + a;
      y=y+b;
      point[24][1] = x;
      point[24][2] = y;
    }
    
    function setPlayerPosition(i){
      player = document.getElementById("player");
      if(i < 9){
        player.style.left = point[i][1]+5+'px';
        player.style.top = point[i][2]+10+'px';
        player.style.transform = 'rotate(0deg)';
      }else if(i < 15){
        player.style.left = point[i][1]+10+'px';
        player.style.top = point[i][2]+15+'px';
        player.style.transform = 'rotate(90deg)';
      }else{
        player.style.left = point[i][1]+5+'px';
        player.style.top = point[i][2]+15+'px';
        player.style.transform = 'rotate(216deg)';
      }
    }

    
    function getXPlayer(i){
      if(i < 9){
        return point[i][1]+5;
      }else if(i < 15){
        return point[i][1]+10;
      }else{
        return point[i][1];
      }
    }
    
    function getYPlayer(i){
      if(i < 9){
        return point[i][2]+10;
      }else if(i < 15){
        return point[i][2]+10;
      }else{
        return point[i][2]+5;
      }
    }
    
    function getXSelisih(){
      if(i < 9){
        return -5;
      }else if(i < 15){
        return -10;
      }else{
        return -5;
      }
    }
    
    function getYSelisih(){
      if(i < 9){
        return -10;
      }else if(i < 15){
        return -15;
      }else{
        return -15;
      }
    }
    
    function getStateArena(i){
      if(i < 9){
        StateArena = 1;
        return 1;
      }else if(i < 15){
        StateArena = 2;
        return 2;
      }else{
        StateArena = 3;
        return 3;
      }
    }
    
    function getRotate(i,j){
      if(i == 1 && j == 2)
        return 90;
      
      if(i == 2 && j == 3)
        return 126;
      
      if(i == 3 && j == 1){
    putaran++;
        return 144;
    }
    }
    
    function inisiasiArena(){
      $(document).ready(function () {
        var i = 1;
        while (i <= 24) {
          $("#board").append("<div id='arena"+ i + "'class='arenas' ></div>");
          i++;
        }
      });
    
     for (var i = 1; i <= 8; i++) {
      arena[i] = document.getElementById("arena" + i);
      arena[i].style.left = parseInt(point[i][1])+'px';
      arena[i].style.top = parseInt(point[i][2])+'px';
      arena[i].style.transform = 'rotate(0deg)';
     }
    
    for (var i = 9; i <= 14; i++) {
      arena[i] = document.getElementById("arena" + i);
      arena[i].style.left = parseInt(point[i][1])+'px';
      arena[i].style.top = parseInt(point[i][2])+'px';
      arena[i].style.transform = 'rotate(90deg)';
    }
    
    for (var i = 15; i <= 24; i++) {
      arena[i] = document.getElementById("arena" + i);
      arena[i].style.left = parseInt(point[i][1])+'px';
      arena[i].style.top = parseInt(point[i][2])+'px';
      arena[i].style.transform = 'rotate(216deg)';
    }
    
    }
    
    
    window.onload = init;