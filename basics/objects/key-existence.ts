export{}

const user =  {
        name: "Alex",
        age: 15,
    }
const requiredFields =
    ["name",
    "age",
    "email",
    "phone"]


function getMissingFields(object: object ,fields:string[] ){
return fields.filter((field)=> !(field in object) )
}
console.log(getMissingFields(user, requiredFields))



function getDiscountStatus(product: {
    name: string,
    price: number,
    discount?: number
}){
    const noDiscount = 'not-configured'
    const undefinedDiscount = 'configured-empty'
    const activeDiscount = 'active'

    if(!('discount' in product)){
        return noDiscount
    }else if(product.discount === undefined){
        return undefinedDiscount
    }else {
        return activeDiscount}
}

console.log(getDiscountStatus({ name: "Phone", price: 500 }))
console.log(getDiscountStatus({ name: "Phone", price: 500, discount: undefined }))
console.log(getDiscountStatus({ name: "Phone", price: 500, discount: 15 }))
