const gate=document.getElementById('gate');
if(gate){
  if(sessionStorage.getItem('mx18')==='1') gate.classList.add('hide');
  gate.querySelectorAll('[data-age]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      if(btn.dataset.age==='yes'){sessionStorage.setItem('mx18','1');gate.classList.add('hide');}
      else window.location.href='https://www.google.com';
    });
  });
}
