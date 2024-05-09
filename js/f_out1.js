import ajax from "./ajax.js";
var getOutput = document.querySelector('.getOutput')
//var u_id = document.getElementById("idUser").value
var buttonqueryIn = document.getElementById("searchOutput")
    buttonqueryIn.onclick = function(){
        var e = new FormData(getOutput)
        ajax({
            url: "http://localhost:8080/queryOutput",
            method: "post",
            data: {
                o_id: e.get("o_id"),
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
                document.querySelector('#result').innerHTML = '<td>' + res[0].o_id + '</td><td>' + res[0].f_id
            + '</td><td>' + res[0].o_num + '</td><td>' + res[0].o_date + '</td><td>' + res[0].u_id + '</td><td>' + res[0].buyer + '</td>'
            },
            error: function (err) {
                confirm("出库查询错误", err)
                /*window.location.href = '../html/flower.html'*/
            }
        })
    }