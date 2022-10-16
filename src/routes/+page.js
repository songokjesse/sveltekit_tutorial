export const prerender = true;
export const load = async({fetch}) => {
    const res = await fetch('https://dummyjson.com/products')
    const products = res.json()
    return {
        products
    }
}