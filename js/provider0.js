import ajax from "./ajax.js";
var getProvider = document.querySelector('.getProvider')
// var p_id = document.getElementById("idUser").value
var buttonqueryIn = document.getElementById("searchProvider")
    buttonqueryIn.onclick = function(){
        var e = new FormData(getProvider)
        ajax({
            url: "http://localhost:8080/queryProvider",
            method: "post",
            data: {
                p_id: e.get("p_id"),
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
                document.querySelector('#result').innerHTML = '<td>' + res[0].p_id + '</td><td>' + res[0].p_name
            + '</td><td>' + res[0].p_tel + '</td><td>' + res[0].p_add + '</td>'
                /*window.location.href = '../html/flower.html'*/
            },
            error: function (err) {
                confirm("供应商查询错误", err)
                /*window.location.href = '../html/flower.html'*/
            }
        })
    }