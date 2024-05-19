let row=document.getElementById('row');
fetch("https://api.tvmaze.com/episodes/1/guestcrew")
.then((result)=>result.json())
.then((msg)=>{
    
    msg.forEach((val)=>{
        console.log(val);
        createcard(val);
    })
    
})
function createcard(data)
{
   
    row.innerHTML+=`
    <div  class="col-4">
    <img src=${data.person.image.medium} />
    
        <p>${data.person.name}</p>
    </div>
    `;
}