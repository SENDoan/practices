

// function addName() {
//     var li = document.createElement("LI");
//     var inputName = document.getElementById("inputName").value;
//     li.appendChild(document.createTextNode(inputName));
//     li.className = "text-left";
//     if(inputName === ''){
//         alert("Bạn chưa nhập tên!");
//     }else {
//         document.getElementById("ulList").appendChild(li);
//     }
//     document.getElementById("inputName").value = "";
//
//     var btn = document.createElement("BUTTON");
//     var txt = document.createTextNode("Xóa");
//     btn.className = "btn btn-info del";
//     btn.appendChild(txt);
//     li.appendChild(btn);
//
//     var del = document.getElementsByClassName("del");
//     for (var i = 0; i < del.length; i++) {
//         del[i].onclick = function() {
//             var div = this.parentElement;
//             document.getElementById("ulList").removeChild(div);
//         }
//     }
// }


$(document).ready(function () {
    $("#btnAdd").click(function () {
        var $input = $("#inputName").val();
        var $li = $("<li></li>").text($input);
        $li.addClass("text-left");
        if ($input === ''){
            alert("Bạn chưa nhập tên!");
        } else{
            $("#ulList").append($li);
        }
        $("#inputName").val("");

        var $btn = $("<button></button>").text("Xóa");
        $btn.addClass("btn btn-info del");
        $li.append($btn);


        $($btn).click(function () {
            $($btn).parent().remove();
        });
    });
})