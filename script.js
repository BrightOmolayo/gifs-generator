const input = document.querySelector('input')
const img = document.querySelector('img')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=OPQ40UPzNNpk0gOkzNCIG5pZbmgntLrY&s=${input.value}`, { mode: 'cors' })
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      img.src = response.data.images.original.url
    })
})

document.getElementById('refreshbtn').addEventListener('click', function () {
  // eslint-disable-next-line no-undef
  location.reload()
})
