(function(){
  function updateLinksForLang(lang){
    try{
      const privacy = document.getElementById('footer-privacy');
      const terms = document.getElementById('footer-terms');
      if(privacy) privacy.href = (lang === 'zh') ? 'privacy_zh.html' : 'privacy.html';
      if(terms) terms.href = (lang === 'zh') ? 'terms_zh.html' : 'terms.html';
      // also update any footer links by text fallback
      document.querySelectorAll('footer a').forEach(a=>{
        const t = a.textContent.trim().toLowerCase();
        if(t.includes('privacy') || t.includes('隐私')) a.href = (lang === 'zh') ? 'privacy_zh.html' : 'privacy.html';
        if(t.includes('terms') || t.includes('服务条款')) a.href = (lang === 'zh') ? 'terms_zh.html' : 'terms.html';
      });
    }catch(e){console.warn('updateLinksForLang error',e)}
  }
  const saved = localStorage.getItem('language') || 'en';
  updateLinksForLang(saved);
  window.addEventListener('storage', (e)=>{ if(e.key==='language') updateLinksForLang(e.newValue || 'en'); });
  window.updateLinksForLang = updateLinksForLang;
})();
