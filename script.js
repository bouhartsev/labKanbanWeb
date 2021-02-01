//Matvey Bouhartsev, 2021

function addTask(event){
	var text = document.forms['addTask'].elements['taskText'].value;
	var elem = document.createElement('div');
	elem.className = "card";
	elem.innerHTML = `<div class="head">${text}</div>
					  <div class="text">
					  </div>
					  <button class="check"></button>
					  <button class="pencil"></button>`
	document.getElementById('col_backlog').append(elem);
	console.log('Task added');
	event.preventDefault()
}
