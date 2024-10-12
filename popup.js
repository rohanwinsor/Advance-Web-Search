document.getElementById('searchBtn').addEventListener('click', function() {
    const regex = document.getElementById('regexInput').value;
    if (regex) {
        browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {regex: regex});
        });
    }
});
