/*弹出框*/
var tt = document.getElementById("showPopup")
tt.onclick = function showPopup() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
}
var c1 = document.getElementById("cancl1")
c1.onclick = function cancl1() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}
var c2 = document.getElementById("cancl2")
c2.onclick = function cancl2() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

// 查询用户信息
// var u_id = document.getElementById("idUser").value
// var buttonqueryIn = document.getElementById("searchUser")
//     buttonqueryIn.onclick = function(){
//        let response = fetch("http://localhost:8080/queryUser", {
//             method: 'post',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ u_id })
//         })
//         console.log(response)
//     .then(res => res.json());
//         if(response.code == 200){
//            //查询成功后 的操作 
//            console.log(response)      
//            document.querySelector('#result').innerHTML = '<td>' + response.data[0].u_id + '</td><td>' + response.data[0].u_name
//             + '</td><td>' + response.data[0].u_tel + '</td><td>' + response.data[0].u_au + '</td>'
//     }
//     }


/*添加信息*/
import ajax from "./ajax.js";
var inseart_f = document.querySelector('.inseart_f')
var button = document.querySelector('.increaseButton')
button.onclick = function () {
    var e = new FormData(inseart_f)
    ajax({
        url: "http://localhost:8080/user",
        method: "post",
        data: {
            u_name: e.get("u_name"),
            u_tel: e.get("u_tel"),
            u_password: e.get("u_password"),
            u_au: e.get("u_au"),
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
            if (res == 1) {
                alert("增加员工信息成功", res)
            }
            /*window.location.href = '../html/flower.html'*/
        },
        error: function (err) {
            confirm("已有此员工", err)
            /*window.location.href = '../html/flower.html'*/
        }
    })
}

var getUser = document.querySelector('.getUser')
var u_id = document.getElementById("idUser").value
var buttonqueryIn = document.getElementById("searchUser")
    buttonqueryIn.onclick = function(){
        var e = new FormData(getUser)
        ajax({
            url: "http://localhost:8080/queryUser",
            method: "post",
            data: {
                u_id: e.get("u_id"),
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
                document.querySelector('#result').innerHTML = '<td>' + res[0].u_id + '</td><td>' + res[0].u_name
            + '</td><td>' + res[0].u_tel + '</td><td>' + res[0].u_au + '</td><a id="deleteUser">删除</a><td>'+'</td>'
            var buttondelete = document.getElementById("deleteUser")
             buttondelete.onclick = function(){
                ajax({
                    url: "http://localhost:8080/deleteu",
                    method: "post",
                    data: {
                        u_id: e.get("u_id"),
                    },
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function (res) {
                        confirm("用户删除成功",res)
                        window.location.href = '../html/user1.html'
                    },
                    error: function (err) {
                        confirm("用户删除失败", err)
                        /*window.location.href = '../html/flower.html'*/
                    }
                })
             }
                /*window.location.href = '../html/flower.html'*/
            },
            error: function (err) {
                confirm("用户查询错误", err)
                /*window.location.href = '../html/flower.html'*/
            }
        })
    }