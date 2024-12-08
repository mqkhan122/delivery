//  ================== Sign Up =========================

function Sign(){
    let ob = {
        nm : document.querySelector('#name').value,
        em : document.querySelector('#email').value,
         ps : document.querySelector('#password').value,
    }

    localStorage.setItem("data",JSON.stringify(ob))
}

let redata = JSON.parse(localStorage.getItem('data'))

// ========================= Login =========================

function login(){
    let em = document.querySelector('#email').value
    let ps = document.querySelector('#password').value
   
    
    if(em == redata.em && ps == redata.ps){
        alert("matched..!!")
    }

    else{
        alert("User Not found")
        return false
    }
}

// =================== Delivery ==================

// async function fetch_Data() {
//     let stdata = await fetch("http://localhost:3000/student")
//     let res = await stdata.json()
//     let data_store = res.map((e)=>`
    
//      <tr>
//        <td> ${e.id} </td>
//        <td> ${e.name} </td>
//        <td> ${e.age} </td>
//        <td> <button onclick="mydelete('${e.id}')"> Delete </button> </td>
//        <td> <button onclick="myedit('${e.id}')"> Edit </button> </td>
//      </tr>

//     `).join("")
//     document.getElementById('showdata').innerHTML = data_store
// }
// fetch_Data()

// function mydelete(id){
//   fetch(`http://localhost:3000/student/${id}`,{
//     method:"DELETE"
//   })
//   .then(r=>alert("deleted"))
// }



function delivery(){
     let frmdata = {
        address:document.getElementById('address').value,
        contact:document.getElementById('contact').value,
        rec_address:document.getElementById('rec_address').value,
        rec_contact:document.getElementById('rec_contact').value,
        pc_weight:document.getElementById('pc_weight').value,
        pc_des:document.getElementById('pc_des').value,
        es_cost:document.getElementById('es_cost').value,
        del_op:document.getElementById('del_op').value
     }

     fetch("http://localhost:3000/Delivery",{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(frmdata)
     })
     .then(re=>alert("Data inserted..!!"))
     .catch(t=>alert("error"))
}


// async function myedit(id){

//   let r = await fetch(`http://localhost:3000/student/${id}`)
//   let data =await r.json()
//   let frm = `
//   <input type="text" value='${data.id}' readonly> <br><br>
//   <input type="text" value='${data.name}' id="nm1"> <br><br>
//   <input type="text" value='${data.age}' id="ag1"> <br><br>
//   <input type="submit" value="update" onclick="finalupdate('${data.id}')">
//   `
//   document.getElementById('demoo').innerHTML = frm
  
// }

// function finalupdate(strid){

//   let frm = {
//     name:document.getElementById('nm1').value,
//     age:document.getElementById('ag1').value
//   }

//   fetch(`http://localhost:3000/student/${strid}`,{
//     method:'PUT',
//     headers:{
//       'Content-type':'application/json'
//     },
//     body:JSON.stringify(frm)
//   })
//   .then(r=>alert("Updated...!!!"))
// }

