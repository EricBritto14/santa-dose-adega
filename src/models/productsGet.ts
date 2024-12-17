export type ProductGet = {
    idProduto: number | null,
    tipo: string,
    nome: string,
    tamanho: string,
    data_cadastro: string | null,
    quantidade: number,
    valor_compra: number,
    _valor_venda: number,
    data_validade: string,
  }