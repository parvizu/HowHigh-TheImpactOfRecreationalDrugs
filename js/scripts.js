var track,base,cocaine, marijuana, meth, heroin,rnkMj,rnkHer,rnkMeth,rnkCoke, borderMap,crime,bubbles=[]; 
var mexicoCrimeAssaults,mexicoCrimeExtortions,mexCrime,mexicoCrimeHomicides,mexicoCrimeKidnappings,mexicoCrimeTotal,crimeStat;
var crimeUse, crimeTraffick,crimeTotal;
var statflag = 0;
var selectedCountry =['',''];
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
        "countries":[
            "Mexico",
            "United States",
            "China",
            "Iran",
            "Australia",
            "Indonesia",
            "Thailand",
            "Malaysia",
            "Turkey",
            "India",
            "Japan",
            "Vietnam",
            "Philippines",
            "Canada",
            "United Arab Emirates",
            "Norway",
            "Lithuania",
            "Sweden",
            "Germany",
            "Israel"
        ],
        "values":[
            33200,
            29153,
            16165,
            3917,
            2268,
            2051,
            1586,
            852,
            503,
            470,
            467,
            293,
            255,
            204,
            187,
            156,
            134,
            95,
            76,
            67
        ],
        "rankings":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
}
var part1Seen=0;
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

var crimeTrends = [
      {
      color: '#57DE62',
      name: 'Extortions',
      data: [1910, 2416, 2979, 3157, 3123, 4869, 6332, 6105, 4582, 7272, 7833]}, 
      {
      color: '#D61C1C',
      name: 'Assaults',
      data: [2184, 2079, 2136, 2092, 3229, 3482, 5424, 5459, 5797, 5768, 5923]},
      {
      color: '#5E6DDB',
      name: 'Homicides',
      data: [3006, 2858, 3208, 3610, 4040, 5085, 8804, 12423, 12967, 11122, 9928]}, 
      {
      color: '#E8CF02',
      name: 'Kidnappings',
      data: [413, 323, 278, 733, 438, 907, 1162, 1219, 1424, 1414, 1699]} 

    ];

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

    $.getJSON("json/usStateProduction.json", function (data) {usMarijuana = getValidCountries(data);});
    // $.getJSON("json/usMexProduct.json", function (data) {usMexProduct = data;});

    $.getJSON("json/mexicoCrimeAssaults.json", function (data) {mexicoCrimeAssaults = getValidCountries(data);});
    $.getJSON("json/mexicoCrimeExtortions.json", function (data) {mexicoCrimeExtortions = getValidCountries(data);});
    $.getJSON("json/mexicoCrimeHomicides.json", function (data) {mexicoCrimeHomicides = getValidCountries(data);});
    $.getJSON("json/mexicoCrimeKidnappings.json", function (data) {mexicoCrimeKidnappings = getValidCountries(data);});
    $.getJSON("json/mexicoCrimeTotal.json", function (data) {mexicoCrimeTotal = getValidCountries(data);});

    $.getJSON("json/bubbleInstructions.json", function (data) {track = data;});


    movePopup(350,180,100,300,'<img src="img/logo.png" id="logo"><br><br><button class="minimal" style="margin-left:120px"href="" onclick="start(); showDrugs(1);  return false;">Let\'s start</button>',800);

    //$('#popup').fadeIn(1500); 
    // drawBorderSeizures();
    // drawLegalizeMarijuana();
    //usProduction();

});

function start()
{
    //$('#popup').fadeOut(400);
    //movePopup();

    showPart(1);
    command(0,1000);

}

function command(i,time)
{
    var obj = track[i];
    setTimeout(function() { 
        movePopup(obj.x,obj.y,obj.w,obj.h,obj.t,650,obj.a);
        i++;
        console.log(i);
        if(i<=track.length)
            command(i,obj.d)
    },time);
}

function getCrime(crimeName) {
    // console.log(crimeName);
    var crimeNames = ['Extortions','Assaults','Homicides','Kidnappings'];
    mexCrimes((jQuery.inArray(crimeName, crimeNames)+2));
}

