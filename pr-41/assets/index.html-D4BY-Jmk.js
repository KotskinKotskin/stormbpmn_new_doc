import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-63InvP7F.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode(
      "h1",
      {
        id: "создание-и-настроика-опросов",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#создание-и-настроика-опросов"
        }, [
          createBaseVNode("span", null, "Создание и настройка опросов")
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
        " позволяют собирать обратную связь от участников команды или внешних пользователей по бизнес-процессам, моделям BPMN или отдельным темам. Опросы можно привязать к конкретному процессу или модели, чтобы ответы помогали улучшать их, либо создать независимый опрос для широкой рассылки.",
        -1
        /* CACHED */
      ))
    ]),
    _cache[6] || (_cache[6] = createBaseVNode(
      "h2",
      {
        id: "создание-опроса",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#создание-опроса"
        }, [
          createBaseVNode("span", null, "Создание опроса")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode(
        "Для создания нового опроса перейдите в раздел опросов. В интерфейсе ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "product_name" }),
      _cache[4] || (_cache[4] = createTextVNode(
        " опросы доступны через соответствующую вкладку или меню (в зависимости от настроек вашей команды).",
        -1
        /* CACHED */
      ))
    ]),
    _cache[7] || (_cache[7] = createStaticVNode('<ol><li><p>Нажмите кнопку <strong>Создать опрос</strong>:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/surveys/create_survey/create_survey_button.webp" alt="create_survey_button"></p></li><li><p>Откроется экран создания опроса. Сначала вам нужно выбрать тип привязки опроса.</p></li></ol><h2 id="выбор-типа-привязки" tabindex="-1"><a class="header-anchor" href="#выбор-типа-привязки"><span>Выбор типа привязки</span></a></h2><p>При создании опроса система предлагает три варианта привязки:</p><ul><li><strong>Независимый</strong> — универсальный опрос без привязки к конкретной модели или процессу. Подходит для внешней рассылки или сбора обратной связи от широкой аудитории.</li><li><strong>Модель</strong> — опрос привязан к BPMN-модели. Респонденты приходят со страницы диаграммы, ответы помогают улучшать конкретный процесс.</li><li><strong>Процесс</strong> — опрос привязан к процессу из реестра. Удобно собирать обратную связь по сквозному процессу, а не по отдельной модели.</li></ul><p>Выберите нужный тип привязки, кликнув на соответствующую карточку:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/surveys/create_survey/linking_types.webp" alt="linking_types"></p><p>Если вы выбрали привязку к <strong>Модели</strong> или <strong>Процессу</strong>, появится поле для выбора конкретного объекта. Выберите нужную модель или процесс из списка.</p><h2 id="настроика-опроса" tabindex="-1"><a class="header-anchor" href="#настроика-опроса"><span>Настройка опроса</span></a></h2><p>После выбора типа привязки перейдите к настройке содержимого опроса.</p><h3 id="название-опроса" tabindex="-1"><a class="header-anchor" href="#название-опроса"><span>Название опроса</span></a></h3><p>Введите понятное название опроса в поле <strong>Название опроса</strong>. Это название будет отображаться в списке опросов и поможет легко находить его:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/surveys/create_survey/survey_name.webp" alt="survey_name"></p><h3 id="приветствие" tabindex="-1"><a class="header-anchor" href="#приветствие"><span>Приветствие</span></a></h3><p>Создайте приветственное сообщение, которое увидят пользователи в начале опроса. Это поле необязательно, но помогает задать контекст и объяснить цель опроса:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/surveys/create_survey/welcome_message.webp" alt="welcome_message"></p><h3 id="добавление-вопросов" tabindex="-1"><a class="header-anchor" href="#добавление-вопросов"><span>Добавление вопросов</span></a></h3><p>В разделе <strong>Вопросы</strong> добавьте вопросы для опроса. Нажмите кнопку <strong>Добавить вопрос</strong>:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/surveys/create_survey/add_question.webp" alt="add_question"></p><p>Для каждого вопроса укажите:</p><ul><li><strong>Текст вопроса</strong> — введите формулировку вопроса.</li><li><strong>Описание вопроса</strong> (необязательно) — добавьте пояснение или дополнительные инструкции.</li><li><strong>Обязательный вопрос</strong> — активируйте тумблер, если вопрос должен быть обязательно заполнен респондентом.</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/surveys/create_survey/question_settings.webp" alt="question_settings"></p><p>Вы можете добавлять несколько вопросов, дублировать существующие или добавлять новые вопросы ниже уже созданных. Для управления вопросами используйте меню действий рядом с каждым вопросом:</p><ul><li><strong>Дублировать вопрос</strong> — создает копию вопроса с теми же настройками.</li><li><strong>Добавить вопрос ниже</strong> — создает новый вопрос сразу после текущего.</li></ul><h3 id="финальное-сообщение" tabindex="-1"><a class="header-anchor" href="#финальное-сообщение"><span>Финальное сообщение</span></a></h3><p>Добавьте финальное сообщение, которое участники увидят после прохождения опроса. Это поле необязательно, но позволяет поблагодарить респондентов или указать дальнейшие шаги:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/surveys/create_survey/end_message.webp" alt="end_message"></p><h3 id="дата-окончания" tabindex="-1"><a class="header-anchor" href="#дата-окончания"><span>Дата окончания</span></a></h3><p>Вы можете указать дату окончания опроса, чтобы он автоматически закрылся. Наведите на поле даты окончания, чтобы увидеть подсказку:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/surveys/create_survey/end_date.webp" alt="end_date"></p><h2 id="сохранение-опроса" tabindex="-1"><a class="header-anchor" href="#сохранение-опроса"><span>Сохранение опроса</span></a></h2><p>После настройки всех параметров сохраните опрос. Обратите внимание: опрос должен содержать хотя бы один вопрос, иначе сохранение будет невозможно.</p><p>Нажмите кнопку <strong>Сохранить</strong> (или аналогичную, в зависимости от интерфейса):</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/surveys/create_survey/save_survey.webp" alt="save_survey"></p><p>После сохранения опрос появится в списке опросов. Если опрос привязан к модели или процессу, он также отобразится на странице соответствующего объекта.</p><div class="hint-container info"><p class="hint-container-title">Доступ к опросу</p><p>Доступом к опросу управляет автор опроса или администратор команды. Если вы видите сообщение «Опрос доступен только для просмотра», запросите у автора права на редактирование.</p></div><h2 id="работа-с-опросами" tabindex="-1"><a class="header-anchor" href="#работа-с-опросами"><span>Работа с опросами</span></a></h2><p>После создания опроса вы можете:</p><ul><li>Просматривать список опросов в разделе <strong>Все опросы</strong>.</li><li>Фильтровать опросы по статусу: <strong>Активные</strong> (опубликованные и идущие), <strong>Ожидающие</strong> (ждущие вашего ответа).</li><li>Искать опросы по названию с помощью поля поиска.</li></ul><p>Для просмотра результатов опроса перейдите на страницу опроса и выберите вкладку <strong>Результаты</strong>. Подробнее о работе с результатами см. в статье [all/survey_results/index.md].</p>', 39))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/all/surveys/","title":"Создание и настройка опросов","lang":"ru-RU","frontmatter":{"title":"Создание и настройка опросов","summary":"Статья описывает, как создавать опросы в {{ product_name }}, выбирать тип привязки (независимый, к модели, к процессу), добавлять вопросы и настраивать параметры опроса.","tags":["С чего начать"],"product_name":"Stormbpmn"},"headers":[{"level":2,"title":"Создание опроса","slug":"создание-опроса","link":"#создание-опроса","children":[]},{"level":2,"title":"Выбор типа привязки","slug":"выбор-типа-привязки","link":"#выбор-типа-привязки","children":[]},{"level":2,"title":"Настройка опроса","slug":"настроика-опроса","link":"#настроика-опроса","children":[{"level":3,"title":"Название опроса","slug":"название-опроса","link":"#название-опроса","children":[]},{"level":3,"title":"Приветствие","slug":"приветствие","link":"#приветствие","children":[]},{"level":3,"title":"Добавление вопросов","slug":"добавление-вопросов","link":"#добавление-вопросов","children":[]},{"level":3,"title":"Финальное сообщение","slug":"финальное-сообщение","link":"#финальное-сообщение","children":[]},{"level":3,"title":"Дата окончания","slug":"дата-окончания","link":"#дата-окончания","children":[]}]},{"level":2,"title":"Сохранение опроса","slug":"сохранение-опроса","link":"#сохранение-опроса","children":[]},{"level":2,"title":"Работа с опросами","slug":"работа-с-опросами","link":"#работа-с-опросами","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.93,"words":579},"filePathRelative":"all/surveys/index.md","excerpt":"\\n<p><strong>Опросы</strong> в </p>\\n<h2>Создание опроса</h2>\\n<p>Для создания нового опроса перейдите в раздел опросов. В интерфейсе </p>\\n<ol>\\n<li>\\n<p>Нажмите кнопку <strong>Создать опрос</strong>:</p>\\n<p><img src=\\"https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-41/media/screenshots/app/surveys/create_survey/create_survey_button.webp\\" alt=\\"create_survey_button\\"></p>\\n</li>\\n<li>\\n<p>Откроется экран создания опроса. Сначала вам нужно выбрать тип привязки опроса.</p>\\n</li>\\n</ol>"}');
export {
  index_html as comp,
  data
};
