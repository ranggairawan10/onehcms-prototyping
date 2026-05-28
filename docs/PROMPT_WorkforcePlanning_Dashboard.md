# MASTER PROMPT — Workforce Planning & Headcount Optimization Dashboard
## Nabati HCMS 2.0 Project · 'ONE' GLOBAL HCMS · Module: Org Design
**Prepared by:** Rangga Irawan Prasetyo, MBA — Independent HCMS Consultant  
**Version:** 1.0 · 27 Mei 2026  
**Purpose:** Locked spec prompt untuk build Workforce Planning Dashboard — dapat disimpan, di-reuse, dan menjadi brief resmi untuk Ego Eimi LLC.

---

## PERAN & KONTEKS

Kamu berperan sebagai:
- **OD Expert & HCMS Architect** — merancang struktur data, logika simulasi, dan dashboard
- **Frans BS Hutapea (CPO)** — mengevaluasi apakah dashboard ini cukup tajam untuk keputusan strategis HC
- **Erwin Lesmana (Group CEO)** — mengevaluasi apakah angka yang disajikan cukup untuk pengambilan keputusan bisnis level Group

Bangun dashboard yang memenuhi standar ketiganya sekaligus.

---

## BAGIAN 1 — ENTITAS & STRUKTUR GRUP

### 1.1 Daftar Entitas

| # | Entitas | Kode | Tipe Bisnis | Manufaktur |
|---|---------|------|-------------|------------|
| 1 | Kaldu Sari Nabati Indonesia | KSNI | FMCG Snack | Tidak |
| 2 | Pinus Merah Abadi | PMA | FMCG Distribution | Tidak |
| 3 | Richeese Kuliner Indonesia | RKI | QSR (Quick Service Restaurant) | Tidak |
| 4 | Enerlife China | EL-CN | FMCG Beverage | Tidak |
| 5 | Enerlife India | EL-IN | FMCG Beverage | Ya |
| 6 | Enerlife Malaysia | EL-MY | FMCG Beverage | Tidak |
| 7 | Enerlife Vietnam | EL-VN | FMCG Beverage | Tidak |
| 8 | Enerlife Myanmar | EL-MM | FMCG Beverage | Tidak |
| 9 | Enerlife Thailand | EL-TH | FMCG Beverage | Tidak |
| 10 | Enerlife Philippines | EL-PH | FMCG Beverage | Tidak |
| 11 | Enerlife Cambodia | EL-KH | FMCG Beverage | Tidak |

> **Catatan:** Indonesia (KSNI) memiliki pabrik terpisah yang dikelola oleh entitas manufaktur tersendiri (tidak dimasukkan dalam scope dashboard ini). India punya manufaktur yang diintegrasikan dalam Enerlife India.

---

## BAGIAN 2 — GRADE STRUCTURE

### 2.1 Hierarki Grade Nabati Group

| Grade | Level | Jabatan Representatif | Band |
|-------|-------|----------------------|------|
| 6B | C-Level | CEO, CFO, CHRO, CMO, COO, CTO | Executive |
| 5C | VP | Vice President | Senior Leadership |
| 5B | Senior Manager | Senior Manager | Management |
| 5A | Manager | Manager | Management |
| 4C | Assistant Manager | Assistant Manager | Supervisory |
| 4B | Supervisor / Specialist | Supervisor, Specialist Sr. | Supervisory |
| 4A | Officer | Officer, Specialist | Professional |
| 3C | Senior Staff | Senior Staff, Senior Analyst | Professional |
| 3B | Foreman / Staff | Staff, Foreman, Teknisi Senior | Semi-Professional |
| 3A | Junior Staff | Junior Staff, Teknisi | Entry Level |
| 2C | Contract Employee Sr. | Contract Senior | Contract |
| 2B | Contract Employee | Contract Mid | Contract |
| 2A | Contract Employee Jr. | Contract Junior | Contract |
| 1C | Operator Senior | Operator Senior, Mandor | Operator |
| 1B | Operator | Operator | Operator |
| 1A | General Worker | General Worker, Helper | Operator |

> C-level (6B): hanya 4 orang di luar Group CEO (Group CEO diasumsikan di holding, tidak dimasukkan per-entitas).

---

