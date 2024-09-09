# Problema do Caixeiro-Viajante (TSP)

Este projeto é uma aplicação web que resolve o famoso Problema do Caixeiro-Viajante (Travelling Salesman Problem - TSP) utilizando diferentes algoritmos. A aplicação permite que o usuário visualize o mapa gerado com as cidades e o caminho mais eficiente calculado pelos algoritmos implementados.

## Funcionalidades

- Geração de coordenadas aleatórias de cidades
- Entrada manual de coordenadas para as cidades
- Seleção automática ou manual de diferentes algoritmos:
  - Held-Karp
  - Inserção Mais Barata
  - Vizinho Mais Próximo
- Visualização do caminho mais curto em um mapa interativo
- Exportação dos resultados para arquivos TXT ou Excel
- Suporte para múltiplas instâncias
- Design responsivo ao tamanho da tela

## Tecnologias Utilizadas

- **HTML/CSS/JavaScript** para o frontend
- **Canvas API** para renderização dos mapas
- **Algoritmos de TSP** para cálculo do menor caminho:
  - Held-Karp (exato)
  - Inserção Mais Barata (heurístico)
  - Vizinho Mais Próximo (heurístico)
- **Biblioteca XLSX** para exportação de dados para planilhas Excel

## Como Usar

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```
2. Abra o arquivo `index.html` em seu navegador para iniciar a aplicação.

3. No site, você pode:
    - Adicionar instâncias para criar diferentes mapas.
    - Gerar coordenadas aleatórias para cidades ou inserir suas próprias coordenadas.
    - Escolher um algoritmo para resolver o TSP, ou deixar que o sistema escolha automaticamente com base no número de cidades.
    - Exportar os resultados para TXT ou Excel.

## Estrutura do Projeto

- `index.html`: Página principal da aplicação, contendo a estrutura HTML e os elementos visuais.
- `held-karp.js`: Implementação do algoritmo Held-Karp.
- `insercao-mais-barata.js`: Implementação do algoritmo de Inserção Mais Barata.
- `vizinho-mais-proximo.js`: Implementação do algoritmo Vizinho Mais Próximo.
- `xlsx.full.min.js`: Biblioteca para exportação de planilhas Excel.

## Referências

- [Problema do Caixeiro-Viajante - Wikipedia](https://pt.wikipedia.org/wiki/Problema_do_caixeiro-viajante)

## Contato
  Nome: Iderlan Matheus Nascimento Cardoso
  perfil do GitHub: (https://github.com/iderlan) 
  email: iderlan2001@gmail.com
