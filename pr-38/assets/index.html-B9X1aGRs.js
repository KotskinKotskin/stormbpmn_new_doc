import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, b as createVNode, f as createStaticVNode, o as openBlock } from "./app-CDfj8N5A.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
const _hoisted_2 = { class: "hint-container details" };
const _hoisted_3 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_Fm = resolveComponent("Fm");
  return openBlock(), createElementBlock("div", null, [
    _cache[20] || (_cache[20] = createBaseVNode(
      "h4",
      { id: "custom-fields" },
      "Пользовательские поля",
      -1
      /* CACHED */
    )),
    createBaseVNode("details", _hoisted_1, [
      createBaseVNode("summary", null, [
        _cache[0] || (_cache[0] = createTextVNode(
          "Что такое ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_reg.custom_fields" }),
        _cache[1] || (_cache[1] = createTextVNode(
          "?",
          -1
          /* CACHED */
        ))
      ]),
      createVNode(_component_Fm, { p: "bp_reg.custom_fields" }),
      _cache[5] || (_cache[5] = createTextVNode(
        " — это перечень всех возможных атрибутов и параметров процесса, которые позволяют настроить реестр процессов в соответствии со спецификой отрасли или компании.",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[2] || (_cache[2] = createTextVNode(
          "Заданные в этом разделе поля будут отражаться в разделах ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_tree.metrics" }),
        _cache[3] || (_cache[3] = createTextVNode(
          " и ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_tree.options" }),
        _cache[4] || (_cache[4] = createTextVNode(
          " реестра бизнес-процессов.",
          -1
          /* CACHED */
        ))
      ])
    ]),
    createBaseVNode("details", _hoisted_2, [
      _cache[13] || (_cache[13] = createBaseVNode(
        "summary",
        null,
        "Создание пользовательских полей",
        -1
        /* CACHED */
      )),
      createBaseVNode("p", null, [
        _cache[6] || (_cache[6] = createTextVNode(
          "Все пользовательские поля, кроме ",
          -1
          /* CACHED */
        )),
        _cache[7] || (_cache[7] = createBaseVNode(
          "strong",
          null,
          "Метрика",
          -1
          /* CACHED */
        )),
        _cache[8] || (_cache[8] = createTextVNode(
          ", отражаются во вкладке ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "bp_tree.options" }),
        _cache[9] || (_cache[9] = createTextVNode(
          " бизнес-процесса. Для создания пользовательского поля кликните на кнопку ",
          -1
          /* CACHED */
        )),
        createVNode(_component_Fm, { p: "universal.plus" }),
        _cache[10] || (_cache[10] = createTextVNode()),
        _cache[11] || (_cache[11] = createBaseVNode(
          "strong",
          null,
          "Создать пользовательское поле",
          -1
          /* CACHED */
        )),
        _cache[12] || (_cache[12] = createTextVNode(
          " и в открывшемся модальном окне выберите интересующий вас тип параметра:",
          -1
          /* CACHED */
        ))
      ]),
      _cache[14] || (_cache[14] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("img", {
            src: "https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/custom_fields/create/cf_create.webp",
            alt: ""
          })
        ],
        -1
        /* CACHED */
      ))
    ]),
    createBaseVNode("details", _hoisted_3, [
      _cache[18] || (_cache[18] = createStaticVNode("<summary>Типы параметров</summary><p><strong>Простые типы данных</strong></p><ul><li><strong>Текст</strong> — краткое текстовое описание для коротких значений (название, код, идентификатор). Подходит для коротких записей в одну строку.</li><li><strong>Большой текст</strong> — многострочный текстовый ввод для длинных описаний, комментариев или заметок. Идеально подходит для детального описания или развернутых пояснений. Тип поля: текст.</li><li><strong>Да/Нет</strong> — логический тип для булевых параметров. Удобен для бинарных признаков и флагов (например, &quot;Обязательно&quot;, &quot;Активно&quot;, &quot;Утверждено&quot;).</li><li><strong>Число</strong> — числовое значение для ввода количественных данных. Подходит для значений размера, количества, стоимости и других числовых метрик.</li><li><strong>Дата</strong> — календарная дата без указания времени. Используется для указания сроков, дат начала или окончания событий (например, дата запуска процесса, дедлайн).</li><li><strong>Дата/Время</strong> — дата и время для указания точного момента события. Необходимо, когда важна не только дата, но и время (например, время начала задачи, момент завершения этапа).</li></ul><p><strong>Исчисляемые и относительные единицы</strong></p>", 4)),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          _cache[15] || (_cache[15] = createBaseVNode(
            "strong",
            null,
            "Метрика",
            -1
            /* CACHED */
          )),
          _cache[16] || (_cache[16] = createTextVNode(
            " — показатель для измерения эффективности процесса. Требует указания направления изменения (больше лучше / меньше лучше) и единицы измерения (руб., %, дни и т.д.). Отражается во вкладке ",
            -1
            /* CACHED */
          )),
          createVNode(_component_Fm, { p: "bp_tree.metrics" }),
          _cache[17] || (_cache[17] = createTextVNode(
            " бизнес-процесса.",
            -1
            /* CACHED */
          ))
        ])
      ]),
      _cache[19] || (_cache[19] = createStaticVNode("<p><strong>Выбор из заранее подготовленных справочников</strong></p><ul><li><strong>Одиночный выбор</strong> — позволяет выбрать одно значение из справочника. Справочник — это список заранее определенных значений. Например, справочник &quot;Статус процесса&quot; может содержать значения: &quot;В разработке&quot;, &quot;На согласовании&quot;, &quot;Утвержден&quot;. Справочники могут содержать вложенные справочники для создания иерархической структуры данных.</li><li><strong>Мульти-выбор</strong> — позволяет выбрать несколько значений из справочника одновременно. Полезно, когда параметр может иметь несколько вариантов ответа. Например, для параметра &quot;Ответственные подразделения&quot; можно выбрать несколько подразделений из справочника: &quot;IT-отдел&quot;, &quot;Финансовый отдел&quot;, &quot;Отдел продаж&quot;.</li></ul><p><strong>Ссылки на заранее созданные объекты бизнес-процессов</strong></p><ul><li><strong>Сотрудники</strong> — ссылка на конкретного сотрудника в системе. Используйте этот тип, когда параметр должен хранить именно человека (например, куратор процесса).</li><li><strong>Элемент оргструктуры</strong> — ссылка на подразделение или позицию в оргструктуре. Подходит, если нужно хранить организационную единицу (например, ответственное подразделение).</li><li><strong>Элемент архитектуры</strong> — ссылка на архитектурный объект (систему, приложение и т.п.). Используйте, когда параметр описывает связанную систему или ИТ-актив.</li><li><strong>Роль (исполнитель)</strong> — ссылка на роль исполнителя процесса/активности. Подходит для хранения ответственных ролей.</li></ul>", 4))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/main/faq/custom-fields/","title":"","lang":"ru-RU","frontmatter":{"bp_reg":{"custom_fields":"<i class=\\"pi pi-sliders-h\\"></i> **Пользовательские поля**"},"bp_tree":{"metrics":"<i class=\\"pi pi-chart-line\\"></i> **Показатели**","options":"<i class=\\"pi pi-hashtag\\"></i> **Параметры**"},"universal":{"plus":"<i class=\\"pi pi-plus\\"></i>"}},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.53,"words":460},"filePathRelative":"main/faq/custom-fields/index.md","excerpt":"<h4>Пользовательские поля</h4>\\n<details class=\\"hint-container details\\"><summary>Что такое </summary>\\n</details>\\n<details class=\\"hint-container details\\"><summary>Создание пользовательских полей</summary>\\n<p>Все пользовательские поля, кроме <strong>Метрика</strong>, отражаются во вкладке </p>\\n<p><img src=\\"https://storage.yandexcloud.net/stormbpmn-img-prod/media/screenshots/app/custom_fields/create/cf_create.webp\\" alt=\\"\\"></p>\\n</details>"}');
export {
  index_html as comp,
  data
};
//# sourceMappingURL=index.html-B9X1aGRs.js.map
