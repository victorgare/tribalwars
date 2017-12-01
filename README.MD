# Tribal Wars Scripts

Repositórios de scripts usados para TribalWars

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

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
* [Instalar Coletor de Coordenadas](https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/VenderRecursos.user.js)

Este script calcula a quantidade de recursos que você pode vender e cria uma oferta uma oferta abaixo para vender recursos por PPs.

**Exemplo**
    O mercado oferece 1 pp por 300 de recursos e você tem 600 de recursos. O bot ira calcular que você poderia ganhar 2 pps, porem pela melhor oferta calculada pelo mercado, o pp valeria 330 de recursos, logo você não conseguiria vender os 600, sendo assim, o script identifica que você poderia vender 2 pps, porem reduz o número para um, pelo fato do calculo de melhor oferta do jogo.

**Ordem de venda dos recursos**

O script sempre vende os recursos nesta ordem:
```
Ferro
Argila
Madeira
```


