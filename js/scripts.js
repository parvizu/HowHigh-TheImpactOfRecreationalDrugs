var base,cocaine, marijuana, meth, heroin,rnkMj,rnkHer,rnkMeth,rnkCoke, borderMap,crime, bubbles=[];
var crimeUse, crimeTraffick,crimeTotal;

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

var crimeRankings ={
    'overall': {
        'countries':[
            "United States",
            "United Kingdom",
            "France",
            "Canada",
            "Mexico",
            "Sweden",
            "Switzerland",
            "Belgium",
            "Egypt",
            "Poland",
            "Morocco",
            "Norway",
            "Japan",
            "Kazakhstan",
            "New Zealand",
            "Finland",
            "Chile",
            "Croatia",
            "Hungary",
            "Israel"
        ],
        'values':[
            1552432,
            214754,
            139483,
            93914,
            74111,
            71333,
            38875,
            31617,
            31021,
            30458,
            25854,
            19191,
            17838,
            14906,
            14775,
            9823,
            6565,
            5004,
            4558,
            4355
        ]
    },
    'use': {
        'countries': [
            "United States",
            "United Kingdom",
            "France",
            "Sweden",
            "Canada",
            "Switzerland",
            "Belgium",
            "Poland",
            "Mexico",
            "Norway",
            "Japan",
            "Egypt",
            "New Zealand",
            "Morocco",
            "Finland",
            "Kazakhstan",
            "Croatia",
            "Hungary",
            "Israel",
            "Kenya"
        ],
        'values': [
            1276099,
            214754,
            139483,
            71333,
            69921,
            38875,
            31617,
            30458,
            26976,
            19191,
            17639,
            17016,
            14775,
            14222,
            9823,
            9495,
            5004,
            4558,
            4355,
            3969
        ]
    },
    'trafficking': {
        'countries':[
            "United States",
            "Mexico",
            "Canada",
            "Egypt",
            "Morocco",
            "Chile",
            "Kazakhstan",
            "Ecuador",
            "Dominican Republic",
            "Nicaragua",
            "Kyrgyz Republic",
            "Georgia",
            "Azerbaijan",
            "Algeria",
            "El Salvador",
            "Mauritius",
            "Turkmenistan",
            "Panama",
            "Lebanon",
            "Armenia"
        ],
        'values': [
            276333,
            47135,
            23993,
            14005,
            11632,
            5466,
            5411,
            2773,
            1862,
            1796,
            1642,
            1616,
            1572,
            1417,
            1073,
            1033,
            1027,
            855,
            688,
            656
        ]
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
    $.getJSON("json/basemap.json", function (data) { base = data; /*showDrugs();*/});  

    $.getJSON("json/crimes.json", function (data) { crime = data;}); 
    $.getJSON("json/countryCrimesTrafficking.json", function (data) {  crimeTraffick= data;}); 
    $.getJSON("json/countryCrimesUse.json", function (data) { crimeUse = data;}); 
    $.getJSON("json/countryCrimesTotal.json", function (data) { crimeTotal = getValidCountries(data);}); 
    $.getJSON("json/countrySeizuresTotal.json", function (data) { seizuresTotal = getValidCountries(data);}); 
    $.getJSON("json/usStateProduction.json", function (data) {usMarijuana = data;usProduction(data);});
    
    //movePopup(300,200,500,300,'Please select the mode you want to use:<br><a href="" onclick="start(); showDrugs(1);  return false;">Directed</a> | <a href="" onclick="">Exploratory</a>',800);
    //$('#popup').fadeIn(1500); 
});

function start()
{
    $('#popup').fadeOut(400);
    movePopup();
}

function worldCrime(option)
{
    var file;
    switch(option)
    {
        case 1: 
            file = "json/usmexico.json";
            break;
        case 2: 
            file = "json/usstates.json";
            break;
        case 3: 
            file = "json/mexicostates.json";
            break;
        case 4:
            file = "json/borderStates.json";
            break;

    }

    $.getJSON(file,function(data){ 
        borderMap = data;
        drawBorderMap();
    });
    
}

function drawBorderMap()
{
    // Instanciate the map
    $('#borderMap').highcharts2('Map', {
        title : {
            text : 'Habitat of the Rusty Blackbird'
        },

        subtitle : {
            text : 'An example of a distribution map in Highcharts.<br/>' +
                'Source: <a href="http://en.wikipedia.org/wiki/File:Euphagus_carolinus_map.svg">Wikipedia</a>.'
        },
        plotOptions: {
            series: {
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{series.name} area'
                }
            }
        },

        legend: {
            align: 'left',
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
            floating: true,
            layout: 'vertical',
            verticalAlign: 'bottom',
            reversed: true
        },
        series : [{
            type: "map",
            enableMouseTracking: false,
            showInLegend: false,
            mapData: borderMap,
            states: {
                hover: {
                    color: '#BADA55'
                },
            },
            events: {
                click: function(event) {
                    console.log(event.point);
                }
            } 
        }]
    });
}

function getValidCountries(data)
{
    var res = [];
    $.each(data,function(index,value) {
        if(value.value >1)
            res.push(value);
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
    drawScatter();
    
}

function drawRanking(title,countries,values,color)
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
        // tooltip: {
        //     valueSuffix: ' kgs'
        // },
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
            showInLegend:false,
            color: color,
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
                showInLegend:false,
                name: country,
                data: getDrugs(code)
            }]
    });
}

