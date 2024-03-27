function createTextNode(value) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: value,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "string" ? createTextNode(child) : child;
      }),
    },
  };
}

function render(el, container) {
  // 创建dom
  const dom =
    el.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(el.type);

  // 处理props
  Object.keys(el.props).forEach((key) => {
    if (key !== "children") {
      dom[key] = el.props[key];
    }
  });

  // 处理children
  const children = el.props.children;
  children.forEach((child) => render(child, dom));

  // 挂载
  container.append(dom);
}

const React = {
  createElement,
  render,
};

export default React;