function mexCrimes(option)
{
    var file,trendNum,trendPass=[];
    if (option !=1) {
        file = "json/mexico.json";
        trendNum = option-2;
    }
    switch(option)
    {
        case 1: 
            //file = "json/usmexico.json";
            usProduction();
            break;
        case 2: 
            mexCrime = mexicoCrimeExtortions;
            crimeStat = 'Extortions';
            break;
        case 3: 
            mexCrime = mexicoCrimeAssaults;
            crimeStat = 'Assaults';
            break;
        case 4:
            mexCrime = mexicoCrimeHomicides
            crimeStat = 'Homicides';
            break;
        case 5:
            mexCrime = mexicoCrimeKidnappings
            crimeStat = 'Kidnappings';
            break;
        case 6:
            mexCrime = mexicoCrimeTotal;
            crimeStat = 'Total Crimes';
            break;

    }
    $.getJSON(file,function(data){ 
        trendPass.push(crimeTrends[trendNum])
        if (option == 6) {trendPass =crimeTrends}            
        borderMap = data;
        drawBorderMap();
        drawCrimeTrends(trendPass)
        //mexCrimes(trendPass);
    });
    
}

function drawBorderMap()
{
    // Instantiate the map
    $('#borderMap').highcharts2('Map', {
        title : {
            text : null
        },
        subtitle : {
            text : 'Drug Related ' + crimeStat + ' by Mexican State'
        },        
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 1,
            //type: 'logarithmic',
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
            },
        },
        credits: {
            enabled: false
        },                    
        series : [{
            animation: true,
            data : mexCrime,
            mapData: borderMap,
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
            name: crimeStat,
                point: {
                    events: {
                        mouseOver: function() {$('#'+this.code)[0].style.backgroundColor = "#EEDD66";},
                    
                        mouseOut: function() {
                            if($('#'+this.code)[0].rowIndex % 2 == 0)
                            {
                              $('#'+this.code)[0].style.backgroundColor = "rgba(0,0,0,0)";
                            }
                            else
                            {
                              $('#'+this.code)[0].style.backgroundColor = "#BCC6CC";
                            }                            
                        }
                    }
                },            
            tooltip: {
                pointFormat: '{point.state}: {point.value} crimes'
            }
        }]
    });
    
    $('#mexCrimerankings tr').remove();
    $.each(mexCrime, function(index, data) {
        if (data.state) {$('#mexCrimerankings').append('<tr id=' + data.code + '><td>' + data.state + '</td><td>' + data.value + '</td></tr>');}
    });
}

//US PRODUCTION MAP
/***** US Production *******/
function usProduction() {
    // Instantiate the map
    $('#usMap').highcharts2('Map', {
        title : {
            text : null
        },
        subtitle : {
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
        credits: {
            enabled: false
        },                    
        series : [{
            animation: true,
            data : usMarijuana,
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
                pointFormat: '{point.state}: {point.value} kgs'
            }
        }]
    });
};

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
    
    if(statflag==1)
    {
        $("#bottomchart").html("");
        if(selectedCountry[0]!='')
            drawBottomGraph(selectedCountry[0],selectedCountry[1]);
        statflag = 0;
    }
    console.log(statflag);
        
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
            text: null
        },
        subtitle: {
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
                    //console.log(event.point.code);
                    selectedCountry[0] = event.point.code;
                    selectedCountry[1] = event.point.name;
                    $('#countryName').text(selectedCountry[1]);
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

    $.each(meth, function(index,value){
        if(value.code == code)
            values.push(value.value);
        //console.log(value.name+","+value.code+","+value.value+",");
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
    $('#bottomchart').html("");

    setFlag(code);
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
                'Heroin',
                'Meth'
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
        credits: {
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
                showInLegend:false,
                name: country,
                data: getDrugs(code)
            }]
    });
}

function drawCrimeTrends(trendData) {
      $('#trend-chart').highcharts({
        chart: {
          type: 'line'
      },
      title: {
          text: null
      },
      subtitle: {
          text: 'Drug Related Violent Crimes in Mexico'
      }, 
      legend: {
            enabled: false
        },     
      xAxis: {
          title: {
            text: null
        },
        categories: [
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013'
        ]
    },
    yAxis: {
      min: 0,
          // max: 100,
          title: {
            text: 'Numbers'
        }
    },
    credits: {
            enabled: false
        },
        exporting: { enabled: false },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: false,
      useHTML: true
    },
    plotOptions: {
        series: {
            // cursor: 'pointer',
            events: {
               click: function(event) {getCrime(this.name);}
            }
        },
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: trendData,
    credits: {enabled:false}
    });
};

