const suggestions = [
    { id: 1, description: '1 - SERVICIOS TECNICOS INDUSTRIALES S.A. TEINSERSA' },
    { id: 2, description: '2, 3 - INDUSTRIAS LACTEAS SA INDULAC' },
    { id: 4, description: '4 - HOLCIM ECUADOR S.A.' },
    { id: 5, description: '5 - INDUSTRIAS IEPESA ECUATORIANA DE PRODUCTOS ELECTRONICOS SA' },
    { id: 6, description: '6, 7 - PAPELERA NACIONAL SA' },
    { id: 8, description: '8 - F&A INGENIERIA FAINCA-GROUP C.A.' },
    { id: 9, description: '9 - GRUPASA GRUPO PAPELERO CIA.LTDA.' },
    { id: 10, description: '10, 11 - KSB ECUADOR' },
    { id: 12, description: '12, 13 - IN.CAR.PALM. INDUSTRIA CARTONERA PALMAR S.A.' },
    { id: 14, description: '14 - NESTLE ECUADOR S.A.' },
    { id: 15, description: '15 - TDSYNNEX' },
    { id: 16, description: '16 - UTPL' },
    { id: 17, description: '17 - CERVECERA DE NICARAGUA' },
    { id: 18, description: '18 - ZV GROUP' },
    { id: 19, description: '19 - FINKTEC S.A.' },
    { id: 20, description: '20 - CODITEK-ECUADOR' },
    { id: 21, description: '21 - ARTES GRAFICAS SENEFELDER CA' },
    { id: 22, description: '22 - GRAFICAS IMPACTO GRAFIMPAC S.A.' },
    { id: 23, description: '23 - WORLDFIT SA' },
    { id: 24, description: '24 - SERVICIOS INDUSTRIALES KORIANDES S.A.' },
    { id: 25, description: '25 - CONDUESPOL' },
    { id: 26, description: '26 - PICA PLASTICOS INDUSTRIALES CA' },
    { id: 27, description: '27 - CORPEXA S.A.' },
    { id: 28, description: '28 - ALS ECUADOR ALSECU S.A.' },
    { id: 29, description: '29 - INSUMOS AGRICOLAS Y PECUARIOS INSPA CIA LTDA' },
    { id: 30, description: '30 - PLASDEC PLASTICOS DEL ECUADOR CIA LTDA' },
    { id: 31, description: '31 - FYM INPLASS CIA.LTDA.' },
    { id: 32, description: '32, 33, 34 - ENGINEERING VALIDATION ANALYSIS EVAENGINEERING S.A.' },
    { id: 35, description: '35 - DINORTE S.A.' },
    { id: 36, description: '36 - MANTENIMIENTO Y SUMINISTROS S.A. MASUSA' },
    { id: 37, description: '37 - FLEXNET DEL ECUADOR CIA. LTDA.' },
    { id: 38, description: '38 - COLOMBIANA LUXURY PLAST' },
    { id: 39, description: '39 - INGEMSA S.A. INGENIERIA ELECTROMECANICA' },
    { id: 40, description: '40, 41 - TELCONET S.A.' },
    { id: 42, description: '42, 43 - LUCENT INDUSTRIES TECHNOLOGY' },
    { id: 44, description: '44 - RECKLESS EQUIPAMIENTO INDUSTRIAL' },
    { id: 45, description: '45 - ASTINAVE' },
    { id: 46, description: '46 - PROCESADORA NACIONAL DE ALIMENTOS C.A. PRONACA' },
    { id: 47, description: '47 - AISLACOAT DEL ECUADOR S.A.S.' },
    { id: 48, description: '48 - INEDYCPOWER & ENERGY TECHNOLOGY CIA.LTDA.' },
    { id: 49, description: '49 - ELINE-TEX S.A.S' },
    { id: 50, description: '50 - PLASTICOS RIVAL CIA LTDA' },
    { id: 51, description: '51 - AIRISECUADOR S.A.' },
    { id: 52, description: '52,53 - CHINT ELECTRICS (HONG KONG) LIMITADA' },
    { id: 54, description: '54 - DISEÑO Y PROYECTOS INTEGRALES DPI C.A. (SOLUCIONES TAT)' },
    { id: 55, description: '55 - PROCESADORA NACIONAL DE ALIMENTOS C.A. PRONACA' },
    { id: 56, description: '56 - PANTANERO CIA. LTDA' },
    { id: 57, description: '57 - IKANI INNOVACION AMBIENTAL S.A.' },
    { id: 58, description: '58 - FERTILIZANTES GRANULADOS FERTIGRAN S.A.' },
    { id: 59, description: '59 - ACROMAX LABORATORIO QUIMICO FARMACEUTICO SA' },
    { id: 60, description: '60 - SOLUCIONES TECNOLOGICAS JM' },
    { id: 61, description: '61 - MCI BRASIL LTDA.' },
    { id: 62, description: '62 - THELINE S.A.' },
    { id: 63, description: '63 - FONDOS VANGUARDIA' },
    { id: 64, description: '64 - UNIR' },
    { id: 65, description: '65 - CUBOSOFT SA' },
    { id: 66, description: '66 - SALINAS GLOBAL' },
    { id: 67, description: '67, 68 - INDUSTRIAL DE SERVICIOS INDUSERVI C LTDA' },
    { id: 69, description: '69 - POLIGRUP S.A.' },
    { id: 70, description: '70 - AGRO SCIENCE' },
    { id: 71, description: '71 - PRODELSOL' },
    { id: 72, description: '72 - ROCALVI S.A.' },
    { id: 73, description: '73 - FUNDACION PARA LA EXTENSION POLITECNICA FUNDESPOL' },
    { id: 74, description: '74 - IDE BUSINES SCHOOL' },
    { id: 75, description: '75 - MUCHO MEJOR ECUADOR' },
    { id: 76, description: '76 - STANDARDOIL C.L.' },
    { id: 77, description: '77 - PLASTICAUCHO INDUSTRIAL S.A.' },
    { id: 78, description: '78 - FERRETERIA ESPINOZA S. A.' },
    { id: 79, description: '79, 80 - CODIELECTRIC S.A.' },
    { id: 81, description: '81 - PROECUADOR' },
    { id: 82, description: '82 - LABORATORIO EL MANA' },
    { id: 83, description: '83 - CBEI' },
    { id: 84, description: '84, 85, 86 - AEI/ZUYAY PRODUCTOS NATURALES Y OHMAI PEANUT BUTTER' },
    { id: 87, description: '87 - BANCO DE ALIMENTOS DIAKONIA ' },
    { id: 88, description: '88 - TOUCH INNOVATION' },
    { id: 89, description: '89 - TOP TRADING TOPTRA CIA LTDA' },
    { id: 90, description: '90 - PROCESOS Y DATOS INTELIGENTES PROdescriptionIN S.A.' },
    { id: 91, description: '91 - DISEGNO SOFT SRL' },
    { id: 92, description: '92 - COSMOTEC/ACRSELER SERVICIOS CIA LTDA' },
    { id: 93, description: '93 - IMPOREPRINOX CIA. LTDA.' },
    { id: 94, description: '94 - MAS ROSCA' },
    { id: 95, description: '95 - FORFUN SAS' },
    { id: 96, description: '96 - EDICIONES SRN' },
    { id: 97, description: '97 - PERFILES CNC' },
    { id: 98, description: '98 - RINCON MAGICO' },
    { id: 99, description: '99 - ITAAYA' },
    { id: 100, description: '100 - FERMENTADOS THE GREENEST ME// MY HEALTHY KITCHEN' },
    { id: 101, description: '101 - WIRA' },
    { id: 102, description: '102 - ETYECU S.A.' },
    { id: 103, description: '103 - MAIFEX' },
    { id: 104, description: '104 - CAMPOSANTOS DEL ECUADOR S.A. CAMPOECUADOR' },
    { id: 105, description: '105, 106, 107 - PRODUCTORA CARTONERA S.A. (PROCARSA)' },
    { id: 108, description: '108 - DUPOCSA PROTECTORES QUIMICOS PARA EL CAMPO S. A.' },
    { id: 109, description: '109 - JOWAT' },
    { id: 112, description: '112 - AJECUADOR S.A.' },
    { id: 116, description: '116 - BARAHONA DISTRIBUIDORA' },
    { id: 117, description: '117 - EVANS/SU HIDROMERCADO S.A.' },
    { id: 118, description: '118 - LLORET EVOLUCAO' },
    { id: 119, description: '119 - KIGAL/CORPORACION JAVE' },
    { id: 120, description: '120 - SERVICIOS TECNICOS INDUSTRIALES S.A. TEINSERSA' },
    { id: 121, description: '121 - DIVERSQUIM S.A. DWE' },
    { id: 122, description: '122 - DIVERSQUIM S.A. DWE' },
    { id: 123, description: '123 - LA TABERNA' },
    { id: 124, description: '124 - PEFARER S.A.' },
    { id: 125, description: '125, 126, 127, 128, 129 - RED VICTORIA' },
    { id: 130, description: '130 - CAMARA DE INDUSTRIAS' },
    { id: 131, description: '131 - CIG ACADEMIA' },
];