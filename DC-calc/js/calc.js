console.log("cals is ready");

let newRoom = `<div class="mainRoom mainRoomPUK" id="mainRoom PUK">
                    <div class="room" Id="idRoom PUK">
                        <div class="room-row">
                            <label for="nameRoom" class="nameOfRoom">Новая комната:</label>
                            <input type="text" id="nameRoom PUK" placeholder="Спальня" name="nameRoom" required minlength="4" maxlength="15" size="20" /> <br>
                            <label for="surfaceAreaRoom" class="surfaceOfAreaRoom">Площадь поверхности:</label>
                            <input type="text" id="surfaceAreaRoom PUK" placeholder="м.кв." name="surfaceAreaRoom" required minlength="4" maxlength="15" size="20" />
                            
                            <div class="aplicationOptionBlock">
                                <legend class = "applicationOption">Способ нанесения:</legend>
                                
                                <div>
                                    <input type="radio" id="brush room PUK" name="droneRoomPUK" value="brushRoom PUK" onclick="changeOplOpt('PUK')"/>
                                    <label for="brush room PUK">Кисть</label>
                                </div>
                                <div>
                                    <input type="radio" id="roller room PUK" name="droneRoomPUK" value="rollerRoom PUK" onclick="changeOplOpt('PUK')"/>
                                    <label for="roller room PUK">Валик</label>
                                </div>
                                <div>
                                    <input type="radio" id="sprayGun room PUK" name="droneRoomPUK" value="sprayGunRoom PUK" onclick="changeOplOpt('PUK')"/>
                                    <label for="sprayGun room PUK">Краскопульт</label>
                                </div>  
                                
                            </div>
                            <div class="pickPaintBlock"><button class="pickPaint" onclick="showpopup('PUK')"> Выбрать краску </button>  <span id="namePaintItogPUK">Не выбрано</span>  </div>
                        </div>
                    </div>
                    <div class="itogVarint itogVarintPUK" id="itogVarint PUK">

                    </div>
                </div>`
let newItog =`
                    <div class="itogVariant-row" id="itogVarint-row PUK">
                        <div class="itogVariantText" id="itogVarintTex PUK">
                            <b>namePAK, areaKAP кв.м.</b> <br>
                            <b>Краска:</b> namePaintKUP <br>
                            <b>Объем краски:</b> volumeYU л. <br>
                            <b>Сумма:</b> priceUY р.<br>
                        </div>
                    </div>
                `
let number = document.getElementById('roomNumberSelect')
let value = number.value
//console.log(value)
let oldvalye = 0;
let urId = 0;
function newBlock(){
    //document.getElementById("numbersOfRoom").innerHTML = "";
    number = document.getElementById('roomNumberSelect')
    
    value = number.value
    //console.log(value, oldvalye)
    if (oldvalye < +value) {
        for (let i = oldvalye + 1; i < +value + 1; i++) {
            $("div.numbersOfRoom-row").append(newRoom.replace(/PUK/g, i));

            let myAnimation = anime ({
            targets: 'div.room',
            translateX: 10,
            duration: 200, 
            easing: 'linear',
            // Параметры анимации
            direction: 'alternate',
            autoplay: true});
        } 
    }else {
        for (let i = +value + 1; i < oldvalye + 1; i++) {
            urId = "mainRoom " + i
            //console.log("idRoom " + i)
            var parent = document.getElementById("numbersOfRoom-row");
            var child = document.getElementById(urId);
            parent.removeChild(child);
        }
    }

    oldvalye = +value
}
function newItogBlock(N,P,I,Paint,Tara,Cost) {
    index = "itogVarint " + I
    document.getElementById(index).innerHTML = ""
    let newItogTime = newItog
    
    jndex = "nameRoom " + I
    if (N == ""){
        N = "Комната " + I
    }
    //newRoom.replace(/namePAK/g, N).replace(/areaKAP/g, P).replace(/PUK/g, I)
    //console.log(index);
    $("div.itogVarint" + I).append(newItog.replace(/namePAK/g, N).replace(/areaKAP/g, P).replace(/PUK/g, I).replace(/namePaintKUP/g,Paint).replace(/volumeYU/g,Tara).replace(/priceUY/g,Cost));
    
}

number.addEventListener("change", newBlock);



//показать экстерьер
const checkboxE = document.getElementById('exterior');
const hiddenextirior = document.getElementById('hiddenextirior');

checkboxE.addEventListener('click', function handleClick(){
    if (checkboxE.checked) {
        hiddenextirior.style.display = 'block';
    } else {
        hiddenextirior.style.display = 'none';
    }
});


//показать интерьер
const checkboxI = document.getElementById('interior');
const hiddeninterior = document.getElementById('hiddeninterior');

checkboxI.addEventListener('click', function handleClick(){
    if (checkboxI.checked) {
        hiddeninterior.style.display = 'block';
    } else {
        hiddeninterior.style.display = 'none';
    }
});



