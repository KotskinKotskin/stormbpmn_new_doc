import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-63InvP7F.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[13] || (_cache[13] = createBaseVNode(
      "h1",
      {
        id: "симуляция-токена-в-модели-процесса-на-задачах-с-прикрепленными-событиями",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#симуляция-токена-в-модели-процесса-на-задачах-с-прикрепленными-событиями"
        }, [
          createBaseVNode("span", null, "Симуляция токена в модели процесса на задачах с прикрепленными событиями")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[14] || (_cache[14] = createBaseVNode(
      "p",
      null,
      "С помощью симуляции токена можно проверить работоспособность диаграммы. Токен симулирует реальный процесс выполнения диаграммы. Поведением токена можно управлять. Например, останавливать его в определенных узлах, где есть вариативность событий, например, на задачах с прикрепленными событиями:",
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[0] || (_cache[0] = createTextVNode(
            "Войдите в режим симуляции токена, кликнув на кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.tokken" }),
          _cache[1] || (_cache[1] = createTextVNode(
            " на верхней панели инструментов:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[2] || (_cache[2] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/token_sim_attach_action/play_token.webp",
              alt: "play_token"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[3] || (_cache[3] = createTextVNode(
            "Нажмите на иконку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.token.pause" }),
          _cache[4] || (_cache[4] = createTextVNode(
            " рядом с задачей с прикрепленными событиями, чтобы активировать паузу (токен будет ожидать разрешения двигаться дальше):",
            -1
            /* CACHED */
          ))
        ]),
        _cache[5] || (_cache[5] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/token_sim_attach_action/select_proc.webp",
              alt: "select_proc"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[6] || (_cache[6] = createTextVNode(
            "Кликните по ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.token.play" }),
          _cache[7] || (_cache[7] = createTextVNode(
            " на стартовом событии, чтобы активировать токен:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[8] || (_cache[8] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/token_sim_attach_action/token_play.webp",
              alt: "token_play"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[9] || (_cache[9] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "Когда токен доберётся до задачи с прикрепленными событиями, выберите нужный вам сценарий развития событий:"),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/token_sim_attach_action/choose_scenario.webp",
              alt: "choose_scenario"
            })
          ])
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("p", null, [
      _cache[10] || (_cache[10] = createTextVNode(
        "Вы можете запустить несколько токенов, просто нажав на ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.token.play" }),
      _cache[11] || (_cache[11] = createTextVNode(
        " несколько раз, а на задаче можно нажать на несколько кнопок ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.token.play" }),
      _cache[12] || (_cache[12] = createTextVNode(
        " с интервалом, чтобы наблюдать за разными сценариями работы токена.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[15] || (_cache[15] = createBaseVNode(
      "p",
      null,
      "Для большей наглядности работы токена на задачах с прикрепленными событиями мы подготовили видеоролик:",
      -1
      /* CACHED */
    )),
    _cache[16] || (_cache[16] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/jzs8HKMoKK8?si=cnFRQjo7hnbqUWCA",
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
const data = JSON.parse('{"path":"/analytics/token_sim_attach_action/","title":"Симуляция токена в модели процесса на задачах с прикрепленными событиями","lang":"ru-RU","frontmatter":{"title":"Симуляция токена в модели процесса на задачах с прикрепленными событиями","tags":["Спецфичи редактора BPMN"],"process_editor":{"token":{"pause":"<i class=\\"fa-solid fa-pause\\"></i>","play":"<i class=\\"fa-solid fa-play\\"></i>"},"upper_toolbar":{"buttons":{"tokken":"<i class=\\"pi pi-play-circle\\"></i> **Включить симуляцию токена**"}}}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.86,"words":259},"filePathRelative":"analytics/token_sim_attach_action/index.md","excerpt":"\\n<p>С помощью симуляции токена можно проверить работоспособность диаграммы. Токен симулирует реальный процесс выполнения диаграммы. Поведением токена можно управлять. Например, останавливать его в определенных узлах, где есть вариативность событий, например, на задачах с прикрепленными событиями:</p>"}');
export {
  index_html as comp,
  data
};
