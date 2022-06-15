var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:5500/dados.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data)
        dia = data.mes_chart.map(function(elem){
            return elem.dia;
        })
        dia = data.mes_chart.map(function(elem){
            return elem.dia;
        })
        valor = data.mes_chart.map(function(elem){
            return elem.valor;
        })
        //console.log(valor)

        const ctx = document.getElementById('canvas').getContext('2d');
        const stackedLine = new Chart(ctx, {
            type: 'line',
            data: {
                labels:dia,
                datasets: [{
                    label: 'dia',
                    data: dia,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderWidth: 2
                },
                {
                    label: 'valor',
                    data: valor,
                    backgroundColor: '',
                    borderColor: 'red',
                    borderWidth: 2
                }]
            },
            options: {
                elements: {
                    line: {
                        tension:0
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}