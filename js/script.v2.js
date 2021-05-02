function createCenterListFromJson(centerList){
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
            "<p class='my-1 text-small color-red'>Age "+ sessionList[j].min_age_limit +"+</p>"+
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
                            "<td width='33%'>"+ sessionList[j].available_capacity +"<span class='text-small color-red'> (Age "+ sessionList[j].min_age_limit +"+)</span></td>" +
                            "<td width='33%'>"+ sessionList[j].vaccine +"</td>" +
                "</tr>"
              }
            "</tbody>" +
        "</table>"
      }

      content += "</section>"

      $('#centerList').append(content);
}

function createCenterListForSearchResult(centerList){
  if(centerList.length == 0){
    alert("No data available")
  }
  var content = "<table class='container sortable desktop'><thead><tr><th><h1>Vaccination Center</h1></th>" + 
                '<th><h1>Date & Time</h1></th>'+
                '<th><h1>Availability</h1></th>'+
                '<th><h1>Vaccine</h1></th>'+
                '<th><h1>Slots</h1></th>' ;
      content += " </thead><tbody>";

      for(i=0; i<centerList.length; i++){
        content += "<tr><td><div>"+
            "<p class='my-1'>"+ centerList[i].name +"</p>"+
            "<p class='my-1'> <span>"+ centerList[i].block_name +"-<span>"+
            "<span>"+ centerList[i].pincode +"</span></p>" +
            "<p class='my-1'> <span>"+ centerList[i].fee_type +"<span>"+
            "<span class='text-small color-red'> (Age "+ centerList[i].min_age_limit +"+)</span></p>" +
        "</div></td>" +
          "<td><div>"+
            "<p class='my-1'>"+ centerList[i].date +"</p>"+
            "<p class='my-1'>"+ centerList[i].from + "-" +  centerList[i].to +"</p>"+
          "</div></td>"+
          
          "<td><div>"+
            "<p class='my-1'>"+ centerList[i].available_capacity +"</p>"+
          "</div></td>"+

          "<td><div>"+
            "<p class='my-1'>"+ centerList[i].vaccine +"</p>"+
          "</div></td><td>";

        var slots = centerList[i].slots;
        for(j=0; j<slots.length; j++){
          content += "<p class='my-1'>"+slots[j] +"</p>";
        }
        content += "</td></tr>"
      }
      content += " </tbody></table>";

      content += "<section id='table-carousel' class='owl-carousel'>"
      for(i=0; i<centerList.length; i++){
        content += "<table class='mobile container sortable'<thead class='tac'><th colspan='2'>" +
            "<div>" +
              "<p class='my-1'>"+ centerList[i].name +"</p>"+
              "<p class='my-1'> <span>"+ centerList[i].block_name +"-<span>"+
              "<span>"+ centerList[i].pincode +"</span></p>" +
              "<p class='my-1'> <span>"+ centerList[i].fee_type +"<span>"+
              "<span class='font-weight-normal text-small color-red'> (Age "+ centerList[i].min_age_limit +"+)</span></p>" +
            "</div></th></thead>" +

            "<tbody>" +
            "<tr>"+
              "<td width='50%'>Date & Time</td>"+
              "<td width='50%'><div>"+
                "<p class='my-1'>"+ centerList[i].date +"</p>"+
                "<p class='my-1'>"+ centerList[i].from + "-" +  centerList[i].to +"</p>"+
              "</div></td>"+
            "</tr>"+

            "<tr>"+
              "<td width='50%'>Vaccine</td>"+
              "<td width='50%'><div>"+
                "<p class='my-1'>"+ centerList[i].vaccine +"</p>"+
              "</div></td>"+
            "</tr>" +

            "<tr>"+
              "<td width='50%'>Availability</td>"+
              "<td width='50%'><div>"+
                "<p class='my-1'>"+ centerList[i].available_capacity +"</p>"+
              "</div></td>"+
            "</tr>" +

            "<tr>"+
              "<td width='50%'>Slots</td><td width='50%'>"


            var slots = centerList[i].slots;
              for(j=0; j<slots.length; j++){
                content += "<p class='my-1'>"+slots[j] +"</p>";
              }
              content += "</td></tr></tbody>" +
        "</table>"
      }

      content += "</section>"

      $('#centerList').html("");
      $('#centerList').append(content);
}

$(document).ready(function () {
  var date = new Date().getDate() +"-"+ (new Date().getMonth()+1) +"-"+new Date().getFullYear();
  if($("#date").val()!=""){
    date = $("#date").val().substr(8) + "-" +  $("#date").val().substr(5,2) + "-" + $("#date").val().substr(0,4);
  }
  $.ajax({ 
    type: "GET",
    dataType: "json",
    url: "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=363&date="+date,
    success: function(data){  
      var centerList = data.centers;
      createCenterListFromJson(centerList);
      }
  });

  //called when key is pressed in textbox
  $("#pincode").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
   }
  });

  $("#pincode").keyup(function (e) {
    if(this.value.length == 6){
      $("#searchButton").prop("disabled", false);
    }else{
      $("#searchButton").prop("disabled", true);
    }
  });

  $(document).on("click","#searchButton",function() {
    if($("#date").val()!=""){
      date = $("#date").val().substr(8) + "-" +  $("#date").val().substr(5,2) + "-" + $("#date").val().substr(0,4);
    }
    $.ajax({ 
      type: "GET",
      dataType: "json",
      url: "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+$("#pincode")[0].value+"&date="+date,
      success: function(data){
        var centerList = data.sessions;
        createCenterListForSearchResult(centerList);
        }
    });
  });

  $(document).on("click","#clearButton",function() {
    location.reload();
  });

});


$('#table-carousel').owlCarousel({
    loop: true,
    margin: 2,
    dots: true,
    items: 1
  });