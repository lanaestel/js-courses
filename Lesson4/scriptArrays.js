//1. Получить сумму кубов первых n натуральных чисел
function Cube(n) {
    let sum=0;
    for (let i=1; i<=n; i++){
        sum+=i ** 3;
    }
    console.log(sum);
}

/*2. Ввести строку, состоящую из нескольких слов, разделенных пробелами.
Нарезать строку в массив по словам и вывести ее поэлементно – по
одному слову в строке. **/
function SplitStrokeToArray(s) {
    let ArrayOfWords = s.split(' ');
    for (i=0; i<ArrayOfWords.length; i++){
        console.log(ArrayOfWords[i]);
    }
}

//3. Создать массив из n случайных чисел от 0 до 10 и вывести его
function SortRandom(n){
   let MyArray = [];
    for (i=0; i<n; i++){
MyArray[i]=Math.floor(Math.random() * (11));
    }
    console.log(MyArray);
}

//4. Создать множество из n случайных чисел от 0 до 10 и вывести его
function MapRandom(n) {
    let MyMap = new Map();
    for (i=1; i<=n; i++){
MyMap.set(i, Math.floor(Math.random() * (11)));
    }
    console.log(MyMap); //для наглядности вывод множества парами ключ => значение
    console.log(MyMap.values());
}

//5. Построить Треугольник Паскаля до n-й строки.**
//a. В обе стороны (возрастающей и нисходящей


//b. Отцентрированный, а не прижатый к краю консоли.function TriangleOfPascaleLeft(n) {
function TriangleOfPascal(n) {
    let StrokePrevious = [1];
    let ArrayOfSpacesFirstStroke = [];
    for (i=0; i<2*n; i++){
        ArrayOfSpacesFirstStroke[i] = ' ';
    }
    console.log(ArrayOfSpacesFirstStroke.join('') + StrokePrevious.join(''));
    for (i=0; i<n-1; i++){
        let StrokeOfSpaces = [];
        let StrokeNow = [];
        for (j=0; j<=i+1; j++){
            if (StrokePrevious[j-1]==undefined){
                StrokePrevious[j-1] = 0;
            }
            if (StrokePrevious[j]==undefined){
                StrokePrevious[j] = 0;
            }
            StrokeNow[j] = StrokePrevious[j-1] + StrokePrevious[j];
        }
        StrokeOfSpaces = [];
        for (k=(n-i-1)*2; k>=0; k--){
            StrokeOfSpaces[k] = ' ';
        }
        console.log(StrokeOfSpaces.join('')+StrokeNow.join(', '));
        StrokePrevious = StrokeNow;
    }
}

/*
6. Колхозница привезла на рынок для продажи корзину яиц. Продавала
она их по одной и той же цене. После продажи колхозница пожелала
проверить, верно ли она получала деньги. Но вот беда: она забыла,
сколько у нее было яиц. Вспомнила она только, что когда
перекладывала яйца по 2, то оставалось одно яйцо; одно яйцо
оставалось также при перекладывании яиц по 3, по 4, по 5 и по 6. Когда
же она перекладывала яйца по 7, то не оставалось ни одного.
Помоги колхознице сообразить, сколько у нее было яиц. *
 */
function CountOfEggs(n) {
    for (i=7; i<=n; i++)
    {
        if ((i%2==1)&(i%3==1)&(i%4==1)&(i%5==1)&(i%6==1)&(i%7==0))
        {
            console.log(i+' яиц');
        }
        else if(i==n)
        {
            console.log('увеличьте диапазон поиска');
         }
    }
}

/*7. Получить на ввод количество рублей и копеек и вывести в правильной
форме в виде текста, например, три рубля, одиннадцать рублей
тридцать пять копеек, двадцать две копейки. */

