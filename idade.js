function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if(fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('[ERRO] Verifique os espaços e tente novamente.')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           genero = 'homem'
           if (idade >= 0 && idade < 3){
               //bebê
               img.setAttribute('src', '/img/meninobebe.jpeg')
           } else if (idade >= 3 && idade < 18) {
               //menino
               img.setAttribute('src', '/img/menino.jpeg')
           } else if (idade >= 18 && idade < 65){
               //adulto
               img.setAttribute('src','/img/adulto.jpeg')
           } else {
               //idoso
               img.setAttribute('src', '/img/senhor.jpeg')
           }
       } else if (fsex[1].checked) {
           genero = 'mulher'
           if (idade >= 0 && idade < 3) {
               //bebê
               img.setAttribute('src', '/img/meninabebe.jpeg')
           } else if (idade >=3 && idade < 18) {
               //menina
               img.setAttribute('src', '/img/menina.jpeg')
           } else if (idade >= 18 && idade < 65) {
               //adulta
               img.setAttribute('src', '/img/adulta.jpeg')
           } else {
               //idosa
               img.setAttribute('src', '/img/senhora.jpeg')
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Você é ${genero} e ao final desse ano você terá ${idade} anos de idade!`
       res.appendChild(img)
   }
}