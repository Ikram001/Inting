fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const userList = document.getElementById("userList");
    users.forEach((user) => {
      const div = document.createElement("div");
      div.innerHTML = `${user.name} - ${user.email}`;
      userList.appendChild(div);
    });
  })
  .catch((error) => console.error("Error fetching users:", error));

function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      const weatherHTML = `
            <div class="weather-card">
              <h3>${data.name}</h3>
              <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
              <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            </div>
          `;
      document.getElementById("weatherResult").innerHTML = weatherHTML;
    })
    .catch((error) => {
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p style="color:red">${error.message}</p>`;
    });
}
