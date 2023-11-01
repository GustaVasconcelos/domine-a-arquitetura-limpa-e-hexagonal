import TerminalUtil from "@/util/terminalUtil"
import { terminal } from "terminal-kit";

const menuFundamentos = async () => {
    TerminalUtil.titulo('Fundamentos');
    
    const resposta = await terminal.singleColumnMenu([
        '1. Polimorfismo',
        'Voltar'
    ]).promise;

    switch(resposta.selectedIndex) {
        case 1: return;
    }

    await menuFundamentos();
}

export default menuFundamentos