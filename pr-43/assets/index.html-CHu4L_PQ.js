import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, e as withCtx, f as createStaticVNode, o as openBlock } from "./app-D7sJO8zT.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  const _component_RouteLink = resolveComponent("RouteLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[19] || (_cache[19] = createBaseVNode(
      "h1",
      {
        id: "написание-статеи-в-документацию",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#написание-статеи-в-документацию"
        }, [
          createBaseVNode("span", null, "Написание статей в документацию")
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
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode(
        "Если отредактировать статью можно тремя разными способами, описанными ",
        -1
        /* CACHED */
      )),
      createVNode(_component_RouteLink, { to: "/main/about_doc/edit/" }, {
        default: withCtx(() => [..._cache[3] || (_cache[3] = [
          createTextVNode(
            "тут",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _cache[5] || (_cache[5] = createTextVNode(
        ", то создать статью проще всего локально и далее — запушить её в удаленный репозиторий. Это самый простой и надёжный способ, не имеющий ограничений. Другие способы, такие как создание статей через gitHub, имеют ряд серьёзных ограничений:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[20] || (_cache[20] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "Нельзя вносить изменения более чем в один файл за коммит."),
        createBaseVNode("li", null, "Важна строгая последовательность действий: сначала создаётся статья, потом добавляются скриншоты, затем статья подключается в оглавление.")
      ],
      -1
      /* CACHED */
    )),
    _cache[21] || (_cache[21] = createBaseVNode(
      "p",
      null,
      "Именно поэтому мы рекомендуем создавать статьи локально.",
      -1
      /* CACHED */
    )),
    _cache[22] || (_cache[22] = createBaseVNode(
      "h2",
      {
        id: "добавление-новых-материалов-в-документацию",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#добавление-новых-материалов-в-документацию"
        }, [
          createBaseVNode("span", null, "Добавление новых материалов в документацию")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[23] || (_cache[23] = createBaseVNode(
      "p",
      null,
      "Для добавления новых материалов в репозиторий необходимо сделать fork репозитория, а затем клонировать его на локальную машину. Процесс может показаться сложным и небыстрым, зато он гарантирует защиту репозитория от несанкционированных добавлений материалов, а желающим добавить новый материал предоставляет возможность сделать это привычными средствами в знакомой среде.",
      -1
      /* CACHED */
    )),
    _cache[24] || (_cache[24] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("strong", null, "Инструкция копирования репозитория на локальную машину"),
        createTextVNode(":")
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[6] || (_cache[6] = createTextVNode(
            "Кликните по кнопке ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "git.fork" }),
          _cache[7] || (_cache[7] = createTextVNode(
            " и выберите пункт ",
            -1
            /* CACHED */
          )),
          _cache[8] || (_cache[8] = createBaseVNode(
            "strong",
            null,
            "Create a new fork",
            -1
            /* CACHED */
          )),
          _cache[9] || (_cache[9] = createTextVNode(
            " из выпадающего списка:",
            -1
            /* CACHED */
          ))
        ]),
        _cache[10] || (_cache[10] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/git_fork_repo.webp",
              alt: "git_fork_repo"
            })
          ],
          -1
          /* CACHED */
        )),
        _cache[11] || (_cache[11] = createBaseVNode(
          "p",
          null,
          "Будет сделан fork репозитория в ваше GitHub-пространство.",
          -1
          /* CACHED */
        ))
      ]),
      _cache[12] || (_cache[12] = createBaseVNode(
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
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/git_clone.webp",
              alt: "git_clone"
            })
          ])
        ],
        -1
        /* CACHED */
      )),
      _cache[13] || (_cache[13] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("Перейдите в терминал своей ОС или IDE, перейдите в директорию, в которую хотите скопировать репозиторий, и введите команду: "),
            createBaseVNode("code", null, "git clone <Ctrl+v>"),
            createTextVNode(". Будет создана одноименная с репозиторием директория, где будет находиться содержимое репозитория.")
          ])
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[25] || (_cache[25] = createStaticVNode("<p><strong>Последовательность создания статьи</strong>:</p><ol><li>Перейдите в клонированный репозиторий, создайте новую ветку, в которой будете вести разработку материала: <code>git checkout -b &lt;branch_name&gt;</code>. Старайтесь называть ветви осознанно и интуитивно понятно, например, если вы пишете для аналитиков, то название ветви может быть таким: <code>analytics/add_process</code>.</li><li>Выполните команду <code>git branch</code>, чтобы убедиться, что вы находитесь в нужной вам ветке. Текущая ветка будет помечена звездочкой.</li><li>Создайте поддиректорию в нужной вам части документации (см. «Устройство документации» выше), создайте <code>index.md</code> и <code>.meta.yml</code>. Заполните <code>index.md</code> и укажите новую статью в <code>toc.yaml</code>.</li><li>Сохраните изменения в git последовательностью команд:</li></ol><ul><li><code>git add -A</code> — добавить все отслеживаемые файлы, которые были изменены в коммит.</li><li><code>git commit -m &quot;что было сделано&quot;</code> — добавить все изменения в <strong>PR</strong>.</li><li><code>git push origin</code> — отправить ветку в удаленный репозиторий и создать <strong>PR</strong>.</li></ul>", 3)),
    createBaseVNode("p", null, [
      _cache[14] || (_cache[14] = createTextVNode(
        "Перейдите в репозиторий ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "repo_url" }),
      _cache[15] || (_cache[15] = createTextVNode(
        ", нажмите на кнопку ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "git.pr" }),
      _cache[16] || (_cache[16] = createTextVNode(
        " в верхней панели инструментов и кликните по своему ",
        -1
        /* CACHED */
      )),
      _cache[17] || (_cache[17] = createBaseVNode(
        "strong",
        null,
        "PR",
        -1
        /* CACHED */
      )),
      _cache[18] || (_cache[18] = createTextVNode(
        " в списке пул-реквестов:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[26] || (_cache[26] = createStaticVNode('<p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/git_choose_pr.webp" alt="git_choose_pr"></p><p>Откроется окно подготовки <strong>PR</strong> (Pull Request):</p><ul><li>Поле <strong>Add a title</strong> будет автоматически заполнено.</li><li>Текстовый блок <strong>Add a description</strong> должен содержать список выполненных работ по документации.</li><li>Кнопка <strong>Create pull request</strong> создаст запрос на внесение изменений в основную ветвь репозитория.</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/git_pr_prepare.webp" alt="git_pr_prepare"></p><p>После создания PR, автоматически запустится сборка документации для предварительного просмотра. Если сборка прошла успешно — в комментарии появится ссылка на собранную документацию:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/build_ready.webp" alt="build_ready"></p><p>После проверки сборки документации нужно призвать ревьюера в <strong>PR</strong>, так как без его согласия и ревью применить правки нельзя — ветка <strong>main</strong> защищена от бесконтрольного вливания изменений. Для призыва ревьюера нажмите на пункт <strong>Reviewers</strong> справа вверху от первого комментария и выберите из списка любого ревьюера:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-43/media/screenshots/git/commitment/reviewer_call.webp" alt="reviewer_call"></p><p>Ревьюер будет оповещен и проверит <strong>PR</strong>. После этого <strong>PR</strong> вольют в основной репозиторий.</p>', 9))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/about_doc/commitment/","title":"Написание статей в документацию","lang":"ru-RU","frontmatter":{"title":"Написание статей в документацию","git":{"fork":"<i class=\\"fa-solid fa-code-fork\\"></i> **Fork**","pr":"<i class=\\"fa-solid fa-code-pull-request\\"></i> **Pull requests**"},"product_name":"Stormbpmn","repo_url":"https://github.com/KotskinKotskin/stormbpmn_new_doc"},"headers":[{"level":2,"title":"Добавление новых материалов в документацию","slug":"добавление-новых-материалов-в-документацию","link":"#добавление-новых-материалов-в-документацию","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.98,"words":594},"filePathRelative":"main/about_doc/commitment/index.md","excerpt":"\\n<p>Документация </p>\\n<p>Если отредактировать статью можно тремя разными способами, описанными <a href=\\"/stormbpmn_new_doc/pr-43/main/about_doc/edit/\\" target=\\"_blank\\">тут</a>, то создать статью проще всего локально и далее — запушить её в удаленный репозиторий. Это самый простой и надёжный способ, не имеющий ограничений. Другие способы, такие как создание статей через gitHub, имеют ряд серьёзных ограничений:</p>"}');
export {
  index_html as comp,
  data
};
