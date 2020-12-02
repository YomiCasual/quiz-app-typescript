

// Fetch Questions



export const fetchQuestions = async (amount:number) => {

    let api = `https://opentdb.com/api.php?amount=${amount}&type=multiple`
    return api
}


export const fetchCategories = async () => {
    const fetchResult = await fetch('https://opentdb.com/api_category.php');
    const data = await fetchResult.json();
    return (
        [ {id: 0, name: "Any"} , ...data.trivia_categories ]
    )
}