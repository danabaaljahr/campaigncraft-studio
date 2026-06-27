(() => {
  const en = {
    // Global navigation and auth
    'حملاتي':'My campaigns','المخطط':'Planner','الاستبيانات':'Surveys','عن المشروع':'About',
    'داكن':'Dark','فاتح':'Light','تسجيل الخروج':'Sign out','تسجيل الدخول':'Sign in','إنشاء حساب':'Create account',
    'البريد الإلكتروني':'Email','كلمة المرور':'Password','نسيت كلمة المرور؟':'Forgot password?','الاسم':'Name',
    'المتابعة باستخدام Google':'Continue with Google','أو':'or','حفظ تسجيل الدخول على هذا الجهاز':'Keep me signed in on this device',

    // Surveys hero
    'ابني قرار الحملة على':'Build campaign decisions on','إجابات حقيقية':'real answers',
    'أنشئي استبيانًا، شاركيه مع الجمهور، حلّلي النتائج، ثم طبّقي أهم الاستنتاجات مباشرة على بيانات الحملة وخطتها.':'Create a survey, share it with your audience, analyze the results, then apply the strongest insights directly to your campaign data and plan.',
    'من السؤال إلى القرار':'From question to decision','بناء':'Build','نشر':'Publish','تحليل':'Analyze','تطبيق':'Apply',

    // Dashboard
    'استبياناتي':'My surveys','كل استبيان مرتبط بحملة، ويمكن تحويل نتائجه إلى تحديثات استراتيجية بضغطة واحدة.':'Every survey can be linked to a campaign, and its results can be turned into strategic updates in one click.',
    '+ استبيان جديد':'+ New survey','استبيانات':'Surveys','إجابات':'Responses','منشورة':'Published','استنتاجات مطبقة':'Applied insights',
    'ما عندك استبيانات حتى الآن':'You do not have any surveys yet',
    'ابدئي بقالب جاهز أو أنشئي أسئلتك الخاصة لفهم الجمهور قبل إطلاق الحملة.':'Start with a ready-made template or create your own questions to understand the audience before launching the campaign.',

    // Builder headings and steps
    'إنشاء استبيان جديد':'Create a new survey','اختاري الأسئلة التي ستؤثر فعليًا في الجمهور والرسالة والمنصة، وليس أسئلة عامة بلا فائدة.':'Choose questions that genuinely influence the audience, message, and platform—not generic questions with no practical value.',
    'الإعداد':'Setup','الأسئلة':'Questions','النشر':'Publish','التحليل':'Analysis',

    // Setup form
    'عنوان الاستبيان':'Survey title','وصف مختصر':'Short description','ربط الاستبيان بحملة':'Link survey to a campaign',
    'هدف البحث':'Research objective','لغة الاستبيان':'Survey language','الحد الأدنى المستهدف للإجابات':'Minimum target responses',
    'العربية':'Arabic','الإنجليزية':'English',
    'فهم الجمهور واحتياجاته':'Understand the audience and their needs','اختبار الرسالة الرئيسية':'Test the core message',
    'اختيار المنصة والمحتوى':'Choose the platform and content','فهم السلوك والعوائق':'Understand behavior and barriers',
    'اختبار فكرة أو مفهوم':'Test an idea or concept','قياس الرضا والانطباع':'Measure satisfaction and perception',
    'قوالب سريعة':'Quick templates','تضيف مجموعة أسئلة قابلة للتعديل حسب هدفك.':'Adds a set of editable questions based on your objective.',
    'فهم الجمهور':'Audience understanding','السلوك والعوائق':'Behavior and barriers','اختبار الرسالة':'Message testing','المنصة والمحتوى':'Platform and content',
    'التالي: بناء الأسئلة ←':'Next: Build questions →',

    // Questions step
    'أسئلة الاستبيان':'Survey questions','اكتبي أسئلتك بنفسك، واختاري نوع كل سؤال وخياراته.':'Write your own questions and choose the type and options for each one.',
    '+ إضافة سؤال جديد':'+ Add new question','إضافة مباشرة:':'Quick add:','اختيار واحد':'Single choice','اختيارات متعددة':'Multiple choice',
    'مقياس 1–5':'Scale 1–5','إجابة نصية':'Text answer','→ السابق':'← Previous','حفظ وتجهيز النشر ←':'Save and prepare publishing →',

    // Publish step
    'رابط المشاركة':'Share link','الرابط يفتح نسخة نظيفة للمشارك، وتُحفظ الإجابات مباشرة في قاعدة بيانات Supabase المركزية من أي جهاز. يبقى تصدير JSON خيارًا احتياطيًا فقط.':'The link opens a clean participant view, and responses are saved directly to the central Supabase database from any device. JSON export remains an optional backup only.',
    'نسخ الرابط':'Copy link','معاينة':'Preview','تصدير الاستبيان JSON':'Export survey JSON','استيراد إجابات':'Import responses',
    'نسخ كود التضمين':'Copy embed code','فحص جودة الاستبيان':'Survey quality check','عرض التحليل ←':'View analysis →',

    // Analysis
    'لا توجد إجابات بعد. افتحي المعاينة وأرسلي إجابة تجريبية أو استوردي ملفات إجابات.':'No responses yet. Open the preview and submit a test response or import response files.',
    'إجابة':'Response','نسبة الإكمال':'Completion rate','ثقة القراءة':'Analysis confidence','الشريحة الأبرز':'Top segment','منخفضة':'Low',
    'تحديث الحملة بناءً على الاستبيان':'Update campaign based on survey results',
    'سيتم اقتراح التغييرات المدعومة بالإجابات فقط، مع إبقاء باقي بيانات الحملة كما هي.':'Only changes supported by responses will be suggested, while the rest of the campaign data remains unchanged.',
    'تطبيق الاستنتاجات على الحملة':'Apply insights to campaign','العودة إلى الحملات':'Back to campaigns',

    // Common dynamic survey UI
    'حفظ':'Save','حذف':'Delete','تعديل':'Edit','فتح':'Open','نسخ':'Copy','منشور':'Published','مسودة':'Draft',
    'عدد الإجابات':'Responses','آخر تحديث':'Last updated','بدون حملة مرتبطة':'No linked campaign','غير منشور':'Not published',
    'السؤال':'Question','مطلوب':'Required','اختياري':'Optional','إضافة خيار':'+ Add option','حذف السؤال':'Delete question',
    'عنوان واضح ومحدد':'Clear and specific title','وصف يشرح الغرض للمشارك':'Description explains the purpose to participants',
    'عدد الأسئلة مناسب (5–10)':'Suitable number of questions (5–10)','الخيارات مكتملة':'Options are complete',
    'مكتمل':'Complete','يحتاج مراجعة':'Needs review',

    // Main planner common visible strings
    'ابني حملتك الآن':'Build your campaign now','كيف أستخدم الموقع؟':'How it works','من فكرة بسيطة إلى':'From a simple idea to',
    'حملة قابلة للتنفيذ':'an executable campaign','حملاتي المحفوظة':'Saved campaigns','مركز الاستبيانات':'Survey center',
    '+ حملة جديدة':'+ New campaign','تصدير نسخة احتياطية':'Export backup','استيراد نسخة':'Import backup','الكل':'All',
    'مسودات':'Drafts','قيد التنفيذ':'Active','مكتملة':'Completed','الأرشيف':'Archive',
    'نموذج تخطيط الحملة الكامل':'Complete campaign planner','إنشاء الخطة المتكاملة':'Generate complete plan',
    'مساحة عمل خاصة وآمنة':'Private and secure workspace',
    'كل مستخدم يرى حملاته واستبياناته فقط. رابط الاستبيان العام يبقى متاحًا للمشاركين بدون تسجيل دخول.':'Each user sees only their own campaigns and surveys. Public survey links remain available to participants without signing in.'
  };

  const attrEn = {
    'مثال: كيف يختار أولياء الأمور المحتوى المناسب لأطفالهم؟':'Example: How do parents choose suitable content for their children?',
    'اشرحي للمشارك الهدف والوقت المتوقع للإجابة.':'Explain the purpose and estimated completion time to the participant.',
    'اختيار المظهر':'Choose appearance','Language':'Language','اختيار اللغة':'Choose language'
  };

  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  let applying = false;

  function translateString(value, lang) {
    if (lang === 'ar') return value;
    const trimmed = String(value).trim();
    return en[trimmed] || attrEn[trimmed] || value;
  }

  function translateTextNodes(root, lang) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (['SCRIPT','STYLE'].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const trimmed = source.trim();
      node.nodeValue = lang === 'ar' ? source : (en[trimmed] ? source.replace(trimmed, en[trimmed]) : source);
    });
  }

  function translateAttributes(root, lang) {
    root.querySelectorAll?.('[placeholder],[title],[aria-label]').forEach(el => {
      if (!originalAttrs.has(el)) originalAttrs.set(el, {});
      const cache = originalAttrs.get(el);
      ['placeholder','title','aria-label'].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        if (!(attr in cache)) cache[attr] = el.getAttribute(attr);
        const original = cache[attr];
        el.setAttribute(attr, lang === 'ar' ? original : translateString(original, 'en'));
      });
    });
  }

  function applyDataI18n(root, lang) {
    root.querySelectorAll?.('[data-i18n]').forEach(el => {
      if (!el.dataset.originalText) el.dataset.originalText = el.textContent;
      const custom = {
        auth_secure_workspace:'Private and secure workspace',auth_signin:'Sign in',auth_signup:'Create account',
        auth_name_label:'Name',auth_email:'Email',auth_password:'Password',auth_forgot:'Forgot password?',
        auth_logout:'Sign out',auth_note:'Each user sees only their own campaigns and surveys. Public survey links remain available to participants without signing in.',
        auth_google:'Continue with Google',auth_or:'or',auth_remember:'Keep me signed in on this device'
      };
      el.textContent = lang === 'ar' ? el.dataset.originalText : (custom[el.dataset.i18n] || translateString(el.dataset.originalText, 'en'));
    });
  }

  function apply(lang = 'ar', root = document.body) {
    if (!root || applying) return;
    applying = true;
    const normalized = lang === 'en' ? 'en' : 'ar';
    document.documentElement.lang = normalized;
    document.documentElement.dir = normalized === 'ar' ? 'rtl' : 'ltr';
    document.body?.classList.toggle('lang-en', normalized === 'en');
    translateTextNodes(root, normalized);
    translateAttributes(root, normalized);
    applyDataI18n(root, normalized);
    document.title = normalized === 'en'
      ? (location.pathname.endsWith('surveys.html') ? 'CampaignCraft | Surveys' : 'CampaignCraft | Campaign Planner')
      : (location.pathname.endsWith('surveys.html') ? 'CampaignCraft | مركز الاستبيانات' : 'CampaignCraft | مخطط الحملات');
    applying = false;
  }

  const observer = new MutationObserver(mutations => {
    const lang = localStorage.getItem('campaigncraft_language_v1') || 'ar';
    if (applying) return;
    mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) apply(lang, node);
      else if (node.nodeType === Node.TEXT_NODE && node.parentElement) apply(lang, node.parentElement);
    }));
  });

  document.addEventListener('DOMContentLoaded', () => {
    apply(localStorage.getItem('campaigncraft_language_v1') || 'ar');
    observer.observe(document.body, {childList:true, subtree:true});
  });

  window.CampaignCraftI18n = {apply};
})();