function setFlag(code)
{
    $("#countryFlag").attr('src','http://www.geonames.org/flags/x/'+code.toLowerCase()+'.gif');
}

/***** MAP ZOOMING ******/
function drawScatter(scale) {
    var values = [];
    var scaleType;
    if(scale ==1)
        scaleType = 'linear';
    else
        scaleType = 'logarithmic';

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

    $('#scatterPlot').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: null
        },
        subtitle: {
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
            min: 1,
            type: scaleType,
            title: {
                text: 'Total Seizures (kgs)'
            }
        },
        exporting: { enabled: false },
        legend: {
            enabled: false
        },
        credits: {
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
    if(statflag==0)
    {
        $('#bottomchart').html("");
        if(selectedCountry[0]!='')
            drawBottomGraphCrimes(selectedCountry[0],selectedCountry[1]);
        statflag = 1;
    }
    //console.log(statflag);
        
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
    $('#bottomchart').html("");
    setFlag(code);
    $('#bottomchart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: country + ' drug related crimes breakdown'
        },
        xAxis: {
            categories: [
                'Possession',
                'Trafficking'
            ]
        },
        yAxis: {
            min: 1,
            max: 100000,
            //tickInterval: 20000,
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
                allowPointSelect: true,
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

    //console.log(crime);
    $('#container').highcharts2('Map', {
        colors: ["#f45b5b", "#8085e9", "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],

        title: {
            text: 'Crimes by country'
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: { enabled: false },

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
                    selectedCountry[0] = event.point.code;
                    selectedCountry[1] = event.point.name;
                    $('#countryName').text(selectedCountry[1]);
                    drawBottomGraphCrimes(event.point.code, event.point.name);
                }
            }
        }]
    });
    $('#container').fadeIn(1000);
}

/***** DRUGS MAP *********/

function countryRankingsDrugs()
{
    $("")
}

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
            // allowPointSelect: true,
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
                    selectedCountry[0] = event.point.code;
                    selectedCountry[1] = event.point.name;
                    $('#countryName').text(selectedCountry[1]);
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

function showPopup(arrow)
{
    //console.log((Math.random() * 600) + 1);
    var x = ((Math.random() * 600) +1);
    var y = ((Math.random() * 400) +1);
    
    movePopup(x,y,200,200,'',400,arrow);
    // $('#popup').animate({
    //     left:100+x+"px",
    //     top: y+"px",
    // },400, function(){});
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

function movePopup(x,y,w,h,text,time,arrow)
{

    bubbleArrows(arrow);
    if(text!='')
    {
        $("#bubbleContent").html(text);
    }
    $("#bubbleContent").css('width',w);  
    $('#popup').animate({
        left:x+"px",
        top:y+"px",
    },time);
}

function bubbleArrows(arrow)
{
    $("#btopright").css('opacity','0');
    $("#btopleft").css('opacity','0');
    $("#brighttop").css('opacity','0');
    $("#brightbottom").css('opacity','0');
    $("#blefttop").css('opacity','0');
    $("#bleftbottom").css('opacity','0');
    $("#bbottomleft").css('opacity','0');
    $("#bbottomright").css('opacity','0');

    //console.log(arrow);
    if(arrow)
    {
        $("#"+arrow).css('opacity','.6');
    }
}


function drawBorderSeizures()
{
    $('#borderSeizures').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: null
            },
            subtitle: {
                text: 'Percentage of Drug seizures in US Borders'
            },
            xAxis: {
                categories: ['Marijuana','Cocaine','Meth','Heroin','MDMA']
            },
            yAxis: {
                min: 0,
                max: 100,
                title: {
                    text: '% of Drug Seizures along the US Borders'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            credits: {
                enabled: false
            },
            exporting: { enabled: false },
            legend: {
                align: 'center',
                // x: 50,
                verticalAlign: 'bottom',
                // y: 100,
                // floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y + ' %';
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'North border',
                    data: [4, 20, 36, 42, 99]
                    // ,
                    // color: '#D52B1E'
                }, {
                    name: 'South border',
                    data: [96, 80, 64, 58, 1]
                    // ,
                    // color: '#006643'
                }]
        });     
}


