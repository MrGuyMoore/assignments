var xhr = new XMLHttpRequest();
var ul = document.querySelector('ul');

var url = "http://api.vschool.io:6543/pokemon.json";

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200){
//         var jsonData = xhr.responseText;
//         var jsData = JSON.parse(jsonData);
//         var pokemon = jsData.objects[0].pokemon;
//         pokemon.forEach(function (singlePokemon) {
//             var li = document.createElement('li');
//             li.innerHTML = singlePokemon.name;
//             ul.appendChild(li);
//         });
//         console.log(pokemon)
//     }
// };

// xhr.open("GET","http://api.vschool.io:6543/pokemon.json",true);
// // // xhr.send();

var getRequest = axios.get(url);
getRequest.then(function (response) {
    var jsData = response.data;
    var pokemon = jsData.objects[0].pokemon;
    pokemon.forEach(function (singlePokemon) {
        var li = document.createElement("li");
        li.innerHTML = singlePokemon.name;
        ul.appendChild(li);
    })
})
  .catch(function (err) {
    document.write("Sorry your data is unreadable")

})