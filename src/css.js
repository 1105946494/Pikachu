const string = `
.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}
/*
 * 首先，需要准备皮卡丘的皮
 */
.skin{
    background: #ffe600;
    min-height: 50vh;
    position: relative;
}
/*
* 接下来，画皮卡丘的鼻子
*/
.nose{
    border:10px solid black;
    border-color: black transparent transparent;
    position: relative;
    border-bottom: none;
    width: 0px;
    height: 0px;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(10deg);
    }
    66%{
        transform: rotate(-10deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: 50% 100%;
animation: wave 300ms infinite linear;
}
/*
* 接下来，画皮卡丘的红圈
*/
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    background:black;
    border-radius: 10px 10px 0px 0px;
}
/*
* 接下来，画皮卡丘的眼睛
*/
.eye{
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background:#2e2e2e;
    border-radius: 50%;
}
/*
* 眼睛里面的珠子
*/
.eye::before{
    content: '';
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 4px;
    top: 2px;
}
/*
* 左眼在左边（废话）
*/
.eye.left{
    transform:translateX(-100px);
}
/*
* 右眼在右边（废话）
*/
.eye.right{
    transform: translateX(100px);
}
.mouth{
width: 200px;
height: 200px;
position: absolute;
left: 50%;
top: 170px;
margin-left: -100px;
}
.mouth .up{
position: relative;
top: -20px;
z-index: 1;
}
.mouth .up .lip{
    background: #ffe600;
    border: 3px solid black;
    height: 30px;
    width: 100px; 
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}
.mouth .up .lip.left{
border-radius: 0 0 0 50px;
transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.left::before{
    right: -6px;
}
.mouth .up .lip.right::before{
    left: -6px;
}
.mouth .down{
height: 180px;
position: absolute;
top: 6px;
width: 100%;
overflow: hidden;
}
.mouth .down .yuan1{
border: 3px solid black;
width: 150px;
height: 10000px;
position: absolute;
bottom: 0;
left: 50%;
margin-left: -75px;
border-radius: 75px/300px;
background: #9b000a;
overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    background:#ff485f;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
/*
* 然后，画皮卡丘的脸
*/
.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 2;
}
/*
* 将脸放到正确的位置
*/
.face.left{
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
}
/*
* 好了，这只皮卡丘送给你
*/`;
export default string;
