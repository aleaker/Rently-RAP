const request = require("request");

const Cities = {};

const rentalToken = [
  {
    Name: "Hertz",
    Url: "https://demo.rently.com.ar/api/",
    User: "rentlyweb",
    Token:
      "OibX0sKrMuTO0FfCdYGr9y2nV3ju116CTwp0ZW5XzCz8pcGXdlsprppVLm6R_984gE9gGm4XSDqX2EMhYfoKheJZqO5vSJtk4oFXR0pOX9oHk9p-N1K49hnSK_4xYIk6KPf9nbzSSS5eAHISL20ncsGkxnRrme6lfyJBg9U9hOXkrfzbZN1-qVUbP8vRGW0KkbKe6s1tY56HSQ8l5TEbumKJF3cKCvAXOg0aI-zZypO56qHRYYEgGsDB7sOrfa85wqiZEjrIvtt8C10MJdQRSUjW5i0J_g101SuAWjCGtaE9OokpuA91WuxDQLlCydYug_vlXeJLIgYMpIqQ9OULDhZEooHnZNB8MDaiS4C1LG_9Zl8WEb5IA8QkbfRWdvwCVEPfVtgqdIdMpAipDnW-Lg"
  },
  {
    Name: "Alamo",
    Url: "https://demo.rently.com.ar/api/",
    User: "rentlyweb",
    Token:
      "OibX0sKrMuTO0FfCdYGr9y2nV3ju116CTwp0ZW5XzCz8pcGXdlsprppVLm6R_984gE9gGm4XSDqX2EMhYfoKheJZqO5vSJtk4oFXR0pOX9oHk9p-N1K49hnSK_4xYIk6KPf9nbzSSS5eAHISL20ncsGkxnRrme6lfyJBg9U9hOXkrfzbZN1-qVUbP8vRGW0KkbKe6s1tY56HSQ8l5TEbumKJF3cKCvAXOg0aI-zZypO56qHRYYEgGsDB7sOrfa85wqiZEjrIvtt8C10MJdQRSUjW5i0J_g101SuAWjCGtaE9OokpuA91WuxDQLlCydYug_vlXeJLIgYMpIqQ9OULDhZEooHnZNB8MDaiS4C1LG_9Zl8WEb5IA8QkbfRWdvwCVEPfVtgqdIdMpAipDnW-Lg"
  }
];

const fetchCities = Promise.all(
  rentalToken.map(rental => {
    let rentalname = rental.Name;
    const options = {
      uri: `${rental.Url}/places`,
      method: "GET",
      headers: { Authorization: `Bearer ${rental.Token}` }
    };

    return new Promise(resolve => {
      request(options, (error, res, body) => {
        if (error) {
          console.error(error);
          return;
        } else resolve(body);
      });
    })
      .then(res => JSON.parse(res))
      .then(places => {
        console.log(places);
        places.map(place => {
          if (!Cities[place.City]) {
            Cities[place.City] = { [rentalname]: [place.Id] };
          }
          if (Cities[place.City] && Cities[place.City][rentalname]) {
            Cities[place.City][rentalname].push(place.Id);
          } else {
            Cities[place.City][rentalname] = [place.Id];
          }
        });
      });
  })
).then(() => Cities);

module.exports = fetchCities;
