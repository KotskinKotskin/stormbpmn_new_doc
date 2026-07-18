import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-DrERNb8l.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
const _hoisted_2 = { class: "hint-container details" };
const _hoisted_3 = { class: "hint-container details" };
const _hoisted_4 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[74] || (_cache[74] = createBaseVNode(
      "h3",
      { id: "roles" },
      " Роли ",
      -1
      /* CACHED */
    )),
    _cache[75] || (_cache[75] = createBaseVNode(
      "div",
      {
        class: "admonition-container",
        markdown: "1"
      },
      [
        createBaseVNode("div", { class: "hint-container warning" }, [
          createBaseVNode("p", { class: "hint-container-title" }, "Ограничения прав и подписки"),
          createBaseVNode("p", null, [
            createTextVNode("Создавать роли может только "),
            createBaseVNode("strong", null, "администратор команды"),
            createTextVNode(". Роли — это часть платной подписки "),
            createBaseVNode("strong", null, "TEAM"),
            createTextVNode(" или "),
            createBaseVNode("strong", null, "Enterprise"),
            createTextVNode(".")
          ])
        ]),
        createBaseVNode("div", { class: "hint-container warning" }, [
          createBaseVNode("p", { class: "hint-container-title" }, "Поведение Ролей"),
          createBaseVNode("p", null, "Роли — это объекты команды, а не пользователя. При выходе из команды или переходе в другую команду роли удаляются с диаграмм, и их оверлеи на диаграммах пропадают (восстановление невозможно).")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[76] || (_cache[76] = createBaseVNode(
      "details",
      { class: "hint-container details" },
      [
        createBaseVNode("summary", null, "Общие сведения о ролях"),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Роль"),
          createTextVNode(' — это исполнитель конкретной задачи, а не должность. Одна роль может подходить для нескольких должностей: например, "Инициатором закупки товаров" может быть офис-менеджер, бухгалтер или завхоз. Наоборот, одна должность (как директор) может выполнять несколько ролей — от административных до юридических или бухгалтерских.')
        ]),
        createBaseVNode("p", null, "Роли переиспользуемы и предпочтительнее дорожек для описания исполнителей.")
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("details", _hoisted_1, [
      _cache[20] || (_cache[20] = createBaseVNode(
        "summary",
        null,
        "Создание ролей",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[0] || (_cache[0] = createTextVNode(
          "Роль можно создать в разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "section_team.buttons.team_switcher" }),
        _cache[1] || (_cache[1] = createTextVNode()),
        createVNode(_component_Fm, { p: "universal.right_arrow" }),
        _cache[2] || (_cache[2] = createTextVNode()),
        createVNode(_component_Fm, { p: "section_team.layouts.roles" }),
        _cache[3] || (_cache[3] = createTextVNode(
          ", нажав на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "role.buttons.create_role" }),
        _cache[4] || (_cache[4] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      _cache[21] || (_cache[21] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/assignees/create_role.webp",
            alt: "create_role"
          })
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[5] || (_cache[5] = createTextVNode(
          "Также роль можно создать прямо в редакторе диаграмм при работе с активными элементами диаграммы, например: ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bpmn.end_event" }),
        _cache[6] || (_cache[6] = createTextVNode(
          " или ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bpmn.call_activity" }),
        _cache[7] || (_cache[7] = createTextVNode(
          ". Для этого выберите активный элемент, нажмите кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.archetecture" }),
        _cache[8] || (_cache[8] = createTextVNode(
          " в правом меню и нажмите кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.plus" }),
        _cache[9] || (_cache[9] = createTextVNode()),
        _cache[10] || (_cache[10] = createBaseVNode(
          "strong",
          null,
          "Создать и установить новую роль",
          -1
          /* CACHED */
        )),
        _cache[11] || (_cache[11] = createTextVNode(
          " справа от поля ",
          -1
          /* CACHED */
        )),
        _cache[12] || (_cache[12] = createBaseVNode(
          "strong",
          null,
          "Роль",
          -1
          /* CACHED */
        )),
        _cache[13] || (_cache[13] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      _cache[22] || (_cache[22] = createStaticVNode('<p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/diagram/roles/create_new_role_from_edit_process.webp" alt="create_new_role_from_edit_process"></p><p>Оба пути создания ролей приводят к одному и тому же модальному окну <strong>Создание роли</strong>, в котором можно задать:</p><ul><li><strong>Название роли</strong> (обязательное поле) — поддерживается кириллица, латиница, специальные символы (автоэкранируются).</li><li><strong>Тип роли</strong> (обязательное поле) — один из трёх типов роли: <em>Человек</em>, <em>Система</em>, <em>Не указано</em>.</li><li><strong>Стоимость в час</strong> (опциональное поле) — целочисленное значение (автоматическое разделение разрядов пробелом).</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/assignees/role_options.webp" alt="role_options"></p>', 4)),
      createBaseVNode("p", null, [
        _cache[14] || (_cache[14] = createTextVNode(
          "После создания роли она появится в разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "section_team.layouts.roles" }),
        _cache[15] || (_cache[15] = createTextVNode(
          ", где также отразятся: ",
          -1
          /* CACHED */
        )),
        _cache[16] || (_cache[16] = createBaseVNode(
          "strong",
          null,
          "Должности",
          -1
          /* CACHED */
        )),
        _cache[17] || (_cache[17] = createTextVNode(
          " и ",
          -1
          /* CACHED */
        )),
        _cache[18] || (_cache[18] = createBaseVNode(
          "strong",
          null,
          "Процессы",
          -1
          /* CACHED */
        )),
        _cache[19] || (_cache[19] = createTextVNode(
          ", в которых используется роль:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[23] || (_cache[23] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/assignees/roles_list.webp",
            alt: "roles_list"
          })
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_2, [
      _cache[42] || (_cache[42] = createBaseVNode(
        "summary",
        null,
        "Редактирование ролей",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[24] || (_cache[24] = createTextVNode(
          "Роли располагаются в разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "section_team.layouts.roles" }),
        _cache[25] || (_cache[25] = createTextVNode(
          ". Там же их можно редактировать, нажав на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "role.buttons.edit_role" }),
        _cache[26] || (_cache[26] = createTextVNode(
          ". После нажатия на кнопку откроется модальное окно ",
          -1
          /* CACHED */
        )),
        _cache[27] || (_cache[27] = createBaseVNode(
          "strong",
          null,
          "Создание роли",
          -1
          /* CACHED */
        )),
        _cache[28] || (_cache[28] = createTextVNode(
          ", в котором можно задать:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[43] || (_cache[43] = createStaticVNode('<ul><li><strong>Название роли</strong> (обязательное поле) — поддерживается кириллица, латиница, специальные символы (автоэкранируются).</li><li><strong>Тип роли</strong> (обязательное поле) — один из трёх вариантов типов роли: <em>Человек</em>, <em>Система</em>, <em>Не указано</em>.</li><li><strong>Стоимость в час</strong> (опциональное поле) — целочисленное значение (автоматическое разделение разрядов пробелом).</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/assignees/role_options.webp" alt="role_options"></p>', 2)),
      createBaseVNode("p", null, [
        _cache[29] || (_cache[29] = createBaseVNode(
          "strong",
          null,
          "Должность",
          -1
          /* CACHED */
        )),
        _cache[30] || (_cache[30] = createTextVNode(
          " присваивается ",
          -1
          /* CACHED */
        )),
        _cache[31] || (_cache[31] = createBaseVNode(
          "strong",
          null,
          "Роли",
          -1
          /* CACHED */
        )),
        _cache[32] || (_cache[32] = createTextVNode(
          " в разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "org_structure.name" }),
        _cache[33] || (_cache[33] = createTextVNode()),
        createVNode(_component_Fm, { p: "universal.right_arrow" }),
        _cache[34] || (_cache[34] = createTextVNode()),
        createVNode(_component_Fm, { p: "org_structure.scheme" }),
        _cache[35] || (_cache[35] = createTextVNode(
          ", а ",
          -1
          /* CACHED */
        )),
        _cache[36] || (_cache[36] = createBaseVNode(
          "strong",
          null,
          "Роль",
          -1
          /* CACHED */
        )),
        _cache[37] || (_cache[37] = createTextVNode(
          " задействуется в ",
          -1
          /* CACHED */
        )),
        _cache[38] || (_cache[38] = createBaseVNode(
          "strong",
          null,
          "Процессе",
          -1
          /* CACHED */
        )),
        _cache[39] || (_cache[39] = createTextVNode(
          " с помощью ",
          -1
          /* CACHED */
        )),
        _cache[40] || (_cache[40] = createBaseVNode(
          "strong",
          null,
          "Редактора диаграмм",
          -1
          /* CACHED */
        )),
        _cache[41] || (_cache[41] = createTextVNode(
          ".",
          -1
          /* CACHED */
        ))
      ]),
      _cache[44] || (_cache[44] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("См. "),
          createBaseVNode("strong", null, "FAQ по Stormbpmn: Создание ролей"),
          createTextVNode(".")
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_3, [
      _cache[53] || (_cache[53] = createBaseVNode(
        "summary",
        null,
        "Привязка ролей к задачам",
        -1
        /* CACHED */
      )),
      _cache[54] || (_cache[54] = createBaseVNode(
        "p",
        null,
        "Роли к задачам привязываются в редакторе диаграмм:",
        -1
        /* CACHED */
      )),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[45] || (_cache[45] = createTextVNode(
              "Перейдите в редактор диаграмм, выберите задачу, к которой хотите привязать роль, и в правом боковом меню выберите вкладку ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.archetecture" }),
            _cache[46] || (_cache[46] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[47] || (_cache[47] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/diagram/roles/role_add_task.webp",
                alt: "role_add_task"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[48] || (_cache[48] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("Кликните по выпадающему списку "),
              createBaseVNode("strong", null, "Роль"),
              createTextVNode(" и выберите роль, которую хотите привязать к задаче:")
            ]),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/diagram/roles/apply_role_to_task.webp",
                alt: "apply_role_to_task"
              })
            ])
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("p", null, [
        _cache[49] || (_cache[49] = createTextVNode(
          "Если нужной вам роли в списке ещё нет — создайте её, кликнув на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.plus" }),
        _cache[50] || (_cache[50] = createTextVNode()),
        _cache[51] || (_cache[51] = createBaseVNode(
          "strong",
          null,
          "Создать и установить новую роль",
          -1
          /* CACHED */
        )),
        _cache[52] || (_cache[52] = createTextVNode(
          ". См. FAQ: Роли/создание ролей.",
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("details", _hoisted_4, [
      _cache[71] || (_cache[71] = createBaseVNode(
        "summary",
        null,
        "Удаление роли с задач",
        -1
        /* CACHED */
      )),
      _cache[72] || (_cache[72] = createBaseVNode(
        "p",
        null,
        "Удалить роль с задач или отвязать задачи от роли можно двумя путями:",
        -1
        /* CACHED */
      )),
      createBaseVNode("ul", null, [
        _cache[57] || (_cache[57] = createBaseVNode(
          "li",
          null,
          "Отвязать роль от задачи через редактор диаграмм.",
          -1
          /* CACHED */
        )),
        createBaseVNode("li", null, [
          _cache[55] || (_cache[55] = createTextVNode(
            "Просмотреть список задач, назначенных на роль, в разделе ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "section_team.layouts.roles" }),
          _cache[56] || (_cache[56] = createTextVNode(
            ", перейти по ссылке и отвязать роль от задачи через редактор диаграмм.",
            -1
            /* CACHED */
          ))
        ])
      ]),
      _cache[73] || (_cache[73] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("strong", null, "Отвязка роли от задачи через редактор диаграмм"),
          createTextVNode(":")
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[58] || (_cache[58] = createTextVNode(
              "Перейдите в редактор диаграмм, выберите задачу, с которой хотите отвязать роль, и в правом боковом меню выберите вкладку ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.archetecture" }),
            _cache[59] || (_cache[59] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[60] || (_cache[60] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/diagram/roles/drop_down_task_from_role.webp",
                alt: "drop_down_task_from_role"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[61] || (_cache[61] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("Кликните на "),
              createBaseVNode("strong", null, "X"),
              createTextVNode(" справа от названия назначенной роли у задачи, чтобы отвязать роль:")
            ]),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/diagram/roles/delete_task_from_role.webp",
                alt: "delete_task_from_role"
              })
            ])
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("p", null, [
        createBaseVNode("strong", null, [
          _cache[62] || (_cache[62] = createTextVNode(
            "Отвязка роли от задачи через раздел ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "section_team.layouts.roles" })
        ]),
        _cache[63] || (_cache[63] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[64] || (_cache[64] = createTextVNode(
              "Перейдите в раздел ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "section_team.buttons.team_switcher" }),
            _cache[65] || (_cache[65] = createTextVNode()),
            createVNode(_component_Fm, { p: "universal.right_arrow" }),
            _cache[66] || (_cache[66] = createTextVNode()),
            createVNode(_component_Fm, { p: "section_team.layouts.roles" }),
            _cache[67] || (_cache[67] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[68] || (_cache[68] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/assignees/delete_task_from_role_section_roles.webp",
                alt: "delete_task_from_role_section_roles"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[69] || (_cache[69] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, "В разделе будет отражён список ролей с соответствующими им должностями и процессами, в которых эти роли задействованы:"),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/assignees/tasks_list_roles_review.webp",
                alt: "tasks_list_roles_review"
              })
            ])
          ],
          -1
          /* CACHED */
        )),
        _cache[70] || (_cache[70] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, "Кликните по названию процесса или задачи, чтобы перейти в процесс, где к выбранной роли привязаны задачи, и в редакторе диаграмм удалить привязку или назначение.")
          ],
          -1
          /* CACHED */
        ))
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/faq/roles/","title":"","lang":"ru-RU","frontmatter":{"bpmn":{"call_activity":"<span class=\\"bpmn-icon-call-activity\\"></span> **Call Activity**","end_event":"<span class=\\"bpmn-icon-end-event-none\\"></span> **Конечное событие**"},"org_structure":{"name":"<i class=\\"pi pi-building\\"></i> **Оргструктура**","scheme":"<i class=\\"pi pi-sitemap\\"></i> **Схема**"},"process_editor":{"right_toolbar":{"buttons":{"archetecture":"<i class=\\"pi pi-objects-column\\"></i> **Элементы архитектуры**"}}},"role":{"buttons":{"create_role":"<i class=\\"pi pi-plus\\"></i> **Создать роль**","edit_role":"<i class=\\"pi pi-pen-to-square\\"></i> **Редактировать**"}},"section_team":{"buttons":{"team_switcher":"<i class=\\"pi pi-users\\"></i> **Команда**"},"layouts":{"roles":"<i class=\\"pi pi-id-card\\"></i> **Роли**"}},"universal":{"plus":"<i class=\\"pi pi-plus\\"></i>","right_arrow":"<i class=\\"fa-solid fa-arrow-right\\"></i>"}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.59,"words":777},"filePathRelative":"main/faq/roles/index.md","excerpt":"<h3> Роли </h3>\\n<div class=\\"admonition-container\\" markdown=\\"1\\">\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">Ограничения прав и подписки</p>\\n<p>Создавать роли может только <strong>администратор команды</strong>. Роли — это часть платной подписки <strong>TEAM</strong> или <strong>Enterprise</strong>.</p>\\n</div>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">Поведение Ролей</p>\\n<p>Роли — это объекты команды, а не пользователя. При выходе из команды или переходе в другую команду роли удаляются с диаграмм, и их оверлеи на диаграммах пропадают (восстановление невозможно).</p>\\n</div>\\n</div>"}');
export {
  index_html as comp,
  data
};
//# sourceMappingURL=index.html-B0hBAnPB.js.map
