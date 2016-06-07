window.onload = function(){
  main();
};

function main(){

  var url = "https://restcountries.eu/rest/v1";
  var request = new XMLHttpRequest();

  request.open("GET", url);

  request.onload = function(){
    if(request.status === 200){
      console.log("Got the data");
      var jsonString = request.responseText;
      var countries = JSON.parse(jsonString);
      handleCountries(countries);
    }
  };
  request.send(null);
}

function handleCountries(countries){
  var dropDown = document.getElementById("drop-down");
  dropDown.onchange = function(event){
    var dropDown = event.target;
    var index = dropDown.options[dropDown.selectedIndex].value;
    console.log(countries[index]);
    showDetails(countries[index]);
  };
  for (var i = 0; i < countries.length; i++) {
    var option = document.createElement("option");
    option.innerText = countries[i].name;
    option.value = i;
    dropDown.appendChild(option);
  }
}

function showDetails(country){
  var name = document.getElementById("country-name");
  var capital = document.getElementById("capital");
  var population = document.getElementById("population");
  name.innerText = "Name: " + country.name;
  capital.innerText = "Capital: " + country.capital;
  population.innerText = "Population: " + country.population;
}
