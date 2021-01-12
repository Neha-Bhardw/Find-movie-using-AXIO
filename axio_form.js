const form = document.querySelector('#searchForm')

form.addEventListener('submit', async function (e) {
    try {
        e.preventDefault();
        const inputText = form.elements.query.value;
        const config = { params: { q: inputText } }
        const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);

        createImages(res.data);
        form.elements.query.value = '';

    }
    catch (e) {
        console.log('an error occured', e)
    }
})

const createImages = (shows) => {
    try {
        for (let result of shows) {
            if (result.show.image) {
                const img = document.createElement('IMG');
                img.src = result.show.image.medium;
                document.body.append(img);
            }
        }
    } catch (e) {
        console.log
            ('OH, SOMETHING WENT WORNG', e)
    }
}
const button1 = document.querySelector('#reset')
const deleteImgs = function () {
    const imgs = document.querySelectorAll('img')
    for (let img of imgs) {
        img.remove();
    }
}
button1.addEventListener('click', deleteImgs);

