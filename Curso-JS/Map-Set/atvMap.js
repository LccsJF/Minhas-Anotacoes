function getAdmins(map) {
    let admins = [];
    //no for posso iterar pela chave e valor do meu array dentro de map;
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
};

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Cláudio', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));
/*retorna apenas usuários com valor 'Admin';
sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Map-Set (main)
$ node atvMap.js
[ 'Luiz', 'Cláudio', 'Natália' ]*/

