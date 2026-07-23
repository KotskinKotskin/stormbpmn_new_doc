import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-BZnvfINg.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[68] || (_cache[68] = createBaseVNode(
      "h1",
      {
        id: "работа-с-редактором-uml",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#работа-с-редактором-uml"
        }, [
          createBaseVNode("span", null, "Работа с редактором UML")
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
        " есть встроенный и удобный UML-редактор, поддерживающий версионирование, работу с базовыми шаблонами, комментарии, экспорт UML как PNG или SVG. Также есть возможность создавать и изменять UML-диаграмму с помощью AI-ассистента.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[69] || (_cache[69] = createBaseVNode(
      "h2",
      {
        id: "создание-uml-диаграммы-с-нуля",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#создание-uml-диаграммы-с-нуля"
        }, [
          createBaseVNode("span", null, "Создание UML-диаграммы с нуля")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[2] || (_cache[2] = createTextVNode(
            "В главном меню ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "product_name" }),
          _cache[3] || (_cache[3] = createTextVNode(
            " кликните по кнопке ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.plus" }),
          _cache[4] || (_cache[4] = createTextVNode(
            " на верхней панели управления справа от кнопки ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "main.head_panel.models" }),
          _cache[5] || (_cache[5] = createTextVNode(
            " и выберите ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "main.plantuml" }),
          _cache[6] || (_cache[6] = createTextVNode(
            " из выпадающего списка:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[7] || (_cache[7] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/main/create_uml/choose_plantuml_diagramm.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        _cache[12] || (_cache[12] = createBaseVNode(
          "p",
          null,
          "Выберите наиболее удобный для вас вариант создания UML-диаграммы:",
          -1
          /* CACHED */
        )),
        _cache[13] || (_cache[13] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/main/create_uml/uml_create_step_02.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("p", null, [
          _cache[8] || (_cache[8] = createTextVNode(
            "Вне зависимости от выбора способа создания UML-диаграммы — будет открыто окно редактора UML-диаграмм и будет создана диаграмма под названием ",
            -1
            /* CACHED */
          )),
          _cache[9] || (_cache[9] = createBaseVNode(
            "strong",
            null,
            "Черновик",
            -1
            /* CACHED */
          )),
          _cache[10] || (_cache[10] = createTextVNode(
            " в разделе ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "section_team.layouts.all_models" }),
          _cache[11] || (_cache[11] = createTextVNode(
            ".",
            -1
            /* CACHED */
          ))
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[14] || (_cache[14] = createTextVNode(
            "По умолчанию при загрузке редактора UML-диаграмм автоматически выбирается стартовый шаблон ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "uml.templates.class" }),
          _cache[15] || (_cache[15] = createTextVNode(
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
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_create_step_03.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("p", null, [
          _cache[16] || (_cache[16] = createTextVNode(
            "Шаблон можно сменить, кликнув на кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "uml.templates.icon" }),
          _cache[17] || (_cache[17] = createTextVNode(
            " и выбрав один из следующих шаблонов:",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_Fm, { p: "uml.templates.class" }),
            _cache[18] || (_cache[18] = createTextVNode(
              " — ",
              -1
              /* CACHED */
            )),
            _cache[19] || (_cache[19] = createBaseVNode(
              "strong",
              null,
              "классовая диаграмма",
              -1
              /* CACHED */
            )),
            _cache[20] || (_cache[20] = createTextVNode(
              ". Подходит для описания структуры системы: классов, их атрибутов, методов и отношений между ними.",
              -1
              /* CACHED */
            ))
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_Fm, { p: "uml.templates.sequence" }),
            _cache[21] || (_cache[21] = createTextVNode(
              " — ",
              -1
              /* CACHED */
            )),
            _cache[22] || (_cache[22] = createBaseVNode(
              "strong",
              null,
              "диаграмма последовательности",
              -1
              /* CACHED */
            )),
            _cache[23] || (_cache[23] = createTextVNode(
              " (sequence-диаграмма). Показывает порядок взаимодействия объектов и участников процесса во времени.",
              -1
              /* CACHED */
            ))
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_Fm, { p: "uml.templates.case" }),
            _cache[24] || (_cache[24] = createTextVNode(
              " — ",
              -1
              /* CACHED */
            )),
            _cache[25] || (_cache[25] = createBaseVNode(
              "strong",
              null,
              "диаграмма вариантов использования",
              -1
              /* CACHED */
            )),
            _cache[26] || (_cache[26] = createTextVNode(
              " (use case). Описывает функциональность системы с точки зрения внешних пользователей (акторов) и сценариев её работы.",
              -1
              /* CACHED */
            ))
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_Fm, { p: "uml.templates.logic" }),
            _cache[27] || (_cache[27] = createTextVNode(
              " — ",
              -1
              /* CACHED */
            )),
            _cache[28] || (_cache[28] = createBaseVNode(
              "strong",
              null,
              "логическая диаграмма",
              -1
              /* CACHED */
            )),
            _cache[29] || (_cache[29] = createTextVNode(
              " (activity-диаграмма). Используется для моделирования бизнес-логики, алгоритмов и последовательности действий при решении задачи.",
              -1
              /* CACHED */
            ))
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_Fm, { p: "uml.templates.component" }),
            _cache[30] || (_cache[30] = createTextVNode(
              " — ",
              -1
              /* CACHED */
            )),
            _cache[31] || (_cache[31] = createBaseVNode(
              "strong",
              null,
              "диаграмма компонентов",
              -1
              /* CACHED */
            )),
            _cache[32] || (_cache[32] = createTextVNode(
              ". Показывает высокоуровневую структуру системы, её модули (компоненты) и зависимости между ними.",
              -1
              /* CACHED */
            ))
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[34] || (_cache[34] = createTextVNode(
            "После внесения изменений в UML-диаграмму её можно сохранить, кликнув на кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "uml.save" }),
          _cache[35] || (_cache[35] = createTextVNode(
            " на верхней панели инструментов:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[36] || (_cache[36] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_save_diagramm.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[37] || (_cache[37] = createTextVNode(
            "Измените название диаграммы (по желанию), добавьте теги и укажите папку, куда будет сохранена диаграмма (опционально, по умолчанию диаграмма будет сохранена в раздел ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "section_team.layouts.all_models" }),
          _cache[38] || (_cache[38] = createTextVNode(
            "):",
            -1
            /* CACHED */
          ))
        ]),
        _cache[39] || (_cache[39] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_save_diagramm_step_02.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[40] || (_cache[40] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Нажмите кнопку "),
            createBaseVNode("strong", null, "Сохранить как версию"),
            createTextVNode(".")
          ])
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[70] || (_cache[70] = createBaseVNode(
      "h2",
      {
        id: "управление-предпросмотром-uml-диаграммы",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#управление-предпросмотром-uml-диаграммы"
        }, [
          createBaseVNode("span", null, "Управление предпросмотром UML-диаграммы")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[41] || (_cache[41] = createTextVNode(
        "По умолчанию окно предпросмотра UML-диаграммы горизонтальное и находится снизу. Это не всегда удобно, особенно когда диаграмма большая. Окно предпросмотра можно сделать вертикальным и расположить его справа от редактора кода UML-диаграммы. Для этого кликните по кнопке ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "uml.preview_change_position" }),
      _cache[42] || (_cache[42] = createTextVNode(
        " на верхней панели управления:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[71] || (_cache[71] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_change_preview_window_position.webp",
          alt: ""
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[43] || (_cache[43] = createTextVNode(
        "Также диаграмму можно приближать и отдалять с помощью сочетания зажатой клавиши ",
        -1
        /* CACHED */
      )),
      _cache[44] || (_cache[44] = createBaseVNode(
        "code",
        null,
        "Ctrl",
        -1
        /* CACHED */
      )),
      _cache[45] || (_cache[45] = createTextVNode(
        " + колёсика мышки или жестов на тачпаде (обычно это два пальца, движущихся вверх или вниз). Вернуться быстро к дефолтному размеру диаграммы можно с помощью кнопки ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "uml.skip_zoom" }),
      _cache[46] || (_cache[46] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[72] || (_cache[72] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/skip_zoom.webp",
          alt: ""
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[73] || (_cache[73] = createBaseVNode(
      "h2",
      {
        id: "совместная-работа-над-диаграммои",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#совместная-работа-над-диаграммои"
        }, [
          createBaseVNode("span", null, "Совместная работа над диаграммой")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[47] || (_cache[47] = createTextVNode(
        "По умолчанию диаграмма публична и доступна для просмотра и редактирования (если выданы права) участникам команды. Чтобы поделиться диаграммой с участниками команды или приглашёнными людьми, кликните по кнопке ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "uml.share" }),
      _cache[48] || (_cache[48] = createTextVNode(
        " на верхней панели инструментов и выберите нужный вам способ приглашения к совместной работе:",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[49] || (_cache[49] = createBaseVNode(
            "strong",
            null,
            "Отправка приглашения людям с доступом",
            -1
            /* CACHED */
          )),
          _cache[50] || (_cache[50] = createTextVNode(
            " — укажите e-mail адреса людей, у которых есть доступы к командному ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "product_name" }),
          _cache[51] || (_cache[51] = createTextVNode(
            ", задайте уровень прав (просмотр или редактирование диаграммы) и нажмите кнопку ",
            -1
            /* CACHED */
          )),
          _cache[52] || (_cache[52] = createBaseVNode(
            "strong",
            null,
            "Предоставить доступ",
            -1
            /* CACHED */
          )),
          _cache[53] || (_cache[53] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[54] || (_cache[54] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_share_step_01.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[55] || (_cache[55] = createBaseVNode(
            "strong",
            null,
            "Сделать диаграмму публичной",
            -1
            /* CACHED */
          )),
          _cache[56] || (_cache[56] = createTextVNode(
            " — создать публичную ссылку, чтобы любой человек в интернете смог посмотреть процесс по ссылке и подать прошение на участие в совместной разработке. Скопируйте ссылку кликом по кнопке ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "uml.copy_link" }),
          _cache[57] || (_cache[57] = createTextVNode(
            " и завершите процесс публикации ссылки в интернете нажатием на кнопку ",
            -1
            /* CACHED */
          )),
          _cache[58] || (_cache[58] = createBaseVNode(
            "strong",
            null,
            "Предоставить доступ",
            -1
            /* CACHED */
          )),
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
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_share_step_02.webp",
              alt: ""
            })
          ],
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[61] || (_cache[61] = createTextVNode(
        "Также для более эффективной совместной работы или просто для фиксации важных идей можно воспользоваться комментариями. Секция ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "uml.comments" }),
      _cache[62] || (_cache[62] = createTextVNode(
        " находится в правой боковой панели:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[74] || (_cache[74] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_comments.webp",
          alt: ""
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[75] || (_cache[75] = createBaseVNode(
      "h2",
      {
        id: "выгрузить-диаграмму-как-изображение",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#выгрузить-диаграмму-как-изображение"
        }, [
          createBaseVNode("span", null, "Выгрузить диаграмму как изображение")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[76] || (_cache[76] = createBaseVNode(
      "p",
      null,
      "UML-диаграмму можно выгрузить как изображение в SVG- и PNG-формате:",
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[63] || (_cache[63] = createTextVNode(
            "Кликните по ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.extra" }),
          _cache[64] || (_cache[64] = createTextVNode(
            " на верхней панели управления и из выпадающего списка выберите ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.download" }),
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
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_download_as_image_step_01.webp",
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
          createBaseVNode("p", null, "Выберите нужный вам формат для выгрузки диаграммы как изображения:"),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_download_as_image_step_02.webp",
              alt: ""
            })
          ]),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "svg-формат отлично подходит для презентаций, отчётов и других промо-материалов и интернет-публикаций, так как он легко масштабируется без потери качества."),
            createBaseVNode("li", null, "png-формат хорошо подойдёт для публикаций или отчётов небольших размеров, так как png — это растровый формат рисунка и он теряет качество при масштабировании.")
          ])
        ],
        -1
        /* CACHED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/all/uml/","title":"Работа с редактором UML","lang":"ru-RU","frontmatter":{"title":"Работа с редактором UML","tags":["Редактор UML"],"main":{"head_panel":{"models":"<i class=\\"pi pi-list\\"></i> **Модели**"},"plantuml":"<i class=\\"pi pi-code\\"></i> **PlantUML**"},"product_name":"Stormbpmn","section_team":{"layouts":{"all_models":"<i class=\\"pi pi-sitemap\\"></i> **Все модели**"}},"uml":{"comments":"<i class=\\"pi pi-comments\\"></i> **Комментарии**","copy_link":"<i class=\\"pi pi-copy\\"></i> **Копировать ссылку**","preview_change_position":"<i class=\\"pi pi-arrows-alt\\"></i> **Переключить на вертикальное разделение**","save":"<i class=\\"pi pi-save\\"></i> **Сохранить как версию**","share":"<i class=\\"pi pi-share-alt\\"></i> **Поделиться**","skip_zoom":"<i class=\\"pi pi-expand\\"></i> **Сбросить масштаб**","templates":{"case":"<i class=\\"pi pi-users\\"></i> **Прецедент**","class":"<i class=\\"pi pi-code\\"></i> **Класс**","component":"<i class=\\"pi pi-box\\"></i> **Компонент**","icon":"<i class=\\"pi pi-plus\\"></i> **Создать по шаблону**","logic":"<i class=\\"pi-step-forward\\"></i> **Активность**","sequence":"<i class=\\"pi pi-arrow-right-arrow-left\\"></i> **Последовательность**"}},"universal":{"download":"<i class=\\"pi pi-download\\"></i>","extra":"<i class=\\"pi pi-ellipsis-h\\"></i>","plus":"<i class=\\"pi pi-plus\\"></i>"}},"headers":[{"level":2,"title":"Создание UML-диаграммы с нуля","slug":"создание-uml-диаграммы-с-нуля","link":"#создание-uml-диаграммы-с-нуля","children":[]},{"level":2,"title":"Управление предпросмотром UML-диаграммы","slug":"управление-предпросмотром-uml-диаграммы","link":"#управление-предпросмотром-uml-диаграммы","children":[]},{"level":2,"title":"Совместная работа над диаграммой","slug":"совместная-работа-над-диаграммои","link":"#совместная-работа-над-диаграммои","children":[]},{"level":2,"title":"Выгрузить диаграмму как изображение","slug":"выгрузить-диаграмму-как-изображение","link":"#выгрузить-диаграмму-как-изображение","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.82,"words":845},"filePathRelative":"all/uml/index.md","excerpt":"\\n<p>В </p>\\n<h2>Создание UML-диаграммы с нуля</h2>\\n<ol>\\n<li>\\n<p>В главном меню </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/main/create_uml/choose_plantuml_diagramm.webp\\" alt=\\"\\"></p>\\n</li>\\n<li>\\n<p>Выберите наиболее удобный для вас вариант создания UML-диаграммы:</p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/main/create_uml/uml_create_step_02.webp\\" alt=\\"\\"></p>\\n<p>Вне зависимости от выбора способа создания UML-диаграммы — будет открыто окно редактора UML-диаграмм и будет создана диаграмма под названием <strong>Черновик</strong> в разделе </p>\\n</li>\\n<li>\\n<p>По умолчанию при загрузке редактора UML-диаграмм автоматически выбирается стартовый шаблон </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_create_step_03.webp\\" alt=\\"\\"></p>\\n<p>Шаблон можно сменить, кликнув на кнопку </p>\\n<ul>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>После внесения изменений в UML-диаграмму её можно сохранить, кликнув на кнопку </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_save_diagramm.webp\\" alt=\\"\\"></p>\\n</li>\\n<li>\\n<p>Измените название диаграммы (по желанию), добавьте теги и укажите папку, куда будет сохранена диаграмма (опционально, по умолчанию диаграмма будет сохранена в раздел </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/uml/create_and_work/uml_save_diagramm_step_02.webp\\" alt=\\"\\"></p>\\n</li>\\n<li>\\n<p>Нажмите кнопку <strong>Сохранить как версию</strong>.</p>\\n</li>\\n</ol>"}');
export {
  index_html as comp,
  data
};
