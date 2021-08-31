function post (){
  const submit = document.getElementById("submit"); 
  submit.addEventListener("click", (e) => {
    // ブラウザのクリックイベント無効化
    e.preventDefault();
    // フォームのid取得
    const form = document.getElementById("form");
    // idからフォーム要素（フォーム情報）を定数に代入
    const formData = new FormData(form);
    // リクエストオブジェクトを作成、定数に代入
    const XHR = new XMLHttpRequest();
    // リクエスト定数の内容を指定
    XHR.open("POST", "/posts", true);
    // リクエストに対するレスポンスのデータフォーマットを指定
    XHR.responseType = "json";
    // フォームデータのリクエストを送信
    XHR.send(formData)
  });
};

window.addEventListener('load', post)