Опис аналізу та прийнятих рішень щодо рефакторингу:
1. Рефакторинг коду з використанням поліморфізму:
Початковий код використовував оператор if/else if для розрахунку площі залежно від типу фігури.
Щоб спростити код, було використано поліморфізм.
Було створено окремі класи для кожної фігури (Circle, Rectangle, Triangle).
Кожен клас має метод calculateArea(), який розраховує площу відповідної фігури.
Тепер код більш зрозумілий та легкий для розширення.
2. Рефакторинг функції calculate_area:
Початкова функція calculate_area використовувала оператор if/else if для вибору методу розрахунку площі.
Щоб спростити код, було видалено оператор if/else if та створено окремі методи для кожного типу фігури ( calculateCircleArea(), calculateRectangleArea(), calculateTriangleArea() ).
Це зробило код більш зрозумілим та модульним.