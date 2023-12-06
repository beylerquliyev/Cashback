let inp1=document.querySelector("#inp1")
let inp2=document.querySelector("#inpt2")
let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let tb2=document.querySelector("#tb2")
let table=document.querySelector("#table")
let table2=document.querySelector("#table2")

const Bank={
 

   arrH:[],

   push:function(){
    Bank.arrH.push(Bank.history)
   },

   add:function ()
   {
    
    const history={
    amount:"",
    cashBack:"",
    Cash:"",
    Time:"",

}
      let value1=inp1.value
    let value2=inp2.value
    if(value1.length==0||value2.length==0||value1==0||value2==0){
     return alert("Duzgun geyd olunmayib")
 
    }
    let result=value1*value2/100
    tb2.innerHTML=result
    let date=new Date
    history.amount=value1
    history.Cash=value2
history.cashBack=result
   history.Time=`${date.getDate()<10?"0"+date.getDate():+date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}   ${date.getHours()}:${date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()}`
    this.arrH.push(history)
    
    },
    
    
    
    
   


 
 

  
}





btn1.addEventListener("click",function(){
   
    Bank.add()
    
   inp1.value=""
   inp2.value=""
   let arr2=Bank.arrH.map(function(item,index){
    return`<tr>
    <th scope="row">${index+1}</th>
    <td>${item.amount}</td>
    <td>${item.cashBack}</td>
    <td>${item.Cash}</td>
    <td>${item.Time}</td>
   </tr>`
   }).join("")
   table2.innerHTML=arr2
  
})






btn2.addEventListener("click",function(){
    if(table.classList.contains("d-none")){
        table.classList.remove("d-none")
    }
    else{
        table.classList.add("d-none")
    }


})


   










