function updateViewStudenterPage() {
    document.getElementById('app').innerHTML = `
    <h1>Velkommen til Student siden</h1>
      <button onclick="goToInteresse()">Interesse</button>
      <br>


      <table id="taskTable"></table>
      
    <p>
      <input id="taskDescription" type="text"/>
      <input id="taskPerson" type="text" />
      <button onclick="addTask()">Legg til Student</button>
    </p>

    <tr>
    <th>MODUL</th>
    <th>OK</th>
    <th>STUDENT</th>                    
    </tr>
  

      `;      
}

  function studentInfo () {
    let html = ``
    for (i = 0; i < model.tasks.length; i++) {
    html += `
    
    `}
    return html; 
  }

var tasksTable = document.getElementById('tasksTable');
show();

var tasksTable = document.getElementById('tasksTable');

function show() {
  let html = `
 <tr>
 <th>MODUL</th>
 <th>OK</th>
 <th>STUDENT</th>                    
  </tr>`;
                    
    for (let i = 0; i < tasks.length; i++) {
        html += createHtmlRow(i);
    }
    tasksTable.innerHTML = html;
}


function createHtmlRow(i) {
  const task = tasks[i];
  const checkedHtml = task.isDone ? 'checked="checked"' : '';
      if (!task.editMode)
      return `<tr>
          <td>${task.description}</td>
          <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
          <td>${task.person}</td>
  
          <td>
          <button onclick="deleteTask(${i})">Slett</button>
          <button onclick="editTask(${i})">Rediger</button>
          </td>
          </tr>
  
      `;
      return `
          <tr>
          <td><input id="editDescription${i}" type="text" oninput="inputs.description=this.value" value="${task.description}"/></td>
          <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                      
          <td><input id="editPerson${i}" type="text" oninput="inputs.person=this.value" value ="${task.person}" /></td>
  
          <td><button onclick="updateTask(${i})">Lagre</button></td>
                  
          </tr>
  
          
      `;
  }
  