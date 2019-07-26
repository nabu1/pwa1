const attendees = document.querySelector('#attendees')

console.log('111')

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    console.log(res.data)
    let html = ''
    res.data.map(user => {
      html += '<div class= "card"' + '<h2>' + user.name + '</h2><h4>' 
        + user.email + '</h4></div>';
    })

    attendees.innerHTML = html
  })
  .catch(err => console.log('Erroras:', err))

// ! caches.open('test-cache')
// ! caches.open('test-cache').then(cache => { console.log(cache) })
// ! caches.open('test-cache').then(cache => { cache.add('https://jsonplaceholder.typicode.com/users/')})

