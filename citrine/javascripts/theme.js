/* Citrine, a theme for Redmine 7
 * Copyright (C) 2026  Nick Gorbikoff
 * GNU General Public License, version 2 or later. See the LICENSE file.
 *
 * A small script that adds two things CSS cannot: initials next to assignees and a chip around the tracker name. It reads
 * the page and writes nothing to Redmine. Without it the theme still works. */
(function () {
  "use strict";

  function addInitials() {
    document.querySelectorAll("table.list td.assigned_to").forEach(function (cell) {
      var link = cell.querySelector("a");
      if (!link || cell.querySelector(".assignee-initials")) { return; }
      var words = link.textContent.trim().split(/\s+/);
      var initials = (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
      var sum = 0;
      for (var index = 0; index < initials.length; index++) { sum += initials.charCodeAt(index); }
      var badge = document.createElement("span");
      badge.className = "assignee-initials tone-" + (sum % 6);
      badge.setAttribute("aria-hidden", "true");
      badge.textContent = initials;
      badge.title = link.textContent.trim();
      link.classList.add("assignee-name");
      cell.insertBefore(badge, cell.firstChild);
    });
  }

  function addTrackerChips() {
    document.querySelectorAll("table.list td.tracker").forEach(function (cell) {
      var text = cell.textContent.trim();
      if (!text || cell.querySelector(".tracker-chip")) { return; }
      var chip = document.createElement("span");
      chip.className = "tracker-chip";
      chip.textContent = text;
      cell.textContent = "";
      cell.appendChild(chip);
    });
  }

  function run() {
    addInitials();
    addTrackerChips();
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", run); } else { run(); }
})();
