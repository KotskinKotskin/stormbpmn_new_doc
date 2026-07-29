import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, e as withCtx, f as createStaticVNode, o as openBlock } from "./app-D7sJO8zT.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouteLink = resolveComponent("RouteLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createBaseVNode(
      "h1",
      {
        id: "структура-документации",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#структура-документации"
        }, [
          createBaseVNode("span", null, "Структура документации")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[8] || (_cache[8] = createBaseVNode(
      "p",
      null,
      "В корневой директории документации находятся следующие файлы:",
      -1
      /* CACHED */
    )),
    createBaseVNode("ul", null, [
      _cache[4] || (_cache[4] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("code", null, "nav.yaml"),
          createTextVNode(" — оглавление документации. После добавления новых страниц материалов их необходимо внести в оглавление. Пути указываются от корня документации. Если в названии материала присутствует двоеточие — применяются одинарные кавычки.")
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createBaseVNode(
          "code",
          null,
          "vars.yaml",
          -1
          /* CACHED */
        )),
        _cache[2] || (_cache[2] = createTextVNode(
          " — сборный файл с переменными документации. Почитать как работать с переменными можно ",
          -1
          /* CACHED */
        )),
        createVNode(_component_RouteLink, { to: "/main/about_doc/vars/" }, {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createTextVNode(
              "тут",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _cache[3] || (_cache[3] = createTextVNode(
          ".",
          -1
          /* CACHED */
        ))
      ]),
      _cache[5] || (_cache[5] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("code", null, "index.md"),
          createTextVNode(" — домашняя страница документации.")
        ],
        -1
        /* CACHED */
      )),
      _cache[6] || (_cache[6] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("code", null, "umda.yml"),
          createTextVNode(" — конфигурационный файл системы препроцессенга MarkDown-файлов UMDA.")
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[9] || (_cache[9] = createStaticVNode('<p>Структура документации по состаянию на 26.07.2026:</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>.\n├── _templates # Шаблоны уведомлений\n├── admins     # Материалы для администраторов команд\n├── all        # Материалы для всех\n├── analytics  # Материалы для аналитиков\n├── approvals  # Материалы для ревьюнеров и согласующих\n├── architects # Материалы для системных архитекторов\n├── beginners  # Материалы для начинающих\n├── media      # Хранилище скриншотов\n├── main       # Материалы для разделов FAQ, быстрый старт, видеозаписи, о документации \n├── vars       # Техническая секция документации. Поддиректория содержит `.yml`-файлы с переменными, которые входят в состав vars.yaml \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Статьи размещены в поддиректориях в файлах <code>index.md</code>. Текст статей пишется в Markdown-формате. Применение HTML-разметки не запрещено.</p>', 3))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/about_doc/structure/","title":"Структура документации","lang":"ru-RU","frontmatter":{"title":"Структура документации"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.51,"words":152},"filePathRelative":"main/about_doc/structure/index.md","excerpt":"\\n<p>В корневой директории документации находятся следующие файлы:</p>\\n<ul>\\n<li><code>nav.yaml</code> — оглавление документации. После добавления новых страниц материалов их необходимо внести в оглавление. Пути указываются от корня документации. Если в названии материала присутствует двоеточие — применяются одинарные кавычки.</li>\\n<li><code>vars.yaml</code> — сборный файл с переменными документации. Почитать как работать с переменными можно <a href=\\"/stormbpmn_new_doc/pr-43/main/about_doc/vars/\\" target=\\"_blank\\">тут</a>.</li>\\n<li><code>index.md</code> — домашняя страница документации.</li>\\n<li><code>umda.yml</code> — конфигурационный файл системы препроцессенга MarkDown-файлов UMDA.</li>\\n</ul>"}');
export {
  index_html as comp,
  data
};
