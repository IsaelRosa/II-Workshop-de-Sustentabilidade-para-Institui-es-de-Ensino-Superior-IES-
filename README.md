# II Workshop de Sustentabilidade para IES - Website Profissional

Um website moderno e responsivo para o II Workshop de Sustentabilidade para Instituições de Ensino Superior, otimizado para hospedagem na Hostinger com integração Bootstrap.

## 🚀 Características

- ✅ **Totalmente Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Bootstrap 5** - Framework CSS moderno e robusto
- ✅ **Performance Otimizada** - Carregamento rápido e eficiente
- ✅ **SEO Friendly** - Meta tags e estrutura otimizada para buscadores
- ✅ **Acessibilidade** - Seguindo padrões WCAG 2.1
- ✅ **Tema Sustentabilidade** - Cores e design voltados para o meio ambiente
- ✅ **Interativo** - Tabs, navegação suave e animações
- ✅ **Cross-browser** - Compatível com todos os navegadores modernos

## 🌱 Sobre o Evento

**II Workshop de Sustentabilidade para IES**  
**Tema:** Gestão Universitária Sustentável: A Importância de Estruturas Dedicadas  
**Datas:** 09 e 10 de Dezembro de 2025  
**Formato:** Online - Transmissão pelo YouTube  
**Organização:** Rede IES Sustentável em parceria com universidades federais

## 📁 Estrutura do Projeto

```
Dyego evento/
├── index.html              # Página principal do workshop
├── css/
│   └── style.css           # Estilos customizados + Bootstrap overrides
├── js/
│   └── script.js          # JavaScript customizado + Bootstrap
├── images/
│   └── logos/             # Logos das instituições organizadoras
│       ├── ufla-logo.png  # Universidade Federal de Lavras
│       ├── ifmg-logo.png  # Instituto Federal de Minas Gerais
│       ├── iftm-logo.png  # Instituto Federal do Triângulo Mineiro
│       ├── ufabc-logo.png # Universidade Federal do ABC
│       ├── ufv-logo.png   # Universidade Federal de Viçosa
│       ├── unifal-logo.png # Universidade Federal de Alfenas
│       ├── ufscar-logo.png # Universidade Federal de São Carlos
│       └── rede-ies-logo.png # Rede IES Sustentável
├── assets/
│   └── favicon.ico        # Ícone sustentabilidade
├── .github/
│   └── copilot-instructions.md
├── .htaccess              # Configurações Apache
├── package.json           # Metadados do projeto
├── IMAGENS.md            # Guia para logos institucionais
└── README.md
```

## 🎨 Seções do Website

### 1. **Header com Navegação Bootstrap**
- Logo e nome do workshop
- Menu responsivo com collapse mobile
- Navegação suave entre seções

### 2. **Hero Section - Sustentabilidade**
- Banner principal com tema verde
- Data, formato online e chamadas para ação
- Imagem de fundo com sobreposição sustentável

### 3. **Sobre o Workshop**
- Descrição e objetivos do evento
- Cards informativos sobre datas e transmissão
- Vídeo do evento anterior integrado

### 4. **Programação Interativa**
- Tabs Bootstrap para os 2 dias de evento
- Timeline detalhada com painéis temáticos
- Informações sobre palestrantes por sessão

### 5. **Palestrantes com Tabs**
- **Mesa de Abertura**: Autoridades e organizadores
- **Palestrantes**: Especialistas em sustentabilidade
- **Moderadores**: Coordenadores de sessões
- Cards responsivos com placeholder de perfis

### 6. **Edital e Informações**
- Formato online e certificação
- Links para canal YouTube oficial
- Público-alvo e objetivos

### 7. **Sistema de Inscrições**
- Integração com SIG-UFLA
- Passo a passo para inscrição
- Manual de apoio disponível

### 8. **Organizadores**
- Grid responsivo com logos das 8 instituições
- Efeitos hover e filter em escala de cinza
- Universidades federais e institutos parceiros

### 9. **Contato Oficial**
- E-mail da Rede IES Sustentável
- Link para canal YouTube
- Informações para suporte

### 10. **Footer Sustentável**
- Informações do workshop
- Links para redes sociais
- Copyright e direitos reservados

## 🛠️ Como Preparar para Hospedagem na Hostinger

### Pré-requisitos:
1. Conta ativa na Hostinger
2. Painel de controle (hPanel) acessível
3. Domínio configurado

### Passos para Upload:

