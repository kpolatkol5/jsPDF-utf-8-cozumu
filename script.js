function pdf_indir_PDFJS() {
    var doc = new jsPDF('p', 'in', 'a4');


    var longtext = document.getElementById("longtext") // html etiketini seç
    
    
    doc.addFont('Roboto', 'MyFont', 'normal');//bu fontu ekler değiştirmeyin

    // bu alan a4 formatını ayarlar ve html etiketininden gelen içeriğin pdf te sayfada taşmaması için sayfaya sığdırır

    doc.setLineWidth(1/72); 

    textlines = doc.setFont('MyFont')
    .setFontSize(12)
    .splitTextToSize(longtext.innerText , 7.25 );//yazıyı alacağımız html id si veya etiket adın ıtutan değişken 

    let verticalOffset  = 0.5;

    doc.text(0.5 ,verticalOffset + 12 /72 , textlines)
    verticalOffset += (textlines.length + 0.5) * 12 / 72;

    doc.save('test.pdf');
  }