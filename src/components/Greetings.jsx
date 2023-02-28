function Greetings({ lang, children }) {
    let greeting
    if (lang === "de") greeting = <p>Hallo {children}</p>
    else if (lang === "en") greeting = <p>Hi {children}</p>
    else if (lang === "es") greeting = <p>Hola {children}</p>
    else if (lang === "fr") greeting = <p>Bonjour {children}</p>

    return (
        <div className="border w-50 mx-auto">
            {greeting}
        </div>

    )
}

export default Greetings