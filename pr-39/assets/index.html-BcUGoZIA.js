import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, b as createVNode, d as createTextVNode, f as createStaticVNode, o as openBlock } from "./app-B7PpRKNp.js";
const _sfc_main = {};
const _hoisted_1 = { id: "bp_tree" };
const _hoisted_2 = { class: "hint-container details" };
const _hoisted_3 = { class: "hint-container details" };
const _hoisted_4 = { class: "hint-container details" };
const _hoisted_5 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[37] || (_cache[37] = createBaseVNode(
      "h3",
      { id: "bp_reg" },
      "Реестр бизнес-процессов",
      -1
      /* CACHED */
    )),
    createBaseVNode("h4", _hoisted_1, [
      createVNode(_component_Fm, { p: "team.bp_reg.bp_tree" })
    ]),
    createBaseVNode("details", _hoisted_2, [
      createBaseVNode("summary", null, [
        _cache[0] || (_cache[0] = createTextVNode(
          "Что такое ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "team.bp_reg.bp_tree" }),
        _cache[1] || (_cache[1] = createTextVNode(
          "?",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("p", null, [
        _cache[2] || (_cache[2] = createTextVNode(
          "Раздел ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "team.bp_reg.bp_tree" }),
        _cache[3] || (_cache[3] = createTextVNode(
          " содержит инструменты для создания и управления карточками бизнес-процессов. В разделе доступны два вида представления процессов:",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "bp_tree.tree" }),
          _cache[4] || (_cache[4] = createTextVNode(
            " удобно использовать для создания сложных процессов с подпроцессами, а также для организации корневых процессов с переиспользуемыми подпроцессами.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "bp_tree.catalog" }),
          _cache[5] || (_cache[5] = createTextVNode(
            " предназначен для систематизации уже созданных бизнес-процессов по логическим или структурным признакам.",
            -1
            /* CACHED */
          ))
        ])
      ])
    ]),
    createBaseVNode("details", _hoisted_3, [
      createBaseVNode("summary", null, [
        createVNode(_component_Fm, { p: "bp_tree.tree" })
      ]),
      createBaseVNode("p", null, [
        _cache[6] || (_cache[6] = createTextVNode(
          "В разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_tree.tree" }),
        _cache[7] || (_cache[7] = createTextVNode(
          " для каждого процесса можно задать следующие свойства и параметры:",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "bp_tree.metrics" }),
          _cache[8] || (_cache[8] = createTextVNode(
            " — вкладка с показателями процесса. Здесь можно добавлять, искать, редактировать и удалять метрики, по которым оценивается эффективность процесса: длительность, стоимость, количество ошибок, конверсия, LTV, скорость потока, число сделок. Эти показатели помогают сравнивать состояние процесса в разные периоды и находить узкие места.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "bp_tree.options" }),
          _cache[9] || (_cache[9] = createTextVNode(
            " — вкладка с параметрами процесса. Здесь хранятся пользовательские атрибуты и контекст: уровень риска, приоритет, критичность, продукт, проект, плановая дата запуска. Параметры можно создавать, выбирать из ранее созданных и редактировать, чтобы адаптировать карточки процессов под специфику вашей компании.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "bp_tree.documents" }),
          _cache[10] || (_cache[10] = createTextVNode(
            " — вкладка с документами процесса. Здесь удобно хранить входные, внутренние и выходные документы, связанные с процессом: регламенты, инструкции, положения, методики, шаблоны, формы и подтверждающие файлы. Это помогает сохранить в одном месте схему и её документальный контекст.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "bp_tree.bpmn_models" }),
          _cache[11] || (_cache[11] = createTextVNode(
            " — вкладка со связанными BPMN-моделями. Одна карточка процесса может быть связана с несколькими диаграммами, например с текущей моделью, архивной версией или целевой TO-BE-схемой. Это позволяет вести процесс как единую сущность при изменении графического описания.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "bp_tree.reglament" }),
          _cache[12] || (_cache[12] = createTextVNode(
            " — вкладка для формирования регламента процесса. Она собирает сведения из карточки процесса и связанных моделей, чтобы выгрузить их в текстовый регламент в формате DOCX.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "bp_tree.log" }),
          _cache[13] || (_cache[13] = createTextVNode(
            " — вкладка с историей изменений карточки процесса. Помогает отследить, какие параметры, показатели или состояния процесса менялись с течением времени.",
            -1
            /* CACHED */
          ))
        ])
      ]),
      _cache[14] || (_cache[14] = createBaseVNode(
        "p",
        null,
        "Добавление параметров, показателей и документов к карточке процесса помогает превратить процесс в рабочий управленческий объект: понятный для исполнителей, прозрачный для владельца и удобный для анализа, улучшения и регламентации.",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_4, [
      createBaseVNode("summary", null, [
        createVNode(_component_Fm, { p: "bp_tree.catalog" })
      ]),
      createVNode(_component_Fm, { p: "bp_tree.catalog" }),
      _cache[15] || (_cache[15] = createStaticVNode(' — это удобная форма организации процессов по каталогам. При этом разные каталоги могут содержать одни и те же процессы. Например, можно создать каталог <strong>Работа с клиентом</strong> и поместить туда процессы:<ul><li>Подготовка договора</li><li>Согласование договора с клиентом</li><li>Подписание договора</li></ul><p>Также можно создать каталог <strong>Процессы на улучшение</strong> и поместить туда, например, процесс <strong>Подготовка договора</strong> для пересмотра и улучшения:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/registry/work_with_xlsx/bp_tree_catalog.webp" alt="bp_tree_catalog"></p><p>Структура папок может быть плоской — все папки на одном уровне, нет вложенных папок, или иерархической — есть вложенные папки. При этом один и тот же процесс может встречаться несколько раз в одной структуре.</p>', 7))
    ]),
    createBaseVNode("details", _hoisted_5, [
      _cache[35] || (_cache[35] = createBaseVNode(
        "summary",
        null,
        "Загрузка реестра процессов из Excel",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[16] || (_cache[16] = createTextVNode(
          "В разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "team.bp_reg.bp_tree" }),
        _cache[17] || (_cache[17] = createTextVNode(
          " есть функции ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_tree.upload_xlsx" }),
        _cache[18] || (_cache[18] = createTextVNode(
          " и ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_tree.download_xlsx" }),
        _cache[19] || (_cache[19] = createTextVNode(
          ". Для удобного ",
          -1
          /* CACHED */
        )),
        _cache[20] || (_cache[20] = createBaseVNode(
          "strong",
          null,
          "импорта реестра",
          -1
          /* CACHED */
        )),
        _cache[21] || (_cache[21] = createTextVNode(
          " процессов выполните следующие шаги:",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[22] || (_cache[22] = createTextVNode(
              "Скачайте образец файла с помощью ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "bp_tree.download_xlsx" }),
            _cache[23] || (_cache[23] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[24] || (_cache[24] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/registry/work_with_xlsx/xlsx_download_example.webp",
                alt: "xlsx_download_example"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[28] || (_cache[28] = createStaticVNode("<li><p>Откройте xlsx-файл, перейдите на вкладку <strong>Процессы</strong> и заполните таблицу исходя из следующей логики:</p><ul><li><p>Корневой процесс — самый верхний уровень без вложенности (1-й уровень). Он записывается в столбец <strong>Процесс</strong> и не имеет <strong>Родителя</strong>, например:</p><table><thead><tr><th>Процесс</th><th>Родитель</th></tr></thead><tbody><tr><td>Найм нового сотрудника</td><td></td></tr></tbody></table></li><li><p>Вложенный процесс/подпроцесс (2-й уровень) записывается в столбец <strong>Процесс</strong>, а в столбце <strong>Родитель</strong> указывается родительский процесс, например:</p><table><thead><tr><th>Процесс</th><th>Родитель</th></tr></thead><tbody><tr><td>HR-скрининг</td><td>Найм нового сотрудника</td></tr></tbody></table></li><li><p>Вложенный процесс/подпроцесс (3-й уровень) записывается в столбец <strong>Процесс</strong>, а в столбце <strong>Родитель</strong> указывается процесс 2-го уровня, например:</p><table><thead><tr><th>Процесс</th><th>Родитель</th></tr></thead><tbody><tr><td>Поиск кандидата</td><td>HR-скрининг</td></tr></tbody></table></li><li><p>Полная запись для таблицы процессов с тремя уровнями вложенности будет выглядеть так:</p><table><thead><tr><th>Процесс</th><th>Родитель</th></tr></thead><tbody><tr><td>Найм нового сотрудника</td><td></td></tr><tr><td>HR-скрининг</td><td>Найм нового сотрудника</td></tr><tr><td>Поиск кандидата</td><td>HR-скрининг</td></tr></tbody></table></li></ul></li><li><p>Данные в остальные вкладки можно не вносить.</p></li>", 2)),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[25] || (_cache[25] = createTextVNode(
              "Сохраните изменения в файле и импортируйте xlsx-файл с помощью инструмента ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "bp_tree.upload_xlsx" }),
            _cache[26] || (_cache[26] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[27] || (_cache[27] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/registry/work_with_xlsx/xlsx_import_file.webp",
                alt: "xlsx_import_file"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[29] || (_cache[29] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, "Выберите файл для импорта.")
          ],
          -1
          /* CACHED */
        )),
        _cache[30] || (_cache[30] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, "Ознакомьтесь с отчётом механизма импорта процессов:"),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/registry/work_with_xlsx/xlsx_import_attention.webp",
                alt: "xlsx_import_attention"
              })
            ])
          ],
          -1
          /* CACHED */
        )),
        _cache[31] || (_cache[31] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("Подтвердите импорт процессов из файла, нажав кнопку "),
              createBaseVNode("strong", null, "Начать импорт"),
              createTextVNode(".")
            ])
          ],
          -1
          /* CACHED */
        )),
        _cache[32] || (_cache[32] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, "Ознакомьтесь с отчётом об импорте процессов:"),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/registry/work_with_xlsx/xlsx_import_success.webp",
                alt: "xlsx_import_success"
              })
            ])
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("p", null, [
        _cache[33] || (_cache[33] = createTextVNode(
          "После импорта в разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "team.bp_reg.bp_tree" }),
        _cache[34] || (_cache[34] = createTextVNode(
          " появятся импортированные процессы:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[36] || (_cache[36] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/registry/work_with_xlsx/xlsx_import_result.webp",
            alt: "xlsx_import_result"
          })
        ],
        -1
        /* CACHED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/faq/bp_tree/","title":"","lang":"ru-RU","frontmatter":{"bp_tree":{"bpmn_models":"<i class=\\"pi pi-sun\\"></i> **Модели BPMN**","catalog":"<i class=\\"pi pi-folder\\"></i> **Каталог**","documents":"<i class=\\"pi pi-file\\"></i> **Документы**","download_xlsx":"<i class=\\"pi pi-download relative\\"></i> **Экспорт реестра**","log":"<i class=\\"pi pi-history\\"></i> **Изменения**","metrics":"<i class=\\"pi pi-chart-line\\"></i> **Показатели**","options":"<i class=\\"pi pi-hashtag\\"></i> **Параметры**","reglament":"<i class=\\"pi pi-book\\"></i> **Регламент**","tree":"<i class=\\"pi pi-sitemap\\"></i> **Дерево**","upload_xlsx":"<i class=\\"pi pi-upload relative\\"></i> **Импорт реестра**"},"team":{"bp_reg":{"bp_tree":"<i class=\\"pi pi-sitemap\\"></i> **Дерево / Каталог**"}}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.61,"words":782},"filePathRelative":"main/faq/bp_tree/index.md","excerpt":"<h3>Реестр бизнес-процессов</h3>\\n<h4></h4>\\n<details class=\\"hint-container details\\"><summary>Что такое </summary>\\n<p>Раздел </p>\\n<ul>\\n<li>\\n</li>\\n<li>\\n</li>\\n</ul>\\n</details>\\n<details class=\\"hint-container details\\"><summary></summary>\\n<p>В разделе </p>\\n<ul>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n</ul>\\n<p>Добавление параметров, показателей и документов к карточке процесса помогает превратить процесс в рабочий управленческий объект: понятный для исполнителей, прозрачный для владельца и удобный для анализа, улучшения и регламентации.</p>\\n</details>"}');
export {
  index_html as comp,
  data
};
