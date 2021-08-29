const quiz =  [

    {
   q:'Which element has the symbol I ?' , 
   options: ['Iron', 'Yttrium', 'Iodine', 'Iridium'],
   answer: 2
    },
      //Q2
    { 
      q: 'Which element has the symbol K ?'  , 
      options:['Krypton', 'Potassium','Copper', 'Carbon'],
      answer: 1
    },
     //Q3
    { 
      q: 'Which element has the symbol Lv ?',
      options: ['Lawrencium','Lanthanum', 'Lithium', 'Livermorium'],
      answer: 3
     },
     //Q4
    {
      q: 'Which element has the symbol No ?',
      options:["Niobium", "Nobelium","Nihonium", "Nitrogen"],
      answer: 1
    },
     //Q5
    { 
      q: "Which element has the symbol 'Og' ?" ,
      options: ['Silver', 'Osmium', 'Oxygen', 'Oganesson'],
      answer: 3
    },
     //Q6
    {
      q: "Which element has the symbol 'Rb' ?" ,
      options: ['Rubidium', 'Radon','Rutherfordium','Roentgenium'],
      answer: 0
    },
     //Q7
    {
      q: 'Which element has the symbol Sg ?',
      options: ['Selenium', 'Strontium', 'Seaborgium', 'Samarium'],
      answer: 2
    },
     //Q8
    { 
      q: 'Which element has the symbol Ti ?' ,
      options: ['Technetium', 'Titanium', 'Thalium','Tin'],
      answer: 1
    },
     //Q9
    { 
      q: 'Which element has the symbol Y ?',
      options: ['Ytterbium', 'Iridium',  'Iron', 'Yttrium'],
      answer: 3
    },
     //Q10
    { 
      q: 'Which element has the symbol Mc ?',
      options: ['Mendeleevium', 'Molybdenum', 'Moscovium', 'Meitnerium'],
      answer: 2
    }
]




document.getElementById('tnq').innerHTML = `Total number of questions: ${quiz.length}`;


