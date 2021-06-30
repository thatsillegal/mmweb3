/* eslint-disable no-unused-vars,no-case-declarations */

import * as ARCH from "@/archiweb";
import * as THREE from "three";

let scene, renderer, gui, camera;
let gf, mt;
let am;

/* ---------- GUI setup ---------- */
function initGUI() {

}


/* ---------- create your scene object ---------- */
function initScene() {
  gf = new ARCH.GeometryFactory(scene);
  mt = new ARCH.MaterialFactory();
  
  // refresh global objects
  ARCH.refreshSelection(scene);
}


/* ---------- animate per frame ---------- */
function draw() {

}


/* ---------- main entry ---------- */
function main() {
  const viewport = new ARCH.Viewport();
  renderer = viewport.renderer;
  scene = viewport.scene;
  gui = viewport.gui;
  camera = viewport.camera;
  
  am = viewport.enableAssetManager();
  viewport.enableDragFrames();
  viewport.enableTransformer();
  viewport.enableSceneBasic();
  
  initGUI();
  initScene();
  
  viewport.draw = draw;
  
}

export {
  main
}