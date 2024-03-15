const functions = require('firebase-functions');

exports.myCustomFunction =
  functions.remoteConfig.onUpdate(async (versionMetadata) => {
    console.log("The project's Remote Config template was updated to " +
                "version number : ", versionMetadata.versionNumber);
    // Use the versionMetadata object further...
  }
