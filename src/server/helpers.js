const moment=require('moment');
const helpers={};

helpers.timeago=timestamp =>{//Crearemos una funcion (timeago) podemos nombrarlas como queramos, recibe el dato timestamp como parametro
   return moment(timestamp).startOf('minute').fromNow();//A partir del tiempo que yo lo he publicado quiero saber cuanto ha pasado en minutos
}
    module.exports=helpers;