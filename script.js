let createButton = document.getElementById('create')
createButton.addEventListener('click', () => {
    let newScript = document.getElementById('editor').innerText
    console.log(newScript)
    let script = document.createElement( 'script' );
    // script.type = 'text/javascript';
    script.append(newScript)
    let placeToAppend = document.getElementById('code')
    placeToAppend.append( script );
})