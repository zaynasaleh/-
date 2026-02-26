# نشر الموقع (Publish the website)

البناء جاهز. مجلد `dist` يحتوي على الملفات الجاهزة للنشر.

لشرح مبسط جداً للمبتدئين (English + العربية) بدون الحاجة لمعرفة PowerShell، راجع:
`GITHUB_PAGES_BEGINNER.md`

## الطريقة 1: Netlify (مجاني وسهل)

1. ادخل إلى **[netlify.com](https://www.netlify.com)** وسجّل دخولك (أو أنشئ حساباً).
2. اسحب مجلد **`dist`** وأفلته في منطقة "Drag and drop your site output folder" في Netlify.
   - أو: من لوحة Netlify اختر **Add new site → Deploy manually** ثم ارفع محتويات `dist`.
3. بعد الرفع سيعطيك Netlify رابطاً مثل: `https://something-random.netlify.app`.
4. (اختياري) من **Domain settings** يمكنك ربط دومين خاص بك.

## الطريقة 2: Vercel (مجاني وسهل)

1. ادخل إلى **[vercel.com](https://vercel.com)** وسجّل دخولك.
2. اختر **Add New → Project**.
3. إن كان المشروع على GitHub: اختر الريبو ثم اضغط Deploy (Vercel يكتشف الإعداد تلقائياً من `vercel.json`).
4. إن لم يكن على GitHub: ثبّت **Vercel CLI** ثم من مجلد المشروع شغّل:
   ```bash
   npx vercel
   ```
   واتبع التعليمات. عند السؤال عن "Override settings" يمكنك الضغط Enter للمتابعة.
5. سيعطيك Vercel رابطاً مثل: `https://your-project.vercel.app`.

## الطريقة 3: GitHub Pages

1. ارفع المشروع إلى GitHub.
2. في **Settings → Pages** اختر Source: **GitHub Actions** (أو استخدم workflow تعمل بـ `npm run build` وترفع مجلد `dist` إلى فرع `gh-pages`).
3. إن كان الموقع تحت مسار مثل `https://username.github.io/repo-name/`، أضف في `vite.config.ts`:
   ```ts
   base: '/repo-name/',
   ```
   ثم أعد البناء: `npm run build`.

## تجربة الموقع محلياً بعد البناء

قبل الرفع يمكنك معاينة نسخة الإنتاج على جهازك:

```powershell
cd "c:\Users\ashd2023\Downloads\sira platform"
npm run preview
```

ثم افتح الرابط الذي يظهر (غالباً `http://localhost:4173`).
