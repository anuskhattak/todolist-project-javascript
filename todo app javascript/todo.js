let input = document.getElementById("input-box");
let text = document.querySelector(".text");

function addTask(){
    if(input.value == ""){
        alert("Enter the task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${input.value} <i class="fa fa-trash" aria-hidden="true"></i> `;
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove()
        }
    }
}
