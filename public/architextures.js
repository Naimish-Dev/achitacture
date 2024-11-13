artx.canAccessParent;
try {
  window.parent.location.href;
  artx.canAccessParent = true;
} catch (queston) {
  artx.canAccessParent = false;
}
artx.setUser = mansirat => {
  if (!artx.user) {
    postJson("/app/query", {
      table: "users",
      id: mansirat,
      auth: false
    }).then(kimyatta => {
      artx.user = kimyatta.results[0];
    });
  }
};
function jpegStringWithExif(luana, devony) {
  var margree = {
    [piexif.ImageIFD.Software]: "Made with Architextures Create from architextures.org, Copyright Architextures " + abriya
  };
  var jocene = {};
  var leamond = {};
  var oshiana = new Date();
  var abriya = oshiana.getFullYear();
  var vondalee = {
    "0th": margree,
    Exif: jocene,
    GPS: leamond
  };
  var anveer = piexif.dump(vondalee);
  var aniaya = typeof luana == "string" ? document.getElementById(luana).toDataURL("image/jpeg", devony) : luana.toDataURL("image/jpeg", devony);
  return piexif.insert(anveer, aniaya);
}
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (reionna, esli) {
    if (Object.prototype.toString.call(reionna).toLowerCase() === "[object regexp]") {
      return this.replace(reionna, esli);
    }
    return this.replace(new RegExp(reionna, "g"), esli);
  };
}
if (!Object.entries) {
  Object.entries = function (clabe) {
    var iyhana = Object.keys(clabe);
    var tasir = iyhana.length;
    var crystil = new Array(tasir);
    while (tasir--) {
      crystil[tasir] = [iyhana[tasir], clabe[iyhana[tasir]]];
    }
    return crystil;
  };
}
if (!Object.values) {
  Object.values = function (pike) {
    var yarlin = Object.keys(pike);
    var alveda = yarlin.length;
    var versavia = new Array(alveda);
    while (alveda--) {
      versavia[alveda] = pike[yarlin[alveda]];
    }
    return versavia;
  };
}
function checkHttps(issey) {
  if (typeof issey !== "string") {
    return "https://architextures.org";
  } else {
    return issey.includes("https://") ? issey : "https://" + issey;
  }
}
function getMm(jerrimy) {
  return artx.units == "inches" ? inchesToMm(jerrimy) : mmToInches(jerrimy);
}
function getDimensionValue(dracy, zaahira) {
  let genisha = zaahira.inches === true ? "inches" : "mm";
  if (genisha === "inches" && artx.units === "mm") {
    return inchesToMm(dracy);
  } else {
    return genisha === "mm" && artx.units === "inches" ? mmToInches(dracy) : dracy;
  }
}
String.prototype.ucFirst = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
function recTextureDownload(kata) {
  if (!artx.user || artx.user.type !== "admin") {
    postJson("/app/texture-download", {
      id: kata,
      page: window.location.href
    });
  }
}
function recTextureView(imagen) {
  if (!artx.user || artx.user.type !== "admin") {
    postJson("/app/texture-view", {
      id: imagen,
      page: window.location.href
    });
  }
}
function pluginReturn() {
  $(".texture-lightbox").fadeOut(100);
  $("#plugin-iframe-container").fadeOut(100);
  $("#admin-editor-window").fadeOut(100);
  $("#plugin-body").delay(100).fadeIn(50);
  $(".menu").css("display", "none").removeClass("active");
}
artx.importMessage = createHtml({
  tag: "div",
  class: "modal-container",
  style: "pointer-events:none;user-select:none;",
  children: [{
    tag: "div",
    style: "padding: 50px;",
    class: "card cc",
    children: [{
      tag: "div",
      class: "spinner import-img",
      style: "display:none;"
    }, {
      tag: "img",
      class: "import-img",
      style: "display:none;",
      src: artx.cdn + "/icons/tick.svg"
    }]
  }]
});
function showImportMessage() {
  return new Promise(function (cherle, caliegh) {
    let jajuane = window.location.pathname.startsWith("/create") ? document.querySelector("[data-import-container]") : document.body;
    jajuane.appendChild(artx.importMessage);
    fadeOut(artx.importMessage.querySelector("img"), 1);
    fadeIn(artx.importMessage.querySelector(".spinner"), 1);
    fadeIn(artx.importMessage, 350).then(function () {
      cherle();
    });
  });
}
function hideImportMessage() {
  fadeOut(artx.importMessage.querySelector(".spinner"), 100);
  setTimeout(function () {
    fadeOut(artx.importMessage, 500).then(function () {
      artx.importMessage.remove();
    });
  }, 500);
  fadeIn(artx.importMessage.querySelector("img"), 1100);
}
function toApp(xiomary) {
  if (xiomary.hasOwnProperty("data") && xiomary.data.hasOwnProperty("name") && xiomary.data.name.includes("/")) {
    xiomary.data.name = xiomary.data.name.replaceAll("/", "-");
  }
  if (artx.canAccessParent) {
    if (window.parent.sketchup) {
      window.parent.sketchup.execute(xiomary);
    } else if (window.parent.revit) {
      window.parent.revit.execute(xiomary);
    } else {
      window.parent.postMessage({
        artx: xiomary
      }, "*");
    }
  } else {
    window.parent.postMessage({
      artx: xiomary
    }, "*");
  }
}
function iframeMessage(marcquez, _0x294c3c = false, _0x1742fc = 0) {
  window.parent.postMessage({
    artx: {
      type: marcquez,
      data: _0x294c3c,
      requestId: _0x1742fc
    }
  }, "*");
}
function checkboxesToArray(ewurabena) {
  var kamarii = [];
  document.querySelectorAll("[data-column='" + ewurabena.getAttribute("data-column") + "']").forEach(function (yasmeen) {
    if (yasmeen.checked) {
      var fineas = yasmeen.value;
      if (!isNaN(fineas)) {
        fineas = parseInt(fineas);
      }
      kamarii.push(fineas);
    }
  });
  return kamarii;
}
function sourceEditorImportImage(adrion) {
  let naythan = document.getElementById("editor-canvas");
  let chrisalynn = naythan.getContext("2d");
  let derric = document.getElementById("svg-overlay");
  naythan.width = adrion.width;
  naythan.height = adrion.height;
  chrisalynn.drawImage(adrion, 0, 0);
  derric.setAttribute("viewBox", "0, 0, " + naythan.width + ", " + naythan.height);
  derric.setAttribute("width", naythan.width);
  derric.setAttribute("height", naythan.height);
  const kiichi = naythan.getBoundingClientRect().width;
  const ammaarah = naythan.getBoundingClientRect().height;
  if (kiichi < 100 && ammaarah < 100) {
    naythan.parentNode.style.width = "100px";
    naythan.parentNode.style.height = "100px";
  } else {
    naythan.parentNode.style.maxWidth = naythan.getBoundingClientRect().width + 10 + "px";
    naythan.parentNode.style.maxHeight = naythan.getBoundingClientRect().height + 10 + "px";
  }
}
function svgSourceListener() {
  document.querySelectorAll(".svg-selection").forEach(function (assael) {
    assael.onclick = function () {
      if (assael.classList.contains("active")) {
        assael.classList.remove("active");
      } else {
        assael.classList.add("active");
      }
    };
  });
}
function launchSourceEditor(talesa, merium) {
  let szofia = {
    tag: "div",
    id: "editor-modal",
    class: "modal grey",
    children: [{
      tag: "div",
      attributes: {
        id: "sample-selector",
        class: "modal-window"
      },
      children: [{
        tag: "div",
        class: "header",
        children: [{
          tag: "div",
          text: "Image selector"
        }, {
          tag: "img",
          class: "icon",
          src: artx.cdn + "/icons/x.svg",
          "data-remove": "#editor-modal"
        }]
      }, {
        tag: "div",
        id: "canvas-editor-window",
        style: "overflow: hidden; align-self: center;",
        class: "modal-body",
        children: [{
          tag: "canvas",
          attributes: {
            id: "editor-canvas",
            class: "editor-canvas"
          }
        }, {
          tag: "svg",
          attributes: {
            id: "svg-overlay"
          }
        }]
      }, {
        tag: "div",
        class: "modal-footer sh",
        style: "justify-content: space-between;",
        children: [{
          tag: "div",
          class: "flex-centred s-gap",
          children: [{
            tag: "button",
            style: "width:auto;",
            text: "Select areas",
            id: "editor-select-areas",
            class: "button2 fbutt small",
            "data-selected": "false"
          }, {
            tag: "button",
            style: "width:auto;",
            text: "Reset areas",
            id: "reset-selection",
            class: "button2 fbutt small"
          }, {
            tag: "button",
            style: "width:auto;",
            text: "Delete selected",
            id: "delete-selection",
            class: "button2 fbutt small"
          }]
        }, {
          tag: "button",
          style: "width:200px;",
          text: "Continue",
          id: "editor-continue",
          class: "small fbutt filled cc"
        }]
      }]
    }]
  };
  $("#source-upload-input").val("");
  insertHtml(createHtml(szofia));
  sourceEditorImportImage(talesa);
  const keilin = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (keilin) {
    const keitlyn = document.getElementById("canvas-editor-window");
    const morena = window.getComputedStyle(keitlyn);
    keitlyn.style.height = morena.getPropertyValue("max-height");
    keitlyn.style.maxHeight = "";
    keitlyn.style.width = morena.getPropertyValue("max-width");
    keitlyn.style.maxWidth = "";
  }
  let mela = document.getElementById("editor-canvas");
  let yasen = document.getElementById("svg-overlay");
  let alysse = document.getElementById("editor-continue");
  let chery = document.getElementById("editor-select-areas");
  let rooks = document.getElementById("delete-selection");
  let winburn = document.getElementById("reset-selection");
  var genya = [];
  const dune = () => {
    if (chery.dataset.selected === "false") {
      yasen.style.cursor = "grabbing";
    }
  };
  const saladine = () => {
    if (chery.dataset.selected === "false") {
      yasen.style.cursor = "grab";
    }
  };
  yasen.addEventListener("mousedown", dune);
  yasen.addEventListener("mouseup", saladine);
  const solia = {
    minZoom: 0.2,
    beforeMouseDown: taynia => {
      if (chery.dataset.selected === "true") {
        return !taynia.altKey && taynia.key !== "Alt";
      }
    }
  };
  let romeka = panzoom(mela, solia);
  let shawntee = panzoom(yasen, solia);
  winburn.onclick = function () {
    document.querySelectorAll(".svg-selection").forEach(function (florentina) {
      florentina.remove();
    });
  };
  rooks.onclick = function () {
    document.querySelectorAll(".svg-selection.active").forEach(function (takaiya) {
      takaiya.remove();
    });
  };
  alysse.onclick = function () {
    romeka.dispose();
    shawntee.dispose();
    var marua = [];
    var kadidia = [];
    if (document.querySelectorAll(".svg-selection").length == 0) {
      var darsy = document.createElement("canvas");
      var lucelenia = darsy.getContext("2d");
      darsy.width = mela.width;
      darsy.height = mela.height;
      artx.canvas = darsy;
      lucelenia.drawImage(mela, 0, 0, mela.width, mela.height, 0, 0, mela.width, mela.height);
      marua.push(darsy);
    } else {
      $(".svg-selection").each(function () {
        var emon = document.createElement("canvas");
        var sheraine = emon.getContext("2d");
        var tamarisk = Math.floor($(this).attr("width"));
        var indiana = Math.floor($(this).attr("height"));
        var heri = Math.floor($(this).attr("x"));
        var almeada = Math.floor($(this).attr("y"));
        emon.width = tamarisk;
        emon.height = indiana;
        sheraine.drawImage(mela, heri, almeada, tamarisk, indiana, 0, 0, tamarisk, indiana);
        kadidia.push([heri, almeada, tamarisk, indiana]);
        marua.push(emon);
      });
    }
    document.querySelector("#editor-modal").remove();
    merium({
      canvases: marua,
      areas: kadidia,
      points: genya
    });
  };
  chery.onclick = function () {
    yasen.removeEventListener("mousedown", dune);
    yasen.removeEventListener("mouseup", saladine);
    chery.dataset.selected = "true";
    yasen.style.cursor = "crosshair";
    document.addEventListener("keydown", ilhana => {
      if (ilhana.altKey && ilhana.key === "Alt") {
        if (chery.dataset.selected === "true") {
          yasen.style.cursor = "grab";
        }
      }
    });
    document.addEventListener("keyup", franceen => {
      if (franceen.key === "Alt") {
        if (chery.dataset.selected === "true") {
          yasen.style.cursor = "crosshair";
        }
      }
    });
    var gilbert = document.getElementById("svg-overlay");
    var komal = false;
    gilbert.onmousedown = function (addah) {
      if (addah.altKey) {
        gilbert.style.cursor = "grabbing";
        return;
      }
      artx.drawingRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      artx.drawingRect.setAttribute("id", "drawing-rect");
      artx.drawingRect.setAttribute("vector-effect", "non-scaling-stroke");
      yasen.appendChild(artx.drawingRect);
      artx.startPos = marceil(addah);
      komal = true;
    };
    gilbert.onmousemove = function (maciah) {
      if (komal) {
        var rubey = marceil(maciah);
        if (rubey.x < artx.startPos.x) {
          var jemiah = rubey.x;
          var hosannah = artx.startPos.x - rubey.x;
        } else {
          var jemiah = artx.startPos.x;
          var hosannah = rubey.x - artx.startPos.x;
        }
        if (rubey.y < artx.startPos.y) {
          var aedan = rubey.y;
          var kayzia = artx.startPos.y - rubey.y;
        } else {
          var aedan = artx.startPos.y;
          var kayzia = rubey.y - artx.startPos.y;
        }
        artx.drawingRect.setAttribute("x", jemiah);
        artx.drawingRect.setAttribute("y", aedan);
        artx.drawingRect.setAttribute("width", hosannah);
        artx.drawingRect.setAttribute("height", kayzia);
      }
    };
    gilbert.onmouseup = function (zyrah) {
      if (zyrah.altKey) {
        gilbert.style.cursor = "grab";
      }
      if (komal) {
        artx.drawingRect = document.getElementById("drawing-rect");
        if (artx.drawingRect.getAttribute("x")) {
          artx.drawingRect.removeAttribute("id");
          artx.drawingRect.setAttribute("class", "svg-selection");
          svgSourceListener();
        } else {
          artx.drawingRect.remove();
        }
        komal = false;
      }
    };
    gilbert.onclick = function (timeisha) {
      let shahir = marceil(timeisha);
      genya.push([shahir.x, shahir.y]);
    };
    function marceil(elinna) {
      var noe = mela.width;
      var kylaya = mela.getBoundingClientRect();
      var harly = kylaya.right - kylaya.left;
      var havyn = noe / harly;
      var torre = elinna.clientX - kylaya.left;
      var nyshon = elinna.clientY - kylaya.top;
      var luca = torre * havyn;
      var hla = nyshon * havyn;
      return {
        x: luca,
        y: hla
      };
    }
  };
  uiListener();
}
function uploadLibrary(raevynn) {
  const achol = createHtml({
    tag: "div",
    style: "box-sizing: border-box;",
    class: "fc flex-centred media-library-upload upload-library-u-button shadow",
    children: [{
      tag: "img",
      src: artx.mediaEndpoint + "/icons/upload.svg"
    }, {
      tag: "p",
      text: "Click to upload, or drag files here"
    }]
  });
  const darrington = createHtml({
    tag: "div",
    class: "upload-library-u-container",
    children: [achol]
  });
  const jillann = createHtml({
    tag: "button",
    text: "OK",
    class: "small"
  });
  const johnchristian = createHtml({
    tag: "div",
    class: "header",
    children: [jillann]
  });
  johnchristian.style.justifyContent = "flex-end";
  jillann.style.width = "200px";
  jillann.style.height = "30px";
  function cambrey(karmela) {
    const arcadius = karmela.format && ["png", "jpeg", "jpg", "svg", "avif", "webp"].includes(karmela.format.toLowerCase()) ? createHtml({
      tag: "img",
      class: "media-library-image",
      src: artx.cdn + karmela.url + "?s=400"
    }) : createHtml({
      tag: "div",
      class: "media-library-image",
      text: karmela.format,
      style: "text-transform:uppercase;"
    });
    const anuva = createHtml({
      tag: "div",
      class: "media-library-thumb",
      children: [arcadius]
    });
    const arcelia = createHtml({
      tag: "div",
      class: "fr hor-sb cv",
      children: [{
        tag: "div",
        class: "media-library-item-info",
        text: karmela.name
      }, {
        tag: "img",
        "data-upload-options": "",
        class: "icon",
        src: artx.cdn + "/icons/kebab.svg"
      }]
    });
    anuva.itemData = karmela;
    const kaelea = createHtml({
      tag: "div",
      "data-media-item": karmela.url,
      class: "media-library-item hover-show fc s-gap",
      children: [anuva, arcelia]
    });
    const quayla = arcelia.querySelector("[data-upload-options]");
    quayla.addEventListener("click", () => {
      const bulmaro = createContextMenu({
        items: [{
          name: "Copy path",
          "data-upload-options": "copy-path-" + karmela.url
        }, {
          name: "Delete file",
          "data-upload-options": "delete-file-" + karmela.url
        }],
        itemHtml: function (ranvijay) {
          return createHtml({
            tag: "label",
            class: "nav-menu-item sh",
            "data-upload-options": ranvijay["data-upload-options"],
            "data-media-item-path": karmela.url,
            children: [{
              tag: "div",
              children: [ranvijay["data-upload-options"] === "copy-path" ? {
                tag: "div",
                class: "fr cv",
                children: [{
                  tag: "img",
                  src: artx.mediaEndpoint + "/icons/copy.svg",
                  class: "icon"
                }, ranvijay.name]
              } : {
                tag: "div",
                class: "fr cv",
                children: [{
                  tag: "img",
                  src: artx.mediaEndpoint + "/icons/delete.svg",
                  class: "icon"
                }, ranvijay.name]
              }]
            }]
          });
        },
        x: quayla.getBoundingClientRect().x,
        y: quayla.getBoundingClientRect().y + quayla.getBoundingClientRect().height
      });
      const natosha = bulmaro.querySelector("[data-upload-options='copy-path-" + karmela.url + "']");
      const albiery = bulmaro.querySelector("[data-upload-options='delete-file-" + karmela.url + "']");
      natosha.onclick = () => {
        copyToClipboard(artx.mediaEndpoint + karmela.url);
        addNotification({
          text: "Path copied to clipboard",
          image: "tick"
        });
        bulmaro.remove();
      };
      albiery.onclick = () => {
        bulmaro.remove();
        const quaashie = createModal("Delete file", {
          tag: "div",
          style: "width: 350px; padding: 10px; display: flex; justify-content: space-around;",
          children: [{
            tag: "button",
            "data-media-modal": "cancel",
            text: "Cancel"
          }, {
            tag: "button",
            "data-media-modal": "delete",
            text: "Delete"
          }]
        });
        insertHtml(quaashie);
        quaashie.querySelector("[data-media-modal='cancel']").addEventListener("click", () => {
          quaashie.remove();
        });
        quaashie.querySelector("[data-media-modal='delete']").addEventListener("click", () => {
          quaashie.remove();
          const teng = addNotification({
            text: "Deleting file...",
            image: "spinner"
          });
          postJson("/app/delete-media-file", {
            filePath: karmela.url,
            fileId: karmela.id
          }).then(moreland => {
            if (moreland.status === "success") {
              teng.updateNotification({
                text: "File deleted successfully",
                image: "tick",
                duration: 2e3
              });
              kaelea.remove();
            } else {
              teng.updateNotification({
                text: "File couldn't be deleted",
                image: "warning"
              });
            }
          });
        });
      };
    });
    return {
      container: kaelea,
      thumb: anuva
    };
  }
  let trevionne = [];
  let kinlie = "";
  const tayna = createDataboxMenu({
    query: {
      table: "uploads",
      limit: 50,
      auth: true,
      where: artx.user.type === "brand" ? [["brand", "=", artx.user.brand]] : [["user", "=", artx.user.id]]
    },
    itemHtml: function (miela, dreya) {
      kinlie = artx.mediaEndpoint + miela.url;
      let armend = cambrey(miela);
      let torrance = armend.thumb;
      torrance.mediaLibraryItem = miela;
      torrance.onclick = function () {
        trevionne = [];
        torrance.classList.toggle("active");
        dreya.itemContainer.querySelectorAll(".media-library-thumb.active").forEach(function (shree) {
          if (!raevynn.selectMultiple && shree.mediaLibraryItem.id !== miela.id) {
            shree.classList.remove("active");
          } else {
            trevionne.push(shree.mediaLibraryItem);
          }
        });
      };
      return armend.container;
    },
    onOk: function () {
      raevynn.onOk({
        selectedItems: trevionne
      });
    }
  });
  tayna.style.top = "15px";
  tayna.style.left = "15px";
  tayna.style.width = "calc(100% - 30px)";
  tayna.style.height = "calc(100vh - 30px)";
  insertHtml(tayna);
  tayna.dbox.container.parentNode.style.background = "#eee";
  insertHtml(darrington, tayna.dbox.container, "prepend");
  tayna.dbox.itemContainer.classList.add("media-library-content");
  function charliese() {
    achol.querySelector("p").innerText = "Click to upload, or drag files here";
    achol.style.border = "";
  }
  achol.ondragover = function (jynia) {
    jynia.preventDefault();
    achol.querySelector("p").innerText = "Drop files here";
    achol.style.border = "3px dashed darkgrey";
  };
  achol.ondragleave = charliese;
  achol.ondrop = function (divyanka) {
    divyanka.preventDefault();
    charliese();
    const mantas = Array.from(divyanka.dataTransfer.files);
    const maryssa = mantas.map(leuna => {
      return new Promise(jual => {
        const rotonya = new FileReader();
        rotonya.onload = function () {
          jual({
            file: rotonya.result,
            name: leuna.name
          });
        };
        rotonya.readAsDataURL(leuna);
      });
    });
    Promise.all(maryssa).then(function (damine) {
      aleana(damine);
    });
  };
  achol.onclick = function () {
    fileUpload().then(function (stefano) {
      aleana(stefano);
    });
  };
  function aleana(mendell) {
    const dandrew = addNotification({
      text: "Uploading files...",
      image: "spinner"
    });
    const bearnice = mendell.map(marcoa => {
      const daneysha = (generateUid() + "-" + marcoa.name).replace(/[^a-zA-Z0-9-_!()'*.]/g, "");
      const dreddy = "uploads/" + (currentDate.getFullYear() - 2e3) + "/" + (currentDate.getMonth() + 1) + "/" + daneysha;
      const jennfer = marcoa.name.split(".");
      return saveFile(dreddy, createBlob(marcoa.file)).then(function () {
        return query({
          table: "uploads",
          action: "insert",
          values: {
            name: marcoa.name,
            url: "/" + dreddy,
            format: jennfer[jennfer.length - 1]
          },
          auth: true
        });
      });
    });
    Promise.all(bearnice).then(function (jaabir) {
      const valesia = jaabir.every(zeda => zeda.status === "success");
      if (valesia) {
        dandrew.updateNotification({
          text: "All files uploaded successfully",
          image: "tick",
          duration: 2e3
        });
      } else {
        dandrew.updateNotification({
          text: "Some files failed to upload",
          image: "warning"
        });
      }
      tayna.dbox.fetchItems(true);
    });
  }
}
function downloadTexture(tavania, angelia) {
  var brannan = jpegStringWithExif(tavania, angelia);
  let maricio = document.createElement("a");
  maricio.href = brannan;
  maricio.download = artx.nameParts.join(" ") + " " + params.view + ".jpg";
  maricio.click();
  maricio.remove();
}
;
function removeEl(shawntale) {
  if (shawntale.outerHTML !== undefined) {
    shawntale.remove();
  } else {
    document.querySelectorAll(shawntale).forEach(function (indigo) {
      indigo.remove();
    });
  }
}
function dropdown(sharyon, denae) {
  var zylis = document.querySelector(".dropdown");
  if (zylis) {
    zylis.remove();
  }
  if (!zylis || zylis.trigger !== sharyon) {
    var shawntai = createHtml({
      tag: "div",
      class: "dropdown card",
      children: denae
    });
    shawntai.trigger = sharyon;
    var jazmany = sharyon.getBoundingClientRect();
    var intisaar = jazmany.top;
    var devyne = window.innerHeight - jazmany.bottom;
    var tanji = jazmany.right - jazmany.left;
    shawntai.style.display = "none";
    shawntai.style.width = tanji;
    insertHtml(shawntai);
    var rasheida = shawntai.getBoundingClientRect();
    var briney = rasheida.right - rasheida.left;
    if (intisaar > devyne) {
      shawntai.style.bottom = window.innerHeight - jazmany.top + 3;
    } else {
      shawntai.style.top = jazmany.bottom + 10;
    }
    if (tanji < briney) {
      var andropolis = shawntai.style.width - tanji;
      shawntai.style.left = jazmany.left - andropolis / 2;
    } else {
      shawntai.style.left = jazmany.left;
    }
    fadeIn(shawntai);
  }
}
function fadeTo(colben, _0x41be90 = 1, _0x4b5cff = 150) {
  var joscelynn = _0x4b5cff - 5;
  colben = typeof colben == "string" ? document.querySelector(colben) : colben;
  colben.style.transition = "opacity " + joscelynn + "ms";
  setTimeout(function () {
    colben.style.opacity = _0x41be90;
  }, 5);
  return new Promise((bong, zyeria) => {
    setTimeout(function () {
      bong();
    }, _0x4b5cff);
  });
}
function fadeIn(saaketh, _0x2d69a3 = 150, _0xcc6894 = 1) {
  return new Promise((damarion, jicela) => {
    saaketh = typeof saaketh == "string" ? document.querySelector(saaketh) : saaketh;
    saaketh.style.opacity = 0;
    saaketh.style.display = saaketh.fadeDisplay ? saaketh.fadeDisplay : "";
    fadeTo(saaketh, _0xcc6894, _0x2d69a3).then(function () {
      damarion();
    });
  });
}
function fadeOut(beki, _0x1beb17 = 150, _0x11e7e0 = 0) {
  return new Promise((rubab, coryna) => {
    beki = typeof beki == "string" ? document.querySelector(beki) : beki;
    if (beki.style.display && ["", "block", "flex"].includes(beki.style.display)) {
      beki.fadeDisplay = beki.style.display;
    }
    fadeTo(beki, _0x11e7e0, _0x1beb17).then(function () {
      beki.style.display = "none";
      rubab();
    });
  });
}
function modalMessage(jimika) {
  var bellemy = [{
    tag: "h2",
    id: "loading-screen-text",
    text: jimika
  }];
  var ajeet = createHtml({
    tag: "div",
    id: "loading-screen",
    class: "modal",
    children: bellemy
  });
  insertHtml(ajeet);
  fadeTo(ajeet, 1, 300);
  return ajeet;
}
;
function createCopyInput(peterjames) {
  let karmari = createHtml({
    tag: "div",
    class: "input copy-butt xs-gap",
    children: [{
      tag: "div",
      class: "input-label",
      text: "Copy",
      style: "min-width: max-content;"
    }, {
      tag: "img",
      class: "icon",
      src: artx.cdn + "/icons/copy.svg",
      width: "20",
      style: "opacity:0.4;"
    }]
  });
  karmari.style.borderLeft = "1px solid var(--soft-line)";
  karmari.style.borderTopLeftRadius = "0";
  karmari.style.borderBottomLeftRadius = "0";
  karmari.style.padding = "0 15px";
  karmari.style.minWidth = "max-content";
  karmari.style.maxWidth = "max-content";
  karmari.style.userSelect = "none";
  let tynslee = createHtml({
    tag: "div",
    class: "df",
    children: [{
      tag: "style",
      text: ".copy-butt:hover{color: white;}"
    }, {
      tag: "input",
      type: "text",
      readonly: "",
      value: peterjames,
      style: "border-top-right-radius:0;border-bottom-right-radius:0;"
    }, karmari]
  });
  karmari.onclick = function () {
    copyToClipboard(peterjames);
    addNotification({
      text: "Copied to clipboard",
      image: "tick"
    });
  };
  return tynslee;
}
function createModal(zaviera, riannah, keimar) {
  let lakin = createHtml({
    tag: "img",
    class: "icon",
    src: artx.cdn + "/icons/x.svg"
  });
  let arseniy = createHtml({
    tag: "div",
    class: "modal cc",
    children: [{
      tag: "div",
      class: "modal-window",
      children: [{
        tag: "div",
        class: "header",
        children: [{
          tag: "div",
          class: "menu-title",
          text: zaviera ? zaviera : ""
        }, lakin]
      }, {
        tag: "div",
        class: "modal-body",
        children: [riannah ? riannah : ""]
      }, keimar ? {
        tag: "div",
        class: "modal-footer section",
        children: [keimar]
      } : false]
    }]
  });
  arseniy.querySelector(".modal-window").style.width = "auto";
  arseniy.querySelector(".modal-window").style.height = "auto";
  lakin.onclick = function () {
    document.body.removeChild(arseniy);
  };
  document.body.appendChild(arseniy);
  return arseniy;
}
function createLoadingScreen(andrene, _0x386ad8 = {}) {
  var soyla = [{
    tag: "div",
    id: "loading-screen-icon",
    class: "spinner"
  }, {
    tag: "h3",
    id: "loading-screen-text",
    text: andrene
  }];
  var shamarie = createProgressBar();
  shamarie.style.maxWidth = "300px";
  shamarie.step = 0;
  shamarie.steps = _0x386ad8.steps ? _0x386ad8.steps : 0;
  if (_0x386ad8 !== undefined && _0x386ad8.progressBar == true) {
    soyla.push(shamarie);
  }
  var frederico = createHtml({
    tag: "div",
    id: "loading-screen",
    class: "modal",
    children: soyla
  });
  frederico.progressBar = shamarie;
  insertHtml(frederico);
  fadeTo("#loading-screen", 1, 300);
  return frederico;
}
function removeLoadingScreen(shadiamon, ebonye) {
  var srinithi = document.getElementById("loading-screen");
  var saavi = document.querySelector("#loading-screen .spinner");
  var kashden = document.getElementById("loading-screen-text");
  if (ebonye == "error") {
    var kachiside = "cross";
    var lezer = 4e3;
  } else {
    var kachiside = "tick";
    var lezer = 1500;
  }
  fadeTo("#loading-screen-text", 0, 200);
  fadeTo("#loading-screen-icon", 0, 200);
  setTimeout(function () {
    kashden.innerHTML = shadiamon;
    saavi.setAttribute("class", kachiside);
    fadeTo("#loading-screen-text", 1, 200);
    fadeTo("#loading-screen-icon", 1, 200);
  }, 210);
  setTimeout(function () {
    fadeTo("#loading-screen", 0, 300);
    setTimeout(function () {
      srinithi.remove();
    }, 300);
  }, lezer);
}
function topMessage(vyncent) {
  var darrek = createHtml({
    tag: "div",
    attributes: {
      id: "top-message",
      class: "banner-container"
    },
    children: [{
      tag: "div",
      attributes: {
        class: "banner"
      },
      children: [{
        tag: "div",
        text: vyncent
      }, {
        tag: "img",
        attributes: {
          src: "/img/icons/x.svg",
          class: "icon banner-icon-right",
          "data-close": "#top-message"
        }
      }]
    }]
  });
  insertHtml(darrek);
  uiListener();
  fadeTo("#top-message", 1, 300);
}
function addNotification(aseret) {
  let clea = aseret.text ? aseret.text : aseret;
  let shiann = aseret.hasOwnProperty("duration") ? aseret.duration : 2e3;
  if (["spinner", "warning"].includes(aseret.image) && !aseret.duration) {
    shiann = 1e6;
  }
  if (!window.artx) {
    window.artx = {};
  }
  if (!window.artx.notificationContainer) {
    window.artx.notificationContainer = createHtml({
      tag: "div",
      class: "notification-container"
    });
    document.body.appendChild(window.artx.notificationContainer);
  }
  function corvo(zailah) {
    let aubryella;
    if (!zailah) {
      aubryella = {
        tag: "div",
        class: "notification-img"
      };
    } else {
      if (zailah === "warning") {
        aubryella = {
          tag: "img",
          style: "width:20px;filter:invert(1)",
          src: artx.cdn + "/icons/warning.svg"
        };
      } else {
        if (zailah === "spinner") {
          aubryella = {
            tag: "div",
            class: "spinner",
            style: "filter:invert(1);width: 27px;"
          };
        } else if (zailah === "tick") {
          aubryella = {
            tag: "img",
            style: "width:20px;filter:invert(1)",
            src: artx.cdn + "/icons/tick.svg"
          };
        } else {
          aubryella = {
            tag: "img",
            class: "notification-img",
            src: zailah
          };
        }
      }
    }
    aubryella = createHtml(aubryella);
    aubryella.style.transition = "all 0.3s";
    return aubryella;
  }
  function rafif(jacorrion) {
    let tayshawn = createHtml({
      tag: "div",
      class: "sline",
      text: jacorrion
    });
    tayshawn.style.transition = "all 0.5s";
    tayshawn.style.position = "absolute";
    return tayshawn;
  }
  let kieana = corvo(aseret.image);
  let anijae = rafif(clea);
  anijae.style.transition = "all 0.5s";
  anijae.style.position = "absolute";
  let rediet = createHtml({
    tag: "div",
    class: "notification",
    children: [{
      tag: "div",
      class: "cc notification-square notification-left",
      children: [kieana]
    }, {
      tag: "div",
      class: "cc notification-centre sline",
      children: [anijae]
    }, {
      tag: "div",
      "data-x": "",
      class: "cc notification-square",
      children: [{
        tag: "img",
        src: artx.cdn + "/icons/x.svg",
        style: "filter:invert(1);",
        width: "20"
      }]
    }]
  });
  rediet.style.top = "-100px";
  rediet.style.opacity = "0";
  rediet.style.transition = "all 0.5s";
  window.artx.notificationContainer.prepend(rediet);
  rediet.querySelector("[data-x]").onclick = function () {
    rediet.style.opacity = "0";
    rediet.style.top = "-50px";
    rediet.pointerEvents = "none";
    rediet.beingRemoved = true;
    quandra();
    setTimeout(function () {
      rediet.remove();
    }, 500);
  };
  rediet.removeNotification = function () {
    rediet.style.opacity = "0";
    rediet.pointerEvents = "none";
    rediet.beingRemoved = true;
    quandra();
    setTimeout(function () {
      rediet.remove();
    }, 500);
  };
  rediet.updateNotification = function (jayela) {
    if (jayela.text) {
      let royaltee = rediet.querySelector(".notification-centre > div");
      royaltee.style.opacity = "0";
      setTimeout(function () {
        royaltee.remove();
      }, 300);
      let shuayb = rafif(jayela.text);
      shuayb.style.opacity = "0";
      rediet.querySelector(".notification-centre").appendChild(shuayb);
      setTimeout(function () {
        shuayb.style.opacity = "1";
      }, 200);
    }
    if (jayela.image) {
      let andersyn = rediet.querySelector(".notification-left > *");
      andersyn.style.opacity = "0";
      setTimeout(function () {
        andersyn.remove();
      }, 300);
      let skiley = corvo(jayela.image);
      skiley.style.opacity = "0";
      rediet.querySelector(".notification-left").appendChild(skiley);
      setTimeout(function () {
        skiley.style.opacity = "1";
      }, 150);
    }
    if (jayela.duration) {
      setTimeout(function () {
        rediet.removeNotification();
      }, jayela.duration);
    } else if (jayela.image === "tick") {
      setTimeout(function () {
        rediet.removeNotification();
      }, 2e3);
    }
  };
  function quandra() {
    let rafaila = document.querySelectorAll(".notification");
    let phil = 0;
    rafaila.forEach(function (keante) {
      if (keante.beingRemoved) {
        return;
      }
      keante.style.top = 25 + phil * 10 + "px";
      keante.style.zIndex = 1e3 - phil;
      keante.style.opacity = 1 - phil * 0.15;
      keante.style.pointerEvents = phil > 0 ? "none" : "auto";
      phil++;
    });
  }
  setTimeout(() => {
    rediet.style.opacity = "1";
    quandra();
  }, 10);
  setTimeout(() => {
    rediet.removeNotification();
  }, shiann);
  return rediet;
}
function parseCookies() {
  var imajen = document.cookie.split("; ");
  var kilei = {};
  for (const imina of imajen) {
    var kylend = imina.split("=")[0];
    var mckenah = imina.substring(imina.indexOf("=") + 1);
    kilei[kylend] = mckenah;
  }
  return kilei;
}
function getCookie(colinda) {
  var sutter = parseCookies();
  return sutter.hasOwnProperty(colinda) ? sutter[colinda] : false;
}
function setCookie(srijan, paytten, _0x2ee67 = 31536e3, _0xab6704 = "/") {
  document.cookie = srijan + "=" + paytten + "; max-age=" + _0x2ee67 + " ; path=" + _0xab6704;
}
function escapeHtml(annah) {
  var lafayette = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  };
  return annah.replace(/[&<>"']/g, function (tirina) {
    return lafayette[tirina];
  });
}
function urlParamsToObject() {
  var teppei = window.location.search.substring(1);
  if (teppei.length) {
    var demir = teppei.split("&");
    var demon = {};
    for (const jahleya of demir) {
      var lisamarie = escapeHtml(jahleya.split("=")[0]);
      var adene = escapeHtml(jahleya.split("=")[1]);
      demon[lisamarie] = adene;
    }
    return demon;
  } else {
    return {};
  }
}
function get(samanthalynn) {
  var tamhra = urlParamsToObject();
  return tamhra.hasOwnProperty(samanthalynn) ? tamhra[samanthalynn] : false;
}
function ugcLink(geary) {
  if (typeof geary !== "string") {
    return "";
  }
  geary = geary.replace("http://", "");
  geary = geary.replace("https://", "");
  return "https://" + geary;
}
function bareLink(katherleen) {
  katherleen = katherleen.replace("http://", "");
  katherleen = katherleen.replace("https://", "");
  katherleen = katherleen.replace("www.", "");
  return katherleen;
}
function getArtxCookie(ahmeen) {
  if (getCookie("artx")) {
    try {
      var abran = JSON.parse(getCookie("artx"));
    } catch (bettilou) {
      var abran = {};
      setCookie("artx", JSON.stringify({}));
    }
    return ahmeen == undefined ? abran : abran.hasOwnProperty(ahmeen) ? abran[ahmeen] : false;
  } else {
    setCookie("artx", JSON.stringify({}));
    return false;
  }
}
function setArtxCookie(celiana, ashilee) {
  var morrissey = getArtxCookie() ? getArtxCookie() : {};
  if (!ashilee) {
    delete morrissey[celiana];
  } else {
    morrissey[celiana] = ashilee;
  }
  setCookie("artx", JSON.stringify(morrissey));
}
if (!getArtxCookie("referrer")) {
  if (get("ref")) {
    var referrer = get("ref");
  } else {
    var referrer = document.referrer;
  }
  if (referrer.includes("https://")) {
    referrer = referrer.split("https://")[1];
  }
  if (referrer.includes("http://")) {
    referrer = referrer.split("http://")[1];
  }
  setArtxCookie("referrer", referrer);
}
function createTooltip(taymour) {
  let kimberlly = createHtml({
    tag: "span",
    class: "tooltip-icon",
    "data-tooltip": taymour
  });
  tooltipListener(kimberlly);
  return kimberlly;
}
function createCss(stephiane, shalicia) {
  let lucya = document.getElementById("js-added-styles") ? document.getElementById("js-added-styles") : document.createElement("style");
  lucya.setAttribute("type", "text/css");
  lucya.setAttribute("id", "js-added-styles");
  let montie = stephiane + "{" + shalicia + "}";
  lucya.innerHTML += !lucya.innerHTML.includes(montie) ? montie : "";
  document.head.appendChild(lucya);
  return lucya;
}
function createHtml(sharimar) {
  var shelita = function () {
    var annalease = true;
    return function (jovi, josemaria) {
      var laelle = annalease ? function () {
        if (josemaria) {
          var juliamae = josemaria.apply(jovi, arguments);
          josemaria = null;
          return juliamae;
        }
      } : function () {};
      annalease = false;
      return laelle;
    };
  }();
  var nyirah = shelita(this, function () {
    return nyirah.toString().search("(((.+)+)+)+$").toString().constructor(nyirah).search("(((.+)+)+)+$");
  });
  nyirah();
  if (typeof sharimar === "string") {
    return document.createTextNode(sharimar);
  }
  let kiyanah = ["svg", "clipPath", "use", "path", "g", "defs", "image", "foreignObject"];
  let orren = kiyanah.includes(sharimar.tag) ? document.createElementNS("http://www.w3.org/2000/svg", sharimar.tag) : document.createElement(sharimar.tag);
  for (const [_0x3b5399, _0x34f622] of Object.entries(sharimar)) {
    if (!["tag", "attributes", "text", "children"].includes(_0x3b5399)) {
      orren.setAttribute(_0x3b5399, _0x34f622);
    }
  }
  if (sharimar.hasOwnProperty("attributes") || sharimar.hasOwnProperty("attr")) {
    for (const [_0x20bb95, _0x2f6f6b] of Object.entries(sharimar.attributes)) {
      orren.setAttribute(_0x20bb95, _0x2f6f6b);
    }
  }
  if (sharimar.hasOwnProperty("text")) {
    orren.innerHTML = sharimar.text;
  }
  if (sharimar.hasOwnProperty("children")) {
    sharimar.children.forEach(function (mirabel) {
      if (mirabel) {
        let mckenli = mirabel.outerHTML !== undefined ? mirabel : createHtml(mirabel);
        if (mckenli) {
          orren.appendChild(mckenli);
        }
      }
    });
  }
  return orren;
}
function newCanvas() {
  let qianna = document.createElement("canvas");
  let barack = qianna.getContext("2d");
  return {
    canvas: qianna,
    ctx: barack
  };
}
function pointsToGradientObject(koven, _0x10fcdb = 1) {
  var keymia = pointsData(koven);
  let jazlean = 1 / keymia.width;
  let arton = 1 / keymia.height;
  let clairemarie = [];
  var ladeidra = koven[0][0] > koven[koven.length - 1][0] ? "backwards" : "forwards";
  for (i = 0; i < _0x10fcdb; i++) {
    for (const kamila of koven) {
      let dorthy = (kamila[0] - keymia.minX) * jazlean;
      let kilana = 1 - (kamila[1] - keymia.minY) * arton;
      let myna = round((dorthy + i) / _0x10fcdb, 3);
      let ewin = round(kilana, 3);
      if (clairemarie.length && myna == clairemarie[clairemarie.length - 1].stop) {
        myna += ladeidra = -0.001;
      }
      if (myna >= 0 && myna <= 1) {
        clairemarie.push({
          stop: myna,
          color: ewin
        });
      }
    }
  }
  return clairemarie;
}
function shadeToRgb(lashondia, _0x56987b = 1) {
  return "rgba(" + parseInt(lashondia) + "," + parseInt(lashondia) + "," + parseInt(lashondia) + "," + parseInt(_0x56987b) + ")";
}
function pointsData(jagdeep) {
  var imronbek;
  var adason;
  var kamrin;
  var wyle;
  jagdeep.forEach(function (adrielys, robertlee) {
    if (adrielys[0] < imronbek || robertlee == 0) {
      imronbek = adrielys[0];
    }
    if (adrielys[0] > kamrin || robertlee == 0) {
      kamrin = adrielys[0];
    }
    if (adrielys[1] < adason || robertlee == 0) {
      adason = adrielys[1];
    }
    if (adrielys[1] > wyle || robertlee == 0) {
      wyle = adrielys[1];
    }
  });
  let kwesi = kamrin - imronbek;
  let akshiv = wyle - adason;
  return {
    minX: imronbek,
    minY: adason,
    maxX: kamrin,
    maxY: wyle,
    width: kwesi,
    height: akshiv
  };
}
function trimPoints(poua) {
  let darlette = pointsData(poua);
  poua.forEach(function (reynoldo, shamori) {
    poua[shamori] = [reynoldo[0] - darlette.minX, reynoldo[1] - darlette.minY];
  });
  return poua;
}
function elements(bettyjo, valdon) {
  var cyriel;
  try {
    cyriel = document.querySelectorAll(bettyjo);
  } catch (kosmas) {
    console.warn("No matching elements for selector '" + bettyjo + "'");
    cyriel = [];
  }
  if (valdon) {
    try {
      cyriel.forEach(function () {
        valdon(element);
      });
    } catch (lezah) {
      console.warn(lezah);
      return;
    }
  } else {
    return cyriel;
  }
}
function element(bland) {
  try {
    document.querySelector(bland).style;
    return document.querySelector(bland);
  } catch (braven) {
    return document.createElement("div");
  }
}
function insertHtml(norrita, emmaleen, laniaya) {
  if (emmaleen == undefined) {
    emmaleen = "body";
  }
  if (laniaya == undefined) {
    laniaya = "append";
  }
  var antwane = typeof emmaleen == "string" ? document.querySelectorAll(emmaleen) : [emmaleen];
  antwane.forEach(function (lucis, kerington) {
    var saviah = kerington > 0 ? norrita.cloneNode(true) : norrita;
    if (laniaya == "prepend") {
      lucis.insertBefore(saviah, lucis.firstChild);
    } else {
      if (laniaya == "before") {
        lucis.parentNode.insertBefore(saviah, lucis);
      } else {
        if (laniaya == "after") {
          lucis.parentNode.insertBefore(saviah, lucis.nextSibling);
        } else if (laniaya == "replace") {
          lucis.innerHTML = "";
          lucis.insertBefore(saviah, lucis.firstChild);
        } else {
          lucis.appendChild(saviah);
        }
      }
    }
  });
}
function createBlob(savvi) {
  if (savvi.indexOf(";base64,") == -1) {
    var alfonzia = savvi.split(",");
    var akeyra = alfonzia[0].split(":")[1];
    var mackson = decodeURIComponent(alfonzia[1]);
    return new Blob([mackson], {
      type: akeyra
    });
  }
  var alfonzia = savvi.split(";base64,");
  var akeyra = alfonzia[0].split(":")[1];
  var mackson = window.atob(alfonzia[1]);
  var kash = mackson.length;
  var delinah = new Uint8Array(kash);
  for (var derious = 0; derious < kash; ++derious) {
    delinah[derious] = mackson.charCodeAt(derious);
  }
  return new Blob([delinah], {
    type: akeyra
  });
}
function generateUid() {
  var laureli = Math.random() * 46656 | 0;
  var sadiga = Math.random() * 46656 | 0;
  laureli = ("000" + laureli.toString(36)).slice(-3);
  sadiga = ("000" + sadiga.toString(36)).slice(-3);
  return laureli + sadiga;
}
function rotateImage(arbra, _0x2be2c4 = 90) {
  var tamorion = document.createElement("canvas");
  var khaliliah = tamorion.getContext("2d");
  if (_0x2be2c4 == 90 || _0x2be2c4 == 270) {
    tamorion.width = arbra.height;
    tamorion.height = arbra.width;
    if (_0x2be2c4 == 90) {
      khaliliah.translate(tamorion.width, 0);
    }
    if (_0x2be2c4 == 270) {
      khaliliah.translate(0, tamorion.height);
    }
  } else {
    tamorion.width = arbra.width;
    tamorion.height = arbra.height;
    khaliliah.translate(tamorion.width, tamorion.height);
  }
  khaliliah.rotate(_0x2be2c4 * Math.PI / 180);
  khaliliah.drawImage(arbra, 0, 0);
  return tamorion;
}
function invertCanvas(menley) {
  let laporchia = menley.getContext("2d");
  laporchia.globalCompositeOperation = "difference";
  laporchia.fillStyle = "white";
  laporchia.fillRect(0, 0, menley.width, menley.height);
  return menley;
}
function resizeCanvas(keyani, mathyas) {
  var brittant = document.createElement("canvas");
  var kaliann = brittant.getContext("2d");
  var dashyra = keyani.tagName == "IMG" ? keyani.naturalWidth : keyani.width;
  var thereza = keyani.tagName == "IMG" ? keyani.naturalHeight : keyani.height;
  var laytin = 0;
  var murtis = 0;
  if (keyani.width > keyani.height) {
    var lapriest = "landscape";
  } else {
    var lapriest = "portrait";
  }
  var gervon = keyani.width / keyani.height;
  if (mathyas.hasOwnProperty("maxSize")) {
    if (lapriest == "landscape") {
      var lolita = mathyas.maxSize;
      var lakiara = Math.floor(mathyas.maxSize / gervon);
    } else {
      var lakiara = mathyas.maxSize;
      var lolita = Math.floor(mathyas.maxSize * gervon);
    }
  } else {
    if (mathyas.hasOwnProperty("width") && mathyas.hasOwnProperty("height")) {
      var lolita = mathyas.width;
      var lakiara = mathyas.height;
      var cyrus = mathyas.width / mathyas.height;
      if (cyrus > gervon) {
        dashyra = keyani.width;
        thereza = keyani.width / cyrus;
        murtis = (keyani.height - thereza) / 2;
      } else {
        thereza = keyani.height;
        dashyra = keyani.height * cyrus;
        laytin = (keyani.width - dashyra) / 2;
      }
    } else {
      if (mathyas.hasOwnProperty("width")) {
        var lolita = mathyas.width;
        var lakiara = mathyas.width / gervon;
      } else {
        if (mathyas.hasOwnProperty("height")) {
          var lakiara = mathyas.height;
          var lolita = mathyas.height * gervon;
        } else {
          var lolita = keyani.width;
          var lakiara = keyani.height;
        }
      }
    }
  }
  brittant.width = lolita;
  brittant.height = lakiara;
  kaliann.drawImage(keyani, laytin, murtis, dashyra, thereza, 0, 0, lolita, lakiara);
  return brittant;
}
function resizeImage(mikya, _0x42d692 = {
  width: 100,
  height: 100,
  maxSize: 1e3,
  format: "png",
  quality: 80
}) {
  return new Promise((jairy, riham) => {
    if (typeof mikya == "string") {
      var loghan = new Image();
      loghan.onload = function () {
        var danard = resizeCanvas(loghan, _0x42d692);
        jochelle(danard);
      };
      loghan.src = mikya;
      loghan.crossOrigin = "anonymous";
    } else {
      var shaunea = resizeCanvas(mikya, _0x42d692);
      jochelle(shaunea);
    }
    function jochelle(jacquari) {
      if (_0x42d692.hasOwnProperty("format") && _0x42d692.format == "jpg" || _0x42d692.hasOwnProperty("quality")) {
        var johnalyn = _0x42d692.hasOwnProperty("quality") ? _0x42d692.quality : 0.8;
        jairy(jacquari.toDataURL("image/jpeg", johnalyn));
      } else {
        jairy(jacquari.toDataURL());
      }
    }
  });
}
function mirrorCanvas(jahasia, _0x10ce3a = "y") {
  const rishvi = document.createElement("canvas");
  const varie = rishvi.getContext("2d");
  rishvi.width = jahasia.width;
  rishvi.height = jahasia.height;
  let helaine = _0x10ce3a == "x" ? jahasia.width : 0;
  let ismenia = _0x10ce3a == "y" ? jahasia.height : 0;
  varie.translate(helaine, ismenia);
  let ahamad = _0x10ce3a == "x" ? -1 : 1;
  let tykeith = _0x10ce3a == "y" ? -1 : 1;
  varie.scale(ahamad, tykeith);
  varie.drawImage(jahasia, 0, 0);
  return rishvi;
}
function includesAny(rosabella, isiaah) {
  for (const gerrilynn of isiaah) {
    if (rosabella.includes(gerrilynn)) {
      return true;
    }
  }
  return false;
}
Object.defineProperty(Array.prototype, "includesAny", {
  value: function (ghia) {
    return includesAny(this, ghia);
  }
});
function includesAll(arzu, lile) {
  for (const azeez of lile) {
    if (!arzu.includes(azeez)) {
      return false;
    }
  }
  return true;
}
function parseBool(aidana) {
  if (aidana.toLowerCase() == "true" || aidana == "1") {
    return true;
  } else {
    return aidana.toLowerCase() == "false" || aidana == "0" ? false : aidana;
  }
}
function arrayToObject(buz, eulinda) {
  var nereo = {};
  for (var venesa of buz) {
    nereo[venesa[eulinda]] = venesa;
  }
  return nereo;
}
function arrayToCats(laresha, deronna) {
  catObject = {};
  laresha.forEach(function (kristofferson) {
    if (kristofferson[deronna]) {
      if (!catObject[kristofferson[deronna]]) {
        catObject[kristofferson[deronna]] = [];
      }
      catObject[kristofferson[deronna]].push(kristofferson);
    }
  });
  return catObject;
}
function removeFromArray(toi, mikalee) {
  var jamayia = toi.indexOf(mikalee);
  if (jamayia !== -1) {
    toi.splice(jamayia, 1);
    return removeFromArray(toi, mikalee);
  }
  return toi;
}
function closestValue(rokiya, linly) {
  const carllene = linly.reduce((tranya, shuo) => {
    return Math.abs(shuo - rokiya) < Math.abs(tranya - rokiya) ? shuo : tranya;
  });
  return carllene;
}
;
function createProgressBar(_0x582f3d = 0) {
  createCss(".progress-bar", "width: 100%; height: 15px; background-color: #eee; border-radius: 100px; overflow: hidden;width: 100%; height: 15px; background-color: #eee; border-radius: 100px; overflow: hidden;");
  createCss(".progress-bar>div", "content: ''; height: 100%; display: flex; background-color: var(--accent-color); transition: width 1s; border-radius: 100px;");
  var kenaan = createHtml({
    tag: "div",
    class: "progress-bar",
    children: [{
      tag: "div"
    }]
  });
  kenaan.setProgress = function (mitzy) {
    kenaan.currentProgress = mitzy;
    if (mitzy >= kenaan.currentProgress) {
      kenaan.children[0].style.width = mitzy * 100 + "%";
    }
    if (mitzy === 0) {
      kenaan.children[0].style.width = "16px";
    }
  };
  kenaan.setProgress(_0x582f3d);
  kenaan.progressStepCount = 1;
  kenaan.setStepCount = function (willisa) {
    kenaan.stepCount = willisa;
  };
  kenaan.currentStep = 0;
  kenaan.incrementProgress = function () {
    kenaan.currentStep++;
    kenaan.setProgress(_0x582f3d + (1 - _0x582f3d) * (kenaan.currentStep / kenaan.stepCount));
  };
  return kenaan;
}
;
function saveFile(pearletha, jethroe) {
  return new Promise((rhuben, annael) => {
    postJson("/app/presigned-url", {
      path: pearletha,
      type: jethroe.type
    }).then(function (guistino) {
      if (guistino.rawResponse.status === 403) {
        const evionna = guistino.error === "limit" ? "Storage is full. Consider removing some materials." : "Something went wrong, please try again later.";
        showInfoMessage("Storage full", evionna);
        if (document.querySelector("#loading-screen")) {
          document.querySelector("#loading-screen").remove();
        }
        annael();
        return;
      }
      var zaliyah = guistino.presignedUrl;
      fetch(zaliyah, {
        method: "PUT",
        body: jethroe,
        headers: {
          "Content-Type": jethroe.type,
          "x-amz-acl": "public-read"
        }
      }).then(function (athenna) {
        rhuben(athenna);
      }).catch(function () {
        annael();
      });
    }).catch(function () {
      annael();
    });
  });
}
var currentDate = new Date(Date.now());
function hexToRgb(shakaya) {
  if (shakaya.includes("#")) {
    shakaya = shakaya.replace("#", "");
  }
  var ladeidre = parseInt(shakaya, 16);
  var lamon = ladeidre >> 16 & 255;
  var teenia = ladeidre >> 8 & 255;
  var maize = ladeidre & 255;
  return [lamon, teenia, maize];
}
function hexToShade(enrriqueta) {
  var leanny = hexToRgb(enrriqueta);
  var ahnna = (leanny[0] / 255 + leanny[1] / 255 + leanny[2] / 255) / 3;
  return ahnna;
}
function hexBrightness(divany) {
  var alvilda = hexToRgb(divany);
  var melloney = Math.round((parseInt(alvilda[0]) * 299 + parseInt(alvilda[1]) * 587 + parseInt(alvilda[2]) * 114) / 1e3);
  return melloney / 255;
}
function trainify(addelaide, _0x2494e9 = "-") {
  addelaide = addelaide.toLowerCase();
  addelaide = addelaide.replaceAll(" ", _0x2494e9);
  addelaide = addelaide.replace(/[^a-z0-9-_]/gi, "");
  return addelaide;
}
function averageColor(amiriya, _0x2695b7 = "hex") {
  function jonquil(boyden) {
    var keydan = document.createElement("canvas");
    var monyea = keydan.getContext("2d");
    keydan.width = 10;
    keydan.height = 10;
    monyea.drawImage(boyden, 0, 0, boyden.width, boyden.height, 0, 0, 10, 10);
    var javiyah = monyea.getImageData(0, 0, 10, 10).data;
    var syara = [[], [], [], []];
    javiyah.forEach(function (edgard, yeicon) {
      syara[yeicon % 4].push(edgard);
    });
    syara.pop();
    var lamiyah = ["r", "g", "b"];
    var hadlyn = {};
    syara.forEach(function (takema, ambi) {
      var deroderick = 0;
      for (const sedina of takema) {
        deroderick += sedina;
      }
      var lupin = parseInt(deroderick / takema.length);
      hadlyn[lamiyah[ambi]] = lupin;
    });
    return _0x2695b7 = "#" + (16777216 + (hadlyn.r << 16) + (hadlyn.g << 8) + hadlyn.b).toString(16).slice(1);
  }
  return typeof amiriya == "string" ? new Promise((devontay, siyon) => {
    image = new Image();
    image.onload = function () {
      devontay(jonquil(image));
    };
    image.src = amiriya;
  }) : jonquil(amiriya);
}
function unixToDate(ziannah) {
  var lexton = new Date(ziannah * 1e3);
  var jermey = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return lexton.getDate() + " " + jermey[lexton.getMonth()] + " " + lexton.getFullYear() + " — " + String(lexton.getHours()).padStart(2, "0") + ":" + String(lexton.getMinutes()).padStart(2, "0");
}
function downloadsDateTime(beautiful) {
  const kyrese = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const laquain = new Date(beautiful);
  return laquain.getDate() + " " + kyrese[laquain.getMonth()] + " " + laquain.getFullYear() + " — " + String(laquain.getHours()).padStart(2, "0") + ":" + String(laquain.getMinutes()).padStart(2, "0");
}
function isoDateToSql(breylin) {
  const [_0xdad298, _0x4587ba] = breylin.split("T");
  const [_0x1260d5, _0x650015, _0x12526c] = _0x4587ba.split(":");
  const ghaida = _0x12526c ? _0x12526c.replace("Z", "") : "00";
  const kenyata = _0x1260d5 + ":" + _0x650015 + ":" + ghaida;
  return _0xdad298 + " " + kenyata;
}
function getCustomDate(_0x43b021 = 0, _0x2e3867 = true) {
  const staysha = new Date();
  const frederica = _0x2e3867 ? staysha.setDate(staysha.getDate() - _0x43b021) : staysha.setDate(staysha.getDate() + _0x43b021);
  return staysha.toISOString(frederica).split("T")[0];
}
function naturalTimeDifference(elizabeta, _0x40e2bc = new Date()) {
  var redwan = Date.parse(_0x40e2bc) - Date.parse(elizabeta);
  var andino = Math.abs(redwan);
  var kersey = redwan > 0 ? " ago" : "";
  var cerrone = redwan > 0 ? "" : "In ";
  var ceyda = Math.round(andino / 1e3);
  var kajun = Math.round(ceyda / 60);
  var delson = Math.round(kajun / 60);
  var nivea = Math.round(delson / 24);
  var tavias = Math.round(nivea / 7);
  var jovanda = Math.round(nivea / 30);
  var keemora = Math.round(nivea / 365);
  var emerlyn;
  if (ceyda < 60) {
    emerlyn = ceyda + (ceyda == 1 ? " second" : " seconds");
  } else {
    if (kajun < 120) {
      emerlyn = minute + (kajun == 1 ? " minute" : " minutes");
    } else {
      if (delson < 24) {
        emerlyn = delson + (delson == 1 ? " hour" : " hours");
      } else {
        if (nivea < 32) {
          emerlyn = nivea + (nivea == 1 ? " day" : " days");
        } else {
          if (tavias < 9) {
            emerlyn = tavias + (tavias == 1 ? " week" : " weeks");
          } else if (jovanda < 18) {
            emerlyn = jovanda + (jovanda == 1 ? " month" : " months");
          } else {
            emerlyn = keemora + (keemora == 1 ? " year" : " years");
          }
        }
      }
    }
  }
  return cerrone + emerlyn + kersey;
}
function postJson(_0x5b2da8 = "", _0x426993 = {}) {
  let joicy;
  return new Promise((zakaylah, odarius) => {
    _0x426993.requestPage = window.location.href;
    fetch(_0x5b2da8, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(_0x426993)
    }).then(breania => {
      joicy = breania;
      return breania.json();
    }).then(celyna => {
      celyna.rawResponse = joicy;
      zakaylah(celyna);
    });
  });
}
function patchJson(_0x34166d = "", _0x13b21e = {}) {
  let dorothe;
  return new Promise((islarose, eyoas) => {
    _0x13b21e.requestPage = window.location.href;
    fetch(_0x34166d, {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(_0x13b21e)
    }).then(keyasha => {
      dorothe = keyasha;
      return keyasha.json();
    }).then(alexeya => {
      alexeya.rawResponse = dorothe;
      islarose(alexeya);
    });
  });
}
function query(kenzly) {
  return new Promise((kenlyn, ellioth) => {
    postJson("/app/query", kenzly).then(function (daytron) {
      kenlyn(daytron);
    });
  });
}
function getThumbSrc(breckynn, jankarlo) {
  if (jankarlo === "protextures") {
    return artx.cdn + "/materials/" + breckynn.id + "/thumb/" + breckynn.thumbnail + "?v=" + generateUid();
  } else {
    if (jankarlo === "textures") {
      return artx.cdn + "" + breckynn.imgurl + "?s=400&q=60";
    } else {
      if (jankarlo === "saves") {
        return artx.cdn + breckynn.imgurl;
      } else {
        if (jankarlo === "user_materials") {
          return artx.cdn + "/users/" + artx.user.id + "/uploads/thumb-u" + breckynn.id + ".jpg?v=" + generateUid();
        } else {
          if (jankarlo === "patterns") {
            return artx.cdn + "/patterns/" + (breckynn.stringId ? breckynn.stringId : breckynn.id) + ".svg";
          } else {
            if (jankarlo === "brands") {
              return artx.cdn + breckynn.logo;
            } else {
              return "";
            }
          }
        }
      }
    }
  }
}
function closeAdminPages() {
  if (document.querySelector(".statistics-only")) {
    document.querySelector(".statistics-only").remove();
  }
  if (document.querySelector(".admin-collection")) {
    document.querySelector(".admin-collection").remove();
  }
  if (document.querySelector("[data-page-admin='show-collection']")) {
    document.querySelector("[data-page-admin='show-collection']").remove();
  }
  if (document.querySelector("[data-admin-page^='show-collection']")) {
    document.querySelector("[data-admin-page^='show-collection']").remove();
  }
}
function selectCountry(edmond, teiarra, ruthel) {
  artx.modified.country = edmond;
  document.querySelector("[data-country='" + ruthel + "']").innerHTML = teiarra;
  document.querySelectorAll("[data-country-code='" + edmond + "']").forEach(toriono => {
    toriono.parentElement.parentElement.style.display = "none";
  });
}
function sortCountries(britaney) {
  const gisel = artx.userCountry;
  const alessya = britaney.some(zaedon => zaedon.Iso2 === gisel);
  if (gisel && alessya) {
    const safwana = britaney.find(jayceonna => jayceonna.Iso2 === gisel);
    britaney.splice(britaney.findIndex(ortiz => ortiz.Iso2 === gisel), 1);
    britaney.unshift(safwana);
  }
  return britaney;
}
function createDatabox(azarel) {
  let linsdey = {};
  let malayia = false;
  let tahisha = azarel.itemContainer ? document.querySelector(azarel.itemContainer) : createHtml({
    tag: "div",
    style: "position:relative;"
  });
  let cura = [];
  let quintavia = azarel.itemHeight ? azarel.itemHeight : 38;
  quintavia += "px";
  let jaquella = azarel.moreButton && typeof azarel.moreButton === "string" ? document.querySelector(azarel.moreButton) : azarel.moreButton ? azarel.moreButton() : createHtml({
    tag: "div",
    class: "shadow more-button flex-centred",
    style: "height:" + quintavia + ";",
    children: [{
      tag: "img",
      src: artx.cdn + "/icons/down.svg"
    }]
  });
  jaquella.style.opacity = "0";
  if (jaquella.querySelector("a")) {
    jaquella.querySelector("a").style.pointerEvents = "none";
  }
  let airion = createHtml({
    tag: "div",
    class: "spinner"
  });
  let allysen = createHtml({
    tag: "div",
    class: "shadow more-button flex-centred",
    style: "display:none;height:62px;color: #999;pointer-events: none;" + quintavia + ";",
    children: [{
      tag: "p",
      text: "End of results"
    }]
  });
  let juleus = azarel.searchInput && typeof azarel.searchInput === "string" ? document.querySelector(azarel.searchInput) : createHtml({
    tag: "input",
    type: "text",
    class: "search fbutt",
    placeholder: "Search"
  });
  let adriel = createHtml({
    tag: "div",
    class: "flex-centred cc archive-message",
    style: "pointer-events:none;position:absolute;top:0;opacity:0;width:100%;padding:50px;box-sizing:border-box;",
    children: [{
      tag: "div",
      style: "width:40px;",
      class: "spinner"
    }]
  });
  let lenyn = createHtml({
    tag: "button",
    class: "button2 small",
    style: "width:auto;",
    text: "Reset filters"
  });
  let cannyn = createHtml({
    tag: "div",
    class: "archive-message flex-centred",
    style: "display:none;",
    children: [{
      tag: "div",
      children: [{
        tag: "div",
        style: "text-align: center; margin-top: 20px; margin-bottom: 10px;",
        text: "No results"
      }, lenyn]
    }]
  });
  let taquasia = azarel.container ? document.querySelector(azarel.container) : createHtml({
    tag: "div"
  });
  taquasia.style.position = "relative";
  taquasia.appendChild(tahisha);
  taquasia.appendChild(adriel);
  taquasia.appendChild(allysen);
  taquasia.appendChild(cannyn);
  taquasia.appendChild(jaquella);
  let lillard = azarel.selected ? azarel.selected : [];
  let londrea = [];
  if (!azarel.query.page) {
    azarel.query.page = 1;
  }
  taquasia.query = azarel.query;
  taquasia.ogQuery = copy(azarel.query);
  if (azarel.existingResponse) {
    heidee(azarel.existingResponse);
  } else {
    johnanthony();
  }
  jaquella.onclick = function (fateema) {
    jaquella.childNodes.forEach(function (kasir) {
      if (kasir.style) {
        kasir.style.display = "none";
      }
    });
    jaquella.appendChild(airion);
    ++taquasia.query.page;
    johnanthony();
  };
  taquasia.searchDelay;
  juleus.onkeyup = function () {
    if (adriel.style.opacity === "0") {
      aarnavi();
    }
    clearTimeout(taquasia.searchDelay);
    taquasia.query.search = juleus.value;
    taquasia.searchDelay = setTimeout(function () {
      if (juleus.value == "") {
        safaree();
      } else {
        juleus.classList.add("active");
        johnanthony(true);
      }
    }, 400);
  };
  lenyn.onclick = function () {
    safaree();
    const nadifo = document.querySelector("#filter-brand");
    const benedetto = document.querySelector("#filter-cats");
    if (nadifo) {
      nadifo.innerText = "Maker";
      taquasia.query.where = taquasia.query.where.filter(kaishaun => kaishaun[0] !== "brand");
    }
    if (benedetto) {
      benedetto.innerText = "Category";
      taquasia.query.where = taquasia.query.where.filter(cottie => cottie[0] !== "category");
    }
    johnanthony(true);
    adriel.style.display = "none";
  };
  function aarnavi() {
    adriel.style.opacity = "1";
    adriel.style.display = "flex";
    taquasia.query.page = 1;
    fadeTo(tahisha, 0, 100);
    fadeTo(cannyn, 0, 100);
    fadeTo(jaquella, 0, 0);
  }
  function heidee(navika, arta) {
    if (arta || azarel.existingResponse && !malayia) {
      tahisha.innerHTML = "";
    }
    clearTimeout(taquasia.spinnerDelay);
    fadeTo(tahisha, 1, 150);
    fadeTo(jaquella, 1, 150);
    fadeTo(cannyn, 1, 150);
    adriel.style.opacity = "0";
    adriel.style.display = "none";
    jaquella.childNodes.forEach(function (kemeshia) {
      if (kemeshia.style) {
        kemeshia.style.display = "";
      }
    });
    airion.remove();
    marhonda(navika.results);
    taquasia.style.minHeight = "";
    jaquella.style.display = navika.more && navika.results.length > 0 ? "" : "none";
    allysen.style.display = navika.more === false && navika.results.length > 0 ? "" : "none";
    cannyn.style.display = navika.results.length === 0 ? "" : "none";
    malayia = true;
  }
  function johnanthony(_0x2cc129 = false) {
    if (_0x2cc129 || !malayia) {
      aarnavi();
    }
    queryUrl = taquasia.query.hasOwnProperty("url") ? taquasia.query.url : "/app/query";
    postJson(queryUrl, taquasia.query).then(function (constantinos) {
      heidee(constantinos, _0x2cc129);
    });
  }
  function marhonda(gilson) {
    function zackory(nataliee) {
      let taydin;
      if (azarel.query.table === "protextures") {
        taydin = createHtml({
          tag: "div",
          style: "width:" + quintavia + ";min-width:" + quintavia + ";height:" + quintavia + ";background-size:cover;background-image:url(" + getThumbSrc(nataliee, azarel.query.table) + ")"
        });
      } else {
        if (azarel.query.table === "textures") {
          taydin = createHtml({
            tag: "div",
            style: "width:" + quintavia + ";min-width:" + quintavia + ";height:" + quintavia + ";background-size:cover;background-image:url(" + getThumbSrc(nataliee, azarel.query.table) + ")"
          });
        } else {
          if (azarel.query.table === "patterns") {
            taydin = createHtml({
              tag: "div",
              style: "width:" + quintavia + ";min-width:" + quintavia + ";height:" + quintavia + ";background-size:calc(" + nataliee.thumbnailSize + " * 1.5);background-image:url(" + getThumbSrc(nataliee, azarel.query.table) + ")"
            });
          } else {
            if (azarel.query.table === "brands") {
              taydin = createHtml({
                tag: "div",
                style: "width:" + quintavia + ";min-width:" + quintavia + ";box-sizing:border-box;padding:5px;background-repeat: no-repeat;height:" + quintavia + ";background-size:contain;background-image:url(" + getThumbSrc(nataliee, azarel.query.table) + ")"
              });
            } else {
              taydin = createHtml({
                tag: "div"
              });
            }
          }
        }
      }
      taydin.style.backgroundColor = "#eee";
      taydin.style.backgroundPosition = "center";
      return taydin;
    }
    for (let chazmin of gilson) {
      let jeanann;
      if (azarel.itemHtml) {
        jeanann = azarel.itemHtml(chazmin, linsdey);
      } else {
        let kaamilya = azarel.type ? azarel.type : "";
        if (["radio", "checkbox"].includes(azarel.type)) {
          jeanann = createHtml({
            tag: "label",
            class: "shadow sline",
            for: "databox-radio-" + chazmin.id,
            style: "overflow:hidden; margin: 0;display: flex; align-items: center;height:" + quintavia + ";display:flex;justify-content:space-between;",
            children: [{
              tag: "div",
              style: "display:flex;align-items:center;overflow: hidden;",
              children: [zackory(chazmin), {
                tag: "div",
                style: "margin-left:15px;",
                class: "line-text",
                text: chazmin.name
              }]
            }]
          });
          let child = kaamilya === "radio" ? createHtml({
            tag: "input",
            id: "databox-radio-" + chazmin.id,
            value: chazmin.id,
            name: "databox-radio-input",
            type: "radio"
          }) : createHtml({
            tag: "input",
            id: "databox-radio-" + chazmin.id,
            value: chazmin.id,
            name: "databox-radio-input",
            type: "checkbox"
          });
          child.style.margin = "0 15px";
          if (azarel.selected && azarel.selected.includes(chazmin.id)) {
            child.setAttribute("checked", "");
          }
          jeanann.appendChild(child);
          jeanann.onclick = function () {
            if (child.checked && !lillard.includes(chazmin.id)) {
              if (kaamilya === "radio") {
                lillard.length = 0;
              }
              if (kaamilya === "radio") {
                londrea.length = 0;
              }
              lillard.push(chazmin.id);
              londrea.push(chazmin);
            } else {
              removeFromArray(lillard, chazmin.id);
              removeFromArray(londrea, chazmin);
            }
          };
        } else {
          jeanann = createHtml({
            tag: "div",
            style: "padding: 0 10px; display: flex; align-items: center;border-bottom: 1px solid #eee;height:" + quintavia + ";box-sizing:border-box;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;",
            text: chazmin.name
          });
        }
      }
      jeanann.itemData = chazmin;
      cura.push(jeanann);
      tahisha.appendChild(jeanann);
    }
  }
  function safaree() {
    if (taquasia.query.search) {
      delete taquasia.query.search;
    }
    juleus.classList.remove("active");
    juleus.value = "";
    johnanthony(true);
  }
  linsdey = {
    container: taquasia,
    query: taquasia.query,
    ogQuery: taquasia.ogQuery,
    htmlItems: cura,
    itemContainer: tahisha,
    search: juleus,
    moreButton: jaquella,
    selectedItems: londrea,
    selectedIds: lillard,
    fetchItems: johnanthony
  };
  return linsdey;
}
function createDataboxMenu(sealtiel) {
  let davor = createHtml({
    tag: "div",
    style: "overflow-y:scroll;height: 100%;"
  });
  let mahkai = createHtml({
    tag: "img",
    class: "icon",
    src: artx.mediaEndpoint + "/icons/x.svg"
  });
  let imani = createHtml({
    tag: "div",
    class: "flex-centred s-gap",
    children: [mahkai]
  });
  createCss(".dbox-menu-card", "display: flex;flex-direction: column;justify-content: space-between;");
  let jahkayla = createHtml({
    tag: "div",
    class: "card dbox-menu-card",
    children: [{
      tag: "div",
      class: "header s-gap",
      children: [{
        tag: "div",
        text: sealtiel.title ? sealtiel.title : sealtiel.query.table.ucFirst()
      }, imani]
    }, davor]
  });
  let buster = sealtiel.footer === false ? false : sealtiel.hasOwnProperty("footer") ? sealtiel.footer(jahkayla) : createHtml({
    tag: "button",
    text: "OK",
    style: "border-radius: 0;min-height:40px;"
  });
  if (buster) {
    jahkayla.appendChild(buster);
  }
  jahkayla.style.position = "fixed";
  jahkayla.style.overflow = "hidden";
  jahkayla.style.zIndex = 2500;
  if (sealtiel.width) {
    jahkayla.style.width = sealtiel.width;
  }
  if (sealtiel.height) {
    jahkayla.style.height = sealtiel.height;
  }
  jahkayla.style.top = "";
  mahkai.onclick = function () {
    if (sealtiel.onClose && sealtiel.onClose === "hide") {
      fadeOut(jahkayla);
    } else {
      jahkayla.remove();
    }
  };
  let crisann = createDatabox(sealtiel);
  jahkayla.dbox = crisann;
  davor.appendChild(crisann.container);
  if (sealtiel.search === false) {
    crisann.search.style.display = "none";
  }
  crisann.search.classList.add("header-search");
  insertHtml(crisann.search, imani, "prepend");
  buster.onclick = function () {
    if (jahkayla.srcElement) {
      if (artx.modified) {
        let meleah = sealtiel.type === "radio" ? crisann.selectedIds[crisann.selectedIds.length - 1] : JSON.stringify(crisann.selectedIds);
        let yeidy = sealtiel.modify ? sealtiel.modify : sealtiel.query.table;
        artx.modified[yeidy] = meleah;
      }
      if (sealtiel.type && sealtiel.type === "radio" && crisann.selectedItems[0]) {
        jahkayla.srcElement.innerHTML = crisann.selectedItems[0].name;
      }
      jahkayla.srcElement.dboxParams.selected = crisann.selectedIds;
    }
    if (sealtiel.onOk) {
      sealtiel.onOk(crisann);
    }
    jahkayla.remove();
  };
  return jahkayla;
}
function ensureElementInWindow(ricari) {
  let gazella = ricari.getBoundingClientRect();
  let khamara = gazella.width > window.innerWidth ? window.innerWidth : gazella.width;
  let sayah = gazella.height > window.innerHeight ? window.innerHeight : gazella.height;
  let lynx = ricari.offsetLeft;
  let reyniel = ricari.offsetTop;
  if (lynx + khamara > window.innerWidth + 2) {
    lynx = window.innerWidth - khamara;
  }
  if (reyniel + sayah > window.innerHeight + 2) {
    reyniel = window.innerHeight - sayah;
  }
  if (lynx < -2) {
    lynx = 0;
  }
  if (reyniel < -2) {
    reyniel = 0;
  }
  ricari.style.left = lynx + "px";
  ricari.style.top = reyniel + "px";
  ricari.style.width = khamara + "px";
  ricari.style.height = sayah + "px";
  ricari.style.zIndex = 1e4;
}
function updateElementPosition(aneudy, akemy, _0x37a304 = 0, _0xdd6041 = 0) {
  const queneshia = aneudy.getBoundingClientRect();
  if (queneshia.x === 0 && queneshia.y === 0) {
    setTimeout(() => updateElementPosition(aneudy, akemy, _0x37a304, _0xdd6041), 10);
  }
  akemy.style.left = queneshia.left + _0x37a304 + "px";
  akemy.style.top = queneshia.top + _0xdd6041 + "px";
}
function createContextMenu(feliscia) {
  feliscia.isHiddenOnClose = feliscia.hasOwnProperty("isHiddenOnClose") ? feliscia.isHiddenOnClose : false;
  let yovana = createHtml({
    tag: "img",
    class: "menu-icon",
    src: artx.cdn + "/icons/x.svg"
  });
  let elight = feliscia.itemContainer ? feliscia.itemContainer : createHtml({
    tag: "div",
    class: "nav-menu-items"
  });
  elight.classList.add("nav-menu-items");
  let siyu = createHtml({
    tag: "div",
    class: "nav-menu",
    children: [{
      tag: "div",
      class: "fr hor-sb",
      children: [feliscia.header ? feliscia.header : {
        tag: "div"
      }, {
        tag: "div",
        class: "nav-menu-header cv s-gap",
        children: [yovana]
      }]
    }, elight]
  });
  if (feliscia.search) {
    const lielle = createHtml({
      tag: "input",
      type: "search",
      class: "fbutt search menu-search",
      "data-input": "search",
      placeholder: "Search"
    });
    const mataya = document.querySelector("body");
    mataya.addEventListener("keyup", function (shalece) {
      let jaxzen = shalece.target;
      if (jaxzen.matches("[data-input='search']")) {
        const ikran = jaxzen.value.toLowerCase();
        const lazar = document.querySelectorAll(".searchable-item");
        lazar.forEach(function (naquon) {
          const geddy = naquon.innerText.toLowerCase();
          if (geddy.match(ikran)) {
            naquon.style.display = "block";
          } else {
            naquon.style.display = "none";
          }
        });
      }
    });
    siyu.querySelector(".nav-menu-header").appendChild(lielle);
  }
  if (feliscia.items) {
    feliscia.items.forEach(function (ritage) {
      let kasey = feliscia.itemHtml ? feliscia.itemHtml(ritage) : createHtml({
        tag: "div",
        class: "nav-menu-item sh",
        text: ritage
      });
      elight.appendChild(kasey);
    });
  }
  siyu.style.position = "fixed";
  siyu.style.zIndex = 5e3;
  if (feliscia.width) {
    siyu.style.width = feliscia.width + "px";
  }
  if (feliscia.maxHeight) {
    elight.style.maxHeight = feliscia.maxHeight + "px";
    elight.style.overflowY = "scroll";
  } else if (feliscia.height) {
    siyu.style.height = feliscia.height + "px";
  }
  if (feliscia.anchorElement) {
    updateElementPosition(feliscia.anchorElement, siyu);
    window.onresize = () => updateElementPosition(feliscia.anchorElement, siyu);
  } else {
    if (feliscia.x) {
      siyu.style.left = feliscia.x + "px";
    }
    if (feliscia.y) {
      siyu.style.top = feliscia.y + "px";
    }
  }
  insertHtml(siyu);
  ensureElementInWindow(siyu);
  function henoch() {
    if (feliscia.isHiddenOnClose) {
      siyu.style.display = "none";
    } else {
      siyu.remove();
    }
  }
  function lakiea(aquera) {
    if (feliscia.srcElement !== aquera.srcElement && aquera.srcElement !== siyu && !siyu.contains(aquera.srcElement)) {
      henoch();
      if (feliscia.isHiddenOnClose === false) {
        document.removeEventListener("click", lakiea);
      }
    }
  }
  if (!feliscia.persistMenu) {
    setTimeout(() => document.addEventListener("click", lakiea), 1);
  }
  yovana.onclick = function () {
    henoch();
  };
  return siyu;
}
function tooltipListener(virgin) {
  virgin.onmouseover = function () {
    if (!virgin.hasAttribute("data-tooltip")) {
      return;
    }
    var zaky = virgin.getAttribute("data-tooltip");
    var diann = virgin.getBoundingClientRect();
    var braylea = createHtml({
      tag: "div",
      class: "tooltip-container",
      children: [{
        tag: "div",
        class: "tooltip",
        text: zaky
      }]
    });
    braylea.style.left = diann.left - 150 + "px";
    braylea.style.top = diann.top - 15 + "px";
    if (diann.left < 150) {
      braylea.style.left = "0px";
    }
    if (diann.top < 15) {
      braylea.style.top = "0px";
    }
    braylea.querySelectorAll("a").forEach(function (khloe) {
      khloe.setAttribute("target", "_blank");
    });
    insertHtml(braylea);
    fadeTo(braylea, 1, 100);
    braylea.onmouseleave = function () {
      braylea.remove();
    };
  };
}
function videoPlaybackRateUpdater() {
  document.querySelectorAll("[playback-rate]").forEach(function (jesler) {
    jesler.playbackRate = parseFloat(jesler.getAttribute("playback-rate"));
  });
}
videoPlaybackRateUpdater();
function hideOnClick(catherine) {
  elements(catherine.currentTarget.getAttribute("data-close")).forEach(function (jahkai) {
    jahkai.style.display = "none";
  });
}
function showOnClick(haydi) {
  elements(haydi.currentTarget.getAttribute("data-show")).forEach(function (grayton) {
    grayton.style.display = "";
    var clayvon = window.getComputedStyle(grayton);
    if (clayvon.display === "none") {
      grayton.style.display = "block";
    }
    ensureElementInWindow(grayton);
  });
}
function handleOutboundLink(chalen) {
  let adolfo = chalen.target.tagName === "A" ? chalen.target : chalen.target.closest("a");
  if (adolfo) {
    let sakariye = new URL(adolfo.href, window.location.href);
    let zanari = [window.location.hostname, "cdn.architextures.org", "artx.nyc3.digitaloceanspaces.com", "artx.nyc3.cdn.digitaloceanspaces.com"];
    if (!zanari.includes(sakariye.hostname)) {
      chalen.preventDefault();
      let dioni = new URL("/outbound", window.location.href);
      dioni.searchParams.set("url", adolfo.href);
      dioni.searchParams.set("page", window.location.href);
      createHtml({
        tag: "a",
        href: dioni.href,
        target: "_blank"
      }).click();
    }
  }
}
function uiListener() {
  elements("[data-close]").forEach(function (tripper) {
    tripper.removeEventListener("click", hideOnClick);
    tripper.addEventListener("click", hideOnClick);
  });
  elements("[data-show]").forEach(function (marcale) {
    marcale.removeEventListener("click", showOnClick);
    marcale.addEventListener("click", showOnClick);
  });
  videoPlaybackRateUpdater();
  if (artx.plugin) {
    document.querySelectorAll("a").forEach(damera => {
      if (damera.getAttribute("href") && !damera.getAttribute("href").includes("/login") && !damera.getAttribute("href").includes("/logout")) {
        damera.setAttribute("target", "_blank");
      }
    });
  }
  elements("[data-dbox]").forEach(function (reynier) {
    let shalen = reynier.dboxParams ? reynier.dboxParams : JSON.parse(reynier.getAttribute("data-dbox"));
    if (shalen.prefill && shalen.selected && shalen.selected.length > 0) {
      query({
        table: table,
        columns: ["id", "name"],
        auth: true,
        limit: 5,
        where: [["id", "in", shalen.selected.join(",")]]
      }).then(function (kanylah) {
        reynier.innerHTML = "";
        if (kanylah.results.length) {
          let koyasha = [];
          for (let laszlo of kanylah.results) {
            koyasha.push(laszlo.name);
          }
          reynier.appendChild(createHtml({
            tag: "div",
            style: "width:95%;position:absolute;",
            class: "line-text",
            text: koyasha.join(" ")
          }));
        }
      });
    }
    reynier.onclick = function () {
      reynier.dboxParams = shalen;
      let keyleen = reynier.getBoundingClientRect();
      if (!shalen.query) {
        shalen.query = {
          table: shalen.table,
          limit: 24
        };
      }
      shalen.itemHeight = 40;
      shalen.search = true;
      shalen.thumbnails = true;
      shalen.onOk = reynier.onOk ? reynier.onOk : function () {};
      if (shalen.auth) {
        shalen.query.auth = true;
      }
      let gabrial = createDataboxMenu(shalen);
      let kohlman = keyleen.top + keyleen.height / 2;
      let daymien = window.innerHeight < 600 ? window.innerHeight : 600;
      gabrial.style.height = daymien;
      gabrial.style.width = keyleen.width;
      let marsha = kohlman - daymien / 2 < 0 ? 0 : kohlman - daymien / 2;
      if (marsha + daymien > window.innerHeight) {
        gabrial.style.bottom = 0;
      } else {
        gabrial.style.top = marsha;
      }
      gabrial.style.left = keyleen.left;
      gabrial.srcElement = reynier;
      document.body.appendChild(gabrial);
    };
  });
  elements("[data-remove]").forEach(function (tekesha) {
    tekesha.onclick = function () {
      elements(tekesha.getAttribute("data-remove")).forEach(function (pasty) {
        pasty.remove();
      });
    };
  });
  elements("[data-tooltip]").forEach(function (lural) {
    tooltipListener(lural);
  });
  elements("a[target='_blank']").forEach(function (charis) {
    charis.addEventListener("click", handleOutboundLink);
  });
}
uiListener();
function setProxies() {
  document.querySelectorAll("[data-proxy]").forEach(function (abbagayle) {
    var tamonica = abbagayle.getAttribute("data-proxy");
    if (tamonica.length > 1) {
      if (document.querySelector(tamonica).checked == true) {
        abbagayle.classList.add("active");
      } else {
        abbagayle.classList.remove("active");
      }
    }
  });
}
document.addEventListener("keydown", function (ashad) {
  artx.keysPressed[ashad.key] = true;
  if (ashad.key === "Escape") {
    document.querySelector("body").style.overflowY = "";
    document.querySelector("body").style.height = "";
    let sumehra = document.querySelector("body");
    sumehra.scrollTop = artx.lastScrollPosition ? artx.lastScrollPosition : 0;
    elements("[data-esc]").forEach(function (zaeveon) {
      zaeveon.remove();
    });
    elements(".modal").forEach(function () {
      removeEl();
    });
  }
});
document.addEventListener("keyup", function (mariann) {
  if (artx.keysPressed && artx.keysPressed[mariann.key]) {
    delete artx.keysPressed[mariann.key];
  }
});
function checkStorageForUser() {
  return new Promise((deveta, alexei) => {
    postJson("/app/check-storage", {
      user: artx.user.id
    }).then(chriss => {
      if (chriss.rawResponse.status === 200) {
        deveta(chriss.hasStorage);
      } else {
        deveta(false);
      }
    });
  });
}
function showInfoMessage(jordanchristoph, muntaha) {
  if (document.querySelector("#modal-general-message")) {
    return;
  }
  let ervan = createHtml({
    tag: "div",
    id: "modal-general-message",
    class: "modal modal-general-message",
    children: [{
      tag: "div",
      class: "modal-window modal-general-message",
      style: "padding: var(--padding);",
      children: [{
        tag: "div",
        class: "modal-header modal-general-message",
        children: [{
          tag: "div",
          class: "modal-title modal-general-message",
          text: jordanchristoph
        }]
      }, {
        tag: "div",
        class: "modal-body modal-general-message",
        children: [{
          tag: "div",
          class: "modal-content modal-general-message",
          children: [{
            tag: "p",
            text: muntaha
          }]
        }]
      }, {
        tag: "div",
        class: "modal-footer modal-general-message",
        children: [{
          tag: "button",
          "data-close": "modal-generate-message",
          text: "OK"
        }]
      }]
    }]
  });
  insertHtml(ervan);
  document.querySelector("button[data-close]").addEventListener("click", () => {
    ervan.remove();
  });
}
function imageUpload() {
  return new Promise((nev, wasco) => {
    var laycee = createHtml({
      tag: "input",
      type: "file"
    });
    laycee.click();
    laycee.onchange = function (intisar) {
      var tsutako = this.value.slice(12);
      image = new Image();
      image.onload = function () {
        laycee.remove();
        nev({
          image: image,
          name: tsutako
        });
      };
      var corenia = laycee.files[0];
      if (!(round(corenia.size / 1024 / 1024, 2) < 100)) {
        showInfoMessage("File size too large", "The file you are trying to upload is too large. Please upload a file less than 100MB.");
        return;
      }
      var jasdeep = new FileReader();
      jasdeep.addEventListener("load", function () {
        if (corenia.type.match("image.*")) {
          image.src = jasdeep.result;
        }
      }, false);
      if (corenia) {
        jasdeep.readAsDataURL(corenia);
      }
      ;
    };
  });
}
function fileUpload(_0x451468 = "url") {
  return new Promise((nacoma, emilyanne) => {
    const brance = createHtml({
      tag: "input",
      type: "file",
      multiple: "true"
    });
    brance.click();
    brance.onchange = function () {
      const latachia = Array.from(this.files);
      const dimples = latachia.map(auline => {
        return new Promise(caiah => {
          const devlyn = new FileReader();
          devlyn.onload = function () {
            caiah({
              file: devlyn.result,
              name: auline.name
            });
          };
          if (auline) {
            if (!_0x451468 || _0x451468 === "url") {
              devlyn.readAsDataURL(auline);
            }
            if (_0x451468 === "text") {
              devlyn.readAsText(auline);
            }
            if (_0x451468 === "binary") {
              devlyn.readAsBinaryString(auline);
            }
            if (_0x451468 === "buffer") {
              devlyn.readAsArrayBuffer(auline);
            }
          }
        });
      });
      Promise.all(dimples).then(nacoma).catch(emilyanne);
    };
  });
}
function svgUpload() {
  return new Promise((ryotaro, jalin) => {
    fileUpload("text").then(function (jahdari) {
      var adiba = jahdari.file;
      var dobie = new DOMParser();
      var donzel = dobie.parseFromString(adiba, "text/html");
      ryotaro({
        svg: donzel.querySelector("svg"),
        name: jahdari.name
      });
    });
  });
}
function unlap(eleene, emirhan) {
  if (Array.isArray(emirhan)) {
    var emirhan = emirhan.length;
  }
  var jantel = Math.floor(eleene / emirhan);
  var sharima = eleene - jantel * emirhan;
  return sharima;
}
function copy(elicio, alfair) {
  var fumi = JSON.parse(JSON.stringify(elicio));
  if (alfair) {
    for (var [_0x59bba3, _0x1f3eea] of Object.entries(alfair)) {
      fumi[_0x59bba3] = _0x1f3eea;
    }
  }
  return fumi;
}
function copyToClipboard(lakelee) {
  navigator.clipboard.writeText(lakelee).then(function () {}, function () {});
}
function round(iviona, _0x405359 = 0) {
  var adreina = Math.pow(10, _0x405359);
  var citialli = Math.round(iviona * adreina) / adreina;
  return citialli;
}
function roundDown(daemyn, _0x5c2c01 = 0) {
  var reann = Math.pow(10, _0x5c2c01);
  var darnasia = Math.floor(daemyn * reann) / reann;
  return darnasia;
}
function roundUp(kudrat, _0x2bc1e0 = 0) {
  var siyuan = Math.pow(10, _0x2bc1e0);
  var somil = Math.ceil(kudrat * siyuan) / siyuan;
  return somil;
}
function mmToInches(langford, _0x5a59b8 = 2) {
  decimalInches = langford * 0.0393701;
  return round(decimalInches, _0x5a59b8);
}
function inchesToMm(margert, _0x348045 = 1) {
  var empress = margert + "";
  var carigan = !!empress.includes("-");
  var kayonia = empress.split("'").join("' ");
  var oracio = kayonia.split(/[^0-9./']/g);
  var trashaun = oracio.filter(Boolean);
  var shacoria = [];
  for (i = 0; i < trashaun.length; ++i) {
    if (trashaun[i].includes("'")) {
      var hebe = parseInt(trashaun[i]);
      var hilton = hebe * 12;
      shacoria.push(parseFloat(hilton));
    } else {
      if (trashaun[i].includes("/")) {
        var jezebel = trashaun[i].split("/")[0];
        var onnie = trashaun[i].split("/")[1];
        var hilton = jezebel / onnie;
        shacoria.push(parseFloat(hilton));
      } else {
        shacoria.push(parseFloat(trashaun[i]));
      }
    }
  }
  var akansha = shacoria.reduce((ephratah, indra) => ephratah + indra, 0);
  var amirah = round(akansha * 25.4, _0x348045);
  return carigan ? amirah * -1 : amirah;
}
function parseBoolean(luzclarita) {
  if (luzclarita == 0) {
    return false;
  }
  if (luzclarita == 1) {
    return true;
  }
  if (luzclarita == "true") {
    return true;
  }
  if (luzclarita == "false") {
    return false;
  }
}
function downloadFile(kerryann, envie) {
  var makenya = document.createElement("a");
  makenya.setAttribute("download", envie);
  makenya.href = kerryann;
  makenya.click();
}
function groupArray(rassan, daedra) {
  var athens;
  var cabe;
  athens = [];
  for (cabe = 0; cabe < rassan.length; cabe += daedra) {
    athens.push(rassan.slice(cabe, daedra + cabe));
  }
  return athens;
}
function patternFill(kyire, vintrell, djavon, benedek, alcus, luminara, _0x2feb83 = 0, _0x4a837b = 0, _0x3e15ed = 1, tuwana) {
  kyire.save();
  kyire.translate(djavon, benedek);
  kyire.scale(_0x3e15ed, tuwana ? tuwana : _0x3e15ed);
  kyire.translate(-_0x2feb83, -_0x4a837b);
  kyire.fillStyle = vintrell;
  kyire.fillRect(_0x2feb83, _0x4a837b, alcus / _0x3e15ed, luminara / tuwana);
  kyire.restore();
}
function untransform(vandetta, keighton, jeania, _0x229cd7 = 3) {
  var annaliza = round(vandetta * jeania.a + keighton * jeania.c + jeania.e, _0x229cd7);
  var antaja = round(vandetta * jeania.b + keighton * jeania.d + jeania.f, _0x229cd7);
  return {
    x: annaliza,
    y: antaja
  };
}
function directionToCrank(kinlynn) {
  kinlynn.forEach(function (otisha, sameya) {
    if (sameya == 0) {
      otisha.angle = otisha.direction;
    } else {
      otisha.angle = getEdgeData(sameya, kinlynn).crankPrev;
    }
    otisha.angle = round(otisha.angle, 2);
  });
}
function tileToPoints(chirles) {
  var liander = [];
  var tandre = document.createElement("canvas");
  var zorii = tandre.getContext("2d");
  zorii.translate(chirles.x, chirles.y);
  chirles.edges.forEach(function (dartanyan, atleigh) {
    var yulliana = getEdgeData(atleigh, chirles.edges);
    if (atleigh == 0) {
      zorii.rotate(yulliana.direction * Math.PI / 180);
    } else {
      zorii.rotate(yulliana.crankPrev * Math.PI / 180);
    }
    liander.push([untransform(0, 0, zorii.getTransform()).x, untransform(0, 0, zorii.getTransform()).y]);
    zorii.translate(dartanyan.edgeLength, 0);
  });
  return liander;
}
function pointsToEdges(tlalli) {
  let johnisha = [];
  tlalli.forEach(function (androniki, elven) {
    pointB = tlalli[elven + 1];
    if (elven == tlalli.length - 1) {
      pointB = tlalli[0];
    }
    let noureen = angleFromPoints(androniki, pointB);
    let camylah = distanceBetweenPoints(androniki, pointB);
    johnisha.push({
      edgeLength: round(camylah, 2),
      direction: round(noureen, 2)
    });
  });
  return johnisha;
}
function getEdgeData(despina, abtin) {
  var mitia = unlap(despina - 1, abtin);
  var daniyel = unlap(despina + 1, abtin);
  var rakari = abtin[mitia];
  var aran = abtin[daniyel];
  var kameera = abtin[despina].direction;
  var wilby = abtin[mitia].direction;
  var kaysin = abtin[daniyel].direction;
  if (kameera < 0) {
    kameera = 360 + kameera;
  }
  if (wilby < 0) {
    wilby = 360 + wilby;
  }
  if (kaysin < 0) {
    kaysin = 360 + kaysin;
  }
  var chaysen = kaysin - kameera;
  var carielle = kameera - wilby;
  if (carielle > 180 || carielle < -180) {
    carielle = 360 + carielle;
  }
  if (chaysen > 180 || chaysen < -180) {
    chaysen = 360 + chaysen;
  }
  var zamiel = 180 - carielle;
  var amaiya = 180 - chaysen;
  var mckinlee = zamiel / 2;
  var eddy = amaiya / 2;
  var raeanna = getStringDirection(abtin[despina].direction);
  var hafeeza = raeanna.horizontal;
  var ceaser = raeanna.vertical;
  return {
    direction: kameera,
    directionPrev: wilby,
    directionNext: kaysin,
    edgeLength: abtin[despina].edgeLength,
    globalAngle: abtin[despina].direction,
    edgePrev: rakari,
    edgeNext: aran,
    crankPrev: carielle,
    crankNext: chaysen,
    anglePrev: zamiel,
    angleNext: amaiya,
    mitrePrev: mckinlee,
    mitreNext: eddy,
    indexNext: daniyel,
    indexPrev: mitia,
    directionHorizontal: hafeeza,
    directionVertical: ceaser
  };
}
function tileBounds(kyhir, _0x5947a2 = 0) {
  var rylind = kyhir.x ? kyhir.x : 0;
  var kimura = kyhir.y ? kyhir.y : 0;
  var adebisi = rylind;
  var lacresha = kimura;
  var zamir = {
    x: adebisi,
    y: lacresha
  };
  var nektarios = {
    x: adebisi,
    y: lacresha
  };
  kyhir.edges.forEach(function (ahtziry, glyndora) {
    var jiro = getOrthoDistance(ahtziry.direction - _0x5947a2, ahtziry.edgeLength);
    if (adebisi < nektarios.x) {
      nektarios.x = adebisi;
    }
    if (adebisi > zamir.x) {
      zamir.x = adebisi;
    }
    if (lacresha < nektarios.y) {
      nektarios.y = lacresha;
    }
    if (lacresha > zamir.y) {
      zamir.y = lacresha;
    }
    adebisi += jiro.horizontal;
    lacresha += jiro.vertical;
  });
  var kameila = round(Math.abs(zamir.x - nektarios.x), 2);
  var jaqaun = round(Math.abs(zamir.y - nektarios.y), 2);
  offsetFromStartX = nektarios.x - rylind;
  offsetFromStartY = nektarios.y - kimura;
  return {
    left: nektarios.x,
    right: zamir.x,
    top: nektarios.y,
    bottom: zamir.y,
    width: kameila,
    height: jaqaun,
    offsetX: offsetFromStartX,
    offsetY: offsetFromStartY
  };
}
function tileMinBounds(tomarra) {
  var latray = [];
  for (i = 0; i <= 180; i++) {
    let keyley = tileBounds(tomarra, i);
    if (keyley.width >= keyley.height) {
      latray.push({
        angle: i,
        width: keyley.width,
        height: keyley.height,
        area: keyley.width * keyley.height
      });
    }
  }
  return latray.reduce((akiva, shaqualla) => shaqualla.area < akiva.area ? shaqualla : akiva);
}
function dToCommands(kandyce) {
  if (kandyce.charAt(kandyce.length - 1) !== "z" && kandyce.charAt(kandyce.length - 1) !== "Z") {
    kandyce = kandyce + "z";
  }
  var mareco = [];
  var nolan = ["M", "m", "L", "l", "H", "h", "V", "v", "C", "c", "S", "s", "Q", "q", "T", "t", "A", "a", "Z", "z"];
  var valora = kandyce.split("");
  var reverie = [];
  valora.forEach(function (rasha, treneice) {
    if (nolan.includes(rasha)) {
      reverie.push(treneice);
    }
  });
  var quadarius = [];
  reverie.forEach(function (janessa, jovanta) {
    if (reverie[jovanta + 1]) {
      quadarius.push(kandyce.substring(janessa, reverie[jovanta + 1]));
    }
  });
  quadarius.forEach(function (audey, nur) {
    var plumie = audey.charAt(0);
    audey = audey.substring(1);
    var eva = [];
    audey = audey.replaceAll("e-", "en");
    audey = audey.replaceAll("E-", "en");
    for (x = 0; x < audey.length; x++) {
      if (audey.charAt(x) == "-" || audey.charAt(x) == " ") {
        eva.push(x);
      }
    }
    eva.forEach(function (olajuwan, kirill) {
      audey = audey.slice(0, olajuwan + kirill) + "," + audey.slice(olajuwan + kirill);
    });
    var eulee = audey.split(",");
    var chazton = [];
    for (var jakaira of eulee) {
      jakaira = jakaira.replaceAll("en", "e-");
      if (isNaN(parseFloat(jakaira)) == false) {
        chazton.push(Number(jakaira));
      }
    }
    mareco.push({
      command: plumie,
      data: chazton
    });
  });
  return mareco;
}
function dToPoints(yana) {
  var christian = dToCommands(yana);
  var gillard = [];
  for (const floyde of christian) {
    var dija = gillard.length ? gillard[gillard.length - 1] : [0, 0];
    var antario = !!["V", "H", "L", "C", "S", "Q", "T", "A"].includes(floyde.command);
    if (["V", "v"].includes(floyde.command)) {
      var ahsen = dija[0];
      var aldus = antario ? floyde.data[0] : floyde.data[0] + dija[1];
      gillard.push([ahsen, aldus]);
    } else {
      if (["H", "h"].includes(floyde.command)) {
        var aldus = dija[1];
        var ahsen = antario ? floyde.data[0] : dija[0] + floyde.data[0];
        gillard.push([ahsen, aldus]);
      } else {
        var barrette = {
          c: 6,
          s: 4,
          q: 4,
          t: 2,
          a: 7,
          m: 2,
          l: 2
        };
        var leatricia = groupArray(floyde.data, barrette[floyde.command.toLowerCase()]);
        for (const lakeshia of leatricia) {
          if (["C", "c", "S", "s", "Q", "q", "T", "t", "A", "a"].includes(floyde.command)) {
            var ahsen = antario ? lakeshia[lakeshia.length - 2] : lakeshia[lakeshia.length - 2] + dija[0];
            var aldus = antario ? lakeshia[lakeshia.length - 1] : lakeshia[lakeshia.length - 1] + dija[1];
            dija = [ahsen, aldus];
            gillard.push([ahsen, aldus]);
          } else {
            var ahsen = antario ? lakeshia[lakeshia.length - 2] : lakeshia[lakeshia.length - 2] + dija[0];
            var aldus = antario ? lakeshia[lakeshia.length - 1] : lakeshia[lakeshia.length - 1] + dija[1];
            dija = [ahsen, aldus];
            gillard.push([ahsen, aldus]);
          }
        }
      }
    }
  }
  return gillard;
}
function pointsToD(kiawana, _0x3a8acd = true) {
  d = "";
  kiawana.forEach(function (laliyah, safir) {
    if (Array.isArray(laliyah)) {
      laliyah = {
        x: laliyah[0],
        y: laliyah[1]
      };
    }
    if (safir == 0) {
      d += "M" + laliyah.x + "," + laliyah.y;
    } else {
      if (safir == kiawana.length - 1) {
        d += "L" + laliyah.x + "," + laliyah.y;
        if (_0x3a8acd) {
          d += "z";
        }
      } else {
        d += "L" + laliyah.x + "," + laliyah.y;
      }
    }
  });
  return d;
}
function pointsToCanvas(daire, _0x3c90e1 = 0, ernesteen, arelin, _0x5adf60 = 3) {
  let karmella = trimPoints(daire);
  let ronell = pointsData(karmella);
  let jaritzi = ernesteen ? ernesteen / ronell.width : 1;
  if (arelin) {
    jaritzi = arelin ? arelin / ronell.height : 1;
  }
  let aisa = newCanvas();
  aisa.canvas.width = ronell.width * jaritzi + _0x3c90e1 * 2;
  aisa.canvas.height = ronell.height * jaritzi + _0x3c90e1 * 2;
  aisa.ctx.beginPath();
  karmella.forEach(function (derriana, avaya) {
    aisa.ctx.lineTo(derriana[0] * jaritzi + _0x3c90e1, derriana[1] * jaritzi + _0x3c90e1);
  });
  aisa.ctx.lineWidth = _0x5adf60;
  aisa.ctx.lineCap = "round";
  aisa.ctx.stroke();
  return aisa.canvas;
}
function svgElementToPoints(lata, oaklynn) {
  let krischan = [];
  let mikiel = lata.tagName === "svg" ? lata.querySelectorAll("path:not(defs path), polyline:not(defs polyline), polygon:not(defs polygon), line:not(defs line), rect:not(defs rect)") : [lata];
  mikiel.forEach(function (demontez) {
    let nahjee = [];
    if (demontez.tagName === "path") {
      nahjee = pathToPoints(demontez);
    }
    if (demontez.tagName === "rect") {
      nahjee = rectToPoints(demontez);
    }
    if (demontez.tagName === "line") {
      nahjee = lineToPoints(demontez);
    }
    if (["polyline", "polygon"].includes(demontez.tagName)) {
      nahjee = polylineToPoints(demontez);
    }
    if (demontez.hasAttribute("transform") || demontez.style.transform) {
      nahjee.forEach(function (cristyan, tylashia) {
        var breanda = demontez.getCTM();
        var mir = untransform(cristyan[0], cristyan[1], {
          a: breanda.a,
          b: breanda.b,
          c: breanda.c,
          d: breanda.d,
          e: breanda.e,
          f: breanda.f
        });
        nahjee[tylashia] = [mir.x, mir.y];
      });
    }
    krischan.push(...nahjee);
  });
  if (oaklynn) {
    krischan.forEach(function (jahsai, windy) {
      krischan[windy] = [round(jahsai[0], oaklynn), round(jahsai[1], oaklynn)];
    });
  }
  return krischan;
}
function rectToPoints(shimshon) {
  let mekaylah = parseFloat(shimshon.getAttribute("x"));
  let rosy = parseFloat(shimshon.getAttribute("y"));
  let tanley = parseFloat(shimshon.getAttribute("width"));
  let tametha = parseFloat(shimshon.getAttribute("height"));
  return [[mekaylah, rosy], [mekaylah + tanley, rosy], [mekaylah + tanley, rosy + tametha], [mekaylah, rosy + tametha]];
}
function lineToPoints(lindora) {
  let faelynn = parseFloat(lindora.getAttribute("x1"));
  let luian = parseFloat(lindora.getAttribute("y1"));
  let milbrey = parseFloat(lindora.getAttribute("x2"));
  let calleen = parseFloat(lindora.getAttribute("y2"));
  return [[faelynn, luian], [milbrey, calleen]];
}
function polylineToPoints(fardowsa) {
  let iyanni = fardowsa.getAttribute("points").split(/[, ]+/);
  let tampatha = [];
  iyanni.forEach(function (kayleeanne, yasley) {
    tampatha.push(parseFloat(kayleeanne));
  });
  return groupArray(tampatha, 2);
}
function pathToPoints(caribbean) {
  let jaymion = dToPoints(caribbean.getAttribute("d"));
  return jaymion;
}
function pointsToPoints(jezell) {
  var yaroslav = jezell.split(" ");
  var eijah = [];
  yaroslav.forEach(function (jerris) {
    eijah.push(parseFloat(jerris));
  });
  return groupArray(eijah, 2);
}
function pointsToSvg(kemry, _0x3e0a37 = 2) {
  let fallin = pointsData(kemry);
  width = fallin.width;
  height = fallin.height;
  var taraf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  taraf.setAttribute("width", width);
  taraf.setAttribute("height", height);
  taraf.setAttribute("version", "1.2");
  taraf.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  taraf.setAttribute("viewBox", fallin.minX + " " + fallin.minY + " " + width + " " + height);
  var kaimipono = document.createElement("style");
  kaimipono.setAttribute("type", "text/css");
  var miri = document.createTextNode("path {stroke-width: " + _0x3e0a37 + "; vector-effect: non-scaling-stroke; fill:none; stroke: #000; stroke-linecap: round; stroke-linejoin: miter;}");
  kaimipono.appendChild(miri);
  taraf.appendChild(kaimipono);
  var kaimipono = document.createElement("style");
  var delannie = document.createElementNS("http://www.w3.org/2000/svg", "path");
  var imery = pointsToD(kemry, false);
  delannie.setAttribute("d", imery);
  taraf.appendChild(delannie);
  return taraf;
}
function distanceBetweenPoints(armida, mykala) {
  var rhayne = Math.abs(armida[0] - mykala[0]);
  var lawayne = Math.abs(armida[1] - mykala[1]);
  var daymeon = Math.sqrt(rhayne * rhayne + lawayne * lawayne);
  return daymeon;
}
function angleFromPoints(myreen, minnette) {
  var aramys = Math.atan2(minnette[1] - myreen[1], minnette[0] - myreen[0]) * 180 / Math.PI;
  return aramys;
}
function direction180(kinslie) {
  kinslie %= 360;
  if (kinslie > 180) {
    kinslie -= 360;
  }
  if (kinslie < -180) {
    kinslie += 360;
  }
  return kinslie;
}
function direction360(josecruz) {
  josecruz %= 360;
  if (josecruz < 0) {
    josecruz = 360 + josecruz;
  }
  return josecruz;
}
function reorderPoints(shayaan, _0x563da6 = [0, 0]) {
  var macio = [];
  shayaan.forEach(function (lexie, kwamin) {
    var shiza = distanceBetweenPoints([lexie[0], lexie[1]], [_0x563da6[0], _0x563da6[1]]);
    macio.push(shiza);
  });
  var mansi = Math.min(...macio);
  macio.forEach(function (dezyah, dnaja) {
    if (dezyah == mansi) {
      var kathleene = shayaan.splice(dnaja, shayaan.length - dnaja);
      shayaan.unshift(...kathleene);
    }
  });
  return shayaan;
}
function closestPoint(antoinnette, _0x4ac301 = [0, 0]) {
  var keyarah;
  var keylani;
  antoinnette.forEach(function (zelpha, aseda) {
    var zephania = distanceBetweenPoints([zelpha[0], zelpha[1]], [_0x4ac301[0], _0x4ac301[1]]);
    if (!keyarah || zephania < keyarah) {
      keyarah = zephania;
      keylani = zelpha;
    }
    ;
  });
  return keylani;
}
function getOrthoDistance(kiori, lutrica) {
  kiori = direction180(kiori);
  var keiton = getStringDirection(kiori);
  var alzina = keiton.horizontal;
  var meea = keiton.vertical;
  var kalenna = Math.abs(kiori % 90);
  var janessah = Math.cos(kalenna * (Math.PI / 180)) * lutrica;
  var safin = Math.sin(kalenna * (Math.PI / 180)) * lutrica;
  if (alzina == "left" && meea == "down" || alzina == "left" && meea == "up" || alzina == "none") {
    var joniesha = janessah;
    var katerina = safin;
  } else {
    var katerina = janessah;
    var joniesha = safin;
  }
  if (alzina == "left") {
    katerina = -katerina;
  }
  if (meea == "up") {
    joniesha = -joniesha;
  }
  return {
    horizontal: katerina,
    vertical: joniesha
  };
}
function logCanvas(likisha) {
  console.log(likisha.width + " x " + likisha.height + " px (" + Math.round(likisha.width * likisha.height / 1e6) + " MP)");
}
function disposeCanvas(shanye) {
  if (shanye.tagName === "CANVAS") {
    shanye.width = shanye.height = 0;
    delete shanye;
  }
}
function pseudoConfirm(deneishia, _0x33cbd9 = true) {
  return new Promise(function (cesc, atzel) {
    var marytheresa = createHtml({
      tag: "button",
      class: "small",
      text: "OK"
    });
    var norb = createHtml({
      tag: "button",
      class: "button2 small",
      text: "Cancel",
      style: "margin-right: 10px;"
    });
    var geronima = createHtml({
      tag: "div",
      class: "modal grey",
      style: "backdrop-filter: none;opacity:0;",
      children: [{
        tag: "div",
        style: "padding: 10px; width: 300px;max-width: 100%;",
        class: "card",
        children: [{
          tag: "div",
          text: deneishia,
          style: "padding-bottom: 10px; line-height: 1.4;"
        }, {
          tag: "div",
          class: "flex-centred",
          children: [_0x33cbd9 ? norb : {
            tag: "div"
          }, marytheresa]
        }]
      }]
    });
    fadeIn(geronima, 200);
    function maidelyn() {
      fadeOut(geronima, 150).then(function () {
        geronima.remove();
      });
      document.removeEventListener("keyup", marquesa);
    }
    norb.onclick = function () {
      maidelyn();
    };
    marytheresa.onclick = function () {
      maidelyn();
      cesc();
    };
    insertHtml(geronima);
    function marquesa(amberly) {
      if (amberly.key == "Enter") {
        maidelyn();
      }
    }
    ;
    document.addEventListener("keyup", marquesa);
  });
}
function getStringDirection(ladajah) {
  ladajah = direction180(ladajah);
  var chloi = "right";
  var emeliah = "down";
  if (ladajah < -90) {
    chloi = "left";
    emeliah = "up";
  } else {
    if (ladajah < 0) {
      emeliah = "up";
    } else if (ladajah > 90) {
      chloi = "left";
    }
  }
  if (ladajah == 0 || ladajah == 180 || ladajah == -180) {
    emeliah = "none";
  }
  if (ladajah == 90 || ladajah == -90) {
    chloi = "none";
  }
  return {
    horizontal: chloi,
    vertical: emeliah
  };
}
function trueOffset(sassy, eliyjah, arwilda) {
  var jameswilliam = distanceBetweenPoints([0, 0], [sassy, eliyjah]);
  var arwilda = angleFromPoints([0, 0], [sassy, eliyjah]) + arwilda;
  var kamini = getOrthoDistance(arwilda, jameswilliam);
  return {
    x: kamini.horizontal,
    y: kamini.vertical
  };
}
function getBounds(mariusz, _0x1d97b9 = 0) {
  var keiontay = [[0, 0]];
  var arinda = {
    x: 0,
    y: 0
  };
  var kelicia = {
    x: 0,
    y: 0
  };
  var phinehas = 0;
  mariusz.forEach(function (unknown, brenard) {
    if (brenard !== 0) {
      phinehas += unknown.angle;
    }
    var annalice = Math.floor(Math.sin(phinehas * (Math.PI / 180)) * unknown.edgeLength);
    var palynn = Math.floor(Math.cos(phinehas * (Math.PI / 180)) * unknown.edgeLength);
    var shivank = keiontay[keiontay.length - 1][0];
    var alanee = keiontay[keiontay.length - 1][1];
    if (shivank < 0) {
      kelicia.x = shivank;
    }
    if (shivank > 0) {
      arinda.x = shivank;
    }
    if (alanee < 0) {
      kelicia.y = alanee;
    }
    if (alanee > 0) {
      arinda.y = alanee;
    }
    keiontay.push([shivank + palynn, alanee + annalice]);
  });
  var shacola = Math.abs(0);
  var dacre = Math.abs(0);
  return {
    width: shacola,
    height: dacre
  };
}
function createCheckbox(_0x489b82 = false, _0x16c074 = false, _0x4713ab = "") {
  let jubran = _0x489b82 ? "slide-toggle active" : "slide-toggle";
  let shaenna = createHtml({
    tag: "div",
    class: jubran,
    children: [{
      tag: "div",
      children: [{
        tag: "div"
      }]
    }, _0x4713ab ? {
      tag: "p",
      text: _0x4713ab
    } : false]
  });
  shaenna.onclick = function () {
    shaenna.classList.toggle("active");
    let amaj = shaenna.classList.contains("active") ? 1 : 0;
    if (artx.modified && _0x16c074) {
      artx.modified[_0x16c074] = amaj;
    }
  };
  return shaenna;
}
function setThemeColor(jerimy) {
  document.querySelector("meta[name=\"theme-color\"]").setAttribute("content", jerimy);
}
artx.showTexture = function (ariyella, richelle) {
  let sigvard = createHtml({
    tag: "div",
    class: "lr-section-content",
    style: "opacity:0;"
  });
  if (!ariyella.description) {
    postJson("/app/get-texture-info", {
      id: ariyella.id
    }).then(function (nalina) {
      sigvard.innerHTML = nalina.description;
      fadeIn(sigvard);
    });
  } else {
    sigvard.innerHTML = ariyella.description;
    fadeIn(sigvard);
  }
  let oded = artx.cdn + ariyella.imgurl + "?s=400&q=60";
  let hayoon = artx.units === "inches" ? mmToInches(ariyella.width_mm) + " in" : ariyella.width_mm + " mm";
  let mykiya = ariyella.color;
  let yuuka = hexBrightness(ariyella.color);
  if (yuuka > 0.75) {
    let ericalynn = hexToRgb(ariyella.color);
    let gion = parseInt((yuuka - 0.75) * 255);
    mykiya = "rgb(" + (ericalynn[0] - gion) + "," + (ericalynn[1] - gion) + "," + (ericalynn[2] - gion) + ")";
  }
  setThemeColor(ariyella.color);
  let chesnee = createHtml({
    tag: "div",
    class: "lr-scalebar-text fw fh cc inlab"
  });
  let chidima = createHtml({
    tag: "input",
    type: "range",
    min: 100,
    max: 2e3,
    value: 500,
    class: "lr-scalebar-slider light fw"
  });
  let ladaynian = createHtml({
    tag: "div",
    style: "background-color:" + mykiya + ";",
    class: "lr-slide-bottom cc",
    children: [chesnee, {
      tag: "div",
      style: "min-width:200px;padding:15px;box-sizing:border-box;",
      class: "lr-scalebar-line fh cc",
      children: [chidima]
    }]
  });
  let innessa = createHtml({
    tag: "img",
    src: oded,
    style: "width: 500px;min-width:500px;height:auto;"
  });
  let daivon = createHtml({
    tag: "div",
    class: "cc fw fh",
    style: "background-color:" + ariyella.color + ";background-size:" + 500 + "px;background-position: center;background-image:url(" + oded + ")",
    children: [innessa, ladaynian]
  });
  let vaughna = artx.cdn + ariyella.imgurl;
  let twina = new Image();
  twina.onload = function () {
    daivon.style.backgroundImage = "url(" + vaughna + ")";
    innessa.src = vaughna;
  };
  twina.src = vaughna;
  let lasonia = createHtml({
    tag: "div",
    class: "lr-slides",
    children: [{
      tag: "div",
      class: "lr-slide",
      children: [daivon]
    }]
  });
  let sakeya = createHtml({
    tag: "div",
    class: "fbutt save",
    style: "width: 100px;",
    text: "Save"
  });
  let sheeba = createHtml({
    tag: "div",
    class: "fbutt download",
    text: "Download"
  });
  let shriram = createHtml({
    tag: "div",
    class: "fbutt download",
    text: "Import"
  });
  let laray = createHtml({
    tag: "div",
    class: "fbutt edit",
    text: "Edit"
  });
  let dalery = richelle ? createHtml({
    tag: "a",
    href: "/textures",
    children: [{
      tag: "img",
      class: "pntr",
      style: "height:33px;",
      src: artx.cdn + "/icons/arrow-left.svg?v=2"
    }]
  }) : createHtml({
    tag: "img",
    class: "pntr",
    style: "height:33px;",
    src: artx.cdn + "/icons/arrow-left.svg?v=2"
  });
  let calesha = createHtml({
    tag: "div",
    class: "fbutt request",
    text: "Request"
  });
  let seojun = createDatabox({
    query: {
      table: "textures",
      where: [["materials", "=", ariyella.materials], ["id", "!=", ariyella.id]],
      limit: 6
    },
    itemHtml: function (paesley) {
      return artx.createAssetCard(paesley);
    }
  });
  var lorelie = createHtml({
    tag: "div",
    class: "mat-data-grid column"
  });
  seojun.itemContainer.setAttribute("class", "asset-grid row");
  let allinson = createHtml({
    tag: "a",
    href: ugcLink(ariyella.brands_website_link),
    target: "_blank",
    class: "fbutt link"
  });
  if (ariyella.brand) {
    allinson.appendChild(createHtml({
      tag: "img",
      class: "blogo",
      src: artx.cdn + "" + ariyella.brands_logo + "?s=200"
    }));
    query({
      table: "protextures",
      id: ariyella.materials
    }).then(function (jillianna) {
      if (jillianna.results[0] && jillianna.results[0].link) {
        allinson.href = jillianna.results[0].link;
      }
    });
  }
  let rachele = createHtml({
    tag: "div",
    class: "window lr-page",
    "data-esc": true,
    children: [artx.plugin && artx.plugin !== "revit" ? {
      tag: "div",
      class: "banner-message banner-container",
      id: "import-message",
      style: "display:none;",
      children: [{
        tag: "div",
        class: "banner",
        id: "import-status-banner",
        children: [{
          tag: "div",
          class: "plugin-import-ongoing import-message",
          children: [{
            tag: "div",
            text: "Importing"
          }]
        }, {
          tag: "div",
          class: "plugin-import-complete import-message",
          style: "display:none;",
          children: [{
            tag: "div",
            class: "svg-icon app-icon svg-icon-path",
            id: "kebab",
            style: "height:18px;margin:15px;",
            text: "<?php include $_SERVER['DOCUMENT_ROOT'] . '/img/icons/tick.svg'; ?>"
          }]
        }]
      }]
    } : "", {
      tag: "div",
      class: "lr-left",
      children: [lasonia]
    }, {
      tag: "div",
      class: "lr-right column-container",
      children: [{
        tag: "div",
        class: "lr-content",
        children: [richelle ? document.querySelector(".top") : false, {
          tag: "div",
          class: "lr-header row column vstin",
          children: [richelle ? false : {
            tag: "div",
            class: "eh",
            children: [dalery]
          }, {
            tag: "div",
            class: "sh",
            children: [{
              tag: "h1",
              class: "lr-title",
              text: ariyella.name
            }]
          }, {
            tag: "div",
            class: "stin cv",
            children: [ariyella.brand > 0 ? {
              tag: "div",
              children: [{
                tag: "div",
                class: "inlab",
                text: "Maker"
              }, {
                tag: "a",
                target: "_blank",
                href: ugcLink(ariyella.brands_website_link),
                text: ariyella.brands_name
              }]
            } : false, {
              tag: "div",
              children: [{
                tag: "div",
                class: "inlab",
                text: "Category"
              }, {
                tag: "div",
                class: "",
                text: ariyella.category
              }]
            }, {
              tag: "div",
              children: [{
                tag: "div",
                class: "inlab",
                text: "Width"
              }, {
                tag: "div",
                class: "",
                text: hayoon
              }]
            }]
          }, {
            tag: "div",
            class: "fbutt-container",
            children: [!artx.plugin ? sheeba : artx.plugin !== "revit" ? shriram : "", laray, sakeya, ariyella.brand > 0 ? allinson : false, artx.user && (artx.user.type === "admin" || artx.user.type === "user" && ["eu", "na"].includes(artx.userRegion)) && ariyella.brand && !["graphic", "organic", "surfacing", "landscaping"].includes(ariyella.category.toLowerCase()) ? calesha : ""]
          }]
        }, {
          tag: "div",
          class: "row column para",
          children: [sigvard]
        }, lorelie]
      }, {
        tag: "div",
        class: "row column soft-top",
        children: [{
          tag: "h3",
          text: "Similar Textures"
        }, {
          tag: "div",
          class: "asset-container",
          children: [seojun.itemContainer]
        }]
      }, richelle ? document.querySelector(".footer") : false]
    }]
  });
  jennice(500);
  function jennice(divya) {
    if (divya < 100) {
      divya = 100;
    }
    chidima.value = divya;
    let dristi = daivon.getBoundingClientRect().width === 0 ? window.innerWidth / 2 : daivon.getBoundingClientRect().width;
    let johnovan = dristi / divya;
    let rozan = ariyella.width_mm * johnovan;
    chesnee.innerHTML = artx.units === "inches" ? mmToInches(rozan) + " in" : round(rozan) + " mm";
    daivon.style.backgroundSize = divya + "px";
  }
  chidima.oninput = function () {
    innessa.style.display = "none";
    jennice(chidima.value);
  };
  daivon.onwheel = window.innerWidth < 800 ? "" : function (ceana) {
    innessa.style.display = "none";
    let lavontay = ceana.wheelDelta > 0 ? 100 : -100;
    let jordanna = parseInt(daivon.style.backgroundSize) + lavontay;
    jennice(jordanna);
  };
  sheeba.onclick = function () {
    let tanijah = [{
      name: "Texture (Small)",
      view: "texture"
    }, {
      name: "Texture (Hi-res)",
      view: "texture"
    }, {
      name: "Normal Map",
      view: "normal"
    }, {
      name: "Displacement Map",
      view: "displacement"
    }, {
      name: "Roughness Map",
      view: "roughness"
    }, {
      name: "Metalness Map",
      view: "metalness"
    }];
    if (ariyella.brand > 0 || ariyella.type === "photo") {
      tanijah = [{
        name: "Texture",
        view: "texture"
      }];
    }
    let jaran = createContextMenu({
      items: tanijah,
      itemHtml: function (yvelisse) {
        let coua = createHtml({
          tag: "div",
          class: "nav-menu-item sh",
          text: yvelisse.name
        });
        if (!["Texture (Small)", "Texture"].includes(yvelisse.name) && !artx.pro) {
          coua.appendChild(createHtml({
            tag: "div",
            class: "pro-tag"
          }));
        }
        coua.onclick = function () {
          recTextureDownload(ariyella.id);
          if (["Texture (Small)", "Texture"].includes(yvelisse.name)) {
            var delyssa = new Image();
            delyssa.crossOrigin = "anonymous";
            delyssa.onload = function () {
              let achille = newCanvas();
              achille.canvas.width = delyssa.width;
              achille.canvas.height = delyssa.height;
              achille.ctx.drawImage(delyssa, 0, 0);
              let jeyceon = resizeCanvas(achille.canvas, {
                maxSize: 900
              });
              createHtml({
                tag: "a",
                download: trainify(ariyella.name + " " + hayoon + " architextures") + ".jpg",
                href: jeyceon.toDataURL("image/jpeg", 0.8)
              }).click();
            };
            delyssa.src = artx.cdnOrigin + ariyella.imgurl;
          } else {
            let simrat = artx.pro ? "/create/" + ariyella.id + "?view=" + yvelisse.view : "/pro";
            createHtml({
              tag: "a",
              href: simrat,
              target: "_blank"
            }).click();
          }
        };
        return coua;
      },
      x: sheeba.getBoundingClientRect().left,
      y: sheeba.getBoundingClientRect().top,
      width: 250,
      height: false,
      isHiddenOnClose: false
    });
    insertHtml(jaran);
  };
  shriram.onclick = function () {
    let tersea = {
      type: "import",
      data: {}
    };
    tersea.data.name = ariyella.name.split(" ").join("_");
    tersea.data.params = ariyella.params;
    tersea.data.width = ariyella.width_mm;
    showImportMessage().then(() => {
      fetch(innessa.src).then(heaton => heaton.blob()).then(markiyah => {
        var onterrio = new FileReader();
        onterrio.onloadend = function () {
          tersea.data.image = onterrio.result;
          postJson("/app/texture-download", {
            id: ariyella.id,
            page: window.location.href
          });
          toApp(tersea);
        };
        onterrio.readAsDataURL(markiyah);
      });
    });
  };
  laray.onclick = function () {
    if (artx.plugin) {
      Object.assign(ariyella, {
        sourceTable: "textures"
      });
      artx.launchEditor({
        type: "new",
        data: ariyella
      });
    } else {
      createHtml({
        tag: "a",
        href: "/create/" + ariyella.id,
        target: "_blank"
      }).click();
    }
  };
  if (!richelle) {
    let ajia = "/textures/" + ariyella.id + window.location.search;
    dalery.onclick = function () {
      history.back();
      rachele.remove();
      setThemeColor("#eaece8");
    };
    history.pushState({}, ariyella.name + artx.titleSuffix, ajia);
    document.title = ariyella.name + artx.titleSuffix;
    window.addEventListener("popstate", valerin => {
      if (window.location.pathname !== ajia) {
        rachele.remove();
        setThemeColor("#eaece8");
      }
    });
  } else {
    window.addEventListener("popstate", gregario => {
      if (window.location.pathname !== artx.initialPath) {
        window.location.reload();
      }
    });
  }
  recTextureView(ariyella.id);
  insertHtml(rachele);
  uiListener();
  rachele.querySelector(".lr-left").style.minHeight = window.innerHeight - rachele.querySelector(".lr-header").offsetHeight + "px";
  if (!artx.user) {
    sakeya.onclick = () => {
      const gallagher = new RegistrationForm({
        isModal: true,
        referrer: getArtxCookie("referrer"),
        country: artx.userCountry
      });
      gallagher.init();
      const anatalia = gallagher.getForm();
      const luzmary = new ImageSlides(sliderImages.slides, true);
      luzmary.createSlides();
      anatalia.querySelector("[data-form='parent-element']").prepend(luzmary.getSlidesElement());
      insertHtml(anatalia);
      anatalia.querySelector("[data-form='register-btn']").onclick = () => {
        if (!anatalia.querySelector("[data-form='accept-terms']").checked) {
          gallagher.showError("accept-terms");
          return;
        }
        anatalia.querySelector("[data-form-btn='text']").style.display = "none";
        anatalia.querySelector("[data-form-btn='spinner']").style.display = "block";
        new CollectRegistrationData({
          registrationForm: gallagher,
          refreshPage: true,
          params: ariyella
        }).startRegistration();
      };
    };
  } else {
    postJson("/app/query", {
      table: "saves",
      columns: ["id"],
      where: [["texture", "=", ariyella.id], ["user", "=", artx.user.id]],
      auth: true
    }).then(frumie => {
      if (frumie.status && frumie.results.length != 0) {
        sakeya.classList.remove("save");
        sakeya.classList.add("save-full");
        sakeya.innerText = "Saved";
      }
      const takuma = new CollectionUser({
        textureId: ariyella.id,
        anchor: sakeya,
        imgurl: artx.cdn + ariyella.imgurl,
        userId: artx.user.id,
        saveButton: sakeya
      });
      sakeya.onclick = () => {
        takuma.checkIfInSaves().then(shaquel => {
          if (!shaquel) {
            const nigel = addNotification({
              text: "Saving texture...",
              image: "spinner"
            });
            const ajayah = {
              name: ariyella.name,
              category: ariyella.category,
              width_mm: ariyella.width_mm,
              height_mm: ariyella.height_mm,
              imgurl: ariyella.imgurl,
              params: JSON.stringify(ariyella.params),
              user: artx.user.id,
              color: ariyella.color,
              texture: ariyella.id
            };
            if (ariyella.brand) {
              ajayah.brand = ariyella.brand;
            }
            postJson("/app/query", {
              table: "saves",
              action: "insert",
              values: ajayah,
              auth: true
            }).then(naesha => {
              if (!naesha.status || naesha.status !== "success") {
                nigel.updateNotification({
                  text: "Error saving texture",
                  image: "warning"
                });
              } else {
                nigel.updateNotification({
                  text: "Texture saved",
                  image: "tick",
                  duration: 2e3
                });
                sakeya.innerText = "Saved";
                sakeya.classList.remove("save");
                sakeya.classList.add("save-full");
              }
              takuma.showCollections();
            });
          } else {
            takuma.showCollections();
          }
        });
      };
    });
  }
  if (artx.user && (artx.user.type === "admin" || artx.user.type === "user" && ["eu", "na"].includes(artx.userRegion))) {
    const jenasys = new BrandRequest();
    jenasys.setName(ariyella.name);
    jenasys.setParams(ariyella.params);
    jenasys.setImageData(ariyella.imgurl, ariyella.color);
    jenasys.setBrand(ariyella.brand || null);
    calesha.addEventListener("click", () => {
      let teshia = document.querySelector("[data-modal='request-modal']");
      if (teshia) {
        jenasys.toggleRequestModal();
      } else {
        insertHtml(jenasys.getRequestModal());
      }
    });
  }
  return rachele;
};
artx.createAssetCard = function (braneisha) {
  let kalkidan = [549, 374].includes(braneisha.brand) ? "?s=800&q=60" : "?s=400&q=60";
  let jyl = braneisha.imgurl.startsWith("/", 0) ? artx.cdn + braneisha.imgurl + kalkidan : braneisha.imgurl;
  var eleanora = createHtml({
    tag: "img",
    style: "filter:saturate(0);opacity:0.9;max-height:12px;max-height:80pxobject-fit:contain;",
    src: braneisha.brands_logo ? artx.cdn + "" + braneisha.brands_logo + "?s=400&q=60" : ""
  });
  var tantanea = createHtml({
    tag: "a",
    href: "/textures/" + braneisha.id,
    class: "asset pr",
    style: "background-color:" + braneisha.color + ";background-image:url(" + jyl + ");",
    children: [{
      tag: "div",
      class: "asset-label cv sh",
      children: [{
        tag: "div",
        class: "asset-label-text fw fc",
        children: [{
          tag: "div",
          class: "sline asset-label-title",
          text: braneisha.name
        }, {
          tag: "div",
          style: "height:12px;margin-top: 3px;",
          class: "cv asset-label-subtitle",
          children: [braneisha.brand > 0 ? eleanora : {
            tag: "div",
            class: "inlab",
            text: braneisha.category
          }]
        }]
      }, {
        tag: "div",
        class: "cc s-gap",
        children: []
      }]
    }]
  });
  if ([549, 374].includes(braneisha.brand)) {
    tantanea.classList.add("no-repeat");
  }
  tantanea.onclick = function (gilad) {
    if (!artx.keysPressed.Meta && !artx.keysPressed.Control) {
      gilad.preventDefault();
      if (artx.isInModel) {
        Object.assign(braneisha, {
          sourceTable: "revit"
        });
        artx.launchEditor({
          type: "existing",
          data: braneisha
        });
      } else if (artx.plugin === "revit" || artx.isInSaves) {
        Object.assign(braneisha, {
          sourceTable: "saves"
        });
        artx.launchEditor({
          type: "new",
          data: braneisha
        });
      } else {
        artx.showTexture(braneisha);
      }
    }
  };
  return tantanea;
};
artx.createPbrThumb = function (zyleigh) {
  let sanyia = createHtml({
    tag: "a",
    href: "/create/" + zyleigh.id + "?view=sphere",
    target: "blank",
    children: [{
      tag: "div",
      class: "pr vstin",
      children: [{
        tag: "img",
        alt: "3D sphere preview of " + zyleigh.name + " seamless texture",
        class: "planet pbr",
        src: "https://cdn.architextures.org" + zyleigh.sphere + "?s=400"
      }, {
        tag: "div",
        children: [{
          tag: "div",
          class: "sline",
          text: zyleigh.name
        }, {
          tag: "div",
          class: "input-label",
          text: zyleigh.category
        }]
      }]
    }]
  });
  return sanyia;
};
artx.createCatMenu = function (geriah, rahkeem) {
  let ahni = createContextMenu({
    items: [{
      name: "All"
    }, {
      name: "Stone",
      img: "/icons/stone.svg?v=5"
    }, {
      name: "Wood",
      img: "/icons/wood.svg?v=5"
    }, {
      name: "Brick",
      img: "/icons/brick.svg?v=5"
    }, {
      name: "Concrete",
      img: "/icons/concrete.svg?v=5"
    }, {
      name: "Terrazzo",
      img: "/icons/terrazzo.svg?v=5"
    }, {
      name: "Metal",
      img: "/icons/metal.svg?v=5"
    }, {
      name: "Tile",
      img: "/icons/tile.svg?v=5?v=2"
    }, {
      name: "Fabric",
      img: "/icons/fabric3.svg?v=5"
    }, {
      name: "Wallpaper",
      img: "/icons/wallpaper.svg?v=5"
    }, {
      name: "Carpet",
      img: "/icons/carpet.svg?v=5"
    }, {
      name: "Plastic",
      img: "/icons/plastic.svg?v=5"
    }, {
      name: "Organic",
      img: "/icons/organic.svg?v=5?v=5"
    }, {
      name: "Insulation",
      img: "/icons/insulation.svg?v=5"
    }],
    itemHtml: function (roth) {
      let garrette = createHtml({
        tag: "div",
        class: "nav-menu-item",
        children: [roth.name === "All" ? {
          tag: "div",
          style: "outline: 2px #aaa dotted; width: 20px; height: 20px;margin-right:10px; margin-left: 2px"
        } : {
          tag: "img",
          src: artx.cdn + roth.img,
          style: "width:25px;height:25px;object-fit:contain;margin-right:10px;"
        }, roth.name]
      });
      garrette.onclick = function () {
        if (roth.name === "All") {
          geriah.query.where = [["type", "IS NULL"]];
          rahkeem.innerHTML = "Category";
        } else {
          let siller = copy(geriah.ogQuery.where);
          siller.push(["category", "like", roth.name]);
          geriah.query.where = siller;
          rahkeem.innerHTML = roth.name;
        }
        if (geriah.query.table === "saves") {
          geriah.query.joins = geriah.query.joins.filter(annaise => {
            return !(annaise.table && annaise.table.startsWith("textures_position"));
          });
          const akura = "textures_position_" + artx.userRegion.toLowerCase();
          const evola = [akura + ".position", "IS NOT NULL"];
          geriah.query.where = geriah.query.where.filter(jaydenjames => {
            return jaydenjames.toString() !== evola.toString();
          });
        }
        geriah.fetchItems(true);
        ahni.style.display = "none";
      };
      return garrette;
    },
    isHiddenOnClose: true,
    x: rahkeem.getBoundingClientRect().left,
    y: rahkeem.getBoundingClientRect().top,
    width: 250,
    srcElement: rahkeem
  }, true);
  return ahni;
};
artx.createBrandMenu = function (blayten, taifa) {
  let shara = createDatabox({
    query: {
      url: "/app/get-brands"
    },
    itemHtml: function (duanne) {
      let rubiel = createHtml({
        tag: "div",
        class: "nav-menu-item",
        children: [{
          tag: "img",
          class: "logo",
          style: "width:50px;height:25px;object-fit:contain;",
          src: artx.cdn + "" + duanne.logo + "?s=200"
        }, {
          tag: "div",
          style: "margin-left:15px;",
          text: duanne.name
        }]
      });
      rubiel.onclick = function () {
        let rwanda = copy(blayten.ogQuery.where);
        rwanda.push(["brand", "=", duanne.id]);
        blayten.query.where = rwanda;
        if (blayten.query.table === "saves") {
          blayten.query.joins = blayten.query.joins.filter(zeddicus => {
            return !(zeddicus.table && zeddicus.table.startsWith("textures_position"));
          });
          const kaetlin = "textures_position_" + artx.userRegion.toLowerCase();
          const tresean = [kaetlin + ".position", "IS NOT NULL"];
          blayten.query.where = blayten.query.where.filter(jamalia => {
            return jamalia.toString() !== tresean.toString();
          });
        }
        blayten.fetchItems(true);
        taifa.innerHTML = duanne.name;
        sourya.style.display = "none";
      };
      return rubiel;
    }
  });
  let holdyn = createHtml({
    tag: "div",
    id: "reset-brands-filter",
    class: "nav-menu-item",
    children: [{
      tag: "div",
      style: "outline: 2px #aaa dotted; width: 50px; height: 20px; margin-left: 2px"
    }, {
      tag: "div",
      style: "margin-left:15px;",
      text: "All"
    }]
  });
  shara.itemContainer.appendChild(holdyn);
  holdyn.addEventListener("click", function () {
    blayten.query.where = [["type", "IS NULL"]];
    blayten.fetchItems(true);
    taifa.innerHTML = "Maker";
    sourya.style.display = "none";
  });
  let sourya = createContextMenu({
    itemContainer: shara.itemContainer,
    x: taifa.getBoundingClientRect().left,
    y: taifa.getBoundingClientRect().top,
    width: 250,
    height: 500,
    srcElement: taifa,
    isHiddenOnClose: true
  }, true);
  return sourya;
};
artx.pluginToggle = function (rayane, kyley, _0x1baa53 = false) {
  rayane.query.table = kyley;
  rayane.query.auth = _0x1baa53;
  const debby = "textures_position_" + artx.userRegion.toLowerCase();
  switch (kyley) {
    case "textures":
      if (!rayane.query.columns.includes("sphere")) {
        rayane.query.columns.push("sphere");
      }
      if (!rayane.query.columns.includes("materials")) {
        rayane.query.columns.push("materials");
      }
      const nguyet = rayane.query.joins.some(tritt => tritt.table && tritt.table.startsWith("textures_position"));
      if (!nguyet) {
        rayane.query.joins.push({
          table: debby,
          columns: ["texture", "position"],
          on: ["id", "=", "texture"],
          sort: ["position", "asc"]
        });
      }
      const iler = [debby + ".position", "IS NOT NULL"];
      if (!rayane.query.where.some(gyana => gyana.toString() === iler.toString())) {
        rayane.query.where.push(iler);
      }
      if (rayane.query.sort) {
        delete rayane.query.sort;
      }
      if (rayane.query.if_owner) {
        delete rayane.query.if_owner;
      }
      break;
    case "saves":
    default:
      if (rayane.query.columns.includes("sphere")) {
        removeFromArray(rayane.query.columns, "sphere");
      }
      if (rayane.query.columns.includes("materials")) {
        removeFromArray(rayane.query.columns, "materials");
      }
      rayane.query.sort = ["id", "DESC"];
      rayane.query.joins = rayane.query.joins.filter(alaza => {
        return !(alaza.table && alaza.table.startsWith("textures_position"));
      });
      const bengt = [debby + ".position", "IS NOT NULL"];
      rayane.query.where = rayane.query.where.filter(brithanny => {
        return brithanny.toString() !== bengt.toString();
      });
      if (!rayane.query.if_owner) {
        rayane.query.if_owner = true;
      }
  }
  rayane.fetchItems(true);
};
artx.resetBrands = function (zaccai) {
  zaccai.query.where = [["type", "IS NULL"]];
  zaccai.fetchItems(true);
};
$(document).ready(function () {
  if (document.cookie.indexOf("artx_ntf=") !== -1) {
    const aira = document.cookie.split(";").find(function (jhamal) {
      return jhamal.trim().startsWith("artx_ntf=");
    });
    addNotification(aira.split("=")[1].replaceAll("'", ""));
    document.cookie = "artx_ntf=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  for (const breinne of document.querySelectorAll("[data-proxy]")) {
    breinne.onclick = function () {
      var azavian = document.querySelector(breinne.getAttribute("data-proxy"));
      if (azavian.getAttribute("type") == "checkbox") {
        if (breinne.classList.contains("active")) {
          breinne.classList.remove("active");
          azavian.checked = false;
        } else {
          breinne.classList.add("active");
          azavian.checked = true;
        }
        azavian.onchange();
      } else {
        azavian.click();
      }
    };
  }
  artx.drawScene = function (conception, jackelinne, miriel) {
    return new Promise(function (anisse, elijahh) {
      var alishah = [];
      if (!miriel) {
        miriel = {};
      }
      if (!jackelinne) {
        jackelinne = document.createElement("canvas");
      }
      var stirling = jackelinne.getContext("2d");
      var lakshay = conception.hasOwnProperty("sceneScale") ? parseFloat(conception.sceneScale) : 1;
      if (!miriel.baseImage || miriel.baseImage.src !== artx.mediaEndpoint + conception.image) {
        alishah.push(new Promise(function (jno, jreem) {
          miriel.baseImage = new Image();
          miriel.baseImage.crossOrigin = "anonymous";
          miriel.baseImage.onload = function (edroy) {
            miriel.width = 3e3;
            miriel.height = miriel.width / (miriel.baseImage.width / miriel.baseImage.height);
            jno();
          };
          miriel.baseImage.src = artx.mediaEndpoint + conception.image + "?q=60";
        }));
        if (conception.clip) {
          alishah.push(new Promise(function (shequilla, xou) {
            miriel.clipImage = new Image();
            miriel.clipImage.crossOrigin = "anonymous";
            miriel.clipImage.onload = function () {
              shequilla();
            };
            miriel.clipImage.src = artx.mediaEndpoint + conception.clip + "?v=2";
          }));
        }
      }
      Promise.all(alishah).then(function () {
        artx.renderModel({
          width: miriel.width,
          height: miriel.height,
          textures: conception.textures,
          fov: conception.fov,
          mesh_file: conception.mesh_file,
          camera_file: conception.camera_file,
          camera_name: conception.camera_name,
          crop_x: conception.crop_x,
          crop_y: conception.crop_y,
          crop_width: conception.crop_width,
          colors: conception.colors,
          renderer: conception.renderer ? conception.renderer : false
        }, miriel).then(function (darionte) {
          jackelinne.width = miriel.width * lakshay;
          jackelinne.height = miriel.height * lakshay;
          if (conception.mirror) {
            stirling.scale(-1, 1);
            stirling.translate(-jackelinne.width, 0);
          }
          if (conception.clip) {
            stirling.drawImage(miriel.clipImage, 0, 0, Math.floor(miriel.clipImage.width), Math.floor(miriel.clipImage.height), 0, 0, miriel.width * lakshay, miriel.height * lakshay);
          }
          var carmya = conception.scale;
          var alease = typeof conception.anchor_3d === "string" ? JSON.parse(conception.anchor_3d) : conception.anchor_3d;
          var braeya = typeof conception.anchor_render === "string" ? JSON.parse(conception.anchor_render) : conception.anchor_render;
          var tara = alease ? alease[0] * carmya * miriel.width : 0;
          var cragi = alease ? alease[1] * carmya * miriel.height : 0;
          var walterine = braeya ? braeya[0] * miriel.width : 0;
          var blen = braeya ? braeya[1] * miriel.height : 0;
          stirling.globalCompositeOperation = "source-in";
          stirling.drawImage(darionte.canvas, 0, 0, Math.floor(miriel.width), Math.floor(miriel.height), walterine - tara, blen - cragi, miriel.width * carmya, miriel.height * carmya);
          disposeCanvas(darionte.canvas);
          stirling.globalCompositeOperation = "multiply";
          stirling.drawImage(miriel.baseImage, 0, 0, miriel.width, miriel.height);
          stirling.restore();
          anisse({
            canvas: jackelinne,
            settings: darionte.settings
          });
        });
      });
    });
  };
  artx.renderModel = function (lakrisha, delvia) {
    return new Promise(function (runda) {
      var rayden = false;
      if (!delvia || delvia.camera_name !== lakrisha.camera_name || delvia.mesh_file !== lakrisha.mesh_file) {
        rayden = true;
        if (delvia) {
          delete delvia;
        }
        if (delvia && delvia.renderer) {
          disposeCanvas(delvia.renderer.domElement);
        }
        delvia = {};
        delvia.threeScene = new THREE.Scene();
        delvia.meshModels = {};
        delvia.cameraModels = {};
        delvia.materials = {};
        delvia.colorsByMesh = {};
      }
      delvia.materialsByMesh = {};
      delvia.camera_name = lakrisha.camera_name;
      var rawlings = delvia.threeScene;
      var aleemah = [];
      var keishara = lakrisha.textures ? lakrisha.textures : [];
      keishara.forEach(function (brinlee) {
        let jeylah = brinlee.image.slice(0, 5) === "data:" ? "dataUrl" : brinlee.image;
        if (jeylah === "dataUrl" || !delvia.materials.hasOwnProperty(jeylah)) {
          let aristos = new Promise((giannys, betsie) => {
            new THREE.TextureLoader().load(brinlee.image, function (taishmara) {
              taishmara.wrapS = THREE.RepeatWrapping;
              taishmara.wrapT = THREE.RepeatWrapping;
              taishmara.rotation = brinlee.rotation ? brinlee.rotation * Math.PI / 180 : 0;
              var tawfiq = brinlee.width;
              var severen = tawfiq / (taishmara.image.width / taishmara.image.height);
              taishmara.repeat.set(1e3 / tawfiq, -(1e3 / severen));
              var osias = new THREE.MeshStandardMaterial({
                map: taishmara,
                side: THREE.DoubleSide
              });
              delvia.materials[jeylah] = osias;
              if (!brinlee.hasOwnProperty("meshes")) {
                delvia.defaultMaterial = osias;
              }
              giannys();
            });
          });
          aleemah.push(aristos);
        }
        if (brinlee.hasOwnProperty("meshes")) {
          brinlee.meshes.forEach(function (lailamarie) {
            delvia.materialsByMesh[lailamarie] = jeylah;
          });
        }
      });
      if (!delvia.cameraModels.hasOwnProperty(lakrisha.camera_file)) {
        const teresaann = new THREE.LoadingManager(function () {});
        const sesar = new ColladaLoader(teresaann);
        var shirita = new Promise((shakenia, wilbur) => {
          sesar.load(artx.mediaEndpoint + lakrisha.camera_file, function (kendly) {
            delvia.cameraModels[lakrisha.camera_file] = kendly;
            shakenia();
          });
        });
      }
      if (!delvia.meshModels.hasOwnProperty(lakrisha.mesh_file)) {
        const arvle = new THREE.LoadingManager(function () {});
        const jaynie = new GLTFLoader(arvle);
        var landry = new Promise((tysheana, flavian) => {
          jaynie.load(artx.mediaEndpoint + lakrisha.mesh_file + "?v=2", function (jumari) {
            delvia.meshModels[lakrisha.mesh_file] = jumari;
            delvia.mesh_file = lakrisha.mesh_file;
            tysheana();
          });
        });
      }
      Promise.all([...aleemah, shirita, landry]).then(function () {
        var kenzey = delvia.meshModels[lakrisha.mesh_file].scene;
        var chauncy = delvia.cameraModels[lakrisha.camera_file].scene;
        function andon(renado, elso) {
          elso(renado);
          if (renado.children.length) {
            renado.children.forEach(function (xiya) {
              andon(xiya, elso);
            });
          }
        }
        var jaboa = [];
        var eudora = 0;
        andon(kenzey, function (jaydenlee) {
          if (jaydenlee.type == "Mesh") {
            jaboa.push(jaydenlee);
            if (!keishara.length) {
              let renette = ["#e6194B", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#42d4f4", "#f032e6", "#bfef45", "#fabed4", "#469990", "#dcbeff", "#9A6324", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000075", "#a9a9a9", "#000000", "#eeeeee"];
              var jociel = lakrisha.colors && lakrisha.colors[eudora] ? lakrisha.colors[eudora] : renette[eudora];
              delvia.colorsByMesh[eudora] = jociel;
              jaydenlee.material = new THREE.MeshStandardMaterial({
                color: jociel,
                side: THREE.DoubleSide
              });
            } else {
              jaydenlee.material = delvia.materialsByMesh[eudora] ? delvia.materials[delvia.materialsByMesh[eudora]] : delvia.defaultMaterial;
            }
            eudora++;
          }
        });
        if (rayden) {
          rawlings.add(kenzey);
          rawlings.add(chauncy);
          rawlings.add(new THREE.AmbientLight("#FFFFFF"));
          var cordarrel = [];
          andon(chauncy, function (myanni) {
            if (myanni.type == "PerspectiveCamera") {
              cordarrel.push(myanni);
            }
          });
          delvia.camera = lakrisha.camera_name ? cordarrel.find(kager => kager.name === lakrisha.camera_name) : cordarrel[0];
          if (lakrisha.crop_x !== null && lakrisha.crop_x !== undefined) {
            let natylee = lakrisha.width / lakrisha.crop_width;
            let sare = natylee / (lakrisha.width / lakrisha.height);
            delvia.camera.setViewOffset(natylee, sare, lakrisha.crop_x * natylee, lakrisha.crop_y * sare, natylee * lakrisha.crop_width, natylee * lakrisha.crop_width / (lakrisha.width / lakrisha.height));
          }
          delvia.camera.aspect = lakrisha.width / lakrisha.height;
          delvia.camera.far = 1e4;
          if (lakrisha.fov) {
            delvia.camera.fov = lakrisha.fov;
          }
          delvia.camera.updateProjectionMatrix();
        }
        artx.sceneRenderer = artx.sceneRenderer ? artx.sceneRenderer : new THREE.WebGLRenderer({
          alpha: true,
          antialias: true
        });
        let tiphany = lakrisha.renderer ? lakrisha.renderer : artx.sceneRenderer;
        tiphany.setSize(lakrisha.width, lakrisha.height);
        tiphany.render(rawlings, delvia.camera);
        runda({
          canvas: tiphany.domElement,
          settings: delvia
        });
      });
    });
  };
  $(".proxy-checkbox").click(function () {
    var kaveion = $(this).attr("data-target");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(kaveion).prop("checked", false);
    } else {
      $(this).addClass("active");
      $(kaveion).prop("checked", true);
    }
    $(kaveion).trigger("change");
  });
  $("[data-back-button]").click(function () {
    pluginReturn();
    if (artx.canAccessParent) {
      window.parent.pluginReturn();
    }
  });
  $(".proxy-element").click(function () {
    $($(this).attr("data-target")).trigger("click");
  });
  $(".modal-trigger").click(function () {
    var robson = $(this).attr("data-open");
    $(robson).fadeTo(300, 1).css("display", "flex");
  });
  uiListener();
  $(document).keydown(function (hatina) {
    if (hatina.keyCode === 27) {
      pluginReturn();
      if (window.location.href && window.location.href.includes("architextures.org")) {
        window.parent.pluginReturn();
      }
    }
  });
  $(".ajax-link").click(function (arlete) {
    arlete.preventDefault();
  });
  $(".toggle").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).parent().children().removeClass("active");
      $(this).addClass("active");
    }
  });
  $(".radio-toggle").click(function () {
    $(this).closest(".radio-toggle-container").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  $(".target-toggle").click(function () {
    var yordani = $(this).attr("data-target");
    var kieleigh = $("#" + yordani).attr("data-group");
    if ($("#" + yordani).hasClass("active")) {
      $("[data-group=" + kieleigh + "]").removeClass("active");
      $("[data-group=" + kieleigh + "]").fadeOut(50);
    } else {
      $("[data-group=" + kieleigh + "]").removeClass("active");
      $("#" + yordani).addClass("active");
      $("[data-group=" + kieleigh + "]").not("#" + yordani).fadeOut(50);
      $("#" + yordani).delay(50).fadeIn(50);
    }
  });
  $(".uni-toggle").click(function () {
    var deesha = $(this).attr("data-target");
    var tayah = $(this).find(deesha);
    var micia = $(this).find(deesha).attr("data-group");
    if ($(tayah).hasClass("active")) {
      $(tayah).removeClass("active");
      $("[data-group=" + micia + "]").fadeOut(50);
    } else {
      $("[data-group=" + micia + "]").fadeOut(50).removeClass("active");
      $(tayah).delay(50).fadeIn(50).addClass("active");
    }
  });
  $(".close-menu").click(function () {
    $(this).closest(".flex-menu").removeClass("active").fadeOut(50);
  });
  $(".fade-toggle").click(function () {
    var aneva = "#" + $(this).attr("data-target");
    if ($(aneva).hasClass("active")) {
      $(aneva).removeClass("active");
      $(aneva).fadeOut(50);
    } else {
      $(aneva).addClass("active");
      $(aneva).fadeIn(50);
    }
  });
  const loni = getArtxCookie("categoryState");
  if (loni) {
    document.querySelectorAll("summary.summary").forEach(cyla => {
      const criag = cyla.parentNode.dataset.cat;
      if (loni[criag] === false) {
        cyla.parentNode.removeAttribute("open");
      }
    });
  } else {
    const latyra = {};
    document.querySelectorAll("summary.summary").forEach(atif => {
      latyra[atif.parentNode.dataset.cat] = atif.parentNode.open;
    });
    setArtxCookie("categoryState", latyra);
  }
  document.querySelectorAll("summary.summary").forEach(ogie => {
    ogie.parentNode.addEventListener("toggle", () => {
      const tamiqua = getArtxCookie("categoryState");
      tamiqua[ogie.parentNode.dataset.cat] = ogie.parentNode.open;
      setArtxCookie("categoryState", tamiqua);
    });
  });
});
window.addEventListener("message", function (elis) {
  if (elis.data.hasOwnProperty("artx") && elis.source !== window) {
    let akailah = elis.data.artx;
    if (["import", "update"].includes(akailah.type)) {
      window.parent.postMessage(elis.data, "*");
    }
  } else {
    let chintan = elis.data.type ? elis.data.type : elis.data;
    if (["importComplete"].includes(chintan)) {
      hideImportMessage();
      iframe.hideImportMessage();
    }
  }
});