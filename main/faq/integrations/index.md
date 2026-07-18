<span class="md-label">🏷️ Confluence</span>

ℹ️🔽 "Встроить диаграмму {{ product_name }} в документ облачной версии Confluence"


    1. Перейдите в окно **Редактор диаграмм** и нажмите на кнопку {{ process_editor.upper_toolbar.buttons.share }} в верхней панели инструментов:

        ![share_process]({{ media.screenshots.diagram }}/{{ media.actions.diagram_share }}/share_process.png)

    2. Активируйте тумблер {{ universal.toggle }} **Доступ по ссылке** и кликните по кнопке {{ process_editor.upper_toolbar.buttons.embded_iframe }}:

        ![embed_iframe]({{ media.screenshots.diagram }}/{{ media.actions.diagram_share }}/embed_iframe.png)

    В буфер обмена будет скопирован код iframe. Временно его можно вставить в любой текстовый редактор. Позже понадобится только сама ссылка.

    3. Перейдите в облачный редактор Confluence, откройте документ, в который хотите вставить диаграмму, и перейдите в режим редактирования.

    4. Установите курсор в нужную строку документа, кликните по {{ universal.plus }} слева от курсора и выберите последний пункт выпадающего списка <i class="fa-solid fa-ellipsis"></i> **View more**:

        ![confluence_view_more]({{ media.screenshots.confluence }}/{{ media.screenshots.conf_embded_diagram}}/confluence_view_more.png)
    
    5. Введите в поиск «iframe» и выберите блок **Iframe**:

        ![confluence_iframe_block]({{ media.screenshots.confluence }}/{{ media.screenshots.conf_embded_diagram}}/confluence_iframe_block.png)
    
    6. В открывшемся окне настроек блока **Iframe** введите в поля справа следующие значения:

    - URL — укажите ссылку на iframe из скопированного кода (формата: `https://new-test.stormbpmn.com/app/diagram/bb7a69c1-e1a9-4140-8e98-e5aead2cb54b?overlays=...`).
    - Width — задайте 100%.
    - Height — по желанию.
    
    Остальные параметры опциональны.