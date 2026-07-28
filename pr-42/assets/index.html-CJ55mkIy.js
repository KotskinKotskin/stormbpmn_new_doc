import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-Dm_0y6A6.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
const _hoisted_2 = { class: "hint-container details" };
const _hoisted_3 = { class: "hint-container details" };
const _hoisted_4 = { class: "hint-container details" };
const _hoisted_5 = { class: "hint-container warning" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[57] || (_cache[57] = createBaseVNode(
      "h3",
      { id: "dict" },
      "Справочник",
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
        createVNode(_component_Fm, { p: "team.bp_reg.dict" })
      ]),
      _cache[1] || (_cache[1] = createBaseVNode(
        "p",
        null,
        "Справочник — это набор заранее определенных пользовательских значений. Справочники используются для организации логически схожей информации. Проще всего представить справочник в виде выпадающего списка, в котором можно выбрать одну или несколько записей для отображения.",
        -1
        /* CACHED */
      )),
      _cache[2] || (_cache[2] = createBaseVNode(
        "p",
        null,
        "Поля справочника могут быть заполнены любыми типами данных (строки, целые числа, числа с плавающей точкой, логические (булевы) значения и прочие), которые будут преобразованы в строковые данные.",
        -1
        /* CACHED */
      )),
      _cache[3] || (_cache[3] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Справочники "),
          createBaseVNode("strong", null, "не поддерживают"),
          createTextVNode(" выполнение математических или логических операций над значениями.")
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_2, [
      _cache[13] || (_cache[13] = createBaseVNode(
        "summary",
        null,
        "Создание справочника",
        -1
        /* CACHED */
      )),
      _cache[14] || (_cache[14] = createBaseVNode(
        "p",
        null,
        "Справочники могут использоваться как наборы пользовательских параметров процессов. Например, можно задать категорию процесса или его статус. Чтобы создать справочник:",
        -1
        /* CACHED */
      )),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[4] || (_cache[4] = createTextVNode(
              "Перейдите в раздел ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "team.icon" }),
            _cache[5] || (_cache[5] = createTextVNode()),
            createVNode(_component_Fm, { p: "universal.right_arrow" }),
            _cache[6] || (_cache[6] = createTextVNode()),
            createVNode(_component_Fm, { p: "team.bp_reg.dict" }),
            _cache[7] || (_cache[7] = createTextVNode(
              ".",
              -1
              /* CACHED */
            ))
          ])
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[8] || (_cache[8] = createTextVNode(
              "Нажмите кнопку ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "team.bp_reg.create_dict" }),
            _cache[9] || (_cache[9] = createTextVNode(
              ".",
              -1
              /* CACHED */
            ))
          ])
        ]),
        _cache[10] || (_cache[10] = createStaticVNode("<li><p>В открывшемся модальном окне <strong>Создание справочника</strong> заполните следующие поля:</p><ul><li><strong>Название справочника</strong> — ёмкое и понятное название. Учтите, что справочник будет представлен в виде выпадающего списка — название должно отражать суть его элементов.</li><li><strong>Примечание</strong> — описание справочника; может содержать пояснения к элементам, их свойства или отличия.</li><li><strong>Значения справочника</strong> — элементы справочника, которые будут доступны для выбора при работе со справочником. Количество элементов не ограничено, тип данных — любой.</li></ul></li><li><p>Нажмите кнопку <strong>Создать</strong>.</p></li>", 2))
      ]),
      createBaseVNode("p", null, [
        _cache[11] || (_cache[11] = createTextVNode(
          "Созданный справочник автоматически будет отражён в разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "team.bp_reg.dict" }),
        _cache[12] || (_cache[12] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      _cache[15] || (_cache[15] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/directories/dict_list.webp",
            alt: "dict_list"
          })
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_3, [
      _cache[47] || (_cache[47] = createBaseVNode(
        "summary",
        null,
        "Использование справочника как параметра процесса",
        -1
        /* CACHED */
      )),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[16] || (_cache[16] = createTextVNode(
              "Перейдите в раздел ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "team.icon" }),
            _cache[17] || (_cache[17] = createTextVNode()),
            createVNode(_component_Fm, { p: "universal.right_arrow" }),
            _cache[18] || (_cache[18] = createTextVNode()),
            createVNode(_component_Fm, { p: "team.bp_reg.bp_tree" }),
            _cache[19] || (_cache[19] = createTextVNode(
              ".",
              -1
              /* CACHED */
            ))
          ])
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[20] || (_cache[20] = createTextVNode(
              "Выберите бизнес-процесс, к которому хотите добавить справочник, перейдите во вкладку ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "bp_tree.options" }),
            _cache[21] || (_cache[21] = createTextVNode(
              " карточки бизнес-процесса и нажмите ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "universal.plus" }),
            _cache[22] || (_cache[22] = createTextVNode()),
            _cache[23] || (_cache[23] = createBaseVNode(
              "strong",
              null,
              "Добавить параметр",
              -1
              /* CACHED */
            )),
            _cache[24] || (_cache[24] = createTextVNode(
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
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/registry/add_option/add_option.webp",
                alt: "add_option"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[26] || (_cache[26] = createTextVNode(
              "В открывшемся модальном окне ",
              -1
              /* CACHED */
            )),
            _cache[27] || (_cache[27] = createBaseVNode(
              "strong",
              null,
              "Добавление параметра",
              -1
              /* CACHED */
            )),
            _cache[28] || (_cache[28] = createTextVNode(
              " нажмите ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "universal.plus" }),
            _cache[29] || (_cache[29] = createTextVNode(
              ".",
              -1
              /* CACHED */
            ))
          ])
        ]),
        _cache[40] || (_cache[40] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("На шаге "),
              createBaseVNode("strong", null, "Создание параметра"),
              createTextVNode(" выберите "),
              createBaseVNode("strong", null, "Тип параметра"),
              createTextVNode(": "),
              createBaseVNode("strong", null, "Одиночный выбор"),
              createTextVNode(" для представления справочника в виде выпадающего списка с возможностью выбора одной записи или "),
              createBaseVNode("strong", null, "Мульти-выбор"),
              createTextVNode(" для выбора нескольких значений справочника.")
            ])
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("li", null, [
          _cache[36] || (_cache[36] = createBaseVNode(
            "p",
            null,
            "После выбора типа параметра в форме появятся новые поля:",
            -1
            /* CACHED */
          )),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              _cache[30] || (_cache[30] = createBaseVNode(
                "strong",
                null,
                "Название",
                -1
                /* CACHED */
              )),
              _cache[31] || (_cache[31] = createTextVNode(
                " — укажите название параметра. Оно будет отображаться в ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "bp_tree.options" }),
              _cache[32] || (_cache[32] = createTextVNode(
                ".",
                -1
                /* CACHED */
              ))
            ]),
            _cache[33] || (_cache[33] = createBaseVNode(
              "li",
              null,
              [
                createBaseVNode("strong", null, "Подсказка для ввода"),
                createTextVNode(" — пояснение для выбора значений параметра.")
              ],
              -1
              /* CACHED */
            )),
            _cache[34] || (_cache[34] = createBaseVNode(
              "li",
              null,
              [
                createBaseVNode("strong", null, "Справочник"),
                createTextVNode(" — выбор справочника для привязки к параметру карточки процесса.")
              ],
              -1
              /* CACHED */
            )),
            _cache[35] || (_cache[35] = createBaseVNode(
              "li",
              null,
              [
                createBaseVNode("strong", null, "Примечание"),
                createTextVNode(" — дополнительное описание параметра.")
              ],
              -1
              /* CACHED */
            ))
          ])
        ]),
        _cache[41] || (_cache[41] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("Нажмите кнопку "),
              createBaseVNode("strong", null, "Сохранить"),
              createTextVNode(", затем "),
              createBaseVNode("strong", null, "Добавить"),
              createTextVNode(".")
            ])
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[37] || (_cache[37] = createTextVNode(
              "После добавления параметра к процессу он будет отражён в секции ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "bp_tree.options" }),
            _cache[38] || (_cache[38] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[39] || (_cache[39] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/registry/add_option/add_new_option_final.webp",
                alt: "add_new_option_final"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[42] || (_cache[42] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("Активируйте поле "),
              createBaseVNode("strong", null, "Значение не установлено"),
              createTextVNode(" и выберите нужное значение из выпадающего списка.")
            ])
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("p", null, [
        _cache[43] || (_cache[43] = createTextVNode(
          "После первой привязки справочника к процессу и назначения ему имени как параметру, справочник можно добавлять к другим процессам через кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.plus" }),
        _cache[44] || (_cache[44] = createTextVNode()),
        _cache[45] || (_cache[45] = createBaseVNode(
          "strong",
          null,
          "Добавить параметр",
          -1
          /* CACHED */
        )),
        _cache[46] || (_cache[46] = createTextVNode(
          ".",
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("details", _hoisted_4, [
      _cache[55] || (_cache[55] = createBaseVNode(
        "summary",
        null,
        "Удаление справочника",
        -1
        /* CACHED */
      )),
      createBaseVNode("div", _hoisted_5, [
        _cache[50] || (_cache[50] = createBaseVNode(
          "p",
          { class: "hint-container-title" },
          "Привязка к полям процесса",
          -1
          /* CACHED */
        )),
        createBaseVNode("p", null, [
          _cache[48] || (_cache[48] = createTextVNode(
            "Справочник, привязанный к полям процесса, невозможно удалить. Сначала нужно отвязать справочник в карточке процесса в секции ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.options" }),
          _cache[49] || (_cache[49] = createTextVNode(
            ".",
            -1
            /* CACHED */
          ))
        ])
      ]),
      createBaseVNode("p", null, [
        _cache[51] || (_cache[51] = createTextVNode(
          "Для удаления справочника нажмите на ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.delete" }),
        _cache[52] || (_cache[52] = createTextVNode(
          " справа от столбца ",
          -1
          /* CACHED */
        )),
        _cache[53] || (_cache[53] = createBaseVNode(
          "strong",
          null,
          "Обновлено",
          -1
          /* CACHED */
        )),
        _cache[54] || (_cache[54] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      _cache[56] || (_cache[56] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/directories/dict_delete.webp",
            alt: "dict_delete"
          })
        ],
        -1
        /* CACHED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/faq/dict/","title":"","lang":"ru-RU","frontmatter":{"bp_tree":{"options":"<i class=\\"pi pi-hashtag\\"></i> **Параметры**"},"team":{"bp_reg":{"bp_tree":"<i class=\\"pi pi-sitemap\\"></i> **Дерево / Каталог**","create_dict":"<i class=\\"pi pi-plus\\"></i> **Создать справочник**","dict":"<i class=\\"pi pi-book\\"></i> **Справочник**"},"icon":"<i class=\\"pi pi-users\\"></i> **Команда**"},"universal":{"delete":"<i class=\\"pi pi-trash\\"></i>","plus":"<i class=\\"pi pi-plus\\"></i>","right_arrow":"<i class=\\"fa-solid fa-arrow-right\\"></i>"}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.78,"words":533},"filePathRelative":"main/faq/dict/index.md","excerpt":"<h3>Справочник</h3>\\n<details class=\\"hint-container details\\"><summary>Что такое </summary>\\n<p>Справочник — это набор заранее определенных пользовательских значений. Справочники используются для организации логически схожей информации. Проще всего представить справочник в виде выпадающего списка, в котором можно выбрать одну или несколько записей для отображения.</p>\\n<p>Поля справочника могут быть заполнены любыми типами данных (строки, целые числа, числа с плавающей точкой, логические (булевы) значения и прочие), которые будут преобразованы в строковые данные.</p>\\n<p>Справочники <strong>не поддерживают</strong> выполнение математических или логических операций над значениями.</p>\\n</details>"}');
export {
  index_html as comp,
  data
};
