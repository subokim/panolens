tweenControlCenter: function ( vector, duration, easing ) {
    if ( vector instanceof Array ) {
        easing = vector[ 2 ];
        duration = vector[ 1 ];
        vector = vector[ 0 ];
    }
    duration = duration !== undefined ? duration : 1000;
    easing = easing || TWEEN.Easing.Exponential.Out;
    const MEPS = 10e-5;
    const { left, up } = this.calculateCameraDirectionDelta( vector );
    const rotateControlLeft = this.rotateControlLeft.bind( this );
    const rotateControlUp = this.rotateControlUp.bind( this );
    const ov = { left: 0, up: 0 };
    const nv = { left: 0, up: 0 };
    this.tweenLeftAnimation.stop();
    this.tweenUpAnimation.stop();
    this.tweenLeftAnimation = new TWEEN.Tween( ov )
        .to( { left }, duration )
        .easing( easing )
        .onUpdate(function(ov){
            const diff = ov.left - nv.left;
            if( Math.abs( diff ) < MEPS ) this.tweenLeftAnimation.stop();
            rotateControlLeft( diff );
            nv.left = ov.left;
        }.bind(this))
        .start();
    this.tweenUpAnimation = new TWEEN.Tween( ov )
        .to( { up }, duration )
        .easing( easing )
        .onUpdate(function(ov){
            const diff = ov.up - nv.up;
            if( Math.abs( diff ) < MEPS ) this.tweenUpAnimation.stop();
            rotateControlUp( diff );
            nv.up = ov.up;
        }.bind(this))
        .start();
},

tweenControlCenterByObject: function ( object, duration, easing ) {
    this.tweenControlCenter( object.getWorldPosition( new THREE.Vector3() ), duration, easing );
},