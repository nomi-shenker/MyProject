fetch('https://localhost:44328/api/Roles').then(res => {
        res.json().then(data => {
            for (let index = 0; index < data.length; index++) {
                s = document.getElementById("sel");
                s[index].innerHTML = data[index].id;
            }
            console.log(data)
        })
    })

function run() {
    let s;
    fetch('https://localhost:44328/api/Roles').then(res => {
        res.json().then(data => {
            for (let index = 0; index < data.length; index++) {
                document.getElementById("data").innerHTML += JSON.stringify(data[index]);
                document.getElementById("data").innerHTML += "<br/>";
            }
            console.log(data)
        })
    })
}
function deleteRole(){
    let id=document.getElementById("sel").value;
    fetch(`https://localhost:44328/api/Roles/${id}`,{method:'DELETE'}).then(res => {
    })
    
}
function updateRole(){
    let id=document.getElementById("sel").value;
    let nameFix=document.getElementById("newName").value;
    fetch(`https://localhost:44328/api/Roles/${id},${nameFix}`,{method:'PUT'}).then(res => {
    })
    
}


