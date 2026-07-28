import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-Dm_0y6A6.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
const _hoisted_2 = { class: "hint-container details" };
const _hoisted_3 = { class: "hint-container details" };
const _hoisted_4 = {
  href: "https://youtu.be/Qa6EVKrsn40",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = { class: "hint-container details" };
const _hoisted_6 = { class: "hint-container details" };
const _hoisted_7 = { class: "hint-container details" };
const _hoisted_8 = { class: "hint-container details" };
const _hoisted_9 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("details", _hoisted_1, [
      _cache[2] || (_cache[2] = createBaseVNode(
        "summary",
        null,
        "Изменить цвет элемента диаграммы",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[0] || (_cache[0] = createTextVNode(
          "Кликните по элементу диаграммы, цвет которого хотите изменить, а затем кликните на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.choose_color" }),
        _cache[1] || (_cache[1] = createTextVNode(
          " в верхней панели управления и выберите желаемый цвет заливки элемента:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[3] || (_cache[3] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/change_color/choose_color.webp",
            alt: "choose_color"
          })
        ],
        -1
        /* CACHED */
      )),
      _cache[4] || (_cache[4] = createBaseVNode(
        "p",
        null,
        "Для изменения цвета заднего фона диаграммы — кликните по фону диаграммы и повторите действия, описанные выше.",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_2, [
      _cache[21] || (_cache[21] = createBaseVNode(
        "summary",
        null,
        "Оставить комментарий к элементу диаграммы",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[5] || (_cache[5] = createTextVNode(
          "Кликните по элементу диаграммы, справа вверху от элемента появится кнопка ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "process_editor.canvas.elements.add_notice" }),
        _cache[6] || (_cache[6] = createTextVNode(
          ". Кликните по кнопке и в появившееся поле введите комментарий. Поддерживается многострочный ввод и возможность прикрепить файл:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[22] || (_cache[22] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/add_notice_to_element/add_notice_to_element_extra_content.webp",
            alt: "add_notice_to_element_extra_content"
          })
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[7] || (_cache[7] = createTextVNode(
          "Комментарии, оставленные на элементах, дублируются списком виджетов в правой панели управления в разделе ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.notices" }),
        _cache[8] || (_cache[8] = createTextVNode(
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
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/add_notice_to_element/right_panel_notices_widget.webp",
            alt: "right_panel_notices_widget"
          })
        ],
        -1
        /* CACHED */
      )),
      _cache[24] || (_cache[24] = createBaseVNode(
        "p",
        null,
        "Виджеты комментариев удобно отражают статус комментария, его важность, принадлежность к элементу на схеме:",
        -1
        /* CACHED */
      )),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          _cache[9] || (_cache[9] = createTextVNode(
            "Естественный цвет виджета комментария и чёрный цвет кнопки ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.notice_active" }),
          _cache[10] || (_cache[10] = createTextVNode(
            " свидетельствуют о том, что комментарий активен.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          _cache[11] || (_cache[11] = createTextVNode(
            "Приглушённый (бледный/затенённый) цвет виджета комментария и зелёный цвет кнопки ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.notice_active" }),
          _cache[12] || (_cache[12] = createTextVNode(
            " свидетельствуют о том, что комментарий решён.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          _cache[13] || (_cache[13] = createTextVNode(
            "Оранжевый цвет виджета комментария указывает на его важность. Изменить уровень важности комментария можно, кликнув по кнопке ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.extra" }),
          _cache[14] || (_cache[14] = createTextVNode(
            " в виджете и выбрав из выпадающего списка опцию: ",
            -1
            /* CACHED */
          )),
          _cache[15] || (_cache[15] = createBaseVNode(
            "strong",
            null,
            "Сделать важным",
            -1
            /* CACHED */
          )),
          _cache[16] || (_cache[16] = createTextVNode(
            " / ",
            -1
            /* CACHED */
          )),
          _cache[17] || (_cache[17] = createBaseVNode(
            "strong",
            null,
            "Отменить важность",
            -1
            /* CACHED */
          )),
          _cache[18] || (_cache[18] = createTextVNode(
            ".",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          _cache[19] || (_cache[19] = createTextVNode(
            "Быстро перейти к элементу, к которому прикреплён комментарий, можно, кликнув по кнопке ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.search" }),
          _cache[20] || (_cache[20] = createTextVNode(
            " в левом верхнем углу виджета комментария.",
            -1
            /* CACHED */
          ))
        ])
      ])
    ]),
    createBaseVNode("details", _hoisted_3, [
      _cache[26] || (_cache[26] = createBaseVNode(
        "summary",
        null,
        "Поток управления «в остальных случаях», поток по умолчанию",
        -1
        /* CACHED */
      )),
      _cache[27] || (_cache[27] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("По правилам BPMN-нотации при использовании логической развилки один из выходных потоков должен быть отмечен как поток управления «в остальных случаях» (RU-версия). Для этого кликните на нужный выходной поток — откроется меню дополнительных настроек. Кликните по изображению гаечного ключа и выберите пункт: "),
          createBaseVNode("strong", null, "Поток управления «в остальных случаях»"),
          createTextVNode(":")
        ],
        -1
        /* CACHED */
      )),
      _cache[28] || (_cache[28] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/create_default_stream/create_default_stream.webp",
            alt: "create_default_stream"
          })
        ],
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "universal.youtube" }),
      _cache[29] || (_cache[29] = createTextVNode()),
      createBaseVNode("a", _hoisted_4, [
        _cache[25] || (_cache[25] = createTextVNode(
          "видео",
          -1
          /* CACHED */
        )),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[30] || (_cache[30] = createTextVNode(
        " с примером.",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_5, [
      _cache[48] || (_cache[48] = createBaseVNode(
        "summary",
        null,
        "Подпроцесс по событию",
        -1
        /* CACHED */
      )),
      _cache[49] || (_cache[49] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("strong", null, "Подпроцесс по событию"),
          createTextVNode(" в BPMN 2.0 — это тип подпроцесса, запускаемого конкретным событием (сообщением, ошибкой, сигналом или таймером) во время выполнения родительского процесса, с возможностью прерывания или параллельного выполнения для обработки исключений и уведомлений.")
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[31] || (_cache[31] = createTextVNode(
          "В ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "product_name" }),
        _cache[32] || (_cache[32] = createTextVNode()),
        _cache[33] || (_cache[33] = createBaseVNode(
          "strong",
          null,
          "Подпроцесс по событию",
          -1
          /* CACHED */
        )),
        _cache[34] || (_cache[34] = createTextVNode(
          " — это опция изменения ",
          -1
          /* CACHED */
        )),
        _cache[35] || (_cache[35] = createBaseVNode(
          "strong",
          null,
          "Развёрнутого подпроцесса",
          -1
          /* CACHED */
        )),
        _cache[36] || (_cache[36] = createTextVNode(
          ". Чтобы создать ",
          -1
          /* CACHED */
        )),
        _cache[37] || (_cache[37] = createBaseVNode(
          "strong",
          null,
          "Подпроцесс по событию",
          -1
          /* CACHED */
        )),
        _cache[38] || (_cache[38] = createTextVNode(
          ", выполните следующие шаги:",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("ol", null, [
        _cache[46] || (_cache[46] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("Перетащите на диаграмму из левой панели элементов элемент "),
              createBaseVNode("strong", null, "Развёрнутый подпроцесс"),
              createTextVNode(":")
            ]),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/subprocess/subprocess.webp",
                alt: "subprocess"
              })
            ])
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[39] || (_cache[39] = createTextVNode(
              "Кликните по элементу ",
              -1
              /* CACHED */
            )),
            _cache[40] || (_cache[40] = createBaseVNode(
              "strong",
              null,
              "Развёрнутый подпроцесс",
              -1
              /* CACHED */
            )),
            _cache[41] || (_cache[41] = createTextVNode(
              " и из выпадающего меню выберите опцию ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "universal.wrench" }),
            _cache[42] || (_cache[42] = createTextVNode()),
            _cache[43] || (_cache[43] = createBaseVNode(
              "strong",
              null,
              "Изменить элемент",
              -1
              /* CACHED */
            )),
            _cache[44] || (_cache[44] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[45] || (_cache[45] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/subprocess/modify_subprocess.webp",
                alt: "modify_subprocess"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[47] || (_cache[47] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("В меню дополнительных опций изменения процесса выберите пункт "),
              createBaseVNode("strong", null, "Подпроцесс по событию"),
              createTextVNode(":")
            ]),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/subprocess/subprocess_optional.webp",
                alt: "subprocess_optional"
              })
            ])
          ],
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("details", _hoisted_6, [
      _cache[56] || (_cache[56] = createBaseVNode(
        "summary",
        null,
        "Назначить нескольким задачам одновременно одну роль и/или элемент архитектуры",
        -1
        /* CACHED */
      )),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[50] || (_cache[50] = createTextVNode(
              "В редакторе диаграмм кликните по ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.archetecture" }),
            _cache[51] || (_cache[51] = createTextVNode(
              " правого тулбара — откроется меню добавления ролей и элементов архитектуры к «активным» элементам диаграммы:",
              -1
              /* CACHED */
            ))
          ]),
          _cache[52] || (_cache[52] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/add_role_to_task/el_structure.webp",
                alt: "el_structure"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[53] || (_cache[53] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("Кликните с зажатой клавишей Shift по элементам диаграммы, обозначающим процесс или действие, и выберите "),
              createBaseVNode("strong", null, "Роль"),
              createTextVNode(" и/или "),
              createBaseVNode("strong", null, "Элемент архитектуры"),
              createTextVNode(", которые хотите присвоить выбранным элементам:")
            ]),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/add_role_to_task/select_role_or_ibfrastructure_el.webp",
                alt: "select_role_or_ibfrastructure_el"
              })
            ])
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("p", null, [
        _cache[54] || (_cache[54] = createTextVNode(
          "Если у вас еще нет нужной роли или элемента архитектуры — вы можете их создать, нажав на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.plus" }),
        _cache[55] || (_cache[55] = createTextVNode(
          " справа от роли или элемента архитектуры.",
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("details", _hoisted_7, [
      _cache[61] || (_cache[61] = createBaseVNode(
        "summary",
        null,
        "Управление пространством",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bpmn.space_tool" }),
      _cache[62] || (_cache[62] = createTextVNode(
        " — это инструмент организации пространства внутри пула диаграммы. Он находится на левой боковой панели инструментов:",
        -1
        /* CACHED */
      )),
      _cache[63] || (_cache[63] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/work_with_space/space_tool.webp",
            alt: "space_tool"
          })
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[57] || (_cache[57] = createTextVNode(
          "С его помощью можно организовывать пространство внутри пула. Например, можно расширить пул вправо с автоматическим переносом части элементов. Для этого выберите ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bpmn.space_tool" }),
        _cache[58] || (_cache[58] = createTextVNode(
          ", кликните нужную вам часть пула и потяните её вправо:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[64] || (_cache[64] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/work_with_space/space_tool_slide_right.webp",
            alt: "space_tool_slide_right"
          })
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[59] || (_cache[59] = createTextVNode(
          "Идея ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bpmn.space_tool" }),
        _cache[60] || (_cache[60] = createTextVNode(
          " в том, что инструмент двигает пространство вместе с элементами диаграммы, что позволяет зонировать пространство и удобно размещать элементы диаграммы в пуле.",
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("details", _hoisted_8, [
      _cache[69] || (_cache[69] = createBaseVNode(
        "summary",
        null,
        "Автонумерация элементов диаграммы",
        -1
        /* CACHED */
      )),
      _cache[70] || (_cache[70] = createBaseVNode(
        "p",
        null,
        "Автонумерация присваивает элементам диаграммы уникальные порядковые номера в соответствии с их расположением.",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[65] || (_cache[65] = createTextVNode(
          "По умолчанию автонумерация выключена, чтобы её включить, кликните по ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.extra" }),
        _cache[66] || (_cache[66] = createTextVNode(
          " и из выпадающего списка выберите нужный вам вариант нумерации:",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "process_editor.upper_toolbar.extra.num_tasks" }),
          _cache[67] || (_cache[67] = createTextVNode(
            " — нумеровать только задачи в пулах. Это удобно, когда пул большой и нужно видеть только то, что нужно.",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_Fm, { p: "process_editor.upper_toolbar.extra.num_all" }),
          _cache[68] || (_cache[68] = createTextVNode(
            " — нумеровать все элементы диаграммы, включая пулы. Этот вариант нумерации обычно используют для работы с регламентами.",
            -1
            /* CACHED */
          ))
        ])
      ]),
      _cache[71] || (_cache[71] = createStaticVNode('<p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/num_elements/diagramm_num_elements.webp" alt=""></p><p><strong>Нумерация элементов внутри пула</strong></p><p>Нумерация элементов в пределах одного пула начинается с левого верхнего угла пула и продвигается в направлении правого нижнего угла зигзагом:</p><ol><li>Находится самый верхний левый элемент.</li><li>Элементы нумеруются сверху вниз.</li><li>Достигнув нижней границы пула, алгоритм сдвигается вправо и вверх, после чего продолжает нумерацию снова сверху вниз.</li><li>Процесс повторяется до тех пор, пока не будут пронумерованы все элементы пула.</li></ol><p><strong>Нумерация пулов</strong></p><p>Пулы нумеруются по аналогичному принципу — начиная с самого левого верхнего пула. Отличие заключается в определении порядка пулов: для этого алгоритм ориентируется на правую границу каждого пула. Пул, у которого правая граница расположена левее, считается «раньше» закончившимся и получает меньший порядковый номер.</p><p><strong>Формат номеров</strong></p><p>1.1 — первый элемент первого пула. <strong>Первая цифра</strong> — номер пула (пулы нумеруются слева направо и сверху вниз). <strong>Вторая цифра</strong> — порядковый номер элемента внутри пула (элементы нумеруются сверху вниз и слева направо по описанному выше алгоритму «заборчиком»).</p><p><strong>Нумерация исходящих потоков из шлюза (Gateway)</strong></p><p>Если элементом является шлюз, то для каждого исходящего из него потока (Sequence Flow) добавляется дополнительный уровень нумерации. Например, если шлюзу присвоен номер 1.5, то исходящие из него потоки получат номера:</p><ul><li>1.5.1 — первый исходящий поток;</li><li>1.5.2 — второй исходящий поток;</li><li>1.5.3 — третий исходящий поток и т.д.</li></ul><p>Порядок присвоения номеров потокам соответствует порядку их расположения (обычно слева направо или по направлению потока).</p>', 12))
    ]),
    createBaseVNode("details", _hoisted_9, [
      _cache[80] || (_cache[80] = createBaseVNode(
        "summary",
        null,
        "Исправление ошибки: Событие отправки без исходящего потока сообщений",
        -1
        /* CACHED */
      )),
      _cache[81] || (_cache[81] = createBaseVNode(
        "p",
        null,
        "Эта ошибка возникает, если не указать исходящий поток сообщений, ведущий в другой процесс, например так:",
        -1
        /* CACHED */
      )),
      _cache[82] || (_cache[82] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/fix_error_44/fix_error_44.webp",
            alt: ""
          })
        ],
        -1
        /* CACHED */
      )),
      _cache[83] || (_cache[83] = createBaseVNode(
        "p",
        null,
        "Важно, чтобы исходящий поток сообщений приходил в конкретный активный элемент (стартовое событие или задача) в другом процессе или в свернутый подпроцесс.",
        -1
        /* CACHED */
      )),
      _cache[84] || (_cache[84] = createBaseVNode(
        "p",
        null,
        "Данная ошибка не критичная, её можно не исправлять, а уведомление — отключить для всех диаграмм. Для отключения уведовления:",
        -1
        /* CACHED */
      )),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[72] || (_cache[72] = createTextVNode(
              "Перейдите в раздел ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "team.icon" }),
            _cache[73] || (_cache[73] = createTextVNode()),
            createVNode(_component_Fm, { p: "universal.right_arrow" }),
            _cache[74] || (_cache[74] = createTextVNode()),
            createVNode(_component_Fm, { p: "team.team_settings.icon" }),
            _cache[75] || (_cache[75] = createTextVNode()),
            createVNode(_component_Fm, { p: "universal.right_arrow" }),
            _cache[76] || (_cache[76] = createTextVNode()),
            createVNode(_component_Fm, { p: "team.team_settings.general_settings" }),
            _cache[77] || (_cache[77] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[78] || (_cache[78] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/fix_error_44/switch_off_err_44.webp",
                alt: ""
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[79] || (_cache[79] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("Проскрольте страницу до раздела "),
              createBaseVNode("strong", null, "Правила проверки диаграмм"),
              createTextVNode(", найдите строку 44: "),
              createBaseVNode("code", null, "Событие отправки без исходящего потока сообщений"),
              createTextVNode(" и измените статус уведомления с "),
              createBaseVNode("code", null, "Вкл"),
              createTextVNode(" на "),
              createBaseVNode("code", null, "Выкл"),
              createTextVNode(":")
            ]),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/fix_error_44/switch_off_err_44_step_02.webp",
                alt: ""
              })
            ])
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[85] || (_cache[85] = createBaseVNode(
        "p",
        null,
        "Подробный видео-туториал по исправлению ошибки:",
        -1
        /* CACHED */
      )),
      _cache[86] || (_cache[86] = createBaseVNode(
        "iframe",
        {
          width: "560",
          height: "315",
          src: "https://www.youtube.com/embed/lvEOsNtPqn4?si=66CcSn89_T39C9lN",
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
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/faq/diagram/","title":"","lang":"ru-RU","frontmatter":{"bpmn":{"space_tool":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 2000 2000\\"><title xmlns=\\"\\">space-tool</title><path fill=\\"currentColor\\" fill-rule=\\"evenodd\\" d=\\"M731.39 100v1800h76V100zm466.824 0v1800h76V100zm401.938 574v216.91l-189.083 1.943v211.667h189.084V1326l325.916-326zm-1190.834 0L81.29 1000l328.03 326v-221.951h186.97V895.008H409.318z\\"/></svg> **Управление пространством**"},"process_editor":{"canvas":{"elements":{"add_notice":"<i class=\\"pi pi-plus\\"></i> **Написать комментарий**"}},"right_toolbar":{"buttons":{"archetecture":"<i class=\\"pi pi-objects-column\\"></i> **Элементы архитектуры**","extra":"<i class=\\"pi pi-ellipsis-h\\"></i>","notice_active":"<i class=\\"pi pi-check-circle\\"></i>","notices":"<i class=\\"pi pi-comments\\"></i> **Комментарии**","search":"<i class=\\"pi pi-search\\"></i>"}},"upper_toolbar":{"buttons":{"choose_color":"<i class=\\"pi pi-palette\\"></i> **Изменить цвет выделенного**"},"extra":{"num_all":"<i class=\\"pi pi-angle-double-down\\"></i> **Нумеровать всё**","num_tasks":"<i class=\\"pi pi-angle-down\\"></i> **Нумеровать только задачи**"}}},"product_name":"Stormbpmn","team":{"icon":"<i class=\\"pi pi-users\\"></i> **Команда**","team_settings":{"general_settings":"<i class=\\"pi pi-cog\\"></i> **Общие настройки**","icon":"<i class=\\"pi pi-user-edit\\"></i> **Настройки команды**"}},"universal":{"plus":"<i class=\\"pi pi-plus\\"></i>","right_arrow":"<i class=\\"fa-solid fa-arrow-right\\"></i>","wrench":"<i class=\\"fa-solid fa-wrench\\"></i>","youtube":"<i class=\\"fa-brands fa-youtube\\"></i>"}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.12,"words":1236},"filePathRelative":"main/faq/diagram/index.md","excerpt":"<details class=\\"hint-container details\\"><summary>Изменить цвет элемента диаграммы</summary>\\n<p>Кликните по элементу диаграммы, цвет которого хотите изменить, а затем кликните на кнопку </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/diagram/change_color/choose_color.webp\\" alt=\\"choose_color\\"></p>\\n<p>Для изменения цвета заднего фона диаграммы — кликните по фону диаграммы и повторите действия, описанные выше.</p>\\n</details>"}');
export {
  index_html as comp,
  data
};
