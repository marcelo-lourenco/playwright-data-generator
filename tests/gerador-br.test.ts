import { test, expect } from '@playwright/test';
import { gerar } from 'gerador-br';

test('Validates data generation WITHOUT MASK', async ({ page }) => {
  await page.goto('https://marcelo-lourenco.github.io/gerador-br/formulario-para-teste/');

  // Pessoa
  const nomeCompleto = gerar.nome.aleatorioCompleto();
  await page.locator('#fldNome').fill(nomeCompleto);
  await page.locator('#fldPai').fill(gerar.nome.paiCompleto());
  await page.locator('#fldMae').fill(gerar.nome.maeCompleto());
  await page.locator('#fldApelido').fill(gerar.apelido());
  await page.locator('#fldEscolaridade').fill(gerar.escolaridade());
  await page.locator('#fldProfissao').fill(gerar.profissao());
  await page.locator('#fldCorPele').fill(gerar.corPele());
  await page.locator('#fldGenero').fill(gerar.genero());
  await page.locator('#fldOrientacaoSexual').fill(gerar.orientacaoSexual());
  await page.locator('#fldIdentidadeGenero').fill(gerar.identidadeGenero());
  await page.locator('#fldTipoSanguineo').fill(gerar.tipoSanguineo());
  await page.locator('#fldDataNascimento').fill(gerar.dataNascimento());

  // Documentos PJ
  await page.locator('#fldCnpj').fill(gerar.cnpj());
  await page.locator('#fldInscricaoEstadual').fill(gerar.inscricaoEstadual() ?? '');

  // Documentos PF
  await page.locator('#fldCpf').fill(gerar.cpf());
  await page.locator('#fldCnh').fill(gerar.cnh());
  await page.locator('#fldCnhCategoria').fill(gerar.cnhCategoria());
  await page.locator('#fldRg').fill(gerar.rg());
  await page.locator('#fldCns').fill(gerar.cns());
  await page.locator('#fldPis').fill(gerar.pis());
  await page.locator('#fldTituloEleitor').fill(gerar.tituloEleitor());
  await page.locator('#fldPassaporte').fill(gerar.passaporte());
  await page.locator('#fldCertidaoNascimento').fill(gerar.certidao.nascimento());
  await page.locator('#fldCertidaoCasamento').fill(gerar.certidao.casamento());
  await page.locator('#fldCertidaoObito').fill(gerar.certidao.obito());

  // Contatos
  await page.locator('#fldEmail').fill(gerar.email(nomeCompleto));
  await page.locator('#fldDdd').fill(gerar.ddd());
  await page.locator('#fldCelular').fill(gerar.celular());
  await page.locator('#fldTelefone').fill(gerar.telefone());

  // Endereços
  const endereco = gerar.endereco();
  await page.locator('#fldLogradouro').fill(endereco.logradouro);
  await page.locator('#fldNumero').fill(endereco.numero);
  await page.locator('#fldComplemento').fill(endereco.complemento ? endereco.complemento : '-');
  await page.locator('#fldBairro').fill(endereco.bairro);
  await page.locator('#fldLocalidade').fill(endereco.localidade);
  await page.locator('#fldEstado').fill(endereco.estado);
  await page.locator('#fldCep').fill(endereco.cep);

  // Cartão de Crédito
  const cartaoCredito = gerar.cartaoCredito();
  await page.locator('#fldCartaoCredito').fill(cartaoCredito.numero);
  await page.locator('#fldBandeira').fill(cartaoCredito.bandeira);
  await page.locator('#fldNomeTitular').fill(cartaoCredito.nomeTitular);
  await page.locator('#fldCvv').fill(cartaoCredito.cvv);
  await page.locator('#fldDataExpiracao').fill(cartaoCredito.dataExpiracao);

  // Conta Bancária
  const cb = gerar.contaBancaria();
  await page.locator('#fldCodigoBanco').fill(cb.codigoBanco);
  await page.locator('#fldNomeBanco').fill(cb.nomeBanco);
  await page.locator('#fldAgencia').fill(cb.agencia);
  await page.locator('#fldAgenciaDv').fill(cb.agenciaDv ? cb.agenciaDv : '-');
  await page.locator('#fldConta').fill(cb.conta);
  await page.locator('#fldContaDv').fill(cb.contaDv ? cb.contaDv : '-');

  // Banco
  const banco = gerar.banco();
  await page.locator('#fldBancoCodigo').fill(banco.codigoBanco);
  await page.locator('#fldBancoNome').fill(banco.nomeBanco);
  await page.locator('#fldRazaoSocial').fill(banco.razaoSocial);
  await page.locator('#fldIspb').fill(banco.ispb);

  // Veículo
  await page.locator('#fldPlacaAntiga').fill(gerar.placaAntiga());
  await page.locator('#fldPlacaMercosul').fill(gerar.placaMercosul());
  await page.locator('#fldRenavam').fill(gerar.renavam());

  // Lorem Ipsum
  await page.locator('#fldPalavra').fill(gerar.palavra());
  await page.locator('#fldSentenca').fill(gerar.sentenca());
  await page.locator('#fldParagrafos').fill(gerar.paragrafo());

  await page.getByRole('button', { name: 'Enviar' }).click();

  await page.waitForTimeout(3000);
});

test('Validates data generation WITH MASK', async ({ page }) => {
  await page.goto('https://marcelo-lourenco.github.io/gerador-br/formulario-para-teste/');

  // mascara = true
  // const mask = true

  // Documentos PJ
  await page.locator('#fldCnpj').fill(gerar.cnpj(true));

  // Documentos PF
  await page.locator('#fldCpf').fill(gerar.cpf(true));
  await page.locator('#fldRg').fill(gerar.rg(true));
  await page.locator('#fldCns').fill(gerar.cns(true));
  await page.locator('#fldPis').fill(gerar.pis(true));
  await page.locator('#fldTituloEleitor').fill(gerar.tituloEleitor(true));
  await page.locator('#fldCertidaoNascimento').fill(gerar.certidao.nascimento(true));
  await page.locator('#fldCertidaoCasamento').fill(gerar.certidao.casamento(true));
  await page.locator('#fldCertidaoObito').fill(gerar.certidao.obito(true));

  // Contato
  await page.locator('#fldEmail').fill(gerar.email(gerar.apelido()));
  await page.locator('#fldDdd').fill(gerar.ddd());
  await page.locator('#fldCelular').fill(gerar.celular(true));
  await page.locator('#fldTelefone').fill(gerar.telefone(true));

  // Endereço
  const endereco = gerar.endereco(true);
  await page.locator('#fldCep').fill(endereco.cep);

  // Cartão de Crédito
  const cartaoCredito = gerar.cartaoCredito(true);
  await page.locator('#fldCartaoCredito').fill(cartaoCredito.numero);

  // Veículo
  await page.locator('#fldPlacaAntiga').fill(gerar.placaAntiga(true));
  await page.locator('#fldPlacaMercosul').fill(gerar.placaMercosul(true));

  // Lorem Ipsum
  await page.locator('#fldPalavra').fill(gerar.palavra());
  await page.locator('#fldSentenca').fill(gerar.sentenca());
  await page.locator('#fldParagrafos').fill(gerar.paragrafo());

  await page.getByRole('button', { name: 'Enviar' }).click();

  await page.waitForTimeout(3000);

});