#### 1. **Preparar os Logos Institucionais**
Antes de fazer o upload, adicione os logos na pasta `images/logos/`:
- Baixe os logos oficiais das 8 instituições organizadoras
- Redimensione para 200x100px
- Salve em formato PNG com fundo transparente
- Consulte o arquivo `IMAGENS.md` para detalhes completos

#### 2. **Verificar Links Externos**
- **SIG-UFLA**: https://sig.ufla.br/modulos/login/index.php
- **Site do Workshop**: https://sites.google.com/view/workshopsustentabilidadeies
- **YouTube**: @RedeIesSustentável
- **Manual**: Google Drive link ativo

#### 3. **Upload via File Manager**
1. Acesse o hPanel da Hostinger
2. Vá em **Files** → **File Manager**
3. Navegue até a pasta `public_html`
4. Faça upload de todos os arquivos mantendo a estrutura de pastas

#### 4. **Upload via FTP** (Alternativo)
1. Use um cliente FTP como FileZilla
2. Configure conexão com dados da Hostinger
3. Faça upload dos arquivos para `/public_html/`

#### 5. **Verificações Pós-Upload**
- [ ] Site carrega corretamente
- [ ] Bootstrap e FontAwesome funcionando
- [ ] Navegação entre seções funcional
- [ ] Tabs da programação e palestrantes operacionais
- [ ] Links externos abrindo corretamente
- [ ] Responsividade em mobile/tablet
- [ ] Logos das instituições exibindo

### Configurações Recomendadas na Hostinger:

#### **1. Configuração HTTPS**
O arquivo `.htaccess` já está configurado para forçar HTTPS:
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

#### **2. Otimização de Performance**
- Compressão Gzip habilitada
- Cache de arquivos estáticos
- Headers de segurança configurados

## 🎨 Tema de Cores - Sustentabilidade

### **Paleta Principal:**
```css
--primary: #2e7d32;        /* Verde principal */
--primary-light: #4caf50;  /* Verde claro */
--primary-dark: #1b5e20;   /* Verde escuro */
--secondary: #ffc107;      /* Amarelo/dourado */
--light: #f5f5f5;          /* Cinza claro */
--dark: #212121;           /* Cinza escuro */
```

### **Aplicação:**
- **Headers**: Verde principal (#2e7d32)
- **Cards**: Bordas e ícones verdes
- **Botões**: Gradientes de verde
- **Acentos**: Amarelo para destaques (#ffc107)

## � Responsividade

O site é totalmente responsivo usando Bootstrap 5:
- **Desktop** (1200px+) - Grid completo
- **Tablet** (768px - 1199px) - Adaptação de colunas
- **Mobile** (até 767px) - Stack vertical

## 🔧 Tecnologias Utilizadas

### **Frontend:**
- **HTML5** semântico
- **Bootstrap 5.3** (via CDN)
- **CSS3** customizado com variáveis
- **JavaScript** ES6+ com classes
- **Font Awesome 6.0** para ícones

### **Performance:**
- CDN para bibliotecas externas
- Imagens otimizadas
- CSS minificado
- Lazy loading de conteúdo

### **SEO:**
- Meta tags apropriadas
- Estrutura semântica
- Schema.org para eventos
- URLs amigáveis

## 📞 Suporte e Links Oficiais

### **Organização:**
- **E-mail**: redeiessustentavel@gmail.com
- **YouTube**: @RedeIesSustentável
- **Site**: https://sites.google.com/view/workshopsustentabilidadeies

### **Hospedagem:**
- **Hostinger**: https://support.hostinger.com
- **Chat ao vivo**: Disponível no hPanel
- **Tutoriais**: YouTube Hostinger Brasil

## 📝 Checklist Final

Antes de publicar:
- [ ] Logos institucionais adicionados
- [ ] Favicon de sustentabilidade criado
- [ ] Links externos testados
- [ ] Formulário de contato verificado
- [ ] Site testado em diferentes dispositivos
- [ ] Bootstrap carregando corretamente
- [ ] Navegação suave funcionando
- [ ] Tabs interativas operacionais
- [ ] Certificado SSL ativo
- [ ] Google Analytics configurado (opcional)

## 🎉 Deploy Completo!

Após seguir todos os passos, o site do II Workshop de Sustentabilidade para IES estará online e pronto para receber inscrições.

**URL do site**: `https://seu-dominio.com`

---

**Desenvolvido com 🌱 para a Sustentabilidade Universitária**  
**Rede IES Sustentável - 2025**