// /*弹出框*/
// var tt = document.getElementById("showPopup")
// console.log(tt)
// tt.addEventListener('click', function () {
//     console.log(111)
//     var overlay = document.getElementById("overlay");
//     overlay.style.display = "block";
// })
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

// 查询鲜花信息
// var f_name = document.getElementById("idFlower").value
// var buttonqueryIn = document.getElementById("searchFlower")
//     buttonqueryIn.onclick = function(){
//         fetch("http://localhost:8080/queryFlower", {
//             method: "post",
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ f_name })
//         })
//     .then(response => {
//         if(response.data.code == 200){
//            //查询成功后 的操作
//            document.querySelector('#result').innerHTML = '<td>' + response.data.data.f_id + '</td><td>' + response.data.data.f_name
//             + '</td><td>' + response.data.data.price + '</td><td>' + response.data.data.num + '</td>'
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
        url: "http://localhost:8080/flower",
        method: "post",
        data: {
            f_name: e.get("f_name"),
            price: e.get("price"),
            num: e.get("num"),
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
            if (res == 1) {
                alert("增添鲜花信息成功", res)
            }
            /*window.location.href = '../html/flower.html'*/
        },
        error: function (err) {
            confirm("库中已存在此种鲜花", err)
            /*window.location.href = '../html/flower.html'*/
        }
    })
}

var getFlower = document.querySelector('.getFlower')

//var u_id = document.getElementById("idUser").value
var buttonqueryIn = document.getElementById("searchFlower")
    buttonqueryIn.onclick = function(){
        var e = new FormData(getFlower)
        ajax({
            url: "http://localhost:8080/queryFlower",
            method: "post",
            data: {
                f_name: e.get("f_name"),
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
                document.querySelector('#result').innerHTML = `<div>
                                                                    <span>${res[0].f_id}</span>
                                                                    <span>${res[0].f_name}</span> 
                                                                    <span>${res[0].price}</span>
                                                                    <span>${res[0].num}</span>
                                                                    <span><a id="deleteFlower">删除</a></span>
                                                                    </div>
                                                                    `
            //     document.querySelector('#result').innerHTML = '<span>' + res[0].f_id + '</span><span>' + res[0].f_name
            //  + '</span><span>' + res[0].price + '</span><span>' + res[0].num + '</span><a id="deleteFlower">删除</span><span>' +'</span>'
             var buttondelete = document.getElementById("deleteFlower")
             buttondelete.onclick = function(){
                ajax({
                    url: "http://localhost:8080/deletef",
                    method: "post",
                    data: {
                        f_name: e.get("f_name"),
                    },
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function (res) {
                        confirm("鲜花删除成功",res)
                        window.location.href = '../html/index1.html'
                    },
                    error: function (err) {
                        confirm("鲜花删除失败", err)
                        /*window.location.href = '../html/flower.html'*/
                    }
                })
             }

            },
            error: function (err) {
                confirm("鲜花查询错误", err)
                /*window.location.href = '../html/flower.html'*/
            }
        })
    }

// var xhr = new XMLHttpRequest()
// xhr.open = function(){
//     var e = new FormData(getFlower)
//         ajax({
//             url: "http://localhost:8080/queryAllFlower",
//             method: "post",
//             // data: {
//             //     i_id: e.get("i_id"),
//             // },
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             success: function (res) {
//                 for( var p in res ){
//                     document.querySelector('#result').innerHTML = '<td>' + res[p].f_id + '</td><td>' + res[p].f_name
//                     + '</td><td>' + res[p].price + '</td><td>' + res[p].num + '</td>'
//                 }  
//             },
//             error: function (err) {
//                 confirm("鲜花查询错误", err)
//                 /*window.location.href = '../html/flower.html'*/
//             }
//         })
// }

var res
// var xhr = new XMLHttpRequest()
//         xhr.open("post","http://localhost:8080/queryAllFlower")
//         xhr.send()
//         xhr.onload =function(){
//             if(xhr.status===200){
//                 console.log(JSON.parse(xhr.responseText))
//                 res = JSON.parse(xhr.responseText)
//                 goodsDetail = res;
//         }
//     }