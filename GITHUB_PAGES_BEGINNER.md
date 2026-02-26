# GitHub Pages for Complete Beginners (No Experience Needed)
# استضافة الموقع على GitHub Pages للمبتدئين تماماً (بدون خبرة)

This guide shows you how to publish this website using **GitHub Pages**.
هذا الدليل يشرح لك نشر هذا الموقع باستخدام **GitHub Pages** خطوة بخطوة.

---

## 1) What you need first
## ١) ماذا تحتاج قبل البدء

### English
- A GitHub account (free): https://github.com
- Your project uploaded to a GitHub repository.
- Basic internet access and a browser.
- You do **not** need PowerShell or terminal for the main method.

### العربية
- حساب GitHub مجاني: https://github.com
- رفع المشروع إلى مستودع (Repository) على GitHub.
- متصفح إنترنت.
- **لا تحتاج** PowerShell أو Terminal في الطريقة الأساسية.

---

## 2) Understand your website URL type (important)
## ٢) افهم نوع رابط موقعك (مهم)

GitHub Pages has 2 common URL styles:
لدى GitHub Pages شكلان شائعان للرابط:

1. **User/Org site**: `https://USERNAME.github.io/`
   - Repository name is exactly `USERNAME.github.io`
   - In this case, use:
     ```ts
     base: '/'
     ```

2. **Project site**: `https://USERNAME.github.io/REPO-NAME/`
   - Most repositories use this.
   - In this case, use:
     ```ts
     base: '/REPO-NAME/'
     ```

### Important for this repository
- This repository is already configured to set the correct base path automatically during GitHub Actions deploy.
- هذا المستودع مهيأ مسبقاً لضبط `base path` تلقائياً أثناء النشر عبر GitHub Actions.

So beginners usually do **not** need to edit `vite.config.ts` manually.
لذلك غالباً **لا تحتاج** تعديل `vite.config.ts` يدوياً.

---

## 3) Main method (No terminal, recommended)
## ٣) الطريقة الأساسية (بدون Terminal - موصى بها)

### English (click-by-click)
1. Go to your repository on GitHub.
2. Confirm this file exists in your repo:
   `.github/workflows/deploy.yml`
3. If it exists, you are ready. If not, ask a developer to add it (or use the advanced section later).
4. Go to **Settings** → **Pages**.
5. Under **Source**, choose **GitHub Actions**.
6. Push your latest changes to `main` (or click **Run workflow** in the **Actions** tab).
7. Open **Actions** tab, wait until workflow is green (success).
8. Your site URL will appear in the workflow result and Pages settings.

### العربية (خطوة بخطوة)
1. افتح المستودع على GitHub.
2. تأكد أن هذا الملف موجود في المستودع:
   `.github/workflows/deploy.yml`
3. إذا كان موجوداً فأنت جاهز. إذا لم يكن موجوداً، اطلب من المطوّر إضافته (أو استخدم القسم المتقدم لاحقاً).
4. اذهب إلى **Settings** ثم **Pages**.
5. في **Source** اختر **GitHub Actions**.
6. ارفع آخر تعديلاتك إلى `main` (أو اضغط **Run workflow** من تبويب **Actions**).
7. افتح تبويب **Actions** وانتظر حتى تظهر علامة النجاح (أخضر).
8. رابط الموقع سيظهر في نتيجة الـ workflow وفي إعدادات Pages.

---

## 4) Optional: local test before publishing
## ٤) اختياري: اختبار محلي قبل النشر

If you want to test on your computer first:
إذا أردت التجربة على جهازك قبل النشر:

```bash
npm install
npm run build
npm run preview
```

Then open the local URL shown in terminal (usually `http://localhost:4173`).
ثم افتح الرابط المحلي الذي يظهر (غالباً `http://localhost:4173`).

---

## 5) What is PowerShell / Terminal? (simple explanation)
## ٥) ما هو PowerShell / Terminal؟ (شرح بسيط)

### English
- **Terminal** is a text window where you run commands.
- On Windows, one terminal app is **PowerShell**.
- It is optional for this guide.
- You can publish using GitHub website only (section 3).

### العربية
- **Terminal** هو نافذة نصية لتشغيل أوامر.
- في ويندوز، من أشهرها **PowerShell**.
- استخدامه في هذا الدليل **اختياري**.
- يمكنك النشر بالكامل من موقع GitHub فقط (القسم ٣).

---

## 6) Project-specific notes for this repository
## ٦) ملاحظات خاصة بهذا المشروع

### English
- This project uses Vite and auto-sets base path during GitHub Actions deploy.
- If someone manually changed base settings, CSS/images/routes may fail after deploy.
- The map page may need `VITE_GOOGLE_MAPS_API_KEY` to work correctly.
- First deploy can take a few minutes.

### العربية
- هذا المشروع مبني بـ Vite ويضبط `base path` تلقائياً أثناء النشر عبر GitHub Actions.
- إذا تم تعديل إعدادات `base` يدوياً بشكل خاطئ قد تتعطل الصور أو التنسيق أو التنقل.
- صفحة الخريطة قد تحتاج `VITE_GOOGLE_MAPS_API_KEY` لتعمل بشكل صحيح.
- أول نشر قد يستغرق عدة دقائق.

---

## 7) Troubleshooting (quick fixes)
## ٧) حل المشاكل الشائعة (سريع)

### Problem: Site opens but looks broken / images missing
- Ensure you are deploying through the existing GitHub Actions workflow.
- If someone edited base settings manually, restore them to project defaults.

### مشكلة: الموقع يفتح لكن الشكل مكسور أو الصور لا تظهر
- تأكد أن النشر يتم عبر GitHub Actions الموجود في المشروع.
- إذا تم تعديل إعدادات `base` يدوياً بشكل خاطئ، أعدها إلى إعدادات المشروع الافتراضية.

### Problem: GitHub Pages shows 404
- Ensure workflow succeeded in **Actions**.
- Ensure **Settings → Pages → Source = GitHub Actions**.

### مشكلة: يظهر 404
- تأكد أن الـ workflow نجح في **Actions**.
- تأكد من **Settings → Pages → Source = GitHub Actions**.

### Problem: Map not loading
- Add `VITE_GOOGLE_MAPS_API_KEY` in your GitHub environment/secrets or build environment.

### مشكلة: الخريطة لا تعمل
- أضف `VITE_GOOGLE_MAPS_API_KEY` في إعدادات البيئة/Secrets الخاصة بالبناء.

---

## 8) Final checklist
## ٨) قائمة التحقق النهائية

- [ ] I know my URL type (User/Org or Project)
- [ ] `.github/workflows/deploy.yml` exists
- [ ] Pages source is set to GitHub Actions
- [ ] Latest changes are pushed to `main` (or workflow was run manually)
- [ ] Latest Actions run is successful
- [ ] Site opens from the Pages URL

- [ ] أعرف نوع الرابط (User/Org أو Project)
- [ ] ملف `.github/workflows/deploy.yml` موجود
- [ ] مصدر Pages مضبوط على GitHub Actions
- [ ] تم رفع آخر التعديلات إلى `main` (أو تشغيل workflow يدوياً)
- [ ] آخر تشغيل في Actions ناجح
- [ ] الموقع يعمل من رابط Pages
