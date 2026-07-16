//index.js
// 위 입력칸(클릭 시 12 로 값 변경)
const month = document.querySelector('#month');
function month() {
    month.value = 12 ;
}

let open=document.querySelector('.open');
const flower_bg=document.querySelector('.flower_bg');
console.log(open);
console.log(flower_bg);
// --------------------배경, 탄생화장 없애기
open.style.display='none';
flower_bg.style.display='none';
// --------------------버튼 클릭시 배경, 탄생화장 나타나기
// 무조건 block을 쓰는 게 아닌 그 선택자가 원래 가지고 있는 속성으로 되돌리기
// display:flex가 선택자에 원래 있었다면 자바스크립트도 display=flex
// display가 선택자에 없었다면? 원래 태그 고유 속성에 따라 display=block 또는 display=inline
function openFlower() {
    open.style.display='flex';
    flower_bg.style.display='block';
}
// --------------------배경, 탄생화장 없애기
function closeFlower(){
    open.style.display='none';
    flower_bg.style.display='none';
}