document.getElementById('secondloginBtn').addEventListener('click', (e) => {
    document.getElementById('firstLoginBtn').classList.add('smallText')
    document.getElementById('firstLoginBtn').textContent = "hello again, user1234!"
})

document.getElementById('saveArtist').addEventListener('click', ()=> {
    if(document.getElementById('saveArtist').textContent === "save artist"){
        document.getElementById('saveArtist').classList.remove('btn-outline-warning')
        document.getElementById('saveArtist').classList.add('btn-success') 
        document.getElementById('saveArtist').textContent= "saved!"
    } else {
        document.getElementById('saveArtist').classList.add('btn-outline-warning')
        document.getElementById('saveArtist').classList.remove('btn-success') 
        document.getElementById('saveArtist').textContent= "save artist"
    }
})
