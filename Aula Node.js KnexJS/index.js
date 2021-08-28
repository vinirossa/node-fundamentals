var db = require("./config");
const knex = require("./config");


/*
knex.where({email: "jvlpark46@gmail.com"}).delete().table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/


/*
knex.where({email: "jvlpark46@gmail.com"}).update({role: 4, plan_id: 22}).table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/



/*
knex.where({email: "jvlpark46@gmail.com"}).orWhere({id: 7}).table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/


/*
knex.whereRaw("email = 'jvlpark46@gmail.com' OR id = 7").table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/


/*
knex.where({role: 2}).table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/*
var ddd = [
    {
        name: "Victor",
        email: "jvlpark46@gmail.com",
        image_url: "",
        password: "2323",
        role: "2",
        plan_id: "2"
    },
    {
        name: "Victor",
        email: "jvlpark45@gmail.com",
        image_url: "",
        password: "2323",
        role: "2",
        plan_id: "2"
    },
    {
        name: "Victor",
        email: "jvlpark44@gmail.com",
        image_url: "",
        password: "2323",
        role: "2",
        plan_id: "2"
    },
]

knex.insert(ddd).into('users').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/



/*
knex.select().table("users").then(dados => {
    console.log(dados);
}).catch(err => {
    console.log(err);
});
*/

/*
knex.raw("SELECT * from users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});*/

/*
knex.where({id: 7}).count().table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/*
knex.insert({user_id: 7, description: "Mamateiro da UFERSA"}).table("authors").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/*
var query = knex.table("users").where({'users.id': 7}).innerJoin("authors","users.id","authors.user_id").then(data => {
    console.log(data);
}).then(err => {
    console.log(err);
});*/


/*
knex('users')
  .join('contacts', 'users.id', '=', 'contacts.user_id')
  .select('users.id', 'contacts.phone')
  */

/*
var query = knex.table("users").where({'users.id': 7}).innerJoin("authors","users.id","authors.user_id").then(data => {
    console.log(data);
}).then(err => {
    console.log(err);
});*/

/*
var query = knex.table("users").innerJoin("authors","users.id","authors.user_id").then(data => {
    console.log(data);
}).then(err => {
    console.log(err);
});*/

var query = knex.where({"users.id":7}).table("users").innerJoin("authors","users.id","authors.user_id").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//console.log(query.toSQL());


