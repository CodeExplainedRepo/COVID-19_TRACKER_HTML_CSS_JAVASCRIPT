// ALL COUNTRY NAMES WITH THEIR ISO CODE
let country_list = [
    { name: 'USA', code: 'US' },
    { name: 'Spain', code: 'ES' },
    { name: 'Italy', code: 'IT' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'UK', code: 'GB' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Iran', code: 'IR' },
    { name: 'Russia', code: 'RU' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Canada', code: 'CA' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Portugal', code: 'PT' },
    { name: 'India', code: 'IN' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Austria', code: 'AT' },
    { name: 'Peru', code: 'PE' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Japan', code: 'JP' },
    { name: 'S. Korea', code: 'KR' },
    { name: 'Chile', code: 'CL' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Poland', code: 'PL' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Romania', code: 'RO' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Norway', code: 'NO' },
    { name: 'UAE', code: 'AE' },
    { name: 'Czechia', code: 'CZ' },
    { name: 'Australia', code: 'AU' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Panama', code: 'PA' },
    { name: 'Finland', code: 'FI' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'Egypt', code: 'EG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'Moldova', code: 'MD' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Greece', code: 'GR' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Iceland', code: 'IS' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Oman', code: 'OM' },
    { name: 'North Macedonia', code: 'MK' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Ivory Coast', code: 'CI' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Niger', code: 'NE' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Albania', code: 'AL' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Honduras', code: 'HN' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Palestine', code: 'PS' },
    { name: 'Malta', code: 'MT' },
    { name: 'Taiwan', code: 'TW' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Réunion', code: 'RE' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'DRC', code: 'CD' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Mali', code: 'ML' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Tanzania', code: 'TZ' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Congo', code: 'CG' },
    { name: 'Brunei', code: 'BN' },
    { name: 'Somalia', code: 'SO' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Aruba', code: 'AW' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Togo', code: 'TG' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Cabo Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Libya', code: 'LY' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Macao', code: 'MO' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Syria', code: 'SY' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Saint Martin', code: 'MF' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Chad', code: 'TD' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Zimbabwe', code: 'ZW' },
    { name: 'Angola', code: 'AO' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Eswatini', code: 'SZ' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Belize', code: 'BZ' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'CAR', code: 'CF' },
    { name: 'St. Vincent Grenadines', code: 'VC' },
    { name: 'Turks and Caicos', code: 'TC' },
    { name: 'Falkland Islands', code: 'FK' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Vatican City', code: 'VA' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'St. Barth', code: 'BL' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Caribbean Netherlands', code: 'BQ' },
    { name: 'British Virgin Islands', code: 'VG' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'South Sudan', code: 'SD' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Saint Pierre Miquelon', code: 'PM' },
    { name: 'Yemen', code: 'YE' },
    { name: 'China', code: 'CN' }
];

// SELECT SEARCH COUNTRY ELEMENTS
const search_country_element = document.querySelector(".search-country");
const country_list_element = document.querySelector(".country-list");
const chang_country_btn = document.querySelector(".change-country");
const close_list_btn = document.querySelector(".close");
const input = document.getElementById('search-input')

// CREATE TE COUNTRY LIST
function createCountryList(){
    const num_countries = country_list.length;

    let i = 0, ul_list_id;

    country_list.forEach( (country, index) => {
        if( index % Math.ceil(num_countries/num_of_ul_lists) == 0){
            ul_list_id = `list-${i}`;
            country_list_element.innerHTML += `<ul id='${ul_list_id}'></ul>`;
            i++;
        }

        document.getElementById(`${ul_list_id}`).innerHTML += `
            <li onclick="fetchData('${country.name}')" id="${country.name}">
            ${country.name}
            </li>
        `;
    })
}

let num_of_ul_lists = 3;
createCountryList();

// SHOW/HIDE THE COUTRY LIST ON CLICK EVENT
chang_country_btn.addEventListener("click", function(){
    input.value = "";
    resetCountryList();
    search_country_element.classList.toggle("hide");
    search_country_element.classList.add("fadeIn");
});

close_list_btn.addEventListener("click", function(){
    search_country_element.classList.toggle("hide");
});

country_list_element.addEventListener("click", function(){
    search_country_element.classList.toggle("hide");
});

// COUNTRY FILTER
/* input event fires up whenever the value of the input changes */
input.addEventListener("input", function(){
    let value = input.value.toUpperCase();

    country_list.forEach( country => {
        if( country.name.toUpperCase().startsWith(value)){
            document.getElementById(country.name).classList.remove("hide");
        }else{
            document.getElementById(country.name).classList.add("hide");
        }
    })
})

// RESET COUNTRY LIST (SHOW ALL THE COUNTRIES )
function resetCountryList(){
    country_list.forEach( country => {
        document.getElementById(country.name).classList.remove("hide");
    })
}