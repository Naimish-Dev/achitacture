artx.ui = {};
artx.formats = ["albedo", "hatch", "bump", "displacement", "normal", "sphere", "cube", "cylinder", "scene"];
artx.materials = {};
artx.profiles = {};
artx.surfaces = {};
artx.generalParams = ["rows", "columns", "tileWidth", "tileHeight", "patternId", "patternAngle", "patternName", "jointWidthHorizontal", "jointId", "jointWidthVertical", "jointTint", "patternRotateAngle", "sceneTextures", "scene"];
artx.tileParams = ["materialId", "brightness", "contrast", "hue", "tint", "saturation", "invert", "edges", "edge", "surfaces", "surface", "gradients", "profile", "finish"];
artx.dimensionParams = ["tileWidth", "tileHeight", "tileWidthMin", "tileHeightMin", "jointWidthHorizontal", "jointWidthVertical"];
artx.drawResolve;
artx.drawReject;
artx.paths = {
  fine: {
    cornerOffset: 0,
    points: [[0, 0], [1e4, 0]]
  },
  handmade: {
    cornerOffset: 3,
    points: [[0, 1], [10, 1], [20, 2], [30, 2], [40, 3], [50, 3], [60, 3], [70, 2], [80, 2], [90, 1], [100, 1], [110, 1], [120, 0], [130, 1], [140, 3], [150, 2], [160, 2], [170, 1], [180, 1], [190, 1], [200, 2], [210, 0], [220, 1], [230, 1], [240, 3], [250, 3], [260, 2], [270, 3], [280, 1], [290, 1]]
  },
  uneven: {
    cornerOffset: 5,
    points: [[-0, 4.5], [22.2, 3.3], [54.3, 2.4], [98.1, 2.1], [120, 1.8], [147.3, 1.5], [251.4, 0.9], [269.1, 1.2], [284.1, 0.9], [305.4, 1.2], [347.4, 0.3], [394.2, 0.9], [416.1, 1.2], [424.2, 1.8], [438.9, 1.5], [451.2, 1.2], [471.6, 0.9], [504.9, 0.9], [546, 1.5], [564.3, 1.8], [579.6, 1.2], [591, 1.2], [601.8, 1.2], [633.6, 2.1], [680.1, 1.5], [725.4, 1.2], [776.4, 1.2], [826.8, 0.3], [879.9, 0.3], [930.3, 0.9], [978.3, 1.5], [997.5, 1.2], [1004.7, 1.5], [1009.5, 0.6], [1017.6, 1.2], [1025.7, 0.6], [1055.4, 1.5], [1065, 0.6], [1073.7, 0.6], [1083.9, 0.9], [1096.5, 0.9], [1116.6, 1.8], [1130.7, 1.8], [1140.3, 1.5], [1150.2, 1.2], [1203.6, 1.8], [1251, 3], [1272, 3.6], [1317, 2.7], [1339.5, 3.3], [1404.6, 4.8], [1472.7, 4.8], [1508.1, 4.5], [1550.7, 3.9], [1592.4, 4.8], [1640.4, 4.5], [1667.1, 6], [1680.6, 4.8], [1686.9, 5.1], [1692.3, 6], [1698.3, 5.4], [1708.5, 6.6], [1755.6, 5.7], [1785.3, 7.2], [1807.5, 5.4], [1836, 5.4], [1848, 6.6], [1860.9, 6.9], [1875.6, 6], [1891.5, 4.8], [1905.9, 4.5], [1919.1, 6.9], [1925.7, 6.9], [1942.8, 6.3], [1970.4, 5.1], [1995.6, 5.1], [2017.8, 3], [2046.9, 2.7], [2075.1, 3.6], [2126.4, 5.4], [2150.7, 3.6], [2161.5, 1.2], [2167.2, 0], [2173.5, 0], [2184.6, 1.2], [2195.1, 1.2], [2237.7, 1.2], [2285.4, 1.8], [2300.7, 1.5], [2319.9, 0.6], [2333.7, 1.5], [2351.1, 1.2], [2378.1, 2], [2478, 3]]
  },
  rough: {
    cornerOffset: 3,
    points: [[0, 0.04], [1.85, 0.44], [5.41, 2.22], [8.97, 1.33], [12.52, 1.33], [16.08, 3.11], [18.74, 3.99], [22.3, 3.11], [24.96, 1.33], [27.63, 2.22], [31.19, 2.22], [33.85, 1.33], [37.41, 1.33], [40.96, 0.15], [42.74, 2.22], [44.52, 3.99], [47.19, 4.88], [51.63, 4.88], [53.41, 2.22], [57.85, 1.33], [63.19, 1.33], [65.85, 3.11], [68.52, 1.33], [71.19, 3.11], [75.63, 3.11], [78.3, 1.13], [81.85, 2.02], [86.3, 1.13], [89.85, 0.24], [92.52, 2.91], [96.96, 2.91], [99.63, 1.13], [104.08, 2.02], [106.74, 1.13], [110.3, 1.13], [113.85, 2.02], [118.3, 0.24], [121.85, 0.24], [123.8, 1.64], [124.38, 1.09], [127.04, 1.09], [130.6, 1.98], [132.38, 0.2], [135.04, 1.98], [138.6, 2.87], [139.49, 1.09], [141.26, 2.87], [143.04, 1.09], [146.6, 1.09], [148.38, 1.98], [150.15, 1.09], [151.93, 1.09], [154.6, 2.87], [157.26, 2.87], [159.04, 1.98], [161.71, 0.2], [165.26, 0.2], [168.82, 1.98], [172.38, 2.87], [175.04, 2.87], [177.71, 1.98], [179.49, 0.2], [182.15, 0.2], [184.82, 1.98], [190.15, 1.98], [193.71, 0.2], [196.38, 1.98], [199.04, 2.87], [200.82, 1.98], [202.6, 1.09], [204.38, 1.09], [206.15, 2.87], [208.82, 1.09], [210.6, 0.2], [213.26, 1.98], [215.04, 1.98], [216.82, 1.09], [217.71, 0.11], [220.38, 0.11], [224.82, 1.98], [226.6, 2.87], [230.15, 2.87], [231.93, 1.09], [233.71, 0.2], [237.26, 0.2], [239.04, 1.98], [241.71, 2.67], [245.26, 1.78], [247.04, 0.89], [248.4, 2.04], [249.27, 1.02], [251.89, 0], [254.65, 1.63], [258.24, 2.34], [260.06, 3.14], [261.89, 3.93], [266.32, 3.7], [267.17, 2.77], [270.67, 1.7], [274.18, 0.43], [279.5, 0.15], [281.37, 1.84], [284.03, 1.7], [288.42, 0.59], [292.86, 0.36], [294.2, 1.24], [295.6, 1.64], [297.31, 0.14], [299.8, 2.04], [302.64, 2.72], [304.8, 1.64], [307, 1.24], [308.87, 0.05], [313.31, 2.72], [317.75, 1.83], [322.2, 2.72], [323.98, 0.05], [327.53, 1.83], [331.98, 0.94], [333.75, 2.72], [337.31, 1.83], [338.2, 0.05]]
  }
};
artx.heightmaps = {};
artx.finishHeightmaps = artx.appdata && artx.appdata.finishes ? artx.appdata.finishes : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 41, 42, 43, 44, 45, 46, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68];
artx.profilePaths = artx.appdata && artx.appdata.profiles ? artx.appdata.profiles : [20, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
artx.viewTabs = artx.appdata.views ? artx.appdata.views : ["texture", "bump", "hatch", "displacement", "normal", "roughness", "3d", "metalness", "scene"];
artx.editorLoaded = false;
artx.autoDraw = !(get("autodraw") && get("autodraw") === "false");
artx.perf = {
  edgeClip: 0,
  edgeProfile: 0,
  imageFills: 0,
  diffuseMap: 0,
  tints: 0,
  filters: 0,
  shadows: 0
};
artx.edges = {
  fine: {
    name: "Fine",
    active: 1
  },
  handmade: {
    name: "Handmade",
    active: 1,
    allowWidth: false,
    allowScale: true,
    lines: {
      outer: {
        path: "handmade",
        scaleX: 1,
        scaleY: 1
      }
    }
  },
  roughBrick: {
    name: "Rough brick",
    active: 1,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.15,
    lengthBehaviour: "fitWidth",
    imageData: [{
      clip_url: artx.cdn + "/test/brick-edge-1.png"
    }, {
      clip_url: artx.cdn + "/test/brick-edge-6.png"
    }, {
      clip_url: artx.cdn + "/test/brick-edge-7.png"
    }, {
      clip_url: artx.cdn + "/test/brick-edge-8.png"
    }, {
      clip_url: artx.cdn + "/test/brick-edge-9.png"
    }]
  },
  longBrick: {
    name: "Long brick",
    active: 1,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.4,
    lengthBehaviour: "fitWidth",
    imageData: [{
      clip_url: artx.cdn + "/test/hand-brick-1.png"
    }, {
      clip_url: artx.cdn + "/test/hand-brick-2.png"
    }, {
      clip_url: artx.cdn + "/test/hand-brick-3.png"
    }]
  },
  rough: {
    name: "Rough",
    active: 1,
    allowWidth: false,
    allowScale: true,
    lines: {
      outer: {
        path: "rough",
        scaleX: 1,
        scaleY: 1
      }
    }
  },
  uneven: {
    name: "Uneven",
    active: 1,
    allowWidth: false,
    allowScale: true,
    lines: {
      outer: {
        path: "uneven",
        scaleX: 1,
        scaleY: 1
      }
    }
  },
  tumbled: {
    name: "Tumbled",
    displacement: {
      gradient: filletGradient(0, 1, 0, 1)
    }
  },
  chamfer: {
    name: "Chamfer",
    active: 1,
    displacement: {
      gradient: [{
        stop: 0,
        color: 0
      }, {
        stop: 1,
        color: 1
      }]
    }
  },
  fillet: {
    name: "Fillet",
    active: 1,
    displacement: {
      gradient: filletGradient(0, 1, 0, 1)
    }
  },
  cove: {
    name: "Cove",
    active: 1,
    displacement: {
      gradient: filletGradient(0, 1, 0, 1, true)
    }
  },
  standingSeam: {
    name: "Standing Seam",
    active: 1,
    direction: "both",
    displacement: {
      gradient: [{
        stop: 0,
        color: 0.75
      }, {
        stop: 0.2,
        color: 1
      }, {
        stop: 0.8,
        color: 1
      }, {
        stop: 1,
        color: 0.75
      }],
      inset: 0
    }
  },
  ogee: {
    name: "Ogee",
    active: 1,
    displacement: {
      gradient: filletGradient(0, 0.5, 0, 0.5).concat(filletGradient(0.5, 1, 0.5, 1, true))
    }
  },
  waterfall: {
    name: "Waterfall",
    active: 1,
    displacement: {
      gradient: filletGradient(0, 0.333, 0, 0.333).concat(filletGradient(0.333, 0.667, 0.333, 0.667).concat(filletGradient(0.667, 1, 0.667, 1)))
    }
  },
  doubleBullnose: {
    name: "Double Bullnose",
    active: 1,
    displacement: {
      gradient: filletGradient(0, 0.5, 0, 0.5).concat(filletGradient(0.5, 1, 0.5, 1))
    }
  },
  wirecut: {
    name: "Wirecut",
    active: 1,
    allowOffset: false,
    allowWidth: false,
    allowScale: true,
    width: 3,
    scale: 1,
    lines: {
      outer: {
        path: "handmade",
        scaleX: 0.5,
        scaleY: 0.5
      },
      inner: {
        path: "rough",
        scaleX: 0.5,
        scaleY: 0.5
      }
    },
    displacement: {
      gradient: [{
        stop: 0,
        color: 0
      }, {
        stop: 1,
        color: 1
      }]
    }
  },
  recessed: {
    name: "Recessed",
    active: 1,
    displacement: {
      fill: 0
    }
  },
  protruding: {
    name: "Protruding",
    active: 1,
    displacement: {
      fill: 1,
      inset: 0
    }
  },
  splitFace: {
    name: "Split Face (Test)",
    active: 0,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.15,
    lengthBehaviour: "proportional",
    imageData: [{
      clip_url: artx.cdn + "/test/split_face_clip2.png",
      displacement_url: artx.cdn + "/split_face_disp2/split_top_disp.png"
    }]
  },
  splitTop: {
    name: "Split Top (Test)",
    active: 0,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.15,
    lengthBehaviour: "proportional",
    imageData: [{
      clip_url: artx.cdn + "/test/split_top_clip.png",
      displacement_url: artx.cdn + "/test/split_top_disp.png"
    }]
  },
  sawnTopsSplitSidesTumbled: {
    name: "Sawn Tops Split Sides Tumbled",
    active: 0,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.15,
    lengthBehaviour: "proportional",
    imageData: [{
      clip_url: artx.cdn + "/test/m601_tumbled_side1_clip.png",
      displacement_url: artx.cdn + "/test/m601_tumbled_side1_disp.png"
    }, {
      clip_url: artx.cdn + "/test/m601_tumbled_side2_clip.png",
      displacement_url: artx.cdn + "/test/m601_tumbled_side2_disp.png"
    }, {
      clip_url: artx.cdn + "/test/m601_tumbled_side3_clip.png",
      displacement_url: artx.cdn + "/test/m601_tumbled_side3_disp.png"
    }, {
      clip_url: artx.cdn + "/test/m601_tumbled_side4_clip.png",
      displacement_url: artx.cdn + "/test/m601_tumbled_side4_disp.png"
    }]
  },
  splitTopsSplitSides: {
    name: "Split Tops Split Sides",
    active: 0,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.15,
    lengthBehaviour: "proportional",
    imageData: [{
      clip_url: artx.cdn + "/test/m601_side1_clip.png",
      displacement_url: artx.cdn + "/test/m601_side1_disp.png"
    }, {
      clip_url: artx.cdn + "/test/m601_side2_clip.png",
      displacement_url: artx.cdn + "/test/m601_side2_disp.png"
    }, {
      clip_url: artx.cdn + "/test/m601_side3_clip.png",
      displacement_url: artx.cdn + "/test/m601_side3_disp.png"
    }, {
      clip_url: artx.cdn + "/test/m601_side4_clip.png",
      displacement_url: artx.cdn + "/test/m601_side4_disp.png"
    }]
  },
  SplitTopSplitSideAntiqued: {
    name: "Split Top Split Side Antiqued",
    active: 0,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.15,
    lengthBehaviour: "proportional",
    imageData: [{
      clip_url: artx.cdn + "/test/P261_side1_clip.png",
      displacement_url: artx.cdn + "/test/P261_side1_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/P261_side2_clip.png",
      displacement_url: artx.cdn + "/test/P261_side2_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/P261_side3_clip.png",
      displacement_url: artx.cdn + "/test/P261_side3_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/P261_side4_clip.png",
      displacement_url: artx.cdn + "/test/P261_side4_disp_b.png"
    }]
  },
  graniteReclaimedLiveEdge: {
    name: "Granite Reclaimed Live Edge",
    active: 0,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.15,
    lengthBehaviour: "proportional",
    imageData: [{
      clip_url: artx.cdn + "/test/p328_side1_clip.png",
      displacement_url: artx.cdn + "/test/p328_side1_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/p328_side2_clip.png",
      displacement_url: artx.cdn + "/test/p328_side2_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/p328_side3_clip.png",
      displacement_url: artx.cdn + "/test/p328_side3_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/p328_side4_clip.png",
      displacement_url: artx.cdn + "/test/p328_side4_disp_b.png"
    }]
  },
  splitFaceApprox: {
    name: "Split Face Approx",
    active: 0,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.15,
    lengthBehaviour: "proportional",
    imageData: [{
      clip_url: artx.cdn + "/test/p829_side1_clip.png",
      displacement_url: artx.cdn + "/test/p829_side1_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/p829_side2_clip.png",
      displacement_url: artx.cdn + "/test/p829_side2_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/p829_side3_clip.png",
      displacement_url: artx.cdn + "/test/p829_side3_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/p829_side4_clip.png",
      displacement_url: artx.cdn + "/test/p829_side4_disp_b.png"
    }]
  },
  rockfaceTopSawnSide: {
    name: "Rockface Top Sawn Side",
    active: 0,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.15,
    lengthBehaviour: "proportional",
    imageData: [{
      clip_url: artx.cdn + "/test/P834_side1_clip.png",
      displacement_url: artx.cdn + "/test/P834_side1_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/P834_side2_clip.png",
      displacement_url: artx.cdn + "/test/P834_side2_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/P834_side3_clip.png",
      displacement_url: artx.cdn + "/test/P834_side3_disp_b.png"
    }, {
      clip_url: artx.cdn + "/test/P834_side4_clip.png",
      displacement_url: artx.cdn + "/test/P834_side4_disp_b.png"
    }]
  },
  sawnSidesSplitTumbledTop: {
    name: "Sawn Sides Split Tumbled Top",
    active: 0,
    allowWidth: false,
    allowScale: true,
    defaultScale: 0.15,
    lengthBehaviour: "proportional",
    imageData: [{
      clip_url: artx.cdn + "/test/p842_side1_clip.png",
      displacement_url: artx.cdn + "/test/p842_side1_disp.png"
    }, {
      clip_url: artx.cdn + "/test/p842_side1_clip.png",
      displacement_url: artx.cdn + "/test/p842_side1_disp.png"
    }, {
      clip_url: artx.cdn + "/test/p842_side1_clip.png",
      displacement_url: artx.cdn + "/test/p842_side1_disp.png"
    }, {
      clip_url: artx.cdn + "/test/p842_side1_clip.png",
      displacement_url: artx.cdn + "/test/p842_side1_disp.png"
    }]
  }
};
function drawPlane() {
  return new Promise((dnya, adler) => {
    const ruston = [];
    let daliyah = window.innerWidth * 1;
    let aldean = window.innerHeight * 1;
    if (!artx.plane) {
      artx.plane = {};
      artx.plane.camera = new THREE.PerspectiveCamera(45, daliyah / aldean, 1, 1e4);
      artx.plane.camera.position.set(-600, 0, 1500);
      artx.plane.camera.lookAt(new THREE.Vector3(0, 0, 0));
      var bevelyn = new THREE.DirectionalLight(16777215, 0.7);
      bevelyn.position.set(0, 1, 1);
      artx.plane.lights = [bevelyn];
      artx.plane.renderer = artx.planeRenderer ? artx.planeRenderer : new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      artx.plane.renderer.setSize(daliyah, aldean);
      artx.plane.canvas = artx.plane.renderer.domElement;
      artx.plane.scene = new THREE.Scene();
      artx.plane.scene.add(artx.plane.camera);
      const shulamit = new Promise((tristana, lezanne) => {
        new THREE.TextureLoader().load(artx.cdn + "/images/studio-env.jpg?v=3", function (tabatha) {
          const inderjit = new THREE.PMREMGenerator(artx.plane.renderer);
          inderjit.compileEquirectangularShader();
          artx.plane.envMap = inderjit.fromEquirectangular(tabatha).texture;
          tristana();
        });
      });
      ruston.push(shulamit);
      const almon = new OrbitControls(artx.plane.camera, artx.plane.canvas);
      almon.maxPolarAngle = Math.PI * 0.8;
      almon.minPolarAngle = Math.PI * 0.2;
      almon.maxAzimuthAngle = Math.PI / 3;
      almon.minAzimuthAngle = -Math.PI / 3;
      artx.plane.controls = almon;
    }
    if (artx.plane.canvas.width !== daliyah || artx.plane.canvas.height !== aldean) {
      artx.plane.camera.updateProjectionMatrix();
      artx.plane.camera.aspect = daliyah / aldean;
      artx.plane.renderer.setSize(daliyah, aldean);
    }
    artx.plane.controls.minDistance = 1e3;
    artx.plane.controls.maxDistance = 2500;
    ruston.push(new Promise((quadir, lamecca) => {
      new THREE.TextureLoader().load(artx.color.canvas.toDataURL("image/jpeg", 0.7), function (cresencia) {
        artx.plane.albedo = cresencia;
        quadir();
      });
    }), new Promise((claus, karmell) => {
      new THREE.TextureLoader().load(artx.displacement.canvas.toDataURL(), function (hailie) {
        artx.plane.displacement = hailie;
        claus();
      });
    }), new Promise((zaydon, ryken) => {
      new THREE.TextureLoader().load(artx.bump.canvas.toDataURL(), function (hadessa) {
        artx.plane.bump = hadessa;
        zaydon();
      });
    }), new Promise((samai, barbarella) => {
      new THREE.TextureLoader().load(artx.roughness.canvas.toDataURL("image/jpeg", 0.7), function (chinwe) {
        artx.plane.roughness = chinwe;
        samai();
      });
    }), new Promise((manali, jyanna) => {
      new THREE.TextureLoader().load(artx.metalness.canvas.toDataURL("image/jpeg", 0.7), function (blondell) {
        artx.plane.metalness = blondell;
        manali();
      });
    }));
    Promise.all(ruston).then(() => {
      let lamontray = averageColor(artx.color.canvas);
      artx.plane.scene.background = new THREE.Color(lamontray);
      for (const mikio of [artx.plane.albedo, artx.plane.displacement, artx.plane.bump, artx.plane.roughness, artx.plane.metalness]) {
        mikio.wrapS = THREE.RepeatWrapping;
        mikio.wrapT = THREE.RepeatWrapping;
        mikio.repeat.set(1, 1);
      }
      var yobani = new THREE.MeshStandardMaterial({
        map: artx.plane.albedo,
        envMap: artx.plane.envMap,
        envMapIntensity: 1.6
      });
      if (!params.hasOwnProperty("showBump") || params.showBump === true) {
        yobani.bumpMap = artx.plane.bump;
        yobani.bumpScale = params.depth ? params.depth : 10;
      }
      if (!params.hasOwnProperty("showDisplacement") || params.showDisplacement === true) {
        yobani.displacementMap = artx.plane.displacement;
        yobani.displacementScale = params.depth ? params.depth : 10;
      }
      if (!params.hasOwnProperty("showRoughness") || params.showRoughness === true) {
        yobani.roughnessMap = artx.plane.roughness;
      }
      if (!params.hasOwnProperty("showMetalness") || params.showMetalness === true) {
        yobani.metalness = 1;
        yobani.metalnessMap = artx.plane.metalness;
      }
      if (true || !artx.plane) {
        var euriel = artx.textureWidth;
        var aelyn = artx.textureHeight;
        var emanuela = artx.plane.albedo.image.width * 1;
        var katrena = artx.plane.albedo.image.height * 1;
        var amarachi = new THREE.PlaneGeometry(euriel, aelyn, emanuela / 3, katrena / 3);
        var jasire = new THREE.Mesh(amarachi, yobani);
        let humayl = new THREE.PlaneGeometry(euriel, aelyn, emanuela / 6, katrena / 6);
        let nanalee = new THREE.Mesh(humayl, yobani);
        let mailan = new THREE.PlaneGeometry(euriel, aelyn, emanuela / 12, katrena / 12);
        let anwita = new THREE.Mesh(mailan, yobani);
        if (artx.plane.meshes) {
          for (bengy of artx.plane.meshes) {
            artx.plane.scene.remove(bengy);
            bengy.geometry.dispose();
            bengy.material.dispose();
          }
        }
        artx.plane.meshes = [];
        let kawanza = Math.floor(4.5);
        for (r = 0; r < 9; r++) {
          for (c = 0; c < 9; c++) {
            let yovany = Math.abs(r - kawanza);
            let olly = Math.abs(c - kawanza);
            var bengy = c === kawanza && r === kawanza ? jasire.clone() : yovany <= 1 && olly <= 1 ? nanalee.clone() : anwita.clone();
            var jnay = euriel * 9 / 2 - euriel / 2;
            var idman = aelyn * 9 / 2 - aelyn / 2;
            bengy.position.set(c * euriel - jnay, r * aelyn - idman, 0);
            artx.plane.meshes.push(bengy);
            artx.plane.scene.add(bengy);
          }
        }
      }
      function deshira() {
        artx.plane.controls.update();
        artx.plane.renderer.render(artx.plane.scene, artx.plane.camera);
      }
      deshira();
      artx.plane.canvas.onmousedown = function () {
        artx.plane.canvas.onmousemove = function () {
          deshira();
        };
        artx.plane.canvas.onwheel = function () {
          deshira();
        };
        artx.plane.canvas.onmouseup = function () {
          artx.plane.canvas.onmousemove = null;
        };
      };
      dnya(artx.plane.canvas);
    });
  });
}
function drawSphere(satvika) {
  return new Promise((tefta, freja) => {
    const allwin = [];
    var emmily = satvika.divisions ? satvika.divisions : 1200;
    let kaili = satvika.cameraWidth ? satvika.cameraWidth : 2048;
    let tobie = satvika.cameraHeight ? satvika.cameraHeight : 2048;
    if (!artx.sphere) {
      artx.sphere = {};
    }
    var sareli = satvika.newScene ? {} : artx.sphere;
    if (!sareli.camera) {
      sareli.camera = new THREE.PerspectiveCamera(35, kaili / tobie, 1, 1e4);
      sareli.camera.position.set(0, 0, satvika.hasOwnProperty("cropX") ? 2500 : satvika.hasOwnProperty("cameraZ") ? satvika.cameraZ : 2e3);
      sareli.camera.lookAt(new THREE.Vector3(0, 0, 0));
      if (!sareli.renderer) {
        sareli.renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true
        });
      }
      sareli.renderer.setSize(kaili, tobie);
      sareli.canvas = sareli.renderer.domElement;
      sareli.scene = new THREE.Scene();
      sareli.scene.add(sareli.camera);
      const eda = new Promise((avelino, deboraha) => {
        new THREE.TextureLoader().load(artx.cdn + "/images/studio-env.jpg?v=3", function (demontra) {
          const charmia = new THREE.PMREMGenerator(sareli.renderer);
          charmia.compileEquirectangularShader();
          sareli.envMap = charmia.fromEquirectangular(demontra).texture;
          avelino();
        });
      });
      allwin.push(eda);
      const darhonda = new OrbitControls(sareli.camera, sareli.canvas);
      darhonda.maxPolarAngle = Math.PI * 0.75;
      darhonda.minPolarAngle = Math.PI * 0.25;
      sareli.controls = darhonda;
    }
    if (satvika.hasOwnProperty("cropX")) {
      sareli.camera.setViewOffset(kaili, tobie, satvika.cropX, satvika.cropY, satvika.cropWidth, satvika.cropHeight);
    } else {
      sareli.camera.aspect = 1;
      sareli.camera.position.set(sareli.camera.position.x, sareli.camera.position.y, 2e3);
      sareli.camera.clearViewOffset();
    }
    sareli.camera.updateProjectionMatrix();
    if (sareli.canvas.width !== kaili || sareli.canvas.height !== tobie) {
      sareli.camera.updateProjectionMatrix();
      sareli.camera.aspect = kaili / tobie;
      sareli.renderer.setSize(kaili, tobie);
    }
    sareli.controls.minDistance = 1300;
    sareli.controls.maxDistance = 3e3;
    allwin.push(new Promise((kinnley, tyasia) => {
      new THREE.TextureLoader().load(satvika.color, function (liadan) {
        sareli.albedo = liadan;
        kinnley();
      });
    }), new Promise((laisha, adelene) => {
      new THREE.TextureLoader().load(satvika.displacement, function (jamont) {
        sareli.displacement = jamont;
        laisha();
      });
    }), new Promise((keddrick, paisleymae) => {
      new THREE.TextureLoader().load(satvika.bump, function (duffy) {
        sareli.bump = duffy;
        keddrick();
      });
    }), new Promise((charnelle, joynae) => {
      new THREE.TextureLoader().load(satvika.roughness, function (mats) {
        sareli.roughness = mats;
        charnelle();
      });
    }), new Promise((deviyon, buchanan) => {
      new THREE.TextureLoader().load(satvika.metalness, function (ed) {
        sareli.metalness = ed;
        deviyon();
      });
    }));
    Promise.all(allwin).then(() => {
      for (const korsica of [sareli.albedo, sareli.displacement, sareli.bump, sareli.roughness, sareli.metalness]) {
        korsica.wrapS = THREE.RepeatWrapping;
        korsica.wrapT = THREE.RepeatWrapping;
        var buse = sareli.albedo.image.width / sareli.albedo.image.height;
        korsica.repeat.set(4, 2 * buse);
      }
      var duskin = new THREE.MeshStandardMaterial({
        map: sareli.albedo,
        envMap: sareli.envMap,
        envMapIntensity: 1.65
      });
      if (!params.hasOwnProperty("showBump") || params.showBump === true) {
        duskin.bumpMap = sareli.bump;
        duskin.bumpScale = params.depth ? params.depth : 10;
      }
      if (!params.hasOwnProperty("showDisplacement") || params.showDisplacement === true) {
        duskin.displacementMap = sareli.displacement;
        duskin.displacementScale = params.depth ? params.depth : 10;
      }
      if (!params.hasOwnProperty("showRoughness") || params.showRoughness === true) {
        duskin.roughnessMap = sareli.roughness;
      }
      if (!params.hasOwnProperty("showMetalness") || params.showMetalness === true) {
        duskin.metalness = 1;
        duskin.metalnessMap = sareli.metalness;
      }
      if (sareli.mesh) {
        sareli.scene.remove(sareli.mesh);
        sareli.mesh.geometry.dispose();
        sareli.mesh.material.dispose();
      }
      var chantise = new THREE.SphereGeometry(550, emmily, emmily / 2, 0, Math.PI * 2);
      sareli.mesh = new THREE.Mesh(chantise, duskin);
      sareli.scene.add(sareli.mesh);
      function rhaine() {
        sareli.controls.update();
        sareli.renderer.render(sareli.scene, sareli.camera);
      }
      rhaine();
      sareli.canvas.onmousedown = function () {
        sareli.canvas.onmousemove = function () {
          rhaine();
        };
        sareli.canvas.onwheel = function () {
          rhaine();
        };
        sareli.canvas.onmouseup = function () {
          sareli.canvas.onmousemove = null;
        };
      };
      tefta(sareli.canvas);
    });
  });
}
function drawError(ginaya) {
  modalMessage("Error: " + ginaya);
  hideSpinner();
}
function setHatchName() {
  artx.hatchName = trainify(artx.patterns[params.patternId].name, "_").substring(0, 20).toUpperCase() + "_" + parseInt(params.tileWidth) + "X" + parseInt(params.tileHeight) + "_" + params.hatchApp.toUpperCase();
  artx.hatchName.replace("-", "_");
  artx.hatchName = artx.hatchName.substr(0, 24);
  artx.hatchName += "_" + generateUid().toUpperCase();
  if (params.hatchApp !== "autocad") {
    artx.hatchName += "_" + params.hatchType.toUpperCase();
  }
}
function height2normal(jettrin) {
  var roseline = jettrin.getContext("2d");
  var dantes = jettrin.width;
  var dionne = jettrin.height;
  var monet = roseline.getImageData(0, 0, dantes, dionne);
  var kharley = roseline.createImageData(dantes, dionne);
  var omarie = 0;
  for (var mariaantonia = dantes * dionne * 4; omarie < mariaantonia; omarie += 4) {
    var momo;
    var veronice;
    var tareek;
    var amarelis;
    if (omarie % (dantes * 4) == 0) {
      momo = monet.data[omarie];
      veronice = monet.data[omarie + 4];
    } else if (omarie % (dantes * 4) == (dantes - 1) * 4) {
      momo = monet.data[omarie - 4];
      veronice = monet.data[omarie];
    } else {
      momo = monet.data[omarie - 4];
      veronice = monet.data[omarie + 4];
    }
    if (omarie < dantes * 4) {
      tareek = monet.data[omarie];
      amarelis = monet.data[omarie + dantes * 4];
    } else if (omarie > dantes * (dionne - 1) * 4) {
      tareek = monet.data[omarie - dantes * 4];
      amarelis = monet.data[omarie];
    } else {
      tareek = monet.data[omarie - dantes * 4];
      amarelis = monet.data[omarie + dantes * 4];
    }
    kharley.data[omarie] = momo - veronice + 127;
    kharley.data[omarie + 1] = tareek - amarelis + 127;
    kharley.data[omarie + 2] = 255;
    kharley.data[omarie + 3] = 255;
  }
  roseline.putImageData(kharley, 0, 0);
}
function updateMapPreviews() {
  if (["plane", "sphere"].includes(params.view) && artx.visibleMenu) {
    elements(".map-preview").forEach(function (steveland) {
      steveland.style.display = "";
    });
    if (artx.visibleMenu.name === "roughness-menu") {
      element("#roughness-preview").appendChild(artx.roughness.canvas);
    }
    if (artx.visibleMenu.name === "metalness-menu") {
      element("#metalness-preview").appendChild(artx.metalness.canvas);
    }
    if (artx.visibleMenu.name === "displacement-menu") {
      element("#displacement-preview").appendChild(artx.displacement.canvas);
    }
    if (artx.visibleMenu.name === "bump-menu") {
      height2normal(artx.bump.canvas);
      element("#normal-preview").appendChild(artx.bump.canvas);
    }
  } else {
    elements(".map-preview").forEach(function (jiahao) {
      jiahao.style.display = "none";
    });
  }
  if (artx.visibleMenu) {
    positionMenu(artx.visibleMenu.triggerElement);
  }
}
function positionMenu(artis) {
  if (artis.innerHTML) {
    var turin = $("#controls").offset();
    var dayris = $("#controls").height();
    var johneice = "#" + $(artis).attr("data-target");
    var otter = $(artis).offset();
    var barbette = $(johneice).height();
    var tailyn = otter.top - barbette / 2 - 1;
    var amyrie = otter.top + barbette / 2;
    $(johneice + " .arrow").fadeIn(0);
    $(johneice + " > .arrow > .diamond").css("top", otter.top);
    if ($(window).width() > 499) {
      if (tailyn < turin.top) {
        $(johneice).css("top", turin.top - 1);
      } else if (amyrie > turin.top + dayris) {
        $(johneice).css("top", turin.top + dayris - barbette - 1);
      } else {
        $(johneice).css("top", tailyn);
      }
    } else {
      var yuette = (window.innerHeight - barbette) / 2;
      $(johneice).css("top", yuette);
    }
  }
}
function afterDraw(joyace) {
  artx.perf.total = performance.now() - drawStart;
  iframeMessage("drawComplete");
  artx.initialDraw = true;
  clearInterval(artx.initialInterval);
  artx.texture = joyace;
  if (params.tileStyles.a.materialId && artx.materials[params.tileStyles.a.materialId]) {
    setThemeColor(artx.materials[params.tileStyles.a.materialId].color);
  }
  var luria = params.inches ? round(mmToInches(artx.textureWidth), 1) : round(artx.textureWidth);
  var jameice = params.inches ? round(mmToInches(artx.textureHeight), 1) : round(artx.textureHeight);
  artx.textureSize = luria + " x " + jameice + " " + artx.units;
  $("#texture-size").html(artx.textureSize);
  var robertia = [];
  var dajha = params.tileStyles.a.materialId;
  if (artx.materials[dajha]) {
    robertia.push(artx.materials[dajha].name);
  }
  if (artx.patterns[params.patternId]) {
    robertia.push(artx.patterns[params.patternId].name);
  }
  if (params.tileStyles.a.designOptions) {
    for (option of Object.values(params.tileStyles.a.designOptions)) {
      robertia.push(option.name);
    }
  }
  if (artx.patterns[params.patternId] && !robertia.includes(artx.patterns[params.patternId].name)) {
    robertia.push(artx.patterns[params.patternId].name);
  }
  if (artx.textureSize) {
    robertia.push(artx.textureSize);
  }
  if (artx.materials[dajha] && artx.materials[dajha].brand) {
    robertia.push(artx.materials[dajha].brands_name);
  }
  artx.nameParts = robertia;
  if (params.view == "plane") {
    drawPlane().then(function (yairis) {
      hideSpinner();
      document.getElementById("plane-canvas-container").innerHTML = "";
      document.getElementById("plane-canvas-container").appendChild(yairis);
      elements(".output-container").forEach(function (kerryann) {
        kerryann.style.display = "none";
      });
      elements("#plane-canvas-container").forEach(function (joiya) {
        joiya.style.display = "";
      });
      artx.drawResolve(yairis);
    });
  } else {
    if (params.view == "sphere") {
      var jewelene = createHtml({
        tag: "div",
        class: "canvas-container"
      });
      insertHtml(jewelene);
      var keilian = jewelene.getBoundingClientRect();
      var syrina = keilian.left + keilian.width + keilian.left;
      var domarion = window.innerWidth;
      var kanen = domarion / (syrina / window.innerHeight);
      var mukul = -(kanen - window.innerHeight) / 2;
      jewelene.remove();
      drawSphere({
        color: artx.color.canvas.toDataURL("image/jpeg", 0.6),
        displacement: artx.displacement.canvas.toDataURL("image/jpeg", 0.6),
        bump: artx.bump.canvas.toDataURL("image/jpeg", 0.6),
        roughness: artx.roughness.canvas.toDataURL("image/jpeg", 0.6),
        metalness: artx.metalness.canvas.toDataURL("image/jpeg", 0.6),
        cameraWidth: syrina,
        cameraHeight: window.innerHeight,
        cropX: 0,
        cropY: mukul,
        cropWidth: domarion,
        cropHeight: kanen
      }).then(function (watsyn) {
        hideSpinner();
        document.getElementById("plane-canvas-container").innerHTML = "";
        document.getElementById("plane-canvas-container").appendChild(watsyn);
        document.getElementById("background-a").style.display = "none";
        document.getElementById("background-b").style.display = "none";
        watsyn.setAttribute("style", "height: 100%;width: 100%;object-fit: cover;");
        elements(".output-container").forEach(function (raian) {
          raian.style.display = "none";
        });
        elements("#plane-canvas-container").forEach(function (damen) {
          damen.style.display = "";
        });
        artx.drawResolve(watsyn);
      });
    } else {
      if (params.view == "scene" && params.scene && artx.scenes[params.scene]) {
        let bly = copy(artx.scenes[params.scene]);
        if (!artx.hasOwnProperty("scene")) {
          artx.scene = {};
        }
        if (!artx.scene.hasOwnProperty("canvas")) {
          artx.scene.canvas = document.createElement("canvas");
        }
        bly.textures = [{
          image: joyace.toDataURL("image/jpeg", 0.7),
          width: artx.textureWidth
        }];
        if (params.hasOwnProperty("rotation")) {
          bly.textures[0].rotation = params.rotation;
        }
        var aryelle = [];
        if (params.hasOwnProperty("sceneTextures")) {
          params.sceneTextures.forEach(function (imya) {
            if (imya.hasOwnProperty("material")) {
              aryelle.push(new Promise(function (jil) {
                query({
                  table: "protextures",
                  id: imya.material
                }).then(function (tiffane) {
                  if (tiffane.results.length) {
                    let shamoni = tiffane.results[0];
                    imya.width = shamoni.realwidth;
                    let mims = [];
                    tiffane.results[0].source_names.forEach(function (deyvon, raeden) {
                      let madina = artx.cdn + "/materials/" + imya.material + "/4000/" + deyvon;
                      let yitta = copy(imya);
                      yitta.meshes = [];
                      yitta.image = madina;
                      bly.textures.push(yitta);
                      mims.push(yitta);
                    });
                    if (imya.meshes) {
                      imya.meshes.forEach(function (ronzel, opal) {
                        let jemaya = mims[opal % mims.length];
                        jemaya.meshes.push(ronzel);
                      });
                    }
                  }
                  jil();
                });
              }));
            } else if (typeof imya.image === "number") {
              aryelle.push(new Promise(function (pearlia) {
                query({
                  table: "textures",
                  id: imya.image
                }).then(function (gerard) {
                  if (gerard.results.length) {
                    imya.image = artx.cdn + gerard.results[0].imgurl;
                    bly.textures.push(imya);
                  }
                  pearlia();
                });
              }));
            } else {
              bly.textures.push(imya);
            }
          });
        }
        Promise.all(aryelle).then(function () {
          artx.drawScene(bly, artx.scene.canvas, artx.scene.settings).then(function (derene) {
            artx.scene.settings = derene.settings;
            elements(".output-container").forEach(function (akoya) {
              akoya.style.display = "none";
            });
            document.getElementById("scene-canvas-container").style.display = "";
            document.getElementById("scene-canvas-container").appendChild(derene.canvas);
            hideSpinner();
            artx.drawResolve(derene.canvas);
          });
        });
      } else {
        elements(".output-container").forEach(function (takirra) {
          takirra.style.display = "none";
        });
        elements(".canvas-container").forEach(function (madeliz) {
          madeliz.style.display = "";
        });
        document.getElementById("background-a").style.display = "";
        document.getElementById("background-b").style.display = "";
        if (params.view === "normal") {
          height2normal(joyace);
        }
        if (!artx.drawSettings) {
          artx.drawSettings = {};
        }
        if (artx.drawSettings.canvasId) {
          var luara = document.getElementById(artx.drawSettings.canvasId);
          var shafin = luara.getContext("2d");
          luara.width = joyace.width;
          luara.height = joyace.height;
          shafin.drawImage(joyace, 0, 0);
        }
        sizeCanvasContainer();
        if (artx.drawSettings.tileTexture == true && params.view !== "sphere") {
          tileTexture();
        }
        if (params.trigger == "single-action-button" && artx.drawSettings.returnPoints == false) {
          prepareAppExport(joyace);
        }
        if (artx.sourceScaled && params.patternId !== 17) {
          fadeIn(artx.ui.materialWarning, 100, 0.2);
        } else {
          fadeOut(artx.ui.materialWarning, 100);
        }
        if (params.trigger == "high-res" || params.trigger == "set-res") {
          downloadTexture("canvas", 0.95);
        }
        if (artx.drawSettings.returnPoints == true) {
          delete artx.drawSettings;
          return artx.tilePoints;
        }
        hideSpinner();
        artx.drawResolve(joyace);
        if (artx.drawSettings.returnCanvas == true) {
          delete artx.drawSettings;
          return joyace;
        } else {
          if (artx.drawSettings.returnImg == true) {
            delete artx.drawSettings;
            return joyace.toDataURL("image/jpeg", 0.9);
          } else {
            delete artx.drawSettings;
          }
        }
      }
    }
  }
  let lynnel = params.pixelWidth;
  let rennick = joyace.width / joyace.height;
  document.querySelectorAll("[data-pixel-width]").forEach(function (janson) {
    janson.value = lynnel;
  });
  document.querySelectorAll("[data-pixel-height]").forEach(function (mahogony) {
    mahogony.value = parseInt(lynnel / rennick);
  });
  document.querySelectorAll("[data-resolution-container]").forEach(function (sabe) {
    sanitiseResolution(sabe);
  });
  updateMapPreviews();
  delete artx.drawSettings;
  artx.afterDrawJs();
  if (!artx.editorLoaded) {
    toApp({
      type: "editorLoaded"
    });
    artx.editorLoaded = true;
  }
}
function prepareAppExport(gevena) {
  var fleeta = {
    data: {}
  };
  if (artx.updateExisting == true) {
    fleeta.type = "update";
    if (artx.plugin == "sketchup") {
      hideImportMessage();
    }
  } else {
    fleeta.type = "import";
    if (params.tileStyles.a.imgType == "upload") {
      var windol = params.tileStyles.a.materialId + generateUid();
    } else {
      if (params.tileStyles.a.imgType == "solid") {
        var windol = "solid-" + generateUid();
      } else {
        var windol = artx.materials[params.tileStyles.a.materialId].name.split(" ").join("_");
      }
    }
    artx.textureName = windol + "_" + trainify(artx.patterns[params.patternId].name.ucFirst()) + "_" + generateUid();
    artx.updateExisting = true;
    $("#single-action-button").html("Update");
  }
  fleeta.data.name = artx.textureName;
  fleeta.data.image = gevena.toDataURL("image/jpeg", 0.9);
  fleeta.data.width = artx.textureWidth;
  fleeta.data.params = params;
  if (artx.plugin == "revit") {
    fleeta.data.color = averageColor(canvas);
    fleeta.data.description = "";
    fleeta.data.class = "Generic";
    fleeta.data.comments = "";
    fleeta.data.bump = artx.displacement.canvas.toDataURL();
    fleeta.data.bumpAmount = 100;
    fleeta.data.manufacturer = "";
    fleeta.data.model = "";
    fleeta.data.url = "https://architextures.org";
    fleeta.data.x = 0;
    fleeta.data.y = 0;
    fleeta.data.transparency = 0;
    fleeta.data.translucency = 0;
    fleeta.data.indexOfRefraction = 0;
    fleeta.data.reflectivityDirect = 0;
    fleeta.data.reflectivityOblique = 0;
    if (artx.hatchPat && params.patternId !== 17 && artx.pro) {
      fleeta.data.hatch = artx.hatchPat;
    }
  }
  toApp(fleeta);
}
function styleLoop(argel) {
  Object.values(params.tileStyles).forEach(function (kerigan, waunda) {
    argel(kerigan, waunda);
  });
}
function downloadHatch(issabella) {
  let seals = artx.hatchName + ".pat";
  var sharaf = document.createElement("a");
  sharaf.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(issabella));
  sharaf.setAttribute("download", seals);
  if (document.createEvent) {
    var keighly = document.createEvent("MouseEvents");
    keighly.initEvent("click", true, true);
    sharaf.dispatchEvent(keighly);
  } else {
    sharaf.click();
  }
}
document.addEventListener("keydown", function (decklyn) {
  if (decklyn.key === "Escape") {}
});
function makeSeed() {
  return parseInt(Math.random() * 1e5);
}
function tileTexture() {
  var aleiza = canvas.toDataURL("image/jpeg", 0.8);
  var marhia = canvas.toDataURL("image/jpeg", 0.1);
  var anajee = $("#canvas").height();
  var deontia = $("#canvas").width();
  var aryela = $("#canvas").offset();
  var daretta = aryela.top;
  var hawra = aryela.left;
  $("#background-a").css("background-image", "url(" + aleiza + ")").css("background-size", deontia + "px " + anajee + "px").css("background-position", hawra + "px " + daretta + "px");
  setTimeout(function () {
    $("#background-b").css("background-image", "url(" + marhia + ")").css("background-size", deontia + "px " + anajee + "px").css("background-position", hawra + "px " + daretta + "px");
  }, 500);
  $("#share-thumb").css("background-image", "url(" + aleiza + ")");
}
function sizeCanvasContainer() {
  let zhana = document.querySelector("#svg-canvas-container");
  zhana.style.position = "absolute";
  let angeliza = params.patternRotateAngle == "90" || params.patternRotateAngle == "270";
  let tishonna = angeliza ? zhana.parentElement.clientHeight : zhana.parentElement.clientWidth;
  let jayseon = angeliza ? zhana.parentElement.clientWidth : zhana.parentElement.clientHeight;
  zhana.style.height = jayseon + "px";
  zhana.style.width = tishonna + "px";
}
function showSpinner() {
  artx.spinnerVisible = setTimeout(function () {
    $("#app-spinner").fadeIn(200);
  }, 200);
}
function hideSpinner() {
  clearTimeout(artx.spinnerVisible);
  $("#app-spinner").fadeOut(300);
}
function filletGradient(josehp, latavia, monicia, tylaiyah, _0x17ebdf = false) {
  var leda = function () {
    var davarion = true;
    return function (daymin, khalise) {
      var lapatra = davarion ? function () {
        if (khalise) {
          var noname = khalise.apply(daymin, arguments);
          khalise = null;
          return noname;
        }
      } : function () {};
      davarion = false;
      return lapatra;
    };
  }();
  var qadeera = leda(this, function () {
    return qadeera.toString().search("(((.+)+)+)+$").toString().constructor(qadeera).search("(((.+)+)+)+$");
  });
  qadeera();
  var jahjuan = [];
  var girasol = [[0.025, 0.223], [0.099, 0.434], [0.218, 0.623], [0.377, 0.782], [0.566, 0.901], [0.777, 0.975]];
  if (_0x17ebdf) {
    girasol = [[0.223, 0.025], [0.434, 0.099], [0.623, 0.218], [0.782, 0.377], [0.901, 0.566], [0.975, 0.777]];
  }
  var dedi = tylaiyah - monicia;
  var imelda = latavia - josehp;
  jahjuan.push({
    stop: monicia,
    color: josehp
  });
  girasol.forEach(function (anaria, gracelyn) {
    var kentlee = josehp + imelda * anaria[1];
    jahjuan.push({
      stop: monicia + dedi * anaria[0],
      color: kentlee
    });
  });
  jahjuan.push({
    stop: tylaiyah,
    color: latavia
  });
  return jahjuan;
}
function setPatternMultiples() {
  var amoya = ["row", "column"];
  for (const jazzmin of amoya) {
    var deontrez = document.getElementById(jazzmin + "s");
    var salamon = artx.patterns[params.patternId][jazzmin + "Multiple"];
    var jermonte = artx.pro && get("maxgrid") ? parseInt(get("maxgrid")) : artx.pro ? 30 : 12;
    var lemmy = deontrez.value;
    var aysa = deontrez.getAttribute("data-initial-value");
    if (lemmy < salamon) {
      deontrez.value = salamon;
      deontrez.setAttribute("data-initial-value", salamon);
      params[jazzmin + "s"] = salamon;
    } else {
      if (lemmy > jermonte) {
        var dimitric = Math.ceil(jermonte / salamon) * salamon;
        deontrez.value = dimitric;
        deontrez.setAttribute("data-initial-value", dimitric);
        params[jazzmin + "s"] = dimitric;
      } else {
        if (Number.isInteger(lemmy / salamon)) {} else {
          if (lemmy > aysa) {
            var sharney = Math.ceil(lemmy / salamon);
            var mackston = sharney * salamon;
            deontrez.value = mackston;
            deontrez.setAttribute("data-initial-value", mackston);
            params[jazzmin + "s"] = mackston;
          } else {
            var sharney = Math.floor(lemmy / salamon);
            var mackston = sharney * salamon;
            deontrez.value = mackston;
            deontrez.setAttribute("data-initial-value", mackston);
            params[jazzmin + "s"] = mackston;
          }
        }
      }
    }
  }
}
function appUi() {
  if (artx.appdata && artx.appdata.ui_hide) {
    for (const tressy of artx.appdata.ui_hide) {
      elements(tressy).forEach(function (sebrinia) {
        sebrinia.style.display = "none";
      });
    }
  }
  if (artx.appdata && artx.appdata.ui_show) {
    for (const cross of artx.appdata.ui_show) {
      elements(cross).forEach(function (laveryl) {
        laveryl.style.display = "";
      });
    }
  }
}
let predraw;
$(document).ready(function () {
  var shequanna = document.getElementById("material-menu");
  var charrisse = document.getElementById("height");
  var nyjae = document.getElementById("background-a");
  var aliza = document.getElementById("background-b");
  artx.ui.width = document.getElementById("width");
  artx.ui.height = document.getElementById("height");
  artx.ui.materialWarning = elements("#scale-warning")[0];
  artx.ui.spectrumPreview = createHtml({
    tag: "div",
    class: "spectrum-preview"
  });
  artx.ui.weaves = document.getElementById("weaves");
  artx.ui.reset = document.getElementById("reset-texture");
  artx.ui.jointHorizontal = document.getElementById("joint-size-horizontal");
  artx.ui.jointVertical = document.getElementById("joint-size-vertical");
  artx.ui.pathSelector = document.getElementById("path-selector");
  artx.ui.heightmapSelector = document.getElementById("heightmap-selector");
  artx.ui.controls = document.getElementById("controls");
  artx.ui.viewDropdown = document.getElementById("view-options");
  artx.ui.formatSelect = element("#download-format");
  window.addEventListener("message", function (johvanny) {
    let mihail = johvanny.data.type ? johvanny.data.type : johvanny.data;
    let tysheera = johvanny.data.data ? johvanny.data.data : null;
    let josanna = johvanny.data.requestId ? johvanny.data.requestId : 0;
    if (["textureData", "getTextureData"].includes(mihail)) {
      var mireily = {
        patternName: artx.patterns[params.patternId].name,
        patternId: artx.patterns[params.patternId].id,
        rows: params.rows,
        columns: params.columns,
        jointWidthHorizontal: params.jointWidthHorizontal,
        jointWidthVertical: params.jointWidthVertical,
        jointRecess: params.recessJoints,
        jointTint: params.jointTint,
        tileWidth: params.tileWidth,
        tileHeight: params.tileHeight,
        tileWidthMin: params.tileMinWidth,
        tileHeighthMin: params.tileMinHeight,
        materials: []
      };
      mireily.width = params.inches ? mmToInches(artx.textureWidth) : artx.textureWidth;
      mireily.height = params.inches ? mmToInches(artx.textureHeight) : artx.textureHeight;
      mireily.units = params.inches ? "inches" : "mm";
      mireily.jointId = parseInt(params.jointID) !== NaN ? parseInt(params.jointID) : 0;
      mireily.jointName = artx.materials.hasOwnProperty(params.jointID) ? artx.materials[params.jointID].name : 0;
      mireily.jointSize = params.jointWidthHorizontal;
      mireily.nameParts = artx.nameParts;
      for (const chaslyn of Object.values(params.tileStyles)) {
        var kartika = artx.materials.hasOwnProperty(chaslyn.materialId) ? artx.materials[chaslyn.materialId].name : false;
        var shantele = parseInt(chaslyn.materialId) == NaN ? chaslyn.materialId : parseInt(chaslyn.materialId);
        var genaveve = artx.materials.hasOwnProperty(chaslyn.materialId) && artx.materials[chaslyn.materialId].hasOwnProperty("sku") ? artx.materials[chaslyn.materialId].sku : 0;
        var gurinder = artx.materials.hasOwnProperty(chaslyn.materialId) && artx.materials[chaslyn.materialId].collection ? artx.materials[chaslyn.materialId].collection : 0;
        var bretton = artx.materials.hasOwnProperty(chaslyn.materialId) && artx.materials[chaslyn.materialId].link ? artx.materials[chaslyn.materialId].link : 0;
        mireily.materials.push({
          name: kartika,
          id: shantele,
          sku: genaveve,
          collection: gurinder,
          link: bretton,
          tint: chaslyn.tint,
          brightness: chaslyn.brightness,
          contrast: chaslyn.contrast,
          hue: chaslyn.hue,
          saturation: chaslyn.saturation,
          invert: chaslyn.invert
        });
      }
      iframeMessage(mihail, mireily, josanna);
    }
    if (["getParams", "getParamsExtended"].includes(mihail)) {
      iframeMessage(mihail, params, josanna);
    }
    if (["getTexture", "getBump"].includes(mihail)) {
      let dakoata = copy(params);
      if (mihail === "getBump") {
        dakoata.view = "bump";
      }
      if (tysheera) {
        if (tysheera.size) {
          dakoata.pxSize = tysheera.size;
        }
        let afeni = tysheera.format ? tysheera.format : "jpg";
        let anise = tysheera.quality ? tysheera.quality : 0.8;
        artx.draw(dakoata).then(function (kingisaiah) {
          if (tysheera.invert) {
            invertCanvas(kingisaiah);
          }
          iframeMessage(mihail, kingisaiah.toDataURL(afeni === "jpg" ? "image/jpeg" : "image/png", afeni === "jpg" ? anise : null), josanna);
        });
      } else {
        artx.draw(dakoata).then(function (ilyssa) {
          iframeMessage(mihail, ilyssa.toDataURL(), josanna);
        });
      }
    }
    if (mihail === "setAppdata" && typeof tysheera === "object") {
      for (const [_0x3c3fb9, _0x2a519a] of Object.entries(tysheera)) {
        artx.appdata[_0x3c3fb9] = _0x2a519a;
      }
    }
    if (mihail === "getSceneImage") {
      iframeMessage(mihail, artx.scene && artx.scene.canvas ? artx.scene.canvas.toDataURL() : "No scene image available", josanna);
    }
    if (mihail === "setTitle") {
      element("#app-title-text").innerHTML = tysheera;
    }
    if (mihail === "setIconSrc") {
      element("#app-title-image").setAttribute("src", tysheera);
    }
    if (mihail === "clickElement") {
      element(tysheera).click();
    }
    if (mihail === "setAccentColor") {
      element(":root").style.setProperty("--main-accent-color", tysheera);
    }
    if (mihail === "getDisplacement") {}
    if (mihail === "getNormal") {}
    if (mihail === "loadParams") {
      artx.loadParams(tysheera, tysheera.trigger ? tysheera.trigger : "#plugin-editor-load").then(function () {
        iframeMessage(mihail, false, josanna);
      });
    }
  });
  if (artx.user.type === "brand") {}
  if (window.self !== window.top) {
    let utkarsh = createHtml({
      tag: "button",
      class: "fbutt",
      children: ["Open on Architextures.org", {
        tag: "img",
        src: artx.cdn + "/icons/link.svg"
      }]
    });
    let abiyah = createHtml({
      tag: "div",
      class: "section fc xs-gap",
      id: "open-on-architextures-container",
      children: [{
        tag: "div",
        class: "section-header",
        text: "Access"
      }, {
        tag: "div",
        children: [utkarsh]
      }]
    });
    utkarsh.onclick = function () {
      query({
        table: "shares",
        action: "insert",
        values: {
          params: JSON.stringify(params)
        }
      }).then(function (ballarie) {
        createHtml({
          tag: "a",
          href: "https://architextures.org/create/share/" + ballarie.id,
          target: "_blank"
        }).click();
      });
    };
    document.querySelector("#kebab-menu .menu-content").appendChild(abiyah);
  }
  if (artx.appdata && artx.appdata.textures && artx.appdata.textures.length) {
    let cortny = createHtml({
      tag: "div",
      class: "circle-icon-small plugin-back nosel",
      children: [{
        tag: "img",
        style: "margin-right:8px;",
        src: artx.mediaEndpoint + "/icons/img-menu.svg"
      }, "Browse designs"]
    });
    cortny.style.width = "auto";
    cortny.style.borderRadius = 0;
    cortny.style.padding = "0 10px";
    insertHtml(cortny);
    cortny.onclick = function () {
      if (!artx.presetBox) {
        let lucchese = {
          table: "textures",
          limit: 48,
          sort: ["views", "desc"]
        };
        lucchese.where = [["id", "in", artx.appdata.textures.join(",")]];
        var quention = createDataboxMenu({
          query: lucchese,
          search: true,
          onClose: "hide",
          title: "Designs",
          footer: false,
          moreButton: function () {
            return createHtml({
              tag: "div",
              class: "shadow more-button flex-centred",
              style: "height:50px;background-color:var(--app-accent-color);color:white;",
              text: "More"
            });
          },
          itemHtml: function (donica, tysheem) {
            let roxa = createHtml({
              tag: "div",
              style: "background-image:url(" + artx.cdn + "" + donica.imgurl + "?s=400&q=60" + ")",
              class: "asset",
              children: [{
                tag: "div",
                class: "asset-label",
                children: [{
                  tag: "div",
                  text: donica.name
                }]
              }]
            });
            roxa.onclick = function () {
              artx.loadParams(donica.params);
              fadeOut(quention).then(function () {
                quention.style.display = "none";
              });
            };
            return roxa;
          }
        });
        insertHtml(quention);
        quention.dbox.itemContainer.classList.add("asset-grid");
        quention.dbox.itemContainer.style.padding = "20px";
        quention.dbox.itemContainer.parentElement.classList.add("asset-container");
        quention.dbox.moreButton.classList.add("fbutt");
        quention.dbox.moreButton.style.backgroundColor = "var(--accent-color)";
        quention.dbox.moreButton.style.margin = "50px";
        quention.style.left = quention.style.right = "var(--app-panel-left)";
        quention.style.top = quention.style.bottom = "var(--app-panel-top)";
        artx.presetBox = quention;
      } else {
        fadeIn(artx.presetBox);
      }
    };
  }
  var caritina = get("status") ? get("status") : "live";
  var tampa = caritina.split("+");
  const endora = {
    table: "protextures",
    where: [["status", "IN", tampa.join(",")]],
    page: 1,
    joins: [{
      table: "brands",
      columns: ["name", "website_link", "logo"],
      on: ["brand", "=", "id"]
    }, {
      table: "protextures_position_" + artx.userRegion,
      columns: ["position"],
      on: ["id", "=", "material"],
      sort: ["position", "asc"]
    }],
    limit: 20
  };
  if (artx.appdata && artx.appdata.materials) {
    endora.where = [["id", "in", artx.appdata.materials.join(",")]];
  }
  if (get("materials")) {
    endora.where = [["id", "in", miricale(get("materials")).join(",")]];
  }
  if (get("view")) {
    params.view = get("view");
  }
  if (artx.user && artx.user.type == "gamedev") {
    endora.where.push(["brand", "IS NULL"]);
  }
  if (artx.appdata) {
    var viance = {};
    let faruk = get("materials") ? [["id", "in", miricale(get("materials")).join(",")]] : artx.appdata.materials ? [["id", "in", artx.appdata.materials.join(",")]] : [["brand", "=", artx.appdata.brand], ["status", "IN", tampa.join(",")]];
    postJson("/app/query", {
      table: "protextures",
      where: faruk,
      join: {
        table: "brands",
        columns: ["name", "website_link", "logo"],
        on: ["brand", "=", "id"]
      },
      sort: ["downloads", "desc"],
      limit: 999
    }).then(function (azhaan) {
      for (material of azhaan.results) {
        var tyniyah = material.collection ? material.collection : material.category ? material.category : "";
        var kaymi = tyniyah.split(",");
        for (collectionName of kaymi) {
          collectionName = collectionName.trim();
          if (!viance.hasOwnProperty(collectionName)) {
            viance[collectionName] = {
              tag: "div",
              class: "section orderable-section",
              children: [{
                tag: "div",
                class: "input-label",
                text: collectionName
              }, {
                tag: "div",
                class: "planet-container",
                children: []
              }]
            };
          }
          var darrious = edilson(material);
          viance[collectionName].children[1].children.push(darrious);
        }
      }
      for (collection of Object.values(viance)) {
        insertHtml(createHtml(collection), "#material-menu-content");
      }
      jaire();
      shaleesa();
      keynon();
    });
  } else {
    const yatzary = copy(endora);
    yatzary.where.push(["category", "=", "Stone"]);
    element("#material-menu .stone-container").parentElement.menuOptionsLoaded = true;
    postJson("/app/query", yatzary).then(function (livy) {
      adyaan(livy, "#material-menu .stone-container", yatzary);
    });
  }
  const arshanti = copy(endora);
  arshanti.where.push(["category", "=", "Joint"]);
  if (artx.appdata.joints) {
    arshanti.where = [["id", "in", artx.appdata.joints.join(",")]];
  }
  postJson("/app/query", arshanti).then(function (samnatha) {
    adyaan(samnatha, "#material-menu .stone-container", arshanti);
  });
  var lafrederick = element("#material-menu-content");
  var chigozirim = element("#material-spinner");
  var haku = element("#material-search-container");
  artx.searchDelay;
  materialSearch = element("#material-search");
  materialSearch.onkeyup = function () {
    element("#material-menu .arrow").style.display = "none";
    haku.querySelector(".planet-container").innerHTML = "";
    insertHtml(createHtml({
      tag: "div",
      text: "",
      class: "flex-centred",
      style: "width:100%;height:400px;"
    }), haku.querySelector(".planet-container"));
    clearTimeout(artx.searchDelay);
    fadeTo(lafrederick, 0);
    fadeIn(chigozirim, 1);
    const eliandra = copy(endora);
    if (artx.appdata) {
      eliandra.where.push(["brand", "=", artx.appdata.brand]);
    }
    eliandra.search = materialSearch.value;
    artx.searchDelay = setTimeout(function () {
      if (materialSearch.value == "") {
        artx.clearSearch();
      } else {
        postJson("/app/query", eliandra).then(function (deleesa) {
          haku.querySelector(".planet-container").innerHTML = "";
          lafrederick.style.display = "none";
          chigozirim.style.display = "none";
          haku.style.display = "";
          if (deleesa.results.length) {
            adyaan(deleesa, haku.querySelector(".planet-container"), eliandra);
          } else {
            insertHtml(createHtml({
              tag: "div",
              text: "No results found",
              class: "flex-centred",
              style: "width:100%;height:400px;"
            }), haku.querySelector(".planet-container"));
          }
        });
      }
    }, 500);
  };
  element("#material-search-clear").onclick = function () {
    artx.clearSearch();
  };
  artx.clearSearch = function () {
    materialSearch.value = "";
    lafrederick.style.display = "";
    fadeIn(lafrederick);
    haku.style.display = "none";
    chigozirim.style.display = "none";
  };
  function ipek(_0x3ecfd7 = 1e3) {
    shequanna.querySelectorAll("#material-menu-content .section").forEach(function (geovani) {
      if (!geovani.menuOptionsLoaded && geovani.hasAttribute("data-cat") && geovani.getBoundingClientRect().top - _0x3ecfd7 < window.innerHeight) {
        var marit = createHtml({
          tag: "div",
          class: "flex-centred",
          style: "width:100%;height:400px;",
          children: [{
            tag: "div",
            class: "spinner"
          }]
        });
        geovani.appendChild(marit);
        geovani.menuOptionsLoaded = true;
        var deryan = geovani.getAttribute("data-cat").split(",");
        for (const elysiana of deryan) {
          const kedwin = copy(endora);
          kedwin.where.push(["category", "=", elysiana]);
          postJson("/app/query", kedwin).then(function (soyer) {
            soyer.results = soyer.results.filter(diyara => {
              return diyara["protextures_position_" + artx.userRegion + "_position"] !== null;
            });
            marit.remove();
            adyaan(soyer, "#material-menu ." + elysiana.toLowerCase() + "-container", kedwin);
            shaleesa();
          });
        }
      }
    });
  }
  shequanna.querySelector("#material-menu-content").onscroll = function () {
    ipek();
  };
  document.querySelectorAll("summary.summary").forEach(nathean => {
    nathean.parentNode.addEventListener("click", () => {
      setTimeout(() => {
        ipek(0);
      }, 1);
    });
  });
  function parris(tionni) {
    tionni.tonalVariation = tionni.hasOwnProperty("tonalVariation") ? tionni.tonalVariation : "0.25";
    tionni.view = tionni.hasOwnProperty("view") ? tionni.view : tionni.hasOwnProperty("drawType") ? tionni.drawType : "texture";
    if (tionni.selectedTiles) {
      tionni.selectedTiles = Array.isArray(tionni.selectedTiles) ? {} : tionni.selectedTiles;
    }
    tionni.hatchType = tionni.hasOwnProperty("hatchType") ? tionni.hatchType : "model";
    tionni.hatchApp = tionni.hasOwnProperty("hatchApp") ? tionni.hatchType : "autocad";
    tionni.pixelWidth = artx.pro ? 2048 : 1024;
    if (["bump", "normal", "displacement", "metalness", "roughness"].includes(tionni.view) && artx.pro !== true) {
      tionni.view = "texture";
    }
    if (!tionni.concaveJoints) {
      tionni.concaveJoints = false;
    }
    if (!tionni.randCrop) {
      tionni.randCrop = parseInt(Math.random() * 1e5);
    }
    if (!tionni.randEdge) {
      tionni.randEdge = parseInt(Math.random() * 1e5);
    }
    if (!tionni.randTone) {
      tionni.randTone = parseInt(Math.random() * 1e5);
    }
    if (!tionni.randSrc) {
      tionni.randSrc = parseInt(Math.random() * 1e5);
    }
    if (!tionni.randPlacement) {
      tionni.randPlacement = parseInt(Math.random() * 1e5);
    }
    if (!tionni.randFinishCrop) {
      tionni.randFinishCrop = parseInt(Math.random() * 1e5);
    }
    if (!tionni.hasOwnProperty("tileStyles")) {
      tionni.tileStyles = {
        a: {
          brightness: tionni.brightness,
          contrast: tionni.contrast,
          edge: {
            profile: tionni.edgeProfile,
            scale: tionni.edgeScale,
            exclude: [],
            width: 25
          },
          depthBottom: 20,
          depthTop: 255,
          frequency: 0.5,
          hue: tionni.hue,
          imgType: tionni.tileType,
          invert: tionni.tileInvert,
          materialCategory: "brick",
          materialId: tionni.tileID,
          materialWidth: tionni.tileRealWidth,
          placement: "random",
          rotate: tionni.tileRotation,
          saturation: tionni.saturation,
          sourceType: tionni.tileSourceType,
          tint: tionni.tileTint ? tionni.tileTint : "#FFFFFF"
        }
      };
    } else {
      for (const [_0x110d64, _0x2d80df] of Object.entries(tionni.tileStyles)) {
        if (_0x2d80df.designOptions && Array.isArray(_0x2d80df.designOptions)) {
          _0x2d80df.designOptions = {};
        }
        _0x2d80df.placement = _0x2d80df.placement ? _0x2d80df.placement : "random";
        _0x2d80df.frequency = _0x2d80df.frequency ? _0x2d80df.frequency : 0.5;
        if (!tionni.tileStyles[_0x110d64].hasOwnProperty("edge")) {
          tionni.tileStyles[_0x110d64].edge = {
            profile: tionni.edgeProfile,
            scale: tionni.edgeScale,
            exclude: [],
            width: 25
          };
        }
        if (!tionni.tileStyles[_0x110d64].hasOwnProperty("depthBottom")) {
          tionni.tileStyles[_0x110d64].depthBottom = 20;
          tionni.tileStyles[_0x110d64].depthTop = 255;
        }
        if (tionni.tileStyles[_0x110d64].hasOwnProperty("realWidth")) {
          tionni.tileStyles[_0x110d64].materialWidth = tionni.tileStyles[_0x110d64].realWidth;
          delete tionni.tileStyles[_0x110d64].realWidth;
        }
      }
    }
    if (!tionni.hasOwnProperty("diffuseOpacity")) {
      tionni.diffuseOpacity = 0.5;
    }
    tionni.patternId = isNaN(parseInt(tionni.patternId)) ? Object.values(artx.patterns).find(dreyken => dreyken.stringId === tionni.patternId).id : parseInt(tionni.patternId);
    if (tionni.patternId == 0) {
      tionni.patternId = 17;
    }
    if (!tionni.patternName) {
      tionni.patternName = artx.patterns[tionni.patternId] ? artx.patterns[tionni.patternId].name : Object.values(artx.patterns)[0].name;
    }
    for (const [_0x310930, _0x1055d0] of Object.entries(tionni.tileStyles)) {
      if (tionni.tileStyles[_0x310930].brightness == undefined) {
        tionni.tileStyles[_0x310930].brightness = "1";
      }
      if (tionni.tileStyles[_0x310930].contrast == undefined) {
        tionni.tileStyles[_0x310930].contrast = "1";
      }
      if (tionni.tileStyles[_0x310930].hue == undefined) {
        tionni.tileStyles[_0x310930].hue = "0";
      }
      if (tionni.tileStyles[_0x310930].saturation == undefined) {
        tionni.tileStyles[_0x310930].saturation = "1";
      }
      if (tionni.tileStyles[_0x310930].invert == undefined) {
        tionni.tileStyles[_0x310930].invert = false;
      }
      if (!_0x1055d0.hasOwnProperty("profile")) {
        _0x1055d0.profile = {
          reps: 5,
          gap: 0
        };
      }
      if (!_0x1055d0.hasOwnProperty("finish")) {
        _0x1055d0.finish = {
          width: 800
        };
      }
      if (!_0x1055d0.hasOwnProperty("bumpEdges")) {
        _0x1055d0.bumpEdges = true;
      }
      if (!_0x1055d0.hasOwnProperty("bumpImage")) {
        _0x1055d0.bumpImage = "grayscale";
      }
      if (!_0x1055d0.hasOwnProperty("bumpBrightness")) {
        _0x1055d0.bumpBrightness = 1.5;
      }
      if (!_0x1055d0.hasOwnProperty("bumpContrast")) {
        _0x1055d0.bumpContrast = 1.5;
      }
      if (!_0x1055d0.hasOwnProperty("bumpOpacity")) {
        _0x1055d0.bumpOpacity = 1;
      }
      if (!_0x1055d0.hasOwnProperty("bumpInvert")) {
        _0x1055d0.bumpInvert = false;
      }
      if (!_0x1055d0.hasOwnProperty("displacementEdges")) {
        _0x1055d0.displacementEdges = true;
      }
      if (!_0x1055d0.hasOwnProperty("displacementImage")) {
        _0x1055d0.displacementImage = "grayscale";
      }
      if (!_0x1055d0.hasOwnProperty("displacementBrightness")) {
        _0x1055d0.displacementBrightness = 1.5;
      }
      if (!_0x1055d0.hasOwnProperty("displacementContrast")) {
        _0x1055d0.displacementContrast = 1.5;
      }
      if (!_0x1055d0.hasOwnProperty("displacementOpacity")) {
        _0x1055d0.displacementOpacity = 1;
      }
      if (!_0x1055d0.hasOwnProperty("displacementInvert")) {
        _0x1055d0.displacementInvert = false;
      }
      if (!_0x1055d0.hasOwnProperty("roughness")) {
        _0x1055d0.roughness = 0.85;
      }
      if (!_0x1055d0.hasOwnProperty("roughnessImage")) {
        _0x1055d0.roughnessImage = "none";
      }
      if (!_0x1055d0.hasOwnProperty("roughnessBrightness")) {
        _0x1055d0.roughnessBrightness = 1;
      }
      if (!_0x1055d0.hasOwnProperty("roughnessContrast")) {
        _0x1055d0.roughnessContrast = 1;
      }
      if (!_0x1055d0.hasOwnProperty("roughnessOpacity")) {
        _0x1055d0.roughnessOpacity = 1;
      }
      if (!_0x1055d0.hasOwnProperty("roughnessInvert")) {
        _0x1055d0.roughnessInvert = true;
      }
      if (!_0x1055d0.hasOwnProperty("metalness")) {
        _0x1055d0.metalness = 0;
      }
      if (!_0x1055d0.hasOwnProperty("metalnessImage")) {
        _0x1055d0.metalnessImage = "none";
      }
      if (!_0x1055d0.hasOwnProperty("metalnessBrightness")) {
        _0x1055d0.metalnessBrightness = 1;
      }
      if (!_0x1055d0.hasOwnProperty("metalnessContrast")) {
        _0x1055d0.metalnessContrast = 1;
      }
      if (!_0x1055d0.hasOwnProperty("metalnessInvert")) {
        _0x1055d0.metalnessOpacity = 1;
      }
      if (!_0x1055d0.hasOwnProperty("metalnessInvert")) {
        _0x1055d0.metalnessInvert = false;
      }
    }
    if (!tionni.hasOwnProperty("showEdgeDepth")) {
      tionni.showEdgeDepth = true;
    }
    if (!tionni.hasOwnProperty("jointdepthBottom")) {
      tionni.jointdepthBottom = 0;
    }
    delete tionni.drawType;
    return tionni;
  }
  if (get("patternId")) {
    params.patternId = get("patternId");
  }
  params = parris(params);
  for ([key, value] of Object.entries(urlParamsToObject())) {
    if (artx.generalParams.includes(key) && key !== "patternId") {
      params[key] = value;
    } else {
      if (artx.tileParams.includes(key)) {
        params.tileStyles.a[key] = value;
      } else {
        if (key === "params") {}
      }
    }
  }
  function miricale(abisaid) {
    let tamsen = abisaid.includes(",") ? abisaid.split(",") : abisaid.split("+");
    return tamsen;
  }
  artx.pattern = artx.patterns[params.patternId];
  let nyava = get("patterns") ? miricale(get("patterns")) : artx.appdata.patterns ? artx.appdata.patterns : [];
  for (const docie of Object.values(artx.patterns)) {
    if (!artx.appdata.patterns && !get("patterns") || nyava.includes(docie.id) || nyava.includes(docie.id + "")) {
      let itzany = docie.stringId ? docie.stringId : docie.id;
      var ashlii = createHtml({
        tag: "div",
        attributes: {
          id: "pattern-" + docie.id,
          "data-option": docie.id,
          class: "menu-option",
          "data-name": docie.id,
          "data-dim-type": docie.dimType,
          "data-categories": JSON.parse(docie.categories),
          "data-type": "pattern-option"
        },
        children: [{
          tag: "div",
          attributes: {
            class: "menu-option-img-container option-img-container pattern-img",
            style: "background-position:center;background-image:url(" + artx.mediaEndpoint + "/patterns/" + itzany + ".svg);background-size:" + docie.thumbnailSize + ";"
          }
        }, {
          tag: "div",
          text: docie.name,
          attributes: {
            class: "menu-option-title"
          }
        }]
      });
      ashlii.patternData = docie;
      if (docie.pro == true && artx.pro !== true) {
        ashlii.classList.add("pro-feature");
        ashlii.appendChild(createHtml({
          tag: "a",
          class: "pro menu-option-pro",
          href: "/pro",
          target: "_blank",
          text: "Get Pro",
          style: "right: 0px; top: 5px;"
        }));
        ashlii.querySelector(".menu-option-img-container").classList.add("inactive");
        ashlii.querySelector(".menu-option-img-container").style.opacity = 0.5;
      }
      let ryer = docie.id === 17 ? "prepend" : "append";
      insertHtml(ashlii, "#pattern-menu .planet-container", ryer);
      const beesan = document.querySelector(".pattern-category");
      const donaji = document.querySelector("#pattern-search");
      beesan.addEventListener("change", () => {
        donaji.value = "";
        document.querySelector(".reset-pattern-search").style.display = "none";
        const erendida = beesan.value;
        const nygee = document.querySelectorAll("[data-type='pattern-option']");
        nygee.forEach(siena => {
          if (erendida === "all") {
            siena.style.display = "block";
          } else {
            if (siena.dataset.categories) {
              const ayvri = siena.dataset.categories;
              if (ayvri.includes(erendida)) {
                siena.style.display = "block";
              } else {
                siena.style.display = "none";
              }
            }
          }
        });
      });
      donaji.addEventListener("keyup", () => {
        beesan.value = "all";
        const burnham = [...document.querySelectorAll("[data-type='pattern-option']")];
        burnham.forEach(nayaliz => {
          const vetra = nayaliz.querySelector(".menu-option-title").innerText.toLowerCase() ? nayaliz.querySelector(".menu-option-title").innerText.toLowerCase() : "";
          const trixy = nayaliz.dataset.categories.toLowerCase() ? nayaliz.dataset.categories.toLowerCase() : "";
          const shiquan = donaji.value.toLowerCase();
          if (vetra.includes(shiquan) || trixy.includes(shiquan)) {
            nayaliz.style.display = "block";
          } else {
            nayaliz.style.display = "none";
          }
        });
        const toddy = burnham.every(bonnibel => bonnibel.style.display === "none");
        const mattthew = document.querySelector(".reset-pattern-search");
        if (toddy) {
          mattthew.style.display = "flex";
          const teny = document.querySelector("[data-reset-search='pattern-search']");
          teny.addEventListener("click", () => {
            donaji.value = "";
            mattthew.style.display = "none";
            burnham.forEach(anney => anney.style.display = "block");
          });
        } else {
          mattthew.style.display = "none";
        }
      });
    }
  }
  if (artx.pro == true) {
    var elize = true;
  } else {
    var elize = false;
  }
  document.addEventListener("keydown", function (breleigh) {
    if (["Z", "z"].includes(breleigh.key) && includesAny(Object.keys(artx.keysPressed), ["Meta", "Control"]) && !artx.keysPressed.hasOwnProperty("Shift")) {
      breleigh.preventDefault();
      if (artx.historyPosition > 0) {
        --artx.historyPosition;
        artx.loadParams(copy(artx.history[artx.historyPosition]), "undo");
      }
    }
    if (["Z", "z"].includes(breleigh.key) && includesAny(Object.keys(artx.keysPressed), ["Meta", "Control"]) && includesAny(Object.keys(artx.keysPressed), ["Shift"])) {
      breleigh.preventDefault();
      if (artx.history[artx.historyPosition + 1]) {
        ++artx.historyPosition;
        artx.loadParams(copy(artx.history[artx.historyPosition]), "redo");
      }
    }
  });
  if (!artx.appdata && elize) {
    postJson("/app/query", {
      table: "user_materials",
      owned: true,
      auth: true,
      limit: 999
    }).then(function (platt) {
      if (platt.results && platt.results.length) {
        elements("#user-upload-section")[0].style.display = "";
      }
      for (material of platt.results) {
        var johnothan = "u" + material.id;
        try {
          var myrle = material.source_names.length;
        } catch (sumia) {
          var myrle = 0;
        }
        insertHtml(createHtml({
          tag: "div",
          id: "material-" + johnothan,
          class: "menu-option tile-upload-option",
          "data-source-count": myrle,
          "data-name": "user",
          "data-option": johnothan,
          "data-category": "user",
          "data-type": "user",
          children: [{
            tag: "div",
            class: "menu-option-img-container option-img-container",
            style: "background-color:" + material.color + ";background-image:url('" + artx.mediaEndpoint + "/users/" + artx.user.id + "/uploads/thumb-" + johnothan + ".jpg');"
          }, {
            tag: "div",
            class: "menu-option-title",
            text: material.name
          }]
        }), "#material-menu .upload-container");
      }
      keynon();
    });
  }
  function taunya(attila, janara, darzell) {
    var jamial = Object.keys(params.tileStyles).length;
    var kensi = jamial + 1;
    if (kensi < 6 || attila) {
      if (kensi == 5) {
        $("#add-material").addClass("inactive");
      }
      if (attila == undefined) {
        var daeshawna = 1;
        function wintana() {
          var marshaye = ["a", "b", "c", "d", "e", "f", "g"];
          var han = marshaye[daeshawna];
          return $("#material-type-" + han).length ? (daeshawna++, wintana()) : han;
        }
        var aaryanna = wintana();
        params.tileStyles[aaryanna] = JSON.parse(JSON.stringify(params.tileStyles.a));
        params.tileStyles[aaryanna].materialId = "solid";
        params.tileStyles[aaryanna].imgType = "solid";
      } else {
        var aaryanna = attila;
      }
      var shooter = "-" + aaryanna;
      $("#material-template").clone().attr("id", "material-type" + shooter).addClass("additional-material-section material-section").attr("data-style-name", aaryanna).insertBefore("#add-material-container");
      var mudassir = $("#material-type" + shooter);
      let kimberlyn = document.querySelector(".pbr-tray-container").cloneNode(true);
      mudassir.append(kimberlyn);
      $(mudassir).addClass("default-parameter");
      var rebekan = darzell ? darzell : "Material " + aaryanna.toUpperCase();
      $(mudassir).find(".section-header").html(rebekan);
      $(mudassir).find(".material").attr("id", "material-pseudo" + shooter);
      $(mudassir).find(".material").attr("data-value", "solid");
      $(mudassir).find(".adjustments").attr("id", "adjustments" + shooter);
      $(mudassir).find(".frequency").attr("id", "frequency" + shooter);
      $(mudassir).find(".material-placement").attr("id", "material-placement" + shooter);
      $(mudassir).find(".tile-tint").attr("id", "tile-tint" + shooter);
      $(mudassir).find(".tonal-variation").attr("id", "tonal-variation" + shooter);
      $(mudassir).find(".tile-upload-width").attr("id", "tile-upload-width" + shooter);
      $(mudassir).find(".material-rotate").attr("id", "material-rotate" + shooter);
      if (params.tileStyles[aaryanna].randomiseFillAngle && params.tileStyles[aaryanna].randomiseFillAngle == true) {
        $(mudassir).find("[data-param='randomiseFillAngle']").prop("checked", true);
      }
      if (!attila == undefined) {
        $("#material-pseudo" + shooter).attr("data-value", janara.materialId);
        $("#tile-tint" + shooter).attr("value", janara.tint);
        $("#material-placement" + shooter).val(janara.placement);
        myreen("#material-placement" + shooter);
        $("#frequency" + shooter).val(janara.frequency);
      }
      if (params.tileStyles[aaryanna].imgType == "upload") {
        $(mudassir).find(".tile-upload").css("display", "");
        if (params.inches == true) {
          $(mudassir).find(".material-width").val(mmToInches(params.tileStyles.a.materialWidth));
        } else {
          $(mudassir).find(".material-width").val(params.tileStyles.a.materialWidth);
        }
      }
      renida();
      lashayla();
      berline();
      uiListener();
      let ihsan = document.querySelector("#material-type" + shooter);
      let jilliane = ihsan.querySelector(".remove-material");
      jilliane.onclick = function () {
        if ($("#add-material").hasClass("inactive")) {
          $("#add-material").removeClass("inactive");
        }
        delete params.tileStyles[aaryanna];
        ihsan.remove();
        for (const [_0x1070cd, _0x454fa2] of Object.entries(params.selectedTiles)) {
          if (_0x454fa2 == aaryanna) {
            delete params.selectedTiles[_0x1070cd];
          }
        }
        berline();
        predraw("#placement-rules");
      };
      $(mudassir).fadeIn(150);
      keyren();
    }
    return params.tileStyles[aaryanna];
  }
  function myreen(keyon) {
    var meldoy = $(keyon).closest(".additional-material-section");
    $(meldoy).find(".placement-option").css("display", "none");
    var quandre = $(keyon).closest(".additional-material-section").attr("data-style-name");
    if ($(keyon).val() == "defined") {
      if (params.tileStyles[quandre].rowRules == undefined) {
        params.tileStyles[quandre].rowRules = [1, 1, 0, 0, 0, 0];
        params.tileStyles[quandre].columnRules = [1, 1, 0, 0, 0, 0];
      }
      if (params.tileStyles[quandre].rowRuleShift == undefined) {
        params.tileStyles[quandre].rowRuleShift = 0;
        params.tileStyles[quandre].columnRuleShift = 0;
      }
      $(meldoy).find(".rules-container").css("display", "");
    }
    if ($(keyon).val() == "random") {
      $(meldoy).find(".frequency-container").css("display", "");
    }
    if ($(keyon).val() == "selection") {
      $(meldoy).find(".placement-select-container").css("display", "");
    } else {
      berline();
    }
  }
  $("#add-material").click(function () {
    taunya();
    predraw("#rows");
  });
  function edilson(mikeala) {
    var imad = {
      tag: "div",
      class: "menu-option",
      "data-option": mikeala.id,
      "data-seamless": ["1", 1, true, "true"].includes(mikeala.seamless) ? 1 : 0,
      "data-real-width": mikeala.realwidth,
      children: [{
        tag: "div",
        class: "menu-option-img-container option-img-container",
        style: "background-color:" + mikeala.color + ";background-image: url(" + artx.mediaEndpoint + "/materials/" + mikeala.id + "/thumb/" + mikeala.thumbnail + ");"
      }, {
        tag: "div",
        class: "menu-option-title",
        text: mikeala.name
      }, {
        tag: "a",
        href: "",
        target: "_blank",
        children: []
      }]
    };
    if (mikeala.brand && !artx.appdata) {
      imad.children[2].href = mikeala.link ? ugcLink(mikeala.link) : ugcLink(mikeala.brands_website_link);
      imad.children[2].children.push({
        tag: "div",
        class: "none menu-option-brand flex-centred",
        children: [{
          tag: "p",
          style: "opacity:0;position:absolute;",
          text: mikeala.brands_name
        }, {
          tag: "img",
          src: artx.cdn + "" + mikeala.brands_logo + "?s=200"
        }]
      });
    }
    return imad;
  }
  function adyaan(ijana, sosie, sayquan) {
    var shahd = typeof sosie == "string" ? element(sosie) : sosie;
    for (material of ijana.results) {
      if (material.category.toLowerCase() == "joint") {
        shahd = element("#joints-menu ." + material.subcategory.toLowerCase() + "-container");
      }
      insertHtml(createHtml(edilson(material)), shahd);
    }
    if (ijana.more && !shahd.moreButton) {
      var dakisha = createHtml({
        tag: "img",
        src: artx.mediaEndpoint + "/icons/down.svg"
      });
      var milderd = createHtml({
        tag: "div",
        class: "spinner",
        style: "display:none;"
      });
      var clareen = createHtml({
        tag: "div",
        class: "menu-nav",
        children: [dakisha, milderd]
      });
      shahd.moreButton = clareen;
      clareen.onclick = function () {
        dakisha.style.display = "none";
        milderd.style.display = "";
        sayquan.page += 1;
        postJson("/app/query", sayquan).then(function (gillan) {
          milderd.style.display = "none";
          dakisha.style.display = "";
          adyaan(gillan, sosie, sayquan);
        });
      };
      insertHtml(clareen, shahd.parentElement);
    } else if (!ijana.more && shahd.moreButton) {
      shahd.moreButton.remove();
    }
    uiListener();
    keynon();
  }
  function jaire() {
    if (artx.appdata) {
      var vontavius = Array.from(elements("#material-menu-content .orderable-section"));
      vontavius.sort(function (dejiah, relda) {
        var cheisa = dejiah.querySelector(".input-label") ? dejiah.querySelector(".input-label").innerHTML : "Z";
        var fillmore = relda.querySelector(".input-label") ? relda.querySelector(".input-label").innerHTML : "Z";
        if (artx.appdata.collection_order) {
          var laudan = artx.appdata.collection_order.indexOf(cheisa.toLowerCase());
          var jonetta = artx.appdata.collection_order.indexOf(fillmore.toLowerCase());
          if (laudan < 0) {
            laudan = 999;
          }
          if (jonetta < 0) {
            jonetta = 999;
          }
          return laudan - jonetta;
          ;
        } else {
          return cheisa.localeCompare(fillmore, "en", {
            numeric: true,
            sensitivity: "base"
          });
        }
      });
      element("#material-menu-content").append(...vontavius);
      if (artx.appdata.material_order !== "default") {
        for (section of vontavius) {
          var caydon = Array.from(section.querySelectorAll(".menu-option"));
          caydon.sort(function (ursala, cathlina) {
            var corron = ursala.querySelector(".menu-option-title").innerHTML;
            var olivette = cathlina.querySelector(".menu-option-title").innerHTML;
            var sidona = corron.localeCompare(olivette, "en", {
              numeric: true,
              sensitivity: "base"
            });
            return sidona > 0 ? 1 : sidona < 0 ? -1 : 0;
          });
          if (section.querySelector(".planet-container")) {
            section.querySelector(".planet-container").append(...caydon);
          }
        }
      }
      if (artx.appdata.pattern_order !== "default") {
        var keean = Array.from(elements("#pattern-menu .menu-option")).sort(function (essien, leara) {
          var pedroluis = essien.querySelector(".menu-option-title") ? essien.querySelector(".menu-option-title").innerHTML : "Z";
          var jalisse = leara.querySelector(".menu-option-title") ? leara.querySelector(".menu-option-title").innerHTML : "Z";
          pedroluis = pedroluis.replaceAll(" ", "");
          jalisse = jalisse.replaceAll(" ", "");
          var mayukha = pedroluis.localeCompare(jalisse, "en", {
            numeric: false,
            sensitivity: "base"
          });
          return mayukha > 0 ? 1 : mayukha < 0 ? -1 : 0;
        });
        elements("#pattern-menu .planet-container")[0].append(...keean);
      }
    }
  }
  ;
  function dalten() {
    if ($("#chain-icon").hasClass("active")) {
      $("#joints-unlocked").css("display", "none");
      $("#joints-locked").css("display", "");
      $("#joint-size-vertical").prop("disabled", true).val($("#joint-size-horizontal").val());
    } else {
      $("#joints-locked").css("display", "none");
      $("#joints-unlocked").css("display", "");
      $("#joint-size-vertical").prop("disabled", false);
    }
  }
  for (const [_0x4c2a7e, _0x14d2b8] of Object.entries(params.tileStyles)) {
    if (_0x14d2b8.imgType == "upload") {
      var fahed = true;
    } else {
      var fahed = false;
    }
  }
  if (fahed) {
    $("#tile-upload-container").fadeIn(300);
  }
  var jaydaa = document.getElementById("canvas");
  var asa = jaydaa.getContext("2d");
  artx.resetCanvas = function () {
    jaydaa.width = 300;
    jaydaa.height = 150;
    nyjae.style.backgroundImage = "";
    aliza.style.backgroundImage = "";
    asa.fillStyle = "#eee";
    asa.rect(0, 0, 300, 150);
    asa.fill();
    tileTexture();
  };
  function kierre() {
    $("#pattern").attr("data-value", params.patternId);
    $("#rows").val(params.rows);
    $("#rows").attr("data-initial-value", params.rows);
    $("#columns").val(params.columns);
    $("#columns").attr("data-initial-value", params.columns);
    $("#angle").val(params.patternAngle);
    $("#pattern-rotate").attr("data-rotate", params.patternRotateAngle);
    if (params.scene) {
      $("[data-param='scene']").val(params.scene);
    }
    if (params.patternStretchers == undefined) {
      $("#stretchers").val(3);
    } else {
      $("#stretchers").val(params.patternStretchers);
    }
    artx.ui.weaves.value = params.patternAdditionalInteger1;
    if (fahed) {
      $("#material-pseudo").attr("data-value", "solid");
    } else {
      if ($("#material-menu").find("#material-" + params.tileID).length > 0) {
        $("#material-pseudo").attr("data-value", params.tileID);
      } else {
        if ($("#material-menu").find(".menu-option").length > 0) {
          $("#material-menu").find(".menu-option").first().addClass("active");
        } else {
          alert("There are no products available, please add products in Account > Products");
          return;
        }
      }
    }
    if (params.patternRotateAngle == 90 || params.patternRotateAngle == 270) {
      valaria();
    }
    $("#spectrum-2").attr("value", params.tileColour);
    $("#width").val(getDimensionValue(params.tileWidth, params));
    params.tileWidth = getDimensionValue(params.tileWidth, params);
    $("#height").val(getDimensionValue(params.tileHeight, params));
    params.tileHeight = getDimensionValue(params.tileHeight, params);
    $("#min-width").val(getDimensionValue(params.tileMinWidth, params));
    params.tileMinWidth = getDimensionValue(params.tileMinWidth, params);
    $("#min-height").val(getDimensionValue(params.tileMinHeight, params));
    params.tileMinHeight = getDimensionValue(params.tileMinHeight, params);
    $("#joint-size-horizontal").val(getDimensionValue(params.jointWidthHorizontal, params));
    params.jointWidthHorizontal = getDimensionValue(params.jointWidthHorizontal, params);
    $("#joint-size-vertical").val(getDimensionValue(params.jointWidthVertical, params));
    params.jointWidthVertical = getDimensionValue(params.jointWidthVertical, params);
    if (params.jointID == undefined || params.jointID == "solid") {
      $("#joints").attr("data-value", "solid");
      $("#joints").attr("data-item", "joint");
    } else {
      $("#joints").attr("data-value", params.jointID);
    }
    if (params.jointLocked == true) {
      $("#chain-icon").addClass("active");
    } else {
      $("#chain-icon").removeClass("active");
    }
    if (params.jointRotation == true) {
      $("#joints-rotate").hasClass("active");
    }
    if (params.recessJoints == true) {
      $("recessJoints").prop("checked", true);
    }
    $(".additional-material-section").remove();
    if (params.additionalStyles == true) {
      for (const [_0x389076, _0x2c92ce] of Object.entries(params.tileStyles)) {
        if (_0x389076 !== "a") {
          taunya(_0x389076, _0x2c92ce);
        }
      }
    } else if (params.additionalStyles == true && artx.pro == false) {
      $("#materials-removed-banner").fadeIn(300);
    }
    $("#light-intensity").val(params.diffuseOpacity);
    $("#tonal-variation").val(params.tonalVariation);
    if (params.hasOwnProperty("jointBrightness")) {
      element("[data-param='jointBrightness'").value = params.jointBrightness;
    }
    if (params.hasOwnProperty("jointContrast")) {
      element("[data-param='jointContrast'").value = params.jointContrast;
    }
    if (params.hasOwnProperty("jointHue")) {
      element("[data-param='jointHue'").value = params.jointHue;
    }
    if (params.hasOwnProperty("jointSaturation")) {
      element("[data-param='jointSaturation'").value = params.jointSaturation;
    }
    if (params.hasOwnProperty("jointInvert")) {
      element("[data-param='jointInvert'").checked = params.jointInvert;
    }
    if (params.hasOwnProperty("concaveJoints")) {
      element("[data-param='concaveJoints'").checked = params.concaveJoints;
    }
    $("[data-param='shadowOpacity']").val(params.shadowOpacity);
    element("#recessJoints").checked = !(params.recessJoints === false);
    cesily();
    juley();
  }
  kierre();
  function dania() {
    if (artx.patterns[11]) {
      var benhart = artx.ui.weaves.value * 2;
      artx.patterns[11].rowMultiple = benhart;
      artx.patterns[11].columnMultiple = benhart;
    }
  }
  dania();
  function briany() {
    if (artx.patterns.common) {
      var kee = parseInt($("#stretchers").val()) + 1;
      artx.patterns.common.rowMultiple = kee;
    }
  }
  briany();
  $(".setting-input").change(function () {
    var shawda = $(this).attr("name");
    if ($(this).is(":checked")) {
      if ($(this).attr("id") == "border") {
        $("#canvas").addClass("canvas-border");
      }
      if ($(this).attr("id") == "tiletexture") {
        $(".background").css("display", "block");
      }
      document.cookie = shawda + "=true; expires=Friday, 23 November 2029 12:00:00 UTC;path=/";
    } else {
      if ($(this).attr("id") == "border") {
        $("#canvas").removeClass("canvas-border");
      }
      if ($(this).attr("id") == "tiletexture") {
        $(".background").css("display", "none");
      }
      document.cookie = shawda + "=false; expires=Friday, 23 November 2029 12:00:00 UTC;path=/";
    }
  });
  elements(".reset-button").forEach(function (lakeitra) {
    lakeitra.onclick = function () {
      var jahmarion = lakeitra.parentElement.parentElement.querySelector("input");
      jahmarion.value = jahmarion.getAttribute("data-initial-value");
      eulalah(jahmarion);
    };
  });
  $(".additional-toggle").change(function () {
    var duriyah = $(this).attr("value");
    if ($(this).prop("checked")) {
      $("#" + duriyah).css("display", "block");
    } else {
      $("#" + duriyah).css("display", "none");
    }
  });
  $("#spectrum-input").spectrum({
    preferredFormat: "hex",
    containerClassName: "#menu-content-spectrum",
    appendTo: "#menu-content-spectrum",
    flat: true,
    clickoutFiresChange: true,
    chooseText: "OK",
    showInput: true,
    move: function (loranna) {
      loranna.toHexString();
      artx.ui.spectrumPreview.style.backgroundColor = loranna.toHexString();
    }
  });
  insertHtml(artx.ui.spectrumPreview, element(".sp-input-container"));
  let babacar = createHtml({
    tag: "div",
    class: "spectrum-below"
  });
  babacar.appendChild(element(".sp-input-container"));
  if (artx.user.type === "admin") {
    var rosalino = createHtml({
      tag: "div",
      class: "input square-input",
      children: [{
        tag: "img",
        src: artx.cdn + "/icons/eyedropper.svg"
      }]
    });
    rosalino.onclick = function () {
      new EyeDropper().open().then(function (chelby) {
        element(".sp-input").value = chelby.sRGBHex;
        element(".sp-input").dispatchEvent(new Event("change"));
        artx.ui.spectrumPreview.style.backgroundColor = chelby.sRGBHex;
      });
    };
    babacar.appendChild(rosalino);
  }
  babacar.appendChild(element(".sp-button-container"));
  insertHtml(babacar, element(".sp-picker-container"));
  artx.createOgImage = function () {
    return new Promise(function (dhaani) {
      let siwar = document.createElement("canvas");
      let eliabeth = siwar.getContext("2d");
      siwar.width = 1700;
      siwar.height = 1700;
      let vanaya = new Image();
      vanaya.onload = function () {
        eliabeth.drawImage(jaydaa, 0, 0, jaydaa.height > jaydaa.width ? 1700 : 1700 * (jaydaa.width / jaydaa.height), jaydaa.width > jaydaa.height ? 1700 : 1700 * (jaydaa.height / jaydaa.width));
        eliabeth.drawImage(vanaya, 0, 0);
        eliabeth.setLineDash([1, 14]);
        eliabeth.lineWidth = 8;
        eliabeth.lineCap = "round";
        eliabeth.strokeStyle = "#4c72ff";
        eliabeth.strokeRect(900, 300, 1700, 1100);
        eliabeth.rect(150, 0, 400, 1700);
        eliabeth.clip();
        eliabeth.font = "36px 'Space Mono'";
        eliabeth.fillText(artx.nameParts[1], 178, 478);
        eliabeth.fillText(artx.nameParts[0], 178, 878);
        if (artx.brandsUsed.length) {
          let deovian = new Image();
          deovian.onload = function () {
            eliabeth.drawImage(deovian, 180, 951, 50 * (deovian.width / deovian.height), 46);
            dhaani(siwar);
          };
          deovian.src = artx.cdn + artx.materials[params.tileStyles.a.materialId].brands_logo;
          deovian.crossOrigin = "anonymous";
        } else {
          eliabeth.fillText(artx.materials[params.tileStyles.a.materialId].category, 178, 989);
          dhaani(siwar);
        }
      };
      vanaya.crossOrigin = "anonymous";
      vanaya.src = "https://cdn.architextures.org/images/web-app-preview-template.png";
    });
  };
  $(".copy-box").click(function () {
    var amanii = $(this).siblings("input").val();
    copyToClipboard(amanii);
  });
  function pammie() {
    document.querySelector("[data-resolution-container").style.display = ["scene", "hatch"].includes(params.view) ? "none" : "";
  }
  pammie();
  artx.ui.formatSelect.onchange = function () {
    params.view = artx.ui.formatSelect.value;
    pammie();
    artx.loadParams(params);
  };
  function jaibir(kenja) {
    setArtxCookie("3dSetting", kenja);
    element("[data-view='plane']").classList.remove("active");
    element("[data-view='sphere']").classList.remove("active");
    element("[data-view='" + kenja + "']").classList.add("active");
    params.view = kenja;
  }
  elements("[data-view='plane'],[data-view='sphere']").forEach(function (gillis) {
    gillis.onclick = function () {
      params.view = this.getAttribute("data-view");
      cesily();
      predraw("view");
    };
  });
  function cesily() {
    var enam = ["plane", "sphere"].includes(params.view) ? "3d" : params.view;
    artx.ui.viewDropdown.value = enam;
    if (enam !== "3d" && (artx.pro === true || artx.pro === false && enam !== "hatch")) {
      artx.ui.formatSelect.value = enam;
    }
    if (artx.viewTabs.length > 3) {
      artx.ui.viewDropdown.style.display = "";
    }
    document.querySelectorAll(".additional-controls").forEach(function (ayriauna) {
      ayriauna.style.display = "none";
    });
    if (document.getElementById(enam + "-controls")) {
      document.getElementById(enam + "-controls").style.display = "";
    }
    document.querySelectorAll("[data-view]").forEach(function (joddie) {
      joddie.classList.remove("active");
    });
    element("[data-view='" + enam + "']").classList.add("active");
    elements(".view-option").forEach(function (eaden) {
      eaden.style.display = "none";
    });
    var lanelda = 0;
    if (artx.viewTabs.includes(enam)) {
      element("[data-view='" + enam + "']").style.display = "";
      lanelda++;
    }
    artx.viewTabs.forEach(function (xzayvier) {
      var rietta = document.querySelector("[data-view='" + xzayvier + "']");
      if (lanelda < 3 && rietta.style.display === "none") {
        rietta.style.display = "";
        lanelda++;
      }
    });
    pammie();
    if (enam === "3d") {
      jaibir(params.view);
    }
  }
  document.getElementById("view-options").onchange = function () {
    var jadior = document.getElementById("view-options").value;
    params.view = jadior === "3d" ? ["plane", "sphere"].includes(params.view) ? params.view : params.pref3d ? params.pref3d : getArtxCookie("3dSetting") ? getArtxCookie("3dSetting") : "plane" : jadior;
    cesily();
    predraw("view");
  };
  elements(".view-option-button").forEach(function (tandi) {
    tandi.onclick = function () {
      var zaidyn = tandi.getAttribute("data-view");
      params.view = zaidyn === "3d" ? ["plane", "sphere"].includes(params.view) ? params.view : params.pref3d ? params.pref3d : getArtxCookie("3dSetting") ? getArtxCookie("3dSetting") : "plane" : zaidyn;
      cesily();
      predraw("view");
    };
  });
  $("input[type=radio][name=download-size]").change(function () {
    predraw("#spectrum");
    if ($(this).attr("id") == "high-res") {
      params.setRes = true;
    } else {
      params.setRes = false;
    }
  });
  artx.loadParams = function (vandi, _0xa6edee = "#plugin-editor-load") {
    return new Promise(function (aehlani, foua) {
      params = parris(vandi);
      kierre();
      predraw("plugin-editor-load").then(function () {
        aehlani();
      });
    });
  };
  artx["import"] = function (zacharey) {
    artx.textureData = zacharey.data;
    artx.resetCanvas();
    if (zacharey.type == "existing") {
      artx.updateExisting = true;
      artx.textureName = zacharey.data.name;
      $("#single-action-button").html("Update");
    } else {
      artx.updateExisting = false;
      $("#single-action-button").html("Import");
    }
    artx.importedData = zacharey;
    artx.loadParams(zacharey.data.params);
  };
  $("#single-action-button").click(function () {
    showImportMessage().then(function () {
      predraw("#single-action-button");
    });
  });
  function desseray(dreylon) {
    var sumeya = dreylon.split(".");
    if (sumeya.length == 1) {
      return params[sumeya[0]];
    }
    if (sumeya.length == 2) {
      return params[sumeya[0]][sumeya[1]];
    }
    if (sumeya.length == 3) {
      return params[sumeya[0]][sumeya[1]][sumeya[2]];
    }
    if (sumeya.length == 4) {
      return params[sumeya[0]][sumeya[1]][sumeya[2]][sumeya[3]];
    }
    if (sumeya.length == 5) {
      return params[sumeya[0]][sumeya[1]][sumeya[2]][sumeya[3]][sumeya[4]];
    }
  }
  document.querySelector(".sp-choose").onclick = function () {
    var kaliyha = document.getElementById("spectrum-menu");
    var mytien = kaliyha.getAttribute("data-trigger");
    var chett = kaliyha.querySelector(".sp-input").value;
    var lafonya = kaliyha.appParam;
    if (kaliyha.tileName) {
      params.tileStyles[kaliyha.tileName][lafonya] = chett;
    } else {
      params[lafonya] = chett;
    }
    $("#" + mytien).attr("value", chett).find(".pseudo-select-text").html(chett).siblings(".circle-thumb").css("background-color", chett);
    predraw("#hue");
  };
  function renida() {
    $(".menu-toggle").off();
    $(".menu-toggle").click(function () {
      $("#share-link-container").css("display", "none");
      var horst = document.getElementById($(this).attr("data-target"));
      if (!horst) {
        horst = document.createElement("div");
      }
      $(horst).find(".active").removeClass("active");
      $(horst).find("[data-option='" + $(this).attr("data-value") + "']").addClass("active");
      var kaprisha = $(this).attr("id");
      $(horst).attr("data-trigger", kaprisha);
      var annina = document.getElementById(kaprisha);
      horst.trigger = annina;
      horst.tileName = false;
      if (this.hasAttribute("data-param")) {
        horst.appParam = this.getAttribute("data-param");
      }
      if ($(this).closest(".section").hasClass("material-section")) {
        var raydel = $(this).closest(".material-section").attr("data-style-name");
        horst.tileName = raydel;
        $(horst).find(".app-param").attr("data-tile", raydel);
        $(horst).find(".app-param").each(function () {
          var cammron = $(this).attr("data-param");
          var diore = desseray("tileStyles." + raydel + "." + cammron);
          if (diore !== undefined) {
            if (Array.isArray(diore)) {
              if (diore.includes($(this).attr("value"))) {
                $(this).prop("checked", false);
                var leedward = $("[data-target='#" + $(this).attr("id") + "']");
                $(leedward).addClass("active");
              } else {
                $(this).prop("checked", false);
              }
            } else if ($(this).attr("type") == "checkbox") {
              if (diore == true || diore == 1) {
                $(this).prop("checked", true);
              } else {
                $(this).prop("checked", false);
              }
            } else {
              $(this).val(diore);
            }
          }
        });
        artx.ui.pathSelector.innerHTML = artx.paths[params.tileStyles[raydel].profile.pathId] ? artx.paths[params.tileStyles[raydel].profile.pathId].name : "None";
        artx.ui.heightmapSelector.innerHTML = artx.heightmaps[params.tileStyles[raydel].finish.heightmapId] ? artx.heightmaps[params.tileStyles[raydel].finish.heightmapId].name : "None";
      }
      if ($(this).hasClass("define-rules")) {
        var wannell = $(this).closest(".additional-material-section").attr("data-style-name");
        $(horst).attr("data-style-name", wannell);
        if (params.tileStyles[wannell].rowRules !== undefined) {
          $(".hit-miss-parameter[data-type='row']").each(function (renly) {
            if (params.tileStyles[wannell].rowRules[renly] < 1) {
              $(this).val("");
            } else {
              $(this).val(params.tileStyles[wannell].rowRules[renly]);
            }
          });
          $(".hit-miss-parameter[data-type='column']").each(function (ameilia) {
            if (params.tileStyles[wannell].rowRules[ameilia] < 1) {
              $(this).val("");
            } else {
              $(this).val(params.tileStyles[wannell].columnRules[ameilia]);
            }
          });
        } else {
          $(".hit-miss-parameter[data-type='row']").each(function (sheilyn) {
            if (sheilyn < 2) {
              $(this).val(1);
            } else {
              $(this).val("");
            }
          });
          $(".hit-miss-parameter[data-type='column']").each(function (alphones) {
            if (alphones < 2) {
              $(this).val(1);
            } else {
              $(this).val("");
            }
          });
        }
        $("#column-rule-shift").val(params.tileStyles[wannell].columnRuleShift);
        $("#row-rule-shift").val(params.tileStyles[wannell].rowRuleShift);
      }
      if ($(horst).hasClass("active")) {
        $(horst).fadeOut(50);
        $(horst).removeClass("active");
        if ($(this).attr("data-target")) {
          iframeMessage({
            type: "menuClosed",
            data: $(this).attr("data-target")
          });
        }
      } else {
        $(".menu").css("display", "none");
        $(".menu").removeClass("active");
        if ($(horst).css("display") === "block") {
          $(horst).fadeOut(50);
          $(horst).removeClass("active");
        } else {
          $(horst).css("display", "block");
          $(horst).addClass("active");
        }
        positionMenu(this);
        if ($(this).closest(".section").hasClass("material-section")) {
          ipek();
        }
        if ($(this).attr("data-target")) {
          iframeMessage("menuOpened", $(this).attr("data-target"));
        }
      }
      if ($(this).hasClass("spectrum")) {
        var aliayah = $(this).attr("value");
        $("#spectrum-input").spectrum("set", aliayah);
        $("#spectrum-input").spectrum("reflow");
        artx.ui.spectrumPreview.style.backgroundColor = aliayah;
      }
      artx.visibleMenu = horst.classList.contains("active") ? {
        triggerElement: $(this)[0],
        name: horst.hasAttribute("id") ? horst.getAttribute("id") : "",
        menuElement: horst
      } : false;
      updateMapPreviews();
    });
  }
  renida();
  $("#chain-icon").click(function () {
    if ($("#chain-icon").hasClass("active")) {
      $("#chain-icon").removeClass("active");
      dalten();
    } else {
      $("#chain-icon").addClass("active");
      if ($("#joint-size-horizontal").val() == $("#joint-size-vertical").val()) {
        dalten();
      } else {
        dalten();
        predraw("#width");
      }
    }
  });
  function korben() {
    $(".additional-inputs").css("display", "none");
    if (artx.patterns[params.patternId].uiShow) {
      for (selector of artx.patterns[params.patternId].uiShow) {
        document.querySelectorAll(selector).forEach(function (decker) {
          decker.style.display = "";
        });
      }
    }
    $(".default-parameter").css("display", "");
    if (artx.patterns[params.patternId].uiHide) {
      for (selector of artx.patterns[params.patternId].uiHide) {
        document.querySelectorAll(selector).forEach(function (roch) {
          roch.style.display = "none";
        });
      }
    }
    document.getElementById("width-label").innerHTML = artx.patterns[params.patternId].hasOwnProperty("widthLabel") && artx.patterns[params.patternId].widthLabel !== null ? artx.patterns[params.patternId].widthLabel : "Width";
    document.getElementById("height-label").innerHTML = artx.patterns[params.patternId].hasOwnProperty("heightLabel") ? artx.patterns[params.patternId].heightLabel : "Height";
    if (artx.patterns[params.patternId].hasOwnProperty("dimType") && artx.patterns[params.patternId].dimType == "single") {
      document.getElementById("height-input-group").style.display = "none";
      document.getElementById("width-label").innerHTML = artx.patterns[params.patternId].hasOwnProperty("widthLabel") && !artx.patterns[params.patternId].widthLabel ? "Max Width" : "Width";
    }
  }
  function whitten(rinette) {
    var rolley = $(rinette).siblings(".menu-option-title").text();
    var jailani = $(rinette).closest(".menu-option");
    var justys = $(jailani).attr("data-option");
    var miori = "#" + $(rinette).closest(".menu").attr("data-trigger");
    var nadiah = $(rinette).closest(".menu");
    $(nadiah).find(".active").removeClass("active");
    $(rinette).parent().addClass("active");
    if ($("#inches").is(":checked")) {
      var lakeela = mmToInches(inchesToMm($("#width").val()));
      var qirat = mmToInches(inchesToMm($("#height").val()));
    } else {
      var lakeela = $("#width").val();
      var qirat = $("#height").val();
    }
    if (justys == "ashlar") {
      $("#min-width").val(lakeela * 0.5);
      $("#min-height").val(qirat * 0.25);
    }
    $(miori).attr("data-value", $(jailani).attr("data-option"));
    if ($(rinette).closest(".menu").is("#pattern-menu")) {
      params.patternId = parseInt(justys);
      params.patternName = artx.patterns[justys].name;
    }
    if ($(rinette).closest(".menu").is("#joints-menu")) {
      params.jointID = justys;
      params.jointRealWidth = $(jailani).attr("data-real-width");
    }
    if ($(rinette).closest(".menu").is("#material-menu")) {
      var basheer = $(jailani).attr("data-option");
      params.tileStyles[shequanna.tileName].materialId = basheer;
      params.tileStyles[shequanna.tileName].materialCategory = $(jailani).attr("data-category");
      params.tileStyles[shequanna.tileName].imgType = $(jailani).attr("data-type");
      if ($(jailani).attr("data-type") == "upload" || $(jailani).attr("data-type") == "user") {
        if (artx.materials[basheer] && Object.keys(artx.materials[basheer].texture_sources).length > 1 || parseInt($(jailani).attr("data-source-count")) > 1) {
          params.tileStyles[shequanna.tileName].materialWidth = params.inches == true ? inchesToMm(params.tileWidth) : params.tileWidth;
          document.querySelector("[data-style-name='" + shequanna.tileName + "'] .material-width").value = params.tileWidth;
        } else {
          params.tileStyles[shequanna.tileName].materialWidth = 2e3;
          document.querySelector("[data-style-name='" + shequanna.tileName + "'] .material-width").value = params.inches == true ? mmToInches(2e3) : 2e3;
        }
      }
      postJson("/app/material-view", {
        id: basheer,
        page: window.location.href
      });
      var zekeriah = $(miori).closest(".section");
      if ($(rinette).closest(".menu-option").hasClass("tile-upload-option")) {
        $(zekeriah).find(".tile-upload").css("display", "block");
        $(zekeriah).find(".upload-width").attr("data-image", rolley);
      } else {
        $(zekeriah).find(".tile-upload").css("display", "none");
      }
      predraw("#material-input");
    } else {
      predraw(miori);
    }
    $(nadiah).fadeOut(100);
    $(nadiah).removeClass("active");
  }
  function keynon() {
    $(".menu-option-img-container").off();
    $(".menu-option-img-container").click(function () {
      if (!$(this).hasClass("tile-upload-option")) {
        whitten(this);
      }
    });
  }
  keynon();
  document.querySelector("#tile-upload-option").onclick = function () {
    imageUpload().then(function (jailoni) {
      var thanvi = jailoni.name.replace(".jpg", "");
      var thanvi = thanvi.replace(".jpeg", "");
      var thanvi = thanvi.replace(".JPG", "");
      var thanvi = thanvi.replace(".JPEG", "");
      var thanvi = thanvi.replace(".png", "");
      var thanvi = thanvi.replace(".PNG", "");
      var thanvi = thanvi.replace(".webp", "");
      var thanvi = thanvi.replace(".WEBP", "");
      launchSourceEditor(jailoni.image, function (alegra) {
        var shauntasia = "utemp" + generateUid();
        artx.materials[shauntasia] = {
          type: "upload",
          name: thanvi,
          db: "user_materials",
          texture_sources: []
        };
        for (const tulsi of alegra.canvases) {
          var makalla = generateUid();
          artx.materials[shauntasia].texture_sources.push({
            file: makalla,
            texture_map_img: tulsi,
            type: "upload"
          });
        }
        var timonthy = createHtml({
          tag: "div",
          id: "material-" + shauntasia,
          class: "menu-option tile-upload-option",
          "data-name": "User",
          "data-option": shauntasia,
          "data-category": "user",
          "data-type": "user",
          children: [{
            tag: "div",
            class: "menu-option-img-container option-img-container",
            style: "background-image:url('" + alegra.canvases[0].toDataURL() + "')"
          }, {
            tag: "div",
            class: "menu-option-title",
            text: thanvi
          }]
        });
        insertHtml(timonthy, "#material-menu .upload-container", "prepend");
        elements("#user-upload-section")[0].style.display = "";
        keynon();
        var brooksley = [];
        var valhalla = [];
        for (const jacek of alegra.canvases) {
          var kovi = generateUid() + ".jpg";
          brooksley.push(kovi);
          valhalla.push({
            path: "users/" + artx.user.id + "/uploads/" + kovi,
            canvas: jacek
          });
        }
        checkStorageForUser().then(function (deshaya) {
          if (!deshaya) {
            showInfoMessage("Storage Full", "The uploaded material is available in the editor but won’t be saved to your account.");
            return;
          }
          postJson("/app/query", {
            table: "user_materials",
            action: "insert",
            values: {
              name: thanvi,
              source_names: JSON.stringify(brooksley),
              user: artx.user.id,
              color: averageColor(alegra.canvases[0])
            },
            auth: true
          }).then(function (joanell) {
            if (joanell.status == "success") {
              var emylah = "u" + joanell.id;
              timonthy.setAttribute("data-option", emylah);
              artx.materials[emylah] = artx.materials[shauntasia];
              for (var doreene of Object.values(params.tileStyles)) {
                if (typeof doreene.materialId == "string" && doreene.materialId.includes(shauntasia)) {
                  doreene.materialId = emylah;
                }
              }
              resizeImage(alegra.canvases[0].toDataURL(), {
                width: 400,
                height: 400,
                quality: 0.5,
                format: "jpg"
              }).then(function (gianessa) {
                var dalayni = createBlob(gianessa);
                saveFile("users/" + artx.user.id + "/uploads/thumb-" + emylah + ".jpg", dalayni);
              });
              valhalla.forEach(function (capone) {
                var kajol = createBlob(capone.canvas.toDataURL("image/jpeg", 0.6));
                saveFile(capone.path, kajol);
              });
            }
          });
        });
      });
    });
  };
  function berline() {
    $("#svg-canvas").fadeOut(300);
    $(".placement-select").removeClass("active");
  }
  function kirstine() {
    setTimeout(function () {
      $("#svg-canvas path").off();
      $("#svg-canvas path").hover(function () {
        $(this).css("fill", "rgba(76, 114, 255, 0.2)");
      }, function () {
        $(this).css("fill", "rgba(76, 114, 255, 0.01)");
      });
      $("#svg-canvas path").click(function () {
        var maricelis = parseInt($(this).attr("data-row"));
        var betzabe = parseInt($(this).attr("data-column"));
        var neomie = $(this).closest("svg").attr("data-trigger");
        if ($(this).hasClass("active")) {
          $("path[data-row='" + maricelis + "'][data-column='" + betzabe + "']").removeClass("active").css("stroke-width", "2px");
          delete params.selectedTiles[maricelis + "," + betzabe];
        } else {
          $("path[data-row='" + maricelis + "'][data-column='" + betzabe + "']").addClass("active").css("stroke-width", "5px");
          params.selectedTiles[maricelis + "," + betzabe] = neomie;
        }
        params.selectedTile = [maricelis, betzabe];
        predraw("#tile-material-selector");
      });
    }, 1e3);
  }
  function lashayla() {
    $(".placement-select").off();
    $(".placement-select").click(function () {
      var teaunna = $(this).closest(".additional-material-section").attr("data-style-name");
      $("#svg-canvas").attr("data-trigger", teaunna);
      if ($(this).hasClass("active")) {
        berline();
      } else {
        berline();
        $(this).addClass("active");
        $("#svg-canvas").fadeIn(150);
        predraw("#hue");
      }
      kirstine();
    });
  }
  function ha(jayvyn) {
    triggerEl = typeof jayvyn === "string" && document.querySelector(jayvyn) ? document.querySelector(jayvyn) : typeof jayvyn === "string" ? document.createElement("div") : jayvyn;
    params.trigger = triggerEl.hasAttribute("id") ? triggerEl.id : triggerEl.hasAttribute("data-param") ? triggerEl.getAttribute("data-param") : jayvyn;
    params.regen = !!(triggerEl.hasAttribute("data-regen") && triggerEl.getAttribute("data-regen") == "true");
    params.view = $(".placement-select").hasClass("active") ? "svg" : params.view;
    params.rows = parseInt($("#rows").val());
    params.columns = parseInt($("#columns").val());
    params.inches = !!$("#inches").is(":checked");
    params.patternAngle = parseInt($("#angle").val());
    params.patternRotateAngle = parseInt($("#pattern-rotate").attr("data-rotate"));
    params.patternAdditionalInteger1 = parseInt($("#pattern-section").find(".pattern-additional-integer-1").val());
    params.patternStretchers = parseInt($("#stretchers").val());
    params.tileID = params.tileStyles.a.materialId;
    params.tileUploadWidth = $("#inches").is(":checked") ? inchesToMm($("#tile-upload-width").val()) : parseInt($("#tile-upload-width").val());
    params.tileColour = $("#spectrum-2").attr("value");
    params.tileMinWidth = $("#min-width").val();
    params.tileMinHeight = $("#min-height").val();
    params.additionalStyles = !!document.getElementsByClassName("additional-material-section").length;
    params.selectedTiles = params.selectedTiles == undefined ? {} : params.selectedTiles;
    params.lineThickness = $("#line-thickness").val();
    params.jointWidthHorizontal = $("#joint-size-horizontal").val();
    params.jointWidthVertical = $("#joint-size-vertical").val();
    params.jointLocked = !!$("#chain-icon").hasClass("active");
    params.jointRotation = !!$("#joints-rotate").hasClass("active");
    params.recessJoints = !!$("#recessJoints").is(":checked");
    params.setRes = !!$("#high-res").is(":checked");
    params.showPatternHatch = !!$("#show-pattern-hatch").is(":checked");
    params.showSurfaceProfile = !!$("#show-profile").is(":checked");
    params.svgStyleIndex = $("#svg-canvas").attr("data-trigger");
    params.hatchType = $("input[name=\"hatch-type\"]:checked").val();
    params.hatchApp = $("input[name=\"hatch-app\"]:checked").val();
    params.hatchJoints = !!$("#hatch-joints").is(":checked");
    artx.pattern = artx.patterns[params.patternId];
  }
  $(".rule-parameter").change(function () {
    var marlissa = $(this).closest(".menu").attr("data-style-name");
    params.tileStyles[marlissa].rowRules = [];
    params.tileStyles[marlissa].columnRules = [];
    $(".hit-miss-parameter").each(function () {
      if ($(this).val()) {
        var crystalyn = parseInt($(this).val());
        if (crystalyn < 0) {
          var crystalyn = 0;
        }
      } else {
        var crystalyn = 0;
      }
      if ($(this).attr("data-type") == "row") {
        params.tileStyles[marlissa].rowRules.push(crystalyn);
      }
      if ($(this).attr("data-type") == "column") {
        params.tileStyles[marlissa].columnRules.push(crystalyn);
      }
    });
    params.tileStyles[marlissa].columnRuleShift = parseInt($("#column-rule-shift").val());
    params.tileStyles[marlissa].rowRuleShift = parseInt($("#row-rule-shift").val());
    predraw("#placement-rules");
  });
  var lyneah = elements(".js-incrementor");
  lyneah.forEach(function (fyona) {
    fyona.onclick = function () {
      var roshod = element(fyona.getAttribute("data-target"));
      roshod.value = fyona.getAttribute("data-value") === "add" ? parseInt(roshod.value) + 1 : parseInt(roshod.value) - 1;
      roshod.dispatchEvent(new Event("change"));
    };
  });
  let yahdira = document.querySelector("[data-edge-types]");
  for ([type, object] of Object.entries(artx.edges)) {
    let xiah = createHtml({
      tag: "option",
      value: type,
      text: object.name
    });
    if (!object.active) {
      xiah.style.display = "none";
    }
    yahdira.appendChild(xiah);
  }
  function odelia() {
    $(".edges").each(function () {
      var quinlyn = $(this).closest(".material-section").attr("data-style-name");
      var shiryl = params.tileStyles[quinlyn].edge.profile;
      if (artx.edges[shiryl]) {
        var edwar = artx.edges[shiryl].name;
        $(this).find(".pseudo-select-text").html(edwar);
      }
    });
  }
  function juley() {
    $(".pseudo-proxy").each(function (aranya) {
      var kaylaanne = this.querySelector(".circle-thumb");
      var jaylynne = this.querySelector(".pseudo-select-text");
      if (this.hasAttribute("data-item") && this.getAttribute("data-item") == "pattern" && artx.patterns[params.patternId]) {
        jaylynne.innerHTML = artx.patterns[params.patternId].name;
        kaylaanne.style.backgroundImage = artx.patterns[params.patternId].stringId ? "url(" + artx.mediaEndpoint + "/patterns/" + artx.patterns[params.patternId].stringId + ".svg)" : "url(" + artx.mediaEndpoint + "/patterns/" + artx.patterns[params.patternId].id + ".svg)";
        kaylaanne.style.backgroundSize = parseInt(artx.patterns[params.patternId].thumbnailSize) * 2 + "%";
      }
      if (this.hasAttribute("data-target") && (this.getAttribute("data-target") == "material-menu" || this.getAttribute("data-target") == "joints-menu")) {
        if (this.getAttribute("data-target") == "material-menu") {
          var lucretia = this.closest(".material-section").getAttribute("data-style-name");
          var kenija = params.tileStyles[lucretia].materialId;
        } else {
          if (this.getAttribute("data-target") == "joints-menu") {
            var kenija = params.jointID;
          }
        }
        if (artx.materials && artx.materials[kenija]) {
          var antionette = artx.materials[kenija].db == "user_materials" ? artx.mediaEndpoint + "/users/" + artx.materials[kenija].user + "/uploads/thumb-" + kenija + ".jpg" : artx.mediaEndpoint + "/materials/" + kenija + "/thumb/" + artx.materials[kenija].thumbnail;
          var jevan = artx.materials[kenija].name;
          jaylynne.innerHTML = jevan;
          kaylaanne.style.backgroundImage = "url(" + antionette + ")";
          kaylaanne.style.backgroundSize = "220%";
        }
        if (kenija == "solid") {
          jaylynne.innerHTML = "Solid Fill";
          kaylaanne.style.backgroundImage = "url(/img/paint.png?v=3)";
          kaylaanne.style.backgroundSize = "20px";
          kaylaanne.style.backgroundRepeat = "no-repeat";
        }
      }
    });
    document.querySelectorAll(".spectrum").forEach(function (izzat) {
      let heydan = izzat.getAttribute("data-param");
      let kazen = params[heydan];
      if (heydan === "tint" && izzat.closest(".material-section")) {
        let orenthia = izzat.closest(".material-section").getAttribute("data-style-name");
        kazen = params.tileStyles[orenthia].tint;
      }
      izzat.setAttribute("value", kazen);
      izzat.querySelector(".circle-thumb").style.backgroundColor = kazen;
      izzat.querySelector(".pseudo-select-text").innerHTML = kazen;
    });
    odelia();
  }
  function cevon() {
    var gladie = $("#inches").is(":checked") ? inchesToMm($("#width").val()) : parseInt($("#width").val());
    var azaleah = $("#inches").is(":checked") ? inchesToMm($("#min-width").val()) : parseInt($("#min-width").val());
    var irelynne = $("#inches").is(":checked") ? inchesToMm($("#height").val()) : parseInt($("#height").val());
    var dairion = $("#inches").is(":checked") ? inchesToMm($("#min-height").val()) : parseInt($("#min-height").val());
    if (dairion > irelynne) {
      if (inches) {
        $("#min-height").val($("#height").val());
      } else {
        $("#min-height").val(irelynne);
      }
    }
    if (azaleah > gladie) {
      if (inches) {
        $("#min-width").val($("#width").val());
      } else {
        $("#min-width").val(gladie);
      }
    }
  }
  function shaleesa() {
    if (params.patternId == 17) {
      $("#material-menu").find(".menu-option[data-seamless='false'], menu-option[data-seamless='null'], .menu-option[data-seamless='0']").addClass("inactive");
      $("#hatch-option").addClass("inactive");
    } else {
      $("#material-menu").find(".menu-option[data-seamless='false'], menu-option[data-seamless='null'], .menu-option[data-seamless='0']").removeClass("inactive");
      $("#hatch-option").removeClass("inactive");
    }
    if (params.tileStyles.a.imgType === "upload" || params.tileStyles.a.imgType === "solid" || artx.materials.hasOwnProperty(params.tileStyles.a.materialId) && [0, "0"].includes(artx.materials[params.tileStyles.a.materialId].seamless) || $("#hatch-option").hasClass("active")) {
      $("#pattern-17").addClass("inactive");
    } else {
      $("#pattern-17").removeClass("inactive");
    }
  }
  function neelan() {
    document.querySelectorAll(".design-option").forEach(function (sharella) {
      sharella.onchange = function (mandisa) {
        mandisa.preventDefault();
        var odyssey = sharella.selectedOptions[0];
        var leslieanne = odyssey.designOption;
        artx.recentDesignOption = leslieanne;
        if (odyssey.incompatibleNames) {
          let jeronimo = odyssey.incompatibleNames[0].name + " " + odyssey.incompatibleNames[0].categorySingular + " is not compatible with this configuration and will be replaced";
          pseudoConfirm(jeronimo, false).then(function () {
            aleighna();
          });
        } else {
          aleighna();
        }
        function aleighna() {
          var altheria = sharella.closest(".material-section").getAttribute("data-style-name");
          if (!params.tileStyles[altheria].designOptions) {
            params.tileStyles[altheria].designOptions = {};
          }
          for ([optionId, option] of Object.entries(params.tileStyles[altheria].designOptions)) {
            if (option.categoryId == leslieanne.categoryId) {
              delete params.tileStyles[altheria].designOptions[optionId];
            }
          }
          params.tileStyles[altheria].designOptions[leslieanne.id] = leslieanne;
          keygan();
          predraw(sharella);
        }
      };
    });
  }
  function axten() {
    for (const [_0x266ec6, _0x5546e4] of Object.entries(params.tileStyles)) {
      var agneta = document.querySelector("[data-style-name='" + _0x266ec6 + "']");
      var kamberlyn = artx.materials[_0x5546e4.materialId];
      if (kamberlyn && _0x5546e4.imgType !== "upload" && _0x5546e4.imgType !== "solid" && _0x5546e4.imgType !== "user" && kamberlyn.brand > 0 && artx.materials[_0x5546e4.materialId].params && !artx.appdata) {
        document.querySelectorAll(".material-appearance-options").forEach(function (kennyth) {
          kennyth.style.display = "none";
        });
        document.querySelectorAll(".show-appearance-options").forEach(function (kasiya) {
          kasiya.style.display = "";
        });
        agneta.querySelector(".manufacturer-label-img").src = artx.cdn + "" + kamberlyn.brands_logo + "?s=200";
        agneta.querySelector(".manufacturer-label-link").style.display = "";
      } else {
        document.querySelectorAll(".material-appearance-options").forEach(function (jesusalberto) {
          jesusalberto.style.display = "";
        });
        document.querySelectorAll(".show-appearance-options").forEach(function (antwuan) {
          antwuan.style.display = "none";
        });
        agneta.querySelector(".design-options-container").innerHTML = "";
        agneta.querySelector(".design-options-container").style.display = "none";
        agneta.querySelector(".manufacturer-label-link").style.display = "none";
      }
    }
  }
  function hatty() {
    for (let derean of Object.values(params.tileStyles)) {
      if (derean.designOptions) {
        for (var markeice of Object.values(derean.designOptions)) {
          var mairlyn = derean.materialId;
          if (markeice.incompatibles) {
            var tyannia = [];
            for (var obaloluwa of markeice.incompatibles) {
              tyannia.push(obaloluwa.option);
            }
            markeice.incompatibles.forEach(function (michiele) {
              if (!artx.recentDesignOption || artx.hasOwnProperty("recentDesignOption") && artx.recentDesignOption.id !== michiele.option) {
                if (!michiele.when_material || michiele.when_material && michiele.when_material == mairlyn) {
                  if (artx.materials[mairlyn] && artx.materials[mairlyn].designOptions && artx.materials[mairlyn].designOptions[michiele.option]) {
                    var dorin = artx.materials[mairlyn].designOptions;
                    var besty = dorin[michiele.option];
                    optionElement = element("[data-design-option='" + michiele.option + "']");
                    if (!optionElement.madeIncompatible) {
                      if (!optionElement.incompatibleNames) {
                        optionElement.incompatibleNames = [];
                      }
                      optionElement.incompatibleNames.push({
                        name: markeice.name,
                        categoryName: markeice.categoryName,
                        categorySingular: markeice.categorySingular
                      });
                      optionElement.innerHTML = optionElement.innerHTML + " *";
                      var timothea = michiele.when_material ? "Not compatible with " + markeice.name + " " + markeice.categorySingular + " for " + artx.materials[michiele.when_material].name : "Not compatible with " + markeice.name + " " + markeice.categorySingular;
                      optionElement.setAttribute("title", timothea);
                      if (optionElement.selected) {
                        delete derean.designOptions[michiele.option];
                        optionElement.selected = false;
                        for (let parson of Object.values(dorin)) {
                          if (parson.categoryId == besty.categoryId && !tyannia.includes(parson.id)) {
                            element("[data-design-option='" + parson.id + "']").selected = true;
                            derean.designOptions[parson.id] = parson;
                            hatty();
                            break;
                          }
                        }
                      }
                      optionElement.madeIncompatible = true;
                    }
                  }
                }
              }
            });
          }
        }
      }
    }
  }
  function keygan() {
    for (const [_0x16cbc8, _0x43f164] of Object.entries(params.tileStyles)) {
      var veanna = document.querySelector("[data-style-name='" + _0x16cbc8 + "']");
      var heike = artx.materials[_0x43f164.materialId] ? artx.materials[_0x43f164.materialId] : {
        brand: 0
      };
      defaultMaterial = false;
      if (veanna.classList.contains("default-material")) {
        defaultMaterial = true;
      }
      if (_0x43f164.imgType !== "upload" && _0x43f164.imgType !== "solid" && _0x43f164.imgType !== "user" && heike.brand > 0) {
        veanna.querySelector(".manufacturer-label-img").src = artx.cdn + "" + heike.brands_logo + "?s=200";
        veanna.querySelector(".manufacturer-label").style.display = "";
        if (veanna.querySelector(".manufacturer-label-link")) {
          veanna.querySelector(".manufacturer-label-link").href = heike.link ? checkHttps(heike.link) : checkHttps(heike.brands_website_link);
        }
        params.tonalVariation = "0";
        veanna.querySelector(".design-options-container").innerHTML = "";
        if (heike.designOptions || artx.patternDesignOptions) {
          veanna.querySelector(".design-options-container").style.display = "";
          var foyster = _0x16cbc8 == "a" ? Object.assign({}, heike.designOptions, artx.patternDesignOptions) : Object.assign({}, heike.designOptions);
          if (_0x43f164.designOptions) {
            for (const tayleigh of Object.keys(_0x43f164.designOptions)) {
              if (!Object.keys(foyster).includes(tayleigh)) {
                delete _0x43f164.designOptions[tayleigh];
              }
            }
          }
          var asenith = [];
          if (_0x43f164.designOptions) {
            for (const [_0x217a1e, _0x180720] of Object.entries(_0x43f164.designOptions)) {
              asenith.push(_0x180720.categoryId);
            }
          }
          for (const [_0xfa106d, _0x2f62db] of Object.entries(foyster)) {
            if (_0x2f62db.isDefault && !asenith.includes(_0x2f62db.categoryId)) {
              if (!_0x43f164.designOptions) {
                _0x43f164.designOptions = {};
              }
              _0x43f164.designOptions[_0xfa106d] = _0x2f62db;
            }
          }
          designOptionElements = [];
          var lakyn = {};
          for (const [_0x498a29, _0x3fa75a] of Object.entries(foyster)) {
            if (!lakyn.hasOwnProperty(_0x3fa75a.categoryName)) {
              lakyn[_0x3fa75a.categoryName] = createHtml({
                tag: "div",
                class: "input-group",
                children: [{
                  tag: "div",
                  class: "input-label",
                  text: _0x3fa75a.categorySingular
                }, {
                  tag: "select",
                  "data-design-option-cat": _0x3fa75a.categoryId,
                  "data-param": "designOption",
                  "data-brand": heike.brand,
                  class: "design-option",
                  children: [{
                    tag: "option",
                    text: _0x3fa75a.categorySingular,
                    selected: "",
                    disabled: ""
                  }]
                }]
              });
              insertHtml(lakyn[_0x3fa75a.categoryName], veanna.querySelector(".design-options-container"));
            }
            let jantzen = createHtml({
              tag: "option",
              "data-design-option": _0x3fa75a.id,
              value: _0x3fa75a.name,
              text: _0x3fa75a.name
            });
            if (_0x43f164.designOptions && Object.keys(_0x43f164.designOptions).includes(_0x3fa75a.id + "")) {
              jantzen.selected = "selected";
            }
            jantzen.designOption = _0x3fa75a;
            designOptionElements.push(jantzen);
          }
          designOptionElements.sort(function (hether, dolorse) {
            var aleeza = hether.designOption.name.localeCompare(dolorse.designOption.name, "en", {
              numeric: true,
              sensitivity: "base"
            });
            return aleeza > 0 ? 1 : aleeza < 0 ? -1 : 0;
          });
          for (var errion of designOptionElements) {
            lakyn[errion.designOption.categoryName].querySelector("select").appendChild(errion);
          }
        }
        neelan();
      } else {
        if (_0x43f164.designOptions) {
          delete _0x43f164.designOptions;
        }
        if (defaultMaterial) {}
      }
    }
    var rokiatou = params.tileStyles[Object.keys(params.tileStyles)[0]];
    if (rokiatou.designOptions) {
      for (option of Object.values(rokiatou.designOptions)) {
        if (option.params.hasOwnProperty("secondMaterial") && Object.keys(params.tileStyles).length < 2) {
          var remika = taunya(null, null, "Second Colour");
          remika.addedViaDesignOption = true;
        }
        if (option.params.hasOwnProperty("singleMaterial")) {
          Object.keys(params.tileStyles).forEach(function (bergin, kiernen) {
            if (kiernen !== 0) {
              delete params.tileStyles[bergin];
              removeHtml("#material-type-" + bergin);
            }
          });
        }
      }
    }
  }
  artx.draw = function (_0x28408d = copy(params)) {
    artx.drawSettings = {
      params: _0x28408d,
      tileTexture: false,
      returnImg: true
    };
    return new Promise(function (cintya, demaya) {
      predraw("drawParams").then(function (latrinia) {
        cintya(latrinia);
      });
    });
  };
  let ayaat = 0;
  predraw = function (crissangel) {
    let elyanna = artx.drawSettings && artx.drawSettings.hasOwnProperty("params") ? artx.drawSettings.params : params;
    if (!artx.patterns.hasOwnProperty(elyanna.patternId)) {
      query({
        table: "patterns",
        id: elyanna.patternId
      }).then(function (loycie) {
        if (loycie.results.length) {
          let akashdeep = loycie.results[0];
          artx.patterns[akashdeep.id] = akashdeep;
          predraw(crissangel);
        } else {
          errorMessage("Pattern couldn't be loaded");
          return;
        }
      });
      return;
    }
    iframeMessage("drawStarted");
    $(".add-button").attr("data-used", "false");
    $(".add-button").attr("data-is-saved", "false");
    if (ayaat !== 0) {
      document.getElementById("save-button").dataset.userSave = "false";
    }
    ayaat++;
    if (!["redo", "undo"].includes(crissangel)) {
      ha(crissangel);
      setPatternMultiples();
      cevon();
      levanna();
      ha(crissangel);
    }
    window.scrollTo(0, 0);
    showSpinner();
    if (!artx.history) {
      artx.history = [];
      artx.historyPosition = 0;
    }
    if (!["undo", "redo"].includes(crissangel)) {
      artx.history.splice(artx.historyPosition + 1, artx.history.length, copy(params));
      if (artx.history.length > 20) {
        artx.history.shift;
      }
      artx.historyPosition = artx.history.length - 1;
    }
    function tyge() {
      $.ajax({
        method: "POST",
        url: "/app/node-canvas",
        data: JSON.stringify(elyanna),
        dataType: "json"
      }).done(function (domina) {
        if (domina == true) {
          var trudi = new Image();
          trudi.src = "data:image/jpeg;base64," + domina.imgData;
          hideSpinner();
          jaydaa.width = trudi.width;
          jaydaa.height = trudi.height;
          asa.drawImage(trudi, 0, 0);
          tileTexture();
          if (crissangel === "#high-res") {
            setTimeout(function () {
              downloadTexture("canvas", 0.95);
            }, 500);
          }
        }
      });
    }
    var natalis = elyanna.patternId;
    hatty();
    artx.materialsUsed = [];
    artx.pathsUsed = [];
    artx.heightmapsUsed = [];
    artx.brandsUsed = [];
    function wilmer() {
      let kishia = [];
      for (style of Object.values(elyanna.tileStyles)) {
        if (style.hasOwnProperty("designOptions")) {
          for (designOption of Object.values(style.designOptions)) {
            if (designOption.hasOwnProperty("params") && designOption.params.hasOwnProperty("patternId")) {
              natalis = designOption.params.patternId;
            }
            if (designOption.hasOwnProperty("params") && designOption.params.hasOwnProperty("surfaces")) {
              designOption.params.surfaces.forEach(function (aerin) {
                if (aerin.hasOwnProperty("pathId")) {
                  artx.pathsUsed.push(aerin.pathId + "");
                }
              });
            }
            if (designOption.hasOwnProperty("params") && designOption.params.hasOwnProperty("finish") && designOption.params.finish.heightmapId) {
              artx.heightmapsUsed.push(designOption.params.finish.heightmapId + "");
            }
            if (designOption.hasOwnProperty("params") && designOption.params.hasOwnProperty("profile") && designOption.params.finish.pathId) {
              artx.heightmapsUsed.push(designOption.params.finish.pathId + "");
            }
          }
        }
        if (style.surfaces) {
          style.surfaces.forEach(function (daneya) {
            if (daneya.hasOwnProperty("pathId")) {
              artx.pathsUsed.push(daneya.pathId);
            }
          });
        }
        if (style.hasOwnProperty("profile") && style.profile.hasOwnProperty("pathId")) {
          artx.pathsUsed.push(style.profile.pathId + "");
        }
        if (style.hasOwnProperty("finish") && style.finish.hasOwnProperty("heightmapId")) {
          artx.heightmapsUsed.push(style.finish.heightmapId + "");
        }
        if (style.materialId && !artx.materialsUsed.includes(style.materialId + "")) {
          artx.materialsUsed.push(style.materialId + "");
        }
      }
      if (artx.pathsUsed.length && !includesAll(Object.keys(artx.paths), artx.pathsUsed)) {
        kishia.push(new Promise((antwonne, gynesis) => {
          query({
            table: "paths",
            where: [["id", "in", artx.pathsUsed.join(",")]]
          }).then(function (andrean) {
            andrean.results.forEach(function (lamiracle) {
              artx.paths[lamiracle.id] = lamiracle;
            });
            antwonne();
          });
        }));
      }
      if (artx.heightmapsUsed.length && !includesAll(Object.keys(artx.heightmaps), artx.heightmapsUsed)) {
        kishia.push(new Promise((flecia, duffie) => {
          query({
            table: "heightmaps",
            where: [["id", "in", artx.heightmapsUsed.join(",")]]
          }).then(function (kisia) {
            kisia.results.forEach(function (sibley) {
              sibley.imageElement = new Image();
              sibley.imageElement.onload = function () {
                flecia();
              };
              sibley.imageElement.src = artx.cdn + sibley.image;
              sibley.imageElement.crossOrigin = "anonymous";
              artx.heightmaps[sibley.id] = sibley;
            });
          });
        }));
      }
      if (!artx.patterns[natalis] || artx.patterns[natalis].drawMethod == "definition" && !artx.patterns[natalis].hasOwnProperty("definition")) {
        kishia.push(new Promise((jind, hayzley) => {
          postJson("/app/query", {
            table: "patterns",
            where: [["id", "=", natalis]]
          }).then(function (kendrell) {
            if (!artx.patterns[natalis]) {
              artx.patterns[natalis] = kendrell.results[0];
              artx.patterns[natalis].definition = kendrell.results[0].definition;
              artx.patterns[natalis].columnMultiple = 1;
              artx.patterns[natalis].rowMultiple = 2;
              artx.patterns[natalis].dimType = "multi";
            } else {
              artx.patterns[natalis].definition = kendrell.results[0].definition;
            }
            jind();
          });
        }));
      }
      if (!artx.scenes) {
        artx.scenes = {};
      }
      if (params.scene && !artx.scenes.hasOwnProperty(params.scene)) {
        kishia.push(new Promise((bodhin, brucha) => {
          postJson("/app/query", {
            table: "scenes",
            where: [["id", "=", params.scene]]
          }).then(function (shaketha) {
            if (shaketha.results.length) {
              let yaisha = shaketha.results[0];
              artx.scenes[params.scene] = yaisha;
              izayuh(yaisha.params);
            }
            bodhin();
          });
        }));
      }
      var genesia = false;
      var bomani = [];
      var zoriah = [];
      for (const alshon of Object.values(elyanna.tileStyles)) {
        if (alshon.imgType !== "solid" && alshon.imgType !== "upload" && alshon.imgType !== "user" && !artx.materials[alshon.materialId]) {
          bomani.push(alshon.materialId);
        }
        if (alshon.imgType == "user" && !artx.materials[alshon.materialId]) {
          zoriah.push(parseInt(alshon.materialId.replace("u", "")));
        }
      }
      if (elyanna.jointID !== "solid" && !artx.materials[params.jointID]) {
        bomani.push(elyanna.jointID);
      }
      if (bomani.length) {
        var genesia = new Promise((arati, kinnidy) => {
          postJson("/app/query", {
            table: "protextures",
            columns: ["id", "name", "source_names", "source_data", "realwidth", "brand", "category", "seamless", "params", "patterns", "collection", "thumbnail", "sku", "link", "color", "texture_sources"],
            where: [["id", "in", bomani.join(",")]],
            join: {
              table: "brands",
              columns: ["name", "website_link", "logo"],
              on: ["brand", "=", "id"]
            }
          }).then(function (jayleana) {
            designOptionPromises = [];
            jayleana.results.forEach(function (iralynn) {
              iralynn.db = "protextures";
              if (!iralynn.source_data) {
                iralynn.source_data = {};
              }
              if (iralynn.texture_sources) {
                let niesa = new Promise((carlee, shantanae) => {
                  query({
                    table: "texture_sources",
                    where: [["id", "in", iralynn.texture_sources]]
                  }).then(function (khadarius) {
                    iralynn.texture_sources = khadarius.results;
                    carlee();
                  });
                });
                kishia.push(niesa);
              } else {
                iralynn.texture_sources = [];
                iralynn.source_names.forEach(function (aashray) {
                  let jaliesa = {
                    width_mm: iralynn.realwidth,
                    seamless: iralynn.seamless,
                    texture_map: "/materials/" + iralynn.id + "/original/" + aashray
                  };
                  if (iralynn.source_data.hasOwnProperty(aashray)) {
                    Object.assign(jaliesa, iralynn.source_data[aashray]);
                  }
                  let daejaun = jaliesa.hasOwnProperty("total_copies") ? jaliesa.total_copies : 1;
                  for (let deseri = 0; deseri < daejaun; deseri++) {
                    iralynn.texture_sources.push(jaliesa);
                  }
                });
              }
              iralynn.params = iralynn.params ? iralynn.params : {};
              if (iralynn.brand) {
                let masonalexander = new Promise((aiker, cerria) => {
                  postJson("/app/get-design-options", {
                    materials: [iralynn.id]
                  }).then(function (naason) {
                    naason = arrayToObject(naason, "id");
                    iralynn.designOptions = naason;
                    artx.materials[iralynn.id] = iralynn;
                    aiker();
                  });
                });
                designOptionPromises.push(masonalexander);
                kishia.push(masonalexander);
              } else {
                artx.materials[iralynn.id] = iralynn;
              }
            });
            if (designOptionPromises.length) {
              Promise.all(designOptionPromises).then(function () {
                arati();
              });
            } else {
              arati();
            }
          });
        });
        kishia.push(genesia);
      }
      if (zoriah.length) {
        kishia.push(new Promise((jana, corye) => {
          postJson("/app/query", {
            table: "user_materials",
            columns: ["id", "name", "source_names", "user"],
            where: [["id", "in", zoriah.join(",")]],
            auth: true
          }).then(function (kamarien) {
            kamarien.results.forEach(function (angeleia) {
              angeleia.db = "user_materials";
              angeleia.realwidth = 2e3;
              angeleia.seamless = false;
              artx.materials["u" + angeleia.id] = angeleia;
              artx.materials["u" + angeleia.id].texture_sources = [];
              if (angeleia.source_names) {
                artx.materials["u" + angeleia.id].source_names.forEach(function (samanthaann) {
                  artx.materials["u" + angeleia.id].texture_sources.push({
                    width_mm: angeleia.realwidth,
                    seamless: angeleia.seamless,
                    texture_map: "/users/" + angeleia.user + "/uploads/" + samanthaann
                  });
                });
              }
            });
            jana();
          });
        }));
      }
      return kishia;
    }
    if ((elyanna.trigger == "pattern" || elyanna.trigger == "initial-page-load") && artx.pattern.defaultParams) {
      artx.pattern.defaultParams = typeof artx.pattern.defaultParams === "string" ? JSON.parse(artx.pattern.defaultParams) : artx.pattern.defaultParams;
      for ([key, value] of Object.entries(artx.pattern.defaultParams)) {
        if (artx.dimensionParams.includes(key)) {
          value = getDimensionValue(value, artx.pattern.defaultParams);
        }
        elyanna[key] = value;
      }
      params.hatchJoints = !!(params.patternId > 13);
      element("#hatch-joints").checked = params.hatchJoints;
      kierre();
    }
    if ((elyanna.trigger == "scene" || elyanna.trigger == "initial-page-load") && artx.scenes && artx.scenes[params.scene] && artx.scenes[params.scene].params) {
      delete elyanna.sceneTextures;
      izayuh(artx.scenes[params.scene].params);
    }
    function izayuh(safoora, ronelda) {
      if (!safoora) {
        return;
      }
      for ([param, value] of Object.entries(safoora)) {
        if (param === "inches") {
          continue;
        }
        let lakshmi = artx.tileParams.includes(param) && ronelda ? ronelda : elyanna;
        lakshmi[param] = value;
        if (artx.dimensionParams.includes(param)) {
          lakshmi[param] = getDimensionValue(value, safoora);
        }
      }
    }
    Promise.all(wilmer()).then(function () {
      let muhaimin = [];
      styleLoop(function (alastor, dorna) {
        if (artx.materials.hasOwnProperty(alastor.materialId) && artx.materials[alastor.materialId].db !== "user_materials") {
          alastor.materialWidth = artx.materials[alastor.materialId + ""].realwidth;
        }
        if (artx.materials.hasOwnProperty(alastor.materialId) && artx.materials[alastor.materialId].brand) {
          artx.brandsUsed.push(artx.materials[alastor.materialId].brand);
        }
        let felita = Number.isInteger(parseInt(("" + alastor.materialId).replace("u", "")));
        if (felita && !artx.materials.hasOwnProperty(alastor.materialId)) {
          alastor.materialId = alastor.imgType = "solid";
          window.alert("One of the selected materials is not available and has been replaced");
        }
        if (alastor.hasOwnProperty("edge") && alastor.edge.hasOwnProperty("profile") && artx.edges[alastor.edge.profile].hasOwnProperty("imageData")) {
          let deaijah = artx.edges[alastor.edge.profile];
          deaijah.imageData.forEach(function (marycaroline) {
            let harmonei = [];
            for ([key, value] of Object.entries(marycaroline)) {
              if (key.includes("_url") && !marycaroline.hasOwnProperty(key + "_img")) {
                let dallyce = key.replace("_url", "_img");
                marycaroline[dallyce] = new Image();
                let rosamund = marycaroline[dallyce];
                harmonei.push(new Promise((tracer, tenile) => {
                  rosamund.onload = function () {
                    tracer();
                  };
                  rosamund.onerror = function () {
                    tracer();
                  };
                  rosamund.src = value;
                  rosamund.crossOrigin = "anonymous";
                }));
              }
              muhaimin.push(...harmonei);
            }
          });
        }
      });
      juley();
      if (["pattern", "initial-page-load", "plugin-editor-load"].includes(elyanna.trigger)) {
        let chrishna = artx.patterns[elyanna.patternId];
        if (chrishna && chrishna.definition) {
          chrishna.definition.tiles.forEach(function (yarelin) {
            if (!isNaN(yarelin.edges[0].edgeLength) && !yarelin.hasOwnProperty("minBounds")) {
              yarelin.minBounds = tileMinBounds(yarelin);
            }
          });
        }
        korben();
      }
      if (!artx.patternDesignOptions) {
        artx.patternDesignOptions = {};
      }
      if (["pattern", "initial-page-load", "plugin-editor-load"].includes(elyanna.trigger) && artx.brandsUsed.length) {
        muhaimin.push(new Promise((cannen, aryauna) => {
          postJson("/app/get-design-options", {
            pattern: elyanna.patternId,
            brand: artx.brandUsed
          }).then(function (esterine) {
            esterine.forEach(function (willibaldo) {
              willibaldo.fromPattern = elyanna.patternId;
            });
            artx.patternDesignOptions = arrayToObject(esterine, "id");
            cannen();
          });
        }));
      }
      function chibuike(wattie) {
        document.querySelectorAll("#pattern-menu .menu-option").forEach(function (isyss) {
          let malerie = parseInt(isyss.getAttribute("data-option"));
          let teryon = artx.patterns[malerie];
          let arrah = isyss.querySelector(".menu-option-img-container");
          if (wattie && !wattie.includes(malerie) || teryon.pro && !artx.pro) {
            arrah.classList.add("inactive");
            arrah.style.opacity = 0.5;
          } else {
            arrah.classList.remove("inactive");
            arrah.style.opacity = 1;
          }
        });
      }
      Promise.all(muhaimin).then(function () {
        if (["material-input", "initial-page-load", "plugin-editor-load"].includes(elyanna.trigger)) {
          if (params.tileStyles.a.materialId && artx.materials.hasOwnProperty(params.tileStyles.a.materialId)) {
            let althera = artx.materials[params.tileStyles.a.materialId];
            if (althera.patterns && althera.patterns.length) {
              chibuike(althera.patterns);
              if (!althera.patterns.includes(parseInt(params.patternId))) {
                params.patternId = althera.patterns[0];
                kierre();
              }
            } else {
              chibuike();
            }
          }
          function acia() {
            let kianny = {
              brightness: 1,
              contrast: 1,
              hue: 0,
              saturation: 1,
              invert: false,
              tint: "#FFFFFF",
              edge: {
                profile: "fine",
                scale: 1,
                exclude: [],
                width: 25
              },
              gradients: [],
              finish: {},
              profile: {}
            };
            var evelinda = false;
            for ([styleName, style] of Object.entries(elyanna.tileStyles)) {
              if (artx.materials.hasOwnProperty(style.materialId) && artx.materials[style.materialId].hasOwnProperty("params") && Object.values(artx.materials[style.materialId].params).length || artx.materials.hasOwnProperty(style.materialId) && artx.materials[style.materialId].brand > 1) {
                evelinda = true;
                if (!style.preDefault) {
                  style.preDefault = copy({
                    brightness: style.brightness,
                    contrast: style.contrast,
                    hue: style.hue,
                    saturation: style.saturation,
                    invert: style.invert,
                    tint: style.tint,
                    edge: style.edge,
                    gradients: style.gradients,
                    finish: {},
                    profile: {}
                  });
                }
                if (artx.materials.hasOwnProperty(style.materialId) && artx.materials[style.materialId].brand > 1) {
                  izayuh(kianny, style);
                }
                if (artx.materials.hasOwnProperty(style.materialId) && Object.values(artx.materials[style.materialId].params).length) {
                  izayuh(artx.materials[style.materialId].params, style);
                }
              } else if (style.preDefault) {
                izayuh(style.preDefault, style);
                delete style.preDefault;
              }
            }
            if (evelinda) {
              kierre();
            }
          }
          if (!["initial-page-load", "plugin-editor-load"].includes(elyanna.trigger) || elyanna.trigger === "initial-page-load" && get("materialId")) {
            acia();
          }
        }
        if (["pattern", "material-input", "plugin-editor-load", "initial-page-load"].includes(elyanna.trigger)) {
          axten();
          keygan();
        }
        appUi();
        Promise.all(wilmer()).then(() => {
          artx.preDrawJs();
          hatty();
          shaleesa();
          tyge();
          const kayedon = Object.values(artx.materials).some(yatziry => ["graphic", "organic", "surfacing", "landscaping"].includes(yatziry.category.toLowerCase()));
          const jenie = Object.values(artx.materials).some(khailah => khailah.brand);
          const linard = document.querySelector("[data-request='app-button']");
          if (linard) {
            if (artx.materialsUsed.includes("solid") || kayedon || !jenie) {
              linard.style.display = "none";
            } else {
              linard.style.display = "";
            }
          }
        });
      });
    });
    return new Promise(function (marceon) {
      artx.drawResolve = marceon;
    });
  };
  if (artx.plugin === false && artx.autoDraw === true) {
    artx.initialDraw = false;
    predraw("#initial-page-load");
  } else {
    toApp({
      type: "editorLoaded"
    });
    artx.editorLoaded = true;
  }
  function valaria() {
    $("#width-input-group").append($("#height-input-container"));
    $("#height-input-group").append($("#width-input-container"));
    $("#min-width-input-group").append($("#min-height-input-container"));
    $("#min-height-input-group").append($("#min-width-input-container"));
    $("#rows-input-group").append($("#columns"));
    $("#columns-input-group").append($("#rows"));
    $("#joint-size-horizontal-input-group").append($("#joint-size-vertical-input-container"));
    $("#joint-size-vertical-input-group").append($("#joint-size-horizontal-input-container"));
  }
  function avrey() {
    $("#width-input-group").append($("#width-input-container"));
    $("#height-input-group").append($("#height-input-container"));
    $("#min-width-input-group").append($("#min-width-input-container"));
    $("#min-height-input-group").append($("#min-height-input-container"));
    $("#rows-input-group").append($("#rows"));
    $("#columns-input-group").append($("#columns"));
    $("#joint-size-horizontal-input-group").append($("#joint-size-horizontal-input-container"));
    $("#joint-size-vertical-input-group").append($("#joint-size-vertical-input-container"));
  }
  function levanna() {
    if (artx.patterns[params.patternId].tileHeightMin) {
      var normando = eval(artx.patterns[params.patternId].tileHeightMin);
      var xael = params.tileHeight;
      if (params.inches == true) {
        xael = inchesToMm(xael);
        var frederi = parseInt(inchesToMm(normando));
      } else {
        xael = parseInt(xael);
        var frederi = parseInt(normando);
      }
      if (xael < frederi) {
        params.tileHeight = normando;
        charrisse.value = normando;
      }
    }
  }
  function eulalah(zahriya) {
    if (zahriya.classList.contains("app-param")) {
      if (zahriya.hasOwnProperty("appValue")) {
        var rashiem = zahriya.appValue;
      } else {
        if (zahriya.getAttribute("data-type") == "array") {
          var rashiem = ajita(zahriya.getAttribute("data-param"));
        } else {
          if (zahriya.getAttribute("type") == "checkbox") {
            var rashiem = !!zahriya.checked;
          } else {
            if (zahriya.getAttribute("type") == "radio") {
              var rashiem = parseBool(document.querySelector("[type='radio'][name='" + zahriya.getAttribute("name") + "']:checked").value);
            } else {
              var rashiem = zahriya.hasAttribute("data-value") ? this.getAttribute("data-value") : zahriya.value;
            }
          }
        }
      }
      if (zahriya.getAttribute("data-units") == "mm" && params.inches == true) {
        rashiem = inchesToMm(rashiem);
      }
      if (rashiem == "true") {
        rashiem = true;
      } else if (rashiem == "false") {
        rashiem = false;
      }
      var jon = zahriya.getAttribute("data-param");
      paramParts = jon.split(".");
      function ajita(luann) {
        var sofiah = [];
        elements("[data-param='" + luann + "']").forEach(function (lynnete) {
          if (lynnete.getAttribute("type") == "checkbox") {
            if (lynnete.checked) {
              sofiah.push(lynnete.value);
            }
          } else {
            sofiah.push(lynnete.value);
          }
        });
        return sofiah;
      }
      if (zahriya.hasAttribute("data-tile") || zahriya.classList.contains("style-param")) {
        var oktavia = zahriya.classList.contains("style-param") ? zahriya.closest("[data-style-name]").getAttribute("data-style-name") : zahriya.getAttribute("data-tile");
        if (paramParts.length == 1) {
          params.tileStyles[oktavia][paramParts[0]] = rashiem;
        }
        if (paramParts.length == 2) {
          if (params.tileStyles[oktavia][paramParts[0]] == undefined) {
            params.tileStyles[oktavia][paramParts[0]] = {};
          }
          params.tileStyles[oktavia][paramParts[0]][paramParts[1]] = rashiem;
        }
      } else {
        if (paramParts.length == 1) {
          params[paramParts[0]] = rashiem;
        }
        if (paramParts.length == 2) {
          if (params[paramParts[0]] == undefined) {
            params[paramParts[0]] = {};
          }
          params[paramParts[0]][paramParts[1]] = rashiem;
        }
      }
      if (zahriya.classList.contains("cookie-param")) {
        setArtxCookie(jon, rashiem);
      }
    }
    if (zahriya.getAttribute("name") == "units") {
      setArtxCookie("units", zahriya.value);
      artx.units = zahriya.value;
      if (zahriya.value == "inches") {
        elements(".dimension-input:not(.resolution-input)").forEach(function (llana) {
          var eiven = llana.value;
          var schaefer = mmToInches(eiven);
          llana.value = schaefer;
          llana.classList.remove("dimension-input-mm");
          llana.classList.add("dimension-input-inches");
          if (llana.classList.contains("app-param")) {
            var jniyah = llana.getAttribute("data-param");
            params[jniyah] = schaefer;
          }
        });
        elements(".units").forEach(function (makda) {
          makda.innerHTML = "\"";
          makda.classList.remove("units-mm");
          makda.classList.add("units-inches");
        });
        var devian = mmToInches(artx.textureWidth);
        var aynia = mmToInches(artx.textureHeight);
        var latonga = "in";
        var emilse = devian + " x " + aynia + " " + latonga;
        element("#texture-size").innerHTML = emilse;
      } else {
        elements(".dimension-input:not(.resolution-input)").forEach(function (nikali) {
          var tamel = nikali.value;
          var traevyn = inchesToMm(tamel);
          nikali.value = traevyn;
          nikali.classList.remove("dimension-input-inches");
          nikali.classList.add("dimension-input-mm");
          if (nikali.classList.contains("app-param")) {
            var syrae = nikali.getAttribute("data-param");
            params[syrae] = traevyn;
          }
        });
        elements(".units").forEach(function (zaire) {
          zaire.innerHTML = "mm";
          zaire.classList.remove("units-inches");
          zaire.classList.add("units-mm");
        });
        var devian = artx.textureWidth;
        var aynia = artx.textureHeight;
        var latonga = "mm";
        var emilse = round(devian) + " x " + round(aynia) + " " + latonga;
        element("#texture-size").innerHTML = emilse;
      }
    }
    if (zahriya.classList.contains("upload-width")) {
      var viraj = zahriya.getAttribute("data-image");
      var yahav = 99999;
      elements(".upload-width[data-image='" + viraj + "']").forEach(function () {
        var shria = params.inches ? inchesToMm(zahriya.value) : parseInt(zahriya.value);
        if (shria < yahav) {
          yahav = shria;
        }
      });
    }
    if (zahriya.classList.contains("material-placement")) {
      myreen(zahriya);
    }
    kirstine();
    predraw(zahriya);
    odelia();
  }
  function keyren() {
    $(".parameter").off();
    document.querySelectorAll("input[data-max], input[data-min]").forEach(function (delante) {
      delante.onchange = function () {
        if (parseInt(delante.value) > parseInt(delante.getAttribute("data-max"))) {
          delante.value = delante.getAttribute("data-max");
        }
        if (parseInt(delante.value) < parseInt(delante.getAttribute("data-min"))) {
          delante.value = delante.getAttribute("data-min");
        }
      };
    });
    artx.ui.jointHorizontal.onchange = function () {
      if ($("#chain-icon").hasClass("active")) {
        artx.ui.jointVertical.value = artx.ui.jointHorizontal.value;
      }
      eulalah(artx.ui.jointHorizontal);
    };
    elements(".material-rotate").forEach(function (inayah) {
      inayah.onclick = function () {
        params.randCrop = parseInt(Math.random() * 1e5);
        inayah.appValue = !!!inayah.appValue;
        eulalah(inayah);
      };
    });
    artx.ui.reset.onclick = function () {
      params.randCrop = parseInt(Math.random() * 1e5);
      params.randEdge = parseInt(Math.random() * 1e5);
      params.randTone = parseInt(Math.random() * 1e5);
      params.randSrc = parseInt(Math.random() * 1e5);
      eulalah(artx.ui.reset);
    };
    artx.ui.pathSelector.onclick = function () {
      if (!artx.ui.pathMenu) {
        var randalyn = createDataboxMenu({
          title: "Profiles",
          search: false,
          query: {
            table: "paths",
            where: [["id", "in", artx.profilePaths.join(",")]],
            sort: ["id", "asc"],
            limit: 48
          },
          footer: false,
          itemHtml: function (shaniel) {
            let florindo = pointsToCanvas(shaniel.points, 3, 50, false, 1);
            florindo.style.marginRight = "15px";
            var tijera = createHtml({
              tag: "div",
              class: "dbox-menu-item",
              children: [florindo, shaniel.name]
            });
            tijera.style.height = "60px";
            tijera.onclick = function () {
              params.tileStyles.a.profile.pathId = shaniel.id;
              artx.ui.pathSelector.innerHTML = shaniel.name;
              fadeOut(randalyn);
              predraw("profile");
            };
            return tijera;
          },
          width: "350px",
          left: artx.ui.pathSelector.getBoundingClientRect().left,
          onClose: "hide"
        });
        artx.ui.pathMenu = randalyn;
        insertHtml(artx.ui.pathMenu);
        var raychel = {
          tag: "div",
          style: "width:53px;height:1px;margin-right:15px;border-bottom: 2px dashed #aaa"
        };
        var aldair = createHtml({
          tag: "div",
          class: "dbox-menu-item",
          children: [raychel, "None"]
        });
        aldair.style.height = "60px";
        aldair.onclick = function () {
          delete params.tileStyles.a.profile.pathId;
          artx.ui.pathSelector.innerHTML = "None";
          predraw("profile");
          fadeOut(randalyn);
        };
        insertHtml(aldair, randalyn.dbox.container, "prepend");
      }
      fadeIn(artx.ui.pathMenu);
      artx.ui.pathMenu.style.display = "flex";
      var shamira = artx.ui.pathSelector.getBoundingClientRect();
      var tylesha = artx.ui.controls.getBoundingClientRect();
      artx.ui.pathMenu.style.left = shamira.left + "px";
      artx.ui.pathMenu.style.top = shamira.top - 250 < tylesha.top ? tylesha.top + "px" : shamira.top - 250 + "px";
      artx.ui.pathMenu.style.bottom = shamira.top + 250 > tylesha.bottom ? window.innerHeight - tylesha.bottom + "px" : window.innerHeight - (shamira.top + 250) + "px";
    };
    artx.ui.heightmapSelector.onclick = function () {
      if (!artx.ui.heightmapMenu) {
        var rahul = createDataboxMenu({
          title: "Finishes",
          search: false,
          query: {
            table: "heightmaps",
            where: [["id", "in", artx.finishHeightmaps.join(",")]],
            limit: 48,
            sort: artx.appdata ? ["name", "asc"] : ["id", "asc"]
          },
          footer: false,
          itemHtml: function (mareena) {
            var tenneil = createHtml({
              tag: "img",
              src: "https://cdn.architextures.org" + mareena.image + "?s=80&q=75",
              style: "height: 60px; width: 60px;opacity: 0.75; margin-right: 15px;object-fit: cover;"
            });
            var illah = createHtml({
              tag: "div",
              class: "dbox-menu-item",
              style: "height:60px;padding:0;",
              children: [tenneil, mareena.name]
            });
            illah.onclick = function () {
              params.tileStyles.a.finish.heightmapId = mareena.id;
              artx.ui.heightmapSelector.innerHTML = mareena.name;
              fadeOut(rahul);
              predraw("profile");
            };
            return illah;
          },
          width: "350px",
          left: artx.ui.heightmapSelector.getBoundingClientRect().left,
          onClose: "hide"
        });
        artx.ui.heightmapMenu = rahul;
        insertHtml(rahul);
        var athulya = createHtml({
          tag: "div",
          class: "dbox-menu-item",
          style: "height: 60px;padding:0;",
          children: [{
            tag: "div",
            style: "height: 60px; width: 60px;background-color:#ddd; margin-right: 15px;"
          }, "None"]
        });
        athulya.onclick = function () {
          delete params.tileStyles.a.finish.heightmapId;
          artx.ui.heightmapSelector.innerHTML = "None";
          predraw("finish");
          fadeOut(rahul);
        };
        insertHtml(athulya, rahul.dbox.container, "prepend");
      }
      fadeIn(artx.ui.heightmapMenu);
      var brooklen = artx.ui.heightmapSelector.getBoundingClientRect();
      var fedele = artx.ui.controls.getBoundingClientRect();
      artx.ui.heightmapMenu.style.left = brooklen.left + "px";
      artx.ui.heightmapMenu.style.top = brooklen.top - 250 < fedele.top ? fedele.top + "px" : brooklen.top - 250 + "px";
      artx.ui.heightmapMenu.style.bottom = brooklen.top + 250 > fedele.bottom ? window.innerHeight - fedele.bottom + "px" : window.innerHeight - (brooklen.top + 250) + "px";
    };
    artx.ui.weaves.onchange = function () {
      dania();
      eulalah(artx.ui.weaves);
    };
    $("#stretchers").change(function () {
      briany();
    });
    document.getElementById("pattern-rotate").onclick = function () {
      var gerzon = parseInt($(this).attr("data-rotate"));
      if (gerzon + 90 > 359) {
        $(this).attr("data-rotate", "0");
        var gerzon = 0;
      } else {
        $(this).attr("data-rotate", gerzon + 90);
        var gerzon = gerzon + 90;
      }
      if (valaria()) {
        if (!(gerzon == 90)) {
          gerzon == 270;
        }
      } else {
        avrey();
      }
      predraw("#hue");
    };
    $(".dimension-input").keypress(function () {
      var karely = $(this).attr("id");
      var antwanett = String.fromCharCode(event.which);
      if ($("#mm").is(":checked")) {
        if (karely == "joint-size-horizontal" || karely == "joint-size-vertical") {
          var arelli = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"];
        } else {
          var arelli = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        }
        if (arelli.indexOf(antwanett) == -1 && event.which != 13) {
          event.preventDefault();
        }
      }
      if ($("#inches").is(":checked")) {
        if (karely == "joint-size-horizontal" || karely == "joint-size-vertical") {
          var arelli = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "\"", " ", "'", "-", "."];
        } else {
          var arelli = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "\"", " ", "'", "."];
        }
        if (arelli.indexOf(antwanett) == -1 && event.which != 13) {
          event.preventDefault();
        }
      }
    });
    elements(".parameter").forEach(function (anaisia) {
      anaisia.onchange = function () {
        eulalah(anaisia);
      };
    });
  }
  keyren();
  $(window).resize(function () {
    if (window.innerWidth > 499 || document.body.classList.contains("no-controls")) {
      tileTexture();
      positionMenu($("#download"));
    }
    sizeCanvasContainer();
    if (artx.hasOwnProperty("plane") && params.view === "plane") {
      drawPlane();
    }
  });
});