const Database = require('./db');
const saveNursingHome = require('./saveNursingHome');

Database.then(async db => {
    //--INSERT DATA ON THE TABLE
    //PAY ATTENTION -> .toString() change type array in string, separation by , (commas)
   await saveNursingHome(db, {        
        lat: "-23.6542021",
        lng: "-46.7111556",
        name: "Lar das vovós",
        about: "Presta assistência a pessoas acima de 60 anos sem recursos pessoais e sem estrutura familiar de sustentação que permita sua manutenção",
        whatsapp:"4158724678",
        images: [
            "https://images.unsplash.com/photo-1494438043283-22a3c46831a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1525336778665-96f9a12c5c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ].toString(),
        instructions: "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 08h até 18h",
        open_on_weekends: "0"
    
    })

    //--SELECT ALL DATA ON THE TABLE
   //const selectedNursingHomes = await db.all(`SELECT * FROM nursinghomes`)
   //console.log(selectedNursingHomes)

   //--SELECT DATA ON THE TABLE BY ID (PAY ATTENTION -> WHERE)
   //const selectedNursingHome = await db.all(`SELECT * FROM nursinghomes WHERE id="1"`)
   //console.log(selectedNursingHome)

    //--DELETE DATA ON THE TABLE BY ID (PAY ATTENTION -> WHERE)
    //console.log(await db.run('DELETE FROM nursinghomes WHERE id="4"'))
    //console.log(await db.run('DELETE FROM nursinghomes WHERE id="5"'))

    //--DELETE ALL DATA ON THE TABLE
    //console.log(await db.run('DELETE FROM nursinghomes'))
})