let createButton = document.getElementById('create')
createButton.addEventListener('click', () => {
    let newScript = document.getElementById('editor').innerText
    let script = document.createElement( 'script' );
    script.append(newScript)
    let placeToAppend = document.getElementById('code')
    placeToAppend.append( script );
    document.getElementById('editor').innerText = ''
})