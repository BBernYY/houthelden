const df = [
//het formaat is:
//  {
//      "naam": "[vul in]",
//      "desc": "[vul in]",
//      "foto_url": "[vul in]",
//      "email": "[vul in]"
//  }, <--voeg een komma toe behalve bij de laatste
    {
        "naam": "Boom",
        "desc": "Gemaakt door moeder natuur",
        "foto_url": "foto1.jpg",
        "email": "moedernatuur123@aarde.com"
    }
    
    
]
body = document.body
if(page==1){
    for (let i = 0;i<df.length;i++){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let a = document.createElement("a");

        img.src = "assets\\"+df[i].foto_url
        img.className = "thumbnail"
        h2.innerText = df[i].naam
        p.innerText = df[i].desc
        a.className = "button"
        a.href = "./card.html?id="+i
        a.innerText = "info"
        

        
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(a)


        div.className = "card"
        body.appendChild(div)
    }
} else {
    let i = parseInt(window.location.search.replace('?id=',''))
    console.log(i)
    let div = document.createElement("div");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let p2 = document.createElement("p");

        img.src = "assets\\"+df[i].foto_url
        img.className = "thumbnail"
        h2.innerText = df[i].naam
        p.innerText = df[i].desc
        p2.innerText = "email: "+df[i].email
        p2.style.fontWeight = "bold";
        

        
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(p2)


        div.className = "card"
        body.appendChild(div)

}