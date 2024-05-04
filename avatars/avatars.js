const avatarStatuses = document.querySelectorAll(".avatar-status");

avatarStatuses.forEach((element) => {
  element.addEventListener("click", function () {
    const statusSpan = element.querySelector(".status-span");

    if (element.classList.contains("status-on")) {
      element.classList.remove("status-on");
      element.classList.add("status-off");
      statusSpan.textContent = "off";
    } else {
      element.classList.remove("status-off");
      element.classList.add("status-on");
      statusSpan.textContent = "on";
    }
  });
});
