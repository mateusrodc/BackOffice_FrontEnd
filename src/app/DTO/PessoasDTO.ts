export interface PessoasDTO
{
    id: number;
    tipoPessoa: number;
    nome: string;
    enderecoId: number;
    documento: string;
    nomeFantasia?: string;
    qualificacao: string;
    criadoEm: Date;
    atualizadoEm: Date;
}