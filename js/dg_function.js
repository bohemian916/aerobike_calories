
function generate_mets_per_watt(weight){
    let ret = {} 
    for (let watt = 0; watt <= 300; watt+=10){
        ret[watt] = parseInt((watt * 12 + weight * 3.5)/3.5 *1.05)
    }
    return ret 
}
