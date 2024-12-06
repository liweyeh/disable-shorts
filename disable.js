console.log("Disable shorts loaded");

const thingsToRemove = [];

// Find the shorts link from the sidebar
const shortsLink = document.querySelector('[id="endpoint"][title="Shorts"]');
shortsLink && thingsToRemove.push(shortsLink);

// Find the reel section or short's rich section
const span = Array.from(document.querySelectorAll("#title")).filter(
  (item) => item.innerText === "Shorts"
);

if (span.length > 0) {
  for (let item of span) {
    const reelRenderer = item.closest("ytd-reel-shelf-renderer");
    const sectionRenderer = item.closest("ytd-rich-section-renderer");
    (reelRenderer || sectionRenderer) &&
      thingsToRemove.push(reelRenderer || sectionRenderer);
  }
}

thingsToRemove.forEach((item) => (item.style.display = "none !important"));
