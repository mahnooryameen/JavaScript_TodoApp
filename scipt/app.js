//uper humny ek element generatekr diya

function addtodo() {
  var todolist = document.getElementById("todolist");
  console.log("run");
  var todoinput = document.getElementById("todoinput").value;
  

  //li banaya
  var listitem = document.createElement("li");
  listitem.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-center"
  );
  todolist.appendChild(listitem);

  //span banaya
  var spanofli = document.createElement("span");
  var textofspan = document.createTextNode(todoinput);
  spanofli.appendChild(textofspan);
  listitem.appendChild(spanofli);

  //button banaya
  var buttonofli = document.createElement("button");
  buttonofli.setAttribute("class", "btn btn-dark");
  var textofbutton = document.createTextNode("mark as done");
  buttonofli.appendChild(textofbutton);
  listitem.appendChild(buttonofli);
  buttonofli.setAttribute('onclick','tododone(this)');

  document.getElementById('todoinput').value="";
}

function tododone(abc){
    //console.log("wdicit");
//abc.parentNode.remove();
abc.previousSibling.setAttribute('class','text-decoration-line-through')


}


