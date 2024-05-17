Опис аналізу та прийнятих рішень щодо рефакторингу:
1. Рефакторинг функцій calculate_total_price та calculate_total_price_with_tax:
Початковий код мав дублювання коду в двох функціях.
Щоб позбутися дублювання, було виділено окрему функцію calculateBasePrice, яка відповідає за обчислення базової ціни.
Функції calculateTotalPrice та calculateTotalPriceWithTax тепер викликають calculateBasePrice та додають до неї відповідні розрахунки (знижку або податок).
Це зробило код більш модульним та легшим для розуміння.
2. Рефакторинг класу DataAnalyzer:
Початковий код мав дублювання коду в методах calculateTotal, calculateAverage, calculateMinimum, calculateMaximum, оскільки всі вони використовували один і той же метод _calculateTotalAndCount.
Щоб уникнути дублювання, було перероблено функцію _calculateTotalAndCount, щоб повернути об'єкт з двома властивостями total та count.
Тепер методи calculateTotal, calculateAverage використовують цей об'єкт, отримуючи необхідні значення.
Це спростило код та зробило його більш читабельним.