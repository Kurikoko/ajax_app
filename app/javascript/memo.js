const buildHtml = (XHR)=> {
  const item = XHR.response.post;
    const html =`
      <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
    // リクエストが成功（レスポンスが返ってくる）
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHtml(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('load', post)