
var scene, camera, renderer;
var camera_piv;
var container = document.getElementById( 'TitleHeader' );
var objects = [];
var lights = [];
var mixers = [];
var clock = new THREE.Clock();


    init();
    animate();



    // Sets up the scene.
    function init() {
      // Create the scene and set the scene size.
    scene = new THREE.Scene();
    container = document.getElementById( 'TitleHeader' );
    var WIDTH = container.offsetWidth,
          HEIGHT = container.offsetHeight;

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(WIDTH, HEIGHT);
    container.appendChild( renderer.domElement );

    
    renderer.setClearColor( 0x457f96 );
    renderer.setPixelRatio( window.devicePixelRatio );
        
    renderer.shadowMap.enabled = true;
	renderer.shadowMap.renderReverseSided = false;
    renderer.shadowMapType = THREE.PCFSoftShadowMap;
        
    // Create a camera, zoom it out from the model a bit, and add it to the scene.
    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(-5,2,13);
    camera.lookAt(new THREE.Vector3(5,-2,0));
    camera_piv = new THREE.Object3D();
    camera_piv.add( camera );
    scene.add(camera_piv);


      // Create an event listener that resizes the renderer with the browser window.
      window.addEventListener('resize', function() { 
        container = document.getElementById( 'TitleHeader' );
        var WIDTH = container.offsetWidth,
            HEIGHT = container.offsetHeight;
        camera.aspect = WIDTH / HEIGHT;
        renderer.setSize(WIDTH, HEIGHT);
        camera.updateProjectionMatrix();
      });
        
        var hemiLight = new THREE.HemisphereLight(0x000000,0x000000,1);
        hemiLight.color.set(0xE50404);
        hemiLight.groundColor.set(0x1F3441);
        hemiLight.position.set(0,100,100);
        scene.add(hemiLight);
        lights.push(hemiLight);
        
        var dirLight = new THREE.DirectionalLight(0xffffff, 1 );
        dirLight.color.set(0x2B87BC);
        dirLight.position.set( -1, 1.75, 1 );
        dirLight.position.multiplyScalar( 50 );
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        scene.add( dirLight );
        
        //SHADOWS
//        var d = 40;
//        dirLight.shadow.camera.left = -d;
//        dirLight.shadow.camera.right = d;
//        dirLight.shadow.camera.top = d;
//        dirLight.shadow.camera.bottom = -d;
//        dirLight.shadow.camera.far = 2000;
//        dirLight.shadow.bias = -0.0001;
        lights.push(dirLight);

      // Load in the mesh and add it to the scene.
      var cube_geo = new THREE.CylinderGeometry( 10, 10, 1, 40 );
      var cube_mat = new THREE.MeshPhongMaterial({color:0x43AA8B});
      var cube = new THREE.Mesh(cube_geo,cube_mat);
        cube.receiveShadow = true;
//        var axis = new THREE.Vector3(-1,1,0);
//        axis.normalize();
//        cube.rotateOnAxis(axis,1);
      cube.position.y = -6;
      cube.position.x = 1;
      cube.position.z = -3;
      cube.rotation.y = 0.4;
      scene.add(cube);
      objects.push(cube);
        var loader = new THREE.JSONLoader();
        loader.load( 'models/slow_4.js', function( geometry ) {
					var material = new THREE.MeshPhongMaterial( { color: 0xE07F67, specular: 0xBB342F, shininess: 1, morphTargets: true, vertexColors: THREE.FaceColors, shading: THREE.FlatShading } );
					var mesh = new THREE.Mesh( geometry, material );
					var s = 3.5;
					mesh.scale.set( s, s, s );
					mesh.position.y = -5.5;
//					mesh.rotation.y = -0.4;
					mesh.castShadow = true;
                    
//					mesh.receiveShadow = true;
					scene.add( mesh );
                    objects.push(mesh);
					var mixer = new THREE.AnimationMixer( mesh );
					mixer.clipAction( geometry.animations[ 0 ] ).setDuration( 1 ).play();
					mixers.push( mixer );
        } );
        loader.load( 'models/rice_base.js', function( geometry ) {
					var material = new THREE.MeshPhongMaterial( { color: 0xAAFFFF, specular: 0x00FF00, shininess: 1, morphTargets: true, vertexColors: THREE.FaceColors, shading: THREE.FlatShading } );
					var mesh = new THREE.Mesh( geometry, material );
					var s = 3.5;
					mesh.scale.set( s, s, s );
					mesh.position.y = -5.4;
//					mesh.rotation.y = -0.4;
					mesh.castShadow = true;
					mesh.receiveShadow = true;
					scene.add( mesh );
                    objects.push(mesh);
//					var mixer = new THREE.AnimationMixer( mesh );
//					mixer.clipAction( geometry.animations[ 0 ] ).setDuration( 1 ).play();
//					mixers.push( mixer );
        } );
        loader.load( 'models/bowl.js', function( geometry ) {
					var material = new THREE.MeshPhongMaterial( { color: 0x705044, specular: 0xFFFFFF, shininess: 1, morphTargets: true, vertexColors: THREE.FaceColors, shading: THREE.FlatShading } );
					var mesh = new THREE.Mesh( geometry, material );
					var s = 3.5;
					mesh.scale.set( s, s, s );
					mesh.position.y = -5.4;
//					mesh.rotation.y = -0.4;
					mesh.castShadow = true;
					mesh.receiveShadow = true;
					scene.add( mesh );
//                    objects.push(mesh);
//					var mixer = new THREE.AnimationMixer( mesh );
//					mixer.clipAction( geometry.animations[ 0 ] ).setDuration( 1 ).play();
//					mixers.push( mixer );
        } );
        
//        loader.load( 'models/rice_clump.js', function( geometry ) {
//					var material = new THREE.MeshPhongMaterial( { color: 0xAAFFFF, specular: 0x00FF00, shininess: 1, morphTargets: true, vertexColors: THREE.FaceColors, shading: THREE.FlatShading } );
//					var mesh = new THREE.Mesh( geometry, material );
//					var s = 3.5;
//					mesh.scale.set( s, s, s );
//					mesh.position.y = -5.5;
////					mesh.rotation.y = -0.4;
//					mesh.castShadow = true;
//                    
////					mesh.receiveShadow = true;
//					scene.add( mesh );
//                    objects.push(mesh);
//					var mixer = new THREE.AnimationMixer( mesh );
//					mixer.clipAction( geometry.animations[ 0 ] ).setDuration( 1 ).play();
//					mixers.push( mixer );
//        } );
       
        

        
    }


    // Renders the scene and updates the render as needed.
    function animate() {

      // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
      
      // Render the scene.
      requestAnimationFrame(animate);
      camera.updateMatrixWorld();
      var clockdelta = clock.getDelta()*0.08;
        for ( var i = 0; i < mixers.length; i ++ ) {
            mixers[ i ].update( clockdelta );
        }
      renderer.render(scene, camera);

    }

    

    var el = document.body,
            lastPos = null,
            timer = 0,
            newPos;

        function clear() {
          lastPos = null;
          el.removeAttribute('style');
    };
        
    window.onscroll = function() {checkScrollSpeed();}
    

    function checkScrollSpeed(){
          newPos = window.scrollY;
    if ( lastPos != null ){ // && newPos < maxScroll 
        var delta = newPos -  lastPos;

        var rotWorldMatrix = new THREE.Matrix4();
        var axis = new THREE.Vector3(0,1,0);
              
            // min/max values
//            if( delta > 45 ) delta = 45;
//            else if( delta < -45 ) delta = -45;
//            camera.rotateX(delta * 0.1 * Math.PI / 180);
//            camera.translateX(delta*0.1);
            if(newPos < 700) {
            camera_piv.rotateY(-delta*0.001)
            }
              
            //camera.lookAt(new THREE.Vector3(0,0,0));

          }
          lastPos = newPos;
          timer && clearTimeout(timer);
          timer = setTimeout(clear, 30);
    };