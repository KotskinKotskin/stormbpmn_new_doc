import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-63InvP7F.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[29] || (_cache[29] = createBaseVNode(
      "h1",
      {
        id: "отправка-процесса-на-согласование",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#отправка-процесса-на-согласование"
        }, [
          createBaseVNode("span", null, "Отправка процесса на согласование")
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
        " есть удобная система согласования процессов, которая позволяет отправить приглашение на почту на согласование процесса любому человеку, зарегистрированному в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[2] || (_cache[2] = createTextVNode(
        ". Если приглашение на согласование было направлено человеку не зарегистрированному в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[3] || (_cache[3] = createTextVNode(
        ", он его получит, но для принятия участия в согласовании ему всё равно нужно будет зарегистрироваться в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[4] || (_cache[4] = createTextVNode(
        ".",
        -1
        /* CACHED */
      ))
    ]),
    _cache[30] || (_cache[30] = createBaseVNode(
      "div",
      { class: "hint-container warning" },
      [
        createBaseVNode("p", { class: "hint-container-title" }, "Блокировка статуса диаграммы"),
        createBaseVNode("p", null, [
          createTextVNode("После отправки схемы на согласование диаграмму нельзя будет редактировать или менять её статус, пока не будут получены результаты по "),
          createBaseVNode("strong", null, "ВСЕМ"),
          createTextVNode(" отправленным запросам на согласование.")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[31] || (_cache[31] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("strong", null, "Для отправки процесса на согласование"),
        createTextVNode(" выполните следующие шаги:")
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ul", null, [
      _cache[18] || (_cache[18] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Перейдите в раздел "),
            createBaseVNode("strong", null, "Редактор процессов"),
            createTextVNode(".")
          ])
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[5] || (_cache[5] = createTextVNode(
            "Нажмите на кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.send_on_approve_open_menu" }),
          _cache[6] || (_cache[6] = createTextVNode(
            " на правой боковой панели управления:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[7] || (_cache[7] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/proc_to_approve/send_on_approve.webp",
              alt: "send_on_approve"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[8] || (_cache[8] = createTextVNode(
            "В открывшемся модальном меню ",
            -1
            /* CACHED */
          )),
          _cache[9] || (_cache[9] = createBaseVNode(
            "strong",
            null,
            "Согласования",
            -1
            /* CACHED */
          )),
          _cache[10] || (_cache[10] = createTextVNode(
            ", введите электронную почту согласующего в поле ввода почты, и нажмите кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.send_on_approve" }),
          _cache[11] || (_cache[11] = createTextVNode(
            " для отправки приглашения:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[12] || (_cache[12] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/proc_to_approve/send_on_approve_click_button.webp",
              alt: "send_on_approve_click_button"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[13] || (_cache[13] = createTextVNode(
            "Если нужно отправить приглашение нескольким пользователям: введите адрес почты в поле ввода электронной почты и нажмите кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.add_more_approvals" }),
          _cache[14] || (_cache[14] = createTextVNode(
            ", затем введите другой адрес:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[17] || (_cache[17] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/proc_to_approve/add_more_approvals.webp",
              alt: "add_more_approvals"
            })
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("p", null, [
          _cache[15] || (_cache[15] = createTextVNode(
            "После ввода адресов для отправки нажмите кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.send_on_approve" }),
          _cache[16] || (_cache[16] = createTextVNode(
            ".",
            -1
            /* CACHED */
          ))
        ])
      ])
    ]),
    _cache[32] || (_cache[32] = createBaseVNode(
      "p",
      null,
      "Система отправит приглашения согласующим и выведит в интерфейс сообщения с отчётом об отправке:",
      -1
      /* CACHED */
    )),
    _cache[33] || (_cache[33] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/proc_to_approve/approvel_notice.webp",
          alt: "approvel_notice"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[34] || (_cache[34] = createBaseVNode(
      "p",
      null,
      "Согласующий получит письмо на почту со следующим содержимым:",
      -1
      /* CACHED */
    )),
    _cache[35] || (_cache[35] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/proc_to_approve/approval_letter.webp",
          alt: "approval_letter"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[36] || (_cache[36] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("strong", null, "Если приглашение на согласование было отправлено ошибочно"),
        createTextVNode(" или более не актуально, его можно отменить:")
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[19] || (_cache[19] = createTextVNode(
            "Нажмите на кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.delete_approval_send" }),
          _cache[20] || (_cache[20] = createTextVNode(
            " в сообщении о приглашении:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[21] || (_cache[21] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/proc_to_approve/approvel_notice.webp",
              alt: "approvel_notice"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[22] || (_cache[22] = createTextVNode(
            "После нажатия на ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.delete_approval_send" }),
          _cache[23] || (_cache[23] = createTextVNode(
            " система попросит подтвердить удаление запроса на согласование:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[26] || (_cache[26] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/proc_to_approve/delete_approval_request.webp",
              alt: "delete_approval_request"
            })
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("p", null, [
          _cache[24] || (_cache[24] = createTextVNode(
            "Нажмите на кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.modals.delete_approval_request.buttons.delete" }),
          _cache[25] || (_cache[25] = createTextVNode(
            ", чтобы удалить запрос.",
            -1
            /* CACHED */
          ))
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[27] || (_cache[27] = createTextVNode(
        "После согласования процесса ревьюерами в меню ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.upper_toolbar.sections.messages" }),
      _cache[28] || (_cache[28] = createTextVNode(
        " появятся сообщения о статусе согласования, на правой боковой панели также изменится статус согласования и функция изменения статуса процесса вновь станет доступной:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[37] || (_cache[37] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/proc_to_approve/approval_final.webp",
          alt: "approval_final"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[38] || (_cache[38] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Теперь можно дальше двигаться по процессу и переводить статус диаграммы в следующее состояние - "),
        createBaseVNode("strong", null, "Готов"),
        createTextVNode(":")
      ],
      -1
      /* CACHED */
    )),
    _cache[39] || (_cache[39] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/diagram/proc_to_approve/process_ready.webp",
          alt: "process_ready"
        })
      ],
      -1
      /* CACHED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/all/approval_request/","title":"Отправка процесса на согласование","lang":"ru-RU","frontmatter":{"title":"Отправка процесса на согласование","description":"Показываем наглядно процесс согласования диаграммы с ревьюерами: отправка уведомлений, изменение статуса диаграммы, согласование, завершение процесса ревью.","tags":["Согласование и обсуждение"],"process_editor":{"modals":{"delete_approval_request":{"buttons":{"delete":"**Удалить**"}}},"right_toolbar":{"buttons":{"add_more_approvals":"<i class=\\"pi pi-plus\\"></i>","delete_approval_send":"<i class=\\"pi pi-trash\\"></i>","send_on_approve":"**Отправить согласование**","send_on_approve_open_menu":"<i class=\\"pi pi-thumbs-up\\"></i> **Согласования**"}},"upper_toolbar":{"sections":{"messages":"<i class=\\"pi p-overlay-badge\\"></i> **Уведомления**"}}},"product_name":"Stormbpmn"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.35,"words":405},"filePathRelative":"all/approval_request/index.md","excerpt":"\\n<p>В </p>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">Блокировка статуса диаграммы</p>\\n<p>После отправки схемы на согласование диаграмму нельзя будет редактировать или менять её статус, пока не будут получены результаты по <strong>ВСЕМ</strong> отправленным запросам на согласование.</p>\\n</div>"}');
export {
  index_html as comp,
  data
};
