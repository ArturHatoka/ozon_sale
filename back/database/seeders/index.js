const bcrypt = require('bcrypt');
const { Users } = require('../schema/index');

//
console.log('START SEEDERS');

bcrypt.hash('testertester', 3, (err, hash) =>
{
    Users.create({
        name:"tester",
        password: hash,
    }).then(user =>
    {
        AuthToken.create({
            UserId: user.id,
            token: 'CypDboBbQHo3jcT'
        }).catch(err=>console.log(err));

    }).catch(err=>console.log(err));
});


console.log('END SEEDERS');
