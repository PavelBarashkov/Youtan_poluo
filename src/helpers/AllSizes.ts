export function AllSizes(card: any) {
    if (card["model-products"] && card["model-products"].length > 0) {
        let sizes: any = [];
        let data: any = [];
        card["model-products"].forEach((item: any) => {
            item?.product?.sizes.forEach((e: any) => {
                sizes.push(e.name)
            })
        })
        new Set(sizes).forEach(item => data.push(item))
        return data
    }
    return []
}