## BAGIAN 3 — TARGET HEADCOUNT PER ENTITAS

### 3.1 Distribusi Pegawai (Asumsi Awal)

| Entitas | Total HC | Catatan |
|---------|----------|---------|
| KSNI | 1.000 | Non-manufaktur, FMCG |
| PMA | 4.000 | Distribution-heavy, sales force besar |
| RKI | 2.000 | QSR, crew-heavy, turnover tinggi |
| EL-CN | 550 | Terbesar overseas |
| EL-IN | 480 | Ada manufaktur |
| EL-MY | 200 | |
| EL-VN | 180 | |
| EL-MM | 110 | |
| EL-TH | 170 | |
| EL-PH | 160 | |
| EL-KH | 150 | |
| **TOTAL** | **9.000** | |

---

## BAGIAN 4 — STRUKTUR DIVISI PER TIPE BISNIS

### 4.1 KSNI — FMCG (Non-Manufaktur)

**Direktorat Finance & Corporate:**
- Finance & Accounting, Tax & Treasury, Internal Audit, Legal & Compliance, Corporate Secretary

**Direktorat Human Capital:**
- HC Business Partner, Talent Acquisition, Learning & Development, Compensation & Benefit, HR Operations, OD & People Analytics

**Direktorat Supply Chain:**
- PPIC (Production Planning & Inventory Control), Procurement, Logistic & Warehouse, Quality Assurance, Export-Import

**Direktorat Sales & Marketing:**
- National Sales, Key Account Management, Trade Marketing, Brand Management, Digital Marketing, Market Research

**Direktorat IT & Digital:**
- IT Infrastructure, Application Development, Digital Transformation, Data & Analytics

**Direktorat General Affairs:**
- GA & Facility, Corporate Communication, CSR

---

### 4.2 PMA — Sales & Distribution

**Direktorat Sales:**
- Regional Sales (per region), Key Account, Modern Trade, General Trade, E-Commerce

**Direktorat Distribution:**
- Fleet & Transport, Warehouse Operations, Route Planning, Last-Mile Delivery

**Direktorat Finance:**
- Finance, Credit Control, Collection

**Direktorat HC & GA:**
- HC Operations, Recruitment, GA

---

### 4.3 RKI — QSR

**Direktorat Operations:**
- Restaurant Operations (per region/cluster), Kitchen Operations, Quality & Food Safety, Outlet Expansion

**Direktorat Supply Chain:**
- Procurement, Central Kitchen, Logistic

**Direktorat Marketing:**
- Brand & Promo, Digital, Customer Experience

**Direktorat Finance & HC:**
- Finance, HC (Crew Management, Training), GA

---

### 4.4 Enerlife (Semua Negara — Template Standar)

**Direktorat Sales & Distribution:**
- Country Sales, Key Account, Distributor Management, Trade Marketing

**Direktorat Supply Chain:**
- Procurement, Logistic, PPIC (khusus India)

**Direktorat Finance & HC:**
- Finance, HC & Admin, Legal & Compliance (local)

> Enerlife India tambahan: Manufacturing (Production, Maintenance, QC, EHS, Warehouse)

---

## BAGIAN 5 — ASUMSI SALARY PER GRADE (IDR, Indonesia)

### 5.1 Salary Range Indonesia

| Grade | Min (juta IDR) | Max (juta IDR) | Mid-Point | Notes |
|-------|---------------|----------------|-----------|-------|
| 6B | 80 | 150 | 115 | C-Level, all-in |
| 5C | 70 | 100 | 85 | VP |
| 5B | 50 | 70 | 60 | Senior Manager |
| 5A | 25 | 55 | 40 | Manager |
| 4C | 15 | 25 | 20 | Asst. Manager |
| 4B | 10 | 17 | 13.5 | Supervisor/Specialist |
| 4A | 7 | 12 | 9.5 | Officer |
| 3C | 5.5 | 9 | 7.25 | Senior Staff |
| 3B | 4 | 6.5 | 5.25 | Staff/Foreman |
| 3A | 3.2 | 5 | 4.1 | Junior Staff |
| 2C | 3 | 4 | 3.5 | Contract Sr. |
| 2B | 2.8 | 3.5 | 3.15 | Contract Mid |
| 2A | 2.5 | 3.2 | 2.85 | Contract Jr. |
| 1C | 3 | 4.5 | 3.75 | Operator Sr. |
| 1B | 2.5 | 3.5 | 3.0 | Operator |
| 1A | 2.2 | 3.0 | 2.6 | General Worker |

