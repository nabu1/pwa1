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


