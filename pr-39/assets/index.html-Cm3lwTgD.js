import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-CfHw5MwK.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
const _hoisted_2 = { class: "hint-container details" };
const _hoisted_3 = { class: "hint-container details" };
const _hoisted_4 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[32] || (_cache[32] = createBaseVNode(
      "h4",
      { id: "status" },
      "Статусы бизнес-процессов",
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
        createVNode(_component_Fm, { p: "bp_reg.status" }),
        _cache[1] || (_cache[1] = createTextVNode(
          "?",
          -1
          /* CACHED */
        ))
      ]),
      createVNode(_component_Fm, { p: "bp_reg.status" }),
      _cache[2] || (_cache[2] = createTextVNode(
        " — это объекты и показатели управления жизненным циклом карточки процесса. Они отражают информацию о текущем состоянии процесса:",
        -1
        /* CACHED */
      )),
      _cache[3] || (_cache[3] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/registry/status_example/status_example.webp",
            alt: "status_example"
          })
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_2, [
      _cache[9] || (_cache[9] = createBaseVNode(
        "summary",
        null,
        "Создание статуса бизнес-процесса",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[4] || (_cache[4] = createTextVNode(
          "Статусы бизнес-процессов создаются в разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_reg.status" }),
        _cache[5] || (_cache[5] = createTextVNode(
          ". Для создания статуса бизнес-процесса достаточно кликнуть по кнопке ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.plus" }),
        _cache[6] || (_cache[6] = createTextVNode()),
        _cache[7] || (_cache[7] = createBaseVNode(
          "strong",
          null,
          "Создать статус",
          -1
          /* CACHED */
        )),
        _cache[8] || (_cache[8] = createTextVNode(
          ", задать название статуса и, по желанию, присвоить статусу цвет:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[10] || (_cache[10] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/status/status_create/status_create.webp",
            alt: "status_create"
          })
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_3, [
      _cache[19] || (_cache[19] = createBaseVNode(
        "summary",
        null,
        "Редактирование и удаление статуса бизнес-процесса",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[11] || (_cache[11] = createTextVNode(
          "Справа от названия статуса в разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_reg.status" }),
        _cache[12] || (_cache[12] = createTextVNode(
          " есть кнопки ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_tree.edit" }),
        _cache[13] || (_cache[13] = createTextVNode(
          " и ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.delete" }),
        _cache[14] || (_cache[14] = createTextVNode()),
        _cache[15] || (_cache[15] = createBaseVNode(
          "strong",
          null,
          "Удалить",
          -1
          /* CACHED */
        )),
        _cache[16] || (_cache[16] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      _cache[20] || (_cache[20] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/status/status_edit/status_edit_del.webp",
            alt: "status_edit_del"
          })
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[17] || (_cache[17] = createTextVNode(
          "С помощью ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_tree.edit" }),
        _cache[18] || (_cache[18] = createTextVNode(
          " можно изменить название статуса. Новое название автоматически применится ко всем карточкам бизнес-процессов, где используется данный статус.",
          -1
          /* CACHED */
        ))
      ]),
      _cache[21] || (_cache[21] = createBaseVNode(
        "p",
        null,
        "Обратите внимание, что удалить можно только неиспользуемый статус! Если статус бизнес-процесса используется — удалить его нельзя. Сначала его нужно заменить на другой статус, а уже потом удалить.",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_4, [
      _cache[31] || (_cache[31] = createBaseVNode(
        "summary",
        null,
        "Использование статуса бизнес-процесса",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[22] || (_cache[22] = createTextVNode(
          "По умолчанию всем бизнес-процессам присвоен статус ",
          -1
          /* CACHED */
        )),
        _cache[23] || (_cache[23] = createBaseVNode(
          "strong",
          null,
          "Черновик",
          -1
          /* CACHED */
        )),
        _cache[24] || (_cache[24] = createTextVNode(
          ". Назначить/изменить статус бизнес-процесса можно в разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_tree.tree" }),
        _cache[25] || (_cache[25] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[26] || (_cache[26] = createTextVNode(
              "Выберите нужный вам бизнес-процесс и нажмите кнопку ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "bp_tree.edit" }),
            _cache[27] || (_cache[27] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[28] || (_cache[28] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/status/status_edit/status_edit_step-01.webp",
                alt: "status_edit_step-01"
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
            createBaseVNode("p", null, [
              createTextVNode("В открывшемся модальном окне "),
              createBaseVNode("strong", null, "Редактирование бизнес-процесса"),
              createTextVNode(" кликните по выпадающему списку "),
              createBaseVNode("strong", null, "Статус"),
              createTextVNode(" и выберите нужный вам статус бизнес-процесса:")
            ]),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/status/status_edit/status_edit_step-02.webp",
                alt: "status_edit_step-02"
              })
            ])
          ],
          -1
          /* CACHED */
        )),
        _cache[30] || (_cache[30] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("Кликните по кнопке "),
              createBaseVNode("strong", null, "Сохранить процесс"),
              createTextVNode(" для завершения процесса редактирования карточки бизнес-процесса.")
            ])
          ],
          -1
          /* CACHED */
        ))
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/faq/status/","title":"","lang":"ru-RU","frontmatter":{"bp_reg":{"status":"<i class=\\"pi pi-sitemap\\"></i> **Статусы**"},"bp_tree":{"edit":"<i class=\\"pi pi-pencil\\"></i> **Редактировать**","tree":"<i class=\\"pi pi-sitemap\\"></i> **Дерево**"},"universal":{"delete":"<i class=\\"pi pi-trash\\"></i>","plus":"<i class=\\"pi pi-plus\\"></i>"}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.96,"words":289},"filePathRelative":"main/faq/status/index.md","excerpt":"<h4>Статусы бизнес-процессов</h4>\\n<details class=\\"hint-container details\\"><summary>Что такое </summary>\\n</details>\\n<details class=\\"hint-container details\\"><summary>Создание статуса бизнес-процесса</summary>\\n<p>Статусы бизнес-процессов создаются в разделе </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/status/status_create/status_create.webp\\" alt=\\"status_create\\"></p>\\n</details>"}');
export {
  index_html as comp,
  data
};
