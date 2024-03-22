
function Dish(name, price, weight, description, photoUrl){
    this.name = name;
    this.price = price;
    this.weight = weight;
    this.description = description;
    this.fullPrice = function(){
        return this.price + "р"
    };
    this.fullWeight = function(){
        return this.weight + "гр"
    };
    this.photoUrl = photoUrl;
}

const donburi = new Dish("Донбури", 650, 300, "Лосось, авокадо, соус Спайси Майо, кунжутный соус, Понзу соус, икра тобика, кунжут, лук зеленый, слайс арахиса, микрозелень, водоросли нори, лимон.", "https://i.pinimg.com/originals/ca/93/bb/ca93bb0a6222f0c6fb9df7be6ec31def.jpg");
const salad = new Dish("Салат с черными грибами Муэр", 380, 200, "Черные древесные грибы, морковь, огурец красный лук, болгарский перец, зелёный лук, кинза, кунжут, фирменная заправка.", "https://static.tildacdn.com/stor6239-6332-4133-b363-656532656563/41893471.jpg");
const tataki = new Dish ("Татаки туна сарада", 720, 210, "Тунец, микс салатов, ореховый соус, соевый соусос с листьями шисо, кумкват, зерна бобов эдамамэ, слайс арахиса, микрозелень, кунжут.", "https://static.tildacdn.com/stor3365-3632-4336-b530-633631363661/60574966.jpg");
const gurino = new Dish("Гурино Эби", 720, 300, "Креветки темпура, фирменный васаби соус, ореховый соус, цитрусовый соус, микс салатов, слайс арахиса, кумкват, унаги соус, икра тобика, кунжут, микрозелень.", "https://thumb.tildacdn.com/stor6539-6430-4265-a530-373064666235/-/format/webp/41022618.jpg");
const musses = new Dish("Мидии Гигант Киви Спайси", 650, 390, "Мидии, спайси соус, рис, нори, кунжут, кумкват, соус унаги.", "https://bogatyr.club/uploads/posts/2023-06/1687449449_bogatyr-club-p-midii-kivi-zapechennie-foni-krasivo-7.jpg");
const unaju = new Dish("Унаджу", 790, 275, "Рис Японика, угорь, соус унаги, приправа шичими, кунжут, васаби, долька лимона.", "https://m.imperial-sushi.ru/uploaded/18/ce/5c/7bc32868963c315489c08b4b23.jpg");
const chuka = new Dish("Салат Чука", 360, 180, "Водоросли, лимон, кунжутный соус, кунжут, микрозелень.", "https://ketokotleta.ru/wp-content/uploads/a/3/7/a3747ff0885a21916af4b1ca39db237d.jpeg");

const salatAndAppetizer = [donburi, salad, tataki, gurino, musses, unaju, chuka];

