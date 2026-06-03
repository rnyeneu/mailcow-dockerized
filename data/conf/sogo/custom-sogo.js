// redirect to TD Property login form
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.forms.namedItem("loginForm");
    if (loginForm) {
        window.location.href = '/user';
    }
});
// logout function
function mc_logout() {
    fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "logout=1"
    }).then(() => window.location.href = '/');
}

// Custom SOGo JS

// Change the visible font-size in the editor, this does not change the font of a html message by default
CKEDITOR.addCss("body {font-size: 16px !important}");

// Enable scayt by default
//CKEDITOR.config.scayt_autoStartup = true;

function tdReplaceMailcowLabels(root) {
    var scope = root || document;
    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
    var node;

    while ((node = walker.nextNode())) {
        if (node.nodeValue && /mailcow/i.test(node.nodeValue)) {
            node.nodeValue = node.nodeValue.replace(/mailcow/ig, 'TD Property Mail');
        }
    }

    scope.querySelectorAll('[title], [aria-label]').forEach(function (element) {
        ['title', 'aria-label'].forEach(function (attribute) {
            var value = element.getAttribute(attribute);
            if (value && /mailcow/i.test(value)) {
                element.setAttribute(attribute, value.replace(/mailcow/ig, 'TD Property Mail'));
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    tdReplaceMailcowLabels(document.body);

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    tdReplaceMailcowLabels(node);
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
