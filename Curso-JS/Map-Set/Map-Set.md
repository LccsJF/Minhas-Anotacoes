# Map

- uma coleção de **arrays** no formato: **chaves {} e valor**; pode ser iterado por um loop **for...of**; é declarado da seguinte maneira: 

  ```javascript
  new map()
  ```

![map1](img/map1.jpg)

---



## Métodos

- Adicionar, ler e deletar elementos;
- Adicionar - **set**; configuro que minha **chave *('apple')*** e **valor *('fruit')***;
- Ler - **get**; coloco a *chave* entre aspas *('apple')*,
- Deletar - **delete**; coloco a *chave* entre aspas *('apple')*; após deletado, se tentar ler usando **get**, retorna o valor "*undefined*", pois não existe mais;

![metodo1](img/metodo1.jpg)

---



## Map vs Objeto

![map2](img/map2.jpg)

---



# Set

- São estruturas que armazenam **valores únicos**;

- Enquanto num array posso ter valores repetidos, num **set** somente valores únicos; **nunca se repetem**;

  A forma de declarar um set:

  ```javascript
  new Set();
  ```

  ![set1](img/set1.jpg)

---



## Métodos

- Adicionar, consultar e deletar;
- Adicionar - **.add** - coloco os argumentos entre ();
- Consultar - **.has** - vejo os elementos de um **set** existente e retorna **true**, caso contrário, retorna **false**;
- Deletar - **.delete** - deleto um elemento específico;

![set2](img/set2.jpg)

---



## Set vs Array

- A diferença:

  **set** - tem um número limitado de operações; 

  **array** - tem um número muito maior e mais flexível de operações;

![set3](img/set3.jpg)

---













