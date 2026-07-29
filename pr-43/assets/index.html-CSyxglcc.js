import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-D7sJO8zT.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createBaseVNode(
      "h1",
      {
        id: "управление-видимостью-диаграммы",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#управление-видимостью-диаграммы"
        }, [
          createBaseVNode("span", null, "Управление видимостью диаграммы")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "В командной работе разделение прав, изоляция ресурсов и управление видимостью материала — важные и значимые инструменты менеджмента командной работы. При разработке материала полезно его скрыть от всех до момента презентации или совместного/перекрёстного ревью. В ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " есть система управления видимостью диаграмм.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[9] || (_cache[9] = createBaseVNode(
      "p",
      null,
      "Можно сделать диаграмму публичной — доступной для команды и всех желающих по ссылке, или скрыть её от всех. Для изменения видимости диаграммы:",
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      _cache[7] || (_cache[7] = createBaseVNode(
        "li",
        null,
        "Перейдите в основное окно редактора диаграмм.",
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        _cache[2] || (_cache[2] = createTextVNode(
          "Кликните по кнопке ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.extra" }),
        _cache[3] || (_cache[3] = createTextVNode(
          " в верхней панели управления и из выпадающего списка выберите пункт ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.make_private" }),
        _cache[4] || (_cache[4] = createTextVNode(
          " или ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.make_public" }),
        _cache[5] || (_cache[5] = createTextVNode(
          " в зависимости от задачи: ",
          -1
          /* CACHED */
        )),
        _cache[6] || (_cache[6] = createBaseVNode(
          "img",
          {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/make_public/editor_change_diagramm_status.webp",
            alt: "editor_change_diagramm_status"
          },
          null,
          -1
          /* CACHED */
        ))
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/all/status/","title":"Управление видимостью диаграммы","lang":"ru-RU","frontmatter":{"title":"Управление видимостью диаграммы","description":"Узнайте, как в Stormbpmn управлять видимостью BPMN-диаграмм: делать их публичными или приватными для безопасной командной работы.","tags":["Спецфичи редактора BPMN"],"process_editor":{"upper_toolbar":{"buttons":{"extra":"<i class=\\"pi pi-ellipsis-h\\"></i> **Ещё**","make_private":"<i class=\\"pi pi-eye-slash\\"></i> **Сделать приватной**","make_public":"<i class=\\"pi pi-eye\\"></i> **Сделать публичной**"}}},"product_name":"Stormbpmn"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.56,"words":167},"filePathRelative":"all/status/index.md","excerpt":"\\n<p>В командной работе разделение прав, изоляция ресурсов и управление видимостью материала — важные и значимые инструменты менеджмента командной работы. При разработке материала полезно его скрыть от всех до момента презентации или совместного/перекрёстного ревью. В </p>\\n<p>Можно сделать диаграмму публичной — доступной для команды и всех желающих по ссылке, или скрыть её от всех. Для изменения видимости диаграммы:</p>"}');
export {
  index_html as comp,
  data
};