function MoneyFromNumberToWord(sum) {
let ArrayOfUnits = ['','один ', 'два ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять '];
let ArrayOfFemUnits = ['','одна ', 'две ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять '];
let ArrayOfOneDecade = ['десять ', 'одиннадцать ', 'двендацать ', 'тринадцать ', 'четырнадцать ', 'пятнадцать ', 'шестнадцать ', 'семнадцать ', 'восемнадцать ', 'девятнадцать '];
let ArrayOfDecades = ['', '', 'двадцать ', 'тридцать ', 'сорок ', 'пятьдесят ', 'шестьдесят ', 'семьдесят ', 'восемьдесят ', 'девяносто '];
let ArrayOfHundreds = ['', 'сто ', 'двести ', 'триста ', 'четыреста ', 'пятьсот ', 'шестьсот ', 'семьсот ', 'восемьсот ', 'девятьсот '];
let ArrayOfRubles = ['рублей ', 'рубль ', 'рубля ', 'рубля ', 'рубля ', 'рублей ', 'рублей ', 'рублей ', 'рублей ', 'рублей '];
let ArrayOfThousands = ['тысяч ', 'тысяча ', 'тысячи ', 'тысячи ', 'тысячи ', 'тысяч ', 'тысяч ', 'тысяч ', 'тысяч ', 'тысяч '];
let ArrayOfMillions = ['миллионов ', 'миллион ', 'миллиона ', 'миллиона ', 'миллиона ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов '];
let ArrayOfCents = ['копеек', 'копейка', 'копейки', 'копейки', 'копейки', 'копеек', 'копеек', 'копеек', 'копеек', 'копеек'];
let ArrayOfNumeral = sum.split('');
let RankOfAmount = 0;
for (i=0; i<ArrayOfNumeral.length; i++){
    if ((ArrayOfNumeral[i]!=',')&(ArrayOfNumeral[i]!='.')){
        RankOfAmount++; //вычисляем ранг числа для обратного прохода
    }
    else i=ArrayOfNumeral.length;
}
let StrokeOfText = 'Итого: ';
let j =RankOfAmount;
  for (i=0; i<RankOfAmount; i++){
        if (j % 3 == 0){
            StrokeOfText += ArrayOfHundreds[ArrayOfNumeral[i]];
        }
        if (j % 3 == 2){
            if (ArrayOfNumeral[i]==1){
                StrokeOfText += ArrayOfOneDecade[ArrayOfNumeral[i+1]];
                i++;
            }
            else StrokeOfText += ArrayOfDecades[ArrayOfNumeral[i]];
        }
        if (j % 3 == 1){
            if ((j==4)&(ArrayOfNumeral[i-1]!=1)){  //для одной и двух тысяч (не одиннадцати и двенадцати)
                if ((ArrayOfNumeral[i]==1)||(ArrayOfNumeral[i]==2)){
                    StrokeOfText += ArrayOfFemUnits[ArrayOfNumeral[i]];
                    }
            }
            else
            StrokeOfText += ArrayOfUnits[ArrayOfNumeral[i]];
            if (ArrayOfNumeral[i-1]!='0') {
                if (Math.floor(j / 3) == 2) {
                    StrokeOfText += ArrayOfMillions[ArrayOfNumeral[i]];
                }
                else if (Math.floor(j / 3) == 1) {
                    StrokeOfText += ArrayOfThousands[ArrayOfNumeral[i]];
                }
                else if (Math.floor(j / 3) == 0) {
                    if (ArrayOfNumeral[i - 1] == 1) {
                        StrokeOfText += 'рублей';
                    }
                    else StrokeOfText += ArrayOfRubles[ArrayOfNumeral[i]];
                }
                else {
                    StrokeOfText = 'Таки откуда у вас столько денег в этой стране?';
                    i = RankOfAmount;
                }
            }
           else
            {
                StrokeOfText += ArrayOfRubles[ArrayOfNumeral[i]];
                i=RankOfAmount;
            }
        }
        j--;
    }
    for (i=0; i<ArrayOfNumeral.length; i++){
        if ((ArrayOfNumeral[i]==',')||(ArrayOfNumeral[i]=='.')) {
            if ((ArrayOfNumeral.length - (i + 1)) != 2) {
                StrokeOfText = 'Копейки - количество сотых!';
                i = ArrayOfNumeral.length;
            }
            else  if (ArrayOfNumeral[i+1] == 1) {
                StrokeOfText += ArrayOfOneDecade[ArrayOfNumeral[i + 2]];
                StrokeOfText += 'копеек';
                i++;
            }
            else {
                StrokeOfText += ArrayOfDecades[ArrayOfNumeral[i + 1]];
                StrokeOfText += ArrayOfFemUnits[ArrayOfNumeral[i + 2]];
                StrokeOfText += ArrayOfCents[ArrayOfNumeral[i+2]];
                i +=2;
            }

        }
        }
        console.log(StrokeOfText);
}

/*8. Заданы день и месяц рождения, а также текущие день, месяц и год.
Определить, сколько дней осталось до дня рождения. */
function DaysToBirthday(Bday, Bmonth, day, month, year) {
    let DayByYear = 365;
    DaysByMonth = new Map();
    DaysByMonth
        .set(1, 31)
        .set(2, 28)
        .set(3, 31)
        .set(4, 30)
        .set(5, 31)
        .set(6, 30)
        .set(7, 31)
        .set(8, 31)
        .set(9, 30)
        .set(10, 31)
        .set(11, 30)
        .set(12, 31);
    let DaysByYear = 365;
    if (year%4==0){
        DaysByYear = 366;
        DaysByMonth(2, 29);
    }
    let NumberDayOfToday = day;
    for (i=1; i<month; i++){
        NumberDayOfToday += DaysByMonth.get(i); //315
    }
    let NumberDayOfBirthday = Bday;
    for (i=1; i<Bmonth; i++){
        NumberDayOfBirthday += DaysByMonth.get(i);
    }
    let difference = NumberDayOfBirthday - NumberDayOfToday;
   if ((difference < 0)&(Bmonth>2)&((year+1)%4==0)){
console.log(DaysByYear + 1 + difference);
   }
    else if (difference < 0){
        console.log(DaysByYear + difference);
    }
   else {
       console.log(difference);
   }
}