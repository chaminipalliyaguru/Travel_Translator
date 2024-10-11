// const fs = require("fs");
// const sdk = require("microsoft-cognitiveservices-speech-sdk");

// // This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
// const speechTranslationConfig = sdk.SpeechTranslationConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
// speechTranslationConfig.speechRecognitionLanguage = "en-US";

// var language = "it";
// speechTranslationConfig.addTargetLanguage(language);

// function fromFile() {
//     let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("myIntroduction.wav"));
//     let translationRecognizer = new sdk.TranslationRecognizer(speechTranslationConfig, audioConfig);

//     translationRecognizer.recognizeOnceAsync(result => {
//         switch (result.reason) {
//             case sdk.ResultReason.TranslatedSpeech:
//                 console.log(`RECOGNIZED: Text=${result.text}`);
//                 console.log("Translated into [" + language + "]: " + result.translations.get(language));

//                 break;
//             case sdk.ResultReason.NoMatch:
//                 console.log("NOMATCH: Speech could not be recognized.");
//                 break;
//             case sdk.ResultReason.Canceled:
//                 const cancellation = sdk.CancellationDetails.fromResult(result);  
//                 console.log(`CANCELED: Reason=${cancellation.reason}`);

//                 if (cancellation.reason == sdk.CancellationReason.Error) {
//                     console.log(`CANCELED: ErrorCode=${cancellation.ErrorCode}`);
//                     console.log(`CANCELED: ErrorDetails=${cancellation.errorDetails}`);
//                     console.log("CANCELED: Did you set the speech resource key and region values?");
//                 }
//                 break;
//         }
//         translationRecognizer.close();
//     });
// }
// fromFile();


// const fs = require("fs");
// const sdk = require("microsoft-cognitiveservices-speech-sdk");

// // This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
// const speechTranslationConfig = sdk.SpeechTranslationConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
// speechTranslationConfig.speechRecognitionLanguage = "en-US";
// var language = "it";
// speechTranslationConfig.addTargetLanguage(language);

// function fromFile(req, res) {
//     let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("myIntroduction.wav"));
//     let translationRecognizer = new sdk.TranslationRecognizer(speechTranslationConfig, audioConfig);

//     translationRecognizer.recognizeOnceAsync(result => {
//         switch (result.reason) {
//             case sdk.ResultReason.TranslatedSpeech:
//                 console.log(`RECOGNIZED: Text=${result.text}`);
//                 console.log("Translated into [" + language + "]: " + result.translations.get(language));
//                 res.json({ recognizedText: result.text, translation: result.translations.get(language) });
//                 break;
//             case sdk.ResultReason.NoMatch:
//                 console.log("NOMATCH: Speech could not be recognized.");
//                 res.status(400).send("Speech could not be recognized.");
//                 break;
//             case sdk.ResultReason.Canceled:
//                 const cancellation = sdk.CancellationDetails.fromResult(result);
//                 console.log(`CANCELED: Reason=${cancellation.reason}`);
//                 if (cancellation.reason == sdk.CancellationReason.Error) {
//                     console.log(`CANCELED: ErrorCode=${cancellation.ErrorCode}`);
//                     console.log(`CANCELED: ErrorDetails=${cancellation.errorDetails}`);
//                     res.status(500).send("Error during speech recognition.");
//                 }
//                 break;
//         }
//         translationRecognizer.close();
//     });
// }

// module.exports = fromFile;  // Export the function properly




const multer = require("multer");
const fs = require("fs");
const sdk = require("microsoft-cognitiveservices-speech-sdk");

// Set up file upload handler with multer
const upload = multer({ dest: "uploads/" });

// Environment variables for Azure Speech API
const speechTranslationConfig = sdk.SpeechTranslationConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);

const fromFile = (req, res) => {
    const language = req.body.language || "it";
    const speechRecognitionLanguage = req.body.speechRecognitionLanguage || "en-US";
    const wavFilePath = req.file.path;

    // Configure speech recognition and translation
    speechTranslationConfig.speechRecognitionLanguage = speechRecognitionLanguage;
    speechTranslationConfig.addTargetLanguage(language);

    // Read the uploaded file and set up the recognizer
    let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync(wavFilePath));
    let translationRecognizer = new sdk.TranslationRecognizer(speechTranslationConfig, audioConfig);

    translationRecognizer.recognizeOnceAsync((result) => {
        switch (result.reason) {
            case sdk.ResultReason.TranslatedSpeech:
                res.json({
                    recognizedText: result.text,
                    translation: result.translations.get(language),
                });
                break;
            case sdk.ResultReason.NoMatch:
                res.status(400).send("Speech could not be recognized.");
                break;
            case sdk.ResultReason.Canceled:
                const cancellation = sdk.CancellationDetails.fromResult(result);
                res.status(500).send({
                    error: cancellation.reason,
                    errorCode: cancellation.ErrorCode,
                    errorDetails: cancellation.errorDetails,
                });
                break;
        }
        translationRecognizer.close();
        fs.unlinkSync(wavFilePath); // Clean up uploaded file
    });
};

// Export the function and multer's upload middleware
module.exports = { fromFile, upload };

