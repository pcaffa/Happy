function saveNursingHome(db, nursinghome){
    return db.run(`
    INSERT INTO nursinghomes (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "${nursinghome.lat}",
        "${nursinghome.lng}",
        "${nursinghome.name}",
        "${nursinghome.about}",
        "${nursinghome.whatsapp}",
        "${nursinghome.images}",
        "${nursinghome.instructions}",            
        "${nursinghome.opening_hours}",
        "${nursinghome.open_on_weekends}"
    );
`)
}

module.exports = saveNursingHome