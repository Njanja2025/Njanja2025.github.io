// Njax Auto-Link Agent
document.addEventListener("DOMContentLoaded", () => {
  const catalog = [
    { name: "AI Tools", file: "ai-tools.html" },
    { name: "Digital Downloads", file: "digital-downloads.html" }
  ];

  const container = document.getElementById("auto-links");
  if (container) {
    catalog.forEach(item => {
      const a = document.createElement("a");
      a.href = item.file;
      a.textContent = item.name;
      a.style = "display:block; margin:5px 0; color:#fff;";
      container.appendChild(a);
    });
  }
});
