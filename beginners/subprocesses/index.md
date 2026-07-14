---
title: Свернутый подпроцесс
description: Как создать свёрнутый подпроцесс в BPMN, перейти внутрь и запустить симуляцию токена.
tags:
    - Гайды создания элементов диаграммы BPMN
---

# Свернутый подпроцесс

Подпроцесс - это действие, которое может включать в себя другие действия, при этом уровень детализации может быть любым. Подпроцессы могут содержать неограниченное количество задач и других подпроцессов. По форме отображения на BPMN-схеме подпроцесс может быть **свёрнутым** или **развёрнутым**.

**Развернутый подпроцесс** отображается на BPMN-схеме как контейнер с уже раскрытым внутренним содержимым: внутри него видны задачи, события, развилки и потоки переходов. Такой формат используют, когда важно показать логику выполнения подпроцесса прямо на основной схеме и сделать ее понятной без перехода на отдельный уровень детализации:

![subprocess_expand]({{ media.screenshots.diagram }}/{{ media.actions.subproc_collapsed }}/subprocess_expand.png)

**Свернутый подпроцесс** отображается на BPMN-схеме как единый элемент (обычно с маркером `+`), без показа внутренних шагов. Детальная логика при этом выносится на отдельную диаграмму или в другой раздел документации. Такой способ помогает не перегружать основную схему и сохранять ее читаемость, когда внутренние шаги подпроцесса не критичны для общего понимания процесса:

![subprocess_collapsed]({{ media.screenshots.diagram }}/{{ media.actions.subproc_collapsed }}/subprocess_collapsed.png)


## Создание свёрнутого подпроцесса

Создать свёрнутый подпроцесс можно из развёрнутого подпроцесса:

- Выберите развёрнутый подпроцесс:
    ![create_subprocess_collapse_step_01]({{ media.screenshots.diagram }}/{{ media.actions.create_subprocess_collapse }}/create_subprocess_collapse_step_01.png)
- Кликните по {{ universal.wrench }} **Изменить элемент** в появившемся окне опций:
    ![create_subprocess_collapse_step_02]({{ media.screenshots.diagram }}/{{ media.actions.create_subprocess_collapse }}/create_subprocess_collapse_step_02.png)
- Выберите пункт {{ bpmn.subprocess_collapsed }}:
    ![create_subprocess_collapse_step_03]({{ media.screenshots.diagram }}/{{ media.actions.create_subprocess_collapse }}/create_subprocess_collapse_step_03.png)

После нажатия на {{ bpmn.subprocess_collapsed }} будет создан **Свернутый подпроцесс**:

![create_subprocess_collapse_step_04]({{ media.screenshots.diagram }}/{{ media.actions.create_subprocess_collapse }}/create_subprocess_collapse_step_04.png)

Также **Свернутый подпроцесс** можно создать из элемента {{ bpmn.task }} — следуйте инструкции выше.  
Для перехода внутрь свёрнутого подпроцесса кликните по иконке "стрелка" открытия окна — откроется диаграмма свёрнутого подпроцесса:
![subprocess_collapsed_open]({{ media.screenshots.diagram }}/{{ media.actions.subproc_collapsed }}/subprocess_collapsed_open.png)

## Симуляция токена в свёрнутом подпроцессе

1. Перейдите в свёрнутый подпроцесс, нажав на стрелку открытия окна свёрнутого подпроцесса. В окне просмотра и редактирования нажмите на кнопку {{ process_editor.upper_toolbar.buttons.tokken }}:

    ![tokeken_simulate_step_01]({{ media.screenshots.diagram }}/{{ media.actions.tokken_simulate }}/tokeken_simulate_step_01.png)

    Активируется процесс симуляции токена — появится тёмно-синяя окантовка окна редактора и появится панель управления скоростью симуляции токена:

    ![tokeken_simulate_step_02]({{ media.screenshots.diagram }}/{{ media.actions.tokken_simulate }}/tokeken_simulate_step_02.png)

1. Перейдите в основной процесс с помощью панели быстрой навигации:

    ![tokeken_simulate_step_03]({{ media.screenshots.diagram }}/{{ media.actions.tokken_simulate }}/tokeken_simulate_step_03.png)

1. Запустите процесс симуляции токена нажатием на кнопку **Запустить симуляцию токена**.

1. Вернитесь в свёрнутый подпроцесс и наблюдайте работу симуляции токена.

## Дополнительные материалы

В видео подробно показали, как создавать и настраивать свёрнутый подпроцесс (Collapsed Subprocess): добавление элемента на диаграмму, изменение типа (из Task в Subprocess), работу с маркером «+», внутреннюю модель процесса, переключение между свёрнутым и развёрнутым видом.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xWAEAfLwFJ8?si=-kDP4ABkL_e_TgKZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Продемонстрировали, как работать с симуляцией работы токена в свёрнутом подпроцессе:

<iframe width="560" height="315" src="https://www.youtube.com/embed/2zgkY7_v174?si=oPwW3W6NN9ScV0hY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>