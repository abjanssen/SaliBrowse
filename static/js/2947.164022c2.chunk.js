"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2947],{52947:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var r=s(46377),n=s(66885),o=s(6434),a=s(44728),i=s(82088),c=s(86576),p=s(99546),d=s(37347);function f({feature:e,bins:t,region:s}){const r=e.get("start"),n=e.get("end"),o=e.get("strand"),a=s.end-s.start;for(let e=r;e<n+1;e++){const r=e-s.start;r>=0&&r<a&&(void 0===t[r]&&(t[r]={depth:0,readsCounted:0,ref:{probabilities:[],entryDepth:0,"-1":0,0:0,1:0},snps:{},mods:{},nonmods:{},delskips:{},noncov:{}}),e!==n&&(t[r].depth++,t[r].readsCounted++,t[r].ref.entryDepth++,t[r].ref[o]++))}}function u(e){return b(e.type)?1:e.length}function b(e){return"softclip"===e||"hardclip"===e||"insertion"===e}function g(e,t,s,r){let n=e[s][r];void 0===n&&(n=e[s][r]={entryDepth:0,probabilities:[],"-1":0,0:0,1:0}),n.entryDepth++,n[t]++}function l(e,t,s,r,n){let o=e[s][r];void 0===o&&(o=e[s][r]={entryDepth:0,probabilities:[],"-1":0,0:0,1:0}),o.entryDepth++,o.probabilities.push(n),o[t]++}function h({feature:e,region:t,bins:s,skipmap:r}){const n=e.get("start"),o=e.get("strand"),a=e.get("mismatches")??[];for(const i of a){const a=n+i.start,c=u(i),p=a+c;for(let e=a;e<a+c;e++){const r=e-t.start;if(r>=0&&r<s.length){const e=s[r],{base:t,altbase:n,type:a}=i,c=b(a);"deletion"===a||"skip"===a?(g(e,o,"delskips",a),e.depth--):c?g(e,o,"noncov",a):(g(e,o,"snps",t),e.ref.entryDepth--,e.ref[o]--,e.refbase=n)}}if("skip"===i.type){const t=e.get("tags"),s=t?.XS||t?.TS,n=t?.ts,i="+"===s?1:"-"===s?-1:("+"===n?1:"-"===s?-1:0)*o,c=`${a}_${p}_${i}`;void 0===r[c]&&(r[c]={feature:e,start:a,end:p,strand:o,effectiveStrand:i,score:0}),r[c].score++}}}var m=s(59509);function y({feature:e,colorBy:t,region:s,bins:r,regionSequence:n}){const o=e.get("start"),a=e.get("strand"),i=e.get("end"),c=t?.modifications?.twoColor,d=t?.modifications?.isolatedModification;(0,m.r)(e)?.forEach((({type:e,prob:t,allProbs:f},u)=>{if(d&&e!==d)return;const b=u+o-s.start;if(b>=0&&b<r.length&&u+o<i){void 0===r[b]&&(r[b]={depth:0,readsCounted:0,refbase:n[b],snps:{},ref:{probabilities:[],entryDepth:0,"-1":0,0:0,1:0},mods:{},nonmods:{},delskips:{},noncov:{}});const s=1-(0,p.sum)(f),o=r[b];c&&s>(0,p.max)(f)?l(o,a,"nonmods",`nonmod_${e}`,s):l(o,a,"mods",`mod_${e}`,t)}}))}var w=s(95805),v=s(93092);function S({feature:e,region:t,bins:s,regionSequence:r}){const n=e.get("start"),o=e.get("end"),a=e.get("strand"),i=e.get("seq"),c=e.get("mismatches")??[],d=r.toLowerCase();if(i){const r=(0,w.parseCigar)(e.get("CIGAR")),{methBins:i,methProbs:f}=(0,v.Ps)(e,r),u=c.filter((e=>"deletion"===e.type));for(let e=0;e<o-n;e++){const r=e+n,o=d[r-t.start+1],c=d[r-t.start+2];if("c"===o&&"g"===c){const o=s[r-t.start],c=s[r-t.start+1],d=i[e],b=i[e+1],g=f[e],h=f[e+1];d&&(void 0===g||g>.5)||b&&(void 0===h||h>.5)?(o&&(l(o,a,"mods","cpg_meth",g||0),o.ref.entryDepth--,o.ref[a]--),c&&(l(c,a,"mods","cpg_meth",h||0),c.ref.entryDepth--,c.ref[a]--)):(o&&(u.some((e=>(0,p.doesIntersect2)(r,r+1,e.start+n,e.start+n+e.length)))||(l(o,a,"nonmods","cpg_unmeth",1-(g||0)),o.ref.entryDepth--,o.ref[a]--)),c&&(u.some((e=>(0,p.doesIntersect2)(r+1,r+2,e.start+n,e.start+n+e.length)))||(l(c,a,"nonmods","cpg_unmeth",1-(h||0)),c.ref.entryDepth--,c.ref[a]--)))}}}}class k extends r.BaseFeatureDataAdapter{async configure(){const e=this.getConf("subadapter"),t=e.sequenceAdapter,s=await(this.getSubAdapter?.(e)),r=t?await(this.getSubAdapter?.(t)):void 0;if(!s)throw new Error("Failed to get subadapter");return{subadapter:s.dataAdapter,sequenceAdapter:r?.dataAdapter}}async fetchSequence(e){const{sequenceAdapter:t}=await this.configure();if(t)return(0,c.Iw)(e,t)}getFeatures(e,t={}){return(0,n.ObservableCreate)((async s=>{const{subadapter:r}=await this.configure(),n=await(0,a._)(r.getFeatures(e,t).pipe((0,i.$)())),{bins:c,skipmap:u}=await async function({fetchSequence:e,features:t,region:s,opts:r}){const{stopToken:n,colorBy:o}=r,a={},i=[],c=Math.max(0,s.start-1),u=s.start-c;let b=performance.now();for(const r of t)performance.now()-b>400&&((0,d.SW)(n),b=performance.now()),f({feature:r,bins:i,region:s}),"modifications"===o?.type?y({feature:r,colorBy:o,bins:i,region:s,regionSequence:(await e({...s,start:c,end:s.end+1})||"").slice(u)}):"methylation"===o?.type&&S({feature:r,bins:i,region:s,regionSequence:await e({...s,start:c,end:s.end+1})||""}),h({feature:r,skipmap:a,bins:i,region:s});for(const e of i)e&&(e.mods=Object.fromEntries(Object.entries(e.mods).map((([e,t])=>[e,{...t,avgProbability:t.probabilities.length?(0,p.sum)(t.probabilities)/t.probabilities.length:void 0}]))),e.nonmods=Object.fromEntries(Object.entries(e.nonmods).map((([e,t])=>[e,{...t,avgProbability:t.probabilities.length?(0,p.sum)(t.probabilities)/t.probabilities.length:void 0}]))));return{bins:i,skipmap:a}}({features:n,region:e,opts:t,fetchSequence:e=>this.fetchSequence(e)});c.forEach(((t,r)=>{const n=e.start+r;s.next(new o.A({id:`${this.id}-${n}`,data:{score:t.depth,snpinfo:t,start:n,end:n+1,refName:e.refName}}))})),Object.entries(u).forEach((([e,t])=>{s.next(new o.A({id:e,data:{type:"skip",start:t.start,end:t.end,strand:t.strand,score:t.score,effectiveStrand:t.effectiveStrand}}))})),s.complete()}),t.stopToken)}async getMultiRegionFeatureDensityStats(e,t){const{subadapter:s}=await this.configure();return s.getMultiRegionFeatureDensityStats(e,t)}async getRefNames(e={}){const{subadapter:t}=await this.configure();return t.getRefNames(e)}freeResources(){}}},59509:(e,t,s)=>{s.d(t,{r:()=>i});var r=s(95805),n=s(49256),o=s(93092),a=s(86576);function i(e,t){const s=e.get("strand"),i=e.get("seq"),c=(0,a.c$)(e,"MM","Mm")||"",p=t||(0,r.parseCigar)(e.get("CIGAR"));if(i){const t=(0,o.Z1)(c,i,s),r=(0,o.Yj)(e),a=[];let d=0;for(const{type:e,positions:o}of t){for(const{ref:t,idx:i}of(0,n.h)(p,o)){const n=r?.[d+(-1===s?o.length-1-i:i)]||0;if(a[t]){const s=a[t];a[t]={allProbs:[...s.allProbs,n],prob:Math.max(s.prob,n),type:s.prob>n?s.type:e}}else a[t]={type:e,prob:n,allProbs:[n]}}d+=o.length}return a}}}}]);
//# sourceMappingURL=2947.164022c2.chunk.js.map