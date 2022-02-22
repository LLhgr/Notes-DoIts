//IIFE (encapsulamento)

    import BotaoConcluido from "./Componentes/concluiTarefa.js";
    import BotaoDeleta from "./Componentes/deletaTarefa.js";

    //Ele recebe o "evento" que no caso seria as ações básicas de um formulário do navegador
    const CriarTarefa = (evento) =>
    {
        //Previne que o formulário envie informações e fique recarregando a página sem motivos
        evento.preventDefault()

        //lista = seleção do data attribute "data-list" que seria a (ul)
        const lista = document.querySelector('[data-list]');

        //input = seleção do data attribute do input
        const input = document.querySelector('[data-form-input]');

        //valor = o value do input, ou seja, tudo que foi inserido no input
        const valor = input.value;

        //Tarefa = cria um elemento de lista (li)
        const tarefa = document.createElement('li');

        //Adiciona na constante "tarefa" a classe "task", obtendo todas as informações do css nela
        tarefa.classList.add('task');

        //conteudo = cria um parágrafo (p) com o value de valor, que seria o que foi inserido no input
        //Os `` são para utilizar linguagem HTML no css
        const conteudo = `<p class="content">${valor}</p>`

        //Tarefa recebe o conteudo que é a informação da mensagem inserida
        tarefa.innerHTML = conteudo;
        
        //Insere o botão dentro da ul
        tarefa.appendChild(BotaoConcluido());
        tarefa.appendChild(BotaoDeleta());

        //tarefa é endereçada como "filha" de lista, ou seja pai: ul / filha li
        lista.appendChild(tarefa);

        //atribui o valor do input para nulo, limpando o após finalizar
        input.value = "";
    }

    const novaTarefa = document.querySelector('[data-form-button]');


    //()=> == function()
    novaTarefa.addEventListener("click", CriarTarefa);

    

    

