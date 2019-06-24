let invalid = false;//<>ボタンの管理
let colNo = 0;
let sto;//setTimeout代入
const colors = ["#800080", "#00FFFF", "#00ECFF", "#00FA9A", "#00FF00", "#DAA520", "#A0522D", "#8B0000"];
let allNum = document.getElementById('allNum');
let show = document.getElementById('show');
let pause = document.getElementById('pause');
let play = document.getElementById('play');
let hidari = document.getElementById('hidari');
let migi = document.getElementById('migi');

//li要素作成
/*for(let i = 0; i < 8; i++){
  let numLi = document.createElement("li");
  numLi.setAttribute("id", i);
  //各li要素に色を設定
  numLi.setAttribute("style",`background-color:${colors[i]};`);
  //最初のliだけopacityを1に設定
  if(i === 0){
    numLi.setAttribute("class", "num numOp");
  }else {
    numLi.setAttribute("class", "num");
  }
  //各liに数字を設定
  numLi.innerHTML = [i];
  allNum.appendChild(numLi);
}*/


//li要素作成修正版
colors.forEach((col, b) =>{
  let numLi = document.createElement("li");
  numLi.setAttribute("id", b);
  //各li要素に色を設定
  numLi.setAttribute("style",`background-color:${col};`);
  //最初のliだけopacityを1に設定
  if(b === 0){
    numLi.setAttribute("class", "num numOp");
  }else {
    numLi.setAttribute("class", "num");
  }
  //各liに数字を設定
  numLi.innerHTML = [b];
  allNum.appendChild(numLi);
});

//pauseボタンにdisplay:none;を設定して非表示
pause.className = "butNon";
//最初のカラー設定
show.style.background = colors[colNo];
show.innerHTML = colNo;
play.addEventListener('click', () => {
  invalid = true;
  //playボタンにdisplay:none;を設定して非表示
  play.className = "butNon";
  //pauseボタンのdisplay:none;を外して表示
  pause.className = "but";

  order();
});

pause.addEventListener('click', () => {
  invalid = false;
  //pauseボタンにdisplay:none;を設定して非表示
  pause.className = "butNon";
  //playボタンのdisplay:none;を外して表示
  play.className = "but";
  clearTimeout(sto);
  colNo = show.innerHTML;
});

hidari.addEventListener('click', () => {
  //<ボタン非活性判定
  if(invalid){
    return;
  }
  colNo --;
  if(colNo < 0){
    colNo = 7;
  }
  show.style.background = colors[colNo];
  show.innerHTML = [colNo];
  licolor();

});

migi.addEventListener('click', () => {
  //>ボタン非活性判定
  if(invalid){
    return;
  }
  colNo ++;
  if(colNo === 8){
    colNo = 0;
  }
  show.style.background = colors[colNo];
  show.innerHTML = [colNo];
  licolor();
});

function order(){

  show.style.background = colors[colNo];
  show.innerHTML = [colNo];
  licolor();
  colNo ++;
  if(colNo === 8){
    colNo = 0;
  }
  sto = setTimeout(order, 1000);
}

function licolor(){
  let ch = allNum.children;

  for(let i = 0; i < ch.length; i++){
    console.log(ch[i].innerHTML);
    if( colors[i] === colors[colNo]){
      ch[i].className = "num numOp";
    }else{
      ch[i].className = "num";
    }
  }
}