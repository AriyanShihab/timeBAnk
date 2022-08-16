const studeyButton = getByID("learningTimeButton");

studeyButton.addEventListener("click", function() {
    const studeyTime = inputFeildToNumber("learningTime");
    setValue("studyingTime", studeyTime);
    // calculate time for social media; plan is user will get 20% time for spending in social media based on there studey time

    setValue("remainingTime", (studeyTime / 5).toFixed(2));

    getByID("learningTime").value = "";
});