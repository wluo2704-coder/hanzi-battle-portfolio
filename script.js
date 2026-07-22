const content = window.PORTFOLIO_CONTENT;

function readPath(path) {
  return path.split(".").reduce((value, key) => value?.[key], content);
}

function resolveHref(href) {
  return href === "playable" ? content.links.playable : href;
}

function renderContent() {
  document.title = content.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", content.meta.description);

  document.querySelectorAll("[data-bind]").forEach((element) => {
    const value = readPath(element.dataset.bind);
    if (value !== undefined) element.textContent = value;
  });

  const overviewImage = document.querySelector('[data-asset="overview.image"]');
  overviewImage.src = content.overview.image;
  overviewImage.alt = content.overview.imageAlt;

  const navList = document.querySelector("[data-nav-list]");
  navList.innerHTML = content.navigation.map((item) => `
    <a href="#${item.id}" data-nav="${item.id}">
      <span>${item.number}</span>
      <strong>${item.label}</strong>
      <small>${item.english}</small>
    </a>
  `).join("");

  const actions = document.querySelector('[data-actions="overview"]');
  actions.innerHTML = content.overview.actions.map((action) => {
    const href = resolveHref(action.href);
    const external = href.startsWith("http");
    return `<a class="${action.style}-action" href="${href}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${action.label}</a>`;
  }).join("");

  document.querySelector("[data-outcomes]").innerHTML = content.overview.outcomes
    .map((item) => `<span>${item}</span>`).join("");

  const video = document.querySelector("[data-video]");
  video.poster = content.film.poster;
  document.querySelector("[data-video-source]").src = content.film.video;
  video.load();

  document.querySelector("[data-transformation]").innerHTML = content.film.transformation
    .map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><strong>${item}</strong></li>`).join("");

  document.querySelector("[data-game-steps]").innerHTML = content.game.steps.map((step) => `
    <figure>
      <div class="step-heading"><span>${step.number}</span><strong>${step.title}</strong></div>
      <img src="${step.image}" alt="${step.alt}">
      <figcaption>${step.caption}</figcaption>
    </figure>
  `).join("");

  const gameLink = document.querySelector("[data-game-link]");
  gameLink.href = content.links.playable;
  gameLink.textContent = content.game.playLabel;

  document.querySelector("[data-evidence]").innerHTML = content.game.evidence
    .map((item) => `<span>${item}</span>`).join("");

  document.querySelector("[data-workflow]").innerHTML = content.skill.workflow.map((step, index) => `
    <li data-owner="${step.owner}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${step.title}</strong>
      <small>${step.subtitle}</small>
    </li>
  `).join("");

  document.querySelector("[data-workflow-legend]").innerHTML = content.skill.workflowLegend
    .map((item) => `<span data-owner="${item.owner}">${item.label}</span>`).join("");

  document.querySelector("[data-gates]").innerHTML = content.skill.gates.map((gate) => `
    <div><dt>${gate.label}</dt><dd>${gate.status}</dd></div>
  `).join("");

  const download = document.querySelector("[data-skill-download]");
  download.href = content.links.skillDownload;
  download.textContent = content.skill.downloadLabel;
  document.querySelector("[data-closing-link]").textContent = content.skill.closingLabel;
}

function syncPageState() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  document.querySelector("[data-progress]")?.style.setProperty("transform", `scaleX(${ratio})`);

  const sections = [...document.querySelectorAll("[data-section]")];
  const marker = window.scrollY + window.innerHeight * 0.42;
  let activeId = sections[0]?.id;
  sections.forEach((section) => {
    if (section.offsetTop <= marker) activeId = section.id;
  });
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const active = link.dataset.nav === activeId;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function alignHashTarget() {
  const targetId = window.location.hash.slice(1);
  if (!targetId) return;
  document.getElementById(targetId)?.scrollIntoView({ block: "start" });
  syncPageState();
}

function alignAfterAssetsSettle() {
  window.requestAnimationFrame(alignHashTarget);
  window.setTimeout(alignHashTarget, 180);
  window.setTimeout(alignHashTarget, 700);
}

renderContent();
syncPageState();
alignAfterAssetsSettle();
window.addEventListener("scroll", syncPageState, { passive: true });
window.addEventListener("resize", syncPageState);
window.addEventListener("hashchange", alignAfterAssetsSettle);
window.addEventListener("pageshow", alignAfterAssetsSettle);
window.addEventListener("load", alignAfterAssetsSettle);
