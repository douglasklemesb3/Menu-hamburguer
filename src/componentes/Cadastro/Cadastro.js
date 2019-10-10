import React, {useState, useEffect} from 'react';
import Input from '../Input';
import Button from '../Button/Button';

const Cadastro = () => {
        const [nome, setNome] = useState("");
        const [email, setEmail] = useState("");
        const [confirmEmail, setConfirmEmail] = useState("");
        const [senha, setSenha] = useState("");
        const [numb, setNumb] = useState(1);
        const [ count, setCount] = useState(1);
        const [mensagem, setMensagem] = useState("");


        const respota = texto =>{
            setMensagem(texto);
            setTimeout(()=>{
                setMensagem("");
            },2000)
        }
        const handleClearInput = () =>{
            setNome("");
            setEmail("");
            setConfirmEmail("");
            setSenha("");
            respota("Cadastrado feito com sucesso!! ")
        }
        const handleSubmit = (e) => {
            if(email === confirmEmail){
                e.preventDefault();
                const payload = {
                    name: nome,
                    email: email,
                    confirm_email: confirmEmail,
                    password: senha,
                }
                localStorage.setItem(`Dados ${count}`, JSON.stringify(payload));
                setCount(count + 1);
                
                handleClearInput()

            }
            else{
              respota("Os email estao errados!!")
            }
        
        };

        useEffect(()=>{
            fetch(`https://rickandmortyapi.com/api/character/${numb}`,{
                method: "GET"
            }).then(result=>{
                return result.json()
            }).then(data =>{
                console.log(data)
            }).catch(()=>{
                console.error("errooooo,internet ruim ou vocễ que é")
            })
        }, [numb])

        const incrementar =() =>{
            setNumb( numb +1)
        }


        
        return (
            <div>
            <h1> Faça seu Cadastro</h1>
            <p> {mensagem}</p>
            <form onSubmit={handleSubmit}>
                <Input
                    value={nome}
                    type="text"
                    label="Nome"
                    placeholder="Nome completo"
                    atualizarState={setNome}
                    obrigatorio
                    />
                <Input
                    value={email}
                    type="email"
                    label="Email"
                    placeholder="Digite seu email"
                    atualizarState={setEmail}
                    obrigatorio
                />
                <Input
                    value={confirmEmail}
                    type="email"
                    label="Confirmar Email"
                    placeholder="Confirme seu email"
                    atualizarState={setConfirmEmail}
                    obrigatorio
                    />
                <Input
                    value={senha}
                    type="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                    atualizarState={setSenha}
                    obrigatorio
                    />
                <button> Cadastrar</button>
            </form>
        </div>
    );
    
}
    
export default Cadastro;





 //useEffect() seria uma funçao executa dois parametros o primeiro parametro é uma funçao e a segunda é quando vai ser executdo essa funçao
//<Button funcao={incrementar}>Incrementar</Button>
 // 