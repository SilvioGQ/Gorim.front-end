/*
'id'
"imposto":10.0,
"multa":0.0,
"saldoAtual":590.0,
"poluicaoCausadaMundo":0.0,
"transferencias":{"enviado":[],"recebido":[]},
"poluicaoPessoal":0.0,
"poluicaoMundial":20.0,
"gastos":0.0,
"parcelas":
    [
        {"semente":null,"pulverizador":false,"fertilizante":null,"maqAgr":null,"seloVerde":false},
        {"semente":null,"pulverizador":false,"fertilizante":null,"maqAgr":null,"seloVerde":false},
        {"semente":null,"pulverizador":false,"fertilizante":null,"maqAgr":null,"seloVerde":false},
        {"semente":null,"pulverizador":false,"fertilizante":null,"maqAgr":null,"seloVerde":false},
        {"semente":null,"pulverizador":false,"fertilizante":null,"maqAgr":null,"seloVerde":false},
        {"semente":null,"pulverizador":false,"fertilizante":null,"maqAgr":null,"seloVerde":false}
    ],
"produtividade":0,
"saldoAnterior":600.0,
"acoesUtilizadas":[]},
"nome":"CD1"}
empresario
'id'
"produtividade":0,
"poluicao":0.0,
"nome":"EmpFer"},
"produtos": 'Depende de cada empresario, 3 itens.' 
saldoAnterior":0.0,
"saldoAtual":0.0,
"pedidos":{},"transferencias":{"enviado":[],"recebido":[]},"nome":"CD3"}

fiscal
'id'
selo verde: 'mandar []', 'retirar []'

veriador
'id'

prefeito 
'id'  
import React from 'react'
export async function Batata3(idJogo, etapa){
    const resp= await axios.get(`${BASE_API}/${idJogo}/mestre/infoPessoasByEtapa`) 
    return resp
}
export async function Batata4(idJogo, classe){
    const resp= await axios.get(`${BASE_API}/${idJogo}/mestre/infoPessoasByClasse`) 
    return resp
}
export async function Batata5(idJogo, {route}){
    const {valor}= route.params;
    const resp= await axios.post(`${BASE_API}/${idJogo}/mestre/adicionaTransferencia`, {
        remetente: 1,
        quantia: valor,
        destinatario: 3}) 
        return resp
    }
    */
import axios from 'axios';
const BASE_API = 'http://localhost:8080/request/api';

export function Batata() {
    return axios.post(`${BASE_API}/mestre`, { quantidadeJogadores: 10 });
}
export function Batata2(idJogo) {
    return axios.get(`${BASE_API}/${idJogo}/mestre/infoMundo`);
}

export default {
    idJogo: async () => {
        const req = await fetch(`${BASE_API}/mestre`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantidadeJogadores: 10 })
        });
        const json = await req.json();
        return json;
    },
    Mundo: async (idJogo) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/infoMundo`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idJogo })
        });
        const json = await req.json();
        return json;
    },
    FlagFimEtapa: async (idJogo) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/changeFlagFimEtapa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idJogo })
        });
        const json = await req.json();
        return json;
    },
    infoPessoas: async (idJogo, etapa) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/infoPessoasByEtapa`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idJogo, etapa })
        });
        const json = await req.json();
        return json;
    },
    infoPessoasClass: async (idJogo, classe) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/infoPessoasByClasse`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idJogo, classe })
        });
        const json = await req.json();
        return json;
    },
    Votos: async (votos) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/infoPessoasForVoting/{cidade}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ votos })
        });
        const json = await req.json();
        return json
    },
    GreenSeal: async (quantidadeJogadores) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/infoPessoasForGreenSeal/{cidade}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantidadeJogadores })
        });
        const json = await req.json();
        return json;
    },
    Transferencia: async (transferencia) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/adicionaTransferencia`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ transferencia })
        });
        const json = await req.json();
        return json;
    },
    verificarFinalizados: async (quantidadeJogadores) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/verificaFinalizados`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantidadeJogadores })
        });
        const json = await req.json();
        return json;
    },
    verificaFimEtapa: async (quantidadeJogadores) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/verificaFimEtapa/{etapa}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantidadeJogadores })
        });
        const json = await req.json();
        return json;
    },
    papelSegundaEtapa: async (quantidadeJogadores) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/papelSegundaEtapa/{idPessoa}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantidadeJogadores })
        });
        const json = await req.json();
        return json;
    },
    MestreVoto: async (votos) => {
        const req = await fetch(`${BASE_API}/{idJogo}/mestre/votar`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ votos })
        });
        const json = await req.json();
        return json;
    },
    ArquivoResumo: async (idJogo, idPessoa) => {
        const req = await fetch(`${BASE_API}/{idJogo}/arquivoResumo/{idPessoa}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ votos })
        });
        const json = await req.json();
        return json;
    },
    EmpresarioPOST: async (idJogo, idEmp) => {
        const req = await fetch(`${BASE_API}/{idJogo}/empresario/{idEmp}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ votos })
        });
        const json = await req.json();
        return json;
    },
    EmpresarioGET: async (idJogo, idEmp) => {
        const req = await fetch(`${BASE_API}/{idJogo}/empresario/{idEmp}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idJogo, idEmp })
        });
        const json = await req.json();
        return json;
    },
    Agricultor: async (idJogo, Venda) => {
        const req = await fetch(`${BASE_API}/{idJogo}/empresario/venda/{idAgr}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idJogo, Venda })
        });
        const json = await req.json();
        return json;
    },
    EmpresarioVenda: async (idJogo, idEmp) => {
        const req = await fetch(`/{idJogo}/empresario/venda/{idEmp}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idJogo, idEmp })
        });
        const json = await req.json();
        return json;
    },
    Agricultor: async (idJogo, idAgr) => {
        const req = await fetch(`/{idJogo}/agricultor/{idAgr}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idJogo, idAgr })
        });
        const json = await req.json();
        return json;
    },
    EmpresarioOrçamento: async (idJogo, venda) => {
        const req = await fetch(`/{idJogo}/agricultor/venda/{idEmp}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idJogo, venda })
        });
        const json = await req.json();
        return json;
    },
    EmpresarioVenda: async (idJogo, idAgr) => {
        const req = await fetch(`/{idJogo}/agricultor{idAgr}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idJogo, idAgr })
        });
        const json = await req.json();
        return json;
    },
}
