// в этом файле хранятся сами вопросы в видде массива
// внутри которого хранятся ассоциативные массивы, состоящие из 2 частей
const quiz = [
	{
		"q" : "Готовы ли вы узнать какая вы Морковка?",
		"a" : {
			"t": "Да, готов!",
			"u": "Конечно готов!",
			"v": "Еще бы!",
		}
	},
	{
		"q" : "После тяжелого морковного дня вы...?",
		"a" : {
			"b": "Проведу время с тем кто дорог",
			"d": "Поищу острых ощущений на ботву",
			"c": "Лягу пюрешкой и расслаблюсь",
			"f": "Буду сидеть и переживать",
			"h": "Займусь любимым делом",
			"i": "Рабочий день никогда не окончен!",
			"g": "Буду работать над собой",
			"e": "Масочки, кремушки, ванна",
		}
	},
	{
		"q" : "Мой главный страх - ...",
		"a" : {
			"d": "Тоталитарный режим",
			"b": "Быть одной морковкой",
			"c": "Отсутствие денег",
			"e": "Желтеющая кожа",
			"h": "Не смогу больше есть вкусности",
			"g": "Потеря индивидуальности",
			"i": "У меня нет страхов",
			"f": "Зайцы-морковкоеды",
		}
	},
	{
		"q" : "Оружие которым вы бы защищались от опасности",
		"a" : {
			"f": "Все подряд что попадется",
			"c": "Мощный пулемет",
			"i": "Суперсила",
			"e": "Перцовый балончик",
			"g": "Боевой робот",
			"h": "Сила интелекта",
			"b": "Сила -убеждения",
			"d": "Катана или меч",
		}
	},
	{
		"q" : "Предпочитаемый вид спорта",
		"a" : {
			"c": "Жесткое кардио",
			"e": "Легкая растяжечка",
			"g": "Киберспорт",
			"f": "Самый безопасный",
			"d": "Боевые искусства",
			"h": "Лучше никакой",
			"b": "Пробежка в парке",
			"i": "Любой, главное побольше",
		}
	},
	{
		"q" : "Когда у вас ботва пышнее?",
		"a" : {
			"g": "После обеда",
			"b": "На красивом нежном закате",
			"c": "С утра пораньше",
			"i": "Я всегда неотразима",
			"h": "В выходные",
			"d": "Ночью",
			"e": "Прохладным вечером",
			"f": "Главное в тепле и уюте",
		}
	},
	{
		"q" : "Что предпочтете на ужин?",
		"a" : {
			"b": "Что-нибудь необычное",
			"c": "Полезную пищу",
			"d": "Что-нибудь остренькое",
			"e": "Легкий салатик",
			"f": "То что приготовлю сам!",
			"g": "Что-то простое... бутерброды?",
			"h": "Сладости с чаем",
			"i": "Ужин отдам врагу!",
		}
	},
	{
		"q" : "Любимый жанр кино?",
		"a" : {
			"f": "Ужасы",
			"b": "Мелодрамы",
			"g": "Детективы",
			"i": "Фантастика",
			"d": "Дорамы",
			"h": "Приключения",
			"c": "Семейные",
			"e": "Комедии",
		}
	},
	{
		"q" : "Как бы вы решили проблему бедности?",
		"a" : {
			"i": "Построил бы каждому дом",
			"e": "Стал бы волонтером в центре помощи",
			"b": "Главное чтобы человек был богат душевно",
			"f": "Я сам на грани бедности!",
			"h": "Купил бы каждому дом",
			"d": "Ввел бы жесткие законы",
			"g": "Сделал бы большое пожертвование",
			"c": "Никак, мне лень",
		}
	},
	{
		"q" : "Если вы умрете через год, чем займтесь оставшееся время?",
		"a" : {
			"b": "Проведу время с любимыми",
			"g": "Буду жить как жил",
			"c": "Лягу и ничего делать не буду",
			"e": "Постараюсь добиться вершин в своем деле",
			"f": "Буду постоянно паниковать",
			"d": "Сделаю то, чего бы никогда не сделал",
			"h": "Буду отрываться на всю катушку",
			"i": "Постараюсь сделать остальных счастливее",
		}
	},
	{
		"q" : "В какое бы время ты хотел попасть?",
		"a" : {
			"e": "Во времена диназавров",
			"b": "В 18 век, желательно Франция",
			"d": "В будущее, лет на 100 вперед",
			"f": "Во вчерашний выходной",
			"h": "В средневековье",
			"g": "В следующее тысячелетие",
			"i": "Мне и сейчас хорошо!",
			"c": "В года моей молодости",
		}
	},
	{
		"q" : "Какую музыку вы предпочтете?",
		"a" : {
			"i": "Шансон",
			"d": "K-POP",
			"f": "РЭП",
			"e": "Рок",
			"g": "Джаз",
			"b": "Про любовь",
			"h": "Поп-музыка",
			"c": "Классическая музыка",
		}
	},
]


// q - сам вопрос, а - варианты ответа