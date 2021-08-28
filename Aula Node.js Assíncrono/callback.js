console.log("Abertura do site");

function enviarEmail (corpo, para, callback) {
  console.log("1");
  setTimeout(() => {
    console.log(`
      Para: ${para}
      -----------------------------------
      ${corpo}
      -----------------------------------
      De: Vinícius Pereira
    `)
    // callback()
    console.log("2");
  },7000)
}

console.log("Iniciando envio");
enviarEmail("Olá, seja bem-vindo ao site!","alessandrapsb@gmail.com", () => {console.log("sou um callback");})
console.log("Encerrando envio");