import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-D7sJO8zT.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[28] || (_cache[28] = createStaticVNode('<h1 id="свернутыи-подпроцесс" tabindex="-1"><a class="header-anchor" href="#свернутыи-подпроцесс"><span>Свернутый подпроцесс</span></a></h1><p>Подпроцесс - это действие, которое может включать в себя другие действия, при этом уровень детализации может быть любым. Подпроцессы могут содержать неограниченное количество задач и других подпроцессов. По форме отображения на BPMN-схеме подпроцесс может быть <strong>свёрнутым</strong> или <strong>развёрнутым</strong>.</p><p><strong>Развернутый подпроцесс</strong> отображается на BPMN-схеме как контейнер с уже раскрытым внутренним содержимым: внутри него видны задачи, события, развилки и потоки переходов. Такой формат используют, когда важно показать логику выполнения подпроцесса прямо на основной схеме и сделать ее понятной без перехода на отдельный уровень детализации:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/subproc_collapsed/subprocess_expand.webp" alt="subprocess_expand"></p><p><strong>Свернутый подпроцесс</strong> отображается на BPMN-схеме как единый элемент (обычно с маркером <code>+</code>), без показа внутренних шагов. Детальная логика при этом выносится на отдельную диаграмму или в другой раздел документации. Такой способ помогает не перегружать основную схему и сохранять ее читаемость, когда внутренние шаги подпроцесса не критичны для общего понимания процесса:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/subproc_collapsed/subprocess_collapsed.webp" alt="subprocess_collapsed"></p><h2 id="создание-свернутого-подпроцесса" tabindex="-1"><a class="header-anchor" href="#создание-свернутого-подпроцесса"><span>Создание свёрнутого подпроцесса</span></a></h2><p>Создать свёрнутый подпроцесс можно из развёрнутого подпроцесса:</p>', 8)),
    createBaseVNode("ul", null, [
      _cache[8] || (_cache[8] = createBaseVNode(
        "li",
        null,
        [
          createTextVNode("Выберите развёрнутый подпроцесс: "),
          createBaseVNode("img", {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/create_subprocess_collapse/create_subprocess_collapse_step_01.webp",
            alt: "create_subprocess_collapse_step_01"
          })
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        _cache[0] || (_cache[0] = createTextVNode(
          "Кликните по ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.wrench" }),
        _cache[1] || (_cache[1] = createTextVNode()),
        _cache[2] || (_cache[2] = createBaseVNode(
          "strong",
          null,
          "Изменить элемент",
          -1
          /* CACHED */
        )),
        _cache[3] || (_cache[3] = createTextVNode(
          " в появившемся окне опций: ",
          -1
          /* CACHED */
        )),
        _cache[4] || (_cache[4] = createBaseVNode(
          "img",
          {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/create_subprocess_collapse/create_subprocess_collapse_step_02.webp",
            alt: "create_subprocess_collapse_step_02"
          },
          null,
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        _cache[5] || (_cache[5] = createTextVNode(
          "Выберите пункт ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bpmn.subprocess_collapsed" }),
        _cache[6] || (_cache[6] = createTextVNode(
          ": ",
          -1
          /* CACHED */
        )),
        _cache[7] || (_cache[7] = createBaseVNode(
          "img",
          {
            src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/create_subprocess_collapse/create_subprocess_collapse_step_03.webp",
            alt: "create_subprocess_collapse_step_03"
          },
          null,
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[9] || (_cache[9] = createTextVNode(
        "После нажатия на ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bpmn.subprocess_collapsed" }),
      _cache[10] || (_cache[10] = createTextVNode(
        " будет создан ",
        -1
        /* CACHED */
      )),
      _cache[11] || (_cache[11] = createBaseVNode(
        "strong",
        null,
        "Свернутый подпроцесс",
        -1
        /* CACHED */
      )),
      _cache[12] || (_cache[12] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[29] || (_cache[29] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/create_subprocess_collapse/create_subprocess_collapse_step_04.webp",
          alt: "create_subprocess_collapse_step_04"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[13] || (_cache[13] = createTextVNode(
        "Также ",
        -1
        /* CACHED */
      )),
      _cache[14] || (_cache[14] = createBaseVNode(
        "strong",
        null,
        "Свернутый подпроцесс",
        -1
        /* CACHED */
      )),
      _cache[15] || (_cache[15] = createTextVNode(
        " можно создать из элемента ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "bpmn.task" }),
      _cache[16] || (_cache[16] = createTextVNode(
        " — следуйте инструкции выше.",
        -1
        /* CACHED */
      )),
      _cache[17] || (_cache[17] = createBaseVNode(
        "br",
        null,
        null,
        -1
        /* CACHED */
      )),
      _cache[18] || (_cache[18] = createTextVNode(
        ' Для перехода внутрь свёрнутого подпроцесса кликните по иконке "стрелка" открытия окна — откроется диаграмма свёрнутого подпроцесса: ',
        -1
        /* CACHED */
      )),
      _cache[19] || (_cache[19] = createBaseVNode(
        "img",
        {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/subproc_collapsed/subprocess_collapsed_open.webp",
          alt: "subprocess_collapsed_open"
        },
        null,
        -1
        /* CACHED */
      ))
    ]),
    _cache[30] || (_cache[30] = createBaseVNode(
      "h2",
      {
        id: "симуляция-токена-в-свернутом-подпроцессе",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#симуляция-токена-в-свернутом-подпроцессе"
        }, [
          createBaseVNode("span", null, "Симуляция токена в свёрнутом подпроцессе")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[20] || (_cache[20] = createTextVNode(
            "Перейдите в свёрнутый подпроцесс, нажав на стрелку открытия окна свёрнутого подпроцесса. В окне просмотра и редактирования нажмите на кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.tokken" }),
          _cache[21] || (_cache[21] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[22] || (_cache[22] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/tokken_simulate/tokeken_simulate_step_01.webp",
              alt: "tokeken_simulate_step_01"
            })
          ],
          -1
          /* CACHED */
        )),
        _cache[23] || (_cache[23] = createBaseVNode(
          "p",
          null,
          "Активируется процесс симуляции токена — появится тёмно-синяя окантовка окна редактора и появится панель управления скоростью симуляции токена:",
          -1
          /* CACHED */
        )),
        _cache[24] || (_cache[24] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/tokken_simulate/tokeken_simulate_step_02.webp",
              alt: "tokeken_simulate_step_02"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[25] || (_cache[25] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "Перейдите в основной процесс с помощью панели быстрой навигации:"),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/tokken_simulate/tokeken_simulate_step_03.webp",
              alt: "tokeken_simulate_step_03"
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[26] || (_cache[26] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Запустите процесс симуляции токена нажатием на кнопку "),
            createBaseVNode("strong", null, "Запустить симуляцию токена"),
            createTextVNode(".")
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[27] || (_cache[27] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "Вернитесь в свёрнутый подпроцесс и наблюдайте работу симуляции токена.")
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[31] || (_cache[31] = createBaseVNode(
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
    _cache[32] || (_cache[32] = createBaseVNode(
      "p",
      null,
      "В видео подробно показали, как создавать и настраивать свёрнутый подпроцесс (Collapsed Subprocess): добавление элемента на диаграмму, изменение типа (из Task в Subprocess), работу с маркером «+», внутреннюю модель процесса, переключение между свёрнутым и развёрнутым видом.",
      -1
      /* CACHED */
    )),
    _cache[33] || (_cache[33] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/xWAEAfLwFJ8?si=-kDP4ABkL_e_TgKZ",
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
    _cache[34] || (_cache[34] = createBaseVNode(
      "p",
      null,
      "Продемонстрировали, как работать с симуляцией работы токена в свёрнутом подпроцессе:",
      -1
      /* CACHED */
    )),
    _cache[35] || (_cache[35] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/2zgkY7_v174?si=oPwW3W6NN9ScV0hY",
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
const data = JSON.parse('{"path":"/beginners/subprocesses/","title":"Свернутый подпроцесс","lang":"ru-RU","frontmatter":{"title":"Свернутый подпроцесс","description":"Как создать свёрнутый подпроцесс в BPMN, перейти внутрь и запустить симуляцию токена.","tags":["Гайды создания элементов диаграммы BPMN"],"bpmn":{"subprocess_collapsed":"<span class=\\"bpmn-icon-subprocess-collapsed\\"></span> **Свёрнутый подпроцесс**","task":"<span class=\\"bpmn-icon-task-none\\"></span> **Задача**"},"process_editor":{"upper_toolbar":{"buttons":{"tokken":"<i class=\\"pi pi-play-circle\\"></i> **Включить симуляцию токена**"}}},"universal":{"wrench":"<i class=\\"fa-solid fa-wrench\\"></i>"}},"headers":[{"level":2,"title":"Создание свёрнутого подпроцесса","slug":"создание-свернутого-подпроцесса","link":"#создание-свернутого-подпроцесса","children":[]},{"level":2,"title":"Симуляция токена в свёрнутом подпроцессе","slug":"симуляция-токена-в-свернутом-подпроцессе","link":"#симуляция-токена-в-свернутом-подпроцессе","children":[]},{"level":2,"title":"Дополнительные материалы","slug":"дополнительные-материалы","link":"#дополнительные-материалы","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.7,"words":510},"filePathRelative":"beginners/subprocesses/index.md","excerpt":"\\n<p>Подпроцесс - это действие, которое может включать в себя другие действия, при этом уровень детализации может быть любым. Подпроцессы могут содержать неограниченное количество задач и других подпроцессов. По форме отображения на BPMN-схеме подпроцесс может быть <strong>свёрнутым</strong> или <strong>развёрнутым</strong>.</p>"}');
export {
  index_html as comp,
  data
};
