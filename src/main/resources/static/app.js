/** Mirar Fetch API: https://www.espai.es/blog/2019/07/ajax-con-fetch-api/
 * https://spring.io/guides/gs/consuming-rest-jquery/
 *
 *
 */

$(document).ready(function(){

    $.ajax({
        url: 'http://localhost:8080/usuaris/',
        type: 'GET',
        success: function(data) {
            var html = "";
            $.each(data, function(index, value){
                html += '<tr>';
                html += '<td>'+ value.idUsuari+'</td>';
                // html += '<td>'+ value.password+'</td>';
                html += '<td>'+ value.rol+'</td>';
                html += '</tr>';
            });
            $("#usuaris-table-body").append(html);
        },
        error: function(error) {
            console.log("Error: " + error);
        }
    });

});