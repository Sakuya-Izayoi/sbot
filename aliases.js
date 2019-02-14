import * as c from "./commands";

export const commandsRegExp = [
	{
		r: /^(х[еэ]лп|помо(щь|ги)|команды|help|comm?ands?)[.!]?$/,
		f: c.Help
	},
	{
		r: /^(пинг|ping)[.!]?$/,
		f: c.Ping
	},
	{
		r: /^(пикча|имг|картинк?а|изображение|галерея|img|image|pic(ture)?|gallery)[.!,:]?$/,
		f: c.Img
	},
	{
		r: /^(т[еэ]ги|tags)[.!]?$/,
		f: c.Tags
	},
	{
		r: /^(отправ(ит)?ь|предложи(ть)?|пришли|прислать|send)$/,
		f: c.Send
	},
	{
		r: /^([пpрr]|поставь|отреагируй|реакция|react(ion)?)$/,
		f: c.React
	},
	{
		r: /^(эмо(д[жз]|ж)и|смайл(ики|ы)|emoji(s|list)?)[.!]?$/,
		f: c.EmojiList
	},
	{
		r: /^(стикер|sticker|э(мо(д[жз]|ж)и)?линк|e(moji)?link)$/,
		f: c.Sticker
	},
	{
		r: /^(сервер[аы]|servers)[.!]?$/,
		f: c.Servers
	},
	{
		r: /^(ав(атар(ка)?|к?а)|ava(tar)?|pfp)[.!]?$/,
		f: c.Avatar
	},
	{
		r: /^(приглашение|инвайт|invite)[.!]?$/,
		f: c.Invite
	},
	{
		r: /^(ап(тайм)?|up(time)?)[.!]?$/,
		f: c.Uptime
	},
	{
		r: /^(hs|хс|хоумстак|homestuck)[.!]?$/,
		f: c.Homestuck
	},
	{
		r: /^(кинопинг|cinemaping)[.!]?$/,
		f: c.CinemaPing
	},
	{
		r: /^(sftime)[.!]?$/,
		f: c.SnowflakeTime
	}
]
export const simpleAnswers = [
	{
		r: /^(прив(ет(ствую)?)?|здравствуй(те)?|х[ао]й|хауди)[.!]?$/,
		t: ["Привет.", "Hello, world!", "Доброго времени суток!"],
		e: null
	},
	{
		r: /^(пока|до свидания|прощай(те)?|до скорого)[.!]?$/,
		t: ["Пока!", "До скорой встречи!", "До свидания!"],
		e: null
	},
	{
		r: /^((доброй|спокойной) ночи|(добрых|спокойных|хороших|сладких) снов)[.!]?/,
		t: null,
		e: "🌃"
	},
	{
		r: /^(как дела|что (ты )?делаешь)[?]?/,
		t: ["Отвечаю на твоё сообщение.", "Какие дела могут быть у скрипта?"],
		e: null
	},
	{
		r: /^((что ты|ты что) такое|(кто ты|ты кто)( такой)?)[?]?/,
		t: ["Я – просто скрипт."],
		e: null
	}
]
export const translatedTags = {
	"screenshot" : "скрин(шот)?",
	"photoshop" : "фотошоп|фш",
	"art" : "арт|рисунок",
	"gif" : "гиф(ка)?",
	"web" : "веб|интернет[ы]?",
	"minecraft" : "майн(крафт)?",
	"rncr" : "рнкр",
	"randomcraft" : "рандомкрафт",
	"chaoscraft" : "хаоскрафт",
	"likobsk" : "лайкобск",
	"castit" : "кастит",
	"zombiesland" : "зомби[сз]?ленд|зл",
	"hub" : "хаб",
	"whitelist" : "вайтлист",
	"creative" : "креатив",
	"parkour" : "паркур",
	"skyblock" : "скайблок",
	"castlewars" : "кастлв[ао]рс",
	"skywars" : "скайв[ао]рс",
	"build" : "билд(-?сервер)?",
	"getup" : "г[еэи]т[ау]п",
	"haivon" : "хайвон",
	"playerchar" : "пл[аое]й?ер(_?чар)?|чар",
	"dragon" : "др[аэ][кг]он|арч(енгиус)?|(антик(ь?ю|у)и)?авиум",
	"rult" : "р[ау]л[еь]?т",
	"laimon" : "лаймон",
	"imody" : "имоди",
	"kamka" : "камка",
	"namiya" : "намия",
	"subsub" : "с[ау]б(с[ау]б)?",
	"columb" : "[зск][ао]лум[бп]",
	"vasya" : "вася(ок)?",
	"paper" : "п(а|эй|ей)пер|бума(г|жк)а",
	"bug" : "баг",
	"dank" : "д[аэ]нк",
	"map" : "карта",
	"sign" : "табличка",
	"creeper" : "крип(ер|ак)",
	"cake" : "торт(ик)?",
	"irondoor" : "железнаядверь|жд"
};