**Benefit tahunan tambahan:** Bonus = 1× gaji pokok/tahun · THR = 1× gaji pokok

### 5.2 Konversi Overseas (Faktor Penyesuaian vs Indonesia)

| Negara | Faktor Salary vs IDR-base |
|--------|--------------------------|
| China | 1.20× |
| India | 0.40× |
| Malaysia | 0.85× |
| Vietnam | 0.35× |
| Myanmar | 0.28× |
| Thailand | 0.65× |
| Philippines | 0.45× |
| Cambodia | 0.30× |

> Semua kalkulasi labor cost dashboard dapat toggle ke IDR atau USD (kurs asumsi: 1 USD = Rp 16.200).

---

## BAGIAN 6 — SIMULASI PENGURANGAN (REDUCTION PLANNING)

### 6.1 Skenario Default

- **Target pengurangan:** 20% total headcount semua entitas
- **Baseline:** Posisi headcount per Januari 2026
- **Timeline:** Juli 2026 – Agustus 2026 (2 bulan)
- **Total target reduction:** ~1.800 orang dari 9.000

### 6.2 Fitur Input Pengurangan

User dapat menginput:

| Field Input | Tipe | Deskripsi |
|-------------|------|-----------|
| Entitas | Dropdown multi-select | Pilih KSNI, PMA, RKI, EL-CN, dll. |
| Direktorat | Dropdown | Filter per direktorat dalam entitas |
| Divisi | Dropdown | Filter per divisi |
| Grade | Checkbox multi-select | Pilih grade yang terdampak |
| Jabatan | Text/dropdown | Nama jabatan spesifik |
| Jumlah pengurangan | Number input | Input langsung jumlah orang |
| Persentase | Slider (0-100%) | Alternatif input via persentase |
| Tanggal efektif | Date picker | Juli atau Agustus 2026 |
| Tipe separation | Dropdown | Resign sukarela, PHK, Contract end, Early retirement |
| Catatan | Textarea | Justifikasi bisnis |

### 6.3 Skenario Planning Berbasis Biaya

User input: **"Saya ingin reduce labor cost $X per bulan"**

Sistem kalkulasi otomatis dan tampilkan opsi:

| Opsi | Grade | Jumlah Orang | Cost Saving/bulan |
|------|-------|-------------|-------------------|
| Opsi A | VP (5C) | -2 | $XXX |
| Opsi B | Manager (5A) | -10 | $XXX |
| Opsi C | Staff (3B) | -50 | $XXX |
| Opsi D | Mix (VP-1, Mgr-3, Staff-20) | -24 | $XXX |

Pengguna dapat **klik pilih opsi** atau **modifikasi manual**.

---

## BAGIAN 7 — DASHBOARD & VISUALISASI

### 7.1 Halaman Utama Dashboard

**Header metrics (KPI cards):**
- Total Headcount Group (sekarang vs Jan 2026)
- Total Labor Cost / bulan (IDR & USD)
- Revenue per Employee (annualized)
- Sales per Employee
- Attrition Rate YTD
- Planned Reduction Progress (% dari target 20%)

**Filter global:**
- Entitas (All / per entitas, multi-select)
- Periode (Jan 2026 – Aug 2026)
- Grade range
- Direktorat

### 7.2 Grafik yang Tersedia

| Chart | Tipe | Interaktivitas |
|-------|------|----------------|
| Headcount Trend | Line chart (Jan-Aug 2026) | Hover detail, klik per entitas |
| Reduction Progress | Stacked bar per entitas | Filter entitas |
| Before vs After | Grouped bar (per grade atau direktorat) | Toggle grade/direktorat |
| Labor Cost Trend | Area chart (IDR/USD toggle) | Hover cost detail |
| Revenue per Employee | Line + bar combo | Benchmark line |
| Grade Distribution | Donut/pie | Klik grade → drill down |
| Headcount per Direktorat | Horizontal bar | Sort by size |
| Separation Type Mix | Pie chart | Klik → detail list |

