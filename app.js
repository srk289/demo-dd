define(function(require) {
    var McDd = require('./createDD')
    const fetchF = () => {
        fetch('https://randomuser.me/api/?results=10&nat=au')
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(getData);
    }
    const getData = data => {
        let allUsers = data.results
        let womenUsers = allUsers.filter(u => ["mrs", "miss", "ms"].includes(u.name.title))
        let mc1 = new McDd(document.getElementById('allUsers'), allUsers)
        let mc2 = new McDd(document.getElementById('womenUsers'), womenUsers)
    }
    const init = function() {
        fetchF()
    }
    init()
})
