export const statuses = (status) => {
  var obj = {
    // "ABANDONO": '110',
    // "AUSENTE 2": '010',
    // "AUSENTE 3": '113',
    // "AUSENTE EM FERIAS": '082',
    // "AVARIA / DANO PARCIAL": '102',
    // "AVARIA / DANO TOTAL": '103',
    // "CAIXA POSTAL": '078',
    // "CANHOTO RETIDO PARA CONFERENCIA DESTINATARIO": '108',
    // "CUSTODIA": '008',
    // "DEVOLUCAO POR INSTRUCAO MATRIZ": '111',
    // "DEVOLUCAO POR INSTRUCAO REMETENTE": '112',
    // "DEVOLVIDO": '009',
    // "EM ROTA": '005',

    // "TRANSPORTE INICIADO": "000",
    // "ENTREGA REALIZADA NORMALMENTE": "001",
    // "ENTREGUE": "001",
    // "ATRASO DE ENTREGA": "002",
    // "EM ROTA DE ENTREGA": "005",
    // "ENDERECO DE CLIENTE DESTINO NAO LOCALIZADO": "006",
    // "REENTREGA": "019",
    // "ENTREGA PREJUDICADA POR HORARIO/ FALTA DE TEMPO HAB": "020",
    // "ESTABELECIMENTO FECHADO": "021",
    // "NOTA FISCAL RETIDA PELA FISCALIZACAO": "026",
    // "FALTA COM SOLICITACAO DE REPOSICAO": "032",
    // "ENDERECO EM ZONA RURAL": "073",
    // "CLIENTE DESTINO MUDOU DE ENDERECO": "077",
    // "AVARIA PARCIAL DA CARGA": "079",
    // "DESTINATARIO DESCONHECIDO": "080",
    // "EXTRAVIO PARCIAL": "081",
    // "FECHADO": "084",
    // "APREENSAO FISCAL": "085",
    // "VEICULO RETIDO NO POSTO FISCAL": "088",
    // "RECUSADO PELO REDESPACHANTE": "090",
    // "ENTREGA PROGRAMADA": "091",
    // "PROBLEMAS FISCAIS": "092",
    // "AGUARDANDO CARTA DE CORRECAO": "093",
    // // "EM ROTA DE ENTREGA": "094",
    // "SAIU PARA ENTREGA AO CLIENTE": "095",
    // "LIBERACAO FISCAL DA MERCADORIA": "096",
    // "FALHA NA UNIDADE": "097",
    // "CARGA NA BASE DESTINO": "098",
    // "OUTROS TIPOS DE OCORRENCIAS NAO ESPECIFICADAS": "099",
    // "EMISSAO DO CONHECIMENTO DE TRANSPORTE": "100",
    // // "TRANSPORTE INICIADO": "102",
    // "EMISSAO DE MANIFESTO DE SAIDA": "104",
    // "NÚMERO NAO LOCALIZADO": "120",
    // "TRANSFERENCIA DE UNIDADE FORCADA": "126",
    // "CARGA LOCALIZADA INTEGRALMENTE": "130",
    // "SAIDA DO VOO": "134",
    // "EMBARQUE DE CARGA EM ULD": "135",
    // "CHEGADA DE VEICULO": "136",
    // "DISPONÍVEL PARA RETIRADA": "137",
    // "EMBARQUE DE CARGA NO VOO": "138",
    // "CARREGAMENTO DO VEICULO": "142",
    // "O USUARIO ALTEROU A AWB ANTES DA IMPRESSAO": "145",
    // "FECHAMENTO DA LISTAGEM DE CARGA DO VEICULO": "171",
    // "CARGA AVARIADA - EM PROCESSO DE APURACAO": "181",
    // "CARGA DISPONÍVEL PARA RETIRADA": "200",
    // "DATA DE CHEGADA NA TRANSPORTADORA": "208",
    // "DATA DE SAIDA DA TRANSPORTADORA": "209",
    // "CORTE DE CARGA DO VOO": "252",
    // "RETIRADA DE CARGA DO VOO": "253",
    // "ULD LACRADA": "256",
    // "ALTERACAO DE CT - E": "375",
    // "PASSAGEM PELA FISCALIZACAO": "515",
    // "NOTA FISCAL LIBERADA DA FISCALIZACAO": "525",
    // "FALTA PARCIAL DA CARGA": "93",
    // "REMARK DA CARGA": "999",

    'APREENSAO FISCAL DE DOCUMENTO E/OU MERCADORIA': '085',
    'AUSENTE 1': '046',
    'AUSENTE 2': '046',
    'AUSENTE EM FERIAS': '046',
    'AVARIA / DANO PARCIAL': '079',
    CUSTODIA: '040',
    'DESTINATARIO DESCONHECIDO': '038',
    'DESTINATARIO SOLICITOU RETIRAR NA UNIDADE': '029',
    DEVOLVIDO: '048',
    'EM ROTA DE ENTREGA': '036',
    'ENDERECO EM ZONA RURAL': '037',
    'ENDERECO NAO LOCALIZADO': '006',
    'ENTRADA UNIDADE JADLOG': '049',
    'ENTRADA': '049',
    ENTREGUE: '001',
    'EXTRAVIO PARCIAL': '081',
    'EXTRAVIO TOTAL': '080',
    'FALHA DA UNIDADE': '097',
    FECHADO: '039',
    'FECHADO 2': '039',
    'FECHADO EM VESPERA OU APOS FERIADO': '039',
    'FURTO / ROUBO': '027',
    'MERCADORIA TROCADA': '018',
    'MUDOU-SE': '077',
    'NUMERO NAO LOCALIZADO': '120',
    'RECUSADO - DIVERGENCIA DE PEDIDO': '003',
    TRANSFERENCIA: '051',
    EMISSAO: '102',
    'OUTROS TIPOS DE OCORRENCIAS NAO ESPECIFICADOS ACIMA': '099'
    // 'CAIXA POSTAL': '99',
    // FALECIDO: '99',
    // 'NOVO LOCAL PARA ENTREGA': '99',
    // 'RECUSADO - ATRASO ENTREGA': '99',
    // 'RECUSADO - NAO PAGA FRETE': '99',
    // 'REITINERACAO - ERRO DE ENDERECO': '99',
    // 'SOLICITACAO ENTREGA FUTURA': '99',
    // TEMPORAL: '99',
    // 'TROCA DE GELO': '99',
  };
  
  return obj[status] || obj['OUTROS TIPOS DE OCORRENCIAS NAO ESPECIFICADOS ACIMA'];
};
