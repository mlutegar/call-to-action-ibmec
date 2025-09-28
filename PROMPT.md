## 📋 CHECKLIST COMPLETO - PLATAFORMA DE E-BOOKS

### **ESTRUTURA DO PROJETO (TEMPLATE REACT)**
- [ ] Utilizar o template React fornecido como base
- [ ] Criar páginas em `@src/pages/`
    - [ ] `EbooksPage.jsx` (página principal de listagem)
- [ ] Criar componentes em `@src/components/` com estrutura:
  ```
  @src/components/
  ├── Header/
  │   ├── Header.jsx
  │   └── Header.styles.css (ou .scss/.styled.js)
  ├── SearchBar/
  │   ├── SearchBar.jsx
  │   └── SearchBar.styles.css
  ├── EbookCard/
  │   ├── EbookCard.jsx
  │   └── EbookCard.styles.css
  ├── EbooksGrid/
  │   ├── EbooksGrid.jsx
  │   └── EbooksGrid.styles.css
  ├── HeroSection/
  │   ├── HeroSection.jsx
  │   └── HeroSection.styles.css
  ├── Breadcrumb/
  │   ├── Breadcrumb.jsx
  │   └── Breadcrumb.styles.css
  └── LoadingSpinner/
      ├── LoadingSpinner.jsx
      └── LoadingSpinner.styles.css
  ```

