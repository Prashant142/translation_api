async function translate_text(text, lang) {
    const translate = await import("translate");
    translate.engine = "deepl"; 
    const translatedText = await translate.default(text, lang);
    return translatedText;
}

module.exports = translate_text;
