document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".question__trigger");

    triggers.forEach(trigger => {
      trigger.addEventListener("click", () => {
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        const panelId = trigger.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);

        // закрываем все панели
        triggers.forEach(btn => {
          btn.setAttribute("aria-expanded", "false");
          btn.setAttribute("aria-selected", "false");
          const p = document.getElementById(btn.getAttribute("aria-controls"));
          p.hidden = true;
          p.setAttribute("aria-hidden", "true");
          p.style.maxHeight = null;
        });

        // если кликнули по закрытому — открыть
        if (!expanded) {
          trigger.setAttribute("aria-expanded", "true");
          trigger.setAttribute("aria-selected", "true");
          panel.hidden = false;
          panel.setAttribute("aria-hidden", "false");

          // плавное раскрытие
          panel.style.maxHeight = panel.scrollHeight + "px";

          // после анимации убираем ограничение высоты
          panel.addEventListener("transitionend", function handler() {
            panel.style.maxHeight = "none";
            panel.removeEventListener("transitionend", handler);
          });
        }
      });
    });
  });