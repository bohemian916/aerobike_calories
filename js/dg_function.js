
function generate_mets_per_watt(weight){
    let ret = [] 
    for (let watt = 0; watt <= 300; watt+=10){
         dict = { "watt": watt,
                  "mets":  ((watt * 12 + weight * 3.5)/3.5 /weight).toFixed(1),
                  "calorie": ((watt * 12 + weight * 3.5)/3.5 *1.05).toFixed(0),
                  "net_calorie": ((watt * 12 )/3.5 *1.05).toFixed(0)

                }
         ret.push(dict)
    }
    return ret 
}
