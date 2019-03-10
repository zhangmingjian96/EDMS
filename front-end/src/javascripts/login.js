    init();

    function init(){
        console.log(123);
        bingEvent();
    }

    function bingEvent(){
       
        $(".text-register").on("click",function(e){
            
            $(".registers").css("display","none");
            $(".logins").css("display","block");
            
        })
        $(".text-login").on("click",function(e){
            $(".registers").css("display","block");
            $(".logins").css("display","none");
        })
        $(".btn-register").on("click",function(e){
            e.preventDefault();
            let password=$(".user-password").val();
            let user=$(".user-user").val();
            let username=$(".user-name").val();

           $.ajax({
               url:"/api/v1/login/register",
               data:{password,user,username},
               type:"POST"
           })
        })
        $(".btn-login").on("click",function(e){
            console.log(123);
            e.preventDefault();
            let password=$(".login-password").val();
            let user=$(".login-user").val();
            $.ajax({
                url:"/api/v1/login/login",
                data:{password,user},
                type:"POST"
            })
        })
    }
  