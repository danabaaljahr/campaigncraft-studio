# ربط الاستبيانات بقاعدة بيانات Supabase المجانية

> هذه الخطوات تجعل إجابات المشاركين تصل إلى قاعدة بيانات مركزية من أي جهاز بدل حفظها في متصفح المشارك فقط.

## 1) إنشاء المشروع
1. افتحي Supabase وأنشئي مشروعًا جديدًا على الخطة المجانية.
2. من **Project Settings → API** انسخي `Project URL` و`anon publishable key`.
3. لا تضعي `service_role key` داخل ملفات GitHub نهائيًا.

## 2) إنشاء جدول الإجابات
نفذي هذا الكود في **SQL Editor**:

```sql
create table public.survey_responses (
  id uuid primary key default gen_random_uuid(),
  survey_id text not null,
  answers jsonb not null,
  submitted_at timestamptz not null default now()
);

alter table public.survey_responses enable row level security;

create policy "public can submit survey responses"
on public.survey_responses
for insert
to anon
with check (true);
```

هذه السياسة تسمح بالإرسال فقط، ولا تسمح للجمهور بقراءة الإجابات.

## 3) قراءة النتائج لصاحبة الموقع
للحفاظ على خصوصية الإجابات، استخدمي تسجيل الدخول في Supabase Auth ثم أضيفي سياسة قراءة للمستخدم المسجل فقط:

```sql
create policy "authenticated owner can read responses"
on public.survey_responses
for select
to authenticated
using (true);
```

لنسخة أقوى لاحقًا، أضيفي `owner_id` واربطي كل استبيان بحساب صاحبته بدل السماح لكل مستخدم مسجل بقراءة كل النتائج.

## 4) الربط من JavaScript
أضيفي مكتبة Supabase قبل ملف `survey-public.js`:

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  window.SUPABASE_URL = 'YOUR_PROJECT_URL';
  window.SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';
</script>
```

ثم عند إرسال الاستبيان:

```js
const client = supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
const { error } = await client.from('survey_responses').insert({
  survey_id: survey.id,
  answers
});
if (error) throw error;
```

## مهم
- `anon key` مصمم للاستخدام في المتصفح عندما تكون RLS مفعلة.
- لا ترفعي `service_role key` إلى GitHub.
- أضيفي إشعار موافقة وبيان خصوصية قبل جمع معلومات شخصية.
