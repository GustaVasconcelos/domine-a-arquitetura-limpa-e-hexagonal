import CasoDeUso from "@/core/shared/casoDeUso";
import Usuario from "../model/usuario";
import erros from "@/core/shared/erros";
import Id from "@/core/shared/id";
import ProvedorCriptografia from "./provedorCriptografia";
import RepositorioUsuario from "./repositorioUsuario";


export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
    constructor(
        private provedorCripto: ProvedorCriptografia,
        private repositorio: RepositorioUsuario
    ) {}
    
    async executar(usuario: Usuario): Promise<void> {
        const senhaCript = this.provedorCripto.criptografar(usuario.senha);
        const usuarioExistente = await this.repositorio.buscarPorEmail(usuario.email);
        
        if (usuarioExistente) throw new Error(erros.USUARIO_JA_EXISTE);

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCript
        };

        this.repositorio.inserir(novoUsuario);
    };
}