//index.js
// 위 입력칸(클릭 시 12 로 값 변경)
const month = document.querySelector(#month);
month.value = 12 ;
function month() {
    
}

let open=document.querySelector('.open');
const flower_bg=document.querySelector('.flower_bg');
console.log(open);
console.log(flower_bg);
// --------------------배경, 탄생화장 없애기
open.style.display='none';
flower_bg.style.display='none';
// --------------------버튼 클릭시 배경, 탄생화장 나타나기
function openFlower() {
    open.style.display='block';
    flower_bg.style.display='block';
}
// --------------------배경, 탄생화장 없애기
function closeFlower(){
    open.style.display='none';
    flower_bg.style.display='none';
}