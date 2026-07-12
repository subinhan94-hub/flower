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