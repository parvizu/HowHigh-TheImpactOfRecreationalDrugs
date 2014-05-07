var base,cocaine, marijuana, meth, heroin,rnkMj,rnkHer,rnkMeth,rnkCoke;

var countryRankings ={};
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

    },
    "heroin":{
        "countries":["Iran",
                        "Turkey",
                        "Pakistan",
                        "Afghanistan",
                        "China",
                        "United States",
                        "Russian Federation",
                        "United Kingdom",
                        "Australia",
                        "India",
                        "Italy",
                        "Malaysia",
                        "Netherlands",
                        "France",
                        "Mexico",
                        "Vietnam",
                        "Uzbekistan",
                        "Thailand",
                        "Colombia",
                        "Tajikistan"],  
        "values":[23100,
                    13301,
                    12631,
                    11000,
                    7288,
                    5484,
                    2177,
                    1968,
                    1090,
                    1033,
                    951,
                    756,
                    751,
                    701,
                    697,
                    692,
                    623,
                    540,
                    523,
                    516],
        "rankings":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    },
    "meth":{
        "countries":[],
        "values":[],
        "rankings":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
}


$(document).ready(function() {
    $.getJSON("json/RankingMarijuana.json", function(data) {countryRankings['marijuana'] = data;});
    $.getJSON("json/RankingHeroin.json", function(data) {countryRankings['heroin'] = data;});
    $.getJSON("json/RankingMeth.json", function(data) {countryRankings['meth'] = data; });
    $.getJSON("json/RankingCocaine.json", function(data) {countryRankings['cocaine'] = data; });

    $.getJSON("json/cocaine.json", function (data) { cocaine = getValidCountries(data);});
    $.getJSON("json/ganja.json", function (data) { marijuana = getValidCountries(data);});
    $.getJSON("json/heroin.json", function (data) { heroin = getValidCountries(data);});
    $.getJSON("json/meth.json", function (data) { meth = getValidCountries(data);});
    $.getJSON("json/basemap.json", function (data) { base = data; showDrugs();});  


    setTimeout(function(){
        console.log(countryRankings);
    },1000);
});


function getValidCountries(data)
{
    var res = [];
    $.each(data,function(index,value) {
        if(value.value >1)
            res.push(value);
        //console.log(value.code+","+value.name+","+value.value+",");
    })
    return res;
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

        case 3:
            file = meth;
            color = "#488AC7";
            title = "Methamphetamine";
            drawRanking(title,rankings.meth.countries,rankings.meth.values);
            ranking = rnkMj;
            break;

        case 4:
            file = heroin;
            color = "#488AC7";
            title = "Heroine";
            drawRanking(title,rankings.heroin.countries,rankings.heroin.values);
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
            min: 0
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
            data: values,
            events: {
                click: function(event) {
                    console.log(event.point.code);
                    drawBottomGraph(event.point.code, event.point.name);
                    getRankings(event.point.code);
                }
            }
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

    $.each(heroin, function(index,value){
        if(value.code == code)
            values.push(value.value);
    })
    return values;
}

function getRankings(code)
{
    var ranks=[], rnk;
    $.each(countryRankings, function(i,val){
        rnk ='NA';
        $.each(val, function(index,value){
            if(value.code == code)
                rnk = value.rank;
        })
        ranks.push(rnk);
    })

    console.log(ranks);
}
    

function drawBottomGraph(code, country)
{
    $('#bottomchart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Country drug seizures by type'
        },
        xAxis: {
            categories: [
                'Marijuana',
                'Cocaine',
                'Heroin'
            ]
        },
        yAxis: {
            min: 1,
            max: 100000000,
            tickInterval: 1,
            type: 'logarithmic',
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
        credits: {
            enabled: false
        },
        series: [{
                name: country,
                data: getDrugs(code)
            }]
    });
}

function zoom(code)
{
    $('#container').highcharts2().mapZoom();
    setTimeout(function() { $('#container').highcharts2().get(code).zoomTo();},800);
    
}

function zoomBorder()
{
    $('#container').highcharts2().get('MX').zoomTo();
    setTimeout(function() {$('#container').highcharts2().mapZoom(.8)},400);
    // $('#container').highcharts2().get(code).zoomTo();
}


// function getToolTipRankings(values)
// {
//     var str = '<table><tr><td>Marijuana</td><td>Heroin</td><td>Meth</td><td>Cocaine</td></tr><tr><td>'+values[0]+'</td><td>'+values[1]+'</td><td>'+values[2]+'</td><td>'+values[3]+'</td></tr></table>'
//         return str;
// }

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

    $.each(file, function(){
        this.flag = this.code.toLowerCase();
        this.id = this.code;
    })
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
        credits: {
            enabled: false
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
                backgroundColor: 'none',
                borderWidth: 0,
                shadow: false,
                useHTML: true,
                padding: 0,
                pointFormat: '<span class="f32"><span class="flag {point.flag}"></span></span>'
                    + ' {point.name}: <b>{point.value}</b> kgs',
                positioner: function () {
                    return { x: 0, y: 250 }
                }
            },
            events: {
            	click: function(event) {
            		console.log(event.point);
                    drawBottomGraph(event.point.code, event.point.name);
                    getRankings(event.point.code);

            	}
            }

        }]

    });
}

function resize()
{
    $('#container svg').animate({
        height:'200px'
    }, 2000,function(){})
}

function showPopup()
{
    //console.log((Math.random() * 600) + 1);
    var x = ((Math.random() * 600) +1);
    var y = ((Math.random() * 400) +1);
    
    $('#popup').animate({
        left:100+x+"px",
        top: y+"px",
    },400, function(){});
}



/******************* D3 Transitions ***********************/

var line = d3.svg.line().interpolate("linear");

function nextSection(sect,time)
{
    var path = d3.select('#menuPath'+sect).style('background-color','white').append('svg')
                    .attr({
                        'width':'100%',
                        'height':'100%'
                    });

    path.append("rect")
            .attr({
                'x':0,
                'y':14,
                'width':1,
                'height':11,
                'fill':'teal'
            })
            .transition()
            .attr('width',250)
            .duration(time);
    console.log(path);

}





