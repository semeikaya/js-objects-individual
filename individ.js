// Жизнь китайского соц работника
const chinaMan = {
    character: {
        name: 'ЧуньХуа',
        chinaSocialCredit: 3000,
        rice: 4,
        car: false,
        wife: false,
        mood: 60,
        children: false,
        money: 60000,
        energy: 20,
        work: true
    },
    setWork: function () {
        if (this.character.work === true && this.character.energy > 5 && this.character.mood > 4) {
            this.character.chinaSocialCredit += 500
            this.character.mood -= 1
            this.character.energy -= 1
            this.character.money += 500
            console.log('Партия гордиться тобой');
        }
        else {
            this.character.chinaSocialCredit += 100
            this.character.money += 100
            console.log('Ай-ай Партия Китай разочарован в вас!');
        }
    },
    buyCar: function () {
        if (this.character.money > 10000) {
            this.character.car = true
            this.character.money -= 10000
            this.character.mood += 5
            console.log("Балдежный китайский машина");
        } else {
            console.log('Наш завод сожалеет, что вы бомж');
        }
    },


    getMarried: function () {
        if (this.character.money > 50000 && this.character.mood > 50 && this.character.wife === false && this.character.energy >= 15) {
            this.character.wife = true
            this.character.money -= 50000
            this.character.mood -= 50
            this.character.children = true
            this.character.chinaSocialCredit += 1000
            this.character.energy -= 10
            console.log('Как же голова болеть от жена');
        } else {
            console.log('Я еще не готов к таким проблемам');
        }
    },


    makeiPhone: function () {
        if (this.character.chinaSocialCredit > 1000) {
            this.character.chinaSocialCredit -= 500
            this.character.money += 500
        }
        else {
            console.log('Не хватает chinaSocialCredit');
        }

    },
    makeXiaomi: function () {
        if (this.character.energy > 5) {
            this.character.chinaSocialCredit += 500
            this.character.money += 100
            this.character.energy -= 1
        }
    },
    setEat: function () {
        if (this.character.wife === true && this.character.rice > 2) {
            this.character.rice -= 3
            this.character.mood += 1
        }
        else if (this.character.rice > 0) {
            this.character.rice -= 1
            this.character.mood += 3
        }
        else {
            console.log('Нужно купить миска рис');
        }
    },
    buyRice: function () {
        if (this.character.money >= 5) {
            this.character.rice += 1
            this.character.money -= 5
        }
        else {
            console.log('Нужны юани');
        }
    },
    dontGoToWork: function () {
        this.character.work = false
        this.character.chinaSocialCredit = 0
        this.character.wife = false
        this.character.children = false
        this.character.mood += 5
        console.log('Вы уволены');
    }
}
chinaMan.buyCar()
console.log(chinaMan.character); 