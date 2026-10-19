import * as THREE from 'three';
export const displayDefaults={style:'stone',backdrop:'ink',cord:'cinnabar'};
export function createDisplay(scene,stone){
 const accessory=new THREE.Group(),stand=new THREE.Group();stone.add(accessory);scene.add(stand);let previous='';
 const clear=group=>{for(const child of [...group.children]){child.geometry?.dispose();child.material?.dispose();group.remove(child);}};
 function update(options={}){const p={...displayDefaults,...options};scene.background=p.backdrop==='paper'?new THREE.Color(0xded7c8):p.backdrop==='night'?new THREE.Color(0x0d1b2a):null;const key=JSON.stringify(p)+stone.geometry.uuid;if(key===previous)return;previous=key;clear(accessory);clear(stand);stone.geometry.computeBoundingBox();const b=stone.geometry.boundingBox,top=b.max.y,bottom=b.min.y;
  if(p.style==='pendant'){
   const metal=new THREE.MeshStandardMaterial({color:0xc6a45e,metalness:.8,roughness:.26}),ring=new THREE.Mesh(new THREE.TorusGeometry(.13,.035,12,48),metal);ring.position.set(0,top+.045,.02);accessory.add(ring);
   const cordColor={cinnabar:0x8c281d,ink:0x202822,jade:0x527566}[p.cord]||0x8c281d;
   const path=new THREE.CatmullRomCurve3([new THREE.Vector3(-.03,top+.15,0),new THREE.Vector3(-.48,top+.55,-.02),new THREE.Vector3(-.48,top+.83,-.05),new THREE.Vector3(0,top+.93,-.06),new THREE.Vector3(.48,top+.83,-.05),new THREE.Vector3(.48,top+.55,-.02),new THREE.Vector3(.03,top+.15,0)]);
   const cord=new THREE.Mesh(new THREE.TubeGeometry(path,80,.022,8,false),new THREE.MeshStandardMaterial({color:cordColor,roughness:.9}));accessory.add(cord);
  }else if(p.style==='stand'){
   const base=new THREE.Mesh(new THREE.CylinderGeometry(1.35,1.48,.22,80),new THREE.MeshStandardMaterial({color:0x37261c,roughness:.45}));base.position.set(0,bottom-.25,0);stand.add(base);
   const lip=new THREE.Mesh(new THREE.CylinderGeometry(1.36,1.36,.025,80),new THREE.MeshStandardMaterial({color:0xa88a51,metalness:.65,roughness:.3}));lip.position.set(0,bottom-.125,0);stand.add(lip);
   for(const x of [-.42,.42]){const support=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,.30,12),new THREE.MeshStandardMaterial({color:0xb4975d,metalness:.7,roughness:.3}));support.position.set(x,bottom-.05,0);stand.add(support);}
  }
  stone.userData.presentation=p;
 }
 return{update,dispose(){clear(accessory);clear(stand);stone.remove(accessory);scene.remove(stand);}};
}
