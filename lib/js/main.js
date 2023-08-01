document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit_button");
    const formContainer = document.querySelector(".form_container");
    const storyResult = document.getElementById("story_result");
  
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      const title = document.getElementById("title_input").value.trim();
      const noun = document.getElementById("noun").value.trim();
      const verb = document.getElementById("verb").value.trim();
      const adjective = document.getElementById("adjective").value.trim();
  
      if (title === "" || noun === "" || verb === "" || adjective === "") {
        alert("Please fill in all fields.");
      } else {
        const storyTemplate = `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`;
        storyResult.textContent = storyTemplate;
        formContainer.style.display = "none";
      }
    });
  });
  