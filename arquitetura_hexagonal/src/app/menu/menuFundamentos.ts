import TerminalUtil from "@/app/util/terminalUtil"
import polimorfismo from "../fundamentos/polimorfismo";

const menuFundamentos = async () => {
    TerminalUtil.titulo('Fundamentos');
    
    const [indice] = await TerminalUtil.menu([
        '1. Polimorfismo',
        'Voltar'
    ]);

    switch(indice) {
        case 0: 
            await polimorfismo();
            break
        case 1: 
            return;
    }

    await menuFundamentos();
}

export default menuFundamentos