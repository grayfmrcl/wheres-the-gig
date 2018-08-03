const setSelected = (a, b) => {
    if(a == b)
        return `selected`
    else
        return ''
}

module.exports = { setSelected }