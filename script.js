document.getElementById("platform").innerText = navigator.platform;
document.getElementById("lang").innerText = navigator.language;
document.getElementById("online").innerText = navigator.onLine ? "Online" : "Offline";
document.getElementById("screen").innerText = screen.width + " x " + screen.height;

if (navigator.deviceMemory) {
  document.getElementById("memory").innerText = navigator.deviceMemory + " GB";
} else {
  document.getElementById("memory").innerText = "Not supported";
}

window.addEventListener("online", () => online.innerText = "Online");
window.addEventListener("offline", () => online.innerText = "Offline");
