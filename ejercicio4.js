let saludo=document.getElementById("cartel1");

document.addEventListener("mousemove", e=>


    saludo.style.left=e.clientX+"px";
    saludo.style.top=e.clientY+"py";
    