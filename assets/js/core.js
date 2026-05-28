/* =====================================================================
   'ONE' GLOBAL HCMS  |  CORE LOGIC  |  core.js  v1.5
   Nabati HCMS 2.0 Project  |  UI/UX Guidance Prototype
   Logika bersama: login router, nav state, HC AI chat, toast, modal.
   Catatan: prototype tidak memakai localStorage. State hanya di memori.
   ===================================================================== */

(function () {
  "use strict";

  /* ---------- TOAST ---------------------------------------------------- */
  function toast(message) {
    var wrap = document.querySelector(".toast-wrap");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "toast-wrap";
      document.body.appendChild(wrap);
    }
    var el = document.createElement("div");
    el.className = "toast";
    el.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">' +
      '<path d="M20 6 9 17l-5-5"/></svg><span></span>';
    el.querySelector("span").textContent = message;
    wrap.appendChild(el);
    setTimeout(function () {
      el.style.transition = "opacity .3s";
      el.style.opacity = "0";
      setTimeout(function () { el.remove(); }, 300);
    }, 3200);
  }
  window.hcToast = toast;

  /* ---------- MODAL ---------------------------------------------------- */
  window.openModal = function (id) {
    var m = document.getElementById(id);
    if (m) m.classList.add("is-open");
  };
  window.closeModal = function (id) {
    var m = document.getElementById(id);
    if (m) m.classList.remove("is-open");
  };
  document.addEventListener("click", function (e) {
    if (e.target.classList && e.target.classList.contains("modal-overlay")) {
      e.target.classList.remove("is-open");
    }
  });

  /* ---------- LOGIN GATE ---------------------------------------------- */
  function initLogin() {
    var form = document.getElementById("loginForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("[type=submit]");
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Memuat sistem ...";
      }
      /* Prototype: tidak ada autentikasi nyata, langsung ke shell. */
      setTimeout(function () { window.location.href = "dashboard.html"; }, 600);
    });
    var eye = document.getElementById("pwToggle");
    if (eye) {
      eye.addEventListener("click", function () {
        var pw = document.getElementById("password");
        pw.type = pw.type === "password" ? "text" : "password";
      });
    }
  }

  /* ---------- SIDEBAR ACTIVE STATE + MODULE GUARD --------------------- */
  /* Modul yang belum dibangun (Stage berikutnya). Saat sebuah modul   */
  /* selesai, hapus kodenya dari daftar ini.                           */
  var PENDING_MODULES = [];

  function initNav() {
    var page = document.body.getAttribute("data-page");
    var items = document.querySelectorAll(".nav-item");
    items.forEach(function (it) {
      var key = it.getAttribute("data-nav");
      if (key && key === page) it.classList.add("is-active");

      /* Cegah navigasi ke modul yang belum dibangun. */
      var mod = it.getAttribute("data-module");
      if (mod && PENDING_MODULES.indexOf(mod) !== -1) {
        it.addEventListener("click", function (e) {
          e.preventDefault();
          toast("Modul ini dibangun pada stage berikutnya.");
        });
      }
    });
  }

  /* ---------- HC AI PANEL OPEN/CLOSE ---------------------------------- */
  function initHcAiFab() {
    var fab = document.getElementById("hcaiFab");
    var panel = document.getElementById("hcaiPanel");
    if (!fab || !panel) return;
    fab.addEventListener("click", function () {
      panel.classList.toggle("is-open");
    });
    var closeBtn = document.getElementById("hcaiPanelClose");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        panel.classList.remove("is-open");
      });
    }
  }

  /* ---------- HC AI PANEL TIMESTAMP ---------------------------------- */
  function initHcAiPanelStamp() {
    var fab = document.getElementById("hcaiFab");
    var panel = document.getElementById("hcaiPanel");
    if (!fab || !panel) return;

    function stamp() {
      var d = new Date();
      var mo = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"][d.getMonth()];
      var days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"][d.getDay()];
      var hh = String(d.getHours()).padStart(2,"0"), mm = String(d.getMinutes()).padStart(2,"0");
      var dlbl = document.getElementById("hcai-date-lbl");
      var wtime = document.getElementById("hcai-welcome-time");
      if (dlbl && !dlbl.textContent) dlbl.textContent = days + ", " + d.getDate() + " " + mo + " " + d.getFullYear();
      if (wtime && !wtime.textContent) wtime.textContent = hh + ":" + mm;
    }

    fab.addEventListener("click", function () {
      if (panel.classList.contains("is-open")) stamp();
    });
  }


  /* stubs for removed HC AI home functions */
  function initHcAiHome() {}
  function syncSendBtn() {}
  function sendToHcAi() {}


  /* ---------- SIDEBAR TOOLTIP (fixed-position, escapes overflow) ------- */
  function initSidebarTooltip() {
    /* Create singleton tooltip element */
    var tip = document.getElementById('sb-tooltip');
    if (!tip) {
      tip = document.createElement('div');
      tip.id = 'sb-tooltip';
      document.body.appendChild(tip);
    }

    var hideTimer = null;

    function show(el) {
      clearTimeout(hideTimer);
      var label = el.getAttribute('data-tooltip');
      if (!label) return;
      var rect = el.getBoundingClientRect();
      tip.textContent = label;
      /* Position: right of sidebar, vertically centered on item */
      tip.style.left  = (rect.right + 10) + 'px';
      tip.style.top   = (rect.top + rect.height / 2) + 'px';
      tip.style.transform = 'translateY(-50%) translateX(-4px)';
      /* Force reflow then add class */
      tip.classList.remove('visible');
      tip.offsetWidth; /* reflow */
      tip.style.transform = 'translateY(-50%) translateX(0)';
      tip.classList.add('visible');
    }

    function hide() {
      hideTimer = setTimeout(function() {
        tip.classList.remove('visible');
      }, 80);
    }

    document.addEventListener('mouseover', function(e) {
      var item = e.target.closest('.nav-item');
      if (item && item.getAttribute('data-tooltip')) show(item);
    });
    document.addEventListener('mouseout', function(e) {
      var item = e.target.closest('.nav-item');
      if (item) hide();
    });
    /* Hide on scroll inside nav */
    var nav = document.querySelector('.nav-scroll');
    if (nav) nav.addEventListener('scroll', hide);
  }

  /* ---------- BOOT ----------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initLogin();
    initNav();
    initHcAiFab();
    initHcAiPanelStamp();
    initLang();
    initTabs();
    initSeg();
    initSidebarTooltip();
  });

  /* ---------- LANGUAGE TOGGLE (ID / EN) ------------------------------- */
  function initLang() {
    var toggle = document.querySelector(".lang-toggle");
    if (!toggle) return;
    toggle.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        var lang = b.getAttribute("data-lang");
        toggle.querySelectorAll("button").forEach(function (x) {
          x.classList.toggle("is-active", x === b);
        });
        document.querySelectorAll("[data-id]").forEach(function (el) {
          var val = el.getAttribute("data-" + lang);
          if (val) el.textContent = val;
        });
      });
    });
  }

  /* ---------- TABS ----------------------------------------------------- */
  function initTabs() {
    document.querySelectorAll(".tabs").forEach(function (set) {
      var tabs = set.querySelectorAll(".tab");
      function activate(name) {
        tabs.forEach(function (t) {
          t.classList.toggle("is-active", t.getAttribute("data-tab") === name);
        });
        document.querySelectorAll("[data-panel]").forEach(function (p) {
          p.style.display = p.getAttribute("data-panel") === name ? "" : "none";
        });
        window.scrollTo(0, 0);
      }
      tabs.forEach(function (t) {
        t.addEventListener("click", function () { activate(t.getAttribute("data-tab")); });
      });
      var cur = set.querySelector(".tab.is-active") || tabs[0];
      if (cur) activate(cur.getAttribute("data-tab"));
    });
  }

  /* ---------- SEGMENTED CONTROL --------------------------------------- */
  function initSeg() {
    document.querySelectorAll(".seg").forEach(function (g) {
      g.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          g.querySelectorAll("button").forEach(function (x) {
            x.classList.toggle("on", x === b);
          });
        });
      });
    });
  }

})();

/* ─── NOTE ───────────────────────────────────────────────────────────────
   HC AI chat engine (USER, SHIFTS, PAYSLIP, chat functions, etc.) lives
   entirely in each page's own inline <script> tag to avoid const
   re-declaration conflicts across script tags.
   ─────────────────────────────────────────────────────────────────────── */
