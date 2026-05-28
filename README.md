# 'ONE' GLOBAL HCMS  |  UI/UX Guidance Prototype

Nabati HCMS 2.0 Project  |  Prototype panduan UI/UX untuk tim developer Ego Eimi LLC.

Status: LENGKAP. 12 modul, login gate, dan dashboard HC AI shell selesai dibangun.

## Cara membuka

Buka file `index.html` lewat double click di browser apa pun. Tidak perlu server.
Seluruh folder harus tetap utuh karena file saling merujuk lewat relative path.

Catatan: membuka satu file modul secara terpisah di panel preview akan tampak
rusak karena file tidak dapat menjangkau folder `assets`. Ini wajar untuk proyek
multi-file. Cara benar: unduh ZIP, ekstrak seluruh folder, lalu buka index.html.

## Alur

1. `index.html`  : login gate. Klik Masuk ke Sistem untuk lanjut.
2. `dashboard.html`  : HC AI Shell. Tampilan utama berupa chat HC AI.
   Panel navigasi kiri memuat 12 modul, seluruhnya aktif dan dapat diklik.
3. `modules/`  : satu file HTML per modul.

## Daftar modul

| Modul | File | Tipe | Status |
| --- | --- | --- | --- |
| Foundation | index.html, dashboard.html | Shell | Selesai v1.5 |
| m01 RBAC | modules/m01-rbac.html | Modul warisan, feature checklist | Selesai |
| m02 EAM | modules/m02-eam.html | Modul warisan, feature checklist | Selesai |
| m03 ESS | modules/m03-ess.html | Modul warisan, feature checklist | Selesai |
| m04 TA | modules/m04-ta.html | Spec UI target | Selesai |
| m05 ORG | modules/m05-org.html | Modul warisan, feature checklist | Selesai |
| m06 CNB | modules/m06-cnb.html | Spec UI target | Selesai |
| m07 PMS | modules/m07-pms.html | Spec UI target | Selesai |
| m08 CM | modules/m08-cm.html | Spec UI target | Selesai |
| m09 LMS | modules/m09-lms.html | Spec UI target | Selesai |
| m10 OD | modules/m10-od.html | Spec UI target | Selesai |
| m11 IR | modules/m11-ir.html | Spec UI target | Selesai |
| m12 PA | modules/m12-pa.html | Spec UI target | Selesai |

Modul warisan adalah modul yang masuk lingkup Scenario C dan memiliki tab Feature
Checklist. Modul spec UI target adalah target UI baru tanpa tab Feature Checklist.

## Status terhadap vendor

Prototype mengikat: layout, alur navigasi, state variant, label dan copy.
Prototype tidak mengikat: tech stack, struktur database, arsitektur backend.

## Integrasi HC AI

Logika chatbot HC AI yang sebenarnya diintegrasikan pada fungsi `hcAiReply()`
di `assets/js/core.js`. Saat ini fungsi tersebut berisi respons contoh agar
prototype dapat diklik.

Seluruh penyebutan agen AI individual pada PRD asli (Raya, Jane, John, Smith,
Sonya, Maya, Alex) telah dikonsolidasikan menjadi satu label HC AI di seluruh
prototype. Nama sistem dibakukan menjadi 'ONE' GLOBAL HCMS dan cakupan negara
dibakukan menjadi 9 negara.

## Catatan teknis

Prototype tidak memakai localStorage atau sessionStorage. Seluruh state hanya
hidup di memori browser selama sesi berjalan.

Struktur: satu design system di `assets/css/ds.css`, satu file logika di
`assets/js/core.js`, dipakai bersama oleh seluruh halaman.

Disusun oleh Rangga Irawan  |  HCMS Consultant  |  Nabati HCMS 2.0 Project


## Folder Structure

```
ONE-GLOBAL-HCMS-Fixed/
├── dashboard.html              HC AI ESS — main chat interface
├── index.html                  Login page
│
├── modules/                    12 HCMS modules
│   ├── m01-rbac.html           Role & Access Control
│   ├── m02-eam.html            Employee Admin
│   ├── m03-ess.html            Self-Service (ESS)
│   ├── m04-ta.html             Talent Acquisition
│   ├── m05-org.html            Org Design + Workforce Planning ★
│   ├── m06-cnb.html            Compensation & Benefit
│   ├── m07-pms.html            Performance Management
│   ├── m08-cm.html             Career Management
│   ├── m09-lms.html            Learning Management
│   ├── m10-od.html             Org Development
│   ├── m11-ir.html             Industrial Relation
│   └── m12-pa.html             People Analytics ★
│
├── data/                       Simulation data — per-module
│   ├── shared/                 Digunakan lebih dari 1 modul
│   │   ├── WFP_03_Entity_Financial_Summary.csv
│   │   ├── WFP_05_Grade_Structure_Salary.csv
│   │   └── WFP_08_Master_Employee_SAMPLE.csv  (500 baris)
│   ├── m05-org/                Org Design & Workforce Planning
│   │   ├── WFP_01_Headcount_by_Entity_Grade.csv
│   │   ├── WFP_02_Headcount_by_Directorate.csv
│   │   ├── WFP_04_Monthly_HC_Trend.csv
│   │   └── WFP_06_Reduction_Simulation_20pct.csv
│   ├── m06-cnb/                Compensation & Benefit
│   ├── m07-pms/                Performance Management
│   ├── m11-ir/                 Industrial Relation
│   ├── m12-pa/                 People Analytics
│   └── templates/              Upload templates semua modul
│       └── WFP_07_Upload_Template.csv
│
├── docs/                       Specification & prompt documents
│   ├── WFP_MASTER_TEMPLATE_DESIGN.md
│   └── PROMPT_WorkforcePlanning_Dashboard.md
│
└── assets/
    ├── css/ds.css              Design system
    ├── js/core.js              Shared utilities
    └── img/nabati-logo.png
```

## Data Convention

| Prefix | Modul | Keterangan |
|--------|-------|------------|
| WFP_   | m05-org + shared | Workforce Planning |
| CNB_   | m06-cnb | Compensation & Benefit |
| PMS_   | m07-pms | Performance Management |
| IR_    | m11-ir  | Industrial Relation |
| PA_    | m12-pa  | People Analytics (embedded) |

## Full Employee Data (9,000 rows)

File `WFP_08_Master_Employee_Full_9000.csv` (3.7MB) tersedia terpisah.
Upload via: **m05-org → Workforce Planning → Data Management tab**.
Column reference: `docs/WFP_MASTER_TEMPLATE_DESIGN.md`
