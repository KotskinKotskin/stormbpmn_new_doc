import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, b as createVNode, d as createTextVNode, f as createStaticVNode, o as openBlock } from "./app-D7sJO8zT.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[32] || (_cache[32] = createBaseVNode(
      "h1",
      {
        id: "работа-с-таблицеи-бизнес-процессов",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#работа-с-таблицеи-бизнес-процессов"
        }, [
          createBaseVNode("span", null, "Работа с таблицей бизнес-процессов")
        ])
      ],
      -1
      /* CACHED */
    )),
    createVNode(_component_Fm, { p: "bp_reg.table" }),
    _cache[33] || (_cache[33] = createTextVNode(
      " — это табличный вид ",
      -1
      /* CACHED */
    )),
    createVNode(_component_Fm, { p: "bp_reg.bp_reg" }),
    _cache[34] || (_cache[34] = createTextVNode(
      " с возможностью фильтрации, сортировки и поиска. ",
      -1
      /* CACHED */
    )),
    createVNode(_component_Fm, { p: "bp_reg.table" }),
    _cache[35] || (_cache[35] = createTextVNode(
      " помогает быстро находить нужный процесс благодаря плоской, табличной структуре и фильтрам:",
      -1
      /* CACHED */
    )),
    _cache[36] || (_cache[36] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/registry/work_with_bp_table/bp_table_def.webp",
          alt: "bp_table_def"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "Колонки в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bp_reg.table" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " — это дефолтные и пользовательские параметры и показатели бизнес-процесса. Колонки можно добавлять в таблицу и скрывать. Чтобы скрыть ненужную колонку — кликните на ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "table.hide_column" }),
      _cache[2] || (_cache[2] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[37] || (_cache[37] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/registry/work_with_bp_table/bp_table_hide_column.webp",
          alt: "bp_table_hide_column"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode(
        "Для добавления колонки в таблицу — перейдите к последней колонке таблицы и нажмите на кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "universal.plus" }),
      _cache[4] || (_cache[4] = createTextVNode(
        " и выберите нужный вам параметр для добавления как колонки в таблицу:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[38] || (_cache[38] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/registry/work_with_bp_table/bp_table_add_column.webp",
          alt: "bp_table_add_column"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[5] || (_cache[5] = createTextVNode(
        "Менять таблицу можно не только путём добавления или удаления колонок, а ещё с помощью фильтров. ",
        -1
        /* CACHED */
      )),
      _cache[6] || (_cache[6] = createBaseVNode(
        "strong",
        null,
        "Фильтры",
        -1
        /* CACHED */
      )),
      _cache[7] || (_cache[7] = createTextVNode(
        " (кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "table.filter" }),
      _cache[8] || (_cache[8] = createTextVNode(
        " справа от строки поиска) позволяют отображать только нужный контент по определенным условиям, которые задаются через наборы параметров фильтрации:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[39] || (_cache[39] = createStaticVNode('<ul><li><strong>Поле фильтрации</strong> — параметр бизнес-модели.</li><li><strong>Оператор сравнения</strong> — математическое и логическое сравнение.</li><li><strong>Значение</strong> — численное, логическое или текстовое представление значения.</li></ul><p>Чтобы добавить правило фильтрации — заполните <strong>Поле фильтрации</strong>, <strong>Оператор сравнения</strong>, <strong>Значение</strong> и фильтр сформируется автоматически. Например:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/registry/work_with_bp_table/bp_table_add_filter.webp" alt="bp_table_add_filter"></p><p>Правил фильтрации может быть несколько. Также поддерживаются групповые условия фильтрации. Однако бывают ситуации, когда нужно анализировать несколько экземпляров таблиц с одинаковыми наборами данных, но с разными фильтрами.</p>', 4)),
    createBaseVNode("p", null, [
      _cache[9] || (_cache[9] = createTextVNode(
        "Тут на помощь приходят вкладки. ",
        -1
        /* CACHED */
      )),
      _cache[10] || (_cache[10] = createBaseVNode(
        "strong",
        null,
        "Вкладка",
        -1
        /* CACHED */
      )),
      _cache[11] || (_cache[11] = createTextVNode(
        " — это фиксированное представление таблицы с набором фильтров. У вкладки есть параметры, которые можно увидеть, нажав на кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "universal.dropdown" }),
      _cache[12] || (_cache[12] = createTextVNode(
        " справа от названия вкладки. Параметры вкладок:",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "universal.toggle" }),
        _cache[13] || (_cache[13] = createTextVNode()),
        _cache[14] || (_cache[14] = createBaseVNode(
          "strong",
          null,
          "Сделать вкладку шаблоном для команды",
          -1
          /* CACHED */
        )),
        _cache[15] || (_cache[15] = createTextVNode(
          " — при создании вкладки её можно будет создавать из указанного шаблона.",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "table.rename" }),
        _cache[16] || (_cache[16] = createTextVNode(
          " — изменить название вкладки.",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "table.copy" }),
        _cache[17] || (_cache[17] = createTextVNode(
          " — скопировать вкладку как есть и создать из неё новую вкладку.",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "table.download" }),
        _cache[18] || (_cache[18] = createTextVNode(
          " — скачать список процессов в формате ",
          -1
          /* CACHED */
        )),
        _cache[19] || (_cache[19] = createBaseVNode(
          "code",
          null,
          ".xlsx",
          -1
          /* CACHED */
        )),
        _cache[20] || (_cache[20] = createTextVNode(
          ".",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "universal.delete" }),
        _cache[21] || (_cache[21] = createTextVNode()),
        _cache[22] || (_cache[22] = createBaseVNode(
          "strong",
          null,
          "Удалить",
          -1
          /* CACHED */
        )),
        _cache[23] || (_cache[23] = createTextVNode(
          " — удалить вкладку.",
          -1
          /* CACHED */
        ))
      ])
    ]),
    _cache[40] || (_cache[40] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/registry/work_with_bp_table/bp_table_tab.webp",
          alt: "bp_table_tab"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[24] || (_cache[24] = createTextVNode(
        "Для создания новой вкладки нажмите на кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "universal.plus" }),
      _cache[25] || (_cache[25] = createTextVNode(
        " справа от существующей вкладки и задайте ",
        -1
        /* CACHED */
      )),
      _cache[26] || (_cache[26] = createBaseVNode(
        "strong",
        null,
        "Название вкладки",
        -1
        /* CACHED */
      )),
      _cache[27] || (_cache[27] = createTextVNode(
        ", а также выберите ",
        -1
        /* CACHED */
      )),
      _cache[28] || (_cache[28] = createBaseVNode(
        "strong",
        null,
        "Шаблоны команды",
        -1
        /* CACHED */
      )),
      _cache[29] || (_cache[29] = createTextVNode(
        ", если они есть:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[41] || (_cache[41] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/registry/work_with_bp_table/bp_table_tab_create.webp",
          alt: "bp_table_tab_create"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[30] || (_cache[30] = createTextVNode(
        "С уверенностью можно сказать, что ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bp_reg.table" }),
      _cache[31] || (_cache[31] = createTextVNode(
        " предоставляет широкий и мощный набор аналитических инструментов для анализа бизнес-процессов в табличном представлении.",
        -1
        /* CACHED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/analytics/bp_table/","title":"Работа с таблицей бизнес-процессов","lang":"ru-RU","frontmatter":{"title":"Работа с таблицей бизнес-процессов","bp_reg":{"bp_reg":"<i class=\\"pi pi-sitemap\\"></i> **Реестр бизнес-процессов**","table":"<i class=\\"pi pi-list\\"></i> **Таблица**"},"table":{"copy":"<i class=\\"pi pi-file-edit\\"></i> **Дублировать**","download":"<i class=\\"pi pi-file-export\\"></i> **Скачать список процессов**","filter":"<i class=\\"pi pi-filter\\"></i> **Фильтр**","hide_column":"<i class=\\"pi pi-eye-slash\\"></i> **Скрыть колонку**","rename":"<i class=\\"pi pi-file-edit\\"></i> **Переименовать**"},"universal":{"delete":"<i class=\\"pi pi-trash\\"></i>","dropdown":"<i class=\\"pi pi-angle-down\\"></i>","plus":"<i class=\\"pi pi-plus\\"></i>","toggle":"<i class=\\"fa-solid fa-toggle-on\\"></i>"}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.56,"words":467},"filePathRelative":"analytics/bp_table/index.md","excerpt":"\\n"}');
export {
  index_html as comp,
  data
};