const lay = new Dish("Лау", 730, 550, "Морской окунь, тигровые креветки, осьминоги, новозеландские мидии, куриный бульон с лемонграссом, томатами, ананасом, имбирём, аутентичными вьетнамскими пряностями и приправами, лук репчатый, лук зеленый, вешенки, шампиньоны, перец чили, паста из тамаринда, чёрный перец, кинза.", "https://thumb.tildacdn.com/stor3433-3562-4535-b237-316330363335/-/format/webp/44814884.jpg");
const tomCoconut = new Dish("Том Ям Coconut", 740, 660, "Куриный бульон, паста том-ям, тайские специи, помидоры черри, красный лук, грибы вешенки, кокосовое молоко, грибы Цао-гу, курица, креветки, перец чили, кинза, лайм, рис.", "https://menu2go.ru/images/food/553/553_775_20231206145609_7501.jpg");
const tomKxa = new Dish("Том Кха", 540, 600, "Куриный бульон, паста том кха, кокосовое молоко, тайские специи, красный лук, зеленый лук, грибы вешенки, куриное филе, грибы шампиньоны, помидоры черри, кинза, лайм, рис.", "https://domikexpert.ru/wp-content/uploads/5/d/7/5d7a69cd1940e647060572b1de5b7478.jpeg");
const tomRed = new Dish("Том Ям Red", 680, 600, "Куриный бульон, паста том-ям, тайские специи, помидоры черри, красный лук, грибы вешенки, грибы Цао-гу, перец чили, кинза, лайм, курица, креветки, рис.", "http://static.tildacdn.com/tild3137-6531-4337-a366-623035336432/2S9A0575.jpg");
const miso = new Dish("Мисо Суп", 310, 300, "Бульон на основе тунца и мисо пасты, тофу, грибы намеко, водоросли вакаме, лук порей, зеленый лук, кунжут.", "https://vego-kolbasa.ru/wp-content/uploads/d/b/5/db58c685a1d4f0918908a05882e37755.jpeg");
const bigFoBo = new Dish("BIG Фо Бо", 600, 820, "Бульон Фо Бо, рисовая лапша, говядина, лук репчатый, лук зеленый, базилик, кинза, кунжут, соевый соус, перец чили, перец черный молотый.", "https://thumb.tildacdn.com/tild6563-3864-4362-a663-663731306535/-/format/webp/205.jpg");
const foBo = new Dish("Фо бо", 490, 580, "Бульон Фо Бо, рисовая лапша, говядина, лук репчатый, лук зеленый, базилик, кинза, кунжут, соевый соус, перец чили, перец черный молотый.", "https://smapse.ru/storage/2021/06/pho-bo-smapse-eda.jpg");

const soup = [lay, tomCoconut, tomKxa, tomRed, miso, bigFoBo, foBo];

const tonkatsu = new Dish("Тонкоцу", 630, 600, "Бульон тонкоцу, лапша, маринованный бамбук менма, маринованное яйцо, консервированная кукуруза, лук зеленый, свинина чашу, грибы эноки, нори, кунжут, чесночное масло.", "https://i.pinimg.com/originals/3b/0b/6a/3b0b6ae41d4b2c58772918752043d192.jpg");
const naruto = new Dish("Наруто", 790, 870, "Бульон тонкоцу, лапша Рамен, маринованный бамбук менма, маринованное яйцо, лук зеленый, свинина чащу, нори, чесночное масло.", "https://thumb.tildacdn.com/tild3963-3965-4631-a437-663636653165/-/format/webp/154.jpg");
const misoRam = new Dish("Мисо", 630, 600, "Куриный бульон на основе мисо, домашняя лапша, маринованное яйцо, филе лосося, побеги бамбука менма, мини-кукуруза, грибы эноки, зеленый лук, водоросли нори, приправа дашида рыбная, кунжут.", "https://thumb.tildacdn.com/tild3737-3036-4861-b565-663464633962/-/format/webp/138.jpg");
const koyan = new Dish("KOЯN", 790, 870, "Бульон мисо, лапша Рамен, свинина чашу, маринованный бамбук менма, сливочное масло, кукуруза консервированная, лук зеленый, водоросли вакаме, нити чили, кунжут, чесночное масло, приправа шичими.", "https://thumb.tildacdn.com/tild6437-3637-4338-b934-353036646437/-/format/webp/144.jpg");

const ramen = [tonkatsu, naruto, misoRam, koyan];

const scallop = new Dish("Гребешок", 890, 170, "Гребешок, дайкон, огурец, имбирь, васаби, лист бамбука, микрозелень, лимон, соус Аоджисо, кумкват.", "https://vkus-eda-dostavka.ru/static/images/f8b0c3d26dd58a5be447c616cf280131-600x450.jpeg");
const salmon = new Dish("Лосось", 790, 170, "Лосось, дайкон, огурец, имбирь, васаби, лист бамбука, микрозелень, лимон, соус Аоджисо, кумкват.", "https://static.tildacdn.com/tild3534-3034-4737-a561-333062636239/_.jpg");
const ounce = new Dish("Тунец", 790, 170, "Тунец, дайкон, огурец, имбирь, васаби, лист бамбука, микрозелень, лимон, соус Аоджисо, кумкват.", "https://vorona.top/uploads/posts/2023-04/1681681451_vorona-top-p-rozovii-tunets-krasivo-70.jpg");

