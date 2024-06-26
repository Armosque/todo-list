



export const getNameDay = (date) => {
    const numberDay = date.getDay();
    const weekDay =["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    return weekDay[numberDay]
    
}

