// product = {
//     title: "XiaoMi Air Purifier",
//     description: "Lorem ipsum dolor sit amet.",
//     price: 500
// }

function ProductItem(props) {
    return <div>
        <h4>{props.title}</h4>
        <h4>{props.description}</h4>
        <h4>{props.price}</h4>

    </div>

}
// function ProductItem(product) {
//     return <div>
//         <h1>{product.title}</h1>
//         <h4>{product.description}</h4>
//         <h4>{product.price}</h4>

//     </div>

// }


export default ProductItem;