report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Osuny_test___0_document_0_phone.png",
        "test": "../bitmaps_test/20251124-120749/backstop_default_Osuny_test___0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Osuny_test___0_document_0_phone.png",
        "label": "Osuny test : ",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.2,
        "url": "http://localhost:7777",
        "referenceUrl": "https://www.iut.u-bordeaux-montaigne.fr",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -34
          },
          "rawMisMatchPercentage": 14.907646231241472,
          "misMatchPercentage": "14.91",
          "analysisTime": 45
        },
        "diffImage": "../bitmaps_test/20251124-120749/failed_diff_backstop_default_Osuny_test___0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Osuny_test___0_document_1_tablet.png",
        "test": "../bitmaps_test/20251124-120749/backstop_default_Osuny_test___0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Osuny_test___0_document_1_tablet.png",
        "label": "Osuny test : ",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.2,
        "url": "http://localhost:7777",
        "referenceUrl": "https://www.iut.u-bordeaux-montaigne.fr",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -63
          },
          "rawMisMatchPercentage": 12.749694573045268,
          "misMatchPercentage": "12.75",
          "analysisTime": 136
        },
        "diffImage": "../bitmaps_test/20251124-120749/failed_diff_backstop_default_Osuny_test___0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});