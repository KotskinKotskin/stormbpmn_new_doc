import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-CfHw5MwK.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[26] || (_cache[26] = createBaseVNode(
      "h1",
      {
        id: "работа-со-слоями-видимости-в-редакторе-диаграмм-overlay",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#работа-со-слоями-видимости-в-редакторе-диаграмм-overlay"
        }, [
          createBaseVNode("span", null, "Работа со слоями видимости в редакторе диаграмм (Overlay)")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[27] || (_cache[27] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("strong", null, "Overlay"),
        createTextVNode(" (оверлей) — это дополнительный слой информации, который накладывается на диаграмму. На диаграмме оверлеи выполнены в приглушенных цветах с эффектом прозрачности — это сделано для того, чтобы не мешать основным элементам диаграммы:")
      ],
      -1
      /* CACHED */
    )),
    _cache[28] || (_cache[28] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/Default/Crops/Canvas.webp",
          alt: 'Default;Crops=["Canvas"]'
        })
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "Однако, когда диаграмма сложная, большое количество дополнительной информации может перегружать визуальное восприятие и мешать фокусироваться на главном — поэтому видимостью оверлеев можно управлять. Кликните по кнопке ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.overlays" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " и из появившегося меню выберите оверлеи, отображение которых хотите включить или выключить:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[29] || (_cache[29] = createStaticVNode('<ul><li><span class="pi pi-id-card"></span> <strong>Роли</strong> — на диаграмме отображаются названия ролей, по которым можно кликнуть и вызвать карточку роли для просмотра детальной информации о роли или ее редактирования.</li><li><span class="pi pi-users"></span> <strong>Должности</strong> — на диаграмме отображаются названия должностей.</li><li><span class="pi pi-database"></span> <strong>Системы</strong> — на диаграмме отображаются названия систем.</li><li><span class="pi pi-file"></span> <strong>Документы</strong> — на диаграмме отображаются значки документов возле элементов, к которым прикреплены документы, ссылки или инструкции.</li><li><span class="pi pi-file-edit"></span> <strong>Описание</strong> — на диаграмме отображаются значки описания возле элементов, для которых заполнено текстовое описание.</li><li><span class="pi pi-comments"></span> <strong>Комментарии</strong> — на диаграмме отображаются значки комментариев с их количеством возле элементов, где они были оставлены.</li><li><span class="pi pi-clock"></span> <strong>Длительность</strong> — на диаграмме отображаются длительности таймеров.</li><li><span class="pi pi-arrow-right"></span> <strong>Связи (входящие)</strong> — на диаграмме отображаются входящие связи выбранного элемента.</li><li><span class="pi pi-arrow-left"></span> <strong>Связи (исходящие)</strong> — на диаграмме отображаются исходящие связи выбранного элемента.</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/Overlays/Frames/Overlays_options_Overlay_button.webp" alt="Overlays;Frames=[&quot;Overlays_options&quot;,&quot;Overlay_button&quot;]"></p>', 2)),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode(
        "Если вы хотите отключить видимость всех оверлеев, деактивируйте чек-бокс ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.upper_toolbar.sections.overlays.overlays_show" }),
      _cache[3] || (_cache[3] = createTextVNode(
        ". Отдельно можно свернуть или развернуть оверлеи ",
        -1
        /* CACHED */
      )),
      _cache[4] || (_cache[4] = createBaseVNode(
        "span",
        { class: "pi pi-database" },
        null,
        -1
        /* CACHED */
      )),
      _cache[5] || (_cache[5] = createTextVNode()),
      _cache[6] || (_cache[6] = createBaseVNode(
        "strong",
        null,
        "Системы",
        -1
        /* CACHED */
      )),
      _cache[7] || (_cache[7] = createTextVNode(
        " и ",
        -1
        /* CACHED */
      )),
      _cache[8] || (_cache[8] = createBaseVNode(
        "span",
        { class: "pi pi-file" },
        null,
        -1
        /* CACHED */
      )),
      _cache[9] || (_cache[9] = createTextVNode()),
      _cache[10] || (_cache[10] = createBaseVNode(
        "strong",
        null,
        "Документы",
        -1
        /* CACHED */
      )),
      _cache[11] || (_cache[11] = createTextVNode(
        " с помощью чекбокса ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.upper_toolbar.sections.overlays.overlays_hide" }),
      _cache[12] || (_cache[12] = createTextVNode(
        ".",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("p", null, [
      _cache[13] || (_cache[13] = createTextVNode(
        "Также на диаграмме можно отображать ошибки работы с элементами диаграммы. Для этого нужно переключить тумблер справа от кнопки ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.overlays" }),
      _cache[14] || (_cache[14] = createTextVNode(
        " с ",
        -1
        /* CACHED */
      )),
      _cache[15] || (_cache[15] = createBaseVNode(
        "strong",
        null,
        "Оверлеи",
        -1
        /* CACHED */
      )),
      _cache[16] || (_cache[16] = createTextVNode(
        " на ",
        -1
        /* CACHED */
      )),
      _cache[17] || (_cache[17] = createBaseVNode(
        "strong",
        null,
        "Ошибки",
        -1
        /* CACHED */
      )),
      _cache[18] || (_cache[18] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[30] || (_cache[30] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("img", {
          src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/Errors/Frames/Error_switcher_Error_layer.webp",
          alt: 'Errors;Frames=["Error_switcher","Error_layer"]'
        })
      ],
      -1
      /* CACHED */
    )),
    _cache[31] || (_cache[31] = createBaseVNode(
      "h2",
      {
        id: "определение-видимости-оверлеев-по-умолчанию",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#определение-видимости-оверлеев-по-умолчанию"
        }, [
          createBaseVNode("span", null, "Определение видимости оверлеев по умолчанию")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[19] || (_cache[19] = createTextVNode(
        "Когда долго и много работаешь с диаграммами, вырабатывается личное предпочтение того, какие оверлеи должны быть отражены по умолчанию, а какие скрыты. Кликать каждый раз по кнопке ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.overlays" }),
      _cache[20] || (_cache[20] = createTextVNode(
        " и активировать нужные чекбоксы с оверлеями утомительно — хочется один раз задать настройку отображения оверлеев для всех диаграмм. Такая возможность есть:",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[21] || (_cache[21] = createTextVNode(
            "В главном меню ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "product_name" }),
          _cache[22] || (_cache[22] = createTextVNode(
            " кликните по профилю в правом верхнем углу.",
            -1
            /* CACHED */
          ))
        ])
      ]),
      _cache[23] || (_cache[23] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "Из выпадающего списка выберите первый пункт с вашим email:"),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/Account/Focuses_Frames/Account_Account_btn_Account_email.webp",
              alt: 'Account;Focuses=["Account"];Frames=["Account_btn","Account_email"]'
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[24] || (_cache[24] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Перейдите в раздел "),
            createBaseVNode("strong", null, "Настройки"),
            createTextVNode(" и выберите оверлеи, которые будут отображаться по умолчанию во всех диаграммах:")
          ]),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/profile/overlay_def_views/overlay_def_views.webp",
              alt: "overlay_def_views"
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[25] || (_cache[25] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Кликните по кнопке "),
            createBaseVNode("strong", null, "Сохранить"),
            createTextVNode(", чтобы настройки видимости оверлеев применились.")
          ])
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[32] || (_cache[32] = createBaseVNode(
      "p",
      null,
      "Теперь видимость оверлеев во всех диаграммах, которые вы будете открывать, будет определяться текущими настройками видимости.",
      -1
      /* CACHED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/all/overlays/","title":"Работа со слоями видимости в редакторе диаграмм (Overlay)","lang":"ru-RU","frontmatter":{"title":"Работа со слоями видимости в редакторе диаграмм (Overlay)","description":"Руководство по работе с оверлеями в редакторе диаграмм Stormbpmn: как включать и отключать слои видимости, отображать ошибки и задавать настройки по умолчанию.","version":2,"process_editor":{"upper_toolbar":{"buttons":{"overlays":"<i class=\\"pi pi-bars\\"></i> **Оверлеи**"},"sections":{"overlays":{"overlays_hide":"<i class=\\"pi pi-check-square\\"></i> **Изменить состояние свернутости всех оверлеев**","overlays_show":"<i class=\\"pi pi-check-square\\"></i> **Изменить видимость всех оверлеев**"}}}},"product_name":"Stormbpmn"},"headers":[{"level":2,"title":"Определение видимости оверлеев по умолчанию","slug":"определение-видимости-оверлеев-по-умолчанию","link":"#определение-видимости-оверлеев-по-умолчанию","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.79,"words":537},"filePathRelative":"all/overlays/index.md","excerpt":"\\n<p><strong>Overlay</strong> (оверлей) — это дополнительный слой информации, который накладывается на диаграмму. На диаграмме оверлеи выполнены в приглушенных цветах с эффектом прозрачности — это сделано для того, чтобы не мешать основным элементам диаграммы:</p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/Default/Crops/Canvas.webp\\" alt=\\"Default;Crops=[&quot;Canvas&quot;]\\"></p>"}');
export {
  index_html as comp,
  data
};
