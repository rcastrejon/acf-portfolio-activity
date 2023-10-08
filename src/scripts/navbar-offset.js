// @ts-check

/** @type {string} */
// @ts-ignore
const LG_SCREEN_SIZE = preval`
  const resolveConfig = require('tailwindcss/resolveConfig')
  const tailwindConfig = require('../../tailwind.config.cjs')

  const fullConfig = resolveConfig(tailwindConfig)

  module.exports = fullConfig.theme.screens.lg
`;
const header = document.querySelector("header");

window.addEventListener("load", maybeScrollToHashFromURL);

window.addEventListener("hashchange", (event) => {
  if (matchesLGScreenWidth()) return;

  event.preventDefault();
  maybeScrollToHashFromURL();
});

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  // target element does not exist
  if (!document.querySelector(anchor.getAttribute("href"))) return;

  anchor.addEventListener("click", (event) => {
    if (matchesLGScreenWidth()) return;

    event.preventDefault();
    const targetHash = anchor.getAttribute("href");
    if (targetHash === window.location.hash)
      scrollToTarget(document.querySelector(targetHash));
    else window.location.hash = targetHash;
  });
});

/**
 * Scrolls the window to the target element.
 * @param {Element} target - The target element to scroll to.
 * @returns {void}
 */
function scrollToTarget(target) {
  const headerHeight = header.offsetHeight;
  const targetPosition = target.getBoundingClientRect().top - headerHeight;
  window.scrollTo({
    top: targetPosition + window.scrollY,
    behavior: "smooth",
  });
}

/**
 *  Scrolls the window to the element with the id specified in the URL hash if it exists.
 */
function maybeScrollToHashFromURL() {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) scrollToTarget(target);
  }
}

/**
 * Returns whether the window width matches the large screen size.
 */
function matchesLGScreenWidth() {
  return window.matchMedia(`(min-width: ${LG_SCREEN_SIZE})`).matches;
}