/******************* OVERALL CONTROLS *********************/

function showPart(num)
{
    console.log(num);

    if(part1Seen ==0 )
        infographSlideshow(1);

    switch(num)
    {
        case 1:
            $("#part1").show();
            $("#part2").hide();
            $("#part3").hide();
            nextSection(1,65000);
            part1Seen=1;
            break;

        case 2:
            $("#part1").hide();
            $("#part2").show();
            $("#part3").hide();
            mexCrimes(6);
            break;

        case 3:
            $("#part1").hide();
            $("#part2").hide();
            $("#part3").show();
            showDrugs(1)
            break;

        default:
            $("#part1").show();
            $("#part2").hide();
            $("#part3").hide();
            
    }
}




/******************* US MEXICO *************************/

function drawLegalizeMarijuana()
{
    $('#legalize').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Legalization of Marijuana'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
            },
            xAxis: {
                categories: [
                    1969    ,
                    1972    ,
                    1973    ,
                    1977    ,
                    1979    ,
                    1980    ,
                    1985    ,
                    1995    ,
                    2000    ,
                    2001    ,
                    2003    ,
                    2005    ,
                    2009    ,
                    2010    ,
                    2011    ,
                    2012    ,
                    2013
                    ],
                type: ''
               // minRange: 14 * 24 * 3600000 // fourteen days

            },
            yAxis: {
                title: {
                    text: '% of population'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: { enabled: false },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
    
            series: [{
                type: 'area',
                name: 'Yes',
                data: [
                    12  ,
                    15  ,
                    16  ,
                    28  ,
                    25  ,
                    25  ,
                    23  ,
                    25  ,
                    31  ,
                    34  ,
                    34  ,
                    36  ,
                    44  ,
                    46  ,
                    50  ,
                    48  ,
                    58  
                ]
            }]
        });
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
                'fill':'lightgray'
            })
            .transition()
            .attr('width',300)
            .duration(time)
            ;
}

function hideBubble()
{
    $('#popup').fadeOut(600);
}



/**************** DRUG USE ********************/

function infographStatic()
{

    $('#part2').hide();
    $('#part3').hide();
    $('#part1').show();
    
    $("#popup").hide();
    $('#info1').hide();
    $('#info2').hide();
    $('#info3').hide();
    $('#info4').fadeIn(1000);
    usProduction();
    $('#infoAll').fadeIn(1000);
    drawBorderSeizures();
}

function infographSlideshow(num)
{  

    // var text = ['This represents the entire US population',
    //             '48% of all Americans have used illegal drugs in their lifetime',
    //             '16% have used drugs in the past year',
    //             '9.2% have used drugs in the past month'];
    // var leftPos = [0, 0, 300, 650,870,950]
       // console.log(num)

    $("#infograph").fadeIn(3000);
    var id = "#info"+num++;
    $(id).fadeIn(3000);
    if(num <= 5)
    {   
        
        // movePopup(leftPos[num],(150 + ((num-2)*57)),270,70,text[num-2],3000,'btopleft')
        setTimeout(function() {
            // console.log(id);
            infographSlideshow(num);
        },5000);
    }
    else
    {
        setTimeout(function(){$("#info1").animate({opacity:'0'})},500);
        setTimeout(function(){$("#info2").animate({opacity:'0'})},800);
        setTimeout(function(){$("#info3").animate({opacity:'0'})},1100);
        setTimeout(function(){
            $('#info1').hide();
            $('#info2').hide();
            $('#info3').hide();
            //$("#info4").css("border-radius","3px");
        },2500);

        setTimeout(function(){
            // $("#infograph").css('height','100px');
            // movePopup(640,400,200,30,'Marijuana Production by State',3000,'brighttop')
            usProduction();
        },3000)

        setTimeout(function(){
            $('#infoAll').fadeIn(3000);
        },19000)

        setTimeout(function(){
            drawBorderSeizures();
            // movePopup(120,145,220,50,'% Drug seizures along borders',3000,'bbottomleft')
        },40000);

    }
}


function guidedPart2()
{
    $('#part1').fadeOut(2000);
    setTimeout(function (){
        $('#part3').hide(); 
        $('#part2').fadeIn(1000);
    },2100)

    mexCrimes(6);

}


