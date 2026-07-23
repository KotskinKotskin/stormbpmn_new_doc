import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, e as withCtx, o as openBlock } from "./app-B7PpRKNp.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  const _component_RouteLink = resolveComponent("RouteLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode(
      "h1",
      {
        id: "прохождение-опросов",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#прохождение-опросов"
        }, [
          createBaseVNode("span", null, "Прохождение опросов")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "В ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[1] || (_cache[1] = createTextVNode(
        " опросы используются для сбора обратной связи по бизнес-процессам, BPMN-моделям или для независимых исследований. Респондент получает доступ к опросу по ссылке или через интерфейс платформы.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="начало-прохождения" tabindex="-1"><a class="header-anchor" href="#начало-прохождения"><span>Начало прохождения</span></a></h2><p>Чтобы начать прохождение опроса, перейдите на страницу опроса. Вы увидите приветственное сообщение с названием опроса и описанием (если оно было добавлено автором).</p><p>Нажмите кнопку <strong>Начать</strong>, чтобы перейти к первому вопросу:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/survey_response/survey_start.webp" alt="survey_start"></p><h2 id="ответы-на-вопросы" tabindex="-1"><a class="header-anchor" href="#ответы-на-вопросы"><span>Ответы на вопросы</span></a></h2><p>Опрос состоит из последовательности вопросов. Интерфейс отображает текущий вопрос и варианты ответов.</p><ol><li>Прочитайте текст вопроса.</li><li>Выберите вариант ответа или введите данные в поле ввода, в зависимости от типа вопроса: <ul><li><strong>Выбор одного варианта</strong>: кликните по нужному варианту (радиокнопка).</li><li><strong>Текстовый ввод</strong>: введите ответ в поле.</li><li><strong>Оценка</strong>: выберите значение на шкале.</li></ul></li></ol><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/survey_response/survey_question.webp" alt="survey_question"></p><p>Если вопрос является обязательным, система не позволит перейти дальше без ответа. Подсказка об этом появится при попытке перехода.</p><h2 id="навигация-по-вопросам" tabindex="-1"><a class="header-anchor" href="#навигация-по-вопросам"><span>Навигация по вопросам</span></a></h2><p>Для перехода к следующему вопросу нажмите кнопку <strong>Следующий вопрос</strong> внизу экрана.</p><div class="hint-container info"><p class="hint-container-title">Обратная навигация</p><p>В текущей версии интерфейса навигация линейная: вы отвечаете на вопросы последовательно. Кнопка возврата к предыдущим вопросам может быть недоступна в зависимости от настроек опроса.</p></div><h2 id="завершение-опроса" tabindex="-1"><a class="header-anchor" href="#завершение-опроса"><span>Завершение опроса</span></a></h2><p>После ответа на последний вопрос вы увидите финальное сообщение, которое подготовил автор опроса. Оно может содержать благодарность за участие или ссылки на дополнительные материалы.</p>', 14)),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode(
        "Ваши ответы автоматически сохраняются и становятся доступны для анализа автору опроса. Подробнее о том, как просматривать результаты, см. в статье ",
        -1
        /* CACHED */
      )),
      createVNode(_component_RouteLink, { to: "/all/survey_response/all/survey_results/" }, {
        default: withCtx(() => [..._cache[2] || (_cache[2] = [
          createTextVNode(
            "Результаты опросов",
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
    ]),
    _cache[7] || (_cache[7] = createBaseVNode(
      "div",
      { class: "hint-container info" },
      [
        createBaseVNode("p", { class: "hint-container-title" }, "Доступ к опросу"),
        createBaseVNode("p", null, "Если вы видите сообщение «Опрос доступен только для просмотра», у вас нет прав на прохождение опроса. Обратитесь к автору опроса или администратору команды за предоставлением доступа.")
      ],
      -1
      /* CACHED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/all/survey_response/","title":"Прохождение опросов","lang":"ru-RU","frontmatter":{"title":"Прохождение опросов","summary":"Статья описывает, как респонденту открыть опрос, ответить на вопросы и завершить прохождение в интерфейсе {{ product_name }}.","tags":["С чего начать"],"product_name":"Stormbpmn"},"headers":[{"level":2,"title":"Начало прохождения","slug":"начало-прохождения","link":"#начало-прохождения","children":[]},{"level":2,"title":"Ответы на вопросы","slug":"ответы-на-вопросы","link":"#ответы-на-вопросы","children":[]},{"level":2,"title":"Навигация по вопросам","slug":"навигация-по-вопросам","link":"#навигация-по-вопросам","children":[]},{"level":2,"title":"Завершение опроса","slug":"завершение-опроса","link":"#завершение-опроса","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"all/survey_response/index.md","excerpt":"\\n<p>В </p>\\n<h2>Начало прохождения</h2>\\n<p>Чтобы начать прохождение опроса, перейдите на страницу опроса. Вы увидите приветственное сообщение с названием опроса и описанием (если оно было добавлено автором).</p>\\n<p>Нажмите кнопку <strong>Начать</strong>, чтобы перейти к первому вопросу:</p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/survey_response/survey_start.webp\\" alt=\\"survey_start\\"></p>"}');
export {
  index_html as comp,
  data
};
