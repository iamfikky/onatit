    // mobile menu toggle
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');
    toggle?.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '12px';
    });

    // gallery filter
    document.querySelectorAll('.filter button').forEach(btn =>{
      btn.addEventListener('click', e=>{
        const f = btn.dataset.filter;
        document.querySelectorAll('#gallery img').forEach(img=>{
          if(f === 'all') img.style.display = '';
          else img.style.display = img.dataset.cat === f ? '' : 'none';
        })
      })
    })