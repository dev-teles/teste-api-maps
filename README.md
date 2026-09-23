Projetos de Localização: Memorial Parque das Montanhas

Este repositório contém três versões/aplicações web desenvolvidas para apresentar a localização exata do Memorial Parque das Montanhas utilizando mapas interativos da biblioteca LeafLet, da API Mapbox e da ferramenta de incorporar do GoogleMaps.

O repositório está dividido em três pastas distintas, cada uma contendo a sua própria estrutura de arquivos.

📂 Estrutura do Repositório

teste-api-maps/
│
├── Leaflet/                     # Versão do projeto usando a biblioteca Leaflet
│   ├── estrutura.html           # Estrutura da página
│   ├── estilo.css               # Estilização (layout e mapa)
│   └── maquinario.js            # Lógica do Leaflet e marcadores
│
├── Mapbox/                      # Versão do projeto usando a API Mapbox
│   ├── estrutura.html           # Estrutura da página
│   ├── estilo.css               # Estilização (layout e mapa)
│   └── maquinario.js            # Lógica do Mapbox e marcadores
│
└── GoogleMaps/                  # Versão do projeto usando a incorporação do Google Maps
    ├── estrutura.html           # Estrutura da página
    ├── estilo.css               # Estilização (layout e iframe do mapa)
    

 Como Configurar e Executar Localmente

O projeto MapBox requer uma chave de acesso (Access Token) da API do Mapbox para que o mapa seja renderizado corretamente no navegador. 

Clone este repositório:

git clone https://github.com/dev-teles/teste-api-maps

No caso do projeto MapBox, crie uma conta e gere um token em mapbox.com:

Copie o seu Access Token público (geralmente começa com pk.).

Escolha o projeto que deseja testar, no caso do projeto MapBox, primeiro abra o arquivo maquinario.js.

Substitua a string indicativa pela sua chave real:

// Access Token (mapbox.com)
mapboxgl.accessToken = 'pk.coloca_o_teu_token_aqui';


Inicie a aplicação:

O projeto LeafLet e GoogleMaps não necessitam de token API. Abra o arquivo estrutura.html diretamente no seu navegador. Não é necessário um servidor local.
