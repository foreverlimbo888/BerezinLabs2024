Опис аналізу та прийнятих рішень щодо рефакторингу:
Початковий код містив багато рядків коду в одному методі, що робило його незручним для читання та розуміння.
Метод виконував багато дій, що не завжди потрібні, наприклад, виведення результатів на консоль.
Обчислення та перевірки дублювалися, що могло призвести до помилок.
Рефакторінг методу calculateValues включає:
Виділення окремих функцій для обчислення кожної операції (сума, різниця, добуток, частка, модуль).
Виділення окремої функції для перевірки на нульові значення.
Видалення зайвого коду, що відповідає за виведення результатів на консоль.
Тестування показало, що рефакторінг не змінив поведінку методу calculateValues.
Рефакторінг покращив читабельність та зрозумілість коду, а також зробив його більш модульним та спростив архітектуру.