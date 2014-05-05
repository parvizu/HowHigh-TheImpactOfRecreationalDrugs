var base,cocaine, marijuana, meth, rnkMj;

var rankings = {
    "cocaine": {
        "countries": ["Peru",
                        "Colombia",
                        "Panama",
                        "Argentina",
                        "Nicaragua",
                        "Guatemala",
                        "Mexico",
                        "Cape Verde",
                        "Suriname",
                        "Ecuador",
                        "Hong Kong",
                        "Turkey",
                        "Ireland",
                        "El Salvador",
                        "Jamaica",
                        "Switzerland",
                        "Bahamas",
                        "Poland",
                        "United Arab Emirates",
                        "Greece"
                        ],
        "values":[291440.00,
                    55000.00,
                    32500.00,
                    10461.92,
                    9304.00,
                    4700.00,
                    3410.87,
                    2230.00,
                    1303.05,
                    835.58,
                    742.93,
                    475.86,
                    469.75,
                    374.82,
                    339.60,
                    251.11,
                    236.00,
                    213.39,
                    204.00,
                    200.95
                    ],
        "rankings":[]
    },
    "marijuana":{
        "countries":["United States","Mexico","Spain","Bolivia","Colombia","Morocco","Sri Lanka","Nigeria","Paraguay","Brazil","Peru","South Africa","India","Egypt","Iran","Zambia","France","Afghanistan","Algeria","Bangladesh"],
        "values":[2145821,
                    1812407,
                    399614,
                    382200,
                    340627,
                    294140,
                    203519,
                    191848,
                    175870,
                    174565,
                    159920,
                    140969,
                    126588,
                    91351,
                    71044,
                    66318,
                    61157,
                    54963,
                    53363,
                    52961],
        "rankings":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    }
}

$(document).ready(function() {
    
    $.getJSON("RankingMarijuana.json", function(data) {rnkMj = data;});
    
    $.getJSON("cocaine.json", function (data) { cocaine = data;});
    $.getJSON("ganja.json", function (data) { marijuana = data;});
    $.getJSON("basemap.json", function (data) { base = data; showDrugs();});
    
});

function getValidCountries(data)
{
    var res = {};
    console.log(data);


}

function showDrugs(type) 
{
    var file;
    var color;
    var ranking;

    switch (type)
    {
        case 1:
            file = marijuana;
            color = "#667C26";
            title = "Marijuana";
            ranking = rnkMj;
            drawRanking(title,rankings.marijuana.countries,rankings.marijuana.values);
            break;

        case 2:
            file = cocaine;
            color = "#488AC7";
            title = "Cocaine";
            drawRanking(title,rankings.cocaine.countries,rankings.cocaine.values);
            ranking = rnkMj;
            break;

        default:
            file = base;
            color = "#488AC7";
            title = "";
    }
    drawMap(file,color,title);
    
}

function drawRanking(title,countries,values)
{
    $('#sidechart').css('width','300px');
    $('#sidechart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Top 20 Countries'
        },
        xAxis: {
            categories: countries,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            // labels: {
            //     overflow: 'justify'
            // }
        },
        exporting: { enabled: false },
        tooltip: {
            valueSuffix: ' kgs'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: title,
            data: values
            }]
    });
}

function getDrugs(code)
{
    var values = [];
    $.each(marijuana, function(index,value){
        if(value.code == code)
            values.push(value.value);
        //console.log(value.name+","+value.code+","+value.value+",");
    })

     $.each(cocaine, function(index,value){
        if(value.code == code)
            values.push(value.value);
    })
    return values;
}
    

function drawSideGraph(code, country)
{
    $('#sidechart').css('width','200px');
    $('#sidechart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Country drug seizures by type'
        },
        xAxis: {
            categories: [
                'Marijuana',
                'Cocaine'
            ]
        },
        yAxis: {
            min: 0,
            // max: 10000,
            // type: 'logarithmic',
            title: {
                text: 'kilograms'
            }
        },
        exporting: { enabled: false },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
                name: country,
                data: getDrugs(code)
            }]
    });

}

function drawMap(file, color, title)
{

    var max= 0;
    if (title !='')
    {
        $.each(file, function(index,value){
            //console.log(value.name+","+value.code+",");
            if(max < value.value) max = value.value;
        })
    }
    else
       max=1; 
    
    console.log('Max: '+max)
    // Initiate the chart
    $('#container').highcharts2('Map', {
        
        title : {
            text : title+' seizures (kgs)'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        exporting: { enabled: false },
        colorAxis: {
            min: 1,
            max: max,
            type: 'linear'
        },

        series : [{
            data : file,
            mapData: Highcharts2.maps.world,
            joinBy: 'code',
            fill: color,
            name: title+' Seizures',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            tooltip: {
                valueSuffix: ' kgs'
            },
            events: {
            	click: function(event) {
            		console.log(event.point);
                    drawSideGraph(event.point.code, event.point.name);
            	}
            }

        }]

    });
}