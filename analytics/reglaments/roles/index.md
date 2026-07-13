---
title: 'Регламент роли: создание шаблона, его загрузка и выгрузка готового регламента'
---

# Регламент роли: создание шаблона, его загрузка и выгрузка готового регламента

<div class="admonition-container" markdown="1">

➡️ (_templates/warnings/plan.md)
➡️ (_templates/reglaments/main_info.md)

</div>

Регламент роли может составить аналитик или другой ответственный из команды. Регламенты в {{ product_name }} составляются на базе шаблонов, написанных на языке [**SpEL**](https://docs.spring.io/spring-framework/reference/core/expressions.html) (Spring Expression Language). Шаблоны должны быть в формате DOCX. 

Перед подготовкой собственного шаблона можно ознакомиться с уже подготовленными шаблонами:

- Базовый [шаблон](https://docs.google.com/document/d/17WWmGZGagXA6r4aFL59sCD4bCBvUaWXamCFAGf3iUMY/edit?usp=sharing) для быстрого старта.
- Расширенный [шаблон](https://disk.yandex.ru/i/XnBKp4pG4T684g).

## Подготовка шаблона регламента роли

ℹ️ "Доступные для выгрузки логические блоки"
    Сейчас для выгрузки доступны следующие логические блоки: описание роли; реестр процессов, в которых участвует эта роль; подробный перечень задач этих процессов с указанием подробностей и веб-ссылками на эти задачи; ведомость должностей, выполняющих роль; список работников по этим должностям.

Воспользуйтесь редактором DOCX-файлов или составьте шаблон в Markdown, а потом конвертируйте в DOCX-формат. Для формирования шаблона регламента роли доступны следующие категории тегов: теги общей информации, табличные теги и массивы тегов. 

### Теги общей информации

`{{` `TOC` `}}` — содержимое, будет работать только при открытии файла на Windows в Word. 
`{{` `assignee.name` `}}` — имя роли.  
`{{` `assignee.updatedOn` `}}` — дата обновления.  
`{{` `assignee.updateBy` `}}` — почта автора обновления.  
`{{` `onlineVersionUrl` `}}` — кликабельная ссылка на карточку.  
`{{` `+assignee.description` `}}` — описание роли.

### Табличные теги

`{{` `diagramEdgesCount` `}}` — таблица участия роли в процессах. Колонки:

```
[diagramName] — название процесса.
[count] — количество задач в процессе на роли.
```

### Массивы тегов

**Массив задач роли**

`{{` `assignee.diagramEdges` `}}` — массив задач роли.  
  `{{` `elementName` `}}`  — название задачи.  
  `{{` `diagramName` `}}` — название процесса.  
  `{{` `diagramStatus` `}}` — статус процесса.  
  `{{` `diagramElementId` `}}` — кликабельная ссылка на задачу в {{ product_name }}.  
  `{{` `assetList` `}}` — массив элементов архитектуры задачи (атрибуты в массиве такие же, как в разделе про процесс).

**Массив должностей, назначенных на роль**

`{{` `assigneeDetails` `}}` — массив должностей, назначенных на роль.  
    `[name]` — название.  
    `[+description]` — описание.  
    `[head.name]` — название руководителя текущей должности.  
    `[children]` — массив подчиненных должностей текущей должности.  

**Массив сотрудников, назначенных на должности, назначенные на роли**

`{{` `personsByAssignee` `}}` — массив сотрудников, назначенных на должности, назначенные на роли.  
    `[firstName]` — имя.  
    `[lastName]` — фамилия.  
    `[patronymic]` — отчество.  
    `[phone]` — номер телефона.  
    `[email]` — адрес электронной почты.

## Загрузка/выгрузка шаблонов

После того как шаблон будет подготовлен, его нужно загрузить через раздел {{ setup_app.icon }} {{ universal.right_arrow }} {{ setup_app.reglaments_templates }}:

![]({{ media.screenshots.app_settings }}/{{ media.actions.upload_doc_template }}/upload_doc_template_step_01.png)

1. Кликните по кнопке **Загрузить свой шаблон** в правом верхнем углу.
1. Задайте имя шаблона:

    ![]({{ media.screenshots.app_settings }}/{{ media.actions.upload_doc_template }}/upload_doc_template_step_02.png)

1. Выберите тип шаблона — **Для роли**:

    ![]({{ media.screenshots.app_settings }}/{{ media.actions.upload_doc_template }}/upload_doc_template_step_03.png)

1. Загрузите шаблон и нажмите кнопку **Сохранить шаблон**:

    ![]({{ media.screenshots.app_settings }}/{{ media.actions.upload_doc_template }}/upload_doc_template_step_04.png)

После загрузки шаблона он будет показан в списке загруженных шаблонов:

![]({{ media.screenshots.app_settings }}/{{ media.actions.upload_doc_template }}/upload_doc_template_step_05.png)

### Выгрузка регламента роли по шаблону

1. Перейдите в раздел {{ team.icon }} {{ universal.right_arrow }} {{ section_team.layouts.roles }}:

    ![]({{ media.screenshots.app_settings }}/{{ media.actions.download_reglament }}/download_reglament_step_01.png)

1. Выберите нужную вам роль (мы выбрали роль директора для демонстрации):

    ![]({{ media.screenshots.app_settings }}/{{ media.actions.download_reglament }}/download_reglament_step_02.png)

1. В карточке роли перейдите во вкладку **Регламенты**:

    ![]({{ media.screenshots.app_settings }}/{{ media.actions.download_reglament }}/download_reglament_step_03.png)

1. Выберите нужный вам шаблон регламента роли из списка доступных шаблонов:

    ![]({{ media.screenshots.app_settings }}/{{ media.actions.download_reglament }}/download_reglament_step_04.png)

1. Кликните по кнопке **Скачать регламент**:

    ![]({{ media.screenshots.app_settings }}/{{ media.actions.download_reglament }}/download_reglament_step_05.png)

Откройте выгруженный регламент удобным для вас приложением, работающим с DOCX, и проверьте, что все теги отработали верно и разметка не съехала. Если какой-то тег не сработал — проверьте его название и синтаксис. 