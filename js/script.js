const btnFechar = document.querySelector('.btn_fechar')
const msgErro = document.querySelector('.modal_msg_erro')
const msgSucesso = document.querySelector('.modal_msg_sucesso')
const modalEnviar = document.querySelector('.modal_enviar')
const btnEnviar = document.querySelector('.btn_enviar')

const validarDados = ({ nome, email}) => {
    
    const nomeValido = nome && nome.length >= 3
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/
    const emailValido = email && emailRegex.test(email)
  
    return {
        nomeValido,
        emailValido
    }
}


const pegarDados = () => {
    const dados = {
        nome: document.querySelector('.input_nome').value,
        email : document.querySelector('.input_email').value
    }
    const {nomeValido, emailValido } = validarDados(dados)
    const reset = nomeValido && emailValido ? document.querySelector('form').reset() : ''

    return nomeValido && emailValido ? 'sucesso' : 'erro'
}


const formatarModal = (statusReg) => {
    msgSucesso.style.display = (statusReg === 'sucesso') ? 'block' : 'none'
    msgErro.style.display = (statusReg === 'erro') ? 'block' : 'none'
    btnFechar.classList.add((statusReg === 'sucesso') ? 'bg_sucesso' : 'bg_erro')
    btnFechar.classList.remove((statusReg === 'sucesso') ? 'bg_erro' : 'bg_sucesso')

   
}

const mostrarModal = (statusReg) => {
    formatarModal(statusReg)
    modalEnviar.showModal()
}

    btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    
    mostrarModal(pegarDados())

    
})

    btnFechar.addEventListener('click', () => {
    modalEnviar.close()

})
