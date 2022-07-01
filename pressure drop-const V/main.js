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
    y=y.toFixed(2)
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
document.getElementById("T_amb").value=0.04
function solve() {
    T=parseFloat(document.getElementById("T_amb").value)
    document.getElementById("gas_eff").innerHTML=eta_gas(T)+" %"
    document.getElementById("st_eff").innerHTML=eta_st(T)+" %"
    document.getElementById("comb_eff").innerHTML=eta_comb(T)+" %"
    document.getElementById("gas_work").innerHTML=work_gas(T)+" MW"
    document.getElementById("st_work").innerHTML=work_steam(T)+" MW"
    document.getElementById("comb_work").innerHTML=work_module(T)+" MW"
    document.getElementById("heat_rate").innerHTML=heat_rate(T)+" KJ/kW.hr"
    // document.getElementById("m_air").innerHTML=m_air(T)+" kg/sec"
    document.getElementById("m_fuel").innerHTML=m_f(T)+" kg/sec"
    document.getElementById("m_gas").innerHTML=m_gas(T)+" kg/sec"
}


