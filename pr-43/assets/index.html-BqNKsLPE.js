import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-D7sJO8zT.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[18] || (_cache[18] = createBaseVNode(
      "h1",
      {
        id: "работа-с-переменными",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#работа-с-переменными"
        }, [
          createBaseVNode("span", null, "Работа с переменными")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "Переменные в документации ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " занимают одно из ключевых мест в её технической составляющей. Они обеспечивают однообразие использования информации, сокращают количество ошибок и унифицируют работу с документацией. Переменные используются для обозначения любых активных элементов интерфейсов: кнопок, переключателей, активных полей — всего, у чего есть инфографика.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[19] || (_cache[19] = createStaticVNode('<p>Переменные распределены по классам и типам и содержатся в <code>.yml</code> файлах в директории <code>vars</code>. Файлы с переменными подключаются в главный сводный файл <code>vars.yml</code>, который находится в корне документации.</p><p>Указываются переменные в тексте и ссылках с помощью двойных фигурных скобок: <code>{{</code> и <code>}}</code>. Сама же ссылка на значение переменной может содержать произвольное количество вложенной иерархии, обозначающейся через точку. Например: переменная <code>folders.folder_up</code> будет заменена на значение <i class="pi pi-arrow-up"></i> <strong>Поднять папку на самый верхний уровень</strong>.</p><h2 id="добавление-переменных" tabindex="-1"><a class="header-anchor" href="#добавление-переменных"><span>Добавление переменных</span></a></h2>', 3)),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode(
        "У каждой переменной есть своё место в файлах переменных, которые повторяют структуру интерфейса ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[3] || (_cache[3] = createTextVNode(
        ". Название ",
        -1
        /* CACHED */
      )),
      _cache[4] || (_cache[4] = createBaseVNode(
        "code",
        null,
        ".yml",
        -1
        /* CACHED */
      )),
      _cache[5] || (_cache[5] = createTextVNode(
        " файла в директории ",
        -1
        /* CACHED */
      )),
      _cache[6] || (_cache[6] = createBaseVNode(
        "code",
        null,
        "vars",
        -1
        /* CACHED */
      )),
      _cache[7] || (_cache[7] = createTextVNode(
        " указывает на интерфейс ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[8] || (_cache[8] = createTextVNode(
        ", а имя самой переменной — на конкретный активный элемент интерфейса ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[9] || (_cache[9] = createTextVNode(
        ".",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("p", null, [
      _cache[10] || (_cache[10] = createTextVNode(
        "Перед добавлением переменной сначала убедитесь в том, что такой переменной ещё нет в ",
        -1
        /* CACHED */
      )),
      _cache[11] || (_cache[11] = createBaseVNode(
        "code",
        null,
        ".yml",
        -1
        /* CACHED */
      )),
      _cache[12] || (_cache[12] = createTextVNode(
        "-файлах. Если нужной вам переменной нет и вы хотите её добавить, например, это переменная, обозначающая кнопку с инфографикой в интерфейсе ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[13] || (_cache[13] = createTextVNode(
        " — откройте сначала devtools (кнопка ",
        -1
        /* CACHED */
      )),
      _cache[14] || (_cache[14] = createBaseVNode(
        "code",
        null,
        "F12",
        -1
        /* CACHED */
      )),
      _cache[15] || (_cache[15] = createTextVNode(
        "), выберите инструмент ",
        -1
        /* CACHED */
      )),
      _cache[16] || (_cache[16] = createBaseVNode(
        "strong",
        null,
        "Выделение",
        -1
        /* CACHED */
      )),
      _cache[17] || (_cache[17] = createTextVNode(
        " и кликните на нужную вам кнопку:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[20] || (_cache[20] = createStaticVNode('<p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/devtools/devtools_select.webp" alt=""></p><p>Далее обратите внимание на выделенную часть HTML-кода, в ней должен содержаться <code>i</code> или <code>span</code> элемент с классом <code>pi</code>. Например, в нашем случае — <code>pi pi-user</code>:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/app/devtools/devtools_select_class.webp" alt=""></p><p>Теперь нужно скопировать два селектора класса: <code>pi pi-user</code> и вставить их <code>main.yml</code> или в <code>vars.yml</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">acc</span><span class="token punctuation">:</span>\n  <span class="token key atrule">main_button</span><span class="token punctuation">:</span> <span class="token string">&#39;&lt;i class=&quot;pi pi-user&quot;&gt;&lt;/i&gt;&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="переменные-путеи" tabindex="-1"><a class="header-anchor" href="#переменные-путеи"><span>Переменные путей</span></a></h2><p>Особое место среди иерархии переменных занимают переменные путей скриншотов. Они находятся в файле <code>media.yml</code> и нужны для свободного изменения структуры материалов документации. Переменные путей в <code>media.yml</code> имеют следующую иерархию и структуру:</p><ul><li><p>Вначале файла идут переменные, указывающие на пути к директориям, где располагаются скриншоты:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">media</span><span class="token punctuation">:</span>\n<span class="token key atrule">screenshots</span><span class="token punctuation">:</span>\n    <span class="token key atrule">var_name</span><span class="token punctuation">:</span> path_to_media_folder\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Далее идут переменные, указывающие на сам скриншот:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">actions</span><span class="token punctuation">:</span>\n    <span class="token key atrule">proc_versioning</span><span class="token punctuation">:</span> proc_versioning\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>Так полный путь до скриншота состоит из двух переменных: <code>{{</code> <code>path to folder</code> <code>}}</code> и <code>{{</code> <code>screenshot name</code> <code>}}</code>. Такое разделение помогает структурировать переменные внутри директории <code>media</code>.</p>', 9))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/about_doc/var/","title":"Работа с переменными","lang":"ru-RU","frontmatter":{"title":"Работа с переменными","product_name":"Stormbpmn"},"headers":[{"level":2,"title":"Добавление переменных","slug":"добавление-переменных","link":"#добавление-переменных","children":[]},{"level":2,"title":"Переменные путей","slug":"переменные-путеи","link":"#переменные-путеи","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.25,"words":376},"filePathRelative":"main/about_doc/var/index.md","excerpt":"\\n<p>Переменные в документации </p>\\n<p>Переменные распределены по классам и типам и содержатся в <code>.yml</code> файлах в директории <code>vars</code>. Файлы с переменными подключаются в главный сводный файл <code>vars.yml</code>, который находится в корне документации.</p>\\n<p>Указываются переменные в тексте и ссылках с помощью двойных фигурных скобок: <code>{{</code> и <code>}}</code>. Сама же ссылка на значение переменной может содержать произвольное количество вложенной иерархии, обозначающейся через точку. Например: переменная <code>folders.folder_up</code> будет заменена на значение <i class=\\"pi pi-arrow-up\\"></i> <strong>Поднять папку на самый верхний уровень</strong>.</p>"}');
export {
  index_html as comp,
  data
};
