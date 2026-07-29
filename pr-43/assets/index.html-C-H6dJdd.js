import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-D7sJO8zT.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createBaseVNode(
      "h1",
      {
        id: "правка-материалов-документации",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#правка-материалов-документации"
        }, [
          createBaseVNode("span", null, "Правка материалов документации")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "Есть три пути внести правку в документацию ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[8] || (_cache[8] = createStaticVNode('<ul><li>С помощью встроенной в документацию функции <strong>Редактировать эту страницу</strong>.</li><li>Через стандартный для GitHub инструмент <strong>Edit file</strong>.</li><li>Локально, используя любой доступный текстовый редактор.</li></ul><p>Вне зависимости от выбранного пути внесения правок, они попадут в PR на GitHub. Для внесения точечных правок рекомендуем выбрать первые два пути, а если правок много в разных файлах и есть изменения скриншотов — удобнее будет выбрать третий путь (локальное редактирование с пушем на GitHub).</p><h2 id="правка-материалов-с-помощью-встроеннои-в-документацию-функции-редактирования" tabindex="-1"><a class="header-anchor" href="#правка-материалов-с-помощью-встроеннои-в-документацию-функции-редактирования"><span>Правка материалов с помощью встроенной в документацию функции редактирования</span></a></h2><p>На странице с интересующим вас материалом кликните по ссылке снизу страницы <strong>Редактировать эту страницу</strong>:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/doc/edit/doc_edit.webp" alt=""></p><p>После клика по ссылке — вас перенаправит на соответствующий файл на GitHub для дальнейшего редактирования с помощью функции <strong>Edit file</strong>. Функция <strong>Редактировать эту страницу</strong> — это просто более удобная обертка вокруг основной функции редактирования <strong>Edit file</strong>.</p><p>Далее все последующие действия идентичны секции <strong>Правка материалов через GitHub</strong>.</p><h2 id="правка-материалов-через-github" tabindex="-1"><a class="header-anchor" href="#правка-материалов-через-github"><span>Правка материалов через GitHub</span></a></h2>', 8)),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode(
        "Если вы заметили какую-то неточность или ошибку в документации — ее можно поправить прямо в репозитории с помощью встроенного инструмента — ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "git.pencil" }),
      _cache[3] || (_cache[3] = createTextVNode(
        " (карандаш для редактирования файлов). Нажмите на ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "git.pencil" }),
      _cache[4] || (_cache[4] = createTextVNode(
        ", внесите правку в документ и нажмите на кнопку ",
        -1
        /* CACHED */
      )),
      _cache[5] || (_cache[5] = createBaseVNode(
        "strong",
        null,
        "Commit changes",
        -1
        /* CACHED */
      )),
      _cache[6] || (_cache[6] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[9] || (_cache[9] = createStaticVNode('<p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/git_commit_changes.webp" alt="git_commit_changes"></p><p>В открывшемся окне <strong>Propose changes</strong>:</p><ol><li>Заполните поле <strong>Commit message</strong>: укажите кратко, какие изменения были внесены.</li><li>По желанию заполните <strong>Extended description</strong>: опишите более детально, какие правки были внесены.</li><li>Переключите чекбокс выбора способа коммитмента на <strong>Create a new branch for this commit and start a pull request</strong>.</li><li>Название новой ветви должно отражать суть внесенных изменений. Например: patch, fix, edit.</li><li>Нажмите кнопку <strong>Propose changes</strong>.</li></ol><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/git_propose_changes.webp" alt="git_propose_changes"></p><p>После нажатия на кнопку <strong>Propose changes</strong> откроется окно подготовки PR (Pull Request):</p><ul><li>Поле <strong>Add a title</strong> будет автоматически заполнено с предыдущего шага.</li><li>Текстовый блок <strong>Add a description</strong> также будет заполнен автоматически, если до этого было заполнено поле <strong>Extended description</strong>.</li><li>Кнопка <strong>Create pull request</strong> создаст новую ветвь и запрос на внесение изменений в основную ветвь репозитория.</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/git_pr_prepare.webp" alt="git_pr_prepare"></p><p>После оформления PR, сборка документации для предпросмотра будет выполнена автоматически. Если сборка прошла успешно — в комментарии появится ссылка на собранную документацию:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/build_ready.webp" alt="build_ready"></p><p>После проверки сборки документации нужно призвать ревьюера в <strong>PR</strong>, так как без его согласия и ревью применить правки нельзя — ветка <strong>main</strong> защищена от бесконтрольного вливания изменений. Для призыва ревьюера нажмите на пункт <strong>Reviewers</strong> справа вверху от первого комментария и выберите из списка любого ревьюера:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/reviewer_call.webp" alt="reviewer_call"></p><p>Ревьюер будет оповещен и проверит <strong>PR</strong>. После этого <strong>PR</strong> вольют в основной репозиторий.</p><h2 id="правка-материалов-документации-локально" tabindex="-1"><a class="header-anchor" href="#правка-материалов-документации-локально"><span>Правка материалов документации локально</span></a></h2><div class="hint-container info"><p class="hint-container-title">Требования к локальному окружению</p><p>Для правки материалов документации локально вам понадобится установленный и настроенный Git локально.</p></div><p>Если перечисленные ранее способы правки документации вам кажутся неудобными или вы просто привыкли работать локально, то вы можете скачать себе на машину репозиторий с документацией внести правки и отправить PR на ревью.</p><p>Ещё одним преимуществом редактирования документации локально является возможность быстрого и удобного редактирования скриншотов. Скачать и отредактировать документацию можно в несколько шагов:</p><ol><li>Перейдите по ссылке: https://github.com/KotskinKotskin/stormbpmn_new_doc.</li><li>Кликните на зелёную кнопку <strong>&lt;&gt; Code</strong>.</li><li>Скопируйте адрес из поля: <code>https://github.com/KotskinKotskin/stormbpmn_new_doc.git</code>.</li><li>Перейдите в каталог, куда хотите склонировать репозиторий с документацией и выполните команду <code>git clone https://github.com/KotskinKotskin/stormbpmn_new_doc.git</code>. Обратите внимание в директории будет создана папка <code>stormbpmn_new_doc</code> с исходными материала документации.</li><li>Перейдите в директорию с исходными материалами документации.</li><li>Выполните команду <code>git status</code>, чтобы убедиться что активировали локальный репозиторий.</li><li>Создайте собственную ветку командой <code>git checkout -b _branch_name_</code>, где будет вестись работа по внесению правок в документацию.</li><li>Теперь можно вносить правки в документацию.</li><li>Когда правки будут внесены, их нужно зафиксировать последовательностью команд <code>git add -A</code> -&gt; <code>git commit -m &quot;Some comment&quot;</code>.</li><li>Если правок больше нет, зафиксированные исправления можно отправлять у удалённый репозиторий командой <code>git push origin</code>.</li><li>После отправки изменений, в терминал будет выведен адрес PR, по которому можно кликнуть и перейте сразу в репозиторий на созданный PR.</li><li>Запустится автоматическая сборка документации и бот принесёт в комментарии ссылку на предпросмотр.</li><li>Далее модератор проверит правки, если они верны — PR будет принят и в дальнейшем влит в основную документацию.</li></ol>', 17))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/about_doc/edit/","title":"Правка материалов документации","lang":"ru-RU","frontmatter":{"title":"Правка материалов документации","git":{"pencil":"<i class=\\"fa-solid fa-pencil\\"></i>"},"product_name":"Stormbpmn"},"headers":[{"level":2,"title":"Правка материалов с помощью встроенной в документацию функции редактирования","slug":"правка-материалов-с-помощью-встроеннои-в-документацию-функции-редактирования","link":"#правка-материалов-с-помощью-встроеннои-в-документацию-функции-редактирования","children":[]},{"level":2,"title":"Правка материалов через GitHub","slug":"правка-материалов-через-github","link":"#правка-материалов-через-github","children":[]},{"level":2,"title":"Правка материалов документации локально","slug":"правка-материалов-документации-локально","link":"#правка-материалов-документации-локально","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.34,"words":701},"filePathRelative":"main/about_doc/edit/index.md","excerpt":"\\n<p>Есть три пути внести правку в документацию </p>\\n<ul>\\n<li>С помощью встроенной в документацию функции <strong>Редактировать эту страницу</strong>.</li>\\n<li>Через стандартный для GitHub инструмент <strong>Edit file</strong>.</li>\\n<li>Локально, используя любой доступный текстовый редактор.</li>\\n</ul>"}');
export {
  index_html as comp,
  data
};
