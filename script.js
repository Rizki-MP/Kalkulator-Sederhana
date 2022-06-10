let btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    let nilaiPertama = document.getElementById("nilaiPertama").value
    let nilaiKedua = document.getElementById("nilaiKedua").value
    let operator = document.getElementById("operator").value
    let tambah = document.getElementById("tambah").value
    let kurang = document.getElementById("kurang").value
    let kali = document.getElementById("kali").value
    let bagi = document.getElementById("bagi").value
    let hasil = document.getElementById("hasil")

    // document.getElementById("hasil").innerHTML
    nilaiPertama = parseInt(nilaiPertama)
    nilaiKedua = parseInt(nilaiKedua)
    hasilPertambahan = nilaiPertama + nilaiKedua
    hasilPengurangan = nilaiPertama - nilaiKedua
    hasilPerkalian = nilaiPertama * nilaiKedua
    hasilPembagian = nilaiPertama / nilaiKedua

    console.log(operator)

    if (operator === "+") {
        hasil.innerHTML = hasilPertambahan
    } else if (operator === "-") {
        hasil.innerHTML = hasilPengurangan
    } else if (operator === "x") {
        hasil.innerHTML = hasilPerkalian
    } else if (operator === "%") {
        hasil.innerHTML = hasilPembagian
    } else {
        hasil.innerHTML = "Lu Salah Ngisinya GOBLOK"
    }
})
