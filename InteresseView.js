function updateViewInteressePage() {
    let html = `
  <h1>Velkommen til Interesse siden</h1>
  
    <button onclick="goToStudenter()">Studenter</button>
    <br>
    <br>
    <hr>

    <div class="container">
    <div class="header"></div>

      <div class="navnInfo">
        <h2>Interesse Melding</h2>
        <h4>${interesseMeld()}</h4>
      </div>
      
      <div class="StudInfo"></div>
      
      <div class=""></div>
      
      <div class=""></div>
      
    </div>

    `;
    document.getElementById('app').innerHTML = html;
}

function interesseMeld() {
  let html =  '';
  
  for (let i = 0; i < model.interesseStud.length; i++) {
    html += `

      <div id="interesseStudent">${model.interesseStud[i].interesseMelding}</div>
   
    `;
  }
  return html; 
}