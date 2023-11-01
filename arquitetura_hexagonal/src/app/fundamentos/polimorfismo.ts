import TerminalUtil from "../util/terminalUtil"

const polimorfismo = async () => {
    TerminalUtil.titulo("Polimorfismo");

    const tipoCarro = await TerminalUtil.selecao('Tipo de carro', ['Ferrari', 'Fusca']);
    
    while(true) {
        TerminalUtil.limpar();

        const continuar =  await TerminalUtil.confirmacao('Deseja continuar?');
    
        if (!continuar) return;
    }
}

export default polimorfismo