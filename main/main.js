module.exports = function main(mileage,wait) {
    var price;
    if(mileage<=2)
        price =Math.round(6 + wait*0.25) ;
    else if(mileage<=8)
        price = Math.round(6+0.8*(mileage-2)+wait*0.25);
    else
        price = Math.round(6+0.8*(8-2)+0.8*1.5*(mileage-8)+wait*0.25);
    return price;
};