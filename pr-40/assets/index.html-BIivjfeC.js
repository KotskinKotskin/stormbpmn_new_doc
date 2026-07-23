import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-BZnvfINg.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[21] || (_cache[21] = createBaseVNode(
      "h1",
      {
        id: "коммит-в-документацию",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#коммит-в-документацию"
        }, [
          createBaseVNode("span", null, "Коммит в документацию")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "Документация ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " находится в репозитории ",
        -1
        /* CACHED */
      )),
      createBaseVNode("strong", null, [
        createVNode(_component_Fm, { p: "repo_url" })
      ]),
      _cache[2] || (_cache[2] = createTextVNode(
        " и открыта для коммитмента всем желающим. Чтобы процесс создания и правки материалов был простым — мы написали эту статью, в которой расскажем, как правильно подойти к работе с репозиторием и документацией по шагам.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[22] || (_cache[22] = createStaticVNode('<p>Сначала расскажем о том, как устроена документация, чтобы вам было проще ориентироваться в ней.</p><h2 id="устроиство-документации" tabindex="-1"><a class="header-anchor" href="#устроиство-документации"><span>Устройство документации</span></a></h2><p>В корневой директории документации находятся следующие файлы:</p><ul><li><code>toc.yaml</code> — оглавление документации. После добавления новых страниц материалов их необходимо внести в оглавление. Пути указываются от корня документации. Если в названии материала присутствует двоеточие — применяются одинарные кавычки.</li><li><code>vars.yaml</code> — переменные документации для текущей локали.</li><li><code>global_vars.yaml</code> — общие переменные для всех локалий.</li><li><code>index.md</code> — домашняя страница документации.</li><li><code>umda.yml</code> — конфигурационный файл системы препроцессенга MarkDown-файлов UMDA.</li></ul><p>Структура документации:</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>.\n├── _templates # Шаблоны уведомлений\n├── admins     # Материалы для администраторов команд\n├── all        # Материалы для всех\n├── analytics  # Материалы для аналитиков\n├── approvals  # Материалы для ревьюнеров и согласующих\n├── architects # Материалы для системных архитекторов\n├── beginners  # Материалы для начинающих\n├── main       # Материалы для разделов FAQ, быстрый старт, видеозаписи, о документации \n├── vars       # Техническая секция документации. Поддиректория содержит `.yml`-файлы с переменными, которые входят в состав vars.yaml \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Статьи размещены в поддиректориях в файлах <code>index.md</code>. Текст статей пишется в Markdown-формате. Применение HTML-разметки не запрещено.</p><h2 id="правка-материалов" tabindex="-1"><a class="header-anchor" href="#правка-материалов"><span>Правка материалов</span></a></h2>', 8)),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode(
        "Если вы заметили какую-то неточность или ошибку в документации — ее можно поправить прямо в репозитории с помощью встроенного инструмента — ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "git.pencil" }),
      _cache[4] || (_cache[4] = createTextVNode(
        " (карандаш для редактирования файлов). Нажмите на ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "git.pencil" }),
      _cache[5] || (_cache[5] = createTextVNode(
        ", внесите правку в документ и нажмите на кнопку ",
        -1
        /* CACHED */
      )),
      _cache[6] || (_cache[6] = createBaseVNode(
        "strong",
        null,
        "Commit changes",
        -1
        /* CACHED */
      )),
      _cache[7] || (_cache[7] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[23] || (_cache[23] = createStaticVNode('<p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/git_commit_changes.webp" alt="git_commit_changes"></p><p>В открывшемся окне <strong>Propose changes</strong>:</p><ol><li>Заполните поле <strong>Commit message</strong>: укажите кратко, какие изменения были внесены.</li><li>По желанию заполните <strong>Extended description</strong>: опишите более детально, какие правки были внесены.</li><li>Переключите чекбокс выбора способа коммитмента на <strong>Create a new branch for this commit and start a pull request</strong>.</li><li>Название новой ветви должно отражать суть внесенных изменений. Например: patch, fix, edit.</li><li>Нажмите кнопку <strong>Propose changes</strong>.</li></ol><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/git_propose_changes.webp" alt="git_propose_changes"></p><p>После нажатия на кнопку <strong>Propose changes</strong> откроется окно подготовки PR (Pull Request):</p><ul><li>Поле <strong>Add a title</strong> будет автоматически заполнено с предыдущего шага.</li><li>Текстовый блок <strong>Add a description</strong> также будет заполнен автоматически, если до этого было заполнено поле <strong>Extended description</strong>.</li><li>Кнопка <strong>Create pull request</strong> создаст новую ветвь и запрос на внесение изменений в основную ветвь репозитория.</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/git_pr_prepare.webp" alt="git_pr_prepare"></p><p>После оформления PR, сборка документации для предпросмотра будет выполнена автоматически. Если сборка прошла успешно — в комментарии появится ссылка на собранную документацию:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/build_ready.webp" alt="build_ready"></p><p>После проверки сборки документации нужно призвать ревьюера в <strong>PR</strong>, так как без его согласия и ревью применить правки нельзя — ветка <strong>main</strong> защищена от бесконтрольного вливания изменений. Для призыва ревьюера нажмите на пункт <strong>Reviewers</strong> справа вверху от первого комментария и выберите из списка любого ревьюера:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/reviewer_call.webp" alt="reviewer_call"></p><p>Ревьюер будет оповещен и проверит <strong>PR</strong>. После этого <strong>PR</strong> вольют в основной репозиторий.</p><h2 id="добавление-новых-материалов" tabindex="-1"><a class="header-anchor" href="#добавление-новых-материалов"><span>Добавление новых материалов</span></a></h2><p>Для добавления новых материалов в репозиторий необходимо сделать fork репозитория, а затем клонировать его на локальную машину. Процесс может показаться сложным и небыстрым, зато он гарантирует защиту репозитория от несанкционированных добавлений материалов, а желающим добавить новый материал предоставляет возможность сделать это привычными средствами в знакомой среде.</p><p><strong>Инструкция копирования репозитория на локальную машину</strong>:</p>', 15)),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[8] || (_cache[8] = createTextVNode(
            "Кликните по кнопке ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "git.fork" }),
          _cache[9] || (_cache[9] = createTextVNode(
            " и выберите пункт ",
            -1
            /* CACHED */
          )),
          _cache[10] || (_cache[10] = createBaseVNode(
            "strong",
            null,
            "Create a new fork",
            -1
            /* CACHED */
          )),
          _cache[11] || (_cache[11] = createTextVNode(
            " из выпадающего списка:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[12] || (_cache[12] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/git_fork_repo.webp",
              alt: "git_fork_repo"
            })
          ],
          -1
          /* CACHED */
        )),
        _cache[13] || (_cache[13] = createBaseVNode(
          "p",
          null,
          "Будет сделан fork репозитория в ваше GitHub-пространство.",
          -1
          /* CACHED */
        ))
      ]),
      _cache[14] || (_cache[14] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Кликните по зеленой кнопке "),
            createBaseVNode("strong", null, "<> Code"),
            createTextVNode(" и в появившемся меню нажмите на кнопку "),
            createBaseVNode("strong", null, "копировать"),
            createTextVNode(" справа от поля с URL репозитория:")
          ]),
          createBaseVNode("p", null, [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/git_clone.webp",
              alt: "git_clone"
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[15] || (_cache[15] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Перейдите в терминал своей ОС или IDE, перейдите в директорию, в которую хотите скопировать репозиторий, и введите команду: "),
            createBaseVNode("code", null, "git clone <Ctr+v>"),
            createTextVNode(". Будет создана одноименная с репозиторием директория, где будет находиться содержимое репозитория.")
          ])
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[24] || (_cache[24] = createStaticVNode("<p><strong>Последовательность создания статьи</strong>:</p><ol><li>Перейдите в клонированный репозиторий, создайте новую ветку, в которой будете вести разработку материала: <code>git checkout -b &lt;branch_name&gt;</code>. Старайтесь называть ветви осознанно и интуитивно понятно, например, если вы пишете для аналитиков, то название ветви может быть таким: <code>analytics/add_process</code>.</li><li>Выполните команду <code>git branch</code>, чтобы убедиться, что вы находитесь в нужной вам ветке. Текущая ветка будет помечена звездочкой.</li><li>Создайте поддиректорию в нужной вам части документации (см. «Устройство документации» выше), создайте <code>index.md</code> и <code>.meta.yml</code>. Заполните <code>index.md</code> и укажите новую статью в <code>toc.yaml</code>.</li><li>Сохраните изменения в git последовательностью команд:</li></ol><ul><li><code>git add -A</code> — добавить все отслеживаемые файлы, которые были изменены в коммит.</li><li><code>git commit -m &quot;что было сделано&quot;</code> — добавить все изменения в <strong>PR</strong>.</li><li><code>git push origin</code> — отправить ветку в удаленный репозиторий и создать <strong>PR</strong>.</li></ul>", 3)),
    createBaseVNode("p", null, [
      _cache[16] || (_cache[16] = createTextVNode(
        "Перейдите в репозиторий ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "repo_url" }),
      _cache[17] || (_cache[17] = createTextVNode(
        ", нажмите на кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "git.pr" }),
      _cache[18] || (_cache[18] = createTextVNode(
        " в верхней панели инструментов и кликните по своему ",
        -1
        /* CACHED */
      )),
      _cache[19] || (_cache[19] = createBaseVNode(
        "strong",
        null,
        "PR",
        -1
        /* CACHED */
      )),
      _cache[20] || (_cache[20] = createTextVNode(
        " в списке пул-реквестов:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[25] || (_cache[25] = createStaticVNode('<p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/git_choose_pr.webp" alt="git_choose_pr"></p><p>Откроется окно подготовки <strong>PR</strong> (Pull Request):</p><ul><li>Поле <strong>Add a title</strong> будет автоматически заполнено.</li><li>Текстовый блок <strong>Add a description</strong> должен содержать список выполненных работ по документации.</li><li>Кнопка <strong>Create pull request</strong> создаст запрос на внесение изменений в основную ветвь репозитория.</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/git_pr_prepare.webp" alt="git_pr_prepare"></p><p>После создания PR, автоматически запустится сборка документации для предварительного просмотра. Если сборка прошла успешно — в комментарии появится ссылка на собранную документацию:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/build_ready.webp" alt="build_ready"></p><p>После проверки сборки документации нужно призвать ревьюера в <strong>PR</strong>, так как без его согласия и ревью применить правки нельзя — ветка <strong>main</strong> защищена от бесконтрольного вливания изменений. Для призыва ревьюера нажмите на пункт <strong>Reviewers</strong> справа вверху от первого комментария и выберите из списка любого ревьюера:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-40/media/screenshots/git/commitment/reviewer_call.webp" alt="reviewer_call"></p><p>Ревьюер будет оповещен и проверит <strong>PR</strong>. После этого <strong>PR</strong> вольют в основной репозиторий.</p>', 9))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/about_doc/commitment/","title":"Коммит в документацию","lang":"ru-RU","frontmatter":{"title":"Коммит в документацию","git":{"fork":"<i class=\\"fa-solid fa-code-fork\\"></i> **Fork**","pencil":"<i class=\\"fa-solid fa-pencil\\"></i>","pr":"<i class=\\"fa-solid fa-code-pull-request\\"></i> **Pull requests**"},"product_name":"Stormbpmn","repo_url":"https://github.com/KotskinKotskin/stormbpmn_new_doc"},"headers":[{"level":2,"title":"Устройство документации","slug":"устроиство-документации","link":"#устроиство-документации","children":[]},{"level":2,"title":"Правка материалов","slug":"правка-материалов","link":"#правка-материалов","children":[]},{"level":2,"title":"Добавление новых материалов","slug":"добавление-новых-материалов","link":"#добавление-новых-материалов","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.15,"words":945},"filePathRelative":"main/about_doc/commitment/index.md","excerpt":"\\n<p>Документация </p>\\n<p>Сначала расскажем о том, как устроена документация, чтобы вам было проще ориентироваться в ней.</p>\\n<h2>Устройство документации</h2>\\n<p>В корневой директории документации находятся следующие файлы:</p>\\n<ul>\\n<li><code>toc.yaml</code> — оглавление документации. После добавления новых страниц материалов их необходимо внести в оглавление. Пути указываются от корня документации. Если в названии материала присутствует двоеточие — применяются одинарные кавычки.</li>\\n<li><code>vars.yaml</code> — переменные документации для текущей локали.</li>\\n<li><code>global_vars.yaml</code> — общие переменные для всех локалий.</li>\\n<li><code>index.md</code> — домашняя страница документации.</li>\\n<li><code>umda.yml</code> — конфигурационный файл системы препроцессенга MarkDown-файлов UMDA.</li>\\n</ul>"}');
export {
  index_html as comp,
  data
};
