const Database = require('./database/db');
const saveNursingHome = require('./database/saveNursingHome');

module.exports = {
    index(req,res) {
        return res.render('index')
    },

    async nursinghome(req,res) {
        const id = req.query.id;

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM nursinghomes WHERE id = "${id}"`)
            const nursinghome = results[0]

            //change type string in array, separation/cutting in the , (commas)
            nursinghome.images = nursinghome.images.split(",")
            nursinghome.firstImage = nursinghome.images[0]
            
            nursinghome.open_on_weekends= nursinghome.open_on_weekends == "1" ? true : false

            return res.render('nursinghome', { nursinghome })            
        } catch (error) {
            console.log(error)
            return  res.render('./error-database')            
        }
        
    },

    async nursinghomes(req,res) {        
        try {
            const db = await Database;
            const nursinghomes = await db.all(`SELECT * FROM nursinghomes`)

            return res.render('nursinghomes', { nursinghomes })            
        } catch (error) {
            console.log(error)
            return  res.render('./error-database')
        }
        
    },

    createNursingHome(req,res) {
        return res.render('create-nursinghome')
    },
    
    async saveNursingHome(req,res) {
        const fields = req.body

        //VALIDATE THAT ALL FIELDS ARE FILLED
        if(Object.values(fields).includes('')) {
            return res.send("Todos os campos devem ser preenchidos")
        }

        //SAVE A NURSING HOME
        try {
            const db = await Database;

            await saveNursingHome(db,{
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatsapp: fields.whatsapp,
            images: fields.images.toString(),
            instructions: fields.instructions,
            opening_hours: fields.opening_hours,
            open_on_weekends: fields.open_on_weekends,
        })

        //redirect to query page
        return res.redirect('./nursinghomes')
            
        } catch (error) {
            console.log(error)
            return  res.render('./error-database')
        }
        
    },

    notFound(req,res) {
        return res.status(404).render('not-found')
    }
}