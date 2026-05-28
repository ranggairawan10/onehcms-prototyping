## [v1.5.1] - 2026-05-27
### Fixed
- Watermark "⚠ DATA SIMULASI — Bukan data aktual Nabati" ditambahkan ke semua 14 halaman HTML
- Version string disinkronkan ke v1.5 di seluruh file (dashboard, index, semua modul, core.js)
- m05-org chart init diperkuat: 3-layer trigger (MutationObserver + tab click + subtab click)
- m05-org wfpTab('dashboard') sekarang selalu memanggil wfpRenderDashboard()
- CHANGELOG v1.5 duplikasi dibersihkan

## [v1.5] - 2026-05-27
### Added
- `/data/` folder: WFP_01 through WFP_08_SAMPLE (8 CSV files, simulation data)
- `/docs/` folder: WFP_MASTER_TEMPLATE_DESIGN.md, PROMPT_WorkforcePlanning_Dashboard.md
- WFP_08 Master Employee Template: 53 columns, 9,000 individual rows
  - Identitas, grade, salary, tenure, severance formula (UU 13/2003)
  - Performance 3 tahun (perf_2024/2023/2022), trend, avg score
  - Sanksi 1 tahun terakhir, PIP status
  - Reduction priority scoring (High/Medium/Low)
  - Separation type (Contract_End/PHK_Sebab/PHK_Efisiensi/MSEP_Eligible)

### Changed
- README updated with folder structure and WFP data guide
- Version bumped to v1.5

## [v1.4] - 2026-05-27
### Changed
- Welcome screen: quick action cards (9 cards) restored, greeting dan sub-copy diperbarui
- Sidebar: ESS-first structure; 12 modul HCMS dikelompokkan dalam "Modul HCMS" (collapsed by default)
- Composer: diubah dari input[type=text] ke textarea dengan auto-resize; Shift+Enter = newline
- Chat engine: sendText() dan scrollBottom() terhubung ke activateChatState()
- Copy seluruh UI diperbarui: HC AI, Fitur suara, helper text, toast messages

### Fixed
- XSS: user input di-escape dengan escHtml() sebelum dirender ke HTML
- Duplikasi komponen BPJS TK - JP (1%) di slip gaji dihapus
- BPJS numbers dimask sebagian (maskBpjs helper)
- Version mismatch antara ZIP, README, changelog, dan core.js
- Sidebar hover-only accessibility: tambah role, tabindex, aria-expanded, aria-label
- Semua button non-submit ditambahkan type="button"
- Input composer dan quick action ditambahkan aria-label

### Added
- Privacy masking untuk BPJS number (maskBpjs)
- Privacy notice microcopy pada data sensitif
- Sidebar: click toggle untuk Modul HCMS (keyboard accessible)
- Topik Cepat di sidebar diperluas: 6 topik (Shift, Absensi, Cuti, Slip Gaji, BPJS, Surat)
- aria-live="polite" pada chat area untuk screen reader

# CHANGELOG  |  'ONE' GLOBAL HCMS UI/UX Guidance Prototype

Format: tanggal, versi, perubahan. Entri terbaru di atas.

## 2026-05-26  |  v1.1  |  Stage 4

Stage 4 - Modul m02 EAM (Employee Administration)
- modules/m02-eam.html : modul high-fidelity, 6 tab.
  Direktori Karyawan, Profil Karyawan 360, Org Chart, Lifecycle,
  Kualitas Data, Feature Checklist.
- Profil karyawan menampilkan struktur 250+ field secara ringkas,
  dengan field sensitif (gaji, bank, NPWP) tersamar.
- Feature Checklist memetakan 15 fitur wajib PRD EAM v1.0.
- ds.css : komponen EAM ditambahkan (profile header, contact tile,
  key-value rows, progress bar, CSS org chart, lifecycle card).
- core.js : m02 dikeluarkan dari PENDING_MODULES.

## 2026-05-26  |  v1.1  |  Stage 3

Stage 3 - Modul m01 RBAC (Role and Access Management)
- modules/m01-rbac.html : modul high-fidelity, 6 tab.
  Ringkasan, Daftar Role, Role Designer, Permintaan Akses, Audit dan
  Compliance, Feature Checklist.
- Feature Checklist memetakan 27 fitur wajib PRD RBAC v1.0 untuk
  verifikasi build warisan Scenario C.
- ds.css : komponen modul ditambahkan (segmented control, stepper,
  alert card, insight row, designer 3-panel, compliance card).
- core.js : logika tab dan segmented control ditambahkan. m01
  dikeluarkan dari daftar PENDING_MODULES sehingga dapat dibuka.
- dashboard.html : atribut data-nav disinkronkan pada item navigasi.

Harmonisasi PRD
- PRD RBAC v1.0 menyebut agen Raya dan nama ONE HRMS. Pada prototype
  diharmonkan ke HC AI dan 'ONE' GLOBAL HCMS sesuai locked config.
- Cakupan negara diselaraskan ke 9 negara baku.

## 2026-05-26  |  v1.1  |  Stage 0, 1, 2

Stage 0 - Foundation
- Struktur folder proyek dibuat.
- assets/css/ds.css : design system penuh dengan Nabati Brand Palette.
- assets/js/core.js : router login, nav state, HC AI chat, toast, modal.
- assets/img/nabati-logo.png : logo Nabati, background transparan.
- README.md dan CHANGELOG.md dibuat.

Stage 1 - Login gate
- index.html : layar login split layout, panel brand dan form.

Stage 2 - HC AI Shell
- dashboard.html : topbar, sidebar 12 modul, tampilan utama chat HC AI.
- Slot integrasi chatbot HC AI disiapkan di core.js.
- Guard navigasi: modul yang belum dibangun memunculkan toast.

Catatan revisi konfigurasi
- Stakeholder direvisi: Frans BS Hutapea sebagai Chief People and
  Transformation Officer, Ahmeta Ferdiansyah sebagai HC Project Manager,
  Azmi Faiq sebagai IT Project Manager. Andy Nugroho tidak dilibatkan.
- Color palette diganti total ke Nabati Brand Palette berbasis merah.
