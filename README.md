
# Chrome Extension: Vocabulary Saver and Translator

This Chrome Extension allows users to quickly save selected words or sentences to their vocabulary list and automatically translate them into Vietnamese using Google Translate. The extension also submits the original and translated words to a Google Form for easy vocabulary tracking.

## Features

- **Right-click to Add to Vocabulary**: Select any text on a webpage, right-click, and choose "Add to Vocabulary" to save the word to your vocabulary list.
- **Automatic Translation**: The extension automatically translates the selected word or sentence to Vietnamese using Google Translate API.
- **Submit to Google Form**: Both the original and translated words are submitted to a Google Form for tracking.
- **Local Storage**: The extension saves your vocabulary locally in the browser, allowing you to view saved words even after the browser is closed.

## Installation

### 1. Clone the Repository

Clone this repository to your local machine.

```bash
https://github.com/haons211/vocab-save-extension.git
```

### 2. Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** by toggling the switch in the top right.
3. Click on **Load unpacked**.
4. Select the folder where you have cloned the repository.

The extension will now be installed and active in your browser.

## Usage

### 1. Add a Word to Vocabulary

- Highlight any text on a webpage.
- Right-click and choose **"Add to Vocabulary"** from the context menu.

The selected word will be saved to your browser's local storage and will also be automatically translated into Vietnamese.

### 2. View Translations

Once the word is translated, both the original and the translated word will be sent to your **Google Form**. You can track your vocabulary list in the form.

## Google Form Configuration

To use this extension, you must have a Google Form set up with the following fields:

- **Field for Original Word** (Entry ID: `entry.788712709`)
- **Field for Translated Word** (Entry ID: `entry.675743314`)

Make sure to replace these entry IDs in the `formUrl` of the code if your Google Form fields have different IDs.

## Code Structure

The extension consists of the following main parts:

- **contextMenus API**: To create the context menu for adding words to the vocabulary list.
- **chrome.storage.local**: To store the vocabulary list in local storage.
- **Google Translate API**: To translate words to Vietnamese.
- **Google Form Submission**: To send both the original and translated words to the Google Form.

## Contributing

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to [Google Translate API](https://translate.google.com/) for providing translation services.
- Thanks to [Google Forms](https://www.google.com/forms/about/) for allowing easy form submission.