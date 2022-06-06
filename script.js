function calculate() {

    const lvl = document.querySelector('#lvltxt').value
    const numlvl = Number.parseInt(lvl)

    let maxinv 
    let maxinved 
    let mininv
    let mininved

    if (numlvl > 300) {
        maxinv = 713
        maxinved = 713
        mininv = 301
        mininved = 301

    } else {
        maxinv = Number.parseInt(numlvl + 20 + (numlvl * 0.1))
        mininv = Number.parseInt(numlvl - (numlvl * 0.1))

        if (10 / 9 * numlvl != Number.parseInt(10 / 9 * numlvl)) {
            maxinved = Number.parseInt(10 / 9 * numlvl + 1)
        } else {
            maxinved = 10 / 9 * numlvl
        }

        if ((10 * numlvl - 200) / 11 != Number.parseInt((10 * numlvl - 200) / 11)) {
            mininved = Number.parseInt((10 * numlvl - 200) / 11 + 1)
        } else {
            mininved = (10 * numlvl - 200) / 11 
        }
    }
   
    let maxsumm 
    let maxsummed
    let minsumm
    let minsummed

    if (numlvl > 305) {
        maxsumm = 713
        maxsummed = 713
        minsumm = 306
        minsummed = 306

    } else {
        maxsumm = Number.parseInt(1.1 * numlvl + 10) 
        minsumm = Number.parseInt(0.9 * numlvl - 10)

        if (Number.parseInt((numlvl + 10) * 10 / 9) != (numlvl + 10) * 10 / 9) {
            maxsummed = Number.parseInt((numlvl + 10) * 10 / 9 + 1)
        } else {
            maxsummed = (numlvl + 10) * 10 / 9
        }

        if (Number.parseInt((numlvl - 10) * 10 / 11) != (numlvl - 10) * 10 / 11) {
            minsummed = Number.parseInt((numlvl - 10) * 10 / 11 + 1)
        } else {
            minsummed = (numlvl - 10) * 10 / 11
        }
    }

    if (mininv <= 0) {
        mininv = 1
    }
    if (mininved <= 0) {
        mininved = 1
    }
    if (minsumm <= 0) {
        minsumm = 1
    }
    if (minsummed <= 0) {
        minsummed = 1   
    }

    const wpup = document.querySelector('#wpup').value
    let numwpup = Number.parseInt(wpup)

    let res = document.querySelector('#res')
    res.innerHTML = ''

    const radtype = document.getElementsByName('wptype')

    const tierRR = ['+0 to +3', '+0 to +4', '+0 to +5', '+0 to +6', '+1 to +7', '+2 to +8', '+3 to +10', '+4 to +11', '+5 to +12', '+6 to +13', '+6 to +14', '+7 to +15', '+8 to +17', '+9 to +18', '+10 to +19', '+11 to +20', '+12 to +21', '+12 to +22', '+13 to +24', '+14 to +25', '+15 to +25', '+16 to +25', '+17 to +25', '+18 to +25', '+18 to +25', '+19 to +25'] 
    const tierRS = ['+0 to +1', '+0 to +1', '+0 to +2', '+0 to +2', '+1 to +3', '+1 to +3', '+2 to +4', '+2 to +4', '+2 to +5', '+3 to +5', '+3 to +5', '+3 to +6', '+4 to +7', '+4 to +7', '+4 to +7', '+5 to +8', '+5 to +8', '+5 to +9', '+6 to +9', '+6 to +10', '+6 to +10', '+7 to +10', '+7 to +10', '+8 to +10', '+8 to +10', '+8 to +10']

    const tierSS = ['+0 to +1', '+0 to +2', '+1 to +3','+2 to +4', '+3 to +5', '+4 to +7', '+5 to +8', '+5 to +9', '+6 to +10', '+7 to +10', '+8 to +10']
    const tierSR = ['+0 to +3', '+0 to +5', '+2 to +8', '+4 to +11', '+6 to +14', '+8 to +17', '+11 to +20', '+12 to +22', '+15 to +25', '+17 to +25', '+19 to +25']

    
    if (wpup.length == 0 && radtype[0].checked) {
        numwpup = 0
        res.innerHTML = `<h2>Your Weapon Upgrade Range is:<h2>
        <h3>${tierRR[numwpup]}</h3>For regular smithing stones and 
        <h3>${tierRS[numwpup]}</h3>For somber smithing stones`

    }else if (wpup.length == 0 && radtype[1].checked) {
        numwpup = 0
        res.innerHTML = `<h2>Your Weapon Upgrade Range is:</h2>
        <h3>${tierSR[numwpup]}</h3> For regular smithing stones and 
        <h3>${tierSS[numwpup]}</h3> For somber smithing stones`

    } else if (numwpup > 25 || numwpup < 0 || !numwpup) {
        alert ('Insert a valid weapon upgrade level')
        
    } else if(radtype[1].checked && numwpup > 10 && numwpup <= 25) {
        alert ('Insert a weapon upgrade level less than or equal to 10, or another upgrade type')
        
    } else if(radtype[0].checked) {
        res.innerHTML = `<h2>Your Weapon Upgrade Range is:</h2>
        <h3>${tierRR[numwpup]}</h3>For regular smithing stones and 
        <h3>${tierRS[numwpup]}</h3>For somber smithing stones`

    } else if(radtype[1].checked) {
        res.innerHTML = `<h2>Your Weapon Upgrade Range is:</h2>
        <h3>${tierSR[numwpup]}</h3> For regular smithing stones and 
        <h3>${tierSS[numwpup]}</h3> For somber smithing stones`
    }


    if (lvl.length == 0 || !numlvl) {
        alert ('Insert a valid level')

    } else if (numlvl > 713) {
        alert ('Insert a level less than or equal to 713')

    } else if (numlvl <= 0) {
        alert ('Insert a level higher than or equal to 1')

    } else {
        res.innerHTML += `<h2>Your Sign Summoning Range is:</h2>
        <h3>${minsumm} - ${maxsumm}</h3>For summoning phantoms and
        <h3>${minsummed} - ${maxsummed}</h3> For being summoned as a phantom
        <h2>Your Invasion Range is:</h2>
        <h3>${mininv} - ${maxinv}</h3>For invading other worlds and
        <h3>${mininved} - ${maxinved}</h3>For being invaded`
    }
}