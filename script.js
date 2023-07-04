const calculatetemp = ()=> {
    const numbertemp=document.getElementById('temp').value;
    const tempselected = document.getElementById('temp_diff');
    const valuetemp= temp_diff.options[tempselected.selectedIndex].value;

const celtofah=(cel)=>{
    let fahrenheit = Math.round((cel *(9 /5)) + 32);
    return fahrenheit; 
}

const fahtocel=(feh)=>{
    let celsius = Math.round((feh - 32) * 5/9);
    return celsius; 
}



    let result;

    if(valuetemp == 'cel'){
        result = celtofah(numbertemp);
        document.getElementById('rescontainer').innerHTML=` = ${result} *fahrenheit`;
    }
    else{
        result = fahtocel(numbertemp);
        document.getElementById('rescontainer').innerHTML=` = ${result} *Calsius`;
       
    }
}