/***** US Production *******/
function usProduction(data) {
    // Instantiate the map
    $('#usMap').highcharts2('Map', {
        title : {
            text : 'US Drug Production by State'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 1,
            type: 'logarithmic',
            minColor: '#E6E7E8',
            maxColor: '#005645'
        },            

        plotOptions: {
            map: {
                states: {
                    hover: {
                        color: '#EEDD66'
                    }
                }
            }
        },            
        series : [{
            animation: true,
            data : data,
            mapData: Highcharts2.maps.us,
            joinBy: 'code',
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}',
                style: {
                    fontWeight: 'bold',
                    textShadow: '0 0 3px black',
                    textTransform: 'uppercase'
                }
            },
            name: 'Production:',
            tooltip: {
                pointFormat: '{point.state}: {point.value}/kgs'
            }
        }]
    });
};

/***** MAP ZOOMING ******/
function drawScatter() {
    var values = [];
    // var news = [];
    // console.log(crimeTotal);
    // console.log(seizuresTotal);
    $.each(crimeTotal, function(index,value1){
        $.each(seizuresTotal, function (index,value2){
            if(value1.code == value2.code) {
                values.push({
                    // code:value1.code,
                    name:value1.name,
                    data: [[value1.value, value2.value]]
                    // crimes: value1.value,
                    // seizures: value2.value
                });
                // news.push([value1.value, value2.value]);
            }
        });
    });

    $('#scatterChart').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Crimes Versus Seizures'
        },
        xAxis: {
            type: 'logarithmic',
            title: {
                enabled: true,
                text: 'Total Crimes'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            type: 'logarithmic',
            title: {
                text: 'Total Seizures'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    symbol: 'circle',
                    fillColor: '#FFFFFF',
                    lineWidth: 1,
                    lineColor: 'rgba(223, 83, 83, .5)',
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} crimes, {point.y} seizures'
                }
            }
        },
        series: values
    });    
}


/***** MAP ZOOMING *******/

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



/****** CRIMES  ********/

function showCrime(type)
{
    var color;
    var file;
    switch (type)
    {
        case 1:
            color = "#f45b5b";
            file = crimeTotal;
            title = "Total Drug Related Crimes";
            drawRanking(title,crimeRankings.overall.countries,crimeRankings.overall.values,color);
            break;

        case 2:
            color = "#f45b5b";
            file = crimeUse;
            title = "Drug Use Crimes";
            drawRanking(title,crimeRankings.use.countries,crimeRankings.use.values,color);
            break;

        case 3:
            color = "#f45b5b";
            file = crimeTraffick;
            title = "Drug Trafficking Crimes";
            drawRanking(title,crimeRankings.trafficking.countries,crimeRankings.trafficking.values,color);
            break;
    }

    createCrimeData(file);
}

function getCrimes(type)
{
    //createCrimeData(crimeTotal);
    showCrime(type);
    //drawScatter();
}

function getCrimesData(code)
{
    var values = [];
    
    $.each(crimeUse, function(index,value){
        if(value.code == code)
            values.push(value.value);
        //console.log(value.name+","+value.code+","+value.value+",");
    })
    
    $.each(crimeTraffick, function(index,value){
        if(value.code == code)
            values.push(value.value);
    })

    return values;
}

function drawBottomGraphCrimes(code, country)
{
    $('#bottomchart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: country + ' drug related crimes by type'
        },
        xAxis: {
            categories: [
                'Possession',
                'Trafficking'
            ]
        },
        yAxis: {
            min: 1,
            max: 1000000,
            tickInterval: 1,
            type: 'logarithmic',
            title: {
                text: '# crimes'
            }
        },
        legend: {
            enabled: false
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
                color: '#f45b5b',
                name: country,
                data: getCrimesData(code)
            }]
    });
}

function createCrimeData(data) 
{
    $('#container').hide();
    var maxC=0;
    bubbles = [];
    $.each(data, function(index, value){ 
        //totalCrimes = value.use + value.trafficking;
        if (value.value > maxC) {
            maxC=value.value;
        }        
        if (value.value !=0) {
            bubbles.push({"code": value.code,"name":value.name, "z": value.value });
        }
        //console.log(value.code+","+value.name+","+totalCrimes+",");
    });

    console.log(crime);
    $('#container').highcharts2('Map', {
        colors: ["#f45b5b", "#8085e9", "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],

        title: {
            text: 'Crimes by country'
        },
        legend: {
            enabled: false
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        series : [{
            name: 'Country',
            mapData: Highcharts2.maps.world,
            color: '#E0E0E8',
            enableMouseTracking: false
        }, {
            type: 'mapbubble',
            mapData: Highcharts2.maps.world,
            name: 'Total Drug Related Crimes',
            joinBy: 'code',
            data: bubbles,
            fill: '#f45b5b',
            minSize: 1,
            maxSize: '12%',
            tooltip: {
                pointFormat: '{point.name}: {point.z}'
            },
            events: {
                click: function(event){
                    console.log(event.point);
                    drawBottomGraphCrimes(event.point.code, event.point.name);
                }
            }
        }]
    });
    $('#container').fadeIn(1000);
}

/***** DRUGS MAP *********/

function drawMap(file, color, title)
{
    $('#container').hide();
    // $('#container').fadeOut(400);
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

    $('#container').fadeIn(1000);
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

function fadeOut()
{
    $('#container').fadeOut(1000, function(){$(this).hide();});
}

function fadeIn(element)
{
    console.log($('#'+element).css('display'));
    //$('#container').fadeIn(1000);   
}

function movePopup(x,y,w,h,text,time)
{

    $('#popup').animate({
        left: x,
        top: y,
        width: w,
        height: h
    },time,function() { $('#popup').html(text);});
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
            .duration(time)
            ;

}





