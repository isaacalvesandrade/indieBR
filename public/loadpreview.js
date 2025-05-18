fetch('/api/capatitulo')
  .then(response => {
    console.log(response.headers.get('content-type'));
    return response.json();
  })
  .then(data => createPreview(data))
  .catch(err => console.error(err));


function createPreview(jogos) {
    const container = document.querySelector('.container');
    container.innerHTML = " "; 
  
    jogos.forEach(jogo => {

      const div = document.createElement('div');
      div.className = 'preview';
  
      const titulo = document.createElement('p');
      titulo.textContent = jogo.titulo;
      titulo.id = 'titulo';
  
      const capa = document.createElement('img');
      capa.src = jogo.capa;
      capa.id = 'capa';
      capa.alt = `Capa do jogo ${jogo.titulo}`;
  
      div.appendChild(titulo);
      div.appendChild(capa);
  
      container.appendChild(div);
    });
  }
  