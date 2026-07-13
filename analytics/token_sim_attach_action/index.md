---
title: Симуляция токена в модели процесса на задачах с прикрепленными событиями
tags:
    - Спецфичи редактора BPMN
---

# Симуляция токена в модели процесса на задачах с прикрепленными событиями

С помощью симуляции токена можно проверить работоспособность диаграммы. Токен симулирует реальный процесс выполнения диаграммы. Поведением токена можно управлять. Например, останавливать его в определенных узлах, где есть вариативность событий, например, на задачах с прикрепленными событиями:

1. Войдите в режим симуляции токена, кликнув на кнопку {{ process_editor.upper_toolbar.buttons.tokken }} на верхней панели инструментов:

    ![play_token]({{ media.screenshots.diagram }}/{{ media.actions.token_sim_attach_action }}/play_token.png)

1. Нажмите на иконку {{ process_editor.token.pause }} рядом с задачей с прикрепленными событиями, чтобы активировать паузу (токен будет ожидать разрешения двигаться дальше):

    ![select_proc]({{ media.screenshots.diagram }}/{{ media.actions.token_sim_attach_action }}/select_proc.png)

1. Кликните по {{ process_editor.token.play }} на стартовом событии, чтобы активировать токен:

    ![token_play]({{ media.screenshots.diagram }}/{{ media.actions.token_sim_attach_action }}/token_play.png)

1. Когда токен доберётся до задачи с прикрепленными событиями, выберите нужный вам сценарий развития событий:

    ![choose_scenario]({{ media.screenshots.diagram }}/{{ media.actions.token_sim_attach_action }}/choose_scenario.png)

Вы можете запустить несколько токенов, просто нажав на {{ process_editor.token.play }} несколько раз, а на задаче можно нажать на несколько кнопок {{ process_editor.token.play }} с интервалом, чтобы наблюдать за разными сценариями работы токена.

Для большей наглядности работы токена на задачах с прикрепленными событиями мы подготовили видеоролик:

<iframe width="560" height="315" src="https://www.youtube.com/embed/jzs8HKMoKK8?si=cnFRQjo7hnbqUWCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>