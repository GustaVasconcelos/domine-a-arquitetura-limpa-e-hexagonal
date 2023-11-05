import ProvedorCriptografia from "@/core/usuario/service/provedorCriptografia";

export default class EspacoSenhaCripto implements ProvedorCriptografia {
    criptografar(texto: string): string {
        return texto.split('').join(' ');
    }
}