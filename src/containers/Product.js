export default function products(state = []) {
    return state

}

export function getProducts(state, props) {
    return state.products;
}

export function getProducts(props, state) {
    return state.products.find(item => item.id === props.id)
}