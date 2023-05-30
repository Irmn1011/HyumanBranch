
// 定義
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");
//追加したいクラスメイを定義この時「openAddName」は定義したい名前
//「open」は追加したい名前
let openAddName = function(el){
    el.classList.toggle("open");
}

// classに追加する”クラスメイ”を追記
btn.addEventListener("click",function(){
    openAddName(nav,btn);
},false);