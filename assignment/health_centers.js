// Preloaded healthcenter JSON
const healthCenters = [
  {
    "LNG":-75.16472099534634,
    "LAT":40.034508187448395,
    "OBJECTID":1,
    "NAME":"Covenant Health Services",
    "ORGANIZATION":"Covenant",
    "ZIP":19144,
    "PHONE":"215-844-0181",
    "WEBSITE":"http://covenanthousehealth.org/",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"251 East Bringhurst Street"
  },
  {
    "LNG":-75.17898120530263,
    "LAT":40.06738292573648,
    "OBJECTID":2,
    "NAME":"Mt. Pleasant Medical Center",
    "ORGANIZATION":"Covenant",
    "ZIP":19150,
    "PHONE":"215-248-7560",
    "WEBSITE":"http://covenanthousehealth.org/",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"8125 Stenton Avenue"
  },
  {
    "LNG":-75.16141103997865,
    "LAT":39.967025897357665,
    "OBJECTID":3,
    "NAME":"Fairmount Primary Care Center",
    "ORGANIZATION":"DVCH",
    "ZIP":19130,
    "PHONE":"215-235-9600",
    "WEBSITE":"http://www.dvch.org/dvch/Locations/FairmountPrimaryCareCenter/tabid/100/language/en-US/Default.aspx",
    "DENTAL_PHONE":"215-235-9600",
    "FULL_ADDRESS":"1412 Fairmount Avenue"
  },
  {
    "LNG":-75.18387328197538,
    "LAT":39.9530635609646,
    "OBJECTID":4,
    "NAME":"Fairmount Primary Care Center at Horizon House",
    "ORGANIZATION":"DVCH",
    "ZIP":19104,
    "PHONE":"215-222-2466",
    "WEBSITE":"http://www.dvch.org/dvch/Locations/FairmountPrimaryCareCenteratHorizonHouse/tabid/101/language/en-US/Default.aspx",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"120 S. 30th Street"
  },
  {
    "LNG":-75.16276471850303,
    "LAT":39.97183994499194,
    "OBJECTID":5,
    "NAME":"Fairmount Primary Care Center at St. Josephs Hospital",
    "ORGANIZATION":"DVCH",
    "ZIP":19130,
    "PHONE":"215-827-8010",
    "WEBSITE":"http://www.dvch.org/dvch/Locations/FairmountPrimaryCareCenteratStJosephs/tabid/134/language/en-US/Default.aspx",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"1600 W. Girard Avenue"
  },
  {
    "LNG":-75.1364584900247,
    "LAT":39.999543426506776,
    "OBJECTID":6,
    "NAME":"Maria de los Santos Health Center",
    "ORGANIZATION":"DVCH",
    "ZIP":19133,
    "PHONE":"215-291-2500",
    "WEBSITE":"http://www.dvch.org/dvch/Locations/MariadelosSantosHealthCenter/tabid/102/language/en-US/Default.aspx",
    "DENTAL_PHONE":"215-291-2500",
    "FULL_ADDRESS":"401-455 West Allegheny Ave"
  },
  {
    "LNG":-75.11041229887653,
    "LAT":40.01193495066715,
    "OBJECTID":7,
    "NAME":"Parkview OB/Gyn & Podiatry Services",
    "ORGANIZATION":"DVCH",
    "ZIP":19124,
    "PHONE":"215-537-7695",
    "WEBSITE":"http://dvch.org/dvch/Locations/ParkviewHealthCenter/tabid/104/language/en-US/Default.aspx",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"841 E. Hunting Park Avenue Suite 201"
  },
  {
    "LNG":-75.1143429301342,
    "LAT":39.99603493093682,
    "OBJECTID":8,
    "NAME":"Esperanza Health Center - main (Kensington Avenue)",
    "ORGANIZATION":"Esperanza",
    "ZIP":19134,
    "PHONE":"215-831-1100",
    "WEBSITE":"http://www.esperanzahealthcenter.org/",
    "DENTAL_PHONE":"215-831-1100",
    "FULL_ADDRESS":"3156 Kensington Ave "
  },
  {
    "LNG":-75.14097060863617,
    "LAT":39.98886147155695,
    "OBJECTID":9,
    "NAME":"Esperanza Health Center  (Fifth Street)",
    "ORGANIZATION":"Esperanza",
    "ZIP":19133,
    "PHONE":"215-221-6633",
    "WEBSITE":"http://www.esperanzahealthcenter.org/",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"2490 North 5th Street "
  },
  {
    "LNG":-75.13685965438314,
    "LAT":40.01910717508576,
    "OBJECTID":10,
    "NAME":"Hunting Park",
    "ORGANIZATION":"Esperanza",
    "ZIP":19140,
    "PHONE":"215-302-3600",
    "WEBSITE":"http://www.esperanzahealthcenter.org/",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"4417 N. 6th Street"
  },
  {
    "LNG":-75.22914840174073,
    "LAT":39.929146144466095,
    "OBJECTID":11,
    "NAME":"The Health Annex",
    "ORGANIZATION":"FPCN",
    "ZIP":19143,
    "PHONE":"215-727-4721",
    "WEBSITE":"http://www.fpcn.com/",
    "DENTAL_PHONE":"215-727-4721",
    "FULL_ADDRESS":"6120 Woodland Avenue "
  },
  {
    "LNG":-75.15481743211816,
    "LAT":39.96797689150463,
    "OBJECTID":12,
    "NAME":"Eleventh Street Health Services of Drexel University",
    "ORGANIZATION":"FPCN",
    "ZIP":19123,
    "PHONE":"215-769-1100",
    "WEBSITE":"http://www.fpcn.com/",
    "DENTAL_PHONE":"215-769-1100",
    "FULL_ADDRESS":"850 North 11th Street"
  },
  {
    "LNG":-75.17151190788698,
    "LAT":40.016834873986674,
    "OBJECTID":13,
    "NAME":"Abbotsford Falls  Family Practice and Counseling",
    "ORGANIZATION":"FPCN",
    "ZIP":19144,
    "PHONE":"215-843-9720",
    "WEBSITE":"http://www.fpcn.com/",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"4700 Wissahickon Ave Building D, Suite 119"
  },
  {
    "LNG":-75.21451422100864,
    "LAT":39.939434302152065,
    "OBJECTID":14,
    "NAME":"Woodland Avenue Medical Center",
    "ORGANIZATION":"GPHA",
    "ZIP":19143,
    "PHONE":"215-726-9807",
    "WEBSITE":"http://www.gphainc.org/sitesMap.asp",
    "DENTAL_PHONE":"215-726-9807",
    "FULL_ADDRESS":"5000 Woodland Avenue"
  },
  {
    "LNG":-75.1571583374903,
    "LAT":39.93591676535985,
    "OBJECTID":15,
    "NAME":"Southeast Health Center",
    "ORGANIZATION":"GPHA",
    "ZIP":19147,
    "PHONE":"215-339-5100",
    "WEBSITE":"http://www.gphainc.org/sitesMap.asp",
    "DENTAL_PHONE":"215-339-5100",
    "FULL_ADDRESS":"800 Washington Avenue "
  },
  {
    "LNG":-75.18823365396396,
    "LAT":39.92670972057362,
    "OBJECTID":16,
    "NAME":"Wilson Park Medical Center",
    "ORGANIZATION":"GPHA",
    "ZIP":19145,
    "PHONE":"215-755-7700",
    "WEBSITE":"http://www.gphainc.org/sitesMap.asp",
    "DENTAL_PHONE":"215-755-6866",
    "FULL_ADDRESS":"2520 Snyder Avenue"
  },
  {
    "LNG":-75.15947687109806,
    "LAT":39.936546035254,
    "OBJECTID":17,
    "NAME":"Chinatown Medical Services",
    "ORGANIZATION":"GPHA",
    "ZIP":19140,
    "PHONE":"215-627-8000",
    "WEBSITE":"http://www.gphainc.org/sitesMap.asp",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"930 Washington Avenue"
  },
  {
    "LNG":-75.15158332421545,
    "LAT":39.930609043493554,
    "OBJECTID":18,
    "NAME":"4th Street Medical Suite",
    "ORGANIZATION":"GPHA",
    "ZIP":19147,
    "PHONE":"215-339-1079",
    "WEBSITE":"http://www.gphainc.org/sitesMap.asp",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"1401 South 4th Street"
  },
  {
    "LNG":-75.08613560085996,
    "LAT":40.01422279070762,
    "OBJECTID":19,
    "NAME":"Frankford Avenue Health Center",
    "ORGANIZATION":"GPHA",
    "ZIP":19124,
    "PHONE":"215-744-1302",
    "WEBSITE":"http://www.gphainc.org/sitesMap.asp",
    "DENTAL_PHONE":"215-535-1990",
    "FULL_ADDRESS":"4510 Frankford Avenue"
  },
  {
    "LNG":-75.22060564182367,
    "LAT":39.93531827967249,
    "OBJECTID":20,
    "NAME":"Greater Philadelphia Health Action, Inc. Dental and Behavorial Healthcare",
    "ORGANIZATION":"GPHA",
    "ZIP":19143,
    "PHONE":"215-724-4700",
    "WEBSITE":"http://www.gphainc.org/sitesMap.asp",
    "DENTAL_PHONE":"215-724-4700",
    "FULL_ADDRESS":"5501 Woodland Avenue"
  },
  {
    "LNG":-75.15790992258191,
    "LAT":39.92280372483758,
    "OBJECTID":21,
    "NAME":"Snyder Avenue Dental Center",
    "ORGANIZATION":"GPHA",
    "ZIP":19148,
    "PHONE":"215-334-4900",
    "WEBSITE":"http://www.gphainc.org/sitesMap.asp",
    "DENTAL_PHONE":"215-334-4900",
    "FULL_ADDRESS":"640 Snyder Avenue"
  },
  {
    "LNG":-75.13539371160077,
    "LAT":39.993066351162625,
    "OBJECTID":22,
    "NAME":"Congreso Health Center",
    "ORGANIZATION":"PHMC",
    "ZIP":19133,
    "PHONE":"267-765-2272",
    "WEBSITE":"http://www.phmc.org/site/programs/health-care-centers/congreso-health-center",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"216 West Somerset Street"
  },
  {
    "LNG":-75.15896583067315,
    "LAT":39.9591642734026,
    "OBJECTID":23,
    "NAME":"PHMC Care Clinic",
    "ORGANIZATION":"PHMC",
    "ZIP":19123,
    "PHONE":"215-825-8220",
    "WEBSITE":"http://www.phmc.org/site/programs/health-care-centers/375-phmc-care-clinic",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"1200 Callowhill Street Suite 101"
  },
  {
    "LNG":-75.15565137433735,
    "LAT":39.948882865213776,
    "OBJECTID":24,
    "NAME":"Mary Howard Health Center",
    "ORGANIZATION":"PHMC",
    "ZIP":19107,
    "PHONE":"215-592-4500",
    "WEBSITE":"http://www.phmc.org/site/programs/health-care-centers/mary-howard",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"125 South 9th Street"
  },
  {
    "LNG":-75.14864813169741,
    "LAT":39.98138576637114,
    "OBJECTID":25,
    "NAME":"PHMC Health Connection",
    "ORGANIZATION":"PHMC",
    "ZIP":19122,
    "PHONE":"215-765-6690",
    "WEBSITE":"http://www.phmc.org/site/programs/health-care-centers/phmc-health-connection",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"1900 North 9th Street"
  },
  {
    "LNG":-75.12100695370191,
    "LAT":40.036815083614286,
    "OBJECTID":26,
    "NAME":"Rising Sun Health Center",
    "ORGANIZATION":"PHMC",
    "ZIP":19120,
    "PHONE":"215-279-9666",
    "WEBSITE":"http://www.phmc.org/site/programs/health-care-centers/rising-sun",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"5675 North Front Street"
  },
  {
    "LNG":-75.16498701262651,
    "LAT":39.97819819408861,
    "OBJECTID":27,
    "NAME":"Meade Family Health Center",
    "ORGANIZATION":"QCHC",
    "ZIP":19121,
    "PHONE":"215-765-9501",
    "WEBSITE":"http://www.qchc.org/AboutUs.htm",
    "DENTAL_PHONE":"215-765-9501",
    "FULL_ADDRESS":"1800 West Oxford Street"
  },
  {
    "LNG":-75.17247604484523,
    "LAT":39.99633279019039,
    "OBJECTID":28,
    "NAME":"QCHC Family Health Center",
    "ORGANIZATION":"QCHC",
    "ZIP":19132,
    "PHONE":"215-227-0300",
    "WEBSITE":"http://www.qchc.org/AboutUs.htm",
    "DENTAL_PHONE":"215-227-0300",
    "FULL_ADDRESS":"2501 West Lehigh Avenue"
  },
  {
    "LNG":-75.17422754056778,
    "LAT":39.97644271072366,
    "OBJECTID":29,
    "NAME":"Vaux Family Health Center",
    "ORGANIZATION":"QCHC",
    "ZIP":19121,
    "PHONE":"215-236-8289",
    "WEBSITE":"http://www.qchc.org/AboutUs.htm",
    "DENTAL_PHONE":"215-236-8289",
    "FULL_ADDRESS":"2300 West Master Street"
  },
  {
    "LNG":-75.14541449360493,
    "LAT":40.025833736868066,
    "OBJECTID":30,
    "NAME":"Cooke Family Health Center",
    "ORGANIZATION":"QCHC",
    "ZIP":19141,
    "PHONE":"215-457-6902",
    "WEBSITE":"http://www.qchc.org/AboutUs.htm",
    "DENTAL_PHONE":"215-457-6902",
    "FULL_ADDRESS":"1300 West Loudon Street"
  },
  {
    "LNG":-75.23845470248338,
    "LAT":39.95850513313452,
    "OBJECTID":31,
    "NAME":"Sayre Health",
    "ORGANIZATION":"Sayre-Penn",
    "ZIP":19139,
    "PHONE":"215-474-4444",
    "WEBSITE":"http://www.sayrehealth.org/",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"5800 Walnut St"
  },
  {
    "LNG":-75.22519602393405,
    "LAT":39.96528153231064,
    "OBJECTID":32,
    "NAME":"Spectrum Health Center",
    "ORGANIZATION":"Spectrum",
    "ZIP":19139,
    "PHONE":"215-471-2761",
    "WEBSITE":"http://www.spechealth.org/index.php/home/location",
    "DENTAL_PHONE":"215-471-2761",
    "FULL_ADDRESS":"5201 Haverford Ave"
  },
  {
    "LNG":-75.15853496412691,
    "LAT":39.9750982781126,
    "OBJECTID":33,
    "NAME":"Broad Street Health Center",
    "ORGANIZATION":"Spectrum",
    "ZIP":19122,
    "PHONE":"215-235-7944",
    "WEBSITE":"http://www.spechealth.org/index.php/home/location",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"1415 North Broad Street  Progress Human Service B*"
  },
  {
    "LNG":-75.16942182662515,
    "LAT":39.926223828385766,
    "OBJECTID":34,
    "NAME":"Health Center 2",
    "ORGANIZATION":"PDPH",
    "ZIP":19145,
    "PHONE":"215-685-1803",
    "WEBSITE":"http://www.phila.gov/health/AmbulatoryHealth/hc2.html",
    "DENTAL_PHONE":"215-685-1822",
    "FULL_ADDRESS":"1930 South Broad Street Constitution Health Plaza*"
  },
  {
    "LNG":-75.209062933417,
    "LAT":39.94878144146083,
    "OBJECTID":35,
    "NAME":"Health Center 3",
    "ORGANIZATION":"PDPH",
    "ZIP":19104,
    "PHONE":"215-685-7504",
    "WEBSITE":"http://www.phila.gov/health/AmbulatoryHealth/hc3.html",
    "DENTAL_PHONE":"215-685-7506",
    "FULL_ADDRESS":"555 S. 43rd Street"
  },
  {
    "LNG":-75.210940882576,
    "LAT":39.96254511416073,
    "OBJECTID":36,
    "NAME":"Health Center 4",
    "ORGANIZATION":"PDPH",
    "ZIP":19104,
    "PHONE":"215-685-7601",
    "WEBSITE":"http://www.phila.gov/health/AmbulatoryHealth/hc4.html",
    "DENTAL_PHONE":"215-685-7605",
    "FULL_ADDRESS":"4400 Haverford Avenue"
  },
  {
    "LNG":-75.16677131948624,
    "LAT":39.98311056325324,
    "OBJECTID":37,
    "NAME":"Health Center 5",
    "ORGANIZATION":"PDPH",
    "ZIP":19121,
    "PHONE":"215-685-2933",
    "WEBSITE":"http://www.phila.gov/health/AmbulatoryHealth/hc5.html",
    "DENTAL_PHONE":"215-685-2938",
    "FULL_ADDRESS":"1900 N. 20th Street"
  },
  {
    "LNG":-75.1419504913517,
    "LAT":39.96991452552731,
    "OBJECTID":38,
    "NAME":"Health Center 6",
    "ORGANIZATION":"PDPH",
    "ZIP":19123,
    "PHONE":"215-685-3803",
    "WEBSITE":"http://www.phila.gov/health/AmbulatoryHealth/hc6.html",
    "DENTAL_PHONE":"215-685-3816",
    "FULL_ADDRESS":"301 W. Girard Avenue"
  },
  {
    "LNG":-75.17274206808868,
    "LAT":40.03787852063628,
    "OBJECTID":39,
    "NAME":"Health Center 9",
    "ORGANIZATION":"PDPH",
    "ZIP":19144,
    "PHONE":"215-685-5701",
    "WEBSITE":"http://www.phila.gov/health/AmbulatoryHealth/hc9.html",
    "DENTAL_PHONE":"215-685-5738",
    "FULL_ADDRESS":"131 E. Chelten Avenue"
  },
  {
    "LNG":-75.06128762221265,
    "LAT":40.04836450544958,
    "OBJECTID":40,
    "NAME":"Health Center 10",
    "ORGANIZATION":"PDPH",
    "ZIP":19149,
    "PHONE":"215-685-0639",
    "WEBSITE":"http://www.phila.gov/health/AmbulatoryHealth/hc10.html",
    "DENTAL_PHONE":"215-685-0608",
    "FULL_ADDRESS":"2230 Cottman Avenue"
  },
  {
    "LNG":-75.17907078347366,
    "LAT":39.99083952253368,
    "OBJECTID":41,
    "NAME":"Strawberry Mansion Health Center",
    "ORGANIZATION":"PDPH",
    "ZIP":19132,
    "PHONE":"215-685-2401",
    "WEBSITE":"http://www.phila.gov/health/AmbulatoryHealth/hcStrawberry.html",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"2840 Dauphin Street"
  },
  {
    "LNG":-75.17373749634852,
    "LAT":40.00946907166144,
    "OBJECTID":42,
    "NAME":"Qcare Convenient Care Clinic @ Shoprite",
    "ORGANIZATION":"FPCN",
    "ZIP":19120,
    "PHONE":"267-597-3610",
    "WEBSITE":"http://www.fpcn.com/?page_id=128",
    "DENTAL_PHONE":"N/A",
    "FULL_ADDRESS":"2800 Fox Street Unit A"
  },
  {
    "LNG":-75.16085860238907,
    "LAT":40.01277040246404,
    "OBJECTID":43,
    "NAME":"Hunting Park Health & Dental Center ",
    "ORGANIZATION":"GPHA",
    "ZIP":19140,
    "PHONE":"215-228-9300",
    "WEBSITE":"http://www.gphainc.org/sitesMap.asp",
    "DENTAL_PHONE":"215-229-1390",
    "FULL_ADDRESS":"1999 W. Hunting Park Avenue"
  },
  {
    "LNG":-75.16803021640862,
    "LAT":39.932635546404335,
    "OBJECTID":44,
    "NAME":"Urban Health Initiatives",
    "ORGANIZATION":"Urban Health Initiatives",
    "ZIP":19146,
    "PHONE":"215-755-0700 x1",
    "WEBSITE":"http://www.myuhi.org/",
    "DENTAL_PHONE":"N/A ",
    "FULL_ADDRESS":"1408 South Broad Street"
  },
  {
    "LNG":-75.17022950680595,
    "LAT":39.980241690204736,
    "OBJECTID":45,
    "NAME":"Klein Wellness Center",
    "ORGANIZATION":"Project HOME",
    "ZIP":19121,
    "PHONE":"215-320-6187",
    "WEBSITE":"https://projecthome.org/skwc",
    "DENTAL_PHONE":"215-320-6187",
    "FULL_ADDRESS":"2144 Cecil B Moore Ave"
  }
];
]

const keys = [['zip', 'address']]
const targets = healthCenters.filter(item => item.ZIP >= 19140 && item.ZIP <= 19149)
const rows = targets.map(({ ZIP, FULL_ADDRESS }) => ([ZIP, FULL_ADDRESS]))
const result = keys.concat(rows)
console.log('health centers within the zip codes from 19140 to 19149 (inclusive)', result)

const map = L.map('mapid').setView([39.975232206175015, -75.13438358902931], 12)
window.map = map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

const len = targets.length
for (let index = 0; index < len; index += 1) {
  const el = targets[index]
  const marker = L.marker([el.LAT, el.LNG])
    .addTo(map)
    .bindPopup(`address: ${el.FULL_ADDRESS}`)

  marker.on('click', () => {
    marker.openPopup()
  })
}
