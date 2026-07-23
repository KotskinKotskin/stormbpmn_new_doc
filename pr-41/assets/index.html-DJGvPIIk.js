import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, e as withCtx, f as createStaticVNode, o as openBlock } from "./app-63InvP7F.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container info" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  const _component_RouteLink = resolveComponent("RouteLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[14] || (_cache[14] = createBaseVNode(
      "h1",
      {
        id: "результаты-и-прохождение-опросов",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#результаты-и-прохождение-опросов"
        }, [
          createBaseVNode("span", null, "Результаты и прохождение опросов")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createBaseVNode(
        "strong",
        null,
        "Опросы",
        -1
        /* CACHED */
      )),
      _cache[1] || (_cache[1] = createTextVNode(
        " в ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[2] || (_cache[2] = createTextVNode(
        " позволяют собирать обратную связь по бизнес-процессам, BPMN-моделям или независимым темам. Функция работает в двух режимах: для респондента, который отвечает на вопросы, и для автора, который анализирует полученные данные.",
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode(
        "Создание и настройка вопросов описаны в статье ",
        -1
        /* CACHED */
      )),
      createVNode(_component_RouteLink, { to: "/all/survey_results/all/surveys/" }, {
        default: withCtx(() => [..._cache[3] || (_cache[3] = [
          createTextVNode(
            "Опросы",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _cache[5] || (_cache[5] = createTextVNode(
        ". В этой статье рассмотрены только сценарии прохождения и анализа результатов.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[15] || (_cache[15] = createStaticVNode('<h2 id="прохождение-опроса-для-респондента" tabindex="-1"><a class="header-anchor" href="#прохождение-опроса-для-респондента"><span>Прохождение опроса (для респондента)</span></a></h2><p>Респондент получает доступ к опросу по ссылке или через интерфейс платформы. Интерфейс прохождения опроса доступен по адресу <code>/app/feedback/{surveyId}/respond</code>.</p><ol><li><p>На странице опроса отображается название опроса и приветственное сообщение (если оно было добавлено автором).</p></li><li><p>Кликните по кнопке <strong>Начать</strong>, чтобы приступить к ответам.</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/survey_results/survey_results/survey_start.webp" alt="survey_start"></p></li><li><p>Отвечайте на вопросы последовательно. Типы полей зависят от настроек вопроса (например, радиокнопки для выбора одного варианта).</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/survey_results/survey_results/survey_questions.webp" alt="survey_questions"></p></li><li><p>После ответа на последний вопрос отобразится финальное сообщение, заданное автором опроса.</p></li></ol><div class="hint-container info"><p class="hint-container-title">Ограничение доступа</p><p>Если у вас нет прав на прохождение опроса, вы увидите сообщение: «Опрос доступен только для просмотра. Запросите у автора права, чтобы пройти его или внести изменения.»</p></div><h2 id="просмотр-результатов-для-автора" tabindex="-1"><a class="header-anchor" href="#просмотр-результатов-для-автора"><span>Просмотр результатов (для автора)</span></a></h2><p>Автор опроса может просматривать сводку ответов, анализировать их с помощью AI и выгружать сырые данные. Страница результатов доступна по адресу <code>/app/feedback/{surveyId}/summary</code>.</p><h3 id="сводка-ответов" tabindex="-1"><a class="header-anchor" href="#сводка-ответов"><span>Сводка ответов</span></a></h3><p>На главной странице результатов отображается:</p><ul><li><p>Название опроса.</p></li><li><p>Общее количество ответов.</p></li><li><p>Визуализация ответов по каждому вопросу (графики, диаграммы или текстовые блоки).</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/survey_results/survey_results/survey_summary.webp" alt="survey_summary"></p></li></ul><h3 id="инструменты-работы-с-результатами" tabindex="-1"><a class="header-anchor" href="#инструменты-работы-с-результатами"><span>Инструменты работы с результатами</span></a></h3><p>В верхней части страницы результатов доступны следующие действия:</p><ul><li><p><strong>AI анализ</strong> — запустить автоматический анализ ответов с помощью AI-помощника. Это позволяет быстро получить выводы, рекомендации или выявленные проблемы на основе собранных данных.</p></li><li><p><strong>Выгрузить в CSV</strong> — скачать таблицу со всеми ответами в формате CSV для дальнейшего анализа в Excel или других инструментах.</p></li><li><p><strong>Доступ</strong> — управлять правами доступа к опросу и его результатам.</p></li><li><p><strong>Завершить сбор ответов</strong> — остановить опрос. После нажатия этой кнопки новые ответы принимать не будут.</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/survey_results/survey_results/survey_actions.webp" alt="survey_actions"></p></li></ul>', 12)),
    createBaseVNode("div", _hoisted_1, [
      _cache[10] || (_cache[10] = createBaseVNode(
        "p",
        { class: "hint-container-title" },
        "AI-анализ",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[7] || (_cache[7] = createTextVNode(
          "Функция AI-анализа использует основную модель чата. Подробнее о возможностях AI в ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "product_name" }),
        _cache[8] || (_cache[8] = createTextVNode(
          " читайте в статье ",
          -1
          /* CACHED */
        )),
        createVNode(_component_RouteLink, { to: "/all/survey_results/all/ai/" }, {
          default: withCtx(() => [..._cache[6] || (_cache[6] = [
            createTextVNode(
              "Создание и изменение диаграмм с помощью AI-помощника",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _cache[9] || (_cache[9] = createTextVNode(
          ".",
          -1
          /* CACHED */
        ))
      ])
    ]),
    _cache[16] || (_cache[16] = createBaseVNode(
      "h2",
      {
        id: "управление-статусом-опроса",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#управление-статусом-опроса"
        }, [
          createBaseVNode("span", null, "Управление статусом опроса")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[17] || (_cache[17] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Автор может завершить сбор ответов в любой момент. Для этого на странице результатов нажмите кнопку "),
        createBaseVNode("strong", null, "Завершить сбор ответов"),
        createTextVNode(". Опрос перейдет в архивный статус, и респонденты больше не смогут отправлять новые ответы.")
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[12] || (_cache[12] = createTextVNode(
        "Дата окончания опроса также можно задать при создании или редактировании опроса (см. ",
        -1
        /* CACHED */
      )),
      createVNode(_component_RouteLink, { to: "/all/survey_results/all/surveys/" }, {
        default: withCtx(() => [..._cache[11] || (_cache[11] = [
          createTextVNode(
            "Опросы",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _cache[13] || (_cache[13] = createTextVNode(
        "). В этом случае опрос закроется автоматически по истечении указанного срока.",
        -1
        /* CACHED */
      ))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/all/survey_results/","title":"Результаты и прохождение опросов","lang":"ru-RU","frontmatter":{"title":"Результаты и прохождение опросов","summary":"Статья описывает, как проходить опросы в роли респондента и как автору опроса просматривать сводку результатов, выгружать данные и завершать сбор ответов.","tags":["Cовместная работа над процессами - работа в команде"],"product_name":"Stormbpmn"},"headers":[{"level":2,"title":"Прохождение опроса (для респондента)","slug":"прохождение-опроса-для-респондента","link":"#прохождение-опроса-для-респондента","children":[]},{"level":2,"title":"Просмотр результатов (для автора)","slug":"просмотр-результатов-для-автора","link":"#просмотр-результатов-для-автора","children":[{"level":3,"title":"Сводка ответов","slug":"сводка-ответов","link":"#сводка-ответов","children":[]},{"level":3,"title":"Инструменты работы с результатами","slug":"инструменты-работы-с-результатами","link":"#инструменты-работы-с-результатами","children":[]}]},{"level":2,"title":"Управление статусом опроса","slug":"управление-статусом-опроса","link":"#управление-статусом-опроса","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.47,"words":442},"filePathRelative":"all/survey_results/index.md","excerpt":"\\n<p><strong>Опросы</strong> в </p>\\n<p>Создание и настройка вопросов описаны в статье <a href=\\"/stormbpmn_new_doc/pr-41/all/survey_results/all/surveys/\\" target=\\"_blank\\">Опросы</a>. В этой статье рассмотрены только сценарии прохождения и анализа результатов.</p>\\n<h2>Прохождение опроса (для респондента)</h2>"}');
export {
  index_html as comp,
  data
};