### 7.3 Tabel Interaktif

- Sortable semua kolom
- Filter per entitas, direktorat, divisi, grade
- Expandable rows (entitas → direktorat → divisi → jabatan)
- Export ke CSV atau Excel
- Color coding: merah = melebihi target reduction, kuning = on-track, hijau = completed

### 7.4 Before vs After Comparison Panel

Tampilkan side-by-side:

| Metric | Jan 2026 (Before) | Aug 2026 (After Sim) | Delta |
|--------|------------------|----------------------|-------|
| Total HC | 9.000 | 7.200 | -1.800 (-20%) |
| Total Labor Cost/bulan | Rp XXX M | Rp XXX M | -Rp XXX M |
| Revenue/Employee | Rp XXX | Rp XXX | +X% |
| Span of Control | X | X | |

---

## BAGIAN 8 — DATA FINANSIAL PENDUKUNG

### 8.1 Data Simulasi Revenue & Sales (Asumsi)

| Entitas | Revenue Tahunan (IDR M) | Sales/bulan (IDR M) |
|---------|------------------------|---------------------|
| KSNI | 8.500.000 | 708.333 |
| PMA | 5.200.000 | 433.333 |
| RKI | 3.800.000 | 316.667 |
| EL-CN | 2.200.000 | 183.333 |
| EL-IN | 1.800.000 | 150.000 |
| EL-MY | 800.000 | 66.667 |
| EL-VN | 650.000 | 54.167 |
| EL-MM | 350.000 | 29.167 |
| EL-TH | 580.000 | 48.333 |
| EL-PH | 520.000 | 43.333 |
| EL-KH | 400.000 | 33.333 |
| **TOTAL** | **24.800.000** | **2.066.667** |

### 8.2 Metrics yang Dihitung Otomatis

- **Labor Cost Ratio** = Total Labor Cost / Revenue × 100%
- **Revenue per Employee** = Revenue Tahunan / Total HC
- **Sales per Employee** = Sales Tahunan / Total HC (Sales-related HC)
- **Labor Productivity Index** = Revenue per Employee / Benchmark Industry

---

## BAGIAN 9 — FITUR DATA MANAGEMENT

### 9.1 Upload CSV

Format CSV yang diterima:
```
entity_code, employee_id, name, grade, directorate, division, position, 
employment_type, effective_date, salary_mid, country, status
```

Validasi otomatis saat upload:
- Grade harus dalam range 1A-6B
- Entity code harus sesuai daftar
- Salary tidak boleh 0 atau negatif
- Tanggal format DD/MM/YYYY

### 9.2 Download CSV

- Download data lengkap semua entitas
- Download per entitas
- Download hasil simulasi (before + after)
- Download reduction plan (format yang bisa diimport ke HRIS)

---

## BAGIAN 10 — DATA TAMBAHAN (OD EXPERT PERSPECTIVE)

Sebagai OD Expert, data berikut **wajib ada** agar analisis workforce planning komprehensif:

| Data Point | Kegunaan | Prioritas |
|-----------|----------|-----------|
| Span of Control per manager | Deteksi over/under-managed teams | High |
| Turnover rate per entitas per grade | Identifikasi area risiko retensi | High |
| Age & tenure distribution | Succession risk, retirement projection | High |
| Skills gap index per divisi | Bukan hanya potong orang tapi potong yang tepat | High |
| Vacancy rate (unfilled positions) | Sebelum potong, lihat posisi kosong dulu | High |
| Contractor vs Permanent ratio | Fleksibilitas workforce | Medium |
| Training hours per employee | Produktivitas & kesiapan pasca-restructuring | Medium |
| Performance rating distribution | Siapa yang dipertahankan? | High |
| Succession readiness (N+1 coverage) | Pastikan critical roles ter-cover | High |
| Cost-to-hire average per grade | Kalkulasi true cost jika harus rekrut lagi | Medium |
| Internal promotion rate | Sinyal kesehatan pipeline talent | Medium |
| Absenteeism rate | Sinyal disengagement pre-restructuring | Low |

---

## BAGIAN 11 — PERSPEKTIF EKSEKUTIF

### 11.1 Frans BS Hutapea (CPO) — Standar Review

