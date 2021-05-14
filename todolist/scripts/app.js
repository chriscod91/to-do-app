
function saveTodo(){
    let input = $("#txtTodo"); 
    let text = input.val();// get the text from input field
    console.log("Saving todo:" + text);

    let syntax = "<div class='todo-item'><h6>" + text + "</h6></div>";
    $("#pendingList").append(syntax);
    
    input.val("").focus();
}// clear field

function init(){
    console.log("Todo App!!");
    //load data
    
    //hook events
    $("#btnSave").click( saveTodo );
    $("#txtTodo").keypress(function(args) {
        if(args.keyCode===13){
               saveTodo();
        }
   });
}

window.onload = init;   