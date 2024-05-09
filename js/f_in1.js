import ajax from "./ajax.js";
var getInput = document.querySelector('.getInput')
//var u_id = document.getElementById("idUser").value
var buttonqueryIn = document.getElementById("searchInput")
    buttonqueryIn.onclick = function(){
        var e = new FormData(getInput)
        ajax({
            url: "http://localhost:8080/queryInput",
            method: "post",
            data: {
                i_id: e.get("i_id"),
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
                document.querySelector('#result').innerHTML = '<td>' + res[0].i_id + '</td><td>' + res[0].f_id
            + '</td><td>' + res[0].i_num + '</td><td>' + res[0].i_date + '</td><td>' + res[0].u_id + '</td><td>' + res[0].p_id + '</td>'
            },
            error: function (err) {
                confirm("入库查询错误", err)
                /*window.location.href = '../html/flower.html'*/
            }
        })
    }