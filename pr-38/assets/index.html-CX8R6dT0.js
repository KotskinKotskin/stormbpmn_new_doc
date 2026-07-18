import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-DrERNb8l.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
const _hoisted_2 = { start: "3" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[26] || (_cache[26] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("span", { class: "md-label" }, "🏷️ Confluence")
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("details", _hoisted_1, [
      createBaseVNode("summary", null, [
        _cache[0] || (_cache[0] = createTextVNode(
          "Встроить диаграмму ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "product_name" }),
        _cache[1] || (_cache[1] = createTextVNode(
          " в документ облачной версии Confluence",
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[2] || (_cache[2] = createTextVNode(
              "Перейдите в окно ",
              -1
              /* CACHED */
            )),
            _cache[3] || (_cache[3] = createBaseVNode(
              "strong",
              null,
              "Редактор диаграмм",
              -1
              /* CACHED */
            )),
            _cache[4] || (_cache[4] = createTextVNode(
              " и нажмите на кнопку ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.share" }),
            _cache[5] || (_cache[5] = createTextVNode(
              " в верхней панели инструментов:",
              -1
              /* CACHED */
            ))
          ]),
          _cache[6] || (_cache[6] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/diagram/share/share_process.webp",
                alt: "share_process"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[7] || (_cache[7] = createTextVNode(
              "Активируйте тумблер ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "universal.toggle" }),
            _cache[8] || (_cache[8] = createTextVNode()),
            _cache[9] || (_cache[9] = createBaseVNode(
              "strong",
              null,
              "Доступ по ссылке",
              -1
              /* CACHED */
            )),
            _cache[10] || (_cache[10] = createTextVNode(
              " и кликните по кнопке ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "process_editor.upper_toolbar.buttons.embded_iframe" }),
            _cache[11] || (_cache[11] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[12] || (_cache[12] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/diagram/share/embed_iframe.webp",
                alt: "embed_iframe"
              })
            ],
            -1
            /* CACHED */
          ))
        ])
      ]),
      _cache[23] || (_cache[23] = createBaseVNode(
        "p",
        null,
        "В буфер обмена будет скопирован код iframe. Временно его можно вставить в любой текстовый редактор. Позже понадобится только сама ссылка.",
        -1
        /* CACHED */
      )),
      createBaseVNode("ol", _hoisted_2, [
        _cache[20] || (_cache[20] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, "Перейдите в облачный редактор Confluence, откройте документ, в который хотите вставить диаграмму, и перейдите в режим редактирования.")
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[13] || (_cache[13] = createTextVNode(
              "Установите курсор в нужную строку документа, кликните по ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "universal.plus" }),
            _cache[14] || (_cache[14] = createTextVNode(
              " слева от курсора и выберите последний пункт выпадающего списка ",
              -1
              /* CACHED */
            )),
            _cache[15] || (_cache[15] = createBaseVNode(
              "i",
              { class: "fa-solid fa-ellipsis" },
              null,
              -1
              /* CACHED */
            )),
            _cache[16] || (_cache[16] = createTextVNode()),
            _cache[17] || (_cache[17] = createBaseVNode(
              "strong",
              null,
              "View more",
              -1
              /* CACHED */
            )),
            _cache[18] || (_cache[18] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[19] || (_cache[19] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/confluence/embded_diagram/confluence_view_more.webp",
                alt: "confluence_view_more"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[21] || (_cache[21] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("Введите в поиск «iframe» и выберите блок "),
              createBaseVNode("strong", null, "Iframe"),
              createTextVNode(":")
            ]),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/confluence/embded_diagram/confluence_iframe_block.webp",
                alt: "confluence_iframe_block"
              })
            ])
          ],
          -1
          /* CACHED */
        )),
        _cache[22] || (_cache[22] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, [
              createTextVNode("В открывшемся окне настроек блока "),
              createBaseVNode("strong", null, "Iframe"),
              createTextVNode(" введите в поля справа следующие значения:")
            ])
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[24] || (_cache[24] = createBaseVNode(
        "ul",
        null,
        [
          createBaseVNode("li", null, [
            createTextVNode("URL — укажите ссылку на iframe из скопированного кода (формата: "),
            createBaseVNode("code", null, "https://new-test.stormbpmn.com/app/diagram/bb7a69c1-e1a9-4140-8e98-e5aead2cb54b?overlays=..."),
            createTextVNode(").")
          ]),
          createBaseVNode("li", null, "Width — задайте 100%."),
          createBaseVNode("li", null, "Height — по желанию.")
        ],
        -1
        /* CACHED */
      )),
      _cache[25] || (_cache[25] = createBaseVNode(
        "p",
        null,
        "Остальные параметры опциональны.",
        -1
        /* CACHED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/faq/integrations/","title":"","lang":"ru-RU","frontmatter":{"process_editor":{"upper_toolbar":{"buttons":{"embded_iframe":"<i class=\\"pi pi-copy\\"></i> **Встроить iframe**","share":"<i class=\\"pi pi-share-alt\\"></i> **Поделиться**"}}},"product_name":"Stormbpmn","universal":{"plus":"<i class=\\"pi pi-plus\\"></i>","toggle":"<i class=\\"fa-solid fa-toggle-on\\"></i>"}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.77,"words":230},"filePathRelative":"main/faq/integrations/index.md","excerpt":"<p><span class=\\"md-label\\">🏷️ Confluence</span></p>\\n<details class=\\"hint-container details\\"><summary>Встроить диаграмму </summary>\\n<ol>\\n<li>\\n<p>Перейдите в окно <strong>Редактор диаграмм</strong> и нажмите на кнопку </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/diagram/share/share_process.webp\\" alt=\\"share_process\\"></p>\\n</li>\\n<li>\\n<p>Активируйте тумблер </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/app/diagram/share/embed_iframe.webp\\" alt=\\"embed_iframe\\"></p>\\n</li>\\n</ol>\\n<p>В буфер обмена будет скопирован код iframe. Временно его можно вставить в любой текстовый редактор. Позже понадобится только сама ссылка.</p>\\n<ol start=\\"3\\">\\n<li>\\n<p>Перейдите в облачный редактор Confluence, откройте документ, в который хотите вставить диаграмму, и перейдите в режим редактирования.</p>\\n</li>\\n<li>\\n<p>Установите курсор в нужную строку документа, кликните по </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/confluence/embded_diagram/confluence_view_more.webp\\" alt=\\"confluence_view_more\\"></p>\\n</li>\\n<li>\\n<p>Введите в поиск «iframe» и выберите блок <strong>Iframe</strong>:</p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-38/media/screenshots/confluence/embded_diagram/confluence_iframe_block.webp\\" alt=\\"confluence_iframe_block\\"></p>\\n</li>\\n<li>\\n<p>В открывшемся окне настроек блока <strong>Iframe</strong> введите в поля справа следующие значения:</p>\\n</li>\\n</ol>\\n<ul>\\n<li>URL — укажите ссылку на iframe из скопированного кода (формата: <code>https://new-test.stormbpmn.com/app/diagram/bb7a69c1-e1a9-4140-8e98-e5aead2cb54b?overlays=...</code>).</li>\\n<li>Width — задайте 100%.</li>\\n<li>Height — по желанию.</li>\\n</ul>\\n<p>Остальные параметры опциональны.</p>\\n</details>"}');
export {
  index_html as comp,
  data
};
//# sourceMappingURL=index.html-CX8R6dT0.js.map
