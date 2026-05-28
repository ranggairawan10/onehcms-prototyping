# WFP Master Employee Template — Column Design
# Nabati HCMS 2.0 · Workforce Planning Module
# Rangga Irawan Prasetyo, MBA · 27 Mei 2026

## TABEL A — IDENTITAS & STATUS KEPEGAWAIAN
| Kolom | Format | Wajib | Contoh | Keterangan |
|-------|--------|-------|--------|------------|
| entity_code | TEXT | ✓ | KSNI | Kode entitas |
| employee_id | TEXT | ✓ | KSNI-001001 | Canonical ID (linked ke SAP) |
| full_name | TEXT | ✓ | Budi Santoso | Nama lengkap sesuai KTP |
| gender | M/F | ✓ | M | |
| birth_date | DD/MM/YYYY | ✓ | 15/03/1988 | Untuk hitung usia & masa pensiun |
| join_date | DD/MM/YYYY | ✓ | 01/06/2015 | Untuk hitung masa kerja |
| permanent_date | DD/MM/YYYY | | 01/06/2016 | Tanggal jadi karyawan tetap |
| employment_type | PKWTT/PKWT/Outsource/Magang | ✓ | PKWTT | |
| contract_end_date | DD/MM/YYYY | | | Diisi kalau PKWT |
| employment_status | Active/Inactive/Suspend | ✓ | Active | |
| country | TEXT | ✓ | Indonesia | |
| work_location | TEXT | ✓ | Bekasi Plant | |
| cost_center | TEXT | ✓ | CC-KSNI-FIN-001 | SAP cost center |

## TABEL B — POSISI & GRADE
| Kolom | Format | Wajib | Contoh | Keterangan |
|-------|--------|-------|--------|------------|
| grade | TEXT | ✓ | 5A | 1A s/d 6B |
| grade_label | TEXT | ✓ | Manager | |
| band | TEXT | ✓ | Management | |
| job_title | TEXT | ✓ | Finance Manager | Jabatan aktual |
| job_family | TEXT | ✓ | Finance | |
| directorate | TEXT | ✓ | Direktorat Finance | |
| division | TEXT | ✓ | Finance & Accounting | |
| department | TEXT | | Tax & Treasury | Sub-divisi jika ada |
| direct_manager_id | TEXT | | KSNI-000501 | Employee ID atasan |
| is_people_manager | Y/N | ✓ | Y | Punya direct report? |
| direct_report_count | INT | | 8 | Jumlah bawahan langsung |
| is_critical_role | Y/N | ✓ | Y | Posisi kritis = tidak boleh dipotong sembarangan |
| successor_ready | Y/N/Partial | | Y | Ada pengganti siap? |
| role_type | Revenue_Generator/Revenue_Enabler/Revenue_Supporter | ✓ | Revenue_Supporter | Untuk sensitivity analysis |

## TABEL C — KOMPENSASI
| Kolom | Format | Wajib | Contoh | Keterangan |
|-------|--------|-------|--------|------------|
| basic_salary | DECIMAL | ✓ | 40000000 | IDR / bulan, gaji pokok |
| fixed_allowance | DECIMAL | | 5000000 | Tunjangan tetap total |
| variable_allowance | DECIMAL | | 2000000 | Rata-rata tunjangan variabel |
| total_monthly_comp | DECIMAL | ✓ | 47000000 | Basic + Fixed + Variable |
| annual_bonus_months | DECIMAL | | 1.0 | Multiplier bonus (1x, 1.5x, dsb) |
| thr_months | DECIMAL | | 1.0 | Biasanya 1x, tapi bisa berbeda |
| tax_status | TK0/TK1/K0/K1/K2/K3 | ✓ | K2 | Status PTKP pajak |
| npwp_status | Y/N | ✓ | Y | Ada NPWP atau tidak (mempengaruhi PPh21) |
| bpjs_kesehatan | Y/N | ✓ | Y | |
| bpjs_jht | Y/N | ✓ | Y | |
| bpjs_jp | Y/N | ✓ | Y | |
| currency | IDR/CNY/INR/MYR/VND/MMK/THB/PHP/KHR | ✓ | IDR | |
| salary_idr_equivalent | DECIMAL | ✓ | 40000000 | Untuk konsolidasi cross-country |

## TABEL D — MASA KERJA & SEVERANCE INPUTS
| Kolom | Format | Wajib | Contoh | Keterangan |
|-------|--------|-------|--------|------------|
| tenure_years | DECIMAL | Auto | 10.9 | Dihitung otomatis dari join_date |
| tenure_months | INT | Auto | 131 | Total bulan |
| uang_pesangon_factor | DECIMAL | Auto | 9 | Bulan, per tabel UU 13/2003 |
| uang_penghargaan_factor | DECIMAL | Auto | 4 | Bulan, per masa kerja |
| uang_penggantian_hak_pct | DECIMAL | Auto | 15% | % dari pesangon + penghargaan |
| severance_base | DECIMAL | Auto | | = basic_salary (bukan total comp) |
| estimated_severance_total | DECIMAL | Auto | | Dihitung dari rumus |
| separation_type_eligible | TEXT | Auto | | PHK/MSEP/Pensiun/Resign |

