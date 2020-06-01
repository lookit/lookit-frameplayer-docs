YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Exp-frame-base",
        "Exp-frame-select",
        "Exp-lookit-calibration",
        "Exp-lookit-change-detection",
        "Exp-lookit-composite-video-trial",
        "Exp-lookit-dialogue-page",
        "Exp-lookit-exit-survey",
        "Exp-lookit-geometry-alternation",
        "Exp-lookit-geometry-alternation-open",
        "Exp-lookit-images-audio",
        "Exp-lookit-instructions",
        "Exp-lookit-mood-questionnaire",
        "Exp-lookit-observation",
        "Exp-lookit-preferential-looking",
        "Exp-lookit-stimuli-preview",
        "Exp-lookit-story-page",
        "Exp-lookit-survey",
        "Exp-lookit-text",
        "Exp-lookit-video",
        "Exp-lookit-video-assent",
        "Exp-lookit-video-consent",
        "Exp-lookit-webcam-display",
        "Exp-video-config",
        "Exp-video-config-quality",
        "Expand-assets",
        "Full-screen",
        "Media-reload",
        "Permute",
        "Random-parameter-set",
        "Select",
        "Session-record",
        "Video-record",
        "video-recorder"
    ],
    "modules": [
        "exp-player",
        "frames",
        "mixins",
        "randomizers"
    ],
    "allModules": [
        {
            "displayName": "exp-player",
            "name": "exp-player",
            "description": "Reusable parts of experiments. Includes frame definitions, randomizers, and utilities."
        },
        {
            "displayName": "frames",
            "name": "frames",
            "description": "Reusable frames that can be used as part of Lookit studies. This is the main reference\n  for researchers writing their own study protocols on Lookit."
        },
        {
            "displayName": "mixins",
            "name": "mixins",
            "description": "Reference for DEVELOPERS of new frames only (not Lookit researchers writing their\nstudy protocols on the site)!\n\nMixins that can be used to add specific functionality to frames"
        },
        {
            "displayName": "randomizers",
            "name": "randomizers",
            "description": "Reusable randomizers that can be used as part of user-defined experiments.\nRandomizers allow researchers to specify how to select which frames or\nsequences of frames to use as part of a particular session of a given\nexperiment, for instance in order to counterbalance stimuli used across\nsubjects, assign subjects randomly to different experimental conditions, or\nimplement a longitudinal design where the frames used in this study depend on\nthe frames used in the participant's last session."
        }
    ],
    "elements": []
} };
});