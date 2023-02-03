function calculatebmi(){
    let weight  = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight/(height*height))
    document.getElementById('bmi-output').innerHTML=bmi
    
    if(bmi<= 24.9){
        document.getElementById('message').innerHTML =' you are under weight'
    }
    else if( bmi>= 25 && bmi <= 29.9){
        document.getElementById('message').innerHTML =' you are healthy weight'
    } else{
        document.getElementById('message').innerHTML =' you are over weight'
    }
    
}
function reload(){
    window.location.reload()
}