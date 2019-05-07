ymaps.ready(init);
var myMap;
var myPlacemark;

function init() {
  myMap = new ymaps.Map("map", {
    center: [59.93630906, 30.32122200],
    zoom: 16,
    controls: []
  });

  myPlacemark = new ymaps.Placemark([59.93630906, 30.32122200], {
    hintContent: 'PINK',
    balloonContent: 'PINK-лучшее приложение',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: "default#image",
    // Своё изображение иконки метки.
    iconImageHref: "img/icon-map-marker.svg",
    // Размеры метки.
    iconImageSize: [36, 36],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-15, -5]
  });

myMap.geoObjects.add(myPlacemark);
}
