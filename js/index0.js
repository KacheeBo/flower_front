import ajax from "./ajax.js";
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

// var res
// var xhr = new XMLHttpRequest()
//         xhr.open("post","http://localhost:8080/queryAllFlower")
//         xhr.send()
//         xhr.onload =function(){
//             if(xhr.status===200){
//                 console.log(JSON.parse(xhr.responseText))
//                 res = JSON.parse(xhr.responseText)
//                 for( var i=0;i<res.length;i++ ){
//                      document.querySelector('#result').innerHTML += `<div>
//                                                                     <span>${res[i].f_id}</span>
//                                                                     <span>${res[i].f_name}</span>
//                                                                     <span>${res[i].price}</span>
//                                                                     <span>${res[i].num}</span>
//                                                                     <span>查询删除</span>
//                                                                     </div>
//                                                                     `
//                }
//         }
//     }