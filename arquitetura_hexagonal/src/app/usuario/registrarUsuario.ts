import Usuario from "@/core/usuario/model/usuario";
import TerminalUtil from "../util/terminalUtil"
import RegistrarUsuario from "@/core/usuario/service/registrarUsuario";
import SenhaCripto from "@/adapter/auth/senhaCripto";
import RepositorioUsuarioPg from "@/adapter/db/repositorioUsuarioPg";

const registrarUsuario = async () => {
    const { 
        titulo, 
        campoRequerido, 
        esperarEnter, 
        sucesso, 
        erro 
    } = TerminalUtil;
    
    titulo("Registrar Usuário");

    const nome = await campoRequerido(
        'Nome: '
    );
    const email = await campoRequerido(
        'Email: '
    );
    const senha = await campoRequerido(
        'Senha: '
    );
    
    const usuario: Usuario = {
        nome,
        email, 
        senha
    };

    try {
        const repositorio = new RepositorioUsuarioPg();
        const provedorCripto = new SenhaCripto();
        const casoDeUso = new RegistrarUsuario(provedorCripto, repositorio);
    
        await casoDeUso.executar(usuario);
    
        sucesso('Usuário cadastrado com sucesso!');
    
        await esperarEnter()
    } catch(e: any) {
        erro(e.message);
    } finally {
        await esperarEnter();
    }
}

export default registrarUsuario