/**
 * nav.js
 * Handles two independent behaviors:
 *   1. Mobile nav drawer open/close (hamburger toggle + backdrop)
 *   2. "Clinical Services" dropdown — click/keyboard activated,
 *      not hover-only, so it works on touch and for keyboard users.
 *
 * No dependencies. Runs once DOM is ready.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initDropdowns();
  });

  function initMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-primary-nav]");
    var backdrop = document.querySelector("[data-nav-backdrop]");

    if (!toggle || !nav) return;

    function openNav() {
      nav.setAttribute("data-open", "true");
      if (backdrop) backdrop.setAttribute("data-open", "true");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      var firstLink = nav.querySelector("a, button");
      if (firstLink) firstLink.focus();
    }

    function closeNav() {
      nav.setAttribute("data-open", "false");
      if (backdrop) backdrop.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.getAttribute("data-open") === "true";
      isOpen ? closeNav() : openNav();
    });

    if (backdrop) {
      backdrop.addEventListener("click", closeNav);
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.getAttribute("data-open") === "true") {
        closeNav();
        toggle.focus();
      }
    });

    // Close the drawer if the viewport is resized back to desktop width
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024) closeNav();
    });
  }

  function initDropdowns() {
    var dropdowns = document.querySelectorAll("[data-dropdown]");

    dropdowns.forEach(function (dropdown) {
      var toggle = dropdown.querySelector("[data-dropdown-toggle]");
      var menu = dropdown.querySelector("[data-dropdown-menu]");
      if (!toggle || !menu) return;

      function openMenu() {
        menu.hidden = false;
        toggle.setAttribute("aria-expanded", "true");
      }

      function closeMenu() {
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }

      toggle.addEventListener("click", function (event) {
        event.stopPropagation();
        var isOpen = toggle.getAttribute("aria-expanded") === "true";
        isOpen ? closeMenu() : openMenu();
      });

      // Keyboard: Escape closes and returns focus to the toggle
      dropdown.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeMenu();
          toggle.focus();
        }
      });

      // Click outside closes the menu
      document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
          closeMenu();
        }
      });

      // Close when focus leaves the dropdown entirely
      dropdown.addEventListener("focusout", function () {
        window.requestAnimationFrame(function () {
          if (!dropdown.contains(document.activeElement)) {
            closeMenu();
          }
        });
      });
    });
  }
})();
