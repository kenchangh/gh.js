/*
 * Cus well, trolling my friends is fun.
 */
var resultBox = $('#result-box');


function makeBox(details) {
  var success = details.success;
  var participantName = details.name;
  var icNumber = details.ic;

  var newResults;
  
  if (success) {
    newResults = '<div id="result-box" class="">'
               + '<h3>Maaf! No. K/P '
               + icNumber
               + ' tidak terpilih menyertai'
               + ' Program Latihan Khidmat Negara Siri 12/2015.</h3>'
               + '</div>';
  }
  else {
    newResults = '<div id="result-box" class="">'
               + '<h3>Tahniah! Anda terpilih menyertai Program Latihan'
               + ' Khidmat Negara Siri 12/2015.</h3>'
               + '<div id="result-field" class="">'
               + '<div id="field-title">NAMA</div>'
               + '<div id="field-semicolon">:</div>'
               + '<div id="field-result"> '
               + participantName
               + '</div></div>' 
               + '<div id="result-field" class="">'
               + '<div id="field-title">NO KP</div>'
               + '<div id="field-semicolon">:</div>'
               + '<div id="field-result">'
               + icNumber
               + '</div></div>'    
               + '<p class="">Penempatan Kumpulan dan Kem Latihan akan'
               + ' dimaklumkan kemudian. Terima kasih.</p>'
               + '</div>';
  }
  
  return newResults;
}

var participants = [
  {
  name: 'PUA QIE SHANG',
  ic: '970820145107'
  },
  {
  name: 'TOH WEI YAN',
  ic: '970825105649'
  },
  {
  name: 'NICHOLAS KONG ZHI XIAN',
  ic: '970421105765'
  },
  {
  name: 'CHAN KOK FOONG',
  ic: '971224105859'
  },
  {
  name: 'MATTHEW NIMESHER PARAMESWARAN',
  ic: '970820145019'
  },
  {
  name: 'WONG KANG CHUEN',
  ic: '970707146095'
  },
  {
  name: 'BOON KERK ZHAN',
  ic: '971106565299'
  },
  {
  name: 'CHAN GUAN HAO',
  ic: '970603105635'
  }
];


function isSuccess() {
  if ( $('#result-field').length ) {
    return true;
  }
  else {
    return false;
  }
}


function getIC() {
  // Doing this because there's two #result-field
  var fieldResult = $(resultBox.children()[2]).find('#field-result');

  if (fieldResult.length) {
    return fieldResult.text();
  }
  // h3 full of junk, regex match it with 12 numbers (IC)
  else {
    var header = resultBox.find('h3');
    var regex = /\d{12}/g;
    var match = regex.exec( header.text() );
    return match[0];
  }
}


// Iterating and checking with IC, returns name
function getName(ic) {
  for (var i = 0; i < participants.length; i++) {
    if (participants[i].ic === ic) {
      return participants[i].name;
    }
  }
}


if (resultBox.length) {
  var icNumber = getIC();
  var participantName = getName(icNumber);
  
  var participantData = {
    name: participantName,
    ic: icNumber
  }
  
  isSuccess()
    ? participantData.success = true
    : participantData.success = false;
  
  var newResult = makeBox(participantData)

  // Anddd finally, presto!
  resultBox.html(newResult);
}
