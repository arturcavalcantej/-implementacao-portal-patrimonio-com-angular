# Portal Patrimônio
Implementação do Desafio do LCCV baseado no Backlog Desafio disponibilizado no Google Classroom, logo abaixo segue o que foi 
possivel ser realizado(e também o que não foi possivel) tanto no front-end e no back-end, tendo em vista que não foi possivel fazer a integração de ambos.

# Implementação do Front-End
Foi desenvolvido a parte de formulário contendo as três abas(geral,bens e observações), não foi implementado 'Listar', no qual disponibilizado em um dos layouts de tela, pois esse não consta descrito no backlog, acabei utilizando json-server e criando o arquivo db.json, fazendo um CRUD da listas de bens.
# Como executar
Instalar o json-server:
```
npm i json-server
```
Com o db.json criado, rodar esse comando:
```
json-server --watch db.json
```
Iniciar a aplicação:
```
ng serve
```
