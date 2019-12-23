export function hideHomepageMessage() {
  document.getElementById("homepage-msg").classList.add("hidden");
  document
    .querySelectorAll(".arrow, .arrow--straight")
    .forEach(el => el.classList.add("hidden"));
}
