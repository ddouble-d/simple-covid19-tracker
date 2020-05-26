fetch("https://corona.lmao.ninja/v2/countries/Indonesia")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("flag").src = data.countryInfo.flag;
    document.getElementById("country").innerHTML = data.country;
    document.getElementById("n_active").innerHTML = data.active;
    document.getElementById("n_cases").innerHTML = data.cases;
    document.getElementById("n_casesToday").innerHTML = data.todayCases;
    document.getElementById("n_deaths").innerHTML = data.deaths;
    document.getElementById("n_critical").innerHTML = data.critical;
    document.getElementById("n_recovered").innerHTML = data.recovered;
    document.getElementById("n_test").innerHTML = data.tests;
  });
