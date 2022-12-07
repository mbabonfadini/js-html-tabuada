function getvalue(){
    var n1 = document.getElementById("base")
    var n2 = document.getElementById("mult")
    if (n1.value.length == 0 || n2.value.length == 0) {
        alert("Por favor inserir um numero!")
    }
    else {
        var num1 = Number(n1.value)
        var num2 = Number(n2.value)
        var r = ""
        var res = window.document.getElementById("answer")

        let i = 0
        res.innerHTML = `A tabuada do ${num1} é: <br>`
        do {
            r = num1 * i
            res.innerHTML += `${i} X ${num1} = ${r} <br>`
            i++
    
        } while (i <= num2)
    }
    

    
}