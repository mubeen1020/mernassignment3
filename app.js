const mobiles = [{

    Iphone: {
        IphoneX: {
            Name: "Iphone",
            Model: "Iphone X",
            Ram: "3 GB",
            Rom: "64 GB",
            Price: "$218",
        },
        Iphone12: {
            Name: "Iphone",
            Model: "Iphone 12",
            Ram: "4 GB",
            Rom: "128 GB",
            Price: "$799",
        },
        Iphone13: {
            Name: "Iphone",
            Model: "Iphone 13",
            Ram: "4 GB",
            Rom: "128 GB",
            Price: "$1699",
        },
    },
    Samsung: {
        Note5: {
            Name: "Samsung",
            Model: "Galaxy Note 5",
            Ram: "4 GB",
            Rom: "32 GB",
            Price: "$888",
        },
        Note10: {
            Name: "Samsung",
            Model: "Galaxy Note 10",
            Ram: "6 GB",
            Rom: "64 GB",
            Price: "$500",
        },
        glaxaynote8: {
            Name: "Samsung",
            Model: "note 8",
            Ram: "8 GB",
            Rom: "128 GB",
            Price: "$555",
        },
    },
}
]

const brand = document.getElementById('brand')
const model = document.getElementById('model')
const renderValues = document.getElementById('renderValues')
const BrandNames = Object.keys(mobiles)

mobiles.filter(function (x, i) {
    const secondValue = () => {
        model.disabled = false
        const mobileNames = Object.keys(mobiles[brand.value])
        for (let i = 0; i < mobileNames.length; i++) {
    
            model.innerHTML += `  <option value=${mobileNames[i]}>${mobileNames[i]}</option>`
    
        }
        console.log(mobileNames);
    }
  })







firstValue()
a.filter(function (x, i) {
    
        model.disabled = false
        const mobileNames = Object.keys(mobiles[brand.value])
        for (let i = 0; i < mobileNames.length; i++) {
    
            model.innerHTML += `  <option value=${mobileNames[i]}>${mobileNames[i]}</option>`
    
        }
        console.log(mobileNames);
    
  })


const renderVal = () => {
    const selectedVal = mobiles[brand.value][model.value]
    console.log(selectedVal);

    renderValues.innerHTML = `        
    <h1>
         ${selectedVal.Name}   
    </h1>
    <h1>
         ${selectedVal.Model}   
    </h1>
    <h1>
         ${selectedVal.Ram}   
    </h1>
    <h1>
         ${selectedVal.Rom}   
    </h1>
    <h1>
         ${selectedVal.Price}   
    </h1>
    
    `




}