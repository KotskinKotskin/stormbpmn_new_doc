---
title: Создание и изменение диаграмм с помощью AI-помощника
tags:
    - Спецфичи редактора BPMN
---

# Создание и изменение диаграмм с помощью AI-помощника

В {{ product_name }} есть встроенный AI-помощник, с помощью которого можно упростить создание диаграмм, PlantUML-моделей и их отдельных элементов, а также описаний задач. AI-помощник не только экономит время, но и создаёт сущности в {{ product_name }} без ошибок.

## Создание диаграмм по текстовому описанию с помощью AI

1. В главном меню {{ product_name }} кликните по кнопке {{ universal.plus }} на верхней панели управления справа от кнопки {{ main.head_panel.models }} и выберите {{ main.bpmn }} из выпадающего списка:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_diagramm }}/ai_create_diagramm_step_01.png)

1. Из предложенных вариантов создания модели выберите вариант **С помощью AI**:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_diagramm }}/ai_create_diagramm_step_02.png)

1. Введите текстовое описание диаграммы. Опишите процесс максимально подробно: участников, этапы, решения, результаты (минимум 100 символов). Ограничение длины запроса — 5 000 знаков. Для создания диаграммы нажмите кнопку **Создать модель**. В правой части модального окна появится версия диаграммы для предпросмотра:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_diagramm }}/ai_create_diagramm_step_03.png)

1. Для продолжения работы с созданной с помощью AI диаграммой кликните по кнопке **Использовать**:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_diagramm }}/ai_create_diagramm_step_04.png)

Созданная с помощью AI диаграмма будет добавлена в список уже существующих диаграмм под названием **Черновик**:

![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_diagramm }}/ai_create_diagramm_step_05.png)

## Создание следующих шагов диаграммы процесса с помощью AI

AI-помощник может создавать последующие шаги в диаграмме процесса, основываясь на контексте уже имеющихся элементов диаграммы и их связей. Построить новый шаг можно от активных элементов (начальных событий и задач разных типов) и логических развилок.

Пример использования AI для построения последующих шагов диаграммы:

1. Выделите активный элемент, от которого хотите построить следующий шаг, и кликните по кнопке {{ universal.ai }} **Подставить следующий элемент с помощью AI**:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_next_step_diagramm }}/ai_create_next_step_step_01.png)

1. Внесите правки в созданный с помощью AI шаг, если требуется.

Видеопример:

<iframe width="560" height="315" src="https://www.youtube.com/embed/IcEEY_g_KFs?si=mJz7gWaLRdFBdmEV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Создание описания для активных элементов диаграммы с помощью AI

С помощью AI-помощника можно создавать описание для активных элементов диаграммы: начальных и завершающих событий, задач разного типа, логических развилок. 

Для создания описания элемента:

1. Кликните по нему правой кнопкой мыши и выберите раздел **Подробное описание и время исполнения**:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_description }}/ai_create_description_01.png)

1. Кликните по кнопке {{ universal.ai }} **Получить описание от AI** для составления описания к активному элементу:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_description }}/ai_create_description_02.png)

1. Укажите сроки выполнения задачи в секции **Плановая длительность** (опционально) и кликните по кнопке **Сохранить**:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_description }}/ai_create_description_03.png)

## Создание PlantUML-модели с помощью AI

1. В главном меню {{ product_name }} кликните по кнопке {{ universal.plus }} на верхней панели управления справа от кнопки {{ main.head_panel.models }} и выберите {{ main.plantuml }} из выпадающего списка:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_plantuml }}/ai_create_plantuml_step_01.png)

1. Из предложенных вариантов создания модели выберите вариант **Создать с помощью AI**:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_plantuml }}/ai_create_plantuml_step_02.png)

1. Введите текстовое описание диаграммы в поле **Генерация диаграммы** и нажмите кнопку **Сгенерировать**:

    ![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_plantuml }}/ai_create_plantuml_step_04.png)

Если на каком-то из этапов генерации диаграммы случилась ошибка или AI-помощник сгенерировал не то, что ожидалось, можно откатить изменения и вернуться к любому из шагов создания модели. Для этого перейдите на вкладку {{ uml.history }}:

![]({{ media.screenshots.all_models }}/{{ media.actions.ai_create_plantuml }}/ai_create_plantuml_step_05.png)

Будьте осторожны и внимательны! При нажатии кнопки {{ uml.del_history }} история изменений диаграммы будет безвозвратно потеряна без возможности её восстановления.