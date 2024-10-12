function highlightMatches(regex) {
    const bodyText = document.body.innerText;
    let matches = [];
    try {
        const regexPattern = new RegExp(regex, 'g');
        matches = bodyText.match(regexPattern);
    } catch (e) {
        console.error("Invalid regex:", e);
    }

    if (matches) {
        matches.forEach(match => {
            document.body.innerHTML = document.body.innerHTML.replace(new RegExp(match, 'g'), `<mark>${match}</mark>`);
        });
    }
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.regex) {
        highlightMatches(request.regex);
    }
});
