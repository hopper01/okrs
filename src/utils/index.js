const BASE_URL = "https://okrcentral.github.io/sample-okrs/db.json";
const category = ['All','Company', 'Sales', 'Marketing', 'Finance', 'People', 'Product',
     'Management', 'Engineering', 'Administration', 'Customer Success','Design']

const filterByCategory = (arr, category) => {
    if (!category) return arr;
      return  arr.filter((d) => d.category === category);
}
const manageOkrs = (arr) => {
    const result = []
    arr.forEach(okr => {
        if (!okr.parent_objective_id) {
            result.push({ ...okr, children: [], hideChild:false })
        }
    });
    result.forEach(parentOkr => {
        const children = arr.filter(okr => okr.parent_objective_id === parentOkr.id)
        parentOkr.children = children
    })
    return result
}
const getCategories = (okrs) => {
    const result = new Set()
    okrs.forEach(okr => {
        result.add(okr.category)
    })
    return result;
}
export { BASE_URL, category, filterByCategory, manageOkrs, getCategories };
