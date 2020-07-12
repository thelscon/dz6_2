'use strict';

alert ('Разбить задачу с угадыванием числа на ф-и' + 
        `\n` + 'Первая функция - циклический запуск запроса и проверка на завершенность.' +
        `\n` + 'Вторая функция - запрос и проверка на соответствие со сгенерированным числом');

function stageOne () {
    allScript: for ( ; ; ) {
        let userNumber = prompt ('Введите число от 1 до 10: ') ;
        
        if (userNumber === null) {
            alert ('Игра отменена.');
            return ;
        }
        else {
            userNumber = Number (userNumber) ;
        
            while (!userNumber || userNumber < 1 || userNumber > 10) {
                userNumber = prompt ('Введите число от 1 до 10: ') ;
                if (userNumber === null) {
                    alert ('Игра отменена.');
                    return ;
                }
                else {
                    userNumber = Number (userNumber) ;
                }
            }  
            
            return userNumber ;
        }
    }
    return ;
}

function stageTwo (userNumber) {
    if (userNumber) {
        let randomNumber = Math.floor (Math.random() * 10);
    
        allScript: for (let finish  = false; !finish; ) {       // с использованием for
            randomNumber = Math.floor (Math.random() * 10);
            
            if (userNumber === randomNumber) {
                alert ('Сгенерированное чисто - ' + randomNumber + ', вы угадали.');
                finish = true ;
                return ;
            }
            else {
                if (!confirm (  'Сгенерированное чисто - ' + randomNumber + 
                '. Введенное число - ' + userNumber + 
                ', вы не угадали. Продожить игру?')) {
                    alert ('Вы проиграли.') ;
                    return ;            
                }
                else {
                    return 1 ;
                }                
            }
        }
    }
    else {
        return ;
    }    
}

while (stageTwo (stageOne())) {}
