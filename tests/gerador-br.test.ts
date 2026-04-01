import { test, expect } from '@playwright/test';
import { gerar } from 'gerador-br';

test.describe('Gerador-BR Form Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://box4.dev/gerador-br/formulario-para-teste/');
  });

  test('should fill form with generated data without masks', async ({ page }) => {
    // Generate test data
    const testData = {
      nomeCompleto: gerar.nome.aleatorioCompleto(),
      endereco: gerar.endereco(),
      cartaoCredito: gerar.cartaoCredito(),
      contaBancaria: gerar.contaBancaria(),
      banco: gerar.banco()
    };

    // Fill personal information
    await page.locator('#fldNome').fill(testData.nomeCompleto);
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

    // Fill company documents
    await page.locator('#fldCnpj').fill(gerar.cnpj());
    await page.locator('#fldInscricaoEstadual').fill(gerar.inscricaoEstadual() ?? '');
    await page.locator('#fldNomeEmpresa').fill(gerar.nomeEmpresa());

    // Fill personal documents
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

    // Fill contact information
    await page.locator('#fldEmail').fill(gerar.email(testData.nomeCompleto));
    await page.locator('#fldDdd').fill(gerar.ddd());
    await page.locator('#fldCelular').fill(gerar.celular());
    await page.locator('#fldTelefone').fill(gerar.telefone());

    // Fill address information
    await page.locator('#fldLogradouro').fill(testData.endereco.logradouro);
    await page.locator('#fldNumero').fill(testData.endereco.numero);
    await page.locator('#fldComplemento').fill(testData.endereco.complemento || '-');
    await page.locator('#fldBairro').fill(testData.endereco.bairro);
    await page.locator('#fldLocalidade').fill(testData.endereco.localidade);
    await page.locator('#fldEstado').fill(testData.endereco.estado);
    await page.locator('#fldCep').fill(testData.endereco.cep);

    // Fill credit card information
    await page.locator('#fldCartaoCredito').fill(testData.cartaoCredito.numero);
    await page.locator('#fldBandeira').fill(testData.cartaoCredito.bandeira);
    await page.locator('#fldNomeTitular').fill(testData.cartaoCredito.nomeTitular);
    await page.locator('#fldCvv').fill(testData.cartaoCredito.cvv);
    await page.locator('#fldDataExpiracao').fill(testData.cartaoCredito.dataExpiracao);

    // Fill bank account information
    await page.locator('#fldCodigoBanco').fill(testData.contaBancaria.codigoBanco);
    await page.locator('#fldNomeBanco').fill(testData.contaBancaria.nomeBanco);
    await page.locator('#fldAgencia').fill(testData.contaBancaria.agencia);
    await page.locator('#fldAgenciaDv').fill(testData.contaBancaria.agenciaDv || '-');
    await page.locator('#fldConta').fill(testData.contaBancaria.conta);
    await page.locator('#fldContaDv').fill(testData.contaBancaria.contaDv || '-');

    // Fill bank information
    await page.locator('#fldBancoCodigo').fill(testData.banco.codigoBanco);
    await page.locator('#fldBancoNome').fill(testData.banco.nomeBanco);
    await page.locator('#fldRazaoSocial').fill(testData.banco.razaoSocial);
    await page.locator('#fldIspb').fill(testData.banco.ispb);

    // Fill vehicle information
    await page.locator('#fldPlacaAntiga').fill(gerar.placaAntiga());
    await page.locator('#fldPlacaMercosul').fill(gerar.placaMercosul());
    await page.locator('#fldRenavam').fill(gerar.renavam());

    // Fill lorem ipsum text
    await page.locator('#fldPalavra').fill(gerar.palavra());
    await page.locator('#fldSentenca').fill(gerar.sentenca());
    await page.locator('#fldParagrafos').fill(gerar.paragrafo());

    // Submit form
    await page.getByTestId('button-enviar').click();
    
    // Wait for form submission
    await page.waitForTimeout(3000);
  });

  test('should fill form with generated data with masks', async ({ page }) => {
    // Fill documents with masks
    await page.locator('#fldCnpj').fill(gerar.cnpj(true));
    await page.locator('#fldCpf').fill(gerar.cpf(true));
    await page.locator('#fldRg').fill(gerar.rg(true));
    await page.locator('#fldCns').fill(gerar.cns(true));
    await page.locator('#fldPis').fill(gerar.pis(true));
    await page.locator('#fldTituloEleitor').fill(gerar.tituloEleitor(true));
    await page.locator('#fldCertidaoNascimento').fill(gerar.certidao.nascimento(true));
    await page.locator('#fldCertidaoCasamento').fill(gerar.certidao.casamento(true));
    await page.locator('#fldCertidaoObito').fill(gerar.certidao.obito(true));

    // Fill contact with masks
    await page.locator('#fldEmail').fill(gerar.email(gerar.apelido()));
    await page.locator('#fldDdd').fill(gerar.ddd());
    await page.locator('#fldCelular').fill(gerar.celular(true));
    await page.locator('#fldTelefone').fill(gerar.telefone(true));

    // Fill address with mask
    const endereco = gerar.endereco(true);
    await page.locator('#fldCep').fill(endereco.cep);

    // Fill credit card with mask
    const cartaoCredito = gerar.cartaoCredito(true);
    await page.locator('#fldCartaoCredito').fill(cartaoCredito.numero);

    // Fill vehicles with masks
    await page.locator('#fldPlacaAntiga').fill(gerar.placaAntiga(true));
    await page.locator('#fldPlacaMercosul').fill(gerar.placaMercosul(true));

    // Fill lorem ipsum
    await page.locator('#fldPalavra').fill(gerar.palavra());
    await page.locator('#fldSentenca').fill(gerar.sentenca());
    await page.locator('#fldParagrafos').fill(gerar.paragrafo());

    // Submit form
    await page.getByTestId('button-enviar').click();
    await page.waitForTimeout(3000);
  });

  test('should fill form with specific state and no masks', async ({ page }) => {
    const estado = 'SP';

    // Fill documents with specific state
    await page.locator('#fldCpf').fill(gerar.cpf(false, estado));
    await page.locator('#fldCnpj').fill(gerar.cnpj(false));
    await page.locator('#fldRg').fill(gerar.rg(false));
    await page.locator('#fldCns').fill(gerar.cns(false, 'beneficiario'));
    await page.locator('#fldPis').fill(gerar.pis(false));
    await page.locator('#fldTituloEleitor').fill(gerar.tituloEleitor(false, estado));
    await page.locator('#fldCertidaoNascimento').fill(gerar.certidao.nascimento(false));
    await page.locator('#fldCertidaoCasamento').fill(gerar.certidao.casamento(false));
    await page.locator('#fldCertidaoObito').fill(gerar.certidao.obito(false));
    await page.locator('#fldCelular').fill(gerar.celular(false, estado));
    await page.locator('#fldTelefone').fill(gerar.telefone(false, estado));
    await page.locator('#fldCep').fill(gerar.cep(false, estado));
    await page.locator('#fldPlacaAntiga').fill(gerar.placaAntiga(false));
    await page.locator('#fldPlacaMercosul').fill(gerar.placaMercosul(false));
    await page.locator('#fldCartaoCredito').fill(gerar.cartaoCredito(false).numero);

    // Submit form
    await page.getByTestId('button-enviar').click();
    await page.waitForTimeout(2000);
  });

  test('should fill form with specific state and masks', async ({ page }) => {
    const estado = 'SP';

    // Fill documents with specific state and masks
    await page.locator('#fldCpf').fill(gerar.cpf(true, estado));
    await page.locator('#fldCnpj').fill(gerar.cnpj(true));
    await page.locator('#fldRg').fill(gerar.rg(true));
    await page.locator('#fldCns').fill(gerar.cns(true, 'profissional'));
    await page.locator('#fldPis').fill(gerar.pis(true));
    await page.locator('#fldTituloEleitor').fill(gerar.tituloEleitor(true, estado));
    await page.locator('#fldCertidaoNascimento').fill(gerar.certidao.nascimento(true));
    await page.locator('#fldCertidaoCasamento').fill(gerar.certidao.casamento(true));
    await page.locator('#fldCertidaoObito').fill(gerar.certidao.obito(true));
    await page.locator('#fldCelular').fill(gerar.celular(true, estado));
    await page.locator('#fldTelefone').fill(gerar.telefone(true, estado));
    await page.locator('#fldCep').fill(gerar.cep(true, estado));
    await page.locator('#fldPlacaAntiga').fill(gerar.placaAntiga(true));
    await page.locator('#fldPlacaMercosul').fill(gerar.placaMercosul(true));
    await page.locator('#fldCartaoCredito').fill(gerar.cartaoCredito(true).numero);

    // Submit form
    await page.getByTestId('button-enviar').click();
    await page.waitForTimeout(2000);
  });

  test('should fill form with all parameters', async ({ page }) => {
    const mascara = true;
    const genero = 'f';
    const nomeCompleto = gerar.nome.femininoCompleto();
    const estado = 'PR';
    const banco = '237';
    const orientacaoSexual = gerar.orientacaoSexual();

    // Fill personal information with specific gender
    await page.locator('#fldNome').fill(nomeCompleto);
    await page.locator('#fldPai').fill(gerar.nome.paiCompleto());
    await page.locator('#fldMae').fill(gerar.nome.maeCompleto());
    await page.locator('#fldApelido').fill(gerar.apelido());
    await page.locator('#fldEscolaridade').fill(gerar.escolaridade());
    await page.locator('#fldProfissao').fill(gerar.profissao());
    await page.locator('#fldCorPele').fill(gerar.corPele());
    await page.locator('#fldGenero').fill(gerar.genero(genero));
    await page.locator('#fldOrientacaoSexual').fill(orientacaoSexual);
    await page.locator('#fldIdentidadeGenero').fill(gerar.identidadePorOrientacao(orientacaoSexual));
    await page.locator('#fldTipoSanguineo').fill(gerar.tipoSanguineo());
    await page.locator('#fldDataNascimento').fill(gerar.dataNascimento([30, 40]));

    // Fill company documents
    await page.locator('#fldCnpj').fill(gerar.cnpj(mascara));
    await page.locator('#fldInscricaoEstadual').fill(gerar.inscricaoEstadual(estado) ?? '');
    await page.locator('#fldNomeEmpresa').fill(gerar.nomeEmpresa());

    // Fill personal documents
    await page.locator('#fldCpf').fill(gerar.cpf(mascara, estado));
    await page.locator('#fldCnh').fill(gerar.cnh());
    await page.locator('#fldCnhCategoria').fill(gerar.cnhCategoria());
    await page.locator('#fldRg').fill(gerar.rg(mascara));
    await page.locator('#fldCns').fill(gerar.cns(mascara));
    await page.locator('#fldPis').fill(gerar.pis(mascara));
    await page.locator('#fldTituloEleitor').fill(gerar.tituloEleitor(mascara, estado));
    await page.locator('#fldPassaporte').fill(gerar.passaporte());
    await page.locator('#fldCertidaoNascimento').fill(gerar.certidao.nascimento(mascara));
    await page.locator('#fldCertidaoCasamento').fill(gerar.certidao.casamento(mascara));
    await page.locator('#fldCertidaoObito').fill(gerar.certidao.obito(mascara));

    // Fill contact information
    await page.locator('#fldEmail').fill(gerar.email(nomeCompleto));
    await page.locator('#fldDdd').fill(gerar.ddd(estado));
    await page.locator('#fldCelular').fill(gerar.celular(mascara, estado));
    await page.locator('#fldTelefone').fill(gerar.telefone(mascara, estado));

    // Fill address information
    const endereco = gerar.endereco(mascara, estado);
    await page.locator('#fldLogradouro').fill(endereco.logradouro);
    await page.locator('#fldNumero').fill(endereco.numero);
    await page.locator('#fldComplemento').fill(endereco.complemento || '-');
    await page.locator('#fldBairro').fill(endereco.bairro);
    await page.locator('#fldLocalidade').fill(endereco.localidade);
    await page.locator('#fldEstado').fill(endereco.estado);
    await page.locator('#fldCep').fill(endereco.cep);

    // Fill credit card information
    const cartaoCredito = gerar.cartaoCredito(mascara, nomeCompleto);
    await page.locator('#fldCartaoCredito').fill(cartaoCredito.numero);
    await page.locator('#fldBandeira').fill(cartaoCredito.bandeira);
    await page.locator('#fldNomeTitular').fill(cartaoCredito.nomeTitular);
    await page.locator('#fldCvv').fill(cartaoCredito.cvv);
    await page.locator('#fldDataExpiracao').fill(cartaoCredito.dataExpiracao);

    // Fill bank account information
    const cb = gerar.contaBancaria(banco);
    await page.locator('#fldCodigoBanco').fill(cb.codigoBanco);
    await page.locator('#fldNomeBanco').fill(cb.nomeBanco);
    await page.locator('#fldAgencia').fill(cb.agencia);
    await page.locator('#fldAgenciaDv').fill(cb.agenciaDv || '-');
    await page.locator('#fldConta').fill(cb.conta);
    await page.locator('#fldContaDv').fill(cb.contaDv || '-');

    // Fill bank information
    const bancoObj = gerar.banco(banco);
    await page.locator('#fldBancoCodigo').fill(bancoObj.codigoBanco);
    await page.locator('#fldBancoNome').fill(bancoObj.nomeBanco);
    await page.locator('#fldRazaoSocial').fill(bancoObj.razaoSocial);
    await page.locator('#fldIspb').fill(bancoObj.ispb);

    // Fill vehicle information
    await page.locator('#fldPlacaAntiga').fill(gerar.placaAntiga(mascara));
    await page.locator('#fldPlacaMercosul').fill(gerar.placaMercosul(mascara));
    await page.locator('#fldRenavam').fill(gerar.renavam());

    // Fill lorem ipsum text
    await page.locator('#fldPalavra').fill(gerar.palavra());
    await page.locator('#fldSentenca').fill(gerar.sentenca(15));
    await page.locator('#fldParagrafos').fill(gerar.paragrafo(3, 8));

    // Submit form
    await page.getByTestId('button-enviar').click();
    await page.waitForTimeout(2000);
  });
});
