# 'ONE' GLOBAL HCMS — Prototype v1.5

**Nabati HCMS 2.0 Project** | UI/UX Guidance Prototype  
Consultant: Rangga Irawan Prasetyo, MBA | Vendor: Ego Eimi LLC

---

## Buka Langsung

Extract ZIP → buka `index.html` di browser.

**Login:**
- Employee ID: `OneHCMSHi-Fi`
- Password: `Nbt-!0hcms$+`

Tidak perlu server. Pure static HTML/CSS/JS.

---

## Push ke GitHub

```bash
git init
git add .
git commit -m "feat: ONE GLOBAL HCMS Prototype v1.5"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

---

## Struktur

```
├── index.html              Login
├── dashboard.html          HC AI ESS Chat
├── modules/                12 modul HCMS
│   ├── m01-rbac.html
│   ├── m02-eam.html
│   ├── m03-ess.html
│   ├── m04-ta.html
│   ├── m05-org.html        Org Design + WFP + WLA ★
│   ├── m06-cnb.html        Comp & Benefit ★
│   ├── m07-pms.html        Performance ★
│   ├── m08-cm.html
│   ├── m09-lms.html
│   ├── m10-od.html
│   ├── m11-ir.html         Industrial Relation ★
│   └── m12-pa.html         People Analytics ★
├── data/                   CSV simulasi per modul
├── docs/                   Spesifikasi WFP & WLA
└── assets/                 CSS, JS, logo
```

★ = modul dengan live charts

---

> Semua data adalah simulasi. Tidak mengikat tech stack vendor.
