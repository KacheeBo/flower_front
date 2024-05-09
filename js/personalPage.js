var backLogo = document.getElementById("backLogo")
backLogo.onclick = function (){
    window.history.go(-1);
}

var load = new XMLHttpRequest()
var res
load.open("post","http://localhost:8080/queryUser")
load.send()
load.onload =function(){
        if(load.status===200){
            console.log(JSON.parse(load.responseText))
            res = JSON.parse(load.responseText)
            document.querySelector('.infoname').innerHTML = 
            '<span>欢迎，' + res[0].u_name + '</span>'
            
    }
}

var load1 = new XMLHttpRequest()
var res
load1.open("post","http://localhost:8080/queryUser")
load1.send()
load1.onload =function(){
        if(load1.status===200){
            console.log(JSON.parse(load1.responseText))
            res = JSON.parse(load1.responseText)
            document.querySelector('.infotel').innerHTML = 
            '<span>联系电话：' + res[0].u_tel + '</span>'
            
    }
}

import ajax from '../js/ajax.js'
    var Infoedit = document.querySelector('.content')
    var button=document.querySelector('.button')
    button.onclick=function(){
    var e=new FormData(Infoedit)
    ajax({
        url:"http://localhost:8080/modifyUser",
        method:"post",
        data:{
            u_name:e.get("u_name"),
            u_tel:e.get("u_tel"),
            u_password:e.get("u_password")
        },
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
})
    confirm("修改成功")
    
}
