Projetos de Localização: Memorial Parque das Montanhas

Este repositório contém duas versões/aplicações web desenvolvidas para apresentar a localização exata do Memorial Parque das Montanhas utilizando mapas interativos da biblioteca LeafLet e da API Mapbox.

O repositório está dividido em duas pastas distintas, cada uma contendo a sua própria estrutura de arquivos.

📂 Estrutura do Repositório

meu-repositorio/
│
├── LeafLet/                 # versão do projeto usando LeafLet library
│   ├── estrutura.html         # Estrutura da página
│   ├── estilo.css             # Estilização (layout e mapa)
│   └── maquinario.js          # Lógica do Mapbox e marcadores
│
└── MapBox/                 #  versão do projeto usando a API MapBox
    ├── estrutura.html         
    ├── estilo.css             
    └── maquinario.js          


 Como Configurar e Executar Localmente

O projeto MapBox requer uma chave de acesso (Access Token) da API do Mapbox para que o mapa seja renderizado corretamente no navegador. 

Clone este repositório:

git clone https://github.com/dev-teles/teste-api-maps

No caso do projeto MapBox, crie uma conta e gere um token no Mapbox.com:

Copie o seu Access Token público (geralmente começa com pk.).

Escolha o projeto que deseja testar, no caso do projeto MapBox, primeiro abra o arquivo maquinario.js.

Substitua a string indicativa pela sua chave real:

// Access Token (mapbox.com)
mapboxgl.accessToken = 'pk.coloca_o_teu_token_aqui';


Inicie a aplicação:

Abra o arquivo estrutura.html diretamente no seu navegador. Não é necessário um servidor local.
