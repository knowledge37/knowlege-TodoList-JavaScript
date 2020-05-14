//selectors

const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");
//Event Listeners
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener("click",addTodo);
//todoList.addEventListener("click",deleteCheck);
//filterOption.addEventListener("click",filterTodo);

//Functions
function addTodo(event){
	
	//prevent form from submit
	event.preventDefault();
	//todo div
	const todoDiv=document.createElement("div");
	todoDiv.classList.add("todo");
	
	//create li
	const newTodo=document.createElement("li");
	
	newTodo.innerText=todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);
	//saveLocalTodos(todoInput.value);
	//check  mark button
	const completedButton=document.createElement('button');
	completedButton.innerHTML='<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn"); 
    todoDiv.appendChild(completedButton);  
	
	//check  mark button
	const trashButton=document.createElement('button');
	trashButton.innerHTML='<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn"); 
    todoDiv.appendChild(trashButton);
	
	//append to list
	todoList.appendChild(todoDiv); 
	todoInput.value="";
			}
			
			function deleteCheck(event){
				const item=event.target;
				//delete todo
				if(item.classList[0]==="trash-btn"){
				  const todo =item.parentElelemnt;
			  
				  //animation
				  todo.classList.add('fall');
				  todo.addEventListener('transitionend',function(){
				  todo.remove();	
				  });
				  
				}
				//check mark
				if (item.classList[0]==="complete-btn"){
				  const todo =item.parentElelemnt;
				  todo.classList.toggle("completed");
				}
			  }
			  function filterTodo(e){
				const todos=todoList.childNodes;
				todos.foreach(function(todo){
					switch(e.target.value)
					{
						case "all":
						todo.style.display="flex";
						break;
						case "completed":
						if(todo.classList.contains("completed")){
						  todo.style.display="flex";  
						}else {
							todo.style.display="none";
						}
						break;
						case "uncompleted":
						if(!todo.classList.contains('completed')){
							todo.style.display="flex"; 
						}

					else {
							todo.style.display="none";
					}
					break;
				}
				});
			
		}
		function saveLocalTodos(todo){

			//check if there is alread data in the local storage
			let todos;
			if(localStorage.getItem("todos")==null){
			todos=[];

			}else{
				todos=JSON.parse(localStorage.getItem("todos"));
			
			}
	todos.push(todo);
	localStorage.setItem("todos",JSON.stringify(todos));
		}
		
function getTodos(){
    let todos;
if(localStorage.getItem("todos")==null){
	todos=[];

	}else{
		todos=JSON.parse(localStorage.getItem("todos"));
	
	}
todos.foreach(function(todo){
//todo div
const todoDiv=document.createElement("div");
todoDiv.classList.add("todo");

//create li
const newTodo=document.createElement("li");

newTodo.innerText=todo;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

//check  mark button
const completedButton=document.createElement('button');
completedButton.innerHTML='<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn"); 
todoDiv.appendChild(completedButton);  

//check  mark button
const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn"); 
todoDiv.appendChild(trashButton);

//append to list
todoList.appendChild(todoDiv); 
		});

	}

function removeLocalTodos(){
	if(localStorage.getItem("todos")==null){
		todos=[];
	
		}else{
			todos=JSON.parse(localStorage.getItem("todos"));
		
		}
const todoindex=children[0].innerText;
todos.splice(todos.indexof(todoindex),1);
localStorage.setItem("todos",JSON.stringify(todos));
}
