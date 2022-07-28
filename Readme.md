# HOME WORK - Rock, paper, scissors game

> :information_source: **deadline** - через неделю
>
> :warning: **Не забудьте создать новый бранч и открыть пул-реквест, когда будете готовы!**

## Описание игры

Игра "Камень ножницы бумага". Все знают правила)

Будем играть против компьютера. Игрок выбирает, что хочет загадать, ваш код делает свой выбор рандомом. Играем до 10 очков.

Разметка и стили готовы. Осталось только написать скрипт.

## Как это должно все выгдядеть

Откройте в браузере `index.html`. Мы видим два поля для игрока и компьютера, счетчик раундов, результат раунда и очки каждого игрока.

Все начинается с того, что пользователь выбирает, что он выкинет. Сразу после этого:

- в элементе `.round-counter` надо поменять текст на 'Round 1'
- скрипт должен рандомом сделать свой выбор и результат с картинкой надо положить в `.player-selection-container`
- в футерах обновите текст на 'Your choice: Rock' и 'PC selected: Paper' (в зависимости от выбора, конечно)
- добавьте одно очко тому, кто выиграл раунд или каждому, если ничья
- текст в элементе `.round-result` поменяйте на результат раунда ("It's a tie!", "You lost!" или "You won!")

После первого клика насинается отсчет раундов и становится видимой кнопка `Reset`. Думаю, что понятно, что она должна делать.

После достижени 10 очков победителю в `.player-selection-container` можно вставить элемент такой же как и кнопка для выбора, но с классом `.player-selection-victory`. На кнопке `Reset` надо написать текст "Play again"

> :information_source: Постарайтесь избежать кучи if-ов в момент определения попбедителя раунда. Попробуйте как-нибудь автоматизировать этот момент. Подумайте еще вот над какой идеей - а что, если где-то играют в такую игру с большим количеством фигур, можно ли как-то организовать код, чтобы смена правил не заставила переписывать логику?