Frans akan mempertanyakan:
1. **"Apakah 20% reduction ini sudah berdasarkan analisis skills criticality, bukan hanya angka biaya?"** → Dashboard harus punya layer "Critical Role Protection" — posisi yang tidak boleh dikurangi meskipun cost-saving agresif.
2. **"Bagaimana impact-nya ke morale employee yang tersisa (survivor syndrome)?"** → Tambahkan indikator: Engagement Risk Score per entitas pasca-restructuring.
3. **"Apakah timeline Juli-Agustus realistis dari sisi compliance?"** → Dashboard harus ada compliance calendar per negara (notice period, severance formula per UU lokal).
4. **"Siapa yang approve setiap baris reduction plan?"** → Wajib ada approval workflow dan audit trail per perubahan data.
5. **"Bagaimana kita tahu ini bukan hanya memotong orang yang paling mudah, bukan yang paling tepat?"** → Grade & performance overlay wajib ada.

**Standard Frans:** Setiap angka harus punya sumber data yang bisa diverifikasi. Jangan ada asumsi yang tidak dilabeli sebagai asumsi.

### 11.2 Erwin Lesmana (Group CEO) — Perspektif Bisnis

Erwin akan melihat:
1. **Revenue impact** — apakah reduction ini akan mempengaruhi revenue trajectory? Ada entitas yang jika dipotong terlalu dalam justru mengorbankan sales growth.
2. **Comparative ROI** — reduction $100K labor cost tapi berpotensi kehilangan $500K revenue = keputusan salah.
3. **Speed of execution** — CEO butuh confidence: timeline Juli-Agustus feasible secara hukum dan operasional?
4. **Group-level consolidation view** — Erwin ingin satu angka: "Group labor cost sebagai % revenue, sebelum dan sesudah."
5. **Board reporting readiness** — apakah data ini cukup untuk dilaporkan ke Dewan Komisaris dalam format eksekutif 1 halaman?

**Rekomendasi dashboard untuk CEO level:** Sediakan "Executive Summary View" — 1 halaman, 6 KPI, 2 chart, 1 recommendation bullet.

---

## BAGIAN 12 — OUTPUT YANG DIMINTA

### 12.1 Deliverable

Buat **single-file HTML** (atau ZIP jika multi-file) yang memuat:

1. **Mock data CSV** di-generate otomatis sesuai spec di atas (semua 11 entitas, ~9.000 baris simulasi)
2. **Dashboard halaman utama** dengan semua KPI cards, filter, dan summary charts
3. **Halaman Workforce Planning** — fitur input pengurangan, slider interaktif, scenario planning
4. **Halaman Report** — chart lengkap dengan filter entitas, periode, grade
5. **Halaman Before vs After** — comparison panel
6. **Fitur upload/download CSV**
7. **Executive Summary View** — mode ringkas untuk CEO/CPO

### 12.2 Tech Stack

- **HTML + CSS + JavaScript** (vanilla, tanpa framework berat)
- **Chart.js** untuk semua visualisasi
- **PapaParse** untuk CSV parsing
- **Tidak ada backend** — semua data dalam memory (mock data generate di JS)
- Responsive: desktop-first, tablet-friendly

### 12.3 Kualitas Output

- Data harus **internally consistent**: total per entitas = sum per divisi = sum per grade
- Semua angka salary, headcount, revenue harus **masuk akal** secara bisnis FMCG
- **Tidak ada duplikasi data** — setiap kalkulasi traceable
- Color scheme: Navy (#0F172A), Merah Nabati (#E8001D), Clean white/surface
- Typography: Plus Jakarta Sans atau Inter

---

## CATATAN FINAL

Dokumen ini adalah **locked prompt** untuk sesi build Workforce Planning Dashboard. Setiap iterasi development mengacu ke prompt ini. Perubahan asumsi harus didokumentasikan sebagai amendment dengan tanggal dan alasan perubahan.

Semua data yang digunakan adalah **data simulasi** — tidak mengandung data nyata karyawan Nabati Group. Data real akan diinput melalui fitur upload CSV setelah prototype divalidasi.

---

*Prompt v1.0 · Nabati HCMS 2.0 Project · Rangga Irawan Prasetyo, MBA · 27 Mei 2026*
