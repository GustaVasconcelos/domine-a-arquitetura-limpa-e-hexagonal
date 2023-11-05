import TerminalUtil from "@/app/util/terminalUtil"
import registrarUsuario from "../usuario/registrarUsuario";

const menuUsuario = async () => {
    TerminalUtil.titulo('Usuário');
    
    const [indice] = await TerminalUtil.menu([
        '1. Registrar Usuário',
        'Voltar'
    ]);

    switch(indice) {
        case 0: 
            await registrarUsuario();
            break
        default:
            return
    }

    await menuUsuario();
}

export default menuUsuario;