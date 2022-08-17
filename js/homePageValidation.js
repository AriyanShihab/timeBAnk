const robot = getByID("robot");
const loginBtn = getByID("loginBtn");

robot.addEventListener("keyup", function(e) {
    if (e.target.value == "I'm a Robot") {
        loginBtn.classList.remove("pointer-events-none");
        loginBtn.classList.remove("opacity-5");
    } else {
        loginBtn.classList.add("pointer-events-none");
        loginBtn.classList.add("opacity-5");
    }
});