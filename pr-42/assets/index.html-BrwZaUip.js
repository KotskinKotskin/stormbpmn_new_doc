import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-Dm_0y6A6.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("details", _hoisted_1, [
      _cache[8] || (_cache[8] = createBaseVNode(
        "summary",
        null,
        [
          createTextVNode("Переход с базового тарифа на тарифы "),
          createBaseVNode("strong", null, "Team"),
          createTextVNode(" и "),
          createBaseVNode("strong", null, "Business")
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[0] || (_cache[0] = createTextVNode(
              "Войдите в аккаунт и в рабочее пространство ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "product_name" }),
            _cache[1] || (_cache[1] = createTextVNode(
              ".",
              -1
              /* CACHED */
            ))
          ])
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[2] || (_cache[2] = createTextVNode(
              "Кликните по кнопке ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "account_dropdown_menu.icon" }),
            _cache[3] || (_cache[3] = createTextVNode(
              " в верхней панели управления справа.",
              -1
              /* CACHED */
            ))
          ])
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            _cache[4] || (_cache[4] = createTextVNode(
              "Из выпадающего списка выберите пункт ",
              -1
              /* CACHED */
            )),
            createVNode(_component_Fm, { p: "account_dropdown_menu.upgrade_plan" }),
            _cache[5] || (_cache[5] = createTextVNode(
              ":",
              -1
              /* CACHED */
            ))
          ]),
          _cache[6] || (_cache[6] = createBaseVNode(
            "p",
            null,
            [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/profile/plan/upgrade_plan.webp",
                alt: "upgrade_plan"
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[7] || (_cache[7] = createBaseVNode(
          "li",
          null,
          [
            createBaseVNode("p", null, "Выберите интересующий вас тариф:"),
            createBaseVNode("p", null, [
              createBaseVNode("img", {
                src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/profile/plan/choose_plan.webp",
                alt: "choose_plan"
              })
            ])
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[9] || (_cache[9] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("Кликните на свернутую внизу экрана подсказку "),
          createBaseVNode("strong", null, "Сравнение тарифов"),
          createTextVNode(" для получения списка возможностей каждого тарифа и их наглядного сравнения.")
        ],
        -1
        /* CACHED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/faq/plan/","title":"","lang":"ru-RU","frontmatter":{"account_dropdown_menu":{"icon":"<i class=\\"pi pi-user\\"></i> **Профиль**","upgrade_plan":"<i class=\\"pi pi-star-fill\\"></i> **Улучшить подписку**"},"product_name":"Stormbpmn"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"main/faq/plan/index.md","excerpt":"<details class=\\"hint-container details\\"><summary>Переход с базового тарифа на тарифы <strong>Team</strong> и <strong>Business</strong></summary>\\n<ol>\\n<li>\\n<p>Войдите в аккаунт и в рабочее пространство </p>\\n</li>\\n<li>\\n<p>Кликните по кнопке </p>\\n</li>\\n<li>\\n<p>Из выпадающего списка выберите пункт </p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/profile/plan/upgrade_plan.webp\\" alt=\\"upgrade_plan\\"></p>\\n</li>\\n<li>\\n<p>Выберите интересующий вас тариф:</p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-42/media/screenshots/app/profile/plan/choose_plan.webp\\" alt=\\"choose_plan\\"></p>\\n</li>\\n</ol>\\n<p>Кликните на свернутую внизу экрана подсказку <strong>Сравнение тарифов</strong> для получения списка возможностей каждого тарифа и их наглядного сравнения.</p>\\n</details>"}');
export {
  index_html as comp,
  data
};
