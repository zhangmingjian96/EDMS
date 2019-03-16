const addClick=()=>{
    $(".exit-btn").on("click",function(){
        $.ajax({
            url:"/api/v1/login/exit",
            data:{
                exit:1,
            },
            success(res){
                console.log(res)
            }
        })
        window.location.href="login.html"
       
    })
    $(".treeview a").on("click",function(){
            console.log($(this).data("navname"),this);
        switch($(this).data("navname")){
            case "doc":
            location.hash="#/document"
            break;
            case "docList":
            location.hash="#/doc/docList"
            break;
            case "addDoc":
            location.hash="#/doc/addDoc"
            break;
            case "user":
            location.hash="#/user"
            break;
            case "userList":
            location.hash="#/user/userList"
            break;
            case "addUser":
            location.hash="#/user/addUser"
            break;
            case "userLeave":
            location.hash="#/user/userLeave"
            break;
            case "system":
            location.hash="#/system"
            break;


        }
    })

}

module.exports=addClick;