import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-BkkDXh4l.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container info" };
const _hoisted_2 = { class: "hint-container-title" };
const _hoisted_3 = { class: "hint-container info" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[71] || (_cache[71] = createBaseVNode(
      "h1",
      {
        id: "создание-изменение-удаление-бизнес-процессов",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#создание-изменение-удаление-бизнес-процессов"
        }, [
          createBaseVNode("span", null, "Создание, изменение, удаление бизнес-процессов")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[72] || (_cache[72] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("strong", null, "Бизнес-процесс"),
        createTextVNode(" — это последовательность действий исполнителей или систем, которая приводит к измеримому результату. Хорошо описанный бизнес-процесс обычно включает понятные шаги или подпроцессы, исполнителей, показатели эффективности, регламенты и документы, а также модель, отражающую логику его выполнения.")
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "Единого стандарта описания бизнес-процессов нет. Компании по-разному фиксируют текстовое описание процессов, их связи, статусы, показатели и графическое представление в виде диаграмм. В ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " для этого используется реестр процессов в разделе ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "team.bp_reg.icon" }),
      _cache[2] || (_cache[2] = createTextVNode(
        ".",
        -1
        /* CACHED */
      ))
    ]),
    _cache[73] || (_cache[73] = createBaseVNode(
      "h2",
      {
        id: "создание-бизнес-процессов-в-разделе-дерево-каталог",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#создание-бизнес-процессов-в-разделе-дерево-каталог"
        }, [
          createBaseVNode("span", null, "Создание бизнес-процессов в разделе Дерево/Каталог")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode(
        "Перейдите в раздел ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "team.bp_reg.icon" }),
      _cache[4] || (_cache[4] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[5] || (_cache[5] = createTextVNode()),
      createVNode(_component_Fm, { p: "team.bp_reg.bp_tree" }),
      _cache[6] || (_cache[6] = createTextVNode(
        ". У реестра процессов есть два основных представления:",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "bp_tree.tree" }),
        _cache[7] || (_cache[7] = createTextVNode(
          " — дерево процессов, в котором задается иерархия: какой процесс является верхнеуровневым, а какой подчиненным.",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "bp_tree.catalog" }),
        _cache[8] || (_cache[8] = createTextVNode(
          " — каталог процессов, в котором карточки процессов раскладываются по папкам для удобной навигации. В отличие от дерева, один и тот же процесс можно использовать в разных разделах каталога без дублирования карточки.",
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[9] || (_cache[9] = createTextVNode(
        "По умолчанию при входе в раздел ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "team.bp_reg.bp_tree" }),
      _cache[10] || (_cache[10] = createTextVNode(
        " открывается вкладка ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bp_tree.tree" }),
      _cache[11] || (_cache[11] = createTextVNode(
        ", в которой обычно и начинают создание процесса:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[74] || (_cache[74] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/bp_tree_main.webp",
          alt: "bp_tree_main"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[75] || (_cache[75] = createBaseVNode(
      "p",
      null,
      "Сначала полезно продумать структуру процесса: какие у него есть этапы, подпроцессы, связи и логика выполнения. После этого его можно оформить в виде карточки процесса в реестре.",
      -1
      /* CACHED */
    )),
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("p", _hoisted_2, [
        _cache[12] || (_cache[12] = createTextVNode(
          "Зависимость от ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "org_structure.name" })
      ]),
      createBaseVNode("p", null, [
        _cache[13] || (_cache[13] = createTextVNode(
          "Перед созданием бизнес-процесса убедитесь, что в ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "team.icon" }),
        _cache[14] || (_cache[14] = createTextVNode(
          " уже настроена ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "org_structure.name" }),
        _cache[15] || (_cache[15] = createTextVNode(
          ": владелец процесса выбирается именно из нее.",
          -1
          /* CACHED */
        ))
      ])
    ]),
    _cache[76] || (_cache[76] = createBaseVNode(
      "h3",
      {
        id: "создание-верхнеуровневого-бизнес-процесса",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#создание-верхнеуровневого-бизнес-процесса"
        }, [
          createBaseVNode("span", null, "Создание верхнеуровневого бизнес-процесса")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[16] || (_cache[16] = createTextVNode(
        "Для создания нового бизнес-процесса нажмите кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bp_tree.create_bp" }),
      _cache[17] || (_cache[17] = createTextVNode(
        ". Откроется модальное окно ",
        -1
        /* CACHED */
      )),
      _cache[18] || (_cache[18] = createBaseVNode(
        "strong",
        null,
        "Создание бизнес-процесса",
        -1
        /* CACHED */
      )),
      _cache[19] || (_cache[19] = createTextVNode(
        ", в котором нужно заполнить следующие поля:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[77] || (_cache[77] = createStaticVNode('<ul><li><strong>Название</strong> (обязательно) — название бизнес-процесса, которое будет отображаться в дереве и в карточке процесса.</li><li><strong>Родительский бизнес-процесс</strong> (опционально) — процесс, для которого текущий процесс станет дочерним. Если вы создаете верхнеуровневый процесс, оставьте это поле пустым.</li><li><strong>Описание</strong> (опционально) — текстовое описание процесса: цель, условия выполнения, комментарии, особенности или общий контекст.</li><li><strong>Владелец</strong> (обязательно) — группа или должность из оргструктуры, которая отвечает за процесс.</li><li><strong>Переиспользуемый процесс</strong> — опция, которая позволяет включать текущий процесс в другие процессы как переиспользуемый. Это удобно для типовых и повторяющихся процессов, которые встречаются в нескольких сценариях.</li><li><strong>Связанные модели BPMN</strong> — BPMN-модели, относящиеся к данному процессу. У одной карточки процесса может быть несколько моделей, например текущая, архивная и целевая TO-BE-версия.</li></ul><p>Если при создании карточки не выбрать диаграмму, система может автоматически создать пустую BPMN-модель-заглушку для поддержания связности процесса и модели.</p><p>Например, создадим процесс заключения договора с новым клиентом. Это может выглядеть так:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/new_process.webp" alt="new_process"></p><ul><li><strong>Название</strong>: Заключение договора с новым клиентом</li><li><strong>Родительский бизнес-процесс</strong>: родительского процесса нет, потому что мы создаем верхнеуровневый процесс.</li><li><strong>Описание</strong>: Менеджер по продажам проводит переговоры и предлагает услуги компании. После того как потенциальный клиент заинтересован в услугах компании, подключается старший менеджер по продажам и доводит клиента до сделки. На финальном этапе начальник отдела продаж подготавливает договор и передает его старшему менеджеру по продажам, а тот отправляет документ клиенту на ознакомление. Если клиента все устраивает, договор заключается.</li><li><strong>Владелец</strong>: Начальник отдела продаж.</li><li><strong>Переиспользуемый процесс</strong>: нет, процесс уникальный и принадлежит только отделу продаж.</li><li><strong>Связанные модели BPMN</strong>: если диаграмма процесса уже есть, ее можно сразу привязать к карточке. Если диаграммы еще нет, поле можно временно оставить пустым. В нашем примере модель уже создана.</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/bound_diagramm.webp" alt="bound_diagramm"></p><h3 id="создание-добавление-дочернего-процесса" tabindex="-1"><a class="header-anchor" href="#создание-добавление-дочернего-процесса"><span>Создание/добавление дочернего процесса</span></a></h3><p>После создания процесса верхнего уровня, можно добавить дочерние процессы. Сделать это можно так:</p>', 8)),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[20] || (_cache[20] = createTextVNode(
            "Кликните на ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.show_more" }),
          _cache[21] || (_cache[21] = createTextVNode(
            " справа от названия бизнес-процесса и выберите ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.create_sub_process" }),
          _cache[22] || (_cache[22] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[23] || (_cache[23] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/create_sub_process.webp",
              alt: "create_sub_process"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[24] || (_cache[24] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Откроется модальное окно "),
            createBaseVNode("strong", null, "Создание бизнес-процесса"),
            createTextVNode(" — поля в нем заполняются так же, как и при создании бизнес-процесса верхнего уровня.")
          ])
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[78] || (_cache[78] = createBaseVNode(
      "p",
      null,
      "После добавления дочерних процессов иерархия может выглядеть так:",
      -1
      /* CACHED */
    )),
    _cache[79] || (_cache[79] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/bp_tree_ierarchi_example.webp",
          alt: "bp_tree_ierarchi_example"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[80] || (_cache[80] = createBaseVNode(
      "p",
      null,
      "Каждому процессу вне зависимости от вложенности соответствует своя карточка процесса со своими свойствами и привязкой к BPMN-диаграмме. Вложенность и порядок дочерних процессов можно менять перетаскиванием их мышью.",
      -1
      /* CACHED */
    )),
    _cache[81] || (_cache[81] = createBaseVNode(
      "h3",
      {
        id: "переиспользование-процессов",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#переиспользование-процессов"
        }, [
          createBaseVNode("span", null, "Переиспользование процессов")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("div", _hoisted_3, [
      _cache[32] || (_cache[32] = createBaseVNode(
        "p",
        { class: "hint-container-title" },
        "Предварительная активация опции переиспользования процесса",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[25] || (_cache[25] = createTextVNode(
          "Чтобы процесс можно было переиспользовать, нужно разрешить эту опцию в свойствах процесса: ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.show_more" }),
        _cache[26] || (_cache[26] = createTextVNode(
          " справа от названия процесса ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.right_arrow" }),
        _cache[27] || (_cache[27] = createTextVNode()),
        createVNode(_component_Fm, { p: "bp_tree.edit" }),
        _cache[28] || (_cache[28] = createTextVNode()),
        createVNode(_component_Fm, { p: "universal.right_arrow" }),
        _cache[29] || (_cache[29] = createTextVNode(
          " активировать тумблер ",
          -1
          /* CACHED */
        )),
        _cache[30] || (_cache[30] = createBaseVNode(
          "strong",
          null,
          "Переиспользуемый процесс",
          -1
          /* CACHED */
        )),
        _cache[31] || (_cache[31] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ]),
      _cache[33] || (_cache[33] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/reusable_process_activation.webp",
            alt: "reusable_process_activation"
          })
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[82] || (_cache[82] = createBaseVNode(
      "p",
      null,
      "Часто бывает, что разные процессы содержат логически одинаковые подпроцессы. В таком случае удобно переиспользовать процессы, а не создавать их снова. Вот как это можно сделать:",
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[34] || (_cache[34] = createTextVNode(
            "Выберите процесс, в который хотите включить переиспользуемый подпроцесс, нажмите на ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.show_more" }),
          _cache[35] || (_cache[35] = createTextVNode(
            " справа от названия процесса и из выпадающего списка выберите пункт ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.link_process" }),
          _cache[36] || (_cache[36] = createTextVNode(
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
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/add_reusable_process.webp",
              alt: "add_reusable_process"
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
          createBaseVNode("p", null, [
            createTextVNode("В открывшемся модальном окне "),
            createBaseVNode("strong", null, "Добавить переиспользуемый процесс"),
            createTextVNode(" выберите из выпадающего списка "),
            createBaseVNode("strong", null, "Выберите процесс"),
            createTextVNode(" нужный вам процесс:")
          ]),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/choose_shared_process.webp",
              alt: "choose_shared_process"
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[39] || (_cache[39] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Нажмите кнопку "),
            createBaseVNode("strong", null, "Добавить"),
            createTextVNode(".")
          ])
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[83] || (_cache[83] = createStaticVNode('<p>Переиспользуемый процесс будет включен в новую иерархию:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/final_include_reusable_process.webp" alt="final_include_reusable_process"></p><div class="hint-container info"><p class="hint-container-title">Прямая и обратная зависимость свойств переиспользуемых процессов</p><p>У переиспользуемых процессов есть прямая и обратная связь свойств. Если вы добавите любое свойство к переиспользуемому процессу, оно будет распространено на исходный процесс, и наоборот.</p></div><h2 id="карточка-процесса" tabindex="-1"><a class="header-anchor" href="#карточка-процесса"><span>Карточка процесса</span></a></h2><p>После создания процесса в правой части экрана появится карточка процесса:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/process_card.webp" alt="process_card"></p><p>Разберем интерфейс карточки процесса подробнее:</p>', 7)),
    createBaseVNode("ul", null, [
      _cache[48] || (_cache[48] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "Верхний тулбар карточки процесса включает:"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "Уровень вложенности процесса. Самый верхний уровень — 1."),
            createBaseVNode("li", null, "Статус бизнес-процесса. По умолчанию новая карточка создается в статусе «Черновик», но в системе можно настроить собственные статусы."),
            createBaseVNode("li", null, "Даты создания и обновления карточки процесса."),
            createBaseVNode("li", null, "Инструменты редактирования и удаления карточки процесса.")
          ]),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/process_card_upper_toolbar.webp",
              alt: "process_card_upper_toolbar"
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[49] || (_cache[49] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "Тело карточки процесса, которое включает название процесса, владельца, связанные BPMN-модели и описание."),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/process_card_body.webp",
              alt: "process_card_body"
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[40] || (_cache[40] = createTextVNode(
            "Нижнее меню карточки бизнес-процесса, в котором доступны вкладки ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.metrics" }),
          _cache[41] || (_cache[41] = createTextVNode(
            ", ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.options" }),
          _cache[42] || (_cache[42] = createTextVNode(
            ", ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.documents" }),
          _cache[43] || (_cache[43] = createTextVNode(
            ", ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.bpmn_models" }),
          _cache[44] || (_cache[44] = createTextVNode(
            ", ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.reglament" }),
          _cache[45] || (_cache[45] = createTextVNode(
            ", ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.log" }),
          _cache[46] || (_cache[46] = createTextVNode(
            ".",
            -1
            /* CACHED */
          ))
        ]),
        _cache[47] || (_cache[47] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/process_card_footer.webp",
              alt: "process_card_footer"
            })
          ],
          -1
          /* CACHED */
        ))
      ])
    ]),
    _cache[84] || (_cache[84] = createBaseVNode(
      "p",
      null,
      "Бизнес-процесс может содержать не только базовое описание, но и набор дополнительных данных для управления, анализа и сопровождения. Рассмотрим эти вкладки подробнее.",
      -1
      /* CACHED */
    )),
    _cache[85] || (_cache[85] = createBaseVNode(
      "h3",
      {
        id: "вкладки-карточки-процесса",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#вкладки-карточки-процесса"
        }, [
          createBaseVNode("span", null, "Вкладки карточки процесса")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[86] || (_cache[86] = createBaseVNode(
      "p",
      null,
      "Вкладки карточки процесса нужны для сбора и отслеживания данных, по которым можно анализировать состояние процесса, поддерживать его в актуальном виде и принимать решения по улучшению. Вот что находится в каждой из них:",
      -1
      /* CACHED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "bp_tree.metrics" }),
        _cache[50] || (_cache[50] = createTextVNode(
          " — вкладка с показателями процесса. Здесь можно добавлять, искать, редактировать и удалять метрики, по которым оценивается эффективность процесса: длительность, стоимость, количество ошибок, конверсия, LTV, скорость потока, число сделок. Эти показатели помогают сравнивать состояние процесса в разные периоды и находить узкие места.",
          -1
          /* CACHED */
        )),
        _cache[51] || (_cache[51] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/bp_metrics_example.webp",
              alt: "bp_metrics_example"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "bp_tree.options" }),
        _cache[52] || (_cache[52] = createTextVNode(
          " — вкладка с параметрами процесса. Она нужна для хранения пользовательских атрибутов и контекста процесса: уровень риска, приоритет, критичность, продукт, проект, плановая дата запуска. Параметры можно создавать, выбирать из ранее созданных и редактировать, чтобы адаптировать карточки процессов под специфику вашей компании.",
          -1
          /* CACHED */
        )),
        _cache[53] || (_cache[53] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/bp_options_example.webp",
              alt: "bp_options_example"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "bp_tree.documents" }),
        _cache[54] || (_cache[54] = createTextVNode(
          " — вкладка с документами процесса. Здесь удобно хранить входные, внутренние и выходные документы, связанные с процессом: регламенты, инструкции, положения, методики, шаблоны, формы и подтверждающие файлы. Это помогает сохранить в одном месте не только схему, но и ее документальный контекст.",
          -1
          /* CACHED */
        )),
        _cache[55] || (_cache[55] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/bp_tree_docs_example.webp",
              alt: "bp_tree_docs_example"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "bp_tree.bpmn_models" }),
        _cache[56] || (_cache[56] = createTextVNode(
          " — вкладка со связанными BPMN-моделями. Одна карточка процесса может быть связана сразу с несколькими диаграммами, например с текущей моделью, архивной версией или целевой TO-BE-схемой. Это позволяет вести процесс как единую сущность, даже если его графическое описание меняется со временем.",
          -1
          /* CACHED */
        )),
        _cache[57] || (_cache[57] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/bp_tree_bpmn_example.webp",
              alt: "bp_tree_bpmn_example"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "bp_tree.reglament" }),
        _cache[58] || (_cache[58] = createTextVNode(
          " — вкладка для формирования регламента процесса. Она собирает сведения из карточки процесса и связанных моделей, чтобы выгрузить их в текстовый регламент в формате ",
          -1
          /* CACHED */
        )),
        _cache[59] || (_cache[59] = createBaseVNode(
          "code",
          null,
          ".DOCX",
          -1
          /* CACHED */
        )),
        _cache[60] || (_cache[60] = createTextVNode(
          ".",
          -1
          /* CACHED */
        )),
        _cache[61] || (_cache[61] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/bp_tree_reglament_example.webp",
              alt: "bp_tree_reglament_example"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "bp_tree.log" }),
        _cache[62] || (_cache[62] = createTextVNode(
          " — вкладка с историей изменений карточки процесса. Помогает отследить, какие параметры, показатели или состояния процесса менялись с течением времени.",
          -1
          /* CACHED */
        )),
        _cache[63] || (_cache[63] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/bp_tree_log_example.webp",
              alt: "bp_tree_log_example"
            })
          ],
          -1
          /* CACHED */
        ))
      ])
    ]),
    _cache[87] || (_cache[87] = createBaseVNode(
      "p",
      null,
      "Добавление параметров, показателей и документов к карточке процесса не просто делает описание полнее. Оно помогает превратить процесс в рабочий управленческий объект: понятный для исполнителей, прозрачный для владельца и удобный для анализа, улучшения и регламентации.",
      -1
      /* CACHED */
    )),
    _cache[88] || (_cache[88] = createBaseVNode(
      "h2",
      {
        id: "работа-с-каталогом-бизнес-процессов",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#работа-с-каталогом-бизнес-процессов"
        }, [
          createBaseVNode("span", null, "Работа с каталогом бизнес-процессов")
        ])
      ],
      -1
      /* CACHED */
    )),
    createVNode(_component_Fm, { p: "bp_tree.catalog" }),
    _cache[89] || (_cache[89] = createTextVNode(
      " — это удобная форма организации бизнес-процессов по папкам. Каталог удобно использовать тогда, когда у вас есть много ветвистых бизнес-процессов и их можно логически объединить в одну папку. Например, можно поместить в папку два логически близких бизнес-процесса, связанных с работой с клиентом:",
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[64] || (_cache[64] = createTextVNode(
            "Перейдите в ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.catalog" }),
          _cache[65] || (_cache[65] = createTextVNode(
            " и нажмите кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.create_bp" }),
          _cache[66] || (_cache[66] = createTextVNode(
            ".",
            -1
            /* CACHED */
          ))
        ])
      ]),
      _cache[67] || (_cache[67] = createStaticVNode('<li><p>В открывшемся модальном окне <strong>Добавить папку</strong> заполните следующие поля:</p><ul><li><strong>Название папки</strong> — задайте название папки, которая будет содержать близкие по логике бизнес-процессы.</li><li><strong>Родительская папка</strong> — укажите родительскую папку, если хотите включить создаваемую папку внутрь другой папки. Оставьте поле пустым, чтобы создать верхнеуровневую папку.</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/create_folder.webp" alt="create_folder"></p></li><li><p>Нажмите кнопку <strong>Сохранить</strong>.</p></li>', 2))
    ]),
    createBaseVNode("p", null, [
      _cache[68] || (_cache[68] = createTextVNode(
        "После создания папки в нее можно добавлять бизнес-процессы. Для этого кликните на ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "universal.show_more" }),
      _cache[69] || (_cache[69] = createTextVNode(
        " справа от названия папки и выберите ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bp_tree.add_process_to_folder" }),
      _cache[70] || (_cache[70] = createTextVNode(
        " из выпадающего списка:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[90] || (_cache[90] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/add_process_to_folder.webp",
          alt: "add_process_to_folder"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[91] || (_cache[91] = createBaseVNode(
      "p",
      null,
      "Теперь из списка можно выбрать процессы, которые вы хотите поместить в папку:",
      -1
      /* CACHED */
    )),
    _cache[92] || (_cache[92] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/choose_proc_to_add_folder.webp",
          alt: "choose_proc_to_add_folder"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[93] || (_cache[93] = createBaseVNode(
      "p",
      null,
      "После добавления бизнес-процессов в папку они будут отображаться списком внутри папки и таблицей слева, где указаны название процесса, дата и время создания и обновления, а также информация о том, кто его создал или обновил:",
      -1
      /* CACHED */
    )),
    _cache[94] || (_cache[94] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/registry/work_with_bp_tree/proc_review.webp",
          alt: "proc_review"
        })
      ],
      -1
      /* CACHED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/architects/work_with_bp_tree/","title":"Создание, изменение, удаление бизнес-процессов","lang":"ru-RU","frontmatter":{"title":"Создание, изменение, удаление бизнес-процессов","summary":"Статья показывает, как создавать бизнес-процессы в дереве и каталоге, добавлять дочерние и переиспользуемые процессы и работать с карточкой процесса и ее вкладками.","tags":["Процессная архитектура, реестр бизнес-процессов"],"bp_tree":{"add_process_to_folder":"<i class=\\"pi pi-database\\"></i> **Добавить процессы в папку**","bpmn_models":"<i class=\\"pi pi-sun\\"></i> **Модели BPMN**","catalog":"<i class=\\"pi pi-folder\\"></i> **Каталог**","create_bp":"<i class=\\"pi pi-folder\\"></i> **Создать**","create_sub_process":"<i class=\\"pi pi-database\\"></i> **Создать дочерний процесс**","documents":"<i class=\\"pi pi-file\\"></i> **Документы**","edit":"<i class=\\"pi pi-pencil\\"></i> **Редактировать**","link_process":"<i class=\\"pi pi-link\\"></i> **Добавить переиспользуемый процесс**","log":"<i class=\\"pi pi-history\\"></i> **Изменения**","metrics":"<i class=\\"pi pi-chart-line\\"></i> **Показатели**","options":"<i class=\\"pi pi-hashtag\\"></i> **Параметры**","reglament":"<i class=\\"pi pi-book\\"></i> **Регламент**","tree":"<i class=\\"pi pi-sitemap\\"></i> **Дерево**"},"org_structure":{"name":"<i class=\\"pi pi-building\\"></i> **Оргструктура**"},"product_name":"Stormbpmn","team":{"bp_reg":{"bp_tree":"<i class=\\"pi pi-sitemap\\"></i> **Дерево / Каталог**","icon":"<i class=\\"pi pi-sitemap\\"></i> **Реестр бизнес-процессов**"},"icon":"<i class=\\"pi pi-users\\"></i> **Команда**"},"universal":{"right_arrow":"<i class=\\"fa-solid fa-arrow-right\\"></i>","show_more":"<i class=\\"pi pi-ellipsis-v\\"></i>"}},"headers":[{"level":2,"title":"Создание бизнес-процессов в разделе Дерево/Каталог","slug":"создание-бизнес-процессов-в-разделе-дерево-каталог","link":"#создание-бизнес-процессов-в-разделе-дерево-каталог","children":[{"level":3,"title":"Создание верхнеуровневого бизнес-процесса","slug":"создание-верхнеуровневого-бизнес-процесса","link":"#создание-верхнеуровневого-бизнес-процесса","children":[]},{"level":3,"title":"Создание/добавление дочернего процесса","slug":"создание-добавление-дочернего-процесса","link":"#создание-добавление-дочернего-процесса","children":[]},{"level":3,"title":"Переиспользование процессов","slug":"переиспользование-процессов","link":"#переиспользование-процессов","children":[]}]},{"level":2,"title":"Карточка процесса","slug":"карточка-процесса","link":"#карточка-процесса","children":[{"level":3,"title":"Вкладки карточки процесса","slug":"вкладки-карточки-процесса","link":"#вкладки-карточки-процесса","children":[]}]},{"level":2,"title":"Работа с каталогом бизнес-процессов","slug":"работа-с-каталогом-бизнес-процессов","link":"#работа-с-каталогом-бизнес-процессов","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.64,"words":1692},"filePathRelative":"architects/work_with_bp_tree/index.md","excerpt":"\\n<p><strong>Бизнес-процесс</strong> — это последовательность действий исполнителей или систем, которая приводит к измеримому результату. Хорошо описанный бизнес-процесс обычно включает понятные шаги или подпроцессы, исполнителей, показатели эффективности, регламенты и документы, а также модель, отражающую логику его выполнения.</p>"}');
export {
  index_html as comp,
  data
};
//# sourceMappingURL=index.html-9KJdZ7aY.js.map
