 let todos = [];
      function addTodo() {
        todos.push({
          title: document.querySelector("input").value
        })
        render()
      }
  
      function deleteLastTodo() {
        todos.splice(todos.length - 1, 1) // remove the last element from the arr
        render()
      }
  
  
      function deleteFirstTodo() {
        todos.splice(0, 1) // remove the last element from the arr
        render()
      }
  
      function deletetodo(index){
        todos.splice(index,1);          // delete 1 element at the given index
        render()
      }
      
      function edittodo(index) {
  const newtodo = prompt("Enter new Todo");
  if (newtodo !== null && newtodo.trim() !== "") {
    todos[index].title = newtodo;
    render();
  }
}
  var j=0;
      function createTodoComponent(todo,index) {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const button1 = document.createElement("button");
        const button2=document.createElement("button");
        j++;
        button1.innerHTML = "Delete"
        button2.innerHTML="edit"
        h1.innerHTML = todo.title;
        button2.setAttribute("id","button2-"+index);
        button1.setAttribute("id", "button-" + index);
    button1.setAttribute("onclick", `deletetodo(${index})`);
        button2.setAttribute("onclick", `edittodo(${index})`);
        div.append(h1)
        div.append(button1)
        div.append(button2)
        return div
      }
  
      // react 
      function render() {
        document.querySelector("#todos").innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
          const element = createTodoComponent(todos[i],i);
          document.querySelector("#todos").appendChild(element)
        }
      }
  
