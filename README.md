# Battlefield Archive

*Uma exploração de interfaces espaciais na web.*

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success) ![Type](https://img.shields.io/badge/Type-Estudo%20T%C3%A9cnico-blue)

**[PLACEHOLDER: GIF/SCREENSHOT DA INTERFACE 3D]**

## Sobre o Projeto

Battlefield Archive é uma aplicação web que reimagina a navegação de conteúdo através de uma interface espacial 3D. O projeto explora a manipulação de objetos tridimensionais no navegador, criando uma experiência de arquivo interativo que foge do padrão bidimensional tradicional. Desenvolvido como estudo técnico sobre renderização 3D na web e gerenciamento de estado em aplicações React complexas.

**[Live Demo](https://battlefiled.vercel.app)** | **[Reportar Bug](https://github.com/PixelPionee/Battlefiled/issues)**

> Aplicação hospedada na Vercel com deploy contínuo automatizado via GitHub

---

## Stack Tecnológica

- **React 19.1.1** - Biblioteca UI
- **TypeScript 5.9.3** - Tipagem estática
- **Vite 7.1.12** - Build tool e dev server
- **Three.js 0.182.0** - Engine 3D
- **React Three Fiber 9.4.2** - React renderer para Three.js
- **React Three Drei 10.7.7** - Helpers e abstrações
- **Framer Motion 12.23.26** - Animações UI
- **GSAP 3.14.2** - Animações complexas
- **Tailwind CSS 4.1.0** - Estilização

---

## Bastidores & Aprendizados

### O Desafio

Criar uma navegação 3D performática no navegador que permitisse interação fluida com múltiplos objetos simultaneamente, mantendo 60fps mesmo em dispositivos de médio desempenho. O objetivo técnico era implementar um sistema de raycasting eficiente para detecção de hover/click em objetos 3D, sincronizado com um sistema de estado React complexo.

### O Erro (O que deu errado)

Inicialmente, implementei a cena 3D com todos os componentes renderizando em cada frame, sem otimização de re-renders. Isso causou quedas de performance significativas quando múltiplas pastas estavam sendo animadas simultaneamente. Além disso, o sistema de iluminação estava calculando sombras para todos os objetos indiscriminadamente, gerando overhead desnecessário.

A primeira versão também tinha um problema arquitetural: o estado da pasta selecionada estava sendo gerenciado dentro do componente 3D, criando acoplamento entre a lógica de renderização e a lógica de negócio. Isso dificultava a manutenção e tornava impossível implementar features como histórico de navegação.

### A Solução (Como corrigi)

Refatorei a arquitetura separando claramente as responsabilidades:

1. **Otimização de Renders**: Implementei `React.memo` nos componentes de pasta individual e utilizei `useMemo` para geometrias e materiais que não mudam. Isso reduziu os re-renders em aproximadamente 70%.

2. **Sistema de Iluminação Seletivo**: Configurei o spotlight para afetar apenas objetos específicos através de layers do Three.js, reduzindo o custo computacional das sombras.

3. **Separação de Concerns**: Extraí o gerenciamento de estado para um hook customizado (`useGameData`), desacoplando a lógica de dados da renderização 3D. O componente Scene agora é puramente apresentacional.

4. **Lazy Loading**: Implementei carregamento assíncrono dos dados da API com Suspense boundaries, melhorando o tempo de carregamento inicial.

### O que eu faria diferente hoje

Hoje, implementaria uma arquitetura de componentes mais desacoplada para a cena 3D, possivelmente utilizando um padrão de Entity-Component-System (ECS) para gerenciar os objetos 3D. Isso facilitaria a adição de novos tipos de objetos interativos sem modificar o código existente.

Também utilizaria Web Workers para cálculos pesados de física/colisão, mantendo o thread principal livre para renderização. A implementação atual funciona bem para 5 objetos, mas não escalaria para cenários com dezenas de elementos interativos.

Por fim, implementaria testes de integração para o sistema de raycasting, que atualmente depende de testes manuais. A natureza visual do projeto dificulta testes automatizados, mas ferramentas como Playwright com visual regression testing seriam adequadas.

---

## Como Rodar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/PixelPionee/Battlefiled.git

# Entre na pasta do projeto
cd Battlefiled/battlefield-web

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

---

## Estrutura do Projeto

```
battlefield-web/
├── src/
│   ├── components/
│   │   ├── Menu3D/          # Componentes da cena 3D
│   │   ├── FolderContent/   # Overlay de conteúdo
│   │   └── UI/              # Componentes de interface
│   ├── hooks/               # Custom hooks
│   ├── tipos/               # Definições TypeScript
│   └── utils/               # Utilitários e serviços
├── public/
│   ├── api/                 # Dados estáticos
│   └── images/              # Assets de imagem
└── vite.config.ts
```

---

## Limitações Conhecidas

- **Desktop Only**: A interface foi otimizada para desktop. Dispositivos móveis não são suportados devido à complexidade da renderização 3D e controles de câmera.
- **Performance**: Requer GPU com suporte a WebGL 2.0. Dispositivos muito antigos podem apresentar lentidão.
- **Navegadores**: Testado em Chrome 120+ e Firefox 121+. Safari pode apresentar inconsistências de renderização.

---

## Licença

Este projeto é um estudo técnico e está disponível sob licença MIT.

---

## Contato

Desenvolvido por [Caio Lightspeed] 

Link do Projeto: [https://github.com/PixelPionee/Battlefiled](https://github.com/PixelPionee/Battlefiled)
