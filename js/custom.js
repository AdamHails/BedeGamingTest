$(document).ready(function() {
    $.ajax({
        url: 'https://bedefetechtest.herokuapp.com/v1/markets',
        dataType: 'json',
        success: function(data) {
            data.map(function(r) {
                var odds = r.odds.numerator + '/' + r.odds.denominator;
                var id = r.name;
                var row = '<tr id="' + id + '"><td>' + r.event + '</td><td>' + r["name"] + '</td><td>' + odds + '</td></tr>';
                $('#marketTable').append(row);
                $("#marketTable tr").click(function() {
                    var pendingBets = [];
                    pendingBets.push($(this).attr('id'));
                    var jsonBets = JSON.stringify(pendingBets);
                    sessionStorage.setItem("pendingBets", jsonBets);
                    window.location.href = 'pendingbets.html';

                });
            });
        },
        error: function() {
            alert('The market data could not be loaded, please try again later.');
        }
    });

    var pendingBets = JSON.parse(sessionStorage.getItem('pendingBets'));

    $.ajax({
        url: 'https://bedefetechtest.herokuapp.com/v1/markets',
        dataType: 'json',
        success: function(data) {
            data.map(function(r) {
                var odds = r.odds.numerator + '/' + r.odds.denominator;
                var id = r.name;
                var row = '<tr id="' + id + '"><td>' + r.event + '</td><td>' + r["name"] + '</td><td>' + odds + '</td><td><input></input></td><td></td></tr>';
                $('#pendingTable').append(row);
            });
        },
        error: function() {
            alert('The market data could not be loaded, please try again later.');
        }
    });

});
