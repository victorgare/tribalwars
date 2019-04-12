# Tribal Wars Scripts

Repositórios de scripts usados para TribalWars

## Sumario

* [Coletar Coordenadas - Barbaras](https://github.com/victorgare/tribalwars#coletar-coordenadas---barbaras)
* [Vender Recursos](https://github.com/victorgare/tribalwars#vender-recursos)
* [Auto Fake](https://github.com/victorgare/tribalwars#auto-fake)
* [Script de Intel](https://github.com/victorgare/tribalwars#script-de-intel)
* [Farm Mapa](https://github.com/victorgare/tribalwars#farm-mapa)
* [Identificador de Ataques](https://github.com/victorgare/tribalwars#identificador-de-ataques)
* [Planejador de Comandos](https://github.com/victorgare/tribalwars#planejador-de-comandos)
* [Farm Assistente de Saque](https://github.com/victorgare/tribalwars#farm-assistente-de-saque)
* [Coletar Coordenadas pelo Click](https://github.com/victorgare/tribalwars#coletar-coordenadas-pelo-click)
* [ContinuousRecruting](https://github.com/victorgare/tribalwars#continuous-recruting)
* [AccountCreator](https://github.com/victorgare/tribalwars#account-creator)
* [Resources Sender](https://github.com/victorgare/tribalwars#resources-sender)
* [Resources Request](https://github.com/victorgare/tribalwars#resources-request)


### Pre-requisitos

Instale a extensão Tampermonkey

### Installing

Para instalar os scripts no Tampermonkey, clique nos links que estarão disponiveis abaixo

## Built With

* Javascript

## Authors

* **Victor Garé** - *Initial work* - [GitHub](https://github.com/victorgare)

## Coletar Coordenadas - Barbaras

* Deve ser executado no mapa!
* [Instalar Coletor de Coordenadas](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/ColetarCoordenadas.user.js)

Este script cria um botão perto da informação da númeração do continente, quando o botão é clicado, uma caixa irá aparecer com as coordenadas das aldeias barbaras

## Vender Recursos

* Deve ser executado no mercado na parte de vender recursos por PPs!
* [Instalar Vender Recursos](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/VenderRecursos.user.js)

Este script calcula a quantidade de recursos que você pode vender e cria uma oferta uma oferta abaixo para vender recursos por PPs.

**Exemplo**
    O mercado oferece 1 pp por 300 de recursos e você tem 600 de recursos. O bot ira calcular que você poderia ganhar 2 pps, porem pela melhor oferta calculada pelo mercado, o pp valeria 330 de recursos, logo você não conseguiria vender os 600, sendo assim, o script identifica que você poderia vender 2 pps, porem reduz o número para um, pelo fato do calculo de melhor oferta do jogo.

**Ordem de venda dos recursos**

O script sempre vende os recursos nesta ordem:
```javascript
Ferro
Argila
Madeira
```

## Auto Fake

* Deve ser executado na praça de reuniões
* [Instalar Auto Fake](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/AutoFakes.user.js)

Este script envia ataques fakes nas aldeias configuradas


**Configurações das quatidades a serem enviadas**

A quantidade de tropas pode ser configurada alterando os valores abaixos dentro do script (Não disponivel para arquivos e arqueiros a cavalo)

```javascript
var FakesPorAldeia = 30; //quantidade de fakes por aldiea
var sp = 0; // lanceiros
var sw = 0; // espadachins
var ax = 0; //barbaros
var scout = 0; //exploradores
var lc = 0; //calavaria leve
var hv = 0; // cavalaria pesada
var cat = 0; //catapulta
var ra = 1; // ariete
```


**Configuração das aldeias a serem atacadas**

As aldeias que receberam os ataques podem ser configuradas alterando o valor da variavel abaixo, separando as coordenadas por um espaço

```javascript
var coords = '111|111 222|222 333|333';
```

## Script de Intel

* Deve ser executado no mapa
* [Instalar Script de Intel](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/Estatisticas.user.js)

Este script exibe informaçoes de evolução, ODA e ODD dos players no mapa, basta ativa-lo e abrir o mapa


## Farm Mapa

* Deve ser executado no mapa
* [Instalar Farm Mapa](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/FarmMapa.user.js)

Script para farmar aldeias usando o assistente de saque (Configuração **A**) direto pelo mapa

**Configurações**

Apenas aumente o seu mapa o máximo possivel, ative o script e atualize a pagina, o script ira enviar ataques nas aldeias barbaras da mais próxima até a mais distante


## Identificador de ataques

* Deve ser executado nos comandos chegando, deve haver conta premiun!
* [Instalar Identificador de Ataques](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/IdentificadorAtaques.user.js)

Script para identificar comandos vindos contra suas aldeias

**Configurações**

Na pagina de comandos chegando, aplicar um filtro no nome dos comandos para **Ataque**, assim, apenas comandos não identificados iram ser listados, o script seleciona todos e logo em seguida clica no botão identificar


## Planejador de Comandos

* Deve ser executado na pagina de confirmar o envio de um comando
* [Instalar Planejador de Comandos](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/PlanejadorComandos.user.js)

O script permite que você configure um horário de chegada e assim o script envia para que chegue no horário

**Atenção**

Devido a delays de internet, o script não é muito preciso


## Farm Assistente de Saque

* Deve ser executado na pagina do assistente de saque
* [Instalar Farm Assistente de Saque](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/FarmAssistenteSaque.user.js)

Envia comandos usando a configuração **A** do assistente de saque

## Coletar Coordenadas pelo Click

* Deve ser executado no mapa
* [Instalar Coletar Coordenadas pelo Click](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/ColetarCoordsClick.user.js)

Adiciona um local onde as coordenadas das aldeias clicadas seram armazenadas. Basta clicar em qualquer aldeia e as coordenadas são adicionadas nesta area

## Continuous Recruting

* Deve ser executado na tela de recrutar da aldeia!
* [Instalar Continuous Recruting](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/ContinuousRecruting.user.js)

O script verifica se há a unidade desejada na fila e caso não, adiciona 1 a fila de recrut (sim, apenas uma unidade), basta alterar o valor de alguma das variáveis abaixo para "true" e o script ira recrutar

```javascript
var lanca = false;
var espada = false;
var barbaro = false;
var explorador = false;
var cavalariaLeve = false;
var cavalariaPesada = false;
var catapulta = false;
var ariete = false;
```

**ATENÇÃO**
O script não tem limite de recrut!

## Account Creator

* Deve ser executado no link de criação de conta!
* [Instalar Account Creator](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/AccountCreator.user.js)

Script ira criar contas fakes baseadas no link de convite fornecido e que iram ficar perto do usuário. Este script cria o tão famoso "Mar de BBs". Para usar configure as duas variaveis abaixo com o URL do link de convite e o mundo que deve ser colocada a conta

```javascript
var url = "seu link de convite"
var mundo = "numero do mundo que deve criar a acc ex: 87";
```

**ATENÇÃO**
O jogo limita a criação de 5 contas por dia por link de convite

## Resources Sender

* Deve ser executado no mercado na parte de enviar recursos!
* [Instalar Resources Sender](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/ResourcesSender.user.js)

Script ira enviar recursos para cunhar moedas para uma aldeia especificada!

```javascript
const _destino = ""; // aldeia de destino
```

## Resources Request

* Deve ser executado no mercado na parte de pedir recursos!
* [Instalar Resources Request](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/ResourcesRequest.user.js)

Script puxar recursos para a aldeia que estiver sendo executada!

```javascript
const _intervalInMinutes = 10; // intervalo de execução
const _modelToUse = "Proporção"; // Altere para o modelo desejado
```

Caso queira alterar o intervalo de executação, apenas alterar o valor da variavel, lembrando que deve ser em minutos