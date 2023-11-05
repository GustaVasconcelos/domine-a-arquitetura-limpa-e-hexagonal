import { terminal } from "terminal-kit";
import Carro from "./carro";


const corrida = async (
    carro: Carro, 
    logger: (str:string) => void
) => {
    Array.from({length: 10}).forEach(() => {
        carro.acelerar();

        logger(
            `\nVelocidade: ${carro.velocidadeAtual}`
        );
    });

    Array.from({length: 10}).forEach(() => {
        carro.frear();

        logger(
            `\nVelocidade: ${carro.velocidadeAtual}`
        );
    })
}

export default corrida