fetch('https://fakestoreapi.com/carts')
.then((res)=>res.json())
.then((data)=>{console.log(data)
     let text=""
    data.map((values)=>{
        text+=`<tr>
        <th scope="col">${values.id}</th>
        <th scope="col">${values.userId}</th>
        <th scope="col">${values.date}</th>
       
      </tr>`

    })
    document.getElementById("result").innerHTML=text
})
