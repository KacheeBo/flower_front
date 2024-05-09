// var tt=document.getElementById("showPopup1")
// var yc1=document.getElementById("yc1")
// var yc2=document.getElementById("yc2")
// tt.onclick= function showPopup1(){
//     var overlay = document.getElementById("overlay");
//     overlay.style.display = "block";
//   }
// yc1.onclick= function hidePopup(){
//     var overlay = document.getElementById("overlay");
//     overlay.style.display = "none";
//   }
// yc2.onclick= function hidePopup(){
//     var overlay = document.getElementById("overlay");
//     overlay.style.display = "none";
//   }
  
  //登陆
    import ajax from '../js/ajax.js'
    var loginInfo = document.querySelector('.loginin')
    var button=document.querySelector('.loginButton')

    button.onclick=function(){
    var e=new FormData(loginInfo);

    if (e.get("u_name") === "" || e.get("u_input_ver") === "" || e.get("u_password") === "") {
        confirm("请输入相关参数！")
    }

    ajax({
        url:"http://localhost:8080/login",
        method:"post",
        data:{
            u_name:e.get("u_name"),
            u_password:e.get("u_password"),
            u_ver_code:e.get("u_input_ver")
        },
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        success:function(res){
            if(res == 0){
                confirm("登录成功",res)
                window.location.href ="../html/index0.html"
            } else if (res == 1){
            confirm("登录成功",res)
            window.location.href ="../html/index1.html"
        }
        },
        error:function(err){
            confirm("账号密码错误请重新登录",err)
    }
    
})
}

//注册
//     var registerInfo1 = document.querySelector('.registst')
//     var button1=document.querySelector('.registButton')
//     button1.onclick=function(){
//     var e=new FormData(registerInfo1)
//     //console.log(e)
//     ajax({
//         url:"http://localhost:8080/register",
//         method:"post",
//         data:{
//             u_name:e.get("u_name"),
//             u_password:e.get("u_password"),
//             u_au:e.get("u_au"),
//             u_tel:e.get("u_tel")
//         },
//         headers:{
//             "Content-Type":"application/x-www-form-urlencoded"
//         },
//         success:function(res){
//             if(res == 1){
//             alert("注册成功",res)
//             }
//             window.location.href ="../html/login.html"
//         },
//         error:function(err){
//             confirm("注册失败请重试",err)
//     }
//
// })
//
// }