

    /* 
    Case Sensitive = reconhece letras maiusculas e minusculas

    por Tag: getElementByTagName()
    por Id: getElementById()
    por Nome: getElementsByName()
    por Classe: getElementsByClassName()
    por Seletor: querySelector()
    */

    let nome = window.document.getElementById('nome')
    let email = document.querySelector('#email')
    let assunto = document.querySelector('#assunto')
    let nomeok = false
    let emailok = false
    let assuntook = false
    let mapa = document.querySelector('#mapa')

    nome.style.width = '98%'
    email.style.width = '98%'

    function validaNome() {

        let txtNome = document.querySelector('#txtNome')
        if (nome.value.length < 3) {
            txtNome.innerHTML = 'Nome Inválido'
            txtNome.style.color = 'red'
            nomeok = true
        } else {
            txtNome.innerHTML = 'Nome válido'
            txtNome.style.color = 'green'
        }

    }


    function validaEmail() {
        let txtEmail = document.querySelector('#txtEmail')

        if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red'
        } else {
            txtEmail.innerHTML = 'E-mail Válido'
            txtEmail.style.color = 'green'
            emailOk = true
        }
    }

    function validaAssunto() {
        let txtAssunto = document.querySelector('#txtAssunto')

        if (assunto.value.length >= 100) {
            txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'
        } else {
            txtAssunto.style.display = 'none'
            assuntoOk = true
        }
    }
    function enviar() {
        if (nomeok == true && emailok == true && assuntook == true) {
            alert('Formulário enviado com sucesso!')
        } else {
            alert('Preencha o formulário corretamente antes de enviar!')
        }

    }

    function mapaZoom() {
        mapa.style.width = '800px'
        mapa.style.height = '600px'
    }

    function mapaNormal() {
        mapa.style.width = '400px'
        mapa.style.height = '250px'
    }