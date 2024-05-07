const avatarStatuses = document.querySelectorAll(".avatar-status");

avatarStatuses.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.classList.contains("status-on")) {
      element.classList.remove("status-on");
      element.classList.add("status-off");
      element.setAttribute("aria-label","off");
    } else {
      element.classList.remove("status-off");
      element.classList.add("status-on");
      element.setAttribute("aria-label","on");
    }
  });
});
