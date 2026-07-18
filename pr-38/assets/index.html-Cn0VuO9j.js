import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-CDfj8N5A.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container info" };
const _hoisted_2 = { class: "hint-container-title" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[21] || (_cache[21] = createBaseVNode(
      "h1",
      {
        id: "согласование-регламентов",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#согласование-регламентов"
        }, [
          createBaseVNode("span", null, "Согласование регламентов")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("p", _hoisted_2, [
        _cache[0] || (_cache[0] = createTextVNode(
          "Общие сведения о регламентах в ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "product_name" })
      ]),
      _cache[1] || (_cache[1] = createBaseVNode(
        "p",
        null,
        "Регламент — это документ, описывающий последовательность действий, взаимодействие исполнителей и свойства элементов архитектуры. Его главная цель — официально закрепить правила работы для бизнес-процесса, роли или элемента архитектуры.",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode(
        "Регламенты формируются на базе шаблонов, которые подготавливает администратор команды или аналитик. Шаблоны загружаются через раздел ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "setup_app.icon" }),
      _cache[3] || (_cache[3] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[4] || (_cache[4] = createTextVNode()),
      createVNode(_component_Fm, { p: "setup_app.reglaments_templates" }),
      _cache[5] || (_cache[5] = createTextVNode(
        ".",
        -1
        /* CACHED */
      ))
    ]),
    _cache[22] || (_cache[22] = createBaseVNode(
      "p",
      null,
      "Далее, в зависимости от типа шаблона, согласующий может либо самостоятельно выгрузить нужный регламент и согласовать его, либо делегировать выгрузку участникам группы, оставив за собой только согласование. Эта инструкция описывает полный цикл работ с регламентами: выгрузку и согласование.",
      -1
      /* CACHED */
    )),
    _cache[23] || (_cache[23] = createBaseVNode(
      "h2",
      {
        id: "выгрузка-и-согласование-регламента-процесса",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#выгрузка-и-согласование-регламента-процесса"
        }, [
          createBaseVNode("span", null, "Выгрузка и согласование регламента процесса")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[6] || (_cache[6] = createTextVNode(
            "Перейдите в раздел ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "team.icon" }),
          _cache[7] || (_cache[7] = createTextVNode()),
          createVNode(_component_Fm, { p: "universal.right_arrow" }),
          _cache[8] || (_cache[8] = createTextVNode()),
          createVNode(_component_Fm, { p: "bs_models.bs_m" }),
          _cache[9] || (_cache[9] = createTextVNode()),
          createVNode(_component_Fm, { p: "bs_models.models_list" }),
          _cache[10] || (_cache[10] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[11] || (_cache[11] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/all_models/navigate_to_all_models/navigate_to_all_processes.webp",
              alt: "navigate_to_all_processes"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[18] || (_cache[18] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "Выберите нужную вам модель процесса.")
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[12] || (_cache[12] = createTextVNode(
            "Кликните по ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.extra" }),
          _cache[13] || (_cache[13] = createTextVNode(
            " в верхней панели инструментов и из выпадающего списка выберите пункт ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.download" }),
          _cache[14] || (_cache[14] = createTextVNode()),
          _cache[15] || (_cache[15] = createBaseVNode(
            "strong",
            null,
            "Скачать",
            -1
            /* CACHED */
          )),
          _cache[16] || (_cache[16] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[17] || (_cache[17] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/diagram/reglament_export/reglament_export_step_01.webp",
              alt: "reglament_export_step_01"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[19] || (_cache[19] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Выберите шаблон регламента для скачивания из выпадающего списка и нажмите кнопку "),
            createBaseVNode("strong", null, "Скачать регламент"),
            createTextVNode(":")
          ]),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/diagram/reglament_export/reglament_export_step_02.webp",
              alt: "reglament_export_step_02"
            })
          ]),
          createBaseVNode("p", null, "Если подготовленного шаблона нет, можно скачать регламент с базовым шаблоном:"),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/diagram/reglament_export/reglament_export_alternative_step.webp",
              alt: "reglament_export_alternative_step"
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[20] || (_cache[20] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "Откройте сохранённый шаблон в Microsoft Office или с помощью Google Docs. Согласуйте его с помощью средств электронной подписи или классическим путём.")
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[24] || (_cache[24] = createBaseVNode(
      "p",
      null,
      "Если требуется внести изменения в регламент — обратитесь к ответственному лицу и попросите внести правки в шаблон регламента.",
      -1
      /* CACHED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/approvals/reglaments/","title":"Согласование регламентов","lang":"ru-RU","frontmatter":{"title":"Согласование регламентов","bs_models":{"bs_m":"<i class=\\"pi pi-briefcase\\"></i> **Модели бизнес-процессов**","models_list":"<i class=\\"pi pi-list\\"></i> **Все модели**"},"product_name":"Stormbpmn","setup_app":{"icon":"<i class=\\"pi pi-wrench\\"></i> **Настройки приложения**","reglaments_templates":"<i class=\\"pi pi-copy\\"></i> **Шаблоны документов**"},"team":{"icon":"<i class=\\"pi pi-users\\"></i> **Команда**"},"universal":{"download":"<i class=\\"pi pi-download\\"></i>","extra":"<i class=\\"pi pi-ellipsis-h\\"></i>","right_arrow":"<i class=\\"fa-solid fa-arrow-right\\"></i>"}},"headers":[{"level":2,"title":"Выгрузка и согласование регламента процесса","slug":"выгрузка-и-согласование-регламента-процесса","link":"#выгрузка-и-согласование-регламента-процесса","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.06,"words":317},"filePathRelative":"approvals/reglaments/index.md","excerpt":"\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Общие сведения о регламентах в </p>\\n<p>Регламент — это документ, описывающий последовательность действий, взаимодействие исполнителей и свойства элементов архитектуры. Его главная цель — официально закрепить правила работы для бизнес-процесса, роли или элемента архитектуры.</p>\\n</div>"}');
export {
  index_html as comp,
  data
};
//# sourceMappingURL=index.html-Cn0VuO9j.js.map
