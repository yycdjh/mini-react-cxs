// v3 通过动态创建el实现
// 动态创建TextElement
function createTextNode(value) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: value,
      children: [],
    },
  };
}

// 动态创建Element
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "string" ? createTextNode(child) : child
      ),
    },
  };
}

function render(el, container) {
  // 判断是不是TextElement 创建对应的dom
  const dom =
    el.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(el.type);

  // 给dom设置属性
  Object.keys(el.props).forEach((key) => {
    if (key !== "children") {
      dom[key] = el.props[key];
    }
  });

  // 处理子元素
  const children = el.props.children;
  children.forEach((child) => render(child, dom));

  // 将dom添加到container
  container.append(dom);
}

const React = {
  createElement,
  render,
};

export default React;
