// Define variables for Google Form and the entry IDs
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfVPNIBjKCNNEKsx7rpVWI2klmXh3LklSF9eJC2a04tqF1Oaw/formResponse"; // Google Form URL
const entryWordId = "entry.788712709"; // Entry ID for original word
const entryTranslateWordId = "entry.675743314"; // Entry ID for translated word

// Create context menu when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "addToVocab",
        title: "Thêm vào từ vựng", // Add to vocabulary
        contexts: ["selection"]
    });
});

// Handle the click event on the context menu
chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "addToVocab" && info.selectionText) {
        saveWord(info.selectionText.trim()); // Save the selected word
    }
});

// Function to save the word into Chrome's local storage
function saveWord(word) {
    chrome.storage.local.get({ vocabulary: [] }, (data) => {
        const updatedVocab = [...data.vocabulary, word];
        chrome.storage.local.set({ vocabulary: updatedVocab }, () => {
            console.log(`Saved word: ${word}`);
        });
        sendToGoogleForm(word); // Send the word to Google Form
    });
}

// Function to translate the word to Vietnamese using Google Translate API
function translateWordToVietNam(word) {
    const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=${encodeURIComponent(word)}`;

    return fetch(translateUrl)
        .then((response) => response.json())
        .then((data) => {
            const translatedWord = data[0][0][0]; // Extract translated word from API response
            console.log(`Translated Word: ${translatedWord}`);
            return translatedWord;
        })
        .catch((error) => {
            console.error("Error translating word:", error);
            return null; // Return null if translation fails
        });
}

// Function to send the original word and translated word to Google Form
function sendToGoogleForm(word) {
    translateWordToVietNam(word)
        .then((translatedWord) => {
            if (translatedWord) {
                const formData = new FormData();
                formData.append(entryWordId, word); // Append original word to form data
                formData.append(entryTranslateWordId, translatedWord); // Append translated word to form data
                console.log("Form Data:", Array.from(formData.entries()));

                fetch(formUrl, {
                    method: "POST",
                    mode: "no-cors", // Send the form data in no-cors mode
                    body: formData,
                })
                    .then(() => {
                        console.log("Data sent successfully (no-cors mode)");
                    })
                    .catch((error) => console.error("Error sending data:", error));
            } else {
                console.error("Failed to get translation. Form submission skipped.");
            }
        });
}
