import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-DrERNb8l.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
const _hoisted_2 = { class: "hint-container details" };
const _hoisted_3 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[26] || (_cache[26] = createBaseVNode(
      "h3",
      { id: "bp_map" },
      "Карта",
      -1
      /* CACHED */
    )),
    createBaseVNode("details", _hoisted_1, [
      createBaseVNode("summary", null, [
        _cache[0] || (_cache[0] = createTextVNode(
          "Что такое ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_reg.map" })
      ]),
      createVNode(_component_Fm, { p: "bp_reg.map" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " — визуальное представление архитектуры бизнес-процессов (",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bp_reg.tree" }),
      _cache[2] || (_cache[2] = createTextVNode(
        ") в виде иерархической диаграммы. Например:",
        -1
        /* CACHED */
      )),
      _cache[3] || (_cache[3] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/map/bp_reg_map_def.webp",
            alt: "bp_reg_map_def"
          })
        ],
        -1
        /* CACHED */
      )),
      _cache[4] || (_cache[4] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("strong", null, "Карта"),
          createTextVNode(" отражает:")
        ],
        -1
        /* CACHED */
      )),
      _cache[5] || (_cache[5] = createBaseVNode(
        "ul",
        null,
        [
          createBaseVNode("li", null, "Иерархию бизнес-процессов."),
          createBaseVNode("li", null, "Ключевые метрики."),
          createBaseVNode("li", null, "Статусы бизнес-процессов."),
          createBaseVNode("li", null, "Владельца бизнес-процесса.")
        ],
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bp_reg.map" }),
      _cache[6] || (_cache[6] = createTextVNode(
        " — это удобный инструмент анализа связей и зависимостей между бизнес-процессами.",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_2, [
      _cache[13] || (_cache[13] = createBaseVNode(
        "summary",
        null,
        "Фокус на процессе",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[7] || (_cache[7] = createTextVNode(
          "По умолчанию ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_reg.map" }),
        _cache[8] || (_cache[8] = createTextVNode(
          " отражает все бизнес-процессы из раздела ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_reg.tree" }),
        _cache[9] || (_cache[9] = createTextVNode(
          ". Однако бывает нужно сфокусироваться на одном бизнес-процессе, чтобы это сделать, кликните на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "map.buttons.focus" }),
        _cache[10] || (_cache[10] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      _cache[14] || (_cache[14] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/map/bp_reg_map_focus_btn.webp",
            alt: "bp_reg_map_focus_btn"
          })
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[11] || (_cache[11] = createTextVNode(
          "После нажатия на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "map.buttons.focus" }),
        _cache[12] || (_cache[12] = createTextVNode(
          " останется только выбранная карта бизнес-процесса:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[15] || (_cache[15] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/map/bp_reg_map_focus_result.webp",
            alt: "bp_reg_map_focus_result"
          })
        ],
        -1
        /* CACHED */
      )),
      _cache[16] || (_cache[16] = createBaseVNode(
        "p",
        null,
        "Сфокусироваться можно на любом уровне вложенности процесса. Уровень вложенности будет отражаться сверху в мини панели навигации по процессу:",
        -1
        /* CACHED */
      )),
      _cache[17] || (_cache[17] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/map/bp_reg_map_focus_result_deep.webp",
            alt: "bp_reg_map_focus_result_deep"
          })
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_3, [
      _cache[22] || (_cache[22] = createBaseVNode(
        "summary",
        null,
        "Просмотр параметров процесса и его редактирование",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bp_reg.map" }),
      _cache[23] || (_cache[23] = createTextVNode(
        " не только отображает бизнес-процесс в виде иерархической диаграммы, но и позволяет просматривать параметры бизнес-процесса и редактировать их. Для открытия параметров бизнес-процесса кликните по его названию:",
        -1
        /* CACHED */
      )),
      _cache[24] || (_cache[24] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/map/bp_reg_map_show_proc_options.webp",
            alt: "bp_reg_map_show_proc_options"
          })
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[18] || (_cache[18] = createTextVNode(
          "Откроется модальное окно отображения параметров бизнес-процесса, которые можно редактировать прямо здесь или кликнуть по ссылке ",
          -1
          /* CACHED */
        )),
        _cache[19] || (_cache[19] = createBaseVNode(
          "strong",
          null,
          "перейти к процессу",
          -1
          /* CACHED */
        )),
        _cache[20] || (_cache[20] = createTextVNode(
          " и перейти в ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_reg.tree" }),
        _cache[21] || (_cache[21] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      _cache[25] || (_cache[25] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/map/bp_reg_map_forward_to_bp_tree.webp",
            alt: "bp_reg_map_forward_to_bp_tree"
          })
        ],
        -1
        /* CACHED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/faq/map/","title":"","lang":"ru-RU","frontmatter":{"bp_reg":{"map":"<i class=\\"pi pi-compass\\"></i> **Карта**","tree":"<i class=\\"pi pi-sitemap\\"></i> **Дерево / Каталог**"},"map":{"buttons":{"focus":"<i class=\\"pi pi-expand\\"></i> **Сфокусироваться на процессе**"}}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.83,"words":248},"filePathRelative":"main/faq/map/index.md","excerpt":"<h3>Карта</h3>\\n<details class=\\"hint-container details\\"><summary>Что такое </summary>\\n</details>\\n<details class=\\"hint-container details\\"><summary>Фокус на процессе</summary>\\n<p>По умолчанию </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/map/bp_reg_map_focus_btn.webp\\" alt=\\"bp_reg_map_focus_btn\\"></p>\\n<p>После нажатия на кнопку </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/map/bp_reg_map_focus_result.webp\\" alt=\\"bp_reg_map_focus_result\\"></p>\\n<p>Сфокусироваться можно на любом уровне вложенности процесса. Уровень вложенности будет отражаться сверху в мини панели навигации по процессу:</p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/map/bp_reg_map_focus_result_deep.webp\\" alt=\\"bp_reg_map_focus_result_deep\\"></p>\\n</details>"}');
export {
  index_html as comp,
  data
};
//# sourceMappingURL=index.html-3kVxnrQs.js.map
