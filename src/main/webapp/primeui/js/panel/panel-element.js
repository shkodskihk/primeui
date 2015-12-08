xtag.register('p-panel', {
            
    accessors: {
        toggleable: {
            attribute: {}
        },
        toggleDuration: {
            attribute: {
                name: 'toggleduration'
            }
        },
        toggleOrientation: {
            attribute: {
                name: 'toggleorientation'
            }
        },
        collapsed: {
            attribute: {}
        },
        closable: {
            attribute: {}
        },
        closeDuration: {
            attribute: {
                name: 'closeduration'
            }
        },
        title: {
            attribute: {}
        }
    },
    
    lifecycle: {
        
        created: function() {
            var options = {
                title: this.title,
                toggleable: this.toggleable !== null,
                toggleDuration: this.toggleDuration||'normal',
                toggleOrientation: this.toggleOrientation||'vertical',
                collapsed: this.collapsed !== null,
                closable: this.closable !== null,
                closeDuration: this.closeDuration||'slow'
            },
            beforeClose = this.getAttribute('beforeclose'),
            afterClose = this.getAttribute('afterclose'),
            beforeCollapse= this.getAttribute('beforecollapse'),
            afterCollapse = this.getAttribute('aftercollapse'),
            beforeExpand = this.getAttribute('beforeexpand'),
            afterExpand = this.getAttribute('afterexpand');
    
            if(beforeClose) options.beforeClose = function(event) {PUI.executeFunctionByName(beforeClose, window, event);};
            if(afterClose) options.afterClose = function(event) {PUI.executeFunctionByName(afterClose, window, event);};
            if(beforeCollapse) options.beforeCollapse = function(event) {PUI.executeFunctionByName(beforeCollapse, window, event);};
            if(afterCollapse) options.afterCollapse = function(event) {PUI.executeFunctionByName(afterCollapse, window, event);};
            if(beforeExpand) options.beforeExpand = function(event) {PUI.executeFunctionByName(beforeExpand, window, event);};
            if(afterExpand) options.afterExpand = function(event) {PUI.executeFunctionByName(afterExpand, window, event);};
            
            $(this).contents().wrap('<div></div>');
            $(this.children[0]).puipanel(options);
        }
        
    },
    
    methods: {

    }
});