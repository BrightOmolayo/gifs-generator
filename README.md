# gifs-generator

/*body{
    background-color: black;
    color: aliceblue;
}

/*
<script>
  const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
    });
</script>

<script>
  const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.data.images.original.url);
    });
</script>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
 <img src="#" alt="random">
 <button id="refreshbtn">next</button>

 <input type="text" name="input" id="input" placeholder="search">


  <script>
    var input = getElementById("input")
    
    const img = document.querySelector('img');
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=OPQ40UPzNNpk0gOkzNCIG5pZbmgntLrY&s=${input.value},', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        img.src = response.data.images.original.url;
    });

    document.getElementById('refreshbtn').addEventListener('click',function(){
        location.reload();
    })


    /*<script>
  const img = document.querySelector('img');

  async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'});
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }
  getCats();

</script>
</body>
</html>
*/

JAVASCRIPT


declared variables for searchInputs,searchButton and image-container.