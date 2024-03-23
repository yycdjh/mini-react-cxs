// v1
// const dom = document.createElement("div");
// dom.id = "app";
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";
// dom.append(textNode);

// v2 js object
const textEl = {
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: "app",
    children: [],
  },
};

const el = {
  type: "div",
  props: {
    id: "app",
    children: [textEl],
  },
};
const dom = document.createElement(el.type);
dom.id = el.props.id;
document.querySelector("#root").append(dom);

const textNode = document.createTextNode("");
textNode.nodeValue = textEl.props.nodeValue;
dom.append(textNode);
