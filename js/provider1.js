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

// 查询供应商信息
// var p_id = document.getElementById("idProvider").value
// var buttonqueryIn = document.getElementById("searchProvider")
//     buttonqueryIn.onclick = function(){
//         fetch("http://localhost:8080/queryProvider", {
//             method: 'post',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ p_id })
//         })
//     .then(response => {
//         if(response.data.code == 200){
//            //查询成功后 的操作       
//            document.querySelector('#result').innerHTML = '<td>' + response.data.data.p_id + '</td><td>' + response.data.data.p_name
//             + '</td><td>' + response.data.data.p_tel + '</td><td>' + response.data.data.p_add + '</td>'
//     }
// })
//     }


/*添加信息*/
import ajax from "./ajax.js";
var inseart_f = document.querySelector('.inseart_f')
var button = document.querySelector('.increaseButton')
button.onclick = function () {
    var e = new FormData(inseart_f)
    ajax({
        url: "http://localhost:8080/provider",
        method: "post",
        data: {
            p_name: e.get("p_name"),
            p_tel: e.get("p_tel"),
            p_add: e.get("p_add"),
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
            if (res == 1) {
                alert("增加供应商成功", res)
            }
            /*window.location.href = '../html/flower.html'*/
        },
        error: function (err) {
            confirm("已存在此供应商", err)
            /*window.location.href = '../html/flower.html'*/
        }
    })
}

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