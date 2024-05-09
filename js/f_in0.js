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

// 查询入库信息
// var i_id = document.getElementById("inputid").value
// var buttonqueryIn = document.getElementById("searchin")
//     buttonqueryIn.onclick = function(){
//         fetch("http://localhost:8080/queryInput", {
//             method: 'post',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ i_id })
//         })
//     .then(response => {
//         if(response.data.code == 200){
//            //查询成功后 的操作       
//            document.querySelector('#result').innerHTML = '<td>' + response.data.data.i_id + '</td><td>' + response.data.data.f_id
//             + '</td><td>' + response.data.data.i_num + '</td><td>' + response.data.data.i_date + '</td><td>' + response.data.data.u_id + '</td><td>' + response.data.data.buyer + '</td>'
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
        url: "http://localhost:8080/f_in",
        method: "post",
        data: {
            f_id: e.get("f_id"),
            i_num: e.get("i_num"),
            i_date: e.get("i_date"),
            u_id: e.get("u_id"),
            p_id: e.get("p_id"),
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
            if (res == 1) {
                alert("入库成功", res)
            }
            /*window.location.href = '../html/flower.html'*/
        },
        error: function (err) {
            confirm("入库失败", err)
            /*window.location.href = '../html/flower.html'*/
        }
    })
}

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