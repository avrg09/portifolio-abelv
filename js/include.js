async function loadComponent(id,file){const r=await fetch(file);document.getElementById(id).innerHTML=await r.text();}
loadComponent('header','components/header.html');
loadComponent('footer','components/footer.html');
