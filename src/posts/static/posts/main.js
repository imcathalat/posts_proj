
const helloWorldBox = document.getElementById('hello-world')

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response){
        console.log('succes', response.text)
        helloWorldBox.textContent = response.text
    },
    error: function(error) {
        console.log('error', error)
    }
});