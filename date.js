const date = new Date(); // 例として現在の日付オブジェクトを使用
const month = date.getMonth() + 1; // getMonth() は 0-11 を返すため + 1
const day = date.getDate();

const date_jp = `${month}月${day}日`;

document.getElementById("date").textContent = date_jp;
