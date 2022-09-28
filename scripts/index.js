
let getData = async () => {
    let url = "https://radiant-inlet-76290.herokuapp.com/homeproducts"

    let res = await fetch(url)
    let data = await res.json()
    renderDom(data)
    console.log(data)
}
getData()


let renderDom = (data) => {
    let container = document.getElementById("container-1")

    data.forEach(({ image, title, dolar }) => {
        let div = document.createElement('div')

        const wishlist = document.createElement('img');
        wishlist.src = "https://i.ibb.co/hFhZgVQ/Screenshot-2022-09-28-at-9-31-43-PM.png"
        wishlist.setAttribute('id', 'wish')

        const Img = document.createElement('img');
        Img.src = image;

        const Name = document.createElement('p');
        Name.innerText = title;
        Name.setAttribute('class', 'title')

        const Dolar = document.createElement('p');
        Dolar.innerText = "$" + dolar + ".00"

        div.append(wishlist, Img, Name, Dolar)
        container.append(div)

    });


}

