import {escapeDiscovery as esc} from './discovery-store.mjs';
export function assessOrder(order,steps){
 const first=steps.findIndex((s,i)=>order[i]!==s.id);
 return{first,correct:first===-1,matches:steps.filter((s,i)=>order[i]===s.id).length,expected:first===-1?null:steps[first],from:first===-1?-1:order.indexOf(steps[first].id)};
}
export function renderOrderResult(order,steps,{checked=false,confirmed=false}={}){
 const r=assessOrder(order,steps),kicker=!checked?'待检查':r.correct?(confirmed?'已确认':'位置已连贯 · 待确认'):'需要调整';
 const title=!checked?'排好之后，检查一次':r.correct?'从观料到成器，思路连起来了':`第 ${r.first+1} 步，先放「${r.expected.label}」`;
 const copy=!checked?'看材料，再想如何取形；每一步都为下一步提供依据。':r.correct?'材料支持构思，构思安排雕琢，润饰完成观看。':'现在它在第 '+(r.from+1)+' 步。'+r.expected.why;
 return`<div class="field-order-result-heading"><i class="field-order-beacon" aria-hidden="true">${!checked?'?':r.correct?'✓':'!'}</i><div><span>${kicker}</span><strong>${esc(title)}</strong></div><b class="field-order-count" aria-label="${r.matches}个位置相符，共4个">${r.matches}<small>/ 4</small></b></div><p>${esc(copy)}</p>${checked&&!r.correct?`<button type="button" data-field-fix>把「${esc(r.expected.label)}」移到第 ${r.first+1} 步 <span>→</span></button>`:''}`;
}
export function orderCardState(id,index,order,steps,checked){
 if(!checked)return{kind:'pending',label:'位置待检查'};
 const r=assessOrder(order,steps);
 if(steps[index].id===id)return{kind:'correct',label:'✓ 位置相符'};
 if(index===r.first)return{kind:'destination',label:`这里先放「${r.expected.label}」`};
 if(id===r.expected?.id)return{kind:'move',label:`↑ 移到第 ${r.first+1} 步`};
 return{kind:'waiting',label:`应在第 ${steps.findIndex(s=>s.id===id)+1} 步`};
}
