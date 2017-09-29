import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as THREE from 'three';

export default class About extends Component {
  state = {
    show     : false,
    showMenu : false,
    graph    : null
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show : true });
    }, 1500);
    this.initGraph()
    // this.setState({ graph : renderer.domElement });
  }

  initGraph() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    function animate() {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;
      renderer.render( scene, camera );
    }
    animate();

    camera.position.z = 5;
    document.body.appendChild( renderer.domElement );

  }

  render() {
    const hidden = this.state.show ? 'hidden' : '';

    return (
      <div className='about'>
        this is an about component
        <div className={`lines ${hidden}`}>
          <div className='vertical-draw'></div>
        </div>
        {this.state.graph}
      </div>
    );
  }
};

About.propTypes = {};
