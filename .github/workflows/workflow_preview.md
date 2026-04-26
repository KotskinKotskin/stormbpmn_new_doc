# Workflow-предпросмотр PR

Это workflow для сборки документации и preview на стороннем сервере, где установлен либо Caddy, либо Nginx. Верхнеуровневая схема работы workflow:

- Изменения в текущей ветке сливаются по модели shquash and merge с main, чтобы видить итоговый результат сборки документации как на продакшене.
- Подгатавливаются директории на gitHub-машине.
- Устанавлвается VuePress Hope
- Устанавливается UMDA
- Запускается скрипт сборки html-бандла с помощью UMDA и VuePress Hope
- Собранный бандл копируется на удаленный сервер по scp и кладётся за web-сервер для review документации.
- Ссылка на собранную документацию прикрепляется комментом.

Для продакшена документации используется другой workflow.

Переменные и секреты, которые нужно настроить в репозитории для работы workflow:

- ${AWS_ACCESS_KEY_ID}
- ${AWS_SECRET_ACCESS_KEY}
- ${SERVER_IP}
- ${SSH-KEY}
- ${S3_ENDPOINT}
- ${S3_REGION}
- ${S3_BUCKET_PROD_DOC}
- ${S3_BUCKET_PROD_IMG}

## Слияние веток
1. Берутся изменения в текущей ветке и сливаются с main (squash). Дока собирается целиком для препросмотра.

## Подготовка к работе
1. Step: `create_dirs`:
    - Создать директорию `/root/out_test_storage`
    - Создать директорию `/root/stormbpmn_project/`
    - Создать директорию `/root/output/vuepress_hope`
    - Создать директорию `/var/www/html/vuepress`

1. Step: `python_intall_requirements`
    - Проверить версию Python. Нужна версия 3.12.
    - Установить uv.

## Установка и проверка VuePress Hope
1. Step: `vuepress_hope_checkout`. Устанавливаем VuePress Hope -- https://github.com/Pseudolukian/vuepress_hope в директорию `/root/stormbpmn_project/stormbpmn_vuepress_hope`.
1. Step: `vuepress_hope_install`. Устанавливаем все зависимости и пакеты из pakage.
1. Step: `vuepress_hope_lifecheck`. Проверка, что VuePress установился.

## Установка и проверка umda
1. Step: `umda_checkout`. Устанавливаем umda -- https://github.com/Pseudolukian/umda в директорию `/root/stormbpmn_project/umda`
1. Step: `umda_install`:
    - Создать виртуальное окружение: `uv venv .umda`.
    - Активировать виртуальное окуржуение: `source .umda/bin/activate`.
    - Устанавливаем зависимости из requirements.txt: `uv pip install requirements.txt`.
1. Step: `umda_lifecheck`. Проверка, что umda работает -- выполнить скрипт `/root/stormbpmn_project/umda/psd_handler/test.py`. Директория `/root/out_test_storage` должна перестать быть пустой. 

## Запуск umda & vuepress hope
1. Выполнить скрипт `/root/stormbpmn_project/umda/vuepress_hope_build.sh`
1. Проверь, что директория `/var/www/html/vuepress` не пустая.
1. Сделать zip-архив `/var/www/html/vuepress`. 

## Копирование html-бандла на сервер для preview

1. Скопировать zip с html на сервер с помощью scp в директорию `${SERVER_IP}:/var/www/html/stormbpmn/{id-build}/`
1. Прислать в комменты ветки ссылку на preview
