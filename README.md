### Задание 1
Установить библиотеку __Socket.IO__ в свой проект.

### Задание 2
На странице просмотра книги разработать функционал для её обсуждения в комментариях с использованием __Socket.IO__.

:white_check_mark: РЕШЕНИЕ:

В режиме разработки запустить сервисы
```Batchfile
docker compose -f docker-compose.dev.yml up
```
В режиме сборки образа сервиса **Библиотека** запустить сервисы
```Batchfile
docker compose -f docker-compose.build.yml up
```
В продуктивном режиме запустить сервисы
```Batchfile
docker compose up
```
1. Образ кастомного **Счетчика доступа к книге**
https://hub.docker.com/layers/14101916/redis_counter/v1.0.0/images/sha256:7d58f32187198d3ecc97d4acbe2a1e8c6278baca45057c0a9ab30f4d3f4984f1?uuid=CB9710F2-5DB5-4EBB-B5C3-FAA6849CDB3C
2. Образ кастомного сервиса **Библиотека**
https://hub.docker.com/layers/14101916/books_counter/v5.0.0/images/sha256:d424ae27205d78472009aa7c0cb6b15c9e05a12849757a1c0779f3873728cf15?uuid=CB9710F2-5DB5-4EBB-B5C3-FAA6849CDB3C