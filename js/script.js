$.ajax({ 
  type: "GET",
  dataType: "json",
  url: "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=363&date=01-05-2021",
  success: function(data){  
    var centerList = data.centers;
    var content = "<table class='container sortable desktop'><thead><tr><th><h1>Vaccination Center</h1></th>"
    for(i=0; i<7; i++){
        var d = new Date();
        d.setDate(d.getDate() + i);
        content += '<th><h1>' + d.getDate() +"-"+ (d.getMonth()+1) +"-"+d.getFullYear() + '</h1></th>';
      }
      content += " </thead><tbody>";
      for(i=0; i<centerList.length; i++){
        content += "<tr><td><div>"+
            "<p class='my-1'>"+ centerList[i].name +"</p>"+
            "<p class='my-1'> <span>"+ centerList[i].block_name +"-<span>"+
            "<span>"+ centerList[i].pincode +"</span></p>" +
            "<p class='my-1'>"+ centerList[i].fee_type +"</p>" +
        "</div></td>"
        var sessionList = centerList[i].sessions;
        for(j=0; j<sessionList.length; j++){
          content += "<td>"+
            "<p class='my-1'>"+sessionList[j].available_capacity +"</p>"+
            "<p class='my-1'>"+ sessionList[j].vaccine +"</p>"+
          "</td>"
        }
        for(k=0; k<7-sessionList.length; k++){
          content += "<td>"+
            "<p class='my-1'>NA</p>"+
          "</td>"
        }
        content += "</tr>"
      }
      content += " </tbody></table>";

      content += "<section id='table-carousel' class='owl-carousel'>"
      for(i=0; i<centerList.length; i++){
        content += "<table class='mobile container sortable'<thead class='tac'><th colspan='3'>" +
            "<div>" +
              "<p class='my-1'>"+ centerList[i].name +"</p>"+
              "<p class='my-1'> <span>"+ centerList[i].block_name +"-<span>"+
              "<span>"+ centerList[i].pincode +"</span></p>" +
              "<p class='my-1'>"+ centerList[i].fee_type +"</p>" +
            "</div></th></thead>" +

            "<tbody>" 
            var sessionList = centerList[i].sessions;
              for(j=0; j<sessionList.length; j++){
                content +=  "<tr><td width='33%'>"+sessionList[j].date  +"</td>" +
                            "<td width='33%'>"+ sessionList[j].available_capacity +"</td>" +
                            "<td width='33%'>"+ sessionList[j].vaccine +"</td>" +
                "</tr>"
              }
            "</tbody>" +
        "</table>"
      }

      content += "</section>"

      $('#centerList').append(content);
    }
});


$('#table-carousel').owlCarousel({
    loop: true,
    margin: 2,
    dots: true,
    items: 1
  });