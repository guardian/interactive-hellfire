var region = 'metric';

module.exports =  {
    init: function() {
        this.getRegion();
        this.bindings();
    },

    bindings: function() {
        $('.uit-metric').click(function() {
            region = 'imperial';
            this.setRegion();
        }.bind(this));

        $('.uit-imperial').click(function() {
            region = 'metric';
            this.setRegion();
        }.bind(this));
    },

    getRegion: function() {
        if (navigator.language === 'en-US') {
            region = 'imperial'
        } else {
            region = 'metric'
        }

        this.setRegion();
    },

    setRegion: function() {
        $('.uit').removeClass('metric imperial').addClass(region);
    }
};
