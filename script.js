const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é uma das principais fontes de poluição do ar nas grandes cidades?",
        alternativas: [
            {
                texto: "Emissões de veículos",
                afirmacao: " Descarte inadequado de plásticos"
            },
            {
                texto: " Descarte inadequado de plásticos",
                afirmacao: " Descarte inadequado de plásticos"
            }
        ]
    },
    {
        enunciado: "Qual é o impacto da poluição plástica nos ecossistemas marinhos?",
        alternativas: [
            {
                texto: "Degradação da biodiversidade marinha",
                afirmacao: "Melhoria na qualidade da água"
            },
            {
                texto: "Degradação da biodiversidade marinha",
                afirmacao: "Melhoria na qualidade da água"
            }
        ]
    },
    {
        enunciado: "Como a poluição do solo pode afetar a saúde humana?",
        alternativas: [
            {
                texto: "Contaminação de alimentos e água",
                afirmacao: "Aumento da fertilidade do solo"
            },
            {
                texto: "Contaminação de alimentos e água",
                afirmacao: "Aumento da fertilidade do solo"
            }
        ]
    },
    {
        enunciado: "O que pode ser uma consequência da poluição sonora em áreas urbanas?",
        alternativas: [
            {
                texto: "Problemas de saúde mental e auditiva",
                
                afirmacao: "Aumento da biodiversidade urbana"
            },
            {
                texto: "Problemas de saúde mental e auditiva",
                
                afirmacao: "Aumento da biodiversidade urbana"
            }
        ]
    },
    {
        enunciado: "Como a poluição luminosa pode impactar os ecossistemas noturnos? ",
        alternativas: [
            {
                texto: "Distúrbios no ciclo de sono de animais",
                afirmacao: "Melhoria na observação astronômica"

                
            },
            {
                texto: "Distúrbios no ciclo de sono de animais",
                afirmacao: "Melhoria na observação astronômica"

            
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();