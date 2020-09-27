function contar(){
    let inicio = window.document.querySelector('input#txtini')
    let fim = window.document.querySelector('input#txtfim')
    let passo = window.document.querySelector('input#txtpasso')

    let res = window.document.querySelector('div#res')

    // valeu.length verifica se o campo está vazio
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar \u{26D4}`        
    }else {
        //preenche o elemento com o que foi escolhido. 
        res.innerHTML = 'contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ){
            window.alert('Passo inválido, considerando passo 1')
            p = 1
        }
        if(i < f){
                //contagem crescente
                for(let c = i; c <= f; c += p){
                    res.innerHTML += `${c} \u{1F449}`
                }
                    // use "mais igual" para não apagar o innerHTML anterior do elemento
            } else {
                //contagem regressiva
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1F449}`
                }
                    // use "mais igual" para não apagar o innerHTML anterior do elemento
                    
            }
            res.innerHTML += ` \u{1F3C1}`
        //pegar emojis no https://unicode.org/emoji/charts/full-emoji-list.html formatar da seguinte forma U+1F449 = \u{1F449}   
    }
}