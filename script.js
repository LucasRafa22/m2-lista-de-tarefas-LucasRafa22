const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks) {
  const taskList = document.querySelector('.tasks__list');
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const taskItem = createTaskItem(task); 
    taskList.appendChild(taskItem);
  });
}


function createTaskItem(task) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const button = document.createElement('button');

  li.classList.add('task__item');
  div.classList.add('task-info__container');
  span.classList.add('task-type'); 

  
  if (task.type === 'Urgente') {
    li.classList.add('urgent');
  } else if (task.type === 'Importante') {
    li.classList.add('important');
  } else {
    li.classList.add('normal');
  }

  p.textContent = task.title;
  button.classList.add('task__button--remove-task'); 

  button.addEventListener('click', () => {
    const taskIndex = tasks.indexOf(task);

    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1); 
      renderElements(tasks);
    }
  });

  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);

  return li;
}


document.addEventListener('DOMContentLoaded', () => {
  renderElements(tasks);
});


const inputTitulo = document.getElementById('input_title');
const inputPrioridades = document.querySelector('.form__input--priority');
const addButton = document.querySelector('.form__button--add-task');


function addTask(event) {
  event.preventDefault();

  const titulo = inputTitulo.value.trim(); 
  const tipo = inputPrioridades.value;

  if (titulo && tipo) {
    const newTask = {
      title: titulo,
      type: tipo.charAt(0).toUpperCase() + tipo.slice(1),
    };

    tasks.push(newTask);

  
    inputTitulo.value = '';
    inputPrioridades.value = '';

    renderElements(tasks);
  } else {
    alert('Por favor, preencha todos os campos antes de adicionar uma tarefa.');
  }
}

addButton.addEventListener('click', addTask);