(() => {
  const $=id=>document.getElementById(id);
  const SURVEY_KEY='campaigncraft_surveys_v1';
  const decode=s=>JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g,'+').replace(/_/g,'/').padEnd(Math.ceil(s.length/4)*4,'=')))));
  const safe=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const THEME_KEY='campaigncraft_theme_v1';
  const applyTheme=(theme='dark')=>{
    const isLight=theme==='light';
    document.body.classList.toggle('light',isLight);
    document.body.classList.toggle('dark',!isLight);
    document.querySelectorAll('[data-theme-choice]').forEach(btn=>{
      const active=btn.dataset.themeChoice===theme;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  };
  applyTheme(localStorage.getItem(THEME_KEY)||'dark');
  document.querySelectorAll('[data-theme-choice]').forEach(btn=>btn.addEventListener('click',()=>{
    const theme=btn.dataset.themeChoice;
    localStorage.setItem(THEME_KEY,theme);
    applyTheme(theme);
  }));
  let survey,responsePackage;
  try{survey=decode(new URLSearchParams(location.search).get('s')||'');}catch{}
  if(!survey?.questions?.length){$('surveyInvalid').classList.remove('hidden');return;}
  document.documentElement.lang=survey.language||'ar';
  $('surveyFormCard').classList.remove('hidden');$('publicTitle').textContent=survey.title;$('publicDescription').textContent=survey.description||'نقدّر مشاركتك. يستغرق الاستبيان دقائق قليلة.';
  $('publicQuestions').innerHTML=survey.questions.map((q,i)=>`<article class="public-question" data-id="${q.id}"><h3>${i+1}. ${safe(q.text)} ${q.required?'<em>*</em>':''}</h3>${renderInput(q)}</article>`).join('');
  function renderInput(q){
    if(q.type==='text')return `<textarea name="${q.id}" ${q.required?'required':''} placeholder="اكتب إجابتك هنا"></textarea>`;
    if(q.type==='scale')return `<div class="scale-options">${['1','2','3','4','5'].map(v=>`<label><input type="radio" name="${q.id}" value="${v}" ${q.required?'required':''}><b>${v}</b></label>`).join('')}</div>`;
    const type=q.type==='multiple'?'checkbox':'radio';return `<div class="public-options">${q.options.map(o=>`<label class="public-option"><input type="${type}" name="${q.id}" value="${safe(o)}" ${q.required&&type==='radio'?'required':''}><span>${safe(o)}</span></label>`).join('')}</div>`;
  }
  function updateProgress(){const required=survey.questions.filter(q=>q.required),done=required.filter(q=>{const els=[...document.querySelectorAll(`[name="${CSS.escape(q.id)}"]`)];return els.some(e=>e.type==='radio'||e.type==='checkbox'?e.checked:e.value.trim());}).length;const pct=required.length?Math.round(done/required.length*100):100;$('progressText').textContent=`${pct}%`;$('progressBar').style.width=`${pct}%`;}
  $('publicSurveyForm').addEventListener('input',updateProgress);$('publicSurveyForm').addEventListener('change',updateProgress);
  $('publicSurveyForm').onsubmit=e=>{e.preventDefault();const answers={};for(const q of survey.questions){const els=[...document.querySelectorAll(`[name="${CSS.escape(q.id)}"]`)];if(q.type==='multiple')answers[q.id]=els.filter(x=>x.checked).map(x=>x.value);else{const chosen=els.find(x=>x.checked)||els[0];answers[q.id]=chosen?.type==='textarea'?chosen.value.trim():chosen?.value||'';}if(q.required&&(Array.isArray(answers[q.id])?!answers[q.id].length:!answers[q.id])){alert('يرجى الإجابة عن جميع الأسئلة المطلوبة.');return;}}
    responsePackage={id:`response-${Date.now()}-${Math.random().toString(16).slice(2)}`,surveyId:survey.id,survey:{id:survey.id,title:survey.title},answers,submittedAt:new Date().toISOString()};
    try{const list=JSON.parse(localStorage.getItem(SURVEY_KEY))||[],i=list.findIndex(s=>s.id===survey.id);if(i>=0){list[i].responses=list[i].responses||[];list[i].responses.push(responsePackage);list[i].updatedAt=new Date().toISOString();localStorage.setItem(SURVEY_KEY,JSON.stringify(list));}}catch{}
    $('surveyFormCard').classList.add('hidden');$('surveyThanks').classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});
  };
  $('downloadResponse').onclick=()=>{if(!responsePackage)return;const blob=new Blob([JSON.stringify(responsePackage,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`campaigncraft-response-${survey.id}.json`;a.click();URL.revokeObjectURL(a.href);};
  updateProgress();
})();
