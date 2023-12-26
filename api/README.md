# HELLO

API для отправки лидов в KMA для встраивания на внешних лендах

# Установка

1. Распаковать содержимое архива;
2. Указать в адресной строке браузера ВАШ_САЙТ/api/install.php
3. Заполнить API ключ и поток в форме, сохранить
4. Проверить работоспособность можно запустив index.html (пример формы
   отправки).
5. Изменить ссылки редиректа на лендинг, если такие имеются, на Ваши (если
   преленд скачал в лк КМА, внизу преленда будет js скрипт подставляющий ссылку
   на лендинг)

# Техническая информация

1. Адрес приема лидов https://api.kma.biz/lead/add
2. Метод POST
3. Обязательтные заголовки:

- Authorization: Bearer XXX (XXX - ключ API из личного кабинета)
- Content-Type: application/x-www-form-urlencoded (должен быть по-умолчанию, но
  всё же)

4. Возможные заголовки:

- User-Agent - от пользователя
- X-Host-Url - ленд, на котором был принят заказ (формат: scheme://host)

5. Обязательтные данные POST:

- _channel_ - поток
- _name_ - имя клиента
- _phone_ - телефон клиента
- _ip_ - ip адрес клиента (не сервера!)

6. Желательные параметры POST:

- referer - источник перехода клиента (не ленда!)

7. Необязательные параметры POST

- data1-data5 - сабы
- is_mobile - признак мобильности (если передан, то перекроет определление по
  User-Agent)
- language - язык клиента
- country - страна клиента

8. Ответ от API:

- формат json
- успех \['code' => 0, 'message' => 'OK', 'order' => XXX\] (XXX - номер заказа)
- неудача \['code' => Y, 'message' => 'ZZZ'\] (Y - код ошибки, ZZZ - текст
  ошибки)