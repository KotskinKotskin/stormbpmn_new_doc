---
title: Работа с рейтингом качества процесса
description: 'Как работает рейтинг качества процесса в BPMN: проверка ошибок, уведомления, карточки замечаний и настройка правил качества диаграмм в команде.'
tags:
    - Спецфичи редактора BPMN
---

# Работа с рейтингом качества процесса

При моделировании сложных процессов легко допустить ошибку. В {{ product_name }} есть встроенная система оценки качества разрабатываемого процесса. Она оценивает качество процесса на основании ~40 правил проверки BPMN, которые система проверяет автоматически в реальном времени и показывает всплывающие уведомления и подсказки в основном окне редактора диаграмм в правой боковой панели.

Система проверки качества процессов позволяет не только не допускать ошибок в проектировании бизнес-процессов, но и контролировать качество распределенной и командной разработки диаграмм.

## Уведомления об ошибках в процессе

Уведомления об ошибках в процессе располагаются в правой боковой панели в разделе {{ process_editor.right_toolbar.buttons.check_mistakes }} главного экрана редактирования диаграмм:

![edit_process_overview_mistakes]({{ media.screenshots.team_settings }}/{{ media.actions.edit_process_overview }}/edit_process_overview_mistakes.png)

В верхней части раздела {{ process_editor.right_toolbar.buttons.check_mistakes }} есть **Рейтинг качества процесса** — чем больше балл, тем лучше качество процесса. Максимум — 10/10. Там же в секции есть трехцветная шкала, отражающая количество ошибок разной степени важности:

![edit_process_overview_graph]({{ media.screenshots.team_settings }}/{{ media.actions.edit_process_overview }}/edit_process_overview_graph.png)

Далее идут карточки с ошибками. Карточка состоит из названия элемента BPMN-схемы, который не соответствует требованиям оформления, типа ошибки и её описания, свёрнутой подсказки "Как исправить?":

![edit_process_overview_mistakes_tabs]({{ media.screenshots.team_settings }}/{{ media.actions.edit_process_overview }}/edit_process_overview_mistakes_tabs.png)

Всем элементам BPMN-схемы по умолчанию присваиваются автоматические технические названия (например, Event_19rj0rw, Participant_0nu1w1b), если название элемента не было задано вручную. В таком случае становится сложно понять, к какому элементу относится карточка ошибки, чтобы безошибочно перейти в элемент BPMN-схемы, не соответствующий стандарту — достаточно кликнуть по {{ universal.marker }}:

![edit_process_overview_mistakes_marker]({{ media.screenshots.team_settings }}/{{ media.actions.edit_process_overview }}/edit_process_overview_mistakes_marker.png)

Для большего удобства и интуитивности отображения ошибок на BPMN-схеме начиная с версии v6.6.3XXX {{ product_name }} по умолчанию карточки с возникающими ошибками отображаются также и на BPMN-схеме рядом с соответствующими элементами.

## Настройка правил проверки диаграмм

Правила проверки качества диаграмм можно настроить в {{ team.icon }} {{ universal.right_arrow }} {{ team.team_settings.icon }} {{ universal.right_arrow }} {{ team.team_settings.general_settings }}, секция {{ general_settings.check_list }}:

![overview_checklist_settings]({{ media.screenshots.team_settings }}/{{ media.actions.check_diagram_settings }}/overview_checklist_settings.png)


**Секция** {{ general_settings.quality }} позволяет задать минимальные требования к диаграммам команды. Например, можно настроить минимальную среднюю оценку, которую требует ваша команда. При нарушении этого показателя члены команды постоянно будут видеть уведомление о низком качестве процессов:

![overview_quality]({{ media.screenshots.team_settings }}/{{ media.actions.check_diagram_settings }}/overview_quality.png)

**Секция** {{ general_settings.check_list }} содержит правила уведомлений при нахождении ошибок в процессах. Существуют следующие уведомления:

- **Небольшое замечание** — не критичное уведомление, которое мало влияет на общую оценку качества процесса. Обозначается знаком {{ team.team_settings.small_mistake }}. Например, {{ team.team_settings.small_mistake }} **Нет имени** или {{ team.team_settings.small_mistake }} **Задачи без маркеров**:

    ![overview_small_mistake]({{ media.screenshots.team_settings }}/{{ media.actions.edit_process_overview }}/overview_small_mistake.png)

- **Обратить внимание** — важное уведомление, которое средне влияет на общую оценку качества процесса. Обозначается знаком {{ team.team_settings.attention }}. Например, {{ team.team_settings.attention }} **Много выходящих потоков**:

    ![overview_attention]({{ media.screenshots.team_settings }}/{{ media.actions.edit_process_overview }}/overview_attention.png)

- **Ошибка** — критически важное уведомление, которое сильно влияет на общую оценку качества процесса. Обозначается также знаком {{ team.team_settings.attention }}. Например, {{ team.team_settings.attention }} **Нет завершающего события**:

    ![overview_error]({{ media.screenshots.team_settings }}/{{ media.actions.edit_process_overview }}/overview_error.png)

Правила проверок можно менять по желанию. Можно изменить: заголовок, описание, критичность уведомления, а также включить или выключить его. Для редактирования правила — достаточно нажать на {{ universal.edit }} в правом крайнем столбце:

![overview_edit_attention]({{ media.screenshots.team_settings }}/{{ media.actions.check_diagram_settings }}/overview_edit_attention.png)