function get()
{
    let f;
fetch("https://localhost:44328/api/Roles").then(res=>{res.json().then(data=>{
    for(let i=0;i<data.length;i++)
    {
        document.getElementById("data").innerHTML+=JSON.stringify(data[i]);
        document.getElementById("data").innerHTML="<br/>";
        f=document.getElementById("select");
        f[i].innerHTML=data[i].id;
    }
   })
 })
}

function deleteRole()
{
    let id=document.getElementById("select").value;
    fetch(`https://localhost:44328/api/Roles/${id}`,{method:"DELETE"},).then(res=>{});
}

function updateRole()
{
    let name=document.getElementById("name").value;
    let id=document.getElementById("select").value;
    fetch(`https://localhost:44328/api/Roles/${id},${name}`,{method:"PUT"},).then(res=>{});
}