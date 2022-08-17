const socialTimeButton = getByID("socialTimeButton");

socialTimeButton.addEventListener("click", function() {
    // step one: set used value total on red div
    const socialMediaTime = inputFeildToNumber("socialTime");
    getByID("socialTime").value = "";
    if (socialMediaTime == undefined) {
        return;
    }

    //step 2: update the value of remaining time in yellow div
    let remainingTime = innerTextToNumber("remainingTime");
    if (remainingTime < socialMediaTime) {
        alert("Vai tomar kacher oto somoi nai, social media er jonno !");
        return;
    }
    setValue("usedTime", socialMediaTime);

    setValue("remainingTime", remainingTime, "minus");
});