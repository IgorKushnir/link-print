export default {
    info1: [
        {
            name: "Технология печати",
            value: "пьезоэлектрическая струйная печать",
          },
          { name: "Система уф сушки", value: "LED УФ лампы" },
    ],
    printType: [
        {
            name: 'Однопроходная', value: 'oneway',
        },
        {
            name: 'Многопроходная', value: 'multiways',
        },
    ],
    materialType: [
        {
            name: 'Гибридный', value: 'hybrid',
        },
        {
            name: 'Рулонный', value: 'rulonny',
        },
        {
            name: 'Планшетный', value: 'planshet',
        },
        {
            name: 'Цилиндрический', value: 'cylindric',
        },
        {
            name: 'Специальный', value: 'special',
        },
        
    ],
    headType: [
        {name:"RICOH GEN5 (MH5420/5440 - 7pl)", value: "RICOH GEN5 (MH5420/5440 - 7pl)"},
        {name: "RICOH GEN6 (MH5320/5440 - 5pl)", value: "RICOH GEN6 (MH5320/5440 - 5pl)"},
        {name: "RICOH Gen5s (MH5220 - 2.5pl)", value: "RICOH Gen5s (MH5220 - 2.5pl)"},
        {name: "RICOH GH2220 (GH2220 3pl)", value: "RICOH GH2220 (GH2220 3pl)"},
      ],
      printSpeedMax: 1500,
      colorModel: [
        {
            name: 'CMYK', value: 'cmyk',
        },
        {
            name: 'CMYK+W', value: 'cmyk+w',
        },
        {
            name: 'CMYK+W+Vr', value: 'cmyk+w+vr',
        },
        {
            name: 'CMYK+W+Vr+PR', value: 'cmyk+w+vr+pr',
        },
        {
            name: 'CMYK+Spot1+Spot2+Spot3+Spot4', value: 'cmyk+spot1+spot2+spot3+spot4',
        },
      ],
      info2: [
          {name: 'Интерфейс обмена данными', value: 'Ethernet или Wi-Fi '},
          {name: 'Управление цветом', value: 'поддержка ICC профилей, регулировка плотности цвета '},
          {name: 'Поддерживаемые графические форматы', value: 'TIFF, JPEG, Postscript3 EPS, PDF '},
      ],
      inkType: [
          {name: 'Жесткие для высокой адгезии', value: 'firm'},
          {name: 'Гибкие', value: 'flexible'},
          {name: 'Устойчивые УФ и наружному использованию', value: 'outdoor'},
          {name: 'Для вакуумной формовки', value: 'vacuum'},
          {name: 'Для металла', value: 'metal'},
          {name: 'Для детских игрушек', value: 'toys'},
          {name: 'Для печати упаковки пищевых продуктов', value: 'food'},
          {name: 'Флуоресцентные', value: 'fluoriscent'},
      ]
}