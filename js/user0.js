import ajax from "./ajax.js";
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
            + '</td><td>' + res[0].u_tel + '</td><td>' + res[0].u_au + '</td>'
                /*window.location.href = '../html/flower.html'*/
            },
            error: function (err) {
                confirm("用户查询错误", err)
                /*window.location.href = '../html/flower.html'*/
            }
        })
    }