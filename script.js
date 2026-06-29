(function(){
  document.getElementById('yr').textContent=new Date().getFullYear();

  var toggle=document.querySelector('.nav-toggle');
  var nav=document.getElementById('primary-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open);
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      });
    });
    document.addEventListener('click',function(e){
      if(!nav.contains(e.target)&&!toggle.contains(e.target)){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }

  var form=document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var btn=form.querySelector('button[type="submit"]');
      var orig=btn.textContent;
      btn.textContent='Message drafted';
      btn.disabled=true;
      setTimeout(function(){btn.textContent=orig;btn.disabled=false;},3000);
    });
  }

  var links=document.querySelectorAll('a[href^="#"]');
  links.forEach(function(link){
    link.addEventListener('click',function(e){
      var id=link.getAttribute('href').slice(1);
      var target=document.getElementById(id);
      if(target){
        e.preventDefault();
        target.setAttribute('tabindex','-1');
        target.focus({preventScroll:true});
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
})();