/* 각 영역별 명칭 정보 */
export const tagData = [
  {
    id: 'downtown',
    name: '번화가',
    transform: { x: 450, y: 240 },
    textAnchor: 'middle',
    mapBox: {
      x: '-40', y: '-28',
      width: '80', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'school',
    name: '학교',
    transform: { x: 280, y: 280 },
    textAnchor: 'middle',
    mapBox: {
      x: '-30', y: '-28',
      width: '60', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'archery',
    name: '양궁장',
    transform: { x: 180, y: 220 },
    textAnchor: 'middle',
    mapBox: {
      x: '-40', y: '-28',
      width: '80', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'alley',
    name: '골목길',
    transform: { x: 360, y: 80 },
    textAnchor: 'middle',
    mapBox: {
      x: '-40', y: '-28',
      width: '80', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'temple',
    name: '절',
    transform: { x: 630, y: 220 },
    textAnchor: 'middle',
    mapBox: {
      x: '-15', y: '-28',
      width: '30', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'pond',
    name: '연못',
    transform: { x: 560, y: 380 },
    textAnchor: 'middle',
    mapBox: {
      x: '-30', y: '-28',
      width: '60', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'hospital',
    name: '병원',
    transform: { x: 680, y: 480 },
    textAnchor: 'middle',
    mapBox: {
      x: '-30', y: '-28',
      width: '60', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'factory',
    name: '공장',
    transform: { x: 640, y: 680 },
    textAnchor: 'middle',
    mapBox: {
      x: '-30', y: '-28',
      width: '60', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'cemetery',
    name: '묘지',
    transform: { x: 480, y: 550 },
    textAnchor: 'middle',
    mapBox: {
      x: '-30', y: '-28',
      width: '60', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'church',
    name: '성당',
    transform: { x: 420, y: 650 },
    textAnchor: 'middle',
    mapBox: {
      x: '-30', y: '-28',
      width: '60', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'lab',
    name: '연구소',
    transform: { x: 365, y: 450 },
    textAnchor: 'middle',
    mapBox: {
      x: '-40', y: '-28',
      width: '80', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'forest',
    name: '숲',
    transform: { x: 280, y: 520 },
    textAnchor: 'middle',
    mapBox: {
      x: '-15', y: '-28',
      width: '30', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'uptown',
    name: '고급 주택가',
    transform: { x: 240, y: 680 },
    textAnchor: 'middle',
    mapBox: {
      x: '-65', y: '-28',
      width: '130', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'sandy_beach',
    name: '모래사장',
    transform: { x: 100, y: 540 },
    textAnchor: 'middle',
    mapBox: {
      x: '-50', y: '-28',
      width: '100', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'hotel',
    name: '호텔',
    transform: { x: 100, y: 360 },
    textAnchor: 'middle',
    mapBox: {
      x: '-30', y: '-28',
      width: '60', height: '40',
      rx: '4', ry: '4'
    }
  },
  {
    id: 'harbor',
    name: '항구',
    transform: { x: 400, y: 780 },
    textAnchor: 'middle',
    mapBox: {
      x: '-30', y: '-28',
      width: '60', height: '40',
      rx: '4', ry: '4'
    }
  }
]

/* 각 영역별 id 및 polygon 정보 */
export const hoverData = [
  {
    id: 'downtown',
    points: '337,249,379,289,305,362,335,393,351,379,346,373,367,355,389,374,384,378,402,395,409,394,422,406,420,414,425,417,482,362,476,357,508,327,520,340,576,284,549,257,572,235,487,148,482,153,460,132'
  },
  {
    id: 'school',
    points: '272,184,380,289,255,414,169,326,242,251,221,231'
  },
  {
    id: 'archery',
    points: '220,129,215,133,222,143,183,181,161,158,131,184,137,193,101,226,121,244,120,255,101,274,128,304,139,299,168,326,241,252,222,231,271,184'
  },
  {
    id: 'alley',
    points: '546,162,520,184,488,149,483,153,460,132,338,247,219,130,242,106,239,103,343,3,372,31,398,7,438,46,453,30,546,122,527,142,534,151'
  },
  {
    id: 'pond',
    points: '575,282,600,308,615,292,704,381,624,457,637,469,559,545,519,508,491,496,453,457,463,450,443,429,439,433,424,417,481,360,476,355,506,326,519,338,531,327'
  },
  {
    id: 'temple',
    points: '520,183,557,148,578,172,602,150,628,175,643,161,734,251,723,261,756,295,687,364,616,296,600,309,548,258,570,233'
  },
  {
    id: 'hospital',
    points: '567,537,631,603,649,587,662,597,771,488,698,412,716,391,704,382,625,458,636,468'
  },
  {
    id: 'factory',
    points: '496,740,538,781,546,775,590,818,609,799,618,808,673,752,690,769,755,705,683,634,690,627,650,586'
  },
  {
    id: 'cemetery',
    points: '373,540,470,635,487,616,553,680,632,603,566,535,559,544,517,503,492,494,454,454,444,466,439,462,420,483,421,491,410,503,401,502,384,519,387,525'
  },
  {
    id: 'church',
    points: '399,565,316,648,323,656,363,676,462,773,552,682,487,617,469,634'
  },
  {
    id: 'forest',
    points: '306,363,334,391,331,396,324,393,314,405,314,414,297,430,291,427,270,447,288,468,296,465,314,483,312,492,326,504,333,502,350,519,346,524,365,544,373,539,400,565,316,647,168,500'
  },
  {
    id: 'uptown',
    points: '225,560,138,648,165,674,149,687,156,693,150,699,166,711,158,721,180,746,192,736,216,757,225,746,240,763,276,786,377,686,363,673,323,654'
  },
  {
    id: 'sandy_beach',
    points: '54,449,48,458,53,465,35,469,33,487,39,504,50,507,44,521,45,533,61,563,70,571,61,575,60,586,74,596,84,593,83,602,86,612,99,612,105,604,107,613,125,626,126,637,137,646,225,561,169,502,153,514,126,485,119,493,105,478,94,489'
  },
  {
    id: 'hotel',
    points: '101,272,54,317,60,322,2,375,15,386,6,393,52,437,46,446,93,489,105,479,118,493,125,487,153,515,253,413,139,296,130,304'
  },
  {
    id: 'harbor',
    points: '274,789,376,689,463,774,496,742,539,782,461,859,451,848,415,885,368,837,346,861'
  }
]
