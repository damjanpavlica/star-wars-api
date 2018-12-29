fetch("https://swapi.co/api/people")
  .then(x => x.json())
  .then(x =>
    document.body.innerHTML += x.results.map((item, i) => `
      <div class="item">
        <h3>${item.name}</h3>
        <p>Mass: ${item.mass}</p>
        <p>Height: ${item.height}</p>
        <p>Skin color: ${item.skin_color}</p>
        <img src="https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg">
      </div>
    `).join('')
  )