## TABEL E — PERFORMANCE (3 TAHUN TERAKHIR)
| Kolom | Format | Wajib | Contoh | Keterangan |
|-------|--------|-------|--------|------------|
| perf_2024 | A/B/C/D/E atau 1-5 | ✓ | B | Rating tahun 2024 |
| perf_2023 | A/B/C/D/E atau 1-5 | ✓ | B | Rating tahun 2023 |
| perf_2022 | A/B/C/D/E atau 1-5 | | A | Rating tahun 2022 |
| perf_trend | Improving/Stable/Declining | Auto | Stable | Dihitung dari 3 tahun |
| avg_perf_score | DECIMAL | Auto | 3.5 | Rata-rata numerik |
| last_promotion_date | DD/MM/YYYY | | 01/01/2023 | |
| last_merit_increase_pct | DECIMAL | | 8.0 | % kenaikan gaji terakhir |
| talent_pool | High_Potential/Core/Underperformer/Watch | | Core | Dari talent review |
| succession_for | TEXT | | Senior Finance Manager | Posisi yang disiapkan untuk |

## TABEL F — DISIPLIN & SANKSI (1 TAHUN TERAKHIR)
| Kolom | Format | Wajib | Contoh | Keterangan |
|-------|--------|-------|--------|------------|
| sanksi_count_1yr | INT | ✓ | 0 | Jumlah sanksi 12 bulan terakhir |
| sanksi_level_highest | None/SP1/SP2/SP3/Skorsing | ✓ | None | Sanksi tertinggi |
| absensi_alpha_days_1yr | INT | ✓ | 0 | Hari tanpa keterangan |
| active_pip | Y/N | ✓ | N | Sedang dalam Performance Improvement Plan |
| termination_cause_eligible | Y/N | Auto | N | Layak PHK dengan sebab (pengaruhi pesangon) |

## TABEL G — ATTRITION RISK
| Kolom | Format | Wajib | Contoh | Keterangan |
|-------|--------|-------|--------|------------|
| flight_risk | High/Medium/Low | | Low | Dari exit interview atau survey |
| last_salary_review_date | DD/MM/YYYY | | 01/01/2026 | |
| market_salary_ratio | DECIMAL | | 0.95 | Gaji vs median pasar (< 1 = di bawah pasar) |
| retention_flag | Y/N | | N | Perlu retention package khusus? |

## RUMUS SEVERANCE OTOMATIS (UU 13/2003 & PP 35/2021)

### Uang Pesangon (per masa kerja):
- < 1 tahun: 1 bulan gaji
- 1–2 tahun: 2 bulan
- 2–3 tahun: 3 bulan
- 3–4 tahun: 4 bulan
- 4–5 tahun: 5 bulan
- 5–6 tahun: 6 bulan
- 6–7 tahun: 7 bulan
- 7–8 tahun: 8 bulan
- ≥ 8 tahun: 9 bulan

### Uang Penghargaan Masa Kerja:
- 3–6 tahun: 2 bulan
- 6–9 tahun: 3 bulan
- 9–12 tahun: 4 bulan
- 12–15 tahun: 5 bulan
- 15–18 tahun: 6 bulan
- 18–21 tahun: 7 bulan
- 21–24 tahun: 8 bulan
- ≥ 24 tahun: 10 bulan

### Uang Penggantian Hak:
= 15% × (Pesangon + Penghargaan)

### Total Severance:
= (Pesangon + Penghargaan + Penggantian Hak) × basic_salary
- PHK biasa (Ps.156): 1× faktor
- PHK dengan kesalahan berat: 0× (tidak dapat pesangon)
- MSEP / efisiensi: 0.5× faktor (sejak PP 35/2021)

## LOGIKA REKOMENDASI OTOMATIS

Priority to protect (jangan masuk reduction list):
1. is_critical_role = Y AND successor_ready = N
2. talent_pool = High_Potential
3. perf_trend = Improving AND avg_perf_score >= 4.0
4. active_pip = N AND sanksi_count_1yr = 0 AND perf_2024 = A

Priority to consider first:
1. active_pip = Y
2. sanksi_level_highest = SP3 atau Skorsing
3. perf_trend = Declining AND avg_perf_score < 2.5
4. employment_type = PKWT AND contract_end_date <= Aug-2026