### **COMPONENTES A CRIAR**
- [ ] **Header/**
    - [ ] Header.jsx - Componente do cabeçalho
    - [ ] Header.styles.css - Estilos do header
- [ ] **HeroSection/**
    - [ ] HeroSection.jsx - Seção azul com título
    - [ ] HeroSection.styles.css - Background e tipografia
- [ ] **SearchBar/**
    - [ ] SearchBar.jsx - Barra de busca funcional
    - [ ] SearchBar.styles.css - Estilos do input e botão
- [ ] **Breadcrumb/**
    - [ ] Breadcrumb.jsx - Contador de resultados
    - [ ] Breadcrumb.styles.css - Estilo do texto
- [ ] **EbooksGrid/**
    - [ ] EbooksGrid.jsx - Container do grid
    - [ ] EbooksGrid.styles.css - Layout responsivo do grid
- [ ] **EbookCard/**
    - [ ] EbookCard.jsx - Card individual
    - [ ] EbookCard.styles.css - Estilos do card
- [ ] **LoadingSpinner/**
    - [ ] LoadingSpinner.jsx - Indicador de carregamento
    - [ ] LoadingSpinner.styles.css - Animação
- [ ] **EmptyState/**
    - [ ] EmptyState.jsx - Mensagem quando não há resultados
    - [ ] EmptyState.styles.css - Estilos da mensagem
- [ ] **Button/** (componente reutilizável)
    - [ ] Button.jsx - Botão genérico
    - [ ] Button.styles.css - Variantes (primary, secondary)
- [ ] **Modal/** (opcional - para preview)
    - [ ] Modal.jsx - Modal para preview
    - [ ] Modal.styles.css - Overlay e conteúdo

### **ESTRUTURA GERAL**
- [ ] Criar aplicação web responsiva para visualização de e-books
- [ ] Implementar sistema de roteamento para navegação entre páginas
- [ ] Configurar layout principal com header fixo e área de conteúdo
- [ ] Adicionar favicon e meta tags apropriadas

### **HEADER/NAVEGAÇÃO**
- [ ] Logo "CALL TO ACTION" no canto superior esquerdo
- [ ] Botão "Baixar último e-book" amarelo/dourado no canto superior direito
- [ ] Header com fundo branco e sombra sutil
- [ ] Tornar logo clicável para voltar à home
- [ ] Implementar menu responsivo para mobile (hamburger menu)

### **HERO SECTION**
- [ ] Background azul escuro (#1e3a6f ou similar)
- [ ] Título "E-books" em fonte grande e branca
- [ ] Subtítulo: "Revistas com dos melhores TCCs de cada semestre do Curso de Publicidade IBMEC"
- [ ] Padding generoso para respiração visual
- [ ] Animação suave de entrada (fade-in)

### **BARRA DE BUSCA**
- [ ] Campo de busca centralizado com placeholder "Insira o ano"
- [ ] Ícone de lupa à esquerda do campo
- [ ] Botão "Pesquisar" amarelo/dourado à direita
- [ ] Background branco para o container de busca
- [ ] Bordas arredondadas
- [ ] Sombra suave no container
- [ ] Funcionalidade de busca por ano/semestre
- [ ] Busca em tempo real (conforme digita)
- [ ] Validação de entrada (formato de ano)

### **BREADCRUMB**
- [ ] Exibir "Exibindo 1 e-book" ou contador dinâmico
- [ ] Atualizar contador baseado nos resultados da busca
- [ ] Fonte em cinza suave
- [ ] Margem superior e inferior adequadas

### **GRID DE E-BOOKS**
- [ ] Cards responsivos (grid de 3-4 colunas em desktop, 2 em tablet, 1 em mobile)
- [ ] Espaçamento uniforme entre cards
- [ ] Container com padding lateral

### **CARD DE E-BOOK**
- [ ] Estrutura do card com bordas arredondadas
- [ ] Sombra sutil para elevação
- [ ] Background branco
- [ ] Imagem de capa do e-book (proporção retrato)
- [ ] Título do e-book (ex: "Call To Action")
- [ ] Indicador de ano/semestre (ex: "2025.1")
- [ ] Botão "Baixar" amarelo/dourado centralizado
- [ ] Hover effect no card (elevação/sombra)
- [ ] Hover effect no botão (mudança de cor/escala)
- [ ] Padding interno adequado

### **FUNCIONALIDADES**
- [ ] Sistema de filtragem por ano
- [ ] Sistema de filtragem por semestre
- [ ] Ordenação (mais recente/mais antigo)
- [ ] Paginação se houver muitos e-books
- [ ] Download de PDF ao clicar em "Baixar"
- [ ] Preview do e-book antes do download (modal ou nova página)
- [ ] Contador de downloads
- [ ] Sistema de favoritos (opcional)

### **ESTADOS E FEEDBACK**
- [ ] Estado de loading durante busca
- [ ] Mensagem quando não há resultados
- [ ] Indicador de progresso no download
- [ ] Toast/notificação de sucesso após download
- [ ] Tratamento de erros (falha no download, etc.)
- [ ] Skeleton loading para os cards

### **DESIGN SYSTEM**
- [ ] Cores principais:
    - Azul escuro: #1e3a6f (background hero)
    - Amarelo/Dourado: #f5b800 (CTAs)
    - Branco: #ffffff (cards e backgrounds)
    - Cinza claro: #f5f5f5 (backgrounds secundários)
    - Cinza texto: #666666 (textos secundários)
- [ ] Tipografia:
    - Font-family principal (Sans-serif moderna)
    - Hierarquia de títulos (H1, H2, H3)
    - Tamanhos responsivos
- [ ] Espaçamento consistente (8px base grid)
- [ ] Bordas arredondadas padronizadas (8px ou 12px)
- [ ] Sombras padronizadas (3 níveis: sutil, média, forte)

### **ACESSIBILIDADE**
- [ ] Alt text em todas as imagens
- [ ] Navegação por teclado
- [ ] Focus states visíveis
- [ ] Contraste WCAG AA em todos os textos
- [ ] ARIA labels apropriados
- [ ] Estrutura semântica HTML5

### **PERFORMANCE**
- [ ] Lazy loading para imagens de capa
- [ ] Otimização de imagens (WebP com fallback)
- [ ] Minificação de CSS/JS
- [ ] Cache de recursos estáticos
- [ ] CDN para assets

### **SEO & META**
- [ ] Meta descriptions únicas para cada e-book
- [ ] Open Graph tags
- [ ] Schema markup para publicações
- [ ] Sitemap XML
- [ ] URLs amigáveis

### **EXTRAS (OPCIONAL)**
- [ ] Modo escuro
- [ ] Sistema de comentários/avaliações
- [ ] Compartilhamento social
- [ ] Analytics de downloads
- [ ] Newsletter para novos e-books
- [ ] Sistema de busca avançada (por autor, tema, etc.)
- [ ] Preview de páginas do e-book
- [ ] Versão PWA para mobile

### **TECNOLOGIAS SUGERIDAS**
- [ ] React (já definido pelo template)
- [ ] CSS Modules ou Styled Components (conforme template)
- [ ] Context API ou useReducer para estado global
- [ ] Axios ou Fetch API para requisições
- [ ] React Router para roteamento
- [ ] React Icons para ícones
- [ ] React Hooks customizados para lógica reutilizável

### **HOOKS CUSTOMIZADOS (em @src/hooks/)**
- [ ] useEbooks - gerenciar estado dos e-books
- [ ] useSearch - lógica de busca
- [ ] useDebounce - debounce para busca em tempo real
- [ ] useDownload - gerenciar downloads

### **SERVIÇOS (em @src/services/)**
- [ ] api.js - configuração base da API
- [ ] ebooksService.js - endpoints dos e-books

### **UTILS (em @src/utils/)**
- [ ] formatters.js - formatação de datas, anos
- [ ] validators.js - validação de inputs
- [ ] constants.js - constantes do projeto

### **DADOS NECESSÁRIOS**
- [ ] Lista de e-books com:
    - ID único
    - Título
    - Ano/Semestre
    - URL da capa
    - URL do PDF
    - Descrição (opcional)
    - Autores (opcional)
    - Data de publicação
    - Número de páginas

Este checklist agora está adaptado para a estrutura do seu template React, mantendo a organização de componentes em pastas individuais com seus respectivos estilos!