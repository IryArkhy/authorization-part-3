**Webinar 20**

**Authorization**

При РЕГИСТРАЦИИ:

1. При введении данных может возникнуть ошибка ( -пароль (логин) слишком
   маленький или не прошел валидацию; -пользователь с таким именем уже
   существует) При ошибке придет сообщение, которое обясняет в чем проблема
   (лучше его выводить в консоль (при получении res при fetch-e))ю
2. Если регистрация успешна, то он back-end-а придет обьект с полями user:
   {name, email} и полем token - уникальный идентификатор для каждлго
   пользователя, который хранится и на клиенте и на сервере.

Когда человек регистрируется или логинится back-end выдает пользователю token.
Этот токен хранится и на клиенте, и на сервере. По этому token-у back-end
узнает, что пользователь был ранее зарегистрирован. Когда пользователь нажимает
logout, то token удаляется с клиента и с back-end-а. При новой регистрации или
каждой логинизации, юзеру выдается каждый раз новый токен.ТОКЕН ЖИВ пока
пользователь не разлогинится или пока срок жизни токена не истечет.

Persist token. Записывается токен в локалСтор для того, чтобы пользователь
оставался в системе.Но это делается не руками а спец библиотеками

Public/private routs FireBase (халявный back-end)