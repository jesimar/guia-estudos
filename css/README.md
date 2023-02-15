# Guia da Linguagem CSS

**OBS:** Parte desta documentação foi gerada usando a ferramenta de IA ChatGPT com diversas adaptações na escrita. 

CSS é a sigla para _Cascading Style Sheets_ (Folhas de Estilo em Cascata), uma linguagem de estilos utilizada para definir a apresentação de documentos escritos em HTML, incluindo cores, layout, fontes, tamanhos, espaçamento e outros aspectos visuais de uma página da web.

O CSS permite que os desenvolvedores separem o conteúdo da página (HTML) da sua aparência visual, permitindo que o design do site seja modificado facilmente sem precisar alterar o conteúdo da página em si. Por exemplo, você pode usar CSS para definir um estilo padrão para todos os cabeçalhos (h1, h2, h3, etc.) em uma página da web e depois alterar esse estilo em todo o site apenas atualizando o arquivo CSS, em vez de ter que alterar manualmente cada cabeçalho em cada página individual.

CSS também é usado em conjunto com outras tecnologias web, como JavaScript e frameworks de front-end, para criar sites e aplicativos mais interativos e dinâmicos.

Os comandos CSS utilizam de forma geral a seguinte estrutura: 

```css
seletor {
	propriedade: valor;
}
```

## Exemplos de Comandos em CSS:

**Seletor de elemento:** seleciona elementos HTML para aplicar estilos. Por exemplo:

```css
p {
	color: blue;
}
```

**Seletor de classe:** seleciona elementos HTML com uma classe específica para aplicar estilos. Por exemplo:

```css
.destaque {
	font-weight: bold;
}
```

**Seletor de ID:** seleciona um elemento HTML com um ID específico para aplicar estilos. Por exemplo:

```css
#cabecalho {
	background-color: yellow;
}
```

**Propriedade de cor:** define a cor do texto ou do fundo do elemento. Por exemplo:

```css
color: red; 
background-color: yellow;
```

**Propriedade de fonte:** define a fonte e o tamanho da fonte do texto do elemento. Por exemplo:

```css
font-family: Arial; 
font-size: 16px;
```

**Propriedade de largura e altura:** define a largura e altura de um elemento. Por exemplo:

```css
width: 200px; 
height: 100px;
```

**Propriedade de margem e preenchimento:** define a margem e preenchimento ao redor de um elemento. Por exemplo:

```css
margin: 10px; 
padding: 5px;
```

**Propriedade de borda:** define a largura, o estilo e cor da borda de um elemento. Por exemplo:

```css
border: 1px solid black;
```

**Propriedade de exibição:** define como um elemento deve ser exibido na página. Por exemplo:

```css
display: inline; 
display: block;
```

**Propriedade de posição:** define a posição de um elemento na página. Por exemplo:

```css
position: absolute; 
position: relative;
```

## Ferramentas para CSS

O site [markdown live preview](https://markdownlivepreview.com/) é uma boa ferramenta para testar e visualizar a saída gerada por determinado código escrito em Markdown.

O site [markdown guide](https://www.markdownguide.org/tools/) lista um conjunto de outros sites e ferramentas que suportam a linguagem Markdown. 
