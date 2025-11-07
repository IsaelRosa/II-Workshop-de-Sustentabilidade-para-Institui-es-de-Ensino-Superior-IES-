# Especificações de Imagens - II Workshop de Sustentabilidade para IES

## 📋 Logos Institucionais - Status Atualizado

### **✅ LOGOS FORNECIDOS PELO USUÁRIO (Aplicar nos arquivos):**

1. **UFLA - Universidade Federal de Lavras**
   - **Arquivo**: `images/logos/ufla-logo.png`
   - **Status**: ✅ Logo oficial fornecido
   - **Descrição**: Logo azul e verde da UFLA

2. **Rede IES Sustentável**
   - **Arquivo**: `images/logos/rede-ies-logo.png`
   - **Status**: ✅ Logo oficial fornecido (já aplicado no navbar)
   - **Descrição**: Árvore verde com livro

3. **IFMG - Instituto Federal de Minas Gerais**
   - **Arquivo**: `images/logos/ifmg-logo.png`
   - **Status**: 🔄 Logo fornecido - substituir placeholder
   - **Descrição**: Padrão institutos federais com verde e vermelho

4. **IFTM - Instituto Federal do Triângulo Mineiro**
   - **Arquivo**: `images/logos/iftm-logo.png`
   - **Status**: 🔄 Logo fornecido - substituir placeholder
   - **Descrição**: Padrão institutos federais

5. **IFSP - Instituto Federal de São Paulo**
   - **Arquivo**: `images/logos/ifsp-logo.png`
   - **Status**: 🔄 Logo fornecido - substituir placeholder
   - **Descrição**: Padrão institutos federais

6. **UFJF - Universidade Federal de Juiz de Fora**
   - **Arquivo**: `images/logos/ufjf-logo.png`
   - **Status**: 🔄 Logo fornecido - substituir placeholder
   - **Descrição**: Triângulos vermelho, cinza e preto

7. **Unimontes - Universidade Estadual de Montes Claros**
   - **Arquivo**: `images/logos/unimontes-logo.png`
   - **Status**: 🔄 Logo fornecido - substituir placeholder
   - **Descrição**: Logo roxo da Unimontes

### **⏳ LOGOS PENDENTES (Aguardando obtenção):**

8. **UFABC - Universidade Federal do ABC**
   - **Arquivo**: `images/logos/ufabc-logo.png`
   - **Status**: ⏳ Aguardando obtenção
   - **Contato**: comunicacao@ufabc.edu.br

9. **UFV - Universidade Federal de Viçosa**
   - **Arquivo**: `images/logos/ufv-logo.png`
   - **Status**: ⏳ Aguardando obtenção
   - **Contato**: comunicacao@ufv.br

10. **UNIFAL - Universidade Federal de Alfenas**
    - **Arquivo**: `images/logos/unifal-logo.png`
    - **Status**: ⏳ Aguardando obtenção
    - **Contato**: comunicacao@unifal-mg.edu.br

11. **UFSCAR - Universidade Federal de São Carlos**
    - **Arquivo**: `images/logos/ufscar-logo.png`
    - **Status**: ⏳ Aguardando obtenção
    - **Contato**: aci@ufscar.br

## 📝 Instruções para Aplicar os Logos Fornecidos

### **Passo a Passo:**

1. **Salvar as Imagens**
   - Salve cada logo fornecido pelo usuário
   - Mantenha qualidade alta (PNG recomendado)

2. **Redimensionar se Necessário**
   - Tamanho ideal: 200x100px (proporção 2:1)
   - Manter fundo transparente
   - Qualidade para web

3. **Renomear e Substituir**
   - UFLA: Salve como `ufla-logo.png`
   - IFMG: Salve como `ifmg-logo.png`
   - IFTM: Salve como `iftm-logo.png`
   - IFSP: Salve como `ifsp-logo.png`
   - UFJF: Salve como `ufjf-logo.png`
   - Unimontes: Salve como `unimontes-logo.png`

4. **Testar no Site**
   - Abra o `index.html` no navegador
   - Verifique a seção "Organizadores"
   - Confirme que todos os logos carregam

## 🎨 Outras Imagens

### **Favicon** ⏳
- **Arquivo**: `assets/favicon.ico`
- **Status**: Aguardando criação
- **Sugestão**: Folha verde ou símbolo sustentável

## 📐 Especificações Técnicas

### **CSS dos Logos:**
```css
.organizer-logo {
    max-height: 80px;
    max-width: 150px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%);
    transition: all 0.3s ease;
}

.organizer-logo:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
}
```

### **Grid Responsivo:**
- **Desktop**: 4 logos por linha (col-md-3)
- **Mobile**: 2 logos por linha (col-6)
- **Espaçamento**: margin-bottom de 1.5rem

## ✅ Checklist Final

- [x] Estrutura de arquivos criada
- [x] Seção organizadores atualizada (11 instituições)
- [x] Placeholders criados para todos os logos
- [x] Grid responsivo implementado
- [x] CSS de hover e animações aplicado
- [ ] Logos fornecidos aplicados nos arquivos
- [ ] Logos pendentes obtidos dos contatos
- [ ] Favicon criado
- [ ] Teste final completo

---

**Total de Instituições Organizadoras**: 11  
**Logos Fornecidos**: 7  
**Logos Pendentes**: 4

## 📁 Pasta: `images/logos/`

