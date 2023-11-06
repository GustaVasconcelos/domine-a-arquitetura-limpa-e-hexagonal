import CasoDeUso from "@/core/shared/casoDeUso";
import Produto from "../model/produto";
import Usuario from "@/core/usuario/model/usuario";

export type Entrada = {
    produtoId: string,
    usuario: Usuario
}

export default class ObterProdutoPorId implements CasoDeUso<Entrada, Produto> {
    async executar(entrada: Entrada): Promise<Produto> {
        return {
            id: entrada.produtoId,
            nome: "Produto 1",
            preco: 10.00
        }
    }
}