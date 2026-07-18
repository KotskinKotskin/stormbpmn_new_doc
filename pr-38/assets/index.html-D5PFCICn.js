import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-BkkDXh4l.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
const _hoisted_2 = { class: "hint-container details" };
const _hoisted_3 = { class: "hint-container warning" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[43] || (_cache[43] = createBaseVNode(
      "h1",
      {
        id: "управление-правами-групп-и-участников",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#управление-правами-групп-и-участников"
        }, [
          createBaseVNode("span", null, "Управление правами групп и участников")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "В ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " есть система управления правами групп. Каждый пользователь в команде относится хотя бы к одной группе. Группа — это механизм управления доступом к проектам и функциям системы. Администратор команды ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[2] || (_cache[2] = createTextVNode(
        " может управлять составом групп и их правами через меню ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "team.icon" }),
      _cache[3] || (_cache[3] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[4] || (_cache[4] = createTextVNode()),
      createVNode(_component_Fm, { p: "team.team_settings.icon" }),
      _cache[5] || (_cache[5] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[6] || (_cache[6] = createTextVNode()),
      createVNode(_component_Fm, { p: "team.team_settings.groups" }),
      _cache[7] || (_cache[7] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[44] || (_cache[44] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/access-group/access_groups_managment/groups.webp",
          alt: "groups"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[8] || (_cache[8] = createTextVNode(
        "По умолчанию раздел ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "team.team_settings.groups" }),
      _cache[9] || (_cache[9] = createTextVNode(
        " содержит три системные группы, которые нельзя удалить:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[45] || (_cache[45] = createBaseVNode(
      "details",
      { class: "hint-container details" },
      [
        createBaseVNode("summary", null, "Администраторы"),
        createBaseVNode("p", null, [
          createTextVNode("Группа "),
          createBaseVNode("strong", null, "Администраторы"),
          createTextVNode(" обладает максимально полными правами на все действия в системе.")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("details", _hoisted_1, [
      _cache[16] || (_cache[16] = createBaseVNode(
        "summary",
        null,
        "Чтение и редактирование",
        -1
        /* CACHED */
      )),
      _cache[17] || (_cache[17] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Группа "),
          createBaseVNode("strong", null, "Чтение и редактирование"),
          createTextVNode(" обладает широким набором прав на чтение и редактирование объектов командной работы. Для группы действуют следующие наборы ограничений:")
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("table", null, [
        _cache[15] || (_cache[15] = createBaseVNode(
          "thead",
          null,
          [
            createBaseVNode("tr", null, [
              createBaseVNode("th", null, "Объект привилегии"),
              createBaseVNode("th", null, "Создание"),
              createBaseVNode("th", null, "Чтение"),
              createBaseVNode("th", null, "Обновление"),
              createBaseVNode("th", null, "Удаление")
            ])
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("tbody", null, [
          createBaseVNode("tr", null, [
            _cache[10] || (_cache[10] = createBaseVNode(
              "td",
              null,
              "Элементы архитектуры",
              -1
              /* CACHED */
            )),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ])
          ]),
          createBaseVNode("tr", null, [
            _cache[11] || (_cache[11] = createBaseVNode(
              "td",
              null,
              "Роли",
              -1
              /* CACHED */
            )),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ])
          ]),
          createBaseVNode("tr", null, [
            _cache[12] || (_cache[12] = createBaseVNode(
              "td",
              null,
              "Пользовательские справочники",
              -1
              /* CACHED */
            )),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ])
          ]),
          createBaseVNode("tr", null, [
            _cache[13] || (_cache[13] = createBaseVNode(
              "td",
              null,
              "Структура реестра процессов",
              -1
              /* CACHED */
            )),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ])
          ]),
          createBaseVNode("tr", null, [
            _cache[14] || (_cache[14] = createBaseVNode(
              "td",
              null,
              "Опросы",
              -1
              /* CACHED */
            )),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.permitted" })
            ])
          ])
        ])
      ]),
      createVNode(_component_Fm, { p: "team.groups.permitted" }),
      _cache[18] || (_cache[18] = createTextVNode(
        " просматривать секцию ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "team.team_settings.icon" }),
      _cache[19] || (_cache[19] = createTextVNode(
        ".",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_2, [
      _cache[23] || (_cache[23] = createBaseVNode(
        "summary",
        null,
        "Только чтение",
        -1
        /* CACHED */
      )),
      _cache[24] || (_cache[24] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Группа "),
          createBaseVNode("strong", null, "Только чтение"),
          createTextVNode(" обладает правами на чтение объектов командного доступа, при этом членам группы запрещено создание, обновление и удаление почти всех объектов группового доступа кроме следующих:")
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("table", null, [
        _cache[22] || (_cache[22] = createBaseVNode(
          "thead",
          null,
          [
            createBaseVNode("tr", null, [
              createBaseVNode("th", null, "Объект привилегии"),
              createBaseVNode("th", null, "Создание"),
              createBaseVNode("th", null, "Чтение"),
              createBaseVNode("th", null, "Обновление"),
              createBaseVNode("th", null, "Удаление")
            ])
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("tbody", null, [
          createBaseVNode("tr", null, [
            _cache[20] || (_cache[20] = createBaseVNode(
              "td",
              null,
              "Связи элементов архитектуры с элементами диаграммы",
              -1
              /* CACHED */
            )),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ])
          ]),
          createBaseVNode("tr", null, [
            _cache[21] || (_cache[21] = createBaseVNode(
              "td",
              null,
              "Связи ролей с элементами диаграммы",
              -1
              /* CACHED */
            )),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ]),
            createBaseVNode("td", null, [
              createVNode(_component_Fm, { p: "team.groups.allow" })
            ])
          ])
        ])
      ]),
      createVNode(_component_Fm, { p: "team.groups.permitted" }),
      _cache[25] || (_cache[25] = createTextVNode(
        " просматривать секцию ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "team.team_settings.icon" }),
      _cache[26] || (_cache[26] = createTextVNode(
        ".",
        -1
        /* CACHED */
      ))
    ]),
    _cache[46] || (_cache[46] = createStaticVNode('<h2 id="изменение-привилегии-групп" tabindex="-1"><a class="header-anchor" href="#изменение-привилегии-групп"><span>Изменение привилегий групп</span></a></h2><p>Администратор команды может включать или выключать любую привилегию в любой группе, включая группу <strong>Администраторы</strong>. Для изменения привилегии достаточно просто кликнуть по нужной привилегии и её статус изменится на противоположный:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/access-group/access_groups_managment/toggle_permission.webp" alt=""></p><h2 id="гранулирование-прав-участников" tabindex="-1"><a class="header-anchor" href="#гранулирование-прав-участников"><span>Гранулирование прав участников</span></a></h2><p>Иногда может потребоваться более тонкое управление правами пользователей. Например, когда нужно запретить части пользователей работать с папками, но при этом оставить права на всё остальное. В таком случае можно создать отдельную группу, настроить набор прав и добавить пользователей в эту группу.</p><p>Такой процесс может выглядеть так:</p>', 6)),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[27] || (_cache[27] = createTextVNode(
            "Кликните по кнопке ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.plus" }),
          _cache[28] || (_cache[28] = createTextVNode()),
          _cache[29] || (_cache[29] = createBaseVNode(
            "strong",
            null,
            "Создать группу",
            -1
            /* CACHED */
          )),
          _cache[30] || (_cache[30] = createTextVNode(
            " в правом верхнем углу экрана раздела ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.team_settings.groups" }),
          _cache[31] || (_cache[31] = createTextVNode(
            ", введите название новой группы и сразу добавьте существующих пользователей, если надо:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[32] || (_cache[32] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/access-group/access_groups_managment/create_new_group.webp",
              alt: "create_new_group"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[38] || (_cache[38] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "По умолчанию новая группа создаётся с запретом на все действия. Включите только те привилегии, которые считаете нужными для группы:"),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/access-group/access_groups_managment/setup_group_permissions.webp",
              alt: "setup_group_permissions"
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[33] || (_cache[33] = createTextVNode(
            "(Опциональный шаг) Добавьте в новую группу участников, если приглашение на вступление в группу им было выслано после создания группы. Кликните по кнопке ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.plus" }),
          _cache[34] || (_cache[34] = createTextVNode()),
          _cache[35] || (_cache[35] = createBaseVNode(
            "strong",
            null,
            "Добавить участника",
            -1
            /* CACHED */
          )),
          _cache[36] || (_cache[36] = createTextVNode(
            " и выберите из выпадающего списка нужного вам участника:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[37] || (_cache[37] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/access-group/access_groups_managment/add_user_to_new_groupp.webp",
              alt: "add_user_to_new_groupp"
            })
          ],
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("div", _hoisted_3, [
      _cache[42] || (_cache[42] = createBaseVNode(
        "p",
        { class: "hint-container-title" },
        "Суммаризация прав",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[39] || (_cache[39] = createTextVNode(
          "Если на один и тот же объект привилегии выданы противоположные права в разных группах — больший вес имеет право ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "team.groups.allow" }),
        _cache[40] || (_cache[40] = createTextVNode(
          ". Например, если на создание папок в двух группах действует запрет, а в третьей создание разрешено — финальное право будет ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "team.groups.allow" }),
        _cache[41] || (_cache[41] = createTextVNode(
          ".",
          -1
          /* CACHED */
        ))
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/admins/team_permissions/","title":"Управление правами групп и участников","lang":"ru-RU","frontmatter":{"title":"Управление правами групп и участников","description":"Руководство по управлению группами пользователей, настройке прав доступа и распределению привилегий в команде","tags":["Cовместная работа над процессами - работа в команде"],"media.actions.access_groups_managment":"access_groups_managment","product_name":"Stormbpmn","team":{"groups":{"allow":"<span style=\\"background: #22c55e; border-radius: 6px; color: white; padding: 2px\\">Разрешено</span>","permitted":"<span style=\\"background: #ef4444; border-radius: 6px; color: white; padding: 2px\\">Запрещено</span>"},"icon":"<i class=\\"pi pi-users\\"></i> **Команда**","team_settings":{"groups":"<i class=\\"pi pi-shield\\"></i> **Группы и привилегии**","icon":"<i class=\\"pi pi-user-edit\\"></i> **Настройки команды**"}},"universal":{"plus":"<i class=\\"pi pi-plus\\"></i>","right_arrow":"<i class=\\"fa-solid fa-arrow-right\\"></i>"}},"headers":[{"level":2,"title":"Изменение привилегий групп","slug":"изменение-привилегии-групп","link":"#изменение-привилегии-групп","children":[]},{"level":2,"title":"Гранулирование прав участников","slug":"гранулирование-прав-участников","link":"#гранулирование-прав-участников","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.23,"words":668},"filePathRelative":"admins/team_permissions/index.md","excerpt":"\\n<p>В </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/access-group/access_groups_managment/groups.webp\\" alt=\\"groups\\"></p>\\n<p>По умолчанию раздел </p>\\n<details class=\\"hint-container details\\"><summary>Администраторы</summary>\\n<p>Группа <strong>Администраторы</strong> обладает максимально полными правами на все действия в системе.</p>\\n</details>"}');
export {
  index_html as comp,
  data
};
//# sourceMappingURL=index.html-D5PFCICn.js.map
