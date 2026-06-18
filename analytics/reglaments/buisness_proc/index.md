---
title: 'Регламент бизнес-процесса: создание шаблона, его загрузка и выгрузка готового регламента'
---

# Регламент бизнес-процесса: создание шаблона, его загрузка и выгрузка готового регламента

<div class="admonition-container" markdown="1">

➡️ (_templates/warnings/plan.md)
➡️ (_templates/reglaments/main_info.md)

</div>

Регламент бизнес-процесса может составить аналитик или другой ответственный из команды. Регламенты в {{ product_name }} составляются на базе шаблонов, написанных на языке [**SpEL**](https://docs.spring.io/spring-framework/reference/core/expressions.html) (Spring Expression Language). Шаблоны должны быть в формате DOCX.

## Подготовка шаблона регламента бизнес-процесса

ℹ️ "Доступные для выгрузки логические блоки"
    Сейчас для выгрузки доступны следующие логические блоки: описание процесса, история версий, схема бизнес-процесса, участники процесса, исполнители процесса, описание всех шагов процесса (с ролями и элементами архитектуры), связи с другими процессами, элементы архитектуры, согласование.


Для подготовки шаблона регламента бизнес-процесса нужно сначала ответить на следующие вопросы:

- Зачем нужен регламент?
- Для кого мы его пишем?
- Как он может помочь улучшить существующие бизнес-процессы?
- Как его можно использовать?
- Какие задачи с помощью его можно решить?

Когда структура регламента будет продумана, можно переходить к технической части работы — разметки шаблона с помощью **SpEL**. Удобнее делать разметку в MarkDown, после — конвертировать в DOCX. Кратко опишем свойства разметки **SpEL** и приведём используемые теги. Теги в **SpEL** обозначаются с помощью парных фигурных скобочек и названия тега между ними: `{{  название тега  }}`. Существуют также теги экстракторы, которые предоставляют доступ к информации основного тега, если тег содержит массив данных, например: 

```
<code v-pre>{{ participantsTable }}</code> - таблица участников
    <code v-pre>[typeStr]</code>  - тип участника
```

Также есть и специальные теги, которые содержат объекты. Например:

```
<code v-pre>{{ @processDiagram }}</code> - картинка схемы (требует ручного изменения под масштаб страницы после выгрузки)
```

Полный список тегов для регламента процесса с разделением по типам выглядит так:

1. Теги общей информации:
    ```
    <code v-pre>{{ TOC }}</code> - содержимое, будет работать только при открытии файла на Windows в Word
    <code v-pre>{{ name }}</code> - Имя процесса
    <code v-pre>{{ versionNumber }}</code> - номер последней версии
    <code v-pre>{{ versionDate }}</code> - дата последней версии
    <code v-pre>{{ authorName }}</code> - ФИО автора (из профиля автора)
    <code v-pre>{{ authorEmail }}</code> - email автора
    <code v-pre>{{ onlineVersionUrl }}</code> - ссылка на версию процесса в онлайне
    <code v-pre>{{ processDescription }}</code> - описание процесса
    ```

1. Табличные теги:

    - Таблица участников:
        ```
        <code v-pre>{{ participantsTable }}</code>
            <code v-pre>[typeStr]</code>  - тип участника
            <code v-pre>[person.email]</code> - почта
            <code v-pre>[person.firstName]</code> - имя
            <code v-pre>[person.lastName]</code> - фамилия
            <code v-pre>[person.patronymic]</code> - отчество
            <code v-pre>[person.phone]</code> - телефон
        ```
    
    - Таблица исполнителей процессов:
        ```
        <code v-pre>{{ assigneesListTable }}</code>
            <code v-pre>[name]</code> - название исполнителя
            <code v-pre>[type]</code> - тип исполнителя 
            <code v-pre>[count]</code> - количество задач
        ```
    
    - Таблица связей процесса:
        ```
        <code v-pre>{{ processCollaboration }}</code>
            <code v-pre>[type]</code> - тип  связи (мессадж, коллактивити)
            <code v-pre>[fromDiagramName]</code> - название диаграммы, откуда идет связь
            <code v-pre>[fromItemName]</code> - название элемента диаграммы, откуда идет связь
            <code v-pre>[toDiagramName]</code> - название диаграммы, куда идет связь
            <code v-pre>[toItemName]</code> - название элемента диаграммы, куда идет связь
        ```
    
    - Таблица элементов архитектуры процесса (без повторений):
        ```
        <code v-pre>{{ processAssets }}</code>
            <code v-pre>[assetType]</code> -тип элемента архитектуры
            <code v-pre>[assetTypeStr]</code> - тип элемента архитектуры на русском
            <code v-pre>[assetName]</code> - название элемента архитектуры
            <code v-pre>[+assetDescription]</code> - описание элемента архитектуры
            <code v-pre>[assetLink]</code> -внешняя ссылка
            <code v-pre>[assetLinkReg]</code> - красивая кликабельная ссылка, где под именем ссылка
        ```
    
    - Таблица элементов архитектуры процесса в привязке к задачам:
        ```
        <code v-pre>{{ processAssetsToActivity }}</code>
            <code v-pre>[assetType]</code> -тип элемента архитектуры
            <code v-pre>[assetTypeStr]</code> - тип элемента архитектуры на русском
            <code v-pre>[assetName]</code> - название элемента архитектуры
            <code v-pre>[+assetDescription]</code> - описание элемента архитектуры
            <code v-pre>[fromItemName]</code>- элемент, к которому прикреплен элемент архитектуры
            <code v-pre>[assetLink]</code> - внешняя ссылка строкой
            <code v-pre>[assetLinkReg]</code> - внешняя ссылка с положенной ссылкой в ворде
        ```
    
    - Таблица согласования процесса:
        ```
        <code v-pre>{{ processApprovals }}</code>
            <code v-pre>[createdOnStr]</code> - дата создания согласования
            <code v-pre>[approvalTimeStr]</code> - дата принятия решения согласования
            <code v-pre>[approverEmail]</code> - емейл согласующего
            <code v-pre>[status]</code> - статус согласования
            <code v-pre>[comment]</code> - комментарий согласования
            <code v-pre>[diagramVersion]</code> - версия, по которой принято решение
     
       ```
1. Массивы тегов:

    - Массив описания задач:
        ```
        <code v-pre>{{ ?assigneesListDescription }}</code> - начало массива
            <code v-pre>{{ activityName }}</code> - название элемента диаграммы (задачи)
            <code v-pre>{{ elementType }}</code> - тип элемента (событие, шлюз, задача)
            <code v-pre>{{ durationString  }}</code> - строка длительности задачи
            <code v-pre>{{ activityPoolName }}</code> - пул задачи
            <code v-pre>{{ assigneeName }}</code> - название исполнителя
            <code v-pre>{{ +activityDescription }}</code> - описание действия
            <code v-pre>{{ elementList }}</code> - элементы архитектуры внутри задачи (строкой)
            <code v-pre>{{ ?assetList }}</code> - элементы архитектуры, связанные с задачей, массивом (начало)
                <code v-pre>{{ assetType }}</code> -тип элемента архитектуры
                <code v-pre>{{ assetTypeStr }}</code> - тип элемента архитектуры на русском
                <code v-pre>{{ assetName }}</code> - название элемента архитектуры
                <code v-pre>{{ +assetDescription }}</code> - описание элемента архитектуры
                <code v-pre>{{ assetLink }}</code> -внешняя ссылка
                <code v-pre>{{ assetLinkReg }}</code> - красивая кликабельная ссылка, где под именем ссылка
            <code v-pre>{{ /assetList }}</code> - окончание массива элементы архитектуры, связанные с задачей
        <code v-pre>{{ /assigneesListDescription }}</code> - окончание массива описания задач
        ```
    - Массив пулов с описанием задач в каждом из них:
        ```
        <code v-pre>{{ ?assigneesListDescriptionByPool }}</code> - начало массива пулов
            <code v-pre>{{ first }}</code> - название пула
            <code v-pre>{{ ?second }}</code> - начало массива задач в пуле
                Внутри него те же хэштеги описания задач, что описаны выше:
                <code v-pre>{{ activityName }}</code> - название элемента диаграммы
                ...
            <code v-pre>{{ /second }}</code> - окончание массива задач в пуле
        <code v-pre>{{ /assigneesListDescriptionByPool }}</code> - окончание массива пулов
        ```

1. Теги объектов:

    - Картинка схемы (требует ручного изменения под масштаб страницы после выгрузки): `<code v-pre>{{ @processDiagram }}</code>`.

## Загрузка/выгрузка шаблонов

После того как шаблон будет подготовлен, его нужно загрузить через раздел {{ setup_app.icon }} {{ universal.right_arrow }} {{ setup_app.reglaments_templates }}:

![](./img/upload_doc_template_step_01.png)

1. Кликните по кнопке **Загрузить свой шаблон** в правом верхнем углу.
1. Задайте имя шаблона:

    ![](./img/upload_doc_template_step_02.png)

1. Выберите тип шаблона — **Для процесса**:

    ![](./img/upload_doc_template_step_03.png)

1. Загрузите шаблон и нажмите кнопку **Сохранить шаблон**:

    ![](./img/upload_doc_template_step_04.png)

После загрузки шаблона, он будет показан в списке загруженных шаблонов:

![](./img/upload_doc_template_step_05.png)

### Выгрузка регламента по шаблону

Перейдите в диаграмму и выгрузите регламент по шаблону:

1. Перейдите в раздел {{ team.icon }} {{ universal.right_arrow }} {{ bs_models.bs_m }} {{ bs_models.models_list }}:

    ![navigate_to_all_processes](../../../approvals/reglaments/img/navigate_to_all_processes.png)
1. Выберите нужную вам модель процесса.
1. Кликните по {{ universal.extra }} в верхней панели инструментов и из выпадающего списка выберите пункт {{ universal.download }} **Скачать**:

    ![reglament_export_step_01](../../../approvals/reglaments/img/reglament_export_step_01.png)
1. Выберите шаблон регламента для скачивания из выпадающего списка и нажмите кнопку **Скачать регламент**:

    ![reglament_export_step_02](../../../approvals/reglaments/img/reglament_export_step_02.png)

Откройте выгруженный регламент удобным для вас приложением, работающим с DOCX и проверьте, что все теги отработали верно и разметка не съехала. Если какой-то тег не сработал — проверьте его название и синтаксис. 