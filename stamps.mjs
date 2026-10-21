export function flowerStrokes(width=.018,depth=.6){
 const strokes=[];
 for(let petal=0;petal<5;petal++){
  const points=[],a=petal*Math.PI*2/5;
  for(let i=0;i<=32;i++){const t=i/32*Math.PI*2,r=.13+.12*Math.cos(t);points.push([Math.cos(a)*r-Math.sin(a)*Math.sin(t)*.07,Math.sin(a)*r+Math.cos(a)*Math.sin(t)*.07]);}
  strokes.push({width,depth,points});
 }
 return strokes;
}

// Older projects have no group tags. Recognize complete exact presets without
// treating unrelated freehand lines or applied pattern-library motifs as stamps.
export function adoptLegacyStamp(strokes,stamp,templates){
 const keys=new Set(templates.map(s=>JSON.stringify(s.points))),matches=strokes.filter(s=>!s.stamp&&keys.has(JSON.stringify(s.points)));
 if(new Set(matches.map(s=>JSON.stringify(s.points))).size===keys.size)for(const s of matches)s.stamp=stamp;
}
