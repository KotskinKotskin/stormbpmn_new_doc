import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-BZnvfINg.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[51] || (_cache[51] = createBaseVNode(
      "h1",
      {
        id: "работа-с-реитингом-качества-процесса",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#работа-с-реитингом-качества-процесса"
        }, [
          createBaseVNode("span", null, "Работа с рейтингом качества процесса")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "При моделировании сложных процессов легко допустить ошибку. В ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " есть встроенная система оценки качества разрабатываемого процесса. Она оценивает качество процесса на основании ~40 правил проверки BPMN, которые система проверяет автоматически в реальном времени и показывает всплывающие уведомления и подсказки в основном окне редактора диаграмм в правой боковой панели.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[52] || (_cache[52] = createBaseVNode(
      "p",
      null,
      "Система проверки качества процессов позволяет не только не допускать ошибок в проектировании бизнес-процессов, но и контролировать качество распределенной и командной разработки диаграмм.",
      -1
      /* CACHED */
    )),
    _cache[53] || (_cache[53] = createBaseVNode(
      "h2",
      {
        id: "уведомления-об-ошибках-в-процессе",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#уведомления-об-ошибках-в-процессе"
        }, [
          createBaseVNode("span", null, "Уведомления об ошибках в процессе")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode(
        "Уведомления об ошибках в процессе располагаются в правой боковой панели в разделе ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.check_mistakes" }),
      _cache[3] || (_cache[3] = createTextVNode(
        " главного экрана редактирования диаграмм:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[54] || (_cache[54] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/diagram/edit_process_overview/edit_process_overview_mistakes.webp",
          alt: "edit_process_overview_mistakes"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode(
        "В верхней части раздела ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.check_mistakes" }),
      _cache[5] || (_cache[5] = createTextVNode(
        " есть ",
        -1
        /* CACHED */
      )),
      _cache[6] || (_cache[6] = createBaseVNode(
        "strong",
        null,
        "Рейтинг качества процесса",
        -1
        /* CACHED */
      )),
      _cache[7] || (_cache[7] = createTextVNode(
        " — чем больше балл, тем лучше качество процесса. Максимум — 10/10. Там же в секции есть трехцветная шкала, отражающая количество ошибок разной степени важности:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[55] || (_cache[55] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/diagram/edit_process_overview/edit_process_overview_graph.webp",
          alt: "edit_process_overview_graph"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[56] || (_cache[56] = createBaseVNode(
      "p",
      null,
      'Далее идут карточки с ошибками. Карточка состоит из названия элемента BPMN-схемы, который не соответствует требованиям оформления, типа ошибки и её описания, свёрнутой подсказки "Как исправить?":',
      -1
      /* CACHED */
    )),
    _cache[57] || (_cache[57] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/diagram/edit_process_overview/edit_process_overview_mistakes_tabs.webp",
          alt: "edit_process_overview_mistakes_tabs"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[8] || (_cache[8] = createTextVNode(
        "Всем элементам BPMN-схемы по умолчанию присваиваются автоматические технические названия (например, Event_19rj0rw, Participant_0nu1w1b), если название элемента не было задано вручную. В таком случае становится сложно понять, к какому элементу относится карточка ошибки, чтобы безошибочно перейти в элемент BPMN-схемы, не соответствующий стандарту — достаточно кликнуть по ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "universal.marker" }),
      _cache[9] || (_cache[9] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[58] || (_cache[58] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/diagram/edit_process_overview/edit_process_overview_mistakes_marker.webp",
          alt: "edit_process_overview_mistakes_marker"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[10] || (_cache[10] = createTextVNode(
        "Для большего удобства и интуитивности отображения ошибок на BPMN-схеме начиная с версии v6.6.3XXX ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[11] || (_cache[11] = createTextVNode(
        " по умолчанию карточки с возникающими ошибками отображаются также и на BPMN-схеме рядом с соответствующими элементами.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[59] || (_cache[59] = createBaseVNode(
      "h2",
      {
        id: "настроика-правил-проверки-диаграмм",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#настроика-правил-проверки-диаграмм"
        }, [
          createBaseVNode("span", null, "Настройка правил проверки диаграмм")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[12] || (_cache[12] = createTextVNode(
        "Правила проверки качества диаграмм можно настроить в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "team.icon" }),
      _cache[13] || (_cache[13] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[14] || (_cache[14] = createTextVNode()),
      createVNode(_component_Fm, { p: "team.team_settings.icon" }),
      _cache[15] || (_cache[15] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[16] || (_cache[16] = createTextVNode()),
      createVNode(_component_Fm, { p: "team.team_settings.general_settings" }),
      _cache[17] || (_cache[17] = createTextVNode(
        ", секция ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "general_settings.check_list" }),
      _cache[18] || (_cache[18] = createTextVNode(
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
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/team_settings/check_diagram_settings/overview_checklist_settings.webp",
          alt: "overview_checklist_settings"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[19] || (_cache[19] = createBaseVNode(
        "strong",
        null,
        "Секция",
        -1
        /* CACHED */
      )),
      _cache[20] || (_cache[20] = createTextVNode()),
      createVNode(_component_Fm, { p: "general_settings.quality" }),
      _cache[21] || (_cache[21] = createTextVNode(
        " позволяет задать минимальные требования к диаграммам команды. Например, можно настроить минимальную среднюю оценку, которую требует ваша команда. При нарушении этого показателя члены команды постоянно будут видеть уведомление о низком качестве процессов:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[61] || (_cache[61] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/team_settings/check_diagram_settings/overview_quality.webp",
          alt: "overview_quality"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[22] || (_cache[22] = createBaseVNode(
        "strong",
        null,
        "Секция",
        -1
        /* CACHED */
      )),
      _cache[23] || (_cache[23] = createTextVNode()),
      createVNode(_component_Fm, { p: "general_settings.check_list" }),
      _cache[24] || (_cache[24] = createTextVNode(
        " содержит правила уведомлений при нахождении ошибок в процессах. Существуют следующие уведомления:",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[25] || (_cache[25] = createBaseVNode(
            "strong",
            null,
            "Небольшое замечание",
            -1
            /* CACHED */
          )),
          _cache[26] || (_cache[26] = createTextVNode(
            " — не критичное уведомление, которое мало влияет на общую оценку качества процесса. Обозначается знаком ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.team_settings.small_mistake" }),
          _cache[27] || (_cache[27] = createTextVNode(
            ". Например, ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.team_settings.small_mistake" }),
          _cache[28] || (_cache[28] = createTextVNode()),
          _cache[29] || (_cache[29] = createBaseVNode(
            "strong",
            null,
            "Нет имени",
            -1
            /* CACHED */
          )),
          _cache[30] || (_cache[30] = createTextVNode(
            " или ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.team_settings.small_mistake" }),
          _cache[31] || (_cache[31] = createTextVNode()),
          _cache[32] || (_cache[32] = createBaseVNode(
            "strong",
            null,
            "Задачи без маркеров",
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
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/diagram/edit_process_overview/overview_small_mistake.webp",
              alt: "overview_small_mistake"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[35] || (_cache[35] = createBaseVNode(
            "strong",
            null,
            "Обратить внимание",
            -1
            /* CACHED */
          )),
          _cache[36] || (_cache[36] = createTextVNode(
            " — важное уведомление, которое средне влияет на общую оценку качества процесса. Обозначается знаком ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.team_settings.attention" }),
          _cache[37] || (_cache[37] = createTextVNode(
            ". Например, ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.team_settings.attention" }),
          _cache[38] || (_cache[38] = createTextVNode()),
          _cache[39] || (_cache[39] = createBaseVNode(
            "strong",
            null,
            "Много выходящих потоков",
            -1
            /* CACHED */
          )),
          _cache[40] || (_cache[40] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[41] || (_cache[41] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/diagram/edit_process_overview/overview_attention.webp",
              alt: "overview_attention"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[42] || (_cache[42] = createBaseVNode(
            "strong",
            null,
            "Ошибка",
            -1
            /* CACHED */
          )),
          _cache[43] || (_cache[43] = createTextVNode(
            " — критически важное уведомление, которое сильно влияет на общую оценку качества процесса. Обозначается также знаком ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.team_settings.attention" }),
          _cache[44] || (_cache[44] = createTextVNode(
            ". Например, ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.team_settings.attention" }),
          _cache[45] || (_cache[45] = createTextVNode()),
          _cache[46] || (_cache[46] = createBaseVNode(
            "strong",
            null,
            "Нет завершающего события",
            -1
            /* CACHED */
          )),
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
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/diagram/edit_process_overview/overview_error.webp",
              alt: "overview_error"
            })
          ],
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[49] || (_cache[49] = createTextVNode(
        "Правила проверок можно менять по желанию. Можно изменить: заголовок, описание, критичность уведомления, а также включить или выключить его. Для редактирования правила — достаточно нажать на ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "universal.edit" }),
      _cache[50] || (_cache[50] = createTextVNode(
        " в правом крайнем столбце:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[62] || (_cache[62] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/app/team_settings/check_diagram_settings/overview_edit_attention.webp",
          alt: "overview_edit_attention"
        })
      ],
      -1
      /* CACHED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/all/overview/","title":"Работа с рейтингом качества процесса","lang":"ru-RU","frontmatter":{"title":"Работа с рейтингом качества процесса","description":"Как работает рейтинг качества процесса в BPMN: проверка ошибок, уведомления, карточки замечаний и настройка правил качества диаграмм в команде.","tags":["Спецфичи редактора BPMN"],"general_settings":{"check_list":"<i class=\\"pi pi-list-check\\"></i> **Правила проверки диаграмм**","quality":"<i class=\\"pi pi-check-circle\\" style = \\"color: rgb(99, 102, 241)\\"></i> **Качество процессов**"},"process_editor":{"right_toolbar":{"buttons":{"check_mistakes":"<i class=\\"pi pi-check-circle\\"></i> **Проверка ошибок**"}}},"product_name":"Stormbpmn","team":{"icon":"<i class=\\"pi pi-users\\"></i> **Команда**","team_settings":{"attention":"<i class=\\"pi pi-exclamation-triangle\\" style = \\"color: rgb(239, 68, 68)\\"></i>","general_settings":"<i class=\\"pi pi-cog\\"></i> **Общие настройки**","icon":"<i class=\\"pi pi-user-edit\\"></i> **Настройки команды**","small_mistake":"<i class=\\"pi pi-info-circle\\" style = \\"color: rgb(96, 165, 250)\\"></i>"}},"universal":{"edit":"<i class=\\"pi pi-pencil\\"></i>","marker":"<i class=\\"pi pi-map-marker\\"></i>","right_arrow":"<i class=\\"fa-solid fa-arrow-right\\"></i>"}},"headers":[{"level":2,"title":"Уведомления об ошибках в процессе","slug":"уведомления-об-ошибках-в-процессе","link":"#уведомления-об-ошибках-в-процессе","children":[]},{"level":2,"title":"Настройка правил проверки диаграмм","slug":"настроика-правил-проверки-диаграмм","link":"#настроика-правил-проверки-диаграмм","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.17,"words":652},"filePathRelative":"all/overview/index.md","excerpt":"\\n<p>При моделировании сложных процессов легко допустить ошибку. В </p>\\n<p>Система проверки качества процессов позволяет не только не допускать ошибок в проектировании бизнес-процессов, но и контролировать качество распределенной и командной разработки диаграмм.</p>\\n<h2>Уведомления об ошибках в процессе</h2>"}');
export {
  index_html as comp,
  data
};
