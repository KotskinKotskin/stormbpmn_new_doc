import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-63InvP7F.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
const _hoisted_2 = { class: "hint-container details" };
const _hoisted_3 = { class: "hint-container details" };
const _hoisted_4 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[43] || (_cache[43] = createBaseVNode(
      "h4",
      { id: "bp_table" },
      "Таблица бизнес-процессов",
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
        createVNode(_component_Fm, { p: "bp_reg.table" }),
        _cache[1] || (_cache[1] = createTextVNode(
          "?",
          -1
          /* CACHED */
        ))
      ]),
      createVNode(_component_Fm, { p: "bp_reg.table" }),
      _cache[2] || (_cache[2] = createTextVNode(
        " — это табличный вид ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bp_reg.bp_reg" }),
      _cache[3] || (_cache[3] = createTextVNode(
        ", аналогичный Excel-реестру, но с возможностью фильтрации, сортировки и поиска. Найти нужный бизнес-процесс среди небольшого количества процессов — несложно, но когда количество процессов сильно возрастает, поиск и работа с определенным бизнес-процессом может сильно затрудниться.",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bp_reg.table" }),
      _cache[4] || (_cache[4] = createTextVNode(
        " помогает быстро находить нужный процесс благодаря плоской, табличной структуре и фильтрам:",
        -1
        /* CACHED */
      )),
      _cache[5] || (_cache[5] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/registry/work_with_bp_table/bp_table_def.webp",
            alt: "bp_table_def"
          })
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_2, [
      createBaseVNode("summary", null, [
        _cache[6] || (_cache[6] = createTextVNode(
          "Колонки в ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_reg.table" })
      ]),
      createBaseVNode("p", null, [
        _cache[7] || (_cache[7] = createTextVNode(
          "Колонки в ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_reg.table" }),
        _cache[8] || (_cache[8] = createTextVNode(
          " — это дефолтные и пользовательские параметры и показатели бизнес-процесса. Колонки можно добавлять в таблицу и скрывать. Чтобы скрыть ненужную колонку — кликните на ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "table.hide_column" }),
        _cache[9] || (_cache[9] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      _cache[12] || (_cache[12] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/registry/work_with_bp_table/bp_table_hide_column.webp",
            alt: "bp_table_hide_column"
          })
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[10] || (_cache[10] = createTextVNode(
          "Для добавления колонки в таблицу — перейдите к последней колонке таблицы и нажмите на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.plus" }),
        _cache[11] || (_cache[11] = createTextVNode(
          " и выберите нужный вам параметр для добавления как колонки в таблицу:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[13] || (_cache[13] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/registry/work_with_bp_table/bp_table_add_column.webp",
            alt: "bp_table_add_column"
          })
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_3, [
      _cache[18] || (_cache[18] = createBaseVNode(
        "summary",
        null,
        "Фильтрация значений столбцов по полям",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[14] || (_cache[14] = createTextVNode(
          "Над таблицей есть строка поиска и ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "table.filter" }),
        _cache[15] || (_cache[15] = createTextVNode(
          ". ",
          -1
          /* CACHED */
        )),
        _cache[16] || (_cache[16] = createBaseVNode(
          "strong",
          null,
          "Фильтры",
          -1
          /* CACHED */
        )),
        _cache[17] || (_cache[17] = createTextVNode(
          " позволяют отображать только нужный контент по определенным условиям, которые задаются через наборы параметров фильтрации:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[19] || (_cache[19] = createStaticVNode('<ul><li><strong>Поле фильтрации</strong> — параметр бизнес-модели.</li><li><strong>Оператор сравнения</strong> — математическое и логическое сравнение.</li><li><strong>Значение</strong> — численное, логическое или текстовое представление значения.</li></ul><p>Чтобы добавить правило фильтрации — заполните <strong>Поле фильтрации</strong>, <strong>Оператор сравнения</strong>, <strong>Значение</strong> и фильтр сформируется автоматически. Например:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/registry/work_with_bp_table/bp_table_add_filter.webp" alt="bp_table_add_filter"></p><p>Правил фильтрации может быть несколько. Также поддерживаются групповые условия фильтрации.</p>', 4))
    ]),
    createBaseVNode("details", _hoisted_4, [
      _cache[40] || (_cache[40] = createBaseVNode(
        "summary",
        null,
        "Вкладки",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[20] || (_cache[20] = createBaseVNode(
          "strong",
          null,
          "Вкладка",
          -1
          /* CACHED */
        )),
        _cache[21] || (_cache[21] = createTextVNode(
          " — это фиксированное представление таблицы с набором фильтров. У вкладки есть параметры, которые можно увидеть, нажав на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.dropdown" }),
        _cache[22] || (_cache[22] = createTextVNode(
          " справа от названия вкладки. Параметры вкладок:",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "universal.toggle" }),
          _cache[23] || (_cache[23] = createTextVNode()),
          _cache[24] || (_cache[24] = createBaseVNode(
            "strong",
            null,
            "Сделать вкладку шаблоном для команды",
            -1
            /* CACHED */
          )),
          _cache[25] || (_cache[25] = createTextVNode(
            " — при создании вкладки её можно будет создавать из указанного шаблона.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "table.rename" }),
          _cache[26] || (_cache[26] = createTextVNode(
            " — изменить название вкладки.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "table.copy" }),
          _cache[27] || (_cache[27] = createTextVNode(
            " — скопировать вкладку как есть и создать из неё новую вкладку.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "table.download" }),
          _cache[28] || (_cache[28] = createTextVNode(
            " — скачать список процессов в формате ",
            -1
            /* CACHED */
          )),
          _cache[29] || (_cache[29] = createBaseVNode(
            "code",
            null,
            ".xlsx",
            -1
            /* CACHED */
          )),
          _cache[30] || (_cache[30] = createTextVNode(
            ".",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "universal.delete" }),
          _cache[31] || (_cache[31] = createTextVNode()),
          _cache[32] || (_cache[32] = createBaseVNode(
            "strong",
            null,
            "Удалить",
            -1
            /* CACHED */
          )),
          _cache[33] || (_cache[33] = createTextVNode(
            " — удалить вкладку.",
            -1
            /* CACHED */
          ))
        ])
      ]),
      _cache[41] || (_cache[41] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/registry/work_with_bp_table/bp_table_tab.webp",
            alt: "bp_table_tab"
          })
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[34] || (_cache[34] = createTextVNode(
          "Для создания новой вкладки нажмите на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.plus" }),
        _cache[35] || (_cache[35] = createTextVNode(
          " справа от существующей вкладки и задайте ",
          -1
          /* CACHED */
        )),
        _cache[36] || (_cache[36] = createBaseVNode(
          "strong",
          null,
          "Название вкладки",
          -1
          /* CACHED */
        )),
        _cache[37] || (_cache[37] = createTextVNode(
          ", а также выберите ",
          -1
          /* CACHED */
        )),
        _cache[38] || (_cache[38] = createBaseVNode(
          "strong",
          null,
          "Шаблоны команды",
          -1
          /* CACHED */
        )),
        _cache[39] || (_cache[39] = createTextVNode(
          ", если они есть:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[42] || (_cache[42] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/registry/work_with_bp_table/bp_table_tab_create.webp",
            alt: "bp_table_tab_create"
          })
        ],
        -1
        /* CACHED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/faq/bp_table/","title":"","lang":"ru-RU","frontmatter":{"bp_reg":{"bp_reg":"<i class=\\"pi pi-sitemap\\"></i> **Реестр бизнес-процессов**","table":"<i class=\\"pi pi-list\\"></i> **Таблица**"},"table":{"copy":"<i class=\\"pi pi-file-edit\\"></i> **Дублировать**","download":"<i class=\\"pi pi-file-export\\"></i> **Скачать список процессов**","filter":"<i class=\\"pi pi-filter\\"></i> **Фильтр**","hide_column":"<i class=\\"pi pi-eye-slash\\"></i> **Скрыть колонку**","rename":"<i class=\\"pi pi-file-edit\\"></i> **Переименовать**"},"universal":{"delete":"<i class=\\"pi pi-trash\\"></i>","dropdown":"<i class=\\"pi pi-angle-down\\"></i>","plus":"<i class=\\"pi pi-plus\\"></i>","toggle":"<i class=\\"fa-solid fa-toggle-on\\"></i>"}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.52,"words":456},"filePathRelative":"main/faq/bp_table/index.md","excerpt":"<h4>Таблица бизнес-процессов</h4>\\n<details class=\\"hint-container details\\"><summary>Что такое </summary>\\n</details>\\n<details class=\\"hint-container details\\"><summary>Колонки в </summary>\\n<p>Колонки в </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/registry/work_with_bp_table/bp_table_hide_column.webp\\" alt=\\"bp_table_hide_column\\"></p>\\n<p>Для добавления колонки в таблицу — перейдите к последней колонке таблицы и нажмите на кнопку </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/registry/work_with_bp_table/bp_table_add_column.webp\\" alt=\\"bp_table_add_column\\"></p>\\n</details>"}');
export {
  index_html as comp,
  data
};