### **Logos das Instituições Organizadoras:**

1. **ifmg-logo.png**
   - Tamanho: 200x100px 
   - Descrição: Logo do Instituto Federal de Minas Gerais
   - Formato: PNG com fundo transparente

2. **iftm-logo.png**
   - Tamanho: 200x100px
   - Descrição: Logo do Instituto Federal do Triângulo Mineiro
   - Formato: PNG com fundo transparente

3. **ufabc-logo.png**
   - Tamanho: 200x100px
   - Descrição: Logo da Universidade Federal do ABC
   - Formato: PNG com fundo transparente

4. **ufv-logo.png**
   - Tamanho: 200x100px
   - Descrição: Logo da Universidade Federal de Viçosa
   - Formato: PNG com fundo transparente

5. **unifal-logo.png**
   - Tamanho: 200x100px
   - Descrição: Logo da Universidade Federal de Alfenas
   - Formato: PNG com fundo transparente

6. **ufscar-logo.png**
   - Tamanho: 200x100px
   - Descrição: Logo da Universidade Federal de São Carlos
   - Formato: PNG com fundo transparente

7. **rede-ies-logo.png**
   - Tamanho: 200x100px
   - Descrição: Logo da Rede IES Sustentável
   - Formato: PNG com fundo transparente

8. **ufla-logo.png**
   - Tamanho: 200x100px
   - Descrição: Logo da Universidade Federal de Lavras
   - Formato: PNG com fundo transparente

## 📁 Pasta: `images/`

### **Imagem de Fundo:**

1. **hero-bg-sustainability.jpg** (Opcional)
   - Tamanho: 1920x1080px
   - Descrição: Imagem de fundo alternativa para sustentabilidade
   - Sugestão: Campus universitário com natureza, painéis solares, ou ambiente acadêmico sustentável
   - Formato: JPG otimizado (máx 400KB)
   - **Nota**: Atualmente usando imagem do Unsplash via URL

## 📁 Pasta: `assets/`

### **Favicon:**

1. **favicon.ico**
   - Tamanho: 16x16, 32x32, 48x48px (multi-size ICO)
   - Descrição: Ícone relacionado à sustentabilidade (folha, reciclar, etc.)
   - Baseado no tema de sustentabilidade

## 🎨 Diretrizes de Design

### **Cores do Projeto:**
- **Verde Principal:** #2e7d32
- **Verde Claro:** #4caf50
- **Verde Escuro:** #1b5e20
- **Amarelo/Dourado:** #ffc107
- **Cinza Claro:** #f5f5f5
- **Cinza Escuro:** #212121

### **Estilo das Imagens:**
- **Logos institucionais:** Oficiais, alta resolução, fundo transparente
- **Tema sustentabilidade:** Verde, natureza, tecnologia limpa
- **Profissional:** Adequado para ambiente acadêmico

## 🛠️ Ferramentas Recomendadas

### **Para Download de Logos Oficiais:**
- **Sites oficiais** das universidades e institutos
- **Assessorias de comunicação** das instituições
- **Bancos de dados** de identidade visual institucional

### **Para Edição:**
- **GIMP** (gratuito) - redimensionamento e conversão
- **Photoshop** - edição profissional
- **Canva** - ajustes rápidos
- **Remove.bg** - remoção de fundo

### **Para Otimização:**
- **TinyPNG** (compressão PNG)
- **JPEGmini** (compressão JPG)
- **Squoosh** (Google - online)

## 📝 Status Atual

### **Funcionando:**
- ✅ Layout responsivo
- ✅ Cores e tipografia
- ✅ Estrutura de navegação
- ✅ Conteúdo do workshop
- ✅ Links externos funcionais
- ✅ Integração Bootstrap

### **Placeholders Ativos:**
Atualmente os logos estão apontando para:
- `images/logos/ifmg-logo.png`
- `images/logos/iftm-logo.png`
- `images/logos/ufabc-logo.png`
- `images/logos/ufv-logo.png`
- `images/logos/unifal-logo.png`
- `images/logos/ufscar-logo.png`
- `images/logos/rede-ies-logo.png`
- `images/logos/ufla-logo.png`

## ✅ Checklist de Imagens

- [ ] Logos das 8 instituições organizadoras coletados
- [ ] Logos redimensionados para 200x100px
- [ ] Logos com fundo transparente (PNG)
- [ ] Favicon criado para o tema sustentabilidade
- [ ] Imagem hero alternativa (opcional)
- [ ] Todas as imagens testadas no site
- [ ] Tamanhos de arquivo otimizados
- [ ] Formatos corretos confirmados

## 🚀 Prioridades

### **Alta Prioridade:**
1. **Favicon** - Para profissionalismo
2. **Logo UFLA** - Instituição organizadora principal
3. **Logo Rede IES** - Instituição coordenadora

### **Média Prioridade:**
4. Logos das demais universidades federais
5. Logos dos institutos federais

### **Baixa Prioridade:**
6. Imagem hero personalizada (atual via Unsplash funciona bem)

## 📞 Contatos para Logos

Para obter os logos oficiais, entrar em contato com:
- **UFLA**: Assessoria de Comunicação
- **Rede IES**: redeiessustentavel@gmail.com
- **Demais instituições**: Sites oficiais ou assessorias

---

**Importante:** O site está funcional mesmo sem os logos, mas ficará mais profissional e oficial com as identidades visuais corretas das instituições.