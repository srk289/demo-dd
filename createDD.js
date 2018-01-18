define(['./behavior'], function(behavior) {
    const McDd = function(el, users) {
        this.el = el
        this.users = users
        let input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.addEventListener('keyup', function(e) { 
            this.filter(this.el.querySelector('input').value) 
        }.bind(this))
        
        this.el.appendChild(input)
        this.el.appendChild(behavior.createDD(this.users))
        this.liClickEvent()
        this.el.querySelector('ul').setAttribute('hidden', '')
    }
    McDd.prototype = {
        constructor: McDd,
        updateInput: function(i) {
            this.el.querySelector('input').value = behavior.getName(i)
            this.hideDD()
        },
        hideDD: function() { this.el.querySelector('ul').setAttribute('hidden', '') },
        openDD: function() { this.el.querySelector('ul').removeAttribute('hidden') },
        filter: function(v) {
            let fUsers = this.users.filter(u => v.length > 0 ? behavior.search(v, u.name) : false)
            if(!!this.el.querySelector('ul')) 
                this.el.removeChild(this.el.querySelector('ul'))
                
            if(fUsers.length > 0) {
                this.el.appendChild(behavior.createDD(fUsers))
                this.liClickEvent()
            }
        },
        liClickEvent: function() {
            this.el.querySelectorAll('li').forEach(element => {
                element.addEventListener('click', function(e) {
                    this.updateInput(e.srcElement.item) 
                }.bind(this)) 
            })
        }
    }
    return McDd
})