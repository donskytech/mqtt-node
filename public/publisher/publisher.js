var publishForm = document.getElementById("publishForm");

publishForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var topic = document.getElementById("topic").value;
  var message = document.getElementById("message").value;

  fetch("/publisher", {
    method: "POST",
    body: JSON.stringify({
      topic: topic,
      message: message,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
});
