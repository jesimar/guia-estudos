# Guia da Ferramenta Git

**OBS:** Parte desta documentação foi gerada usando a ferramenta de IA ChatGPT com diversas adaptações na escrita. 

Git é um sistema de controle de versão de código aberto e distribuído. Ele permite que você mantenha o histórico de todas as alterações em seu projeto de software, facilita a colaboração com outras pessoas e ajuda a gerenciar e solucionar conflitos quando múltiplas pessoas estão trabalhando no mesmo projeto.

O Git foi criado por Linus Torvalds, o mesmo criador do sistema operacional Linux, e é amplamente utilizado por desenvolvedores de software em todo o mundo. É compatível com uma ampla variedade de projetos, desde projetos pequenos com poucas pessoas até grandes projetos de software com equipes distribuídas em todo o mundo.

## Exemplos de Comandos do Git:

1. **git init**: Inicializa um novo repositório Git em um diretório existente. 

Exemplo: 

```
$ mkdir my-project
$ cd my-project
$ git init
```

2. **git clone**: Clona um repositório existente em seu computador.

Exemplo: 

```
$ git clone https://github.com/user/repo.git
```

3. **git add**: Adiciona arquivos à área de stage (área de preparação para o próximo commit).

Exemplo: 

```
$ git add file1.txt file2.txt
```

4. **git commit**: Confirma as alterações no histórico do repositório.

Exemplo: 

```
$ git commit -m "Adicionando arquivos file1.txt e file2.txt"
```

5. **git status**: Exibe o estado atual do repositório, incluindo quais arquivos foram modificados e não foram adicionados ao stage.

Exemplo: 

```
$ git status
```

6. **git diff**: Mostra as diferenças entre as versões atual e anterior de um arquivo.

Exemplo: 

```
$ git diff file1.txt
```

7. **git log**: Mostra o histórico de commits no repositório.

Exemplo: 

```
$ git log
```

8. **git branch**: Gerencia ramificações (branches) em um repositório Git.

Exemplo: 

```
$ git branch new-feature
```

9. **git checkout**: Alterna entre diferentes ramificações ou recupera versões antigas de arquivos.

Exemplo: 

```
$ git checkout new-feature
```

10. **git merge**: Mescla duas ou mais ramificações em um único repositório.

Exemplo: 

```
$ git merge new-feature
```

11. **git pull**: Atualiza o repositório local com as últimas alterações do repositório remoto.

Exemplo: 

```
$ git pull origin master
```

12. **git push**: Envia as alterações do repositório local para o repositório remoto.

Exemplo: 

```
$ git push origin master
```
