import TerminalUtil from "@/app/util/terminalUtil";
import menuFundamentos from "./menuFundamentos";

const menuPrincipal = async () => {
    TerminalUtil.titulo('Menu Principal')

    const [indice] = await TerminalUtil.menu([
        '1. Fundamentos',
        'Sair'
    ]);

    switch(indice) {
        case 0:
            await menuFundamentos();
            break
        case 1: 
            process.exit(0);
    }

    menuPrincipal();
}

export default menuPrincipal;