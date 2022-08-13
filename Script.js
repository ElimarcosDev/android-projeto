        var hrr = new Date()
        var hora = hrr.getHours()
        var bom = document.getElementById('ola')
        if(hora > 4 && hora <= 12){
            bom.innerHTML = "Olá, Bom dia"
        }
        else if(hora > 12 && hora <= 18){
            bom.innerHTML = "Olá, Boa tarde!"
        }
        else {
            bom.innerHTML = "Olá, Boa noite!"
        }