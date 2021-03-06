/**
 * Detect BEM blocks in DOM: proof of concept
 */

(function(global) {
    var Makeup = global.Makeup || {fn: {}}; // for tests
    var $ = Makeup.$;
    var _ = Makeup._;

    var helpData = [{
        label: 'Документация',
        styles: {
            markup: 'font-family: Arial'
        },
        items: [{
            name: 'Hello World!',
            html: [
                'Привет!',
                'Давай попытаемся запустить makeup на твоём проекте.',
                'Чтобы перейти на следующий блок документации (Список), просто кликни по нему (посмотри на список слева).'
            ].join('<br /><br />')
        }, {
            name: 'Список',
            html: [
                'Слева ты видишь список блоков, компонентов, модулей, виджетов... whatever :). Главное, что конечные элементы этого списка - кусочки твоего UI.',
                'Makeup тебе подходит, если твоя вёрстка основана на АНБ (абсолютно независимых блоках), поэтому давай здесь и далее называть эти UI-куски – блоками.',
                'Список может быть простым или многоуровневым - это определяешь только ты в момент инициализации Makeup.'
            ].join('<br /><br />')
        }, {
            name: 'Инициализация',
            html: [
                'Библиотека makeup торчит наружу самовызывающимся конструктором window.Makeup. То есть, его можно вызвать с new, а можно без него.',
                'Инициализировать (включить) makeup просто: нужно вызвать Makeup(params), где params - опциональные параметры. Если их не будет (будет просто  Makeup()), то makeup попытается создать список блоков сам, исходя из того, что есть на странице в данный момент.',
                'Пример params ты можешь посмотреть в /demo/data.js.',
                'Данный туториал запущен при помощи Makeup.help().',
                'На странице может быть только один makeup.'
            ].join('<br /><br />')
        }, {
            name: 'Зависимости',
            html: [
                'Makeup это dev-инструмент, который не нужен на продакшене, поэтому все свои зависимости (jQuery, lodash, handlebars...) он содержит внутри себя. То есть, дополнительно к makeup.js и makeup.css ничего подключать не нужно!',
            ].join('<br /><br />')
        }, {
            name: 'Раз, два, три!',
            html: [
                'Сверху можно видеть всякие кнопки и ползунки. Можно тыкать их безо всяких опасений, безо всякой жалости - ничего не сломается :)',
                'Часть кнопок имеют шорткаты. Например, режим (mode) можно переключать клавишами с цифрами: 1, 2, 3 и 4.'
            ].join('<br /><br />')
        }, {
            name: 'templating',
            html: [
                'Пожалуй, самый сложный этап подключения makeup - настройка функции templating.',
                'Эта функция передаётся вторым аргументом при инициализации Makeup(params, templating).',
                'Задача этой функции - при клике в пункт списка слева, выводить связанный с этим пунктом блок.',
                'По-умолчанию, эта функция есть, и она пытается вывести поле item.html данного пункта. Это годится для создания документации, но совсем не подходит для разработки сложного приложения.',
                'Функция вызывается при любом переходе по списку. В аргументах она принимает текущий пункт, а вернуть она должна html, который вставится в положенное место.',
                'За это makeup не ограничивает тебя в выборе шаблонизатора.'
            ].join('<br /><br />')
        }
        // , {
        //     name: 'item',
        //     styles: {
        //         markup: "font-family: Arial"
        //     },
        //     html: [
        //         'styles - это объект, который может быть у одного item, и он содержать в себе три поля: wrapper, image и markup.',
        //         'Каждое имеющееся поле должно быть строкой, содержащей в себе стили, соответственно, для общего контейнера, для контейнера картинки, и для контейнера вёрстки.',
        //         'Например, у этого блока объект styles равен {wrapper: "border: 1px solid black;", markup: "border: 1px solid red; padding: 10px", image: "background: yellow; height: 100px;"}',
        //     ].join('<br /><br />'),
        //     items: [{
        //         name: 'styles',
        //         styles: {
        //             image: "background: yellow; height: 100px;",
        //             wrapper: "border: 1px solid black;",
        //             markup: "border: 1px solid red; padding: 10px; font-family: Courier New"
        //         },
        //         html: [
        //             'styles - это объект, который может быть у одного item, и он содержать в себе три поля: wrapper, image и markup.',
        //             'Каждое имеющееся поле должно быть строкой, содержащей в себе стили, соответственно, для общего контейнера, для контейнера картинки, и для контейнера вёрстки.',
        //             'Например, у этого блока объект styles равен {wrapper: "border: 1px solid black;", markup: "border: 1px solid red; padding: 10px", image: "background: yellow; height: 100px;"}',
        //         ].join('<br /><br />')
        //     }]
        // }
        ]
    }];

    Makeup.help = function() {
        return Makeup(helpData);
    };

})(this);