const sashimi = [scallop, salmon, ounce];

const bakedSalmon = new Dish("С лососем", 350, 150, "Рис, лосось, спайси соус.", "https://pizzamore.ru/d/sushi_s_lososem.jpg");
const bakedOunce = new Dish("С тунцом", 310, 120, "Рис, тунец, спайси соус.", "https://menu2go.ru/images/food/462/462_20221005164107_2706.jpg");
const bakedEel = new Dish("С угрем", 390, 150, "Рис, угорь, спайси соус.", "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663703425_41-mykaleidoscope-ru-p-sushi-s-ugrem-oboi-43.jpg");
const bakedCrab = new Dish("С крабом", 430, 150, "Рис, краб, спайси соус.", "https://static.tildacdn.com/tild6666-3464-4631-a134-363630623161/4t.jpg");
const bakedScallop = new Dish("С гребешком", 390, 190, "Рис, гребешок, спайси соус.", "https://static.tildacdn.com/stor3832-6236-4065-a563-643832643039/11004267.jpg");

const sushi = [bakedSalmon, bakedOunce, bakedEel, bakedCrab, bakedScallop];

const black = new Dish("Снежный юэбин черный", 240, "-", "Аутентичный китайский пряник с копчёным шоколадом и хрустиланом.", "https://thumb.tildacdn.com/stor3332-3531-4631-b937-636437383463/-/format/webp/18172533.jpg");
const red = new Dish("Снежный юэбин красный", 250, "-", "Аутентичный китайский пряник с сырным кремом, белым шоколадом и вишней.", "https://thumb.tildacdn.com/stor3834-6431-4336-b136-643231353439/-/format/webp/65409448.jpg");
const green = new Dish("Снежный юэбин зелёный", 250, "-", "Аутентичный китайский пряник с взбивным ганашем маття.", "https://thumb.tildacdn.com/stor3434-3366-4864-b634-623937386433/-/format/webp/30823823.jpg");

const dessert = [black, red, green];

let elem = document.getElementById("show");
let info

function setValue(value){
    let div = document.createElement('div');
    div.className = "stylediv";
    let divName = document.createElement('div');
    let divWeight = document.createElement('div');
    let divPrice = document.createElement('div');
    divWeight.className = "styleWeight";
    divPrice.className = "stylePrice";
    divName.className = "styleName";
    divName.innerHTML = value.name;
    divWeight.innerHTML = value.fullWeight();
    divPrice.innerHTML = value.fullPrice();
    div.append(divName, divWeight, divPrice);
    div.addEventListener('click', function(){
        elem.style.display = "block";
        info = document.createElement('div');

        let nameAndPhoto = document.createElement('div');
        nameAndPhoto.className = "info";

        let name = document.createElement('p');
        name.className = "infoName";
        name.innerHTML = value.name;
        

        let description = document.createElement('p');
        description.innerHTML = value.description;
        description.className = "infoDesc"

        let price = document.createElement('p');
        price.innerHTML = value.fullPrice();
        price.className = "infoPrice";

        let weight = document.createElement('p');
        weight.innerHTML= value.fullWeight();
        weight.className = "infoPrice";

        let photo = document.createElement('img');
        photo.src = value.photoUrl;
        photo.className = "infoPhoto";
        
        name.append(description, weight, price);
        nameAndPhoto.append(photo, name);
        info.append(nameAndPhoto);
        document.getElementById("infoWindow").append(info);

    })
    return div;
}

function closeInfo(){
    info.remove();
    elem.style.display = "none";
}

salatAndAppetizer.forEach(function(value){
    document.getElementById("container").append(setValue(value));
})

soup.forEach(function(value){
    document.getElementById("soup").append(setValue(value));

})

ramen.forEach(function(value){
    document.getElementById("ramen").append(setValue(value));
})

dessert.forEach(function(value){
    document.getElementById("dessert").append(setValue(value));
})

sashimi.forEach(function(value){
    document.getElementById("sashimi").append(setValue(value));
})

sushi.forEach(function(value){
    document.getElementById("sushi").append(setValue(value));
})
