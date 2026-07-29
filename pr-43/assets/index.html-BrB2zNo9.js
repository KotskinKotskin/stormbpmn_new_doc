import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-D7sJO8zT.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[64] || (_cache[64] = createStaticVNode('<div class="hint-container warning"><p class="hint-container-title">Ограничения возможностей плана, ролей и тарифа!</p><p>Данная статья описывает работу с функциями сервиса, для работы которых нужны:</p><ul><li>Роль: <strong>Администратор команды</strong>.</li><li>Права уровня: <strong>Администратор</strong>.</li><li>Тарифный план: <strong>Team</strong> или <strong>Business</strong>.</li></ul><p>Если нужные вам функции сервиса недоступны вам из-за отсутствия нужных прав, ограничений роли и тарифного плана — обратитесь к вашему администратору команды.</p></div><h1 id="работа-с-версионированием-процессов" tabindex="-1"><a class="header-anchor" href="#работа-с-версионированием-процессов"><span>Работа с версионированием процессов</span></a></h1>', 2)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "Система версионирования в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " позволяет сохранять версию процесса по требованию в любое время, сравнить версии и восстановить процесс из версии. Также система создаёт автоматические версии, если в диаграмму было внесено больше 30 изменений или если кто-то, кроме владельца процесса, внёс изменения в диаграмму.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[65] || (_cache[65] = createBaseVNode(
      "p",
      null,
      "Система уведомляет автора диаграммы по e-mail, если в его диаграмме создаются новые версии.",
      -1
      /* CACHED */
    )),
    _cache[66] || (_cache[66] = createBaseVNode(
      "h2",
      {
        id: "ручное-сохранение-версии-процесса",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#ручное-сохранение-версии-процесса"
        }, [
          createBaseVNode("span", null, "Ручное сохранение версии процесса")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode(
        "Находясь в редакторе процесса, нажмите на кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.save_as_version" }),
      _cache[3] || (_cache[3] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[67] || (_cache[67] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/save_as_version_click_button.webp",
          alt: "save_as_version_click_button"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[68] || (_cache[68] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("В открывшемся модальном окне "),
        createBaseVNode("strong", null, "Сохранение модели"),
        createTextVNode(" введите следующие:")
      ],
      -1
      /* CACHED */
    )),
    _cache[69] || (_cache[69] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/save_process_with_version.webp",
          alt: "save_process_with_version"
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ul", null, [
      _cache[9] || (_cache[9] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("strong", null, "Название"),
          createTextVNode(" (обязательно) — процесс будет сохранён в общем каталоге процессов и унаследует всю историю изменений.")
        ],
        -1
        /* CACHED */
      )),
      _cache[10] || (_cache[10] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("strong", null, "Теги"),
          createTextVNode(" (опционально) — дополнительная логическая разметка процесса, по которой можно быстро ориентироваться в каталогах.")
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        _cache[4] || (_cache[4] = createBaseVNode(
          "strong",
          null,
          "Название папки",
          -1
          /* CACHED */
        )),
        _cache[5] || (_cache[5] = createTextVNode(
          " (опционально) — папка, куда будет сохранена новая версия процесса. Можно создать папку прямо из текущего интерфейса, нажав кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "process_editor.save_process_modal.buttons.plus" }),
        _cache[6] || (_cache[6] = createTextVNode(
          ". Нужны права ",
          -1
          /* CACHED */
        )),
        _cache[7] || (_cache[7] = createBaseVNode(
          "strong",
          null,
          "Администратора",
          -1
          /* CACHED */
        )),
        _cache[8] || (_cache[8] = createTextVNode(
          ".",
          -1
          /* CACHED */
        ))
      ]),
      _cache[11] || (_cache[11] = createStaticVNode("<li><strong>Тип модели</strong> (опционально): <code>ASIS</code> описывает текущее состояние процессов «как есть», а <code>TOBE</code> — желаемое «как должно быть» после улучшений. По умолчанию — <code>ASIS</code>.</li><li><strong>Связанный процесс</strong> (опционально) — процесс, который связан с текущей диаграммой, если есть.</li><li><strong>Комментарий к версии</strong> (опционально) — комментарий, который будет отражаться в карточке выбора версии. Полезно указать какие-нибудь отличительные свойства или черты данной версии процесса. Это поможет быстрее ориентироваться при выборе версии для восстановления.</li>", 3))
    ]),
    createBaseVNode("p", null, [
      _cache[12] || (_cache[12] = createTextVNode(
        "Нажмите кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.save_process_modal.buttons.save" }),
      _cache[13] || (_cache[13] = createTextVNode(
        " для сохранения новой версии процесса.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[70] || (_cache[70] = createBaseVNode(
      "h2",
      {
        id: "автосохранение-версии-процесса",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#автосохранение-версии-процесса"
        }, [
          createBaseVNode("span", null, "Автосохранение версии процесса")
        ])
      ],
      -1
      /* CACHED */
    )),
    createVNode(_component_Fm, { p: "product_name" }),
    _cache[71] || (_cache[71] = createTextVNode(
      " автосохраняет версии процесса, если было совершено больше 30 изменений диаграммы или кто-то (не владелец процесса и не предыдущий автор изменения) внёс изменения в диаграмму.",
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[14] || (_cache[14] = createTextVNode(
        "Автосохранённые диаграммы по умолчанию не отображаются в истории версионирования процесса. Чтобы увидеть автосохранённые версии процесса нужно установить чекбокс ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_versions.checkboxes.show_autosave" }),
      _cache[15] || (_cache[15] = createTextVNode(
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
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/show_autosave.webp",
          alt: "show_autosave"
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[73] || (_cache[73] = createBaseVNode(
      "h2",
      {
        id: "восстановление-из-определеннои-версии-процесса",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#восстановление-из-определеннои-версии-процесса"
        }, [
          createBaseVNode("span", null, "Восстановление из определенной версии процесса")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[74] || (_cache[74] = createBaseVNode(
      "p",
      null,
      "При восстановлении из определенной версии процесса будет создана точка восстановления в виде последней версии, а текущая версия процесса будет сохранена. Востановить процесс из версии можно несколькими путями:",
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        _cache[29] || (_cache[29] = createBaseVNode(
          "p",
          null,
          "Из редактора процесса:",
          -1
          /* CACHED */
        )),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              _cache[16] || (_cache[16] = createTextVNode(
                "Нажмите на кнопку ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.show_all_versions" }),
              _cache[17] || (_cache[17] = createTextVNode(
                ":",
                -1
                /* CACHED */
              ))
            ]),
            _cache[18] || (_cache[18] = createBaseVNode(
              "p",
              null,
              [
                createBaseVNode("img", {
                  src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/cover_from_version.webp",
                  alt: "cover_from_version"
                })
              ],
              -1
              /* CACHED */
            ))
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              _cache[19] || (_cache[19] = createTextVNode(
                "В модальном окне ",
                -1
                /* CACHED */
              )),
              _cache[20] || (_cache[20] = createBaseVNode(
                "strong",
                null,
                "Версии процесса",
                -1
                /* CACHED */
              )),
              _cache[21] || (_cache[21] = createTextVNode(
                " выберите нужную вам версию процесса и нажмите кнопку ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "process_versions.buttons.view_version" }),
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
                  src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/show_autosave_clean.webp",
                  alt: "show_autosave_clean"
                })
              ],
              -1
              /* CACHED */
            ))
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              _cache[24] || (_cache[24] = createTextVNode(
                "Для восстановления из выбранной версии — в окне просмотра процесса нажмите кнопку ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "view_process.buttons.cover_from_version" }),
              _cache[25] || (_cache[25] = createTextVNode(
                ":",
                -1
                /* CACHED */
              ))
            ]),
            _cache[28] || (_cache[28] = createBaseVNode(
              "p",
              null,
              [
                createBaseVNode("img", {
                  src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/view_process_click_cover_from_version.webp",
                  alt: "view_process_click_cover_from_version"
                })
              ],
              -1
              /* CACHED */
            )),
            createBaseVNode("p", null, [
              _cache[26] || (_cache[26] = createTextVNode(
                "После нажатия на кнопку ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "view_process.buttons.cover_from_version" }),
              _cache[27] || (_cache[27] = createTextVNode(
                " — процесс будет восстановлен, откроется редактор процессов, а восстановленная версия станет текущей (последней).",
                -1
                /* CACHED */
              ))
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[30] || (_cache[30] = createTextVNode(
            "Из раздела ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "section_team.buttons.team_switcher" }),
          _cache[31] || (_cache[31] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              _cache[32] || (_cache[32] = createTextVNode(
                "Разверните вкладку ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "section_team.layouts.business_models" }),
              _cache[33] || (_cache[33] = createTextVNode(
                " и перейдите в раздел ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "section_team.layouts.all_models" }),
              _cache[34] || (_cache[34] = createTextVNode(
                ".",
                -1
                /* CACHED */
              ))
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              _cache[35] || (_cache[35] = createTextVNode(
                "Найдите в списке нужную вам модель процесса, прокрутите экран вправо и нажмите на кнопку ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "section_team.buttons.show_more" }),
              _cache[36] || (_cache[36] = createTextVNode(
                ".",
                -1
                /* CACHED */
              ))
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              _cache[37] || (_cache[37] = createTextVNode(
                "Из выпадающего списка дополнительных действий выберите ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "section_team.buttons.all_versions" }),
              _cache[38] || (_cache[38] = createTextVNode(
                ".",
                -1
                /* CACHED */
              ))
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              _cache[39] || (_cache[39] = createTextVNode(
                "В модальном окне ",
                -1
                /* CACHED */
              )),
              _cache[40] || (_cache[40] = createBaseVNode(
                "strong",
                null,
                "Версии процесса",
                -1
                /* CACHED */
              )),
              _cache[41] || (_cache[41] = createTextVNode(
                " выберите нужную вам версию процесса и нажмите кнопку ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "process_versions.buttons.view_version" }),
              _cache[42] || (_cache[42] = createTextVNode(
                ":",
                -1
                /* CACHED */
              ))
            ]),
            _cache[43] || (_cache[43] = createBaseVNode(
              "p",
              null,
              [
                createBaseVNode("img", {
                  src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/show_autosave_clean.webp",
                  alt: "show_autosave_clean"
                })
              ],
              -1
              /* CACHED */
            ))
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              _cache[44] || (_cache[44] = createTextVNode(
                "Для восстановления из выбранной версии — в окне просмотра процесса нажмите кнопку ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "view_process.buttons.cover_from_version" }),
              _cache[45] || (_cache[45] = createTextVNode(
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
                  src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/view_process_click_cover_from_version.webp",
                  alt: "view_process_click_cover_from_version"
                })
              ],
              -1
              /* CACHED */
            )),
            createBaseVNode("p", null, [
              _cache[46] || (_cache[46] = createTextVNode(
                "После нажатия на кнопку ",
                -1
                /* CACHED */
              )),
              createVNode(_component_Fm, { p: "view_process.buttons.cover_from_version" }),
              _cache[47] || (_cache[47] = createTextVNode(
                " — процесс будет восстановлен, откроется редактор процессов, а восстановленная версия станет текущей (последней).",
                -1
                /* CACHED */
              ))
            ])
          ])
        ])
      ])
    ]),
    _cache[75] || (_cache[75] = createBaseVNode(
      "h2",
      {
        id: "сравнение-версии-процесса",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#сравнение-версии-процесса"
        }, [
          createBaseVNode("span", null, "Сравнение версий процесса")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[76] || (_cache[76] = createBaseVNode(
      "div",
      { class: "hint-container info" },
      [
        createBaseVNode("p", { class: "hint-container-title" }, "Инфо"),
        createBaseVNode("p", null, "Данная функция доступна из редактора процессов.")
      ],
      -1
      /* CACHED */
    )),
    _cache[77] || (_cache[77] = createBaseVNode(
      "p",
      null,
      "Перед восстановлением из определенной версии полезно сравнить текущую версию с версией, из которой будет восстановлен процесс. Для сравнения версий в окне редактора процесса:",
      -1
      /* CACHED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[49] || (_cache[49] = createTextVNode(
            "Нажмите на кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.show_all_versions" }),
          _cache[50] || (_cache[50] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[51] || (_cache[51] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/cover_from_version.webp",
              alt: "cover_from_version"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[52] || (_cache[52] = createTextVNode(
            "В модальном окне ",
            -1
            /* CACHED */
          )),
          _cache[53] || (_cache[53] = createBaseVNode(
            "strong",
            null,
            "Версии процесса",
            -1
            /* CACHED */
          )),
          _cache[54] || (_cache[54] = createTextVNode(
            " выберите нужную вам версию процесса и нажмите кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_versions.buttons.view_version_diff" }),
          _cache[55] || (_cache[55] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[56] || (_cache[56] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/show_versions_diff.webp",
              alt: "show_versions_diff"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        _cache[59] || (_cache[59] = createBaseVNode(
          "p",
          null,
          [
            createTextVNode("Окно "),
            createBaseVNode("strong", null, "Сравнение версий"),
            createTextVNode(" разделено на две секции: левая секция отражает версию, из которой процесс будет восстановлен, а правая секция отражает текущую версию процесса:")
          ],
          -1
          /* CACHED */
        )),
        _cache[60] || (_cache[60] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/diagram/proc_versioning/show_diff_version_review.webp",
              alt: "show_diff_version_review"
            })
          ],
          -1
          /* CACHED */
        )),
        _cache[61] || (_cache[61] = createBaseVNode(
          "p",
          null,
          "На диаграмме справа (текущая версия) цветами (значения цветов указаны в подсказке в левом нижнем углу экрана) отмечены изменения относительно версии диаграммы из которой будет восстановлен процесс.",
          -1
          /* CACHED */
        )),
        createBaseVNode("p", null, [
          _cache[57] || (_cache[57] = createTextVNode(
            "Если версия для восстановления верная — нажмите на кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "view_process.buttons.cover_from_version" }),
          _cache[58] || (_cache[58] = createTextVNode(
            ".",
            -1
            /* CACHED */
          ))
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[62] || (_cache[62] = createTextVNode(
        "После нажатия на кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "view_process.buttons.cover_from_version" }),
      _cache[63] || (_cache[63] = createTextVNode(
        " — процесс будет восстановлен, откроется редактор процессов, а восстановленная версия станет текущей (последней).",
        -1
        /* CACHED */
      ))
    ]),
    _cache[78] || (_cache[78] = createBaseVNode(
      "hr",
      null,
      null,
      -1
      /* CACHED */
    )),
    _cache[79] || (_cache[79] = createBaseVNode(
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
    _cache[80] || (_cache[80] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/s3X7z3WttIs?si=ZlHoZHG3-jO5YhsC",
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
const data = JSON.parse('{"path":"/admins/version/","title":"Работа с версионированием процессов","lang":"ru-RU","frontmatter":{"title":"Работа с версионированием процессов","description":"Рассказываем как работать с версионированием процессов в Stormbpmn. Вы узнаете как создавать версии процессов, как из них восстанавливать процесс и как работает автосохранение версий.","tags":["Спецфичи редактора BPMN"],"media.actions.proc_versioning":"proc_versioning","process_editor":{"save_process_modal":{"buttons":{"plus":"<i class=\\"pi pi-plus\\"></i>","save":"**Сохранить как версию**"}},"upper_toolbar":{"buttons":{"save_as_version":"<i class=\\"pi pi-save\\"></i> **Сохранить как версию**","show_all_versions":"<i class=\\"pi pi-database\\"></i> **Посмотреть все версии**"}}},"process_versions":{"buttons":{"view_version":"<i class=\\"pi pi-eye\\"></i> **Посмотреть версию**","view_version_diff":"<i class=\\"pi pi-arrow-right-arrow-left\\"></i> **Сравнить версии**"},"checkboxes":{"show_autosave":"**Показать автосохранение**"}},"product_name":"Stormbpmn","section_team":{"buttons":{"all_versions":"<i class=\\"pi pi-sitemap\\"></i> **Все версии**","show_more":"<i class=\\"pi pi-ellipsis-v\\"></i>","team_switcher":"<i class=\\"pi pi-users\\"></i> **Команда**"},"layouts":{"all_models":"<i class=\\"pi pi-sitemap\\"></i> **Все модели**","business_models":"<i class=\\"pi pi-briefcase\\"></i> **Модели бизнес-процессов**"}},"view_process":{"buttons":{"cover_from_version":"<i class=\\"pi pi-arrow-left\\"></i> **Восстановить версию**"}}},"headers":[{"level":2,"title":"Ручное сохранение версии процесса","slug":"ручное-сохранение-версии-процесса","link":"#ручное-сохранение-версии-процесса","children":[]},{"level":2,"title":"Автосохранение версии процесса","slug":"автосохранение-версии-процесса","link":"#автосохранение-версии-процесса","children":[]},{"level":2,"title":"Восстановление из определенной версии процесса","slug":"восстановление-из-определеннои-версии-процесса","link":"#восстановление-из-определеннои-версии-процесса","children":[]},{"level":2,"title":"Сравнение версий процесса","slug":"сравнение-версии-процесса","link":"#сравнение-версии-процесса","children":[]},{"level":2,"title":"Дополнительные материалы","slug":"дополнительные-материалы","link":"#дополнительные-материалы","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.04,"words":913},"filePathRelative":"admins/version/index.md","excerpt":"<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">Ограничения возможностей плана, ролей и тарифа!</p>\\n<p>Данная статья описывает работу с функциями сервиса, для работы которых нужны:</p>\\n<ul>\\n<li>Роль: <strong>Администратор команды</strong>.</li>\\n<li>Права уровня: <strong>Администратор</strong>.</li>\\n<li>Тарифный план: <strong>Team</strong> или <strong>Business</strong>.</li>\\n</ul>\\n<p>Если нужные вам функции сервиса недоступны вам из-за отсутствия нужных прав, ограничений роли и тарифного плана — обратитесь к вашему администратору команды.</p>\\n</div>"}');
export {
  index_html as comp,
  data
};
