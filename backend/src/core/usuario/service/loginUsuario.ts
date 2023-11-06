import CasoDeUso from "@/core/shared/casoDeUso";
import { type } from "os";
import Usuario from "../model/usuario";
import RepositorioUsuario from "./repositorioUsuario";
import erros from "@/core/shared/erros";
import ProvedorCriptografia from "./provedorCriptografia";

export type LoginUsuarioEntrada = {
    email: string;
    senha: string;
}

export default class LoginUsuario implements CasoDeUso<LoginUsuarioEntrada, Usuario> {
    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ) {}
    
    async executar(entrada: LoginUsuarioEntrada): Promise<Usuario> {
        const usuarioExistente = await this.repositorio.buscarPorEmail(entrada.email);

        if (!usuarioExistente) throw new Error(erros.USUARIO_NAO_EXISTE);

        const mesmaSenha = this.provedorCripto.comparar(
            entrada.senha, 
            usuarioExistente.senha!
        );

        if (!mesmaSenha) throw new Error(erros.SENHA_INCORRETA);

        return {...usuarioExistente, senha: undefined }
    }
}