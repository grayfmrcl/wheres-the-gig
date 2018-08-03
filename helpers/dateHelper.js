const daysDiff = (first, second) => {
    let _first = first || new Date
    let _second = second || new Date
    return Math.round((_first - _second) / (1000 * 60 * 60 * 24));
}

const daysDiffString = (first, second) => {
    const diff = daysDiff(first, second)
    if (diff > 0)
        return `${diff} days left`
    else if (diff < 0)
        return `${Math.abs(diff)} days ago`
    else
        return `Today`
}

const formatFullDate = date => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}

const formatDateTimeLocale = date => {
    var month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear(),
        hours = '' + date.getHours(),
        minutes = '' + date.getMinutes()

    month = month.padStart(2, '0')
    day = day.padStart(2, '0')
    hours = hours.padStart(2, '0')
    minutes = minutes.padStart(2, '0')

    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const imageHelper = (Artist) => {
    
    let img = `../../${Artist.image}`
    
    return Artist ? img : '' 
}

module.exports = {
    daysDiff, daysDiffString, formatFullDate, formatDateTimeLocale,imageHelper
}