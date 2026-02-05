// 1.HTMLの要素（タグ）を取得して、変数に入れる
const countElement = document.getElementById("count"); // 数字が表示される場所
const btnMinus = document.getElementById("btn-minus"); // マイナスボタン
const btnReset = document.getElementById("btn-reset"); // リセットボタン
const btnPlus = document.getElementById("btn-plus"); // プラスボタン
const errorElement = document.getElementById("error-message"); // エラーメッセージの場所を取得

// 2.カウント数を管理する変数を作る
let number = 0;

// 3. ボタンがクリックされた時の動き（イベント）を作る
// プラスボタンが押された時
btnPlus.addEventListener("click", function () {
  number = number + 1; // 数字を1増やす
  countElement.textContent = number; // 画面の数字を更新する
  errorElement.textContent = ""; // エラーメッセージを消す
});

// マイナスボタンが押された時
btnMinus.addEventListener("click", function () {
  if (number > 0) {
    number = number - 1; // 数字を1減らす
    countElement.textContent = number; // 画面の数字を更新する
    errorElement.textContent = ""; // エラーメッセージを消す
  } else {
    // 👇 0の時は減らさずにメッセージを出す
    errorElement.textContent = "0より小さい数は受付不可です";
  }
});

// リセットボタンが押された時
btnReset.addEventListener("click", function () {
  number = 0; // 数字を0にする
  countElement.textContent = number; // 画面の数字を更新する
  errorElement.textContent = ""; // エラーメッセージを消す
});
