export const LEISTUNGEN = ['spielplatzbau', 'galabau', 'naschgarten', 'workshops'] as const;
export const ROUTES = [...LEISTUNGEN, 'home', 'kontakt', 'impressum'] as const;

export const LEISTUNGEN_BESCHREIBUNGEN = {
    spielplatzbau: {
        name: 'Spielplatzbau',
        imgSrc: '../images/symbol_geraet_238x240.png',
        anchoredContent: /* tw */ '[--anchored-content-image-width:--spacing(16)] md:[--anchored-content-image-width:--spacing(60)]',
        shapeOutside: /* tw */ '[shape-outside:polygon(30%_0%,100%_37.5%,50%_100%)]',
        headerBgClass: /* tw */ 'before:bg-theme-dunkelgruen',
        hrColorClass: /* tw */ 'text-theme-dunkelgruen',
    },
    galabau: {
        name: 'Garten- & Landschaftsbau',
        imgSrc: '../images/symbol_spaten_203x205.png',
        anchoredContent: /* tw */ '[--anchored-content-image-width:--spacing(16)] md:[--anchored-content-image-width:--spacing(51)]',
        shapeOutside: /* tw */ '[shape-outside:polygon(14%_0%,75%_95%,27%_55%)]',
        headerBgClass: /* tw */ 'before:bg-theme-weinrot',
        hrColorClass: /* tw */ 'text-theme-weinrot',
    },
    naschgarten: {
        name: 'Naschgarten',
        imgSrc: '../images/symbol_baum_211x211.png',
        anchoredContent: /* tw */ '[--anchored-content-image-width:--spacing(16)] md:[--anchored-content-image-width:--spacing(52)]',
        shapeOutside: /* tw */ '[shape-outside:polygon(10%_0%,90%_100%,50%_85%,20%_45%)]',
        headerBgClass: /* tw */ 'before:bg-theme-gelb',
        hrColorClass: /* tw */ 'text-theme-gelb',
    },
    workshops: {
        name: 'Workshops',
        imgSrc: '../images/symbol_buch_210x213.png',
        anchoredContent: /* tw */ '[--anchored-content-image-width:--spacing(16)] md:[--anchored-content-image-width:--spacing(52)]',
        shapeOutside: /* tw */ '[shape-outside:polygon(22%_0%,100%_75%,44%_95%,34.5%_48%,26%_44%)]',
        headerBgClass: /* tw */ 'before:bg-theme-hellgruen',
        hrColorClass: /* tw */ 'text-theme-hellgruen',
    },
} as const;
