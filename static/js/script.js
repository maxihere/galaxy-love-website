function moveNo(){
    const noBtn=document.getElementById("noBtn");
    noBtn.style.position="absolute";
    noBtn.style.left=Math.random()*window.innerWidth+"px";
    noBtn.style.top=Math.random()*window.innerHeight+"px";
}

function celebrate(){
    document.body.innerHTML=`
    <h1 style="font-size:70px;">I LOVE YOU TOO ❤️✨</h1>
    `;
}

function moveNo() {
    const noBtn = document.getElementById("noBtn");

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function celebrate() {
    document.body.innerHTML += `
        <div id="celebration" style="
            position:fixed;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            font-size:50px;
            color:gold;
            text-shadow:0 0 20px gold;
            z-index:999;
        ">
            🎆 YAYYYY I LOVE YOU MORE!!! 💖✨
        </div>
    `;
}
