(function loadData() {
  function createDomElement(content, htmlEle, parentNode) {
    var node = document.createElement(htmlEle);
    node.innerHTML = content;
    parentNode.appendChild(node);
  }

  function setGroupItems(eleId, groupTitle, groupItems) {
    var mainDiv = document.createElement("div");

    var typeNode = document.createElement("h2");
    typeNode.innerHTML = groupTitle;
    typeNode.className = "title1 wow fadeInDown animate";

    mainDiv.appendChild(typeNode);
    $(`#${eleId}`).appendChild(mainDiv);

    groupItems.map((item) => {
      var rowDiv = document.createElement("div");
      rowDiv.className = "row";

      var col3Div = document.createElement("div");
      col3Div.className = "col-md-3";

      if (item.time) {
        createDomElement(item.time, "h3", col3Div);
      }

      var col9Div = document.createElement("div");
      col9Div.className = "col-md-9";

      if (item.title) {
        createDomElement(item.title, "h3", col9Div);
      }

      if (item.company) {
        createDomElement(item.company, "h4", col9Div);
      }

      if (item.details) {
        item.details.map((detail) => {
          createDomElement(detail, "h4", col9Div);
        });
      }

      rowDiv.appendChild(col3Div);
      rowDiv.appendChild(col9Div);
      mainDiv.appendChild(rowDiv);
    });
  }

  function setSkillsItems(eleId, groupTitle, skillItems) {
    var mainDiv = document.createElement("div");

    var typeNode = document.createElement("h2");
    typeNode.innerHTML = groupTitle;
    typeNode.className = "title1 wow fadeInDown animate";

    mainDiv.appendChild(typeNode);
    $(`#${eleId}`).appendChild(mainDiv);

    var rowDiv = document.createElement("div");
    rowDiv.className = "row";

    var clearDiv = document.createElement("div");
    clearDiv.className = "clearfix";

    skillItems.map((item) => {
      var col4Div = document.createElement("div");
      col4Div.className = "col-md-4 grid wow zoomIn animate";

      var figDiv = document.createElement("figure");
      figDiv.className = "effect-ming";

      var imgDiv = document.createElement("img");
      imgDiv.src = "img/green.jpg";
      imgDiv.alt = "";

      var capDiv = document.createElement("figcaption");

      if (item.skill) {
        createDomElement(item.skill, "h5", capDiv);
      }

      if (item.details) {
        item.details.map((detail) => {
          createDomElement(detail, "p", capDiv);
        });
      }

      figDiv.appendChild(imgDiv);
      figDiv.appendChild(capDiv);
      col4Div.appendChild(figDiv);
      rowDiv.appendChild(col4Div);
      rowDiv.appendChild(clearDiv);
      mainDiv.appendChild(rowDiv);
    });
  }

  var backgroundItems = DATA.filter((item) => item.type === "1");
  setGroupItems("Background", "Akademische Hintergrund", backgroundItems);

  var berufItems = DATA.filter((item) => item.type === "2");
  setGroupItems("Erfahrung", "Berufliche Erfahrungen", berufItems);

  setSkillsItems("Kenntnisse", "Kenntnisse", SKILLSDATA);
})();
