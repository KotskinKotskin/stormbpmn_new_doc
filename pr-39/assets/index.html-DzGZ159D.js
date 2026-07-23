import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, d as createTextVNode, b as createVNode, o as openBlock } from "./app-B7PpRKNp.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[34] || (_cache[34] = createStaticVNode('<div class="hint-container warning"><p class="hint-container-title">Ограничения возможностей плана, ролей и тарифа!</p><p>Данная статья описывает работу с функциями сервиса, для работы которых нужны:</p><ul><li>Роль: <strong>Администратор команды</strong>.</li><li>Права уровня: <strong>Администратор</strong>.</li><li>Тарифный план: <strong>Team</strong> или <strong>Business</strong>.</li></ul><p>Если нужные вам функции сервиса недоступны вам из-за отсутствия нужных прав, ограничений роли и тарифного плана — обратитесь к вашему администратору команды.</p></div><h1 id="работа-с-элементами-архитектуры" tabindex="-1"><a class="header-anchor" href="#работа-с-элементами-архитектуры"><span>Работа с элементами архитектуры</span></a></h1><p><strong>Элементы архитектуры</strong> (ЭА) нужны, чтобы показывать, какие ресурсы и объекты используются при выполнении задачи. По сути, это более удобная и продвинутая альтернатива обычным элементам BPMN — таким как объект данных и артефакты. Они помогают не захламлять диаграмму лишними деталями. При этом, если включить их отображение, процесс становится гораздо понятнее, потому что сразу видно, что именно требуется для его выполнения.</p><p>Типы ЭА:</p><ul><li><strong>Документ</strong> — артефакт, содержащий контекст бизнес-процесса: инструкция, договор, письмо.</li><li><strong>Система</strong> — программное обеспечение, интеграция, API, любая система или программа, которую можно использовать для выполнения пользовательской или сервисной задачи.</li><li><strong>Клиент</strong> — дополнительный тип элемента архитектуры для обозначения клиента или другого внешнего участника процесса.</li><li><strong>Коммуникация</strong> — отражает способ или канал коммуникации.</li><li><strong>Сущность</strong> — дополнительный тип элемента архитектуры для обозначения бизнес-сущности или объекта данных.</li><li><strong>Действие</strong> — используется для типизации действий, абстрактных задач и ручных операций.</li><li><strong>Не указано</strong> — тип элемента архитектуры, который можно использовать, если подходящая категория еще не определена.</li><li><strong>Прочие</strong> — дополнительный тип для объектов, которые не относятся к другим типам элементов архитектуры.</li></ul><p>Если среди предложенных типов ЭА не нашлось нужного именно вам — можно создать собственный тип ЭА с помощью конструктора пользовательских типов.</p><p>Опишем несколько путей создания ЭА.</p><h2 id="создание-эа" tabindex="-1"><a class="header-anchor" href="#создание-эа"><span>Создание ЭА</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Элементы архитектуры и переход в другую команду, выход из команды</p><p>Элементы архитектуры (ЭА) относятся к объектам команды поэтому при выходе из команды, переходе в другую команду, оверлеи ЭА удаляются с диаграмм.</p></div>', 9)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode(
        "Создать ЭА можно в редакторе диаграмм или в разделе ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "section_team.layouts.architecture" }),
      _cache[1] || (_cache[1] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[2] || (_cache[2] = createTextVNode()),
      createVNode(_component_Fm, { p: "architecture.elements" }),
      _cache[3] || (_cache[3] = createTextVNode(
        ".",
        -1
        /* CACHED */
      ))
    ]),
    _cache[35] || (_cache[35] = createBaseVNode(
      "h3",
      {
        id: "создания-эа-в-редакторе-диаграмм",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#создания-эа-в-редакторе-диаграмм"
        }, [
          createBaseVNode("span", null, "Создания ЭА в редакторе диаграмм")
        ])
      ],
      -1
      /* CACHED */
    )),
    createBaseVNode("ol", null, [
      _cache[12] || (_cache[12] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "Перейдите в редактор диаграмм.")
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[4] || (_cache[4] = createTextVNode(
            "Выбирете задачу, к которой хотите привязать ЭА и в правом боковом меню выбирете раздел ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "process_editor.right_toolbar.buttons.archetecture" }),
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
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/diagram/create_arc_el/create_element_from_process_editor.webp",
              alt: "create_element_from_process_editor"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[7] || (_cache[7] = createTextVNode(
            "Кликнете на кнопку ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "universal.plus" }),
          _cache[8] || (_cache[8] = createTextVNode()),
          _cache[9] || (_cache[9] = createBaseVNode(
            "strong",
            null,
            "Создать элемент архитектуры",
            -1
            /* CACHED */
          )),
          _cache[10] || (_cache[10] = createTextVNode(
            ":",
            -1
            /* CACHED */
          ))
        ]),
        _cache[11] || (_cache[11] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("img", {
              src: "https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/diagram/create_arc_el/create_element_from_process_editor_button_plus.webp",
              alt: "create_element_from_process_editor_button_plus"
            })
          ],
          -1
          /* CACHED */
        ))
      ]),
      _cache[13] || (_cache[13] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createTextVNode("В открывшемся модальном окне "),
            createBaseVNode("strong", null, "Создание элемента архитектуры"),
            createTextVNode(" выполните следующие действия:")
          ])
        ],
        -1
        /* CACHED */
      ))
    ]),
    _cache[36] || (_cache[36] = createStaticVNode('<ul><li>В поле <strong>Название</strong> введите краткое, понятное, односложное название ЭА.</li><li>Из выпадающего списка <strong>Тип</strong> выберите нужный вам тип ЭА.</li><li>Задайте <strong>Цвет элемента</strong> (опционально).</li><li>Секция <strong>Статус и интеграция</strong> заполняется при необходимости и является опциональной.</li><li>Выбирете <strong>Статус</strong> ЭА.</li></ul><ol><li>Сохраните новый ЭА.</li></ol><h3 id="создания-эа-в-разделе-элементы" tabindex="-1"><a class="header-anchor" href="#создания-эа-в-разделе-элементы"><span>Создания ЭА в разделе <i class="pi pi-table"></i> <strong>Элементы</strong></span></a></h3>', 3)),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        _cache[14] || (_cache[14] = createTextVNode(
          "Перейдите в раздел ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "section_team.layouts.architecture" }),
        _cache[15] || (_cache[15] = createTextVNode()),
        createVNode(_component_Fm, { p: "universal.right_arrow" }),
        _cache[16] || (_cache[16] = createTextVNode()),
        createVNode(_component_Fm, { p: "architecture.elements" }),
        _cache[17] || (_cache[17] = createTextVNode(
          " и кликнете на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.plus" }),
        _cache[18] || (_cache[18] = createTextVNode()),
        _cache[19] || (_cache[19] = createBaseVNode(
          "strong",
          null,
          "Создать",
          -1
          /* CACHED */
        )),
        _cache[20] || (_cache[20] = createTextVNode(
          ":",
          -1
          /* CACHED */
        ))
      ])
    ]),
    _cache[37] || (_cache[37] = createStaticVNode('<p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/assets/work_with_arc_elements/create_element_from_elements_section.webp" alt="create_element_from_elements_section"></p><ol><li>В открывшемся модальном окне <strong>Создание элемента архитектуры</strong> выполните следующие действия:</li></ol><ul><li>В поле <strong>Название</strong> введите краткое, понятное, односложное название ЭА.</li><li>Из выпадающего списка <strong>Тип</strong> выберите нужный вам тип ЭА.</li><li>Задайте <strong>Цвет элемента</strong> (опционально).</li><li>Секция <strong>Статус и интеграция</strong> заполняется при необходимости и является опциональной.</li><li>Выбирете <strong>Статус</strong> ЭА.</li></ul><ol><li>Сохраните новый ЭА.</li></ol><h2 id="просмотр-списка-эа" tabindex="-1"><a class="header-anchor" href="#просмотр-списка-эа"><span>Просмотр списка ЭА</span></a></h2>', 5)),
    createBaseVNode("p", null, [
      _cache[21] || (_cache[21] = createTextVNode(
        "Раздел ",
        -1
        /* CACHED */
      )),
      createVNode(_component_Fm, { p: "section_team.layouts.architecture" }),
      _cache[22] || (_cache[22] = createTextVNode()),
      createVNode(_component_Fm, { p: "universal.right_arrow" }),
      _cache[23] || (_cache[23] = createTextVNode()),
      createVNode(_component_Fm, { p: "architecture.elements" }),
      _cache[24] || (_cache[24] = createTextVNode(
        " содержит удобную таблицу со всеми ЭА с удобной и понятной навигацией по типам ЭА:",
        -1
        /* CACHED */
      ))
    ]),
    _cache[38] || (_cache[38] = createStaticVNode('<p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/assets/work_with_arc_elements/arcitechture_element_table_list.webp" alt="arcitechture_element_table_list"></p><p>Каждый ЭА имеет свой ID, название, тип и набор действий, которые можно совершить над ним, к их числу отноятся:</p><ul><li><i class="pi pi-eye"></i> Просмотр списка диаграмм, где используется ЭА.</li><li><i class="pi pi-pen-to-square"></i> Редактирование свойств ЭА.</li><li><i class="pi pi-trash"></i> Удаление ЭА.</li></ul><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/assets/work_with_arc_elements/arc_elemets_actions.webp" alt="arc_elemets_actions"></p><h2 id="передача-диаграмм-с-эа-в-другую-команду" tabindex="-1"><a class="header-anchor" href="#передача-диаграмм-с-эа-в-другую-команду"><span>Передача диаграмм с ЭА в другую команду</span></a></h2><p>Если нужно передать диаграмму с элементами архитектуры в другую команду, создайте ее дубликат в другом аккаунте.</p><p>Для этого:</p><ol><li><p>Перейдите в редактор диаграмм.</p></li><li><p>На верхней панели кликнете по кнопке <i class="pi pi-share-alt"></i> <strong>Поделиться</strong>.</p></li><li><p>В открывшемся модальном окне <strong>Поделиться моделью</strong> укажите e-mail аккаунта получателя или включите <strong>Доступ по ссылке</strong> и скопируйте ссылку:</p><p><img src="https://kotskinkotskin.github.io/stormbpmn_new_doc/pr-39/media/screenshots/app/diagram/share/share_model.webp" alt="share_process"></p></li><li><p>В аккаунте-получателе откройте переданную диаграмму по полученной ссылке.</p></li><li><p>Создайте копию диаграммы одним из способов:</p></li></ol>', 8)),
    createBaseVNode("ul", null, [
      _cache[33] || (_cache[33] = createBaseVNode(
        "li",
        null,
        [
          createTextVNode("Отройте редактор диаграмм и в верхнем меню открытой диаграммы нажмите кнопку "),
          createBaseVNode("i", { class: "pi pi-copy" }),
          createTextVNode(),
          createBaseVNode("strong", null, "Дублировать"),
          createTextVNode(".")
        ],
        -1
        /* CACHED */
      )),
      createBaseVNode("li", null, [
        _cache[25] || (_cache[25] = createTextVNode(
          "На главной странице на верхней панели нажмите кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.plus" }),
        _cache[26] || (_cache[26] = createTextVNode(
          " и из выпадающего списка выберите ",
          -1
          /* CACHED */
        )),
        _cache[27] || (_cache[27] = createBaseVNode(
          "i",
          { class: "pi pi-box" },
          null,
          -1
          /* CACHED */
        )),
        _cache[28] || (_cache[28] = createTextVNode()),
        _cache[29] || (_cache[29] = createBaseVNode(
          "strong",
          null,
          "BPMN",
          -1
          /* CACHED */
        )),
        _cache[30] || (_cache[30] = createTextVNode(
          ", затем в открывшемся окне нажмите ",
          -1
          /* CACHED */
        )),
        _cache[31] || (_cache[31] = createBaseVNode(
          "strong",
          null,
          "Скопировать модель",
          -1
          /* CACHED */
        )),
        _cache[32] || (_cache[32] = createTextVNode(
          " и вставьте ссылку на исходную диаграмму.",
          -1
          /* CACHED */
        ))
      ])
    ]),
    _cache[39] || (_cache[39] = createBaseVNode(
      "p",
      null,
      "После этого в аккаунте-получателе будет создана отдельная копия диаграммы, с которой можно работать уже в другой команде.",
      -1
      /* CACHED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/architects/architecture_elements/","title":"Работа с элементами архитектуры","lang":"ru-RU","frontmatter":{"title":"Работа с элементами архитектуры","description":"","tags":["Элементы архитектуры"],"architecture":{"elements":"<i class=\\"pi pi-table\\"></i> **Элементы**"},"process_editor":{"right_toolbar":{"buttons":{"archetecture":"<i class=\\"pi pi-objects-column\\"></i> **Элементы архитектуры**"}}},"section_team":{"layouts":{"architecture":"<i class=\\"pi pi-objects-column\\"></i> **Архитектура**"}},"universal":{"plus":"<i class=\\"pi pi-plus\\"></i>","right_arrow":"<i class=\\"fa-solid fa-arrow-right\\"></i>"}},"headers":[{"level":2,"title":"Создание ЭА","slug":"создание-эа","link":"#создание-эа","children":[{"level":3,"title":"Создания ЭА в редакторе диаграмм","slug":"создания-эа-в-редакторе-диаграмм","link":"#создания-эа-в-редакторе-диаграмм","children":[]},{"level":3,"title":"Создания ЭА в разделе  Элементы","slug":"создания-эа-в-разделе-элементы","link":"#создания-эа-в-разделе-элементы","children":[]}]},{"level":2,"title":"Просмотр списка ЭА","slug":"просмотр-списка-эа","link":"#просмотр-списка-эа","children":[]},{"level":2,"title":"Передача диаграмм с ЭА в другую команду","slug":"передача-диаграмм-с-эа-в-другую-команду","link":"#передача-диаграмм-с-эа-в-другую-команду","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.64,"words":792},"filePathRelative":"architects/architecture_elements/index.md","excerpt":"<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">Ограничения возможностей плана, ролей и тарифа!</p>\\n<p>Данная статья описывает работу с функциями сервиса, для работы которых нужны:</p>\\n<ul>\\n<li>Роль: <strong>Администратор команды</strong>.</li>\\n<li>Права уровня: <strong>Администратор</strong>.</li>\\n<li>Тарифный план: <strong>Team</strong> или <strong>Business</strong>.</li>\\n</ul>\\n<p>Если нужные вам функции сервиса недоступны вам из-за отсутствия нужных прав, ограничений роли и тарифного плана — обратитесь к вашему администратору команды.</p>\\n</div>"}');
export {
  index_html as comp,
  data
};
