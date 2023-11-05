import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/terminalUtil";
import Fusca from "@/core/fundamentos/fusca";
import Ferrari from "@/core/fundamentos/ferrari";
import Carro from "@/core/fundamentos/carro";
import Civic from "@/core/fundamentos/civic";
import { terminal } from "terminal-kit";

const dip = async () => {
    TerminalUtil.titulo('DIP');
    
    const [tipo] = await TerminalUtil.selecao(
        "Tipo de carro",
        [
            "Fusca",
            "Civic",
            "Ferrari"
        ]
    );

    let carro: Carro; 

    switch(tipo) {
        case 0: 
            carro = new Fusca();
            break
        case 1:
            carro = new Civic();
            break
        default:
            carro = new Ferrari();
            break
    }

    corrida(carro, terminal.green);
    
    await TerminalUtil.esperarEnter();
}


export default dip;