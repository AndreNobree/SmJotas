const btn = document.querySelector('#btnenvio');

const toastLiveExample = document.getElementById('liveToast')
const toastLiveExample1 = document.getElementById('liveToast1')
const toastLiveExample2 = document.getElementById('liveToast2')
const toastLiveExample3 = document.getElementById('liveToast3')

btn.addEventListener("click", function(e){
    e.preventDefault();
    const valor1 = document.getElementById('exampleFormControlInput1')
    const email = valor1.value

    const valor2 = document.getElementById('nomePessoa')
    const nome = valor2.value
    
    const valor3 = document.getElementById('exampleFormControlInput2')
    const telefone = valor3.value
    const tamanhoTel = telefone.length

    const valor4 = document.getElementById('exampleFormControlTextarea1')
    const assunto = valor4.value
    const tamanhoAss = assunto.length

    try{
        if (email.includes('@') && email.includes('.com')){
            

            if (nome == '' || nome == ' ' || nome == '  '){
                const toast1 = new bootstrap.Toast(toastLiveExample1)

                toast1.show()
            }
            else{
                if (tamanhoTel >= 10 && telefone != ''){
                    
                    if (tamanhoAss < 12){
                        const toast3 = new bootstrap.Toast(toastLiveExample3)

                        toast3.show()
                    }
                    else{
                        console.log('Enviado com sucesso')
                    }

                }
                else{
                    const toast2 = new bootstrap.Toast(toastLiveExample2)

                    toast2.show()
                }
            }

        }
        else{
    
            const toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
                        
        }
    }
    catch{
        console.log('Campos em Branco ou Inválidos, Verifique todos os campos')
    }
    
})