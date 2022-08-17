const studeyButton = getByID("learningTimeButton");

studeyButton.addEventListener("click", function() {
    const studeyTime = inputFeildToNumber("learningTime");
    if (studeyTime == undefined) {
        return;
    }
    setValue("studyingTime", studeyTime);
    // calculate time for social media; plan is user will get 20% time for spending in social media based on there studey time

    setValue("remainingTime", (studeyTime / 5).toFixed(2));

    getByID("learningTime").value = "";
    getByID("socialTime").removeAttribute("disabled");
    getByID("socialParent").classList.remove("opacity-75");
});

// const socialParent = getByID("socialParent");
// const inputFeild = getByID("socialTime");
// socialParent.addEventListener("click", function() {
//     if (inputFeild.hasAttribute("disabled")) {
//         socialParent.addEventListener("click", function() {
//             alert(
//                 "vai age kichu ta porasuna koro, then social media te time spend koro"
//             );
//         });
//     } else {
//         socialParent.removeEventListener("click");
//     }
// });