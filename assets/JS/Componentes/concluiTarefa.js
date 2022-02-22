const BotaoConcluido = () =>
    {
        const botaoConcluido = document.createElement("button");

        botaoConcluido.classList.add("check-button");
        //botaoConcluido.innerHTML = "<img src = https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Green_check_icon_with_gradient.svg/512px-Green_check_icon_with_gradient.svg.png height = 20px>" 

        botaoConcluido.innerText="concluído";

        botaoConcluido.addEventListener("click", concluirTarefa)

        
        return botaoConcluido;
    };

    //Evento aqui simboliza o "click" do button
    const concluirTarefa = (evento) =>
    {
        //Pega o alvo do evento, ou seja, o que foi clicado
        const botaoConcluido = evento.target

        //Pega o pai do elemento que foi selecionado, no caso o de event == button que é a li
        const tarefaCompleta = botaoConcluido.parentElement;

        tarefaCompleta.classList.toggle("done");
    };

    //Criando módulos, para segurança
    export default BotaoConcluido;

    //caso precisasse exportar mais alguma função ou algo do cod:
    // export
    // {
    //     BotaoConcluido;
    //     concluirTarefa;
    // }