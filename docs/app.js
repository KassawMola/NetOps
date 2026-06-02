const loginPanel = document.querySelector("#loginPanel");
const dashboard = document.querySelector("#dashboard");
const loginForm = document.querySelector("#loginForm");
const logoutButton = document.querySelector("#logoutButton");
const actionLog = document.querySelector("#actionLog");
const tabButtons = document.querySelectorAll(".tab-button");
const viewPanels = document.querySelectorAll(".view-panel");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username === "admin" && password === "admin123!") {
    loginPanel.classList.add("is-hidden");
    dashboard.classList.remove("is-hidden");
    return;
  }

  alert("Demo credentials are admin / admin123!");
});

logoutButton.addEventListener("click", () => {
  dashboard.classList.add("is-hidden");
  loginPanel.classList.remove("is-hidden");
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;

    tabButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    viewPanels.forEach((panel) => {
      panel.classList.toggle("is-hidden", panel.id !== view);
    });
  });
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const now = new Date().toLocaleString();
    const action = button.dataset.action;
    const messages = {
      sync: "Inventory synced for catalyst-demo-01 at 192.168.1.1.",
      backup: "Configuration backup completed for user admin.",
      ports: "Interface status check completed. 3 healthy devices, 1 review item."
    };

    actionLog.textContent = `[${now}] ${messages[action]}\n` + actionLog.textContent;
  });
});
