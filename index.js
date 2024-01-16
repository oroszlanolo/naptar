
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

const ID = GetURLParameter("ID");
// const imageURL = `http://192.168.0.156:6875/img/${ID}`;
const imageURL = `https://naptar.oroszlanolo.hu/img/${ID}`;

console.log(imageURL);

const imgContainer = document.getElementById("imgContainer");

if(ID) {
    let imgElement = document.createElement('img');
    imgElement.src = imageURL;
    imgContainer.append(imgElement);
}

let code = "";
const codeInput = document.getElementById("code");
const goBtn = document.getElementById("goBtn");

codeInput.oninput = (element) => {
    code = element.target.value;
}

goBtn.onclick = () => {
    if(code == "") return;
    window.location.href = `${window.location.origin}${window.location.pathname}?ID=${code}`;
}