    const Decrypt=require("./utils.js/code");
    init();

    function init(){
        console.log(123);
        bingEvent();
        $.ajax({
            url:"/api/v1/login/code",
            success(res){
                console.log(res);
                $('.code').html(res.data.img);
                $.cookie('mark', res.data.mark);
            }
        })
    }

        function bingEvent(){
        
            $('.code').on("click",function(){
        
                $.ajax({
                    url:"/api/v1/login/code",
                    success(res){
                
                        $('.code').html(res.data.img);
                        $.cookie('mark', res.data.mark);
                    }
                })
            
            })
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
            let code=$('.login-code').val();
            console.log(code);
            $.ajax({
                url:"/api/v1/login/login",
                data:{password,user,code},
                type:"POST",
                
            }).done((res)=>{
                if(res.code===200){
                    window.location.href="index.html"
                }else if(res.code===350){
                    alert("验证码错误")
                }else{
                    alert("账号不存在或密码错误")
                }
                    
                }
            )
        })
    }
  