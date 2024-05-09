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

// var o_id = document.getElementById("outsearch").value
// var buttonqueryOut = document.getElementById("searchout")
//     buttonqueryOut.onclick = function(){
//         fetch("http://localhost:8080/queryOutput", {
//             method: 'post',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ o_id })
//         })
//     .then(response => {
//         if(response.data.code == 200){
//            //查询成功后 的操作       
//            document.querySelector('#result').innerHTML = '<td>' + response.data.data.o_id + '</td><td>' + response.data.data.f_id
//             + '</td><td>' + response.data.data.o_num + '</td><td>' + response.data.data.o_date + '</td><td>' + response.data.data.u_id + '</td><td>' + response.data.data.p_id + '</td>'
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
        url: "http://localhost:8080/f_out",
        method: "post",
        data: {
            f_id: e.get("f_id"),
            o_num: e.get("o_num"),
            o_date: e.get("o_date"),
            u_id: e.get("u_id"),
            buyer: e.get("buyer"),
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
            if (res == 1) {
                alert("出库成功", res)
            }
            /*window.location.href = '../html/flower.html'*/
        },
        error: function (err) {
            confirm("出库失败", err)
            /*window.location.href = '../html/flower.html'*/
        }
    })
}

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