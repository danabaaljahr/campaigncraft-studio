(() => {
  const dictionary = {
    en: {
      'حملاتي':'My campaigns','المخطط':'Planner','الاستبيانات':'Surveys','عن المشروع':'About',
      'داكن':'Dark','فاتح':'Light','ابني حملتك الآن':'Build your campaign','كيف أستخدم الموقع؟':'How it works',
      'من فكرة بسيطة إلى':'From a simple idea to','حملة قابلة للتنفيذ':'an executable campaign',
      'حملاتي المحفوظة':'Saved campaigns','مركز الاستبيانات':'Survey center','+ حملة جديدة':'+ New campaign',
      'تصدير نسخة احتياطية':'Export backup','استيراد نسخة':'Import backup','الكل':'All','مسودات':'Drafts',
      'قيد التنفيذ':'Active','مكتملة':'Completed','الأرشيف':'Archive','نموذج تخطيط الحملة الكامل':'Complete campaign planner',
      'إنشاء الخطة المتكاملة':'Generate complete plan','تسجيل الخروج':'Sign out','مساحة عمل خاصة وآمنة':'Private and secure workspace',
      'تسجيل الدخول':'Sign in','إنشاء حساب':'Create account','البريد الإلكتروني':'Email','كلمة المرور':'Password',
      'نسيت كلمة المرور؟':'Forgot password?','الاسم':'Name',
      'كل مستخدم يرى حملاته واستبياناته فقط. رابط الاستبيان العام يبقى متاحًا للمشاركين بدون تسجيل دخول.':'Each user sees only their own campaigns and surveys. Public survey links remain available to participants without signing in.',
      'مركز الاستبيانات وأبحاث الجمهور':'Audience research and surveys','استبيان جديد':'+ New survey','إجابات':'Responses','منشورة':'Published',
      'إنشاء استبيان جديد':'Create a new survey','الإعداد':'Setup','الأسئلة':'Questions','النشر':'Publish','التحليل':'Analysis',
      'عنوان الاستبيان':'Survey title','وصف مختصر':'Short description','لغة الاستبيان':'Survey language','حفظ وتجهيز النشر':'Save and prepare publishing',
      'رابط المشاركة':'Share link','نسخ الرابط':'Copy link','معاينة':'Preview','عرض التحليل':'View analysis','العودة إلى الحملات':'Back to campaigns'
    }
  };

  const originalText = new WeakMap();
  function translateTextNodes(root, lang) {
    const map = dictionary[lang] || {};
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (['SCRIPT','STYLE','TEXTAREA','OPTION'].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const trimmed = source.trim();
      if (lang === 'ar') node.nodeValue = source;
      else if (map[trimmed]) node.nodeValue = source.replace(trimmed, map[trimmed]);
    });
  }

  function apply(lang = 'ar') {
    const normalized = lang === 'en' ? 'en' : 'ar';
    document.documentElement.lang = normalized;
    document.documentElement.dir = normalized === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-en', normalized === 'en');
    translateTextNodes(document.body, normalized);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (!el.dataset.originalText) el.dataset.originalText = el.textContent;
      if (normalized === 'ar') el.textContent = el.dataset.originalText;
      else {
        const key = el.dataset.i18n;
        const custom = {
          auth_secure_workspace:'Private and secure workspace',auth_signin:'Sign in',auth_signup:'Create account',auth_name_label:'Name',auth_email:'Email',auth_password:'Password',auth_forgot:'Forgot password?',auth_logout:'Sign out',auth_note:'Each user sees only their own campaigns and surveys. Public survey links remain available to participants without signing in.',auth_google:'Continue with Google',auth_or:'or',auth_remember:'Keep me signed in on this device'
        };
        if (custom[key]) el.textContent = custom[key];
      }
    });
  }

  window.CampaignCraftI18n = {apply};
})();
