const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

export const setContent = (data) => {
  if (data) {
    return {
      nome: data.nome,
      data: new Date(data.CriadoEm).toLocaleDateString('pt-BR', options),
    };
  }

  return false;
};

export const setDataExam = (lastExam) => {
  if (lastExam) {
    return {
      data: new Date(lastExam.CriadoEm).toLocaleDateString('pt-BR', options),
      esfOlhoDireito: lastExam.rxEsfOd,
      cilOlhoDireito: lastExam.rxCilOd,
      eixoOlhoDireito: lastExam.rxEixoOd,
      esfOlhoEsquerdo: lastExam.rxEsfOe,
      cilOlhoEsquerdo: lastExam.rxCilOe,
      eixoOlhoEsquerdo: lastExam.rxEixoOe,
      add: lastExam.rxAdd || 'Sem Adição',
      id: lastExam._id,
    };
  }
  return false;
};

export const setDataSell = (lastSell) => {
  if (lastSell) {
    return {
      data: new Date(lastSell.CriadoEm).toLocaleDateString('pt-BR', options),
      armacao: lastSell.armacao,
      valorArm: lastSell.valorArm.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      lente: lastSell.lente,
      valorLen: lastSell.valorLen.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      total: lastSell.total,
      pago: lastSell.pago.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      resta: lastSell.resta.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      id: lastSell._id,
    };
  }
  return false;
};
