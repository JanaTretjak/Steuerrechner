let zvE = document.getElementById("einkommen")
let einzel = document.getElementById("einzel")
let zusammen = document.getElementById("zusammen")
let ergebnis = document.getElementById("ergebnis")
let Jahr = document.getElementById("Jahr")
let result;



    
        function rechnen(){
            let y = (zvE.value - 9408)/10000;
            let y1 = (zvE.value/2 - 9408)/10000;
            let z = (zvE.value - 14532)/10000;
            let z1 = (zvE.value/2 - 14532)/10000;
            if (Jahr.value == 2020){
                if (einzel.checked == true){
                   if (zvE.value <=9408){
                        ergebnis.innerHTML = 0
                    } else if (zvE.value<=14535){
                        ergebnis.innerHTML = ((972.87*y+1400)*y).toFixed(2);
                    } else if (zvE.value <=57051){
                        ergebnis.innerHTML = ((212.02*z+2397)*z+972.79).toFixed(2);
                    } else if (zvE.value<=270500){
                        ergebnis.innerHTML = (zvE.value*0.42 - 8963.74).toFixed(2)
                    } else if(zvE.value>270500){
                        ergebnis.innerHTML = (zvE.value*0.45 - 17078.74).toFixed(2)    
                    } 
                }else if(zusammen.checked == true){
                    if (zvE.value/2 <=9408){
                        ergebnis.innerHTML = 0
                    } else if (zvE.value/2<=14535){
                        ergebnis.innerHTML = ((972.87*y1+1400)*y1*2).toFixed(2);
                    } else if (zvE.value/2 <=57051){
                        ergebnis.innerHTML = (((212.02*z1+2397)*z1+972.79)*2).toFixed(2);
                    } else if (zvE.value/2<=270500){
                        ergebnis.innerHTML = ((zvE.value/2*0.42 - 8963.74)*2).toFixed(2)
                    } else if (zvE.value/2>270500){
                        ergebnis.innerHTML = ((zvE.value/2*0.45 - 17078.74)*2).toFixed(2)
                    }
                }       
            } else
            y = (zvE.value - 9168)/10000;
            y1 = (zvE.value/2 - 9168)/10000;
            z = (zvE.value - 14254)/10000;
            z1 = (zvE.value/2 - 14254)/10000;
            if (Jahr.value == 2019){
                if (einzel.checked == true){
                    if (zvE.value <=9168){
                        ergebnis.innerHTML = 0
                    } else if (zvE.value<=14254){
                        ergebnis.innerHTML = ((980.14*y+1400)*y).toFixed(2);
                    } else if (zvE.value <=55960){
                        ergebnis.innerHTML = ((216.16*z+2397)*z+965.58).toFixed(2);
                    } else if (zvE.value<=265326){
                        ergebnis.innerHTML = (zvE.value*0.42 - 8780.90).toFixed(2)
                    } else if(zvE.value>265326){
                        ergebnis.innerHTML = (zvE.value*0.45 - 16740.68).toFixed(2)
                    }
                } else if (zusammen.checked == true){
                    if (zvE.value/2 <=9168){
                        ergebnis.innerHTML = 0
                    } else if (zvE.value/2<=14254){
                        ergebnis.innerHTML = ((980.14*y1+1400)*y1*2).toFixed(2);
                    } else if (zvE.value/2 <=55960){
                        ergebnis.innerHTML = ((216.16*z1+2397)*z1+965.58*2).toFixed(2);
                    } else if (zvE.value/2<=265326){
                        ergebnis.innerHTML = ((zvE.value/2*0.42 - 8780.90)*2).toFixed(2)
                    } else if(zvE.value/2>265326){
                        ergebnis.innerHTML = ((zvE.value/2*0.45 - 16740.68)*2).toFixed(2)
                    }
                }
            } else 
            y = (zvE.value - 9000)/10000;
            y1 = (zvE.value/2 - 9000)/10000;
            z = (zvE.value - 13996)/10000;
            z1 = (zvE.value/2 - 13996)/10000;
            if (Jahr.value == 2018){
                if (einzel.checked == true){
                    if (zvE.value <=9000){
                        ergebnis.innerHTML = 0
                    } else if (zvE.value<=13996){
                        ergebnis.innerHTML = ((997.80*y+1400)*y).toFixed(2);
                    } else if (zvE.value <=54949){
                        ergebnis.innerHTML = ((220.13*z+2397)*z+948.49).toFixed(2);
                    } else if (zvE.value<=260532){
                        ergebnis.innerHTML = (zvE.value*0.42 - 8621.75).toFixed(2)
                    } else if(zvE.value>260532){
                        ergebnis.innerHTML = (zvE.value*0.45 - 16437.70).toFixed(2)
                    }
                } else if (zusammen.checked == true){
                    if (zvE.value/2 <=9000){
                        ergebnis.innerHTML = 0
                    } else if (zvE.value/2<=13996){
                        ergebnis.innerHTML = ((997.80*y1+1400)*y1*2).toFixed(2);
                    } else if (zvE.value/2 <=54949){
                        ergebnis.innerHTML = ((220.13*z1+2397)*z1+948.49*2).toFixed(2);
                    } else if (zvE.value/2<=260532){
                        ergebnis.innerHTML = ((zvE.value/2*0.42 - 8621.75)*2).toFixed(2)
                    } else if(zvE.value/2>260532){
                        ergebnis.innerHTML = ((zvE.value/2*0.45 - 16437.70)*2).toFixed(2)
                    }
                }
            }
        }
            
     
