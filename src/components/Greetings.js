function Greetings ({lang, children}){
    const language = {
        "de": "Hallo",
        "en": "Hello",
        "es": "Hola",
        "fr": "Bonjour"
    }

    return (

    <div className="greeting">
        <h3 className="language">{language[lang]} {children}</h3>
    </div>
    )
}

export default Greetings