const BASE_URL = "https://okrcentral.github.io/sample-okrs/db.json";
const category = ['All','Company', 'Sales', 'Marketing', 'Finance', 'People', 'Product',
     'Management', 'Engineering', 'Administration', 'Customer Success','Design']

const filterByCategory = (arr, category) => {
      return  arr.filter((d) => d.category === category);
}
const manageOkrs = (arr) => {
    const result = []
    arr.forEach(okr => {
        if (!okr.parent_objective_id) {
            result.push({ ...okr, children: [], hideChild:true })
        }
    });
    result.forEach(parentOkr => {
        const children = arr.filter(okr => okr.parent_objective_id === parentOkr.id)
        parentOkr.children = children
    })
    return result
}
const filterOkrs = (okrs, category) => {
     if (!category) return okrs;
    return okrs.filter((okr) => okr.category === category)
}
const getCategories = (okrs) => {
    const result = new Set()
    okrs.forEach(okr => {
        result.add(okr.category)
    })
    return result;
}
export { BASE_URL, category, filterByCategory, manageOkrs, filterOkrs, getCategories };
