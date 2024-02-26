async function translate_text(text) {
    const translate = await import("translate");
    translate.engine = "deepl"; 
    const translatedText = await translate.default(text, "fr");
    return translatedText;
}

module.exports = translate_text;
