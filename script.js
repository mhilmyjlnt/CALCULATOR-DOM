const i1 = document.querySelector("#i1");
const i2 = document.querySelector("#i2");
const hasil = document.querySelector("#hasil");

function hitung(operator){
    const x = parseFloat(i1.value);
    const y = parseFloat(i2.value);
    let z;

    if(operator == "+"){
        console.log('ok')
        z=x+y;
        hasil.innerText = z;
    } else if (operator == "-"){
        z=x-y;
        hasil.innerText = z;        
    }
     else if (operator == "*"){
        z=x*y;
        hasil.innerText = z;

        
    }
     else if (operator == "/"){
        z=x/y;
        hasil.innerText = z;
    }
}

function btnReset(){
    i1.value="";
    i2.value="";
    hasil.innerHTML= "";
}