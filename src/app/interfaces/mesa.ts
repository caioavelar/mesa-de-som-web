export interface MesaDeSom {
  id: string;
  nome: string;
  qtdCanais: number;
  padrao: boolean;
  dataCriacao: Date;
  dataAtualizacao: Date;
  geral: Controle;
  canais: Array<Canal>
}

export interface Canal {
  numero: number;
  nome: string;
  geral: Controle
  retorno: Controle;
  grave: Controle;
  medio: Controle;
  agudo: Controle;
}

export interface Controle {
  atual: number;
  min: number;
  max: number;
}
