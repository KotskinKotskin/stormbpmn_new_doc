import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, e as withCtx, o as openBlock } from "./app-CDfj8N5A.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://www.youtube.com/watch?v=LN8LTrSjckQ&t=3586",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://youtu.be/o1Gx5N17xWQ",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[89] || (_cache[89] = createBaseVNode(
      "h1",
      {
        id: "работа-с-оргструктурои",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#работа-с-оргструктурои"
        }, [
          createBaseVNode("span", null, "Работа с оргструктурой")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "Оргструктура в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " — это не кадровая, а управленческая структура, которая призвана визуально отразить управленческую структуру и связать воедино роли, задачи и процессы.",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode(
        "Методологически ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "org.icon" }),
      _cache[3] || (_cache[3] = createTextVNode(
        " в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[4] || (_cache[4] = createTextVNode(
        " оперирует тремя сущностями:",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "org.boss" }),
        _cache[5] || (_cache[5] = createTextVNode(
          " — это руководитель любого уровня, в подчинении у которого есть организационная структура и люди.",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "org.position" }),
        _cache[6] || (_cache[6] = createTextVNode(
          " — это любая должность в подчинении, у которой нет организационной структуры (но в подчинении могут быть другие должности/люди).",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "org.group" }),
        _cache[7] || (_cache[7] = createTextVNode(
          " — это любая организационная структура, в которой работают люди. Например, это может быть отдел, подразделение, целая компания, холдинг, совет директоров и так далее.",
          -1
          /* CACHED */
        ))
      ])
    ]),
    createVNode(_component_Fm, { p: "org.icon" }),
    _cache[90] || (_cache[90] = createTextVNode(
      " — это просто иерархическое представление управленческой структуры и связей между ролями, задачами и процессами. Такая связь может однозначно ответить, что именно делает конкретная должность или даже сотрудник в бизнес-процессах:",
      -1
      /* CACHED */
    )),
    _cache[91] || (_cache[91] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/extra/bound.webp",
          alt: ""
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[8] || (_cache[8] = createTextVNode(
        "Несмотря на то, что ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "org.icon" }),
      _cache[9] || (_cache[9] = createTextVNode(
        " — это не жесткая структура, она всё равно строится, основываясь на следующих ограничениях и правилах:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[92] || (_cache[92] = createStaticVNode('<ul><li>У <strong>задачи</strong> может быть только 1 <strong>роль</strong>.</li><li><strong>Должность</strong> может выполнять сколько угодно <strong>ролей</strong>.</li><li><strong>Роль</strong> может выполняться каким угодно количеством <strong>должностей</strong>.</li><li><strong>Сотрудник</strong> может быть назначен на любое количество <strong>должностей</strong>.</li><li><strong>Сотрудник</strong> не может быть назначен на <strong>задачу</strong> напрямую.</li></ul><h2 id="создание-оргструктуры" tabindex="-1"><a class="header-anchor" href="#создание-оргструктуры"><span>Создание оргструктуры</span></a></h2>', 2)),
    createBaseVNode("p", null, [
      _cache[10] || (_cache[10] = createTextVNode(
        "Оргструктура создаётся в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "team.icon" }),
      _cache[11] || (_cache[11] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[12] || (_cache[12] = createTextVNode()),
      createVNode(_component_Fm, { p: "org.icon" }),
      _cache[13] || (_cache[13] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[14] || (_cache[14] = createTextVNode()),
      createVNode(_component_Fm, { p: "org.scheme" }),
      _cache[15] || (_cache[15] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[93] || (_cache[93] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/navigate_to_org_str/org_structure.webp",
          alt: ""
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[16] || (_cache[16] = createTextVNode(
        "Методологически раздел ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "org.scheme" }),
      _cache[17] || (_cache[17] = createTextVNode(
        " не может быть пустым. По умолчанию при первом заходе в него в нём будет находиться минимальная оргструктура: ",
        -1
        /* CACHED */
      )),
      _cache[18] || (_cache[18] = createBaseVNode(
        "strong",
        null,
        "Руководитель",
        -1
        /* CACHED */
      )),
      _cache[19] || (_cache[19] = createTextVNode(
        " + ",
        -1
        /* CACHED */
      )),
      _cache[20] || (_cache[20] = createBaseVNode(
        "strong",
        null,
        "Группа",
        -1
        /* CACHED */
      )),
      _cache[21] || (_cache[21] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[94] || (_cache[94] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/scheme/org_scheme_def.webp",
          alt: ""
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[95] || (_cache[95] = createBaseVNode(
      "p",
      null,
      "Изменяя дефолтную оргструктуру можно получить собственную оргструктуру, отвечающую вашим требованиям и представлениям. Вот как это можно сделать:",
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      _cache[35] || (_cache[35] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Переименуйте главного "),
            createBaseVNode("strong", null, "Руководителя"),
            createTextVNode(" по своему усмотрению, дважды кликнув на его должность.")
          ])
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[22] || (_cache[22] = createTextVNode(
            "Переименуйте существующую ",
            -1
            /* CACHED */
          )),
          _cache[23] || (_cache[23] = createBaseVNode(
            "strong",
            null,
            "Группу",
            -1
            /* CACHED */
          )),
          _cache[24] || (_cache[24] = createTextVNode(
            " или добавьте ещё одну ",
            -1
            /* CACHED */
          )),
          _cache[25] || (_cache[25] = createBaseVNode(
            "strong",
            null,
            "Группу",
            -1
            /* CACHED */
          )),
          _cache[26] || (_cache[26] = createTextVNode(
            ". Для этого кликните по карточке ",
            -1
            /* CACHED */
          )),
          _cache[27] || (_cache[27] = createBaseVNode(
            "strong",
            null,
            "Руководителя",
            -1
            /* CACHED */
          )),
          _cache[28] || (_cache[28] = createTextVNode(
            ", которому в подчинение хотите добавить ",
            -1
            /* CACHED */
          )),
          _cache[29] || (_cache[29] = createBaseVNode(
            "strong",
            null,
            "Группу",
            -1
            /* CACHED */
          )),
          _cache[30] || (_cache[30] = createTextVNode(
            ", и в появившемся меню действий наведите на ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.plus" }),
          _cache[31] || (_cache[31] = createTextVNode(
            " и выберите ",
            -1
            /* CACHED */
          )),
          _cache[32] || (_cache[32] = createBaseVNode(
            "strong",
            null,
            "Добавить группу в подчинение",
            -1
            /* CACHED */
          )),
          _cache[33] || (_cache[33] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[34] || (_cache[34] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/add_group/org_structure_add_group.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        ))
      ])
    ]),
    _cache[96] || (_cache[96] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("После переименования должности и добавления двух "),
        createBaseVNode("strong", null, "Групп"),
        createTextVNode(" наша диаграмма выглядит так:")
      ],
      -1
      /* CACHED */
    )),
    _cache[97] || (_cache[97] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/create/org_structure_create_step_01.webp",
          alt: ""
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[36] || (_cache[36] = createTextVNode(
        "Теперь добавьте ",
        -1
        /* CACHED */
      )),
      _cache[37] || (_cache[37] = createBaseVNode(
        "strong",
        null,
        "Руководителей",
        -1
        /* CACHED */
      )),
      _cache[38] || (_cache[38] = createTextVNode(
        " отделам. Для этого кликните по карточке с отделом и в появившемся меню действий наведите на ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "universal.plus" }),
      _cache[39] || (_cache[39] = createTextVNode(
        " и выберите ",
        -1
        /* CACHED */
      )),
      _cache[40] || (_cache[40] = createBaseVNode(
        "strong",
        null,
        "Добавить руководителя и группу в подчинение",
        -1
        /* CACHED */
      )),
      _cache[41] || (_cache[41] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[98] || (_cache[98] = createStaticVNode('<p><img src="https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/create/org_structure_create_step_02.webp" alt=""></p><p>После добавления <strong>Руководителей</strong> и новых групп им в подчинение, добавьте <strong>Должностей</strong> в подчинение. Это делается аналогичным образом с добавлением <strong>Руководителей</strong> и <strong>Групп</strong> через меню по клику по карточке.</p><p>В итоге, наша диаграмма теперь выглядит так:</p><p><img src="https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/create/org_structure_create_step_03.webp" alt=""></p><p>Но сейчас в диаграмме есть только организационная составляющая: названия должностей и структурных единиц без конкретных исполнителей и бизнес-процессов. Исправим это и привяжем конкретных людей к должностям.</p><h2 id="создание-карточек-сотрудников" tabindex="-1"><a class="header-anchor" href="#создание-карточек-сотрудников"><span>Создание карточек сотрудников</span></a></h2><p>Чтобы привязать конкретного человека к должности и процессу нужно создать карточку сотрудника. Для этого нужно выполнить следующие шаги:</p>', 7)),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[42] || (_cache[42] = createTextVNode(
            "Перейдите в ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.icon" }),
          _cache[43] || (_cache[43] = createTextVNode()),
          createVNode(_component_Fm, { p: "universal.right_arrow" }),
          _cache[44] || (_cache[44] = createTextVNode()),
          createVNode(_component_Fm, { p: "org.icon" }),
          _cache[45] || (_cache[45] = createTextVNode()),
          createVNode(_component_Fm, { p: "universal.right_arrow" }),
          _cache[46] || (_cache[46] = createTextVNode()),
          createVNode(_component_Fm, { p: "org.staff" }),
          _cache[47] || (_cache[47] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[48] || (_cache[48] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/employees/add_staff/create_staff_acc_step_01.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[49] || (_cache[49] = createTextVNode(
            "Кликните по кнопке ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.plus" }),
          _cache[50] || (_cache[50] = createTextVNode()),
          _cache[51] || (_cache[51] = createBaseVNode(
            "strong",
            null,
            "Создать сотрудника",
            -1
            /* CACHED */
          )),
          _cache[52] || (_cache[52] = createTextVNode(
            " в правом верхнем углу и заполните поля карточки:",
            -1
            /* CACHED */
          ))
        ])
      ])
    ]),
    _cache[99] || (_cache[99] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "Фамилия и Имя сотрудника обязательны для заполнения."),
        createBaseVNode("li", null, "Отчество, Телефон, Email и фото — опциональные поля, они не отражаются в диаграммах.")
      ],
      -1
      /* CACHED */
    )),
    _cache[100] || (_cache[100] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/employees/add_staff/create_staff_acc_step_02.webp",
          alt: ""
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[101] || (_cache[101] = createBaseVNode(
      "p",
      null,
      "После создания и сохранения карточек сотрудников их можно привязывать к организационной структуре.",
      -1
      /* CACHED */
    )),
    _cache[102] || (_cache[102] = createBaseVNode(
      "h2",
      {
        id: "привязка-должностеи-оргструктуры-к-карточкам-сотрудников",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#привязка-должностеи-оргструктуры-к-карточкам-сотрудников"
        }, [
          createBaseVNode("span", null, "Привязка должностей оргструктуры к карточкам сотрудников")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[53] || (_cache[53] = createTextVNode(
            "Перейдите в ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.icon" }),
          _cache[54] || (_cache[54] = createTextVNode()),
          createVNode(_component_Fm, { p: "universal.right_arrow" }),
          _cache[55] || (_cache[55] = createTextVNode()),
          createVNode(_component_Fm, { p: "org.icon" }),
          _cache[56] || (_cache[56] = createTextVNode()),
          createVNode(_component_Fm, { p: "universal.right_arrow" }),
          _cache[57] || (_cache[57] = createTextVNode()),
          createVNode(_component_Fm, { p: "org.scheme" }),
          _cache[58] || (_cache[58] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[59] || (_cache[59] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/navigate_to_org_str/org_structure.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[60] || (_cache[60] = createTextVNode(
            "Кликните по карточке ",
            -1
            /* CACHED */
          )),
          _cache[61] || (_cache[61] = createBaseVNode(
            "strong",
            null,
            "Начальника",
            -1
            /* CACHED */
          )),
          _cache[62] || (_cache[62] = createTextVNode(
            " или ",
            -1
            /* CACHED */
          )),
          _cache[63] || (_cache[63] = createBaseVNode(
            "strong",
            null,
            "Должности",
            -1
            /* CACHED */
          )),
          _cache[64] || (_cache[64] = createTextVNode(
            ", к которой хотите привязать сотрудника, и нажмите на ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "org.edit_node" }),
          _cache[65] || (_cache[65] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[66] || (_cache[66] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/add_staff_to_node/add_staff_to_org_node_step_01.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[67] || (_cache[67] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Кликните по вкладке "),
            createBaseVNode("strong", null, "Сотрудники"),
            createTextVNode(", выберите нужного сотрудника из выпадающего списка и нажмите кнопку "),
            createBaseVNode("strong", null, "Назначить"),
            createTextVNode(":")
          ]),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/add_staff_to_node/add_staff_to_org_node_step_02.webp",
              alt: ""
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[68] || (_cache[68] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Сохраните изменения в карточке узла нажатием на кнопку "),
            createBaseVNode("strong", null, "Сохранить"),
            createTextVNode(".")
          ])
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[103] || (_cache[103] = createBaseVNode(
      "p",
      null,
      "Напомним, что один сотрудник может занимать несколько должностей. Так же, как на одну должность можно назначить несколько сотрудников. Например, один и тот же человек может быть и директором, и начальником отдела.",
      -1
      /* CACHED */
    )),
    _cache[104] || (_cache[104] = createBaseVNode(
      "h2",
      {
        id: "привязка-ролеи-к-организационнои-структуре",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#привязка-ролеи-к-организационнои-структуре"
        }, [
          createBaseVNode("span", null, "Привязка ролей к организационной структуре")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[71] || (_cache[71] = createBaseVNode(
        "strong",
        null,
        "Роль",
        -1
        /* CACHED */
      )),
      _cache[72] || (_cache[72] = createTextVNode(
        ' — это исполнитель конкретной задачи, а не должность. Одна роль может подходить для нескольких должностей: например, "Инициатор закупки товаров" может быть офис-менеджер или бухгалтер. Роли управляются через раздел ',
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "team.icon" }),
      _cache[73] || (_cache[73] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[74] || (_cache[74] = createTextVNode()),
      createVNode(_component_Fm, { p: "team.roles.icon" }),
      _cache[75] || (_cache[75] = createTextVNode(
        ". Подробнее о том, что такое ",
        -1
        /* CACHED */
      )),
      _cache[76] || (_cache[76] = createBaseVNode(
        "strong",
        null,
        "Роль",
        -1
        /* CACHED */
      )),
      _cache[77] || (_cache[77] = createTextVNode(
        " и как она работает читайте в разделе ",
        -1
        /* CACHED */
      )),
      createVNode(_component_RouteLink, { to: "/main/faq/" }, {
        default: withCtx(() => [..._cache[69] || (_cache[69] = [
          createTextVNode(
            "FAQ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _cache[78] || (_cache[78] = createTextVNode(
        ", ",
        -1
        /* CACHED */
      )),
      createVNode(_component_RouteLink, { to: "/main/faq/#roles" }, {
        default: withCtx(() => [..._cache[70] || (_cache[70] = [
          createTextVNode(
            "Роли",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _cache[79] || (_cache[79] = createTextVNode(
        ".",
        -1
        /* CACHED */
      ))
    ]),
    _cache[105] || (_cache[105] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Для привязки "),
        createBaseVNode("strong", null, "Роли"),
        createTextVNode(" к узлу организационной структуры выполните следующие шаги:")
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[80] || (_cache[80] = createTextVNode(
            "Кликните по карточке на диаграмме, выберите ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "org.edit_node" }),
          _cache[81] || (_cache[81] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[82] || (_cache[82] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/add_role_to_node/add_role_to_org_node_step_01.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[83] || (_cache[83] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Перейдите в секцию "),
            createBaseVNode("strong", null, "Роли в моделях BPMN"),
            createTextVNode(" и выберите нужную вам роль из выпадающего списка:")
          ]),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/org_structure/add_role_to_node/add_role_to_org_node_step_02.webp",
              alt: ""
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[84] || (_cache[84] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Нажмите на кнопку "),
            createBaseVNode("strong", null, "Назначить"),
            createTextVNode(" и потом на кнопку "),
            createBaseVNode("strong", null, "Сохранить"),
            createTextVNode(".")
          ])
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[106] || (_cache[106] = createBaseVNode(
      "h2",
      {
        id: "дополнительные-материалы",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#дополнительные-материалы"
        }, [
          createBaseVNode("span", null, "Дополнительные материалы")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      createBaseVNode("strong", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[85] || (_cache[85] = createTextVNode(
            "Презентация",
            -1
            /* CACHED */
          )),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      _cache[86] || (_cache[86] = createTextVNode(
        " функционаности Оргструктуры на вебинаре:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[107] || (_cache[107] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/LN8LTrSjckQ?si=k9uRxRYqE57GCpSi&start=3587",
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: ""
      },
      null,
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      createBaseVNode("strong", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[87] || (_cache[87] = createTextVNode(
            "Видео",
            -1
            /* CACHED */
          )),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      _cache[88] || (_cache[88] = createTextVNode(
        " с примером, как изменить подчиненность в оргструктуре:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[108] || (_cache[108] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "Передать группу (отдел, подразделение) в подчинение другому руководителю."),
        createBaseVNode("li", null, "Передать должность в другую группу (отдел, подразделение).")
      ],
      -1
      /* CACHED */
    )),
    _cache[109] || (_cache[109] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/o1Gx5N17xWQ?si=So-L9Sbkfu5L0utR",
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: ""
      },
      null,
      -1
      /* CACHED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/architects/org/","title":"Работа с оргструктурой","lang":"ru-RU","frontmatter":{"title":"Работа с оргструктурой","tags":["Оргструктура"],"org":{"boss":"<i class=\\"pi pi-star\\"></i> **Руководитель**","edit_node":"<i class=\\"pi pi-pencil\\"></i> **Редактировать узел**","group":"<i class=\\"pi pi-building\\"></i> **Группа**","icon":"<i class=\\"pi pi-building\\"></i> **Организационная структура**","position":"<i class=\\"pi pi-user\\"></i> **Должность**","scheme":"<i class=\\"pi pi-sitemap\\"></i> **Схема**","staff":"<i class=\\"pi pi-users\\"></i> **Сотрудники**"},"product_name":"Stormbpmn","team":{"icon":"<i class=\\"pi pi-users\\"></i> **Команда**","roles":{"icon":"<i class=\\"pi pi-user-edit\\"></i> **Роли**"}},"universal":{"plus":"<i class=\\"pi pi-plus\\"></i>","right_arrow":"<i class=\\"fa-solid fa-arrow-right\\"></i>"}},"headers":[{"level":2,"title":"Создание оргструктуры","slug":"создание-оргструктуры","link":"#создание-оргструктуры","children":[]},{"level":2,"title":"Создание карточек сотрудников","slug":"создание-карточек-сотрудников","link":"#создание-карточек-сотрудников","children":[]},{"level":2,"title":"Привязка должностей оргструктуры к карточкам сотрудников","slug":"привязка-должностеи-оргструктуры-к-карточкам-сотрудников","link":"#привязка-должностеи-оргструктуры-к-карточкам-сотрудников","children":[]},{"level":2,"title":"Привязка ролей к организационной структуре","slug":"привязка-ролеи-к-организационнои-структуре","link":"#привязка-ролеи-к-организационнои-структуре","children":[]},{"level":2,"title":"Дополнительные материалы","slug":"дополнительные-материалы","link":"#дополнительные-материалы","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.37,"words":1010},"filePathRelative":"architects/org/index.md","excerpt":"\\n<p>Оргструктура в </p>\\n<p>Методологически </p>\\n<ul>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n</ul>\\n"}');
export {
  index_html as comp,
  data
};
//# sourceMappingURL=index.html-D4G_1G66.js.map
