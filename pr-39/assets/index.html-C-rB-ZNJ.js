import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, e as withCtx, f as createStaticVNode, o as openBlock } from "./app-CfHw5MwK.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container info" };
function _sfc_render(_ctx, _cache) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createBaseVNode(
      "h1",
      {
        id: "анализ-результатов-опросов",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#анализ-результатов-опросов"
        }, [
          createBaseVNode("span", null, "Анализ результатов опросов")
        ])
      ],
      -1
      /* CACHED */
    )),
    _cache[9] || (_cache[9] = createBaseVNode(
      "p",
      null,
      "После того как респонденты прошли опрос, вы можете проанализировать полученные данные на странице результатов. Здесь доступна общая статистика, детальные ответы и инструменты для автоматического анализа с помощью AI.",
      -1
      /* CACHED */
    )),
    createBaseVNode("div", _hoisted_1, [
      _cache[5] || (_cache[5] = createBaseVNode(
        "p",
        { class: "hint-container-title" },
        "Связанные статьи",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[2] || (_cache[2] = createTextVNode(
          "О том, как создавать и настраивать опросы, читайте в статье ",
          -1
          /* CACHED */
        )),
        createVNode(_component_RouteLink, { to: "/all/survey_results/all/surveys/" }, {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createTextVNode(
              "Опросы",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _cache[3] || (_cache[3] = createTextVNode(
          ". О том, как проходить опросы в качестве респондента, см. ",
          -1
          /* CACHED */
        )),
        createVNode(_component_RouteLink, { to: "/all/survey_results/all/survey_response/" }, {
          default: withCtx(() => [..._cache[1] || (_cache[1] = [
            createTextVNode(
              "Прохождение опроса",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _cache[4] || (_cache[4] = createTextVNode(
          ".",
          -1
          /* CACHED */
        ))
      ])
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="доступ-к-странице-результатов" tabindex="-1"><a class="header-anchor" href="#доступ-к-странице-результатов"><span>Доступ к странице результатов</span></a></h2><p>Чтобы перейти к результатам:</p><ol><li>Перейдите в раздел опросов.</li><li>Найдите нужный опрос в списке (например, по названию).</li><li>Кликните по названию опроса или выберите действие для просмотра результатов.</li></ol><p>Откроется страница с итогами опроса. В верхней части страницы отображается название опроса и основные метрики:</p><ul><li>Количество полученных ответов.</li><li>Процент завершения опроса.</li><li>Статус сбора ответов (активен или завершен).</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/survey_results/survey_results_main.webp" alt="survey_results_main"></p><h2 id="основные-деиствия-на-странице-результатов" tabindex="-1"><a class="header-anchor" href="#основные-деиствия-на-странице-результатов"><span>Основные действия на странице результатов</span></a></h2><p>В верхней панели страницы доступны кнопки для управления данными:</p><ul><li><strong>AI анализ</strong> — запускает автоматический анализ ответов с помощью искусственного интеллекта. Система выявляет ключевые темы, настроения и рекомендации на основе текстовых и числовых данных.</li><li><strong>Выгрузить в CSV</strong> — позволяет скачать все ответы в формате таблицы для дальнейшего анализа в Excel или других инструментах.</li><li><strong>Доступ</strong> — управляет правами доступа к результатам опроса для других участников команды.</li><li><strong>Завершить сбор ответов</strong> — останавливает опрос. После нажатия этой кнопки новые ответы больше не принимаются.</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/survey_results/survey_results_actions.webp" alt="survey_results_actions"></p><h2 id="просмотр-статистики-по-вопросам" tabindex="-1"><a class="header-anchor" href="#просмотр-статистики-по-вопросам"><span>Просмотр статистики по вопросам</span></a></h2><p>Ниже панели действий отображается детализация ответов по каждому вопросу опроса:</p><ul><li>Для вопросов с выбором ответа (радио-кнопки, чекбоксы) показаны графики распределения ответов.</li><li>Для текстовых вопросов отображаются сводки или список уникальных ответов.</li><li>Можно кликнуть на конкретный вопрос, чтобы увидеть полные ответы всех респондентов.</li></ul><p>Эта информация помогает быстро оценить удовлетворенность пользователей, выявить узкие места в процессах или собрать обратную связь по релизам.</p><h2 id="ai-анализ-опросов" tabindex="-1"><a class="header-anchor" href="#ai-анализ-опросов"><span>AI-анализ опросов</span></a></h2><p>Функция <strong>AI анализ</strong> использует основную модель чата для обработки данных опроса. Она полезна, когда ответов много, и вручную анализировать их затруднительно.</p><ol><li>Нажмите кнопку <strong>AI анализ</strong> в верхней части страницы результатов.</li><li>Дождитесь завершения обработки (система может показать индикатор загрузки).</li><li>Изучите сгенерированный отчет: ключевые выводы, частые упоминания и рекомендации.</li></ol><div class="hint-container info"><p class="hint-container-title">Ограничения AI-анализа</p><p>AI-анализ работает только для опубликованных опросов, в которых есть хотя бы несколько ответов. Если ответов недостаточно, система может попросить дождаться сбора данных.</p></div><h2 id="выгрузка-данных" tabindex="-1"><a class="header-anchor" href="#выгрузка-данных"><span>Выгрузка данных</span></a></h2>', 19)),
    createBaseVNode("p", null, [
      _cache[6] || (_cache[6] = createTextVNode(
        "Если вам требуется провести глубокий анализ или поделиться данными с коллегами, которые не имеют доступа к ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[7] || (_cache[7] = createTextVNode(
        ":",
        -1
        /* CACHED */
      ))
    ]),
    _cache[11] || (_cache[11] = createBaseVNode(
      "ol",
      null,
      [
        createBaseVNode("li", null, [
          createTextVNode("Нажмите кнопку "),
          createBaseVNode("strong", null, "Выгрузить в CSV"),
          createTextVNode(".")
        ]),
        createBaseVNode("li", null, [
          createTextVNode("Браузер скачает файл "),
          createBaseVNode("code", null, ".csv"),
          createTextVNode(", содержащий все ответы в табличном виде.")
        ]),
        createBaseVNode("li", null, "Откройте файл в Excel, Google Sheets или другом табличном редакторе.")
      ],
      -1
      /* CACHED */
    )),
    _cache[12] || (_cache[12] = createBaseVNode(
      "p",
      null,
      "Файл содержит столбцы для каждого вопроса и строки для каждого респондента. Это позволяет строить собственные графики и фильтровать данные по любым параметрам.",
      -1
      /* CACHED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/all/survey_results/","title":"Анализ результатов опросов","lang":"ru-RU","frontmatter":{"title":"Анализ результатов опросов","summary":"Статья описывает, как просматривать статистику ответов, использовать AI-анализ и выгружать данные из опросов в {{ product_name }}.","tags":["Спецфичи редактора BPMN"],"product_name":"Stormbpmn"},"headers":[{"level":2,"title":"Доступ к странице результатов","slug":"доступ-к-странице-результатов","link":"#доступ-к-странице-результатов","children":[]},{"level":2,"title":"Основные действия на странице результатов","slug":"основные-деиствия-на-странице-результатов","link":"#основные-деиствия-на-странице-результатов","children":[]},{"level":2,"title":"Просмотр статистики по вопросам","slug":"просмотр-статистики-по-вопросам","link":"#просмотр-статистики-по-вопросам","children":[]},{"level":2,"title":"AI-анализ опросов","slug":"ai-анализ-опросов","link":"#ai-анализ-опросов","children":[]},{"level":2,"title":"Выгрузка данных","slug":"выгрузка-данных","link":"#выгрузка-данных","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.52,"words":456},"filePathRelative":"all/survey_results/index.md","excerpt":"\\n<p>После того как респонденты прошли опрос, вы можете проанализировать полученные данные на странице результатов. Здесь доступна общая статистика, детальные ответы и инструменты для автоматического анализа с помощью AI.</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Связанные статьи</p>\\n<p>О том, как создавать и настраивать опросы, читайте в статье <a href=\\"/stormbpmn_new_doc/pr-39/all/survey_results/all/surveys/\\" target=\\"_blank\\">Опросы</a>.\\nО том, как проходить опросы в качестве респондента, см. <a href=\\"/stormbpmn_new_doc/pr-39/all/survey_results/all/survey_response/\\" target=\\"_blank\\">Прохождение опроса</a>.</p>\\n</div>"}');
export {
  index_html as comp,
  data
};
