/**
 * RC777 Gamez – Lightweight site scripts
 * Mobile menu, FAQ accordion, back-to-top
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initFaq();
    initBackToTop();
    initContactForm();
  });

  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  function initFaq() {
    var items = document.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach(function (item) {
      var btn = item.querySelector(".faq-question");
      if (!btn) return;

      btn.addEventListener("click", function () {
        var isActive = item.classList.contains("active");
        items.forEach(function (other) {
          other.classList.remove("active");
          var otherBtn = other.querySelector(".faq-question");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        });
        if (!isActive) {
          item.classList.add("active");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function initBackToTop() {
    var btn = document.querySelector(".back-to-top");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 400) {
          btn.classList.add("visible");
        } else {
          btn.classList.remove("visible");
        }
      },
      { passive: true }
    );
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("form-success");
      if (note) {
        note.hidden = false;
        note.focus();
      }
      form.reset();
    });
  }
})();
