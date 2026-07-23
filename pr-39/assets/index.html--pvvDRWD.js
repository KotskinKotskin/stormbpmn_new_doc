import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-B7PpRKNp.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://youtu.be/43dF52i1ksA?si=X4vB2RoGXdUJX5eF",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[30] || (_cache[30] = createBaseVNode(
      "h1",
      {
        id: "быстрыи-старт",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#быстрыи-старт"
        }, [
          createBaseVNode("span", null, "Быстрый старт")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "После активации аккаунта и входа в систему — вы окажетесь на главной странице ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        ", где при первом входе в систему не будет моделей процессов:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[31] || (_cache[31] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/main/quick_start/img/main_window.webp",
          alt: "main_window"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode(
        "Для быстрого ознакомления с возможностями ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[3] || (_cache[3] = createTextVNode(
        " по работе с моделями и быстрого старта — рекомендуем создать тестовую модель. Нажмите на кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "main_window.create_model_modal_window.create_new_model_button" }),
      _cache[4] || (_cache[4] = createTextVNode(
        " в диалоговом окне ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "main_window.create_model_modal_window.window_name" }),
      _cache[5] || (_cache[5] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[32] || (_cache[32] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/main/quick_start/img/main_window_create_new_model.webp",
          alt: "main_window_create_new_model"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[33] || (_cache[33] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Откроется модальное окно "),
        createBaseVNode("strong", null, "Создать модель"),
        createTextVNode(", в котором будет предложено создать модель одним из следующих способов:")
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "create_model.blank" }),
        _cache[6] || (_cache[6] = createTextVNode(
          " — начните создание диаграммы с пустого холста.",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "create_model.template" }),
        _cache[7] || (_cache[7] = createTextVNode(
          " — импортируйте существующий BPMN-файл для редактирования.",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "create_model.upload" }),
        _cache[8] || (_cache[8] = createTextVNode(
          " — выберите готовый шаблон BPMN диаграммы для быстрого старта.",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_Fm, { p: "create_model.ai" }),
        _cache[9] || (_cache[9] = createTextVNode(
          " — создайте диаграмму с помощью искусственного интеллекта.",
          -1
          /* CACHED */
        ))
      ]),
      _cache[10] || (_cache[10] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("i", { class: "pi pi-clone" }),
          createTextVNode(),
          createBaseVNode("strong", null, "Скопировать модель"),
          createTextVNode(" — создайте копию существующей модели для модификации.")
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("p", null, [
      _cache[11] || (_cache[11] = createTextVNode(
        "Рекомендуем начать знакомство с возможностями ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[12] || (_cache[12] = createTextVNode(
        " с создания модели ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "create_model.blank" }),
      _cache[13] || (_cache[13] = createTextVNode(
        " — это хороший выбор для быстрого старта, чтобы сосредоточиться на основном и не утонуть в обилии элементов модели с самого начала.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[34] || (_cache[34] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("После открытия главного окна "),
        createBaseVNode("strong", null, "Редактирование модели"),
        createTextVNode(" вы увидите черновик модели, состоящий из стартового события. Минимальная рабочая диаграмма должна состоять из: стартового события, задачи и конечного события.")
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[14] || (_cache[14] = createTextVNode(
        "Добавить перечисленные элементы на диаграмму проще всего, кликнув по стартовому событию и из раскрывшегося списка доступных элементов модели выбрать последовательно ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bpmn.call_activity" }),
      _cache[15] || (_cache[15] = createTextVNode(
        " и ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bpmn.end_event" }),
      _cache[16] || (_cache[16] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[35] || (_cache[35] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/main/quick_start/img/simple_model.webp",
          alt: "simple_model"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[17] || (_cache[17] = createTextVNode(
        "После добавления перечисленных элементов диаграммы интерактивная система проверки ошибок, расположенная в правой боковой панели, в разделе ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.check_mistakes" }),
      _cache[18] || (_cache[18] = createTextVNode(
        " покажет отсутствие ошибок, один недочёт и оценку качества процесса выше 9 баллов:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[36] || (_cache[36] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/main/quick_start/img/simple_model_check_mistakes_sum.webp",
          alt: "simple_model_check_mistakes_sum"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[19] || (_cache[19] = createTextVNode(
        "Устранить недочёт и получить 10 из 10 баллов качества процесса можно задать имя ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bpmn.call_activity" }),
      _cache[20] || (_cache[20] = createTextVNode(
        " двойным кликом по элементу диаграммы:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[37] || (_cache[37] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/main/quick_start/img/simple_process_final.webp",
          alt: "simple_process_final"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[21] || (_cache[21] = createTextVNode(
        "Осталось сохранить модель, и можно сказать, что быстрый старт удался. Для сохранения модели кликните по кнопке ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.save_as_version" }),
      _cache[22] || (_cache[22] = createTextVNode(
        ", затем укажите ",
        -1
        /* CACHED */
      )),
      _cache[23] || (_cache[23] = createBaseVNode(
        "strong",
        null,
        "Название",
        -1
        /* CACHED */
      )),
      _cache[24] || (_cache[24] = createTextVNode(
        " модели и нажмите кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.save_process_modal.buttons.save" }),
      _cache[25] || (_cache[25] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[38] || (_cache[38] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/main/quick_start/img/save_model.webp",
          alt: "save_model"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[27] || (_cache[27] = createTextVNode(
        "Теперь можно сказать, что быстрый старт в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[28] || (_cache[28] = createTextVNode(
        " завершён. Мы создали базовую, простую и рабочую модель. Далее модель можно усложнять, добавляя другие логические элементы процесса, например, как показано в этом ",
        -1
        /* CACHED */
      )),
      createBaseVNode("a", _hoisted_1, [
        _cache[26] || (_cache[26] = createTextVNode(
          "видеопримере",
          -1
          /* CACHED */
        )),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[29] || (_cache[29] = createTextVNode(
        ".",
        -1
        /* CACHED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/quick_start/","title":"Быстрый старт","lang":"ru-RU","frontmatter":{"title":"Быстрый старт","description":"Краткое руководство по созданию первой модели в Stormbpmn: создание, редактирование и сохранение простого рабочего процесса.","tags":["С чего начать"],"bpmn":{"call_activity":"<span class=\\"bpmn-icon-call-activity\\"></span> **Call Activity**","end_event":"<span class=\\"bpmn-icon-end-event-none\\"></span> **Конечное событие**"},"create_model":{"ai":"<i class=\\"pi pi-sparkles\\"></i> **С помощью AI**","blank":"<i class=\\"pi pi-plus\\"></i> **С чистого листа**","template":"<i class=\\"pi pi-copy\\"></i> **По шаблону**","upload":"<i class=\\"pi pi-download\\"></i> **Загрузить BPMN**"},"main_window":{"create_model_modal_window":{"create_new_model_button":"**Новая модель**","window_name":"<i class=\\"pi pi-file\\"></i> **Модель (диаграмма)**"}},"process_editor":{"right_toolbar":{"buttons":{"check_mistakes":"<i class=\\"pi pi-check-circle\\"></i> **Проверка ошибок**"}},"save_process_modal":{"buttons":{"save":"**Сохранить как версию**"}},"upper_toolbar":{"buttons":{"save_as_version":"<i class=\\"pi pi-save\\"></i> **Сохранить как версию**"}}},"product_name":"Stormbpmn"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.68,"words":503},"filePathRelative":"main/quick_start/index.md","excerpt":"\\n<p>После активации аккаунта и входа в систему — вы окажетесь на главной странице </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/main/quick_start/img/main_window.webp\\" alt=\\"main_window\\"></p>\\n<p>Для быстрого ознакомления с возможностями </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/main/quick_start/img/main_window_create_new_model.webp\\" alt=\\"main_window_create_new_model\\"></p>"}');
export {
  index_html as comp,
  data
};
