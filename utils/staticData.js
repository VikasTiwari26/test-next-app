export const companyInfo = {
    address: "Address of company",
    phone: "+91 908 967 5906",
    email: "email@yourcompany.com",
    about: "Lorem ipsum dolor cum necessitatibus su quisquam molestias. Vel unde, blanditiis"
}

const buyLimit = 20

export const calculateLimit = (availbleNumberOfProducts, productQtyBought = 0) => {
    if (productQtyBought) {
        if (availbleNumberOfProducts < buyLimit) {
            if(buyLimit>productQtyBought||buyLimit==productQtyBought)return buyLimit-productQtyBought
            return availbleNumberOfProducts
        } else {
            return buyLimit - productQtyBought
        }
    }
    if (availbleNumberOfProducts < buyLimit) {
        return availbleNumberOfProducts
    } else {
        return buyLimit
    }
}
