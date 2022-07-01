function work_gas(x){
    y =  -522301*x + 371713
    y=y/1000
    y=y.toFixed(2)
    return y
}
function work_steam(x){
    y = -269698*x + 398686
    y=y/1000
    y=y.toFixed(2)
    return y
}
function work_module(x){
    y=eval(work_gas(x)*2)+eval(work_steam(x))
    return y
}
function eta_gas(x){
    y = -0.1823*x + 0.3935
    y=y*100
    y=y.toFixed(2)
    return y
}
function eta_st(x){
    y = 1E-14*x + 0.3981
    y=y*100
    y=y.toFixed(2)
    return y
}
function eta_comb(x){
    y = -10.977*x + 60.421
    y=y.toFixed(2)
    return y 
}
function m_air(x){
    y = -2.6486*x + 854.77
    y=y.toFixed(2)
    y=0
    return y 
}
function m_f(x){
    y = -20.73*x + 21.009
    y=y.toFixed(2)
    return y 
}
function m_gas(x){
    y = -1597.4*x + 1617.7
    y=y.toFixed(2)
    return y 
}
function heat_rate(x){
    y = 1101*x + 5957.9
    y=y.toFixed(2)
    return y 
}
function p_cond(x){
    y = 7E-05*x**2 - 9E-05*x + 0.0276
    y=y.toFixed(2)
    y=0
    return y 
}
function T_turbine(x){
    y = 1.1292*x + 611.37
    y=y.toFixed(2)
    y=0
    return y 
}
function L_pinch(x){
    y = -0.0013*x**2 - 0.1896*x + 30.702
    y=y.toFixed(2)
    y=0
    return y 
}
function I_pinch(x){
    y = -0.0011*x**2 + 0.0683*x + 23.812
    y=y.toFixed(2)
    y=0
    return y 
}
function H_pinch(x){
    y = 0.331*x + 13.175
    y=y.toFixed(2)
    y=0
    return y 
}


function change(value1,value2) {
    rate_of_change=((value2-value1)/value1)*100
    rate_of_change=rate_of_change.toFixed(2)
    return rate_of_change+" %"
}
document.getElementById("T1").value=0
document.getElementById("T2").value=0.04
function solve() {
    

T1=parseFloat(document.getElementById("T1").value)
T2=parseFloat(document.getElementById("T2").value)


document.getElementById("work_gas_1").innerHTML=work_gas(T1)+" Mw";
document.getElementById("work_gas_2").innerHTML=work_gas(T2)+" Mw";
document.getElementById("work_gas_change").innerHTML=change(work_gas(T1),work_gas(T2))

document.getElementById("work_st_1").innerHTML=work_steam(T1)+" Mw";
document.getElementById("work_st_2").innerHTML=work_steam(T2)+" Mw";
document.getElementById("work_st_change").innerHTML=change(work_steam(T1),work_steam(T2))

document.getElementById("work_module_1").innerHTML=work_module(T1)+" Mw";
document.getElementById("work_module_2").innerHTML=work_module(T2)+" Mw";
document.getElementById("work_module_change").innerHTML=change(work_module(T1),work_module(T2))

document.getElementById("eta_gas_1").innerHTML=eta_gas(T1)+" %";
document.getElementById("eta_gas_2").innerHTML=eta_gas(T2)+" %";
document.getElementById("eta_gas_change").innerHTML=change(eta_gas(T1),eta_gas(T2))

document.getElementById("eta_st_1").innerHTML=eta_st(T1)+" %";
document.getElementById("eta_st_2").innerHTML=eta_st(T2)+" %";
document.getElementById("eta_st_change").innerHTML=change(eta_st(T1),eta_st(T2))

document.getElementById("eta_comb_1").innerHTML=eta_comb(T1)+" %";
document.getElementById("eta_comb_2").innerHTML=eta_comb(T2)+" %";
document.getElementById("eta_comb_change").innerHTML=change(eta_comb(T1),eta_comb(T2))


document.getElementById("m_f_1").innerHTML=m_f(T1)+" Kg/sec";
document.getElementById("m_f_2").innerHTML=m_f(T2)+" Kg/sec";
document.getElementById("m_f_change").innerHTML=change(m_f(T1),m_f(T2))

document.getElementById("m_gas_1").innerHTML=m_gas(T1)+" Kg/sec";
document.getElementById("m_gas_2").innerHTML=m_gas(T2)+" Kg/sec";
document.getElementById("m_gas_change").innerHTML=change(m_gas(T1),m_gas(T2))

document.getElementById("heat_rate_1").innerHTML=heat_rate(T1)+" KJ/KW.hr";
document.getElementById("heat_rate_2").innerHTML=heat_rate(T2)+" KJ/KW.hr";
document.getElementById("heat_rate_change").innerHTML=change(heat_rate(T1),heat_rate(T2))

document.getElementById("p_cond_1").innerHTML=p_cond(T1)+" bar";
document.getElementById("p_cond_2").innerHTML=p_cond(T2)+" bar";
document.getElementById("p_cond_change").innerHTML=change(p_cond(T1),p_cond(T2))

document.getElementById("T_turbine_1").innerHTML=T_turbine(T1)+" &deg; C";
document.getElementById("T_turbine_2").innerHTML=T_turbine(T2)+" &deg; C";
document.getElementById("T_turbine_change").innerHTML=change(T_turbine(T1),T_turbine(T2))

document.getElementById("L_pinch_1").innerHTML=L_pinch(T1)+"";
document.getElementById("L_pinch_2").innerHTML=L_pinch(T2)+"";
document.getElementById("L_pinch_change").innerHTML=change(L_pinch(T1),L_pinch(T2))

document.getElementById("I_pinch_1").innerHTML=I_pinch(T1)+"";
document.getElementById("I_pinch_2").innerHTML=I_pinch(T2)+"";
document.getElementById("I_pinch_change").innerHTML=change(I_pinch(T1),I_pinch(T2))

document.getElementById("H_pinch_1").innerHTML=H_pinch(T1)+"";
document.getElementById("H_pinch_2").innerHTML=H_pinch(T2)+"";
document.getElementById("H_pinch_change").innerHTML=change(H_pinch(T1),H_pinch(T2))
}
solve()

// document.getElementById("work_gas_2").innerHTML=w2