//基礎文法の学習


//変数 (上書きができる)
let Banana = 'Hello World!';

Banana = 'scratch3年やったけど';

//定数 (上書きができない)
const Tomato = 'いまだに傾向1P載れてないな...';

console.log(Banana);

//配列 (Scratchでいうリスト)
let Tamago = ['そろそろ','別の言語をするべきか？','それとも','傾向1P載ってからやめるべきか？'];

console.log(Tomato);

//console.log(Tamago);

//配列から一つだけの数字を取り出す (この場合は2個目)
console.log(Tamago[1]);

//ループ文(繰り返し)(この書き方はwhile文)
let Loop = 0;
while(Loop < Tamago.length){ //=4
       //(ここに繰り返したいやつを入れる。上のLoop < ～～ は条件)
       console.log(Tamago[Loop]);
      Loop++; //Loop = 5
}

//if/else文(条件分岐)

//【条件を満たしている場合】
if(Tamago.length > 3){
   console.log('慣れた環境から離れるのがこわーい')
}

//【条件を満たしていない場合】
if(Tamago.length > 5){
   console.log('べつにconsoleに出てこないなら書かなくてもいいと思ったんですよ！悪いですか！？')
}

//【条件を満たしていないがelseがついている場合】
if(Tamago.length > 5){
   console.log('慣れた環境から離れるのがこわーい')
} else {
   console.log('でもscratchは飽きたし...')
}

//関数(Scratchでいうブロック定義+いつでも実行)(これは一例→他の書き方もある)
const Nababa = () => {
   //ここに実行したい命令を書く
   if(Tamago.length > 5){
   console.log('あふん')
   } else {
   console.log('そろそろ危機感持たないとかな...')
   }
};

//関数で定義した命令を呼び出す
Nababa();

//引数(定義の形を変える)("arg"の部分を変えれる)

const Nanaba = (arg) => {
   //ここに実行したい命令を書く
   if(Tamago.length > arg){
   console.log('あーでもやる気でない')
   } else {
   console.log('ねみぃ')
   }
};

Nanaba(3);
Nanaba(6);

//オブジェクト(データの塊)
//オブジェクトに関数を入れる
const Object = {
  color: 'Green',
  size: 'small',
  purfume: 'Scratch',
  name: 'shibanugget',
  password: () => {
    console.log('sasugani pasuwa-doha osienaikara!');
  }
};

console.log(Object);

//オブジェクトから特定の情報を取り出す

console.log(Object.color);
console.log(Object.size);
console.log(Object.purfume);
console.log(Object.name);
console.log(Object.password());

//undefinedという表示は気にしなーい

//特殊なオブジェクト
console.log(window); //ウィンドウ全体の情報
console.log(window.innerHeight); //ウィンドウの縦幅
console.log(window.innerWidth); //ウィンドウの横幅
//window.alert('sample'); //ポップアップを呼ぶ (consoleとは関係ない)
console.log(document); //表示しているページ全体のオブジェクト
console.log(document.getElementsByTagName('button')[0]); //documentから特定の情報を取り出す(この場合画面の一個目のボタン)

//event
//addEventListener (引数を2つ指定できる)(1つ目:eventのタイプ)(2つ目:関数)
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  //ここに命令を書く
  window.alert('Javaspriptの講座見ながらConsoleで遊んでます');
});