var paintMap = new Map();
paintMap.set("LittleGreene,AbsoluteMattEmulsion", 14);
paintMap.set("LittleGreene,IntelligentMattEmulsion", 14);
paintMap.set("LittleGreene,IntelligentEggshell", 14);
paintMap.set("LittleGreene,FlatOilEggshell", 16);
paintMap.set("LittleGreene,IntelligentMasonryPaint", 13);
paintMap.set("Zoffany,EliteEmulsion", 12);
paintMap.set("Zoffany,TrueMatt", 15);
paintMap.set("Argile,Laquemate", 12);
paintMap.set("Argile,MatVelouté", 10);
paintMap.set("Argile,MatProfond", 10);
paintMap.set("Argile,LaqueSatineeInterieure", 12);
paintMap.set("Argile,BlancPlafond", 13);
paintMap.set("Argile,NatureMat", 12);
paintMap.set("Argile,NatureVelours", 12);
paintMap.set("Argile,NatureSatin", 12);
paintMap.set("Argile,SatinCouvrant", 9);


function myFunction(naME,naAr,PUK,vOp){
    let hiddenItog = document.getElementById('itogVarint ' + PUK);
    hiddenItog.style.display = 'block'; //отоюражаем итог для комнаты PUK
    let price = document.getElementById('price'+masPaintName.get(numberOfroom)).innerHTML.split(" ");
    vOp = vOp.split(" ")[0];
    console.log(vOp);
    let tagPaint = document.getElementById("namePaintItog" + PUK).innerHTML.replace(/ /g,"");
    let rasxod = paintMap.get(tagPaint);
    console.log(tagPaint, rasxod);

    let itogVolume = 0;
    if (vOp == "sprayGunRoom") {// необходимое кол-во литров
        itogVolume = parseInt(document.getElementById(naAr).value * 0.3);
    } else {
        itogVolume = parseInt(document.getElementById(naAr).value / rasxod);
    }

    //let itogVolume = parseInt(document.getElementById(naAr).value / 14);
    let itogPrice = math.round(itogVolume / 5 * +price[0]);
    console.log(+price[0], itogVolume, itogPrice);

    newItogBlock(document.getElementById(naME).value,document.getElementById(naAr).value,PUK,document.getElementById('name'+masPaintName.get(numberOfroom)).innerHTML, itogVolume, itogPrice);
}

function hiddpopup(params) { //спрятать попап
    const hiddenpopup = document.getElementById('popup');
    hiddenpopup.style.display = 'none';
}

let numberOfroom = 0
function showpopup(nR) { //показать попап
    numberOfroom = nR
    const hiddenpopup = document.getElementById('popup');
    hiddenpopup.style.display = 'block';
    console.log("комната" + numberOfroom)
    
}

//let surAreaRoom = 0;
//let timerId = setTimeout(changeAreaRoom, 10);
//function changeAreaRoom() { //тригер смены площади для комнаты nR
//    numberOfroom = nR;
//    document.getElementById('surfaceAreaRoom ' + numberOfroom).value;
//    changePaint()
//}


//ВОТ ЭТО МЕНЯЕТ МАКСИМ
let OplOpt = 0;
function changeOplOpt(nR) { //тригер смены нанесения для комнаты nR
    numberOfroom = nR;
    let p = "droneRoom"+numberOfroom; // названия выбора с id комнаты
    let values = document.getElementsByName(p);
    for(let i = 0; i < values.length; i++) {
        if(values[i].checked == true) {
            OplOpt = values[i].value;
        }
    }
    //console.log(OplOpt)
    let tagPaint = document.getElementById("namePaintItog" + numberOfroom).innerHTML
    if (tagPaint != "Не выбрано") {
        changePaint() 
    }
}

const masPaintName = new Map();
function newRoomPaintName(k) { //триггер на смену краску в комнате numberOfroom
    masPaintName.set(numberOfroom, +k);
    console.log(masPaintName.get(numberOfroom));
    hiddpopup();
    document.getElementById('namePaintItog'+numberOfroom).innerHTML = document.getElementById('name'+masPaintName.get(numberOfroom)).innerHTML;
    changePaint();
}

function changePaint() {
    //console.log(OplOpt);
    if (OplOpt == 0){
        alert("Пожалуйста, выберите способ нанесения");
    } else if (document.getElementById('surfaceAreaRoom ' + numberOfroom).value == 0){
        alert("Пожалуйста, введите площадь");
    } else {
        document.getElementById('namePaintItog'+numberOfroom).innerHTML = document.getElementById('name'+masPaintName.get(numberOfroom)).innerHTML;
        hiddpopup();
        myFunction('nameRoom ' + numberOfroom,'surfaceAreaRoom ' + numberOfroom,'' + numberOfroom, OplOpt) // название комнаты / площать комнаты / номер для ID комнаты / способ нанесения
    }

}