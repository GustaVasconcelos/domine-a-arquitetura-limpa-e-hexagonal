import { Request, Response, NextFunction } from "express"
import ProvedorJwt from "./provedorJwt";
import Usuario from "@/core/usuario/model/usuario";
import RepositorioUsuario from "@/core/usuario/service/repositorioUsuario";

const usuarioMiddleware = (repositorio: RepositorioUsuario) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const acessoNegado = () => res.status(403).send('Token inválido');
        const token = req.headers.authorization?.replace('Bearer ', '');

        if (!token) {
            return acessoNegado();
        }

        const provedorJwt = new ProvedorJwt(process.env.JWT_SECRET!);
        const usuarioToken = provedorJwt.obter(token) as Usuario;
        const usuario = await repositorio.buscarPorEmail(usuarioToken.email);

        if (!usuario) {
            return acessoNegado();
        }

        (req as any).usuario = usuario;

        next()
    }
}

export default usuarioMiddleware;