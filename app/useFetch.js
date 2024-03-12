async function useFetch(url)
{
    let res = await fetch(url,{
        next : {
            revalidate : 0 //re fetch after time
        }
    });
    return res.json();
}
