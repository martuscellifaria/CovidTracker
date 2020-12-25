    init();
    function init(){
        const url = "https://api.covid19api.com/summary";

        let data = '';

        $.get(url, function(data){
            console.log(data);

            data = `<td>Global</td>
                    <td>${data.Global.TotalConfirmed}</td>
                    <td>${data.Global.TotalDeaths}</td>
                    <td>${data.Global.TotalRecovered}</td>`;

            $("#data").html(data);


        });

        $.get(url, function(data){
            console.log(data.Global.TotalDeaths);

            data = `<td>Brazil</td>
                    <td>${data.Countries[23].TotalConfirmed}</td>
                    <td>${data.Countries[23].TotalDeaths}</td>
                    <td>${data.Countries[23].TotalRecovered}</td>`;

            $("#dataBr").html(data);


        });
    }


function refreshData(){
        clearData();
        init();
    }

    function clearData(){
        $("#data").empty();
        $("#dataBr").empty();
        init();
    }