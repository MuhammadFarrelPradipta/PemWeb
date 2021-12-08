function kalkulator(){
    var total;
    var angka1 = parseInt(document.getElementById ('angka1').value);
    var angka2 = parseInt(document.getElementById ("angka2").value);
    // Operasi 
    var op  = document.getElementById("op").value;
    var hasil = document.getElementById("hasil");
    if (isNaN(angka1) || isNaN(angka2))
        {
                alert("mohon isi form dengan angka!");
        }
    else   
        {
            if (op == "+")
                {
                    total=angka1+angka2;
                }
            else if (op == "-")
                {
                    total=angka1-angka2;
                }
            else if (op == "*")
                {
                    total  = angka1*angka2;
                }
            else 
                {
                    total= angka1/angka2;
                }
        }
        hasil.value = total;
    
}

function mencoba(){
    let coba = document.querySelector("h4").innerHTML;
document.querySelector("h4").innerHTML = coba.replace("GOOGLE","MICROSOFT");
}
