import TerminalUtil from "@/util/terminalUtil";
import { terminal } from "terminal-kit";
import menuFundamentos from "./menuFundamentos";

const menuPrincipal = async () => {
    TerminalUtil.titulo('Menu Principal')

    const resposta = await terminal.singleColumnMenu([
        '1. Fundamentos',
        'Sair'
    ]).promise;

    switch(resposta.selectedIndex) {
        case 0: await menuFundamentos(); break
        case 1: process.exit(0)
    }

    menuPrincipal();
}

export default menuPrincipal;