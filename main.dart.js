(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.hP(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.hQ(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.dX(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=="string")r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={dH:function dH(){},
eJ:function(a,b,c){if(a==null)throw H.f(new H.b1(b,c.h("b1<0>")))
return a},
ft:function(){return new P.at("No element")},
fu:function(){return new P.at("Too many elements")},
bG:function bG(a){this.a=a},
b1:function b1(a,b){this.a=a
this.$ti=b},
aO:function aO(){},
Z:function Z(){},
ad:function ad(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
af:function af(a,b,c){this.a=a
this.b=b
this.$ti=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.$ti=c},
eT:function(a){var t,s=H.eS(a)
if(s!=null)return s
t="minified:"+a
return t},
hI:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.D.b(a)},
e:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aj(a)
if(typeof t!="string")throw H.f(H.dW(a))
return t},
b3:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cN:function(a){return H.fx(a)},
fx:function(a){var t,s,r,q
if(a instanceof P.k)return H.E(H.a4(a),null)
if(J.bs(a)===C.D||u.cr.b(a)){t=C.k(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return H.E(H.a4(a),null)},
hD:function(a){throw H.f(H.dW(a))},
w:function(a,b){if(a==null)J.bu(a)
throw H.f(H.hx(a,b))},
hx:function(a,b){var t,s,r="index"
if(!H.eD(b))return new P.L(!0,b,r,null)
t=H.bn(J.bu(a))
if(!(b<0)){if(typeof t!=="number")return H.hD(t)
s=b>=t}else s=!0
if(s)return P.dF(b,a,r,null,t)
return P.fz(b,r)},
dW:function(a){return new P.L(!0,a,null,null)},
eK:function(a){if(typeof a!="number")throw H.f(H.dW(a))
return a},
f:function(a){var t,s
if(a==null)a=new P.bI()
t=new Error()
t.dartException=a
s=H.hR
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
hR:function(){return J.aj(this.dartException)},
cp:function(a){throw H.f(a)},
dz:function(a){throw H.f(P.aN(a))},
V:function(a){var t,s,r,q,p,o
a=H.hM(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.C([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cQ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
cR:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ek:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
dI:function(a,b){var t=b==null,s=t?null:b.method
return new H.bF(a,s,t?null:b.receiver)},
I:function(a){if(a==null)return new H.cL(a)
if(a instanceof H.aQ)return H.a5(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return H.a5(a,a.dartException)
return H.hp(a)},
a5:function(a,b){if(u.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hp:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.aX(s,16)&8191)===10)switch(r){case 438:return H.a5(a,H.dI(H.e(t)+" (Error "+r+")",f))
case 445:case 5007:q=H.e(t)+" (Error "+r+")"
return H.a5(a,new H.b2(q,f))}}if(a instanceof TypeError){p=$.f_()
o=$.f0()
n=$.f1()
m=$.f2()
l=$.f5()
k=$.f6()
j=$.f4()
$.f3()
i=$.f8()
h=$.f7()
g=p.w(t)
if(g!=null)return H.a5(a,H.dI(H.D(t),g))
else{g=o.w(t)
if(g!=null){g.method="call"
return H.a5(a,H.dI(H.D(t),g))}else{g=n.w(t)
if(g==null){g=m.w(t)
if(g==null){g=l.w(t)
if(g==null){g=k.w(t)
if(g==null){g=j.w(t)
if(g==null){g=m.w(t)
if(g==null){g=i.w(t)
if(g==null){g=h.w(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){H.D(t)
return H.a5(a,new H.b2(t,g==null?f:g.method))}}}return H.a5(a,new H.bW(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.b6()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.a5(a,new P.L(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.b6()
return a},
a3:function(a){var t
if(a instanceof H.aQ)return a.b
if(a==null)return new H.bg(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bg(a)},
hH:function(a,b,c,d,e,f){u.Y.a(a)
switch(H.bn(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.cZ("Unsupported number of arguments for wrapped closure"))},
cn:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hH)
a.$identity=t
return t},
fp:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.bN().constructor.prototype):Object.create(new H.am(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.R
if(typeof s!=="number")return s.q()
$.R=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.e8(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.fl(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.e8(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
fl:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.eO,a)
if(typeof a=="string"){if(b)throw H.f("Cannot compute signature for static tearoff.")
t=c?H.fj:H.fi
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.f("Error in functionType of tearoff")},
fm:function(a,b,c,d){var t=H.e7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
e8:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.fo(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.fm(s,!q,t,b)
if(s===0){q=$.R
if(typeof q!=="number")return q.q()
$.R=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.aM
return new Function(q+(p==null?$.aM=H.cu("self"):p)+";return "+o+"."+H.e(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.R
if(typeof q!=="number")return q.q()
$.R=q+1
n+=q
q="return function("+n+"){return this."
p=$.aM
return new Function(q+(p==null?$.aM=H.cu("self"):p)+"."+H.e(t)+"("+n+");}")()},
fn:function(a,b,c,d){var t=H.e7,s=H.fk
switch(b?-1:a){case 0:throw H.f(new H.bL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
fo:function(a,b){var t,s,r,q,p,o,n,m=$.aM
if(m==null)m=$.aM=H.cu("self")
t=$.e6
if(t==null)t=$.e6=H.cu("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.fn(r,!p,s,b)
if(r===1){p="return function(){return this."+m+"."+H.e(s)+"(this."+t+");"
o=$.R
if(typeof o!=="number")return o.q()
$.R=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+m+"."+H.e(s)+"(this."+t+", "+n+");"
o=$.R
if(typeof o!=="number")return o.q()
$.R=o+1
return new Function(p+o+"}")()},
dX:function(a,b,c,d,e,f,g){return H.fp(a,b,c,d,!!e,!!f,g)},
fi:function(a,b){return H.cj(v.typeUniverse,H.a4(a.a),b)},
fj:function(a,b){return H.cj(v.typeUniverse,H.a4(a.c),b)},
e7:function(a){return a.a},
fk:function(a){return a.c},
cu:function(a){var t,s,r,q=new H.am("self","target","receiver","name"),p=J.fv(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.f(P.fh("Field name "+a+" not found."))},
aH:function(a){if(a==null)H.hr("boolean expression must not be null")
return a},
hr:function(a){throw H.f(new H.bZ(a))},
hP:function(a){throw H.f(new P.bx(a))},
hA:function(a){return v.getIsolateTag(a)},
hQ:function(a){return H.cp(new H.bG(a))},
iB:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hK:function(a){var t,s,r,q,p,o=H.D($.eN.$1(a)),n=$.dr[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.dw[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.ey($.eH.$2(a,o))
if(r!=null){n=$.dr[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.dw[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.dy(t)
$.dr[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.dw[o]=t
return t}if(q==="-"){p=H.dy(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.eQ(a,t)
if(q==="*")throw H.f(P.el(o))
if(v.leafTags[o]===true){p=H.dy(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.eQ(a,t)},
eQ:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.e_(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
dy:function(a){return J.e_(a,!1,null,!!a.$ibE)},
hL:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.dy(t)
else return J.e_(t,c,null,null)},
hF:function(){if(!0===$.dY)return
$.dY=!0
H.hG()},
hG:function(){var t,s,r,q,p,o,n,m
$.dr=Object.create(null)
$.dw=Object.create(null)
H.hE()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.eR.$1(p)
if(o!=null){n=H.hL(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hE:function(){var t,s,r,q,p,o,n=C.q()
n=H.aG(C.r,H.aG(C.t,H.aG(C.l,H.aG(C.l,H.aG(C.u,H.aG(C.v,H.aG(C.w(C.k),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.eN=new H.dt(q)
$.eH=new H.du(p)
$.eR=new H.dv(o)},
aG:function(a,b){return a(b)||b},
hO:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
hM:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cQ:function cQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b2:function b2(a,b){this.a=a
this.b=b},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a){this.a=a},
cL:function cL(a){this.a=a},
aQ:function aQ(a,b){this.a=a
this.b=b},
bg:function bg(a){this.a=a
this.b=null},
a7:function a7(){},
bT:function bT(){},
bN:function bN(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a){this.a=a},
bZ:function bZ(a){this.a=a},
U:function U(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cG:function cG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aV:function aV(a,b){this.a=a
this.$ti=b},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
dv:function dv(a){this.a=a},
fB:function(a,b){var t=b.c
return t==null?b.c=H.dQ(a,b.z,!0):t},
eg:function(a,b){var t=b.c
return t==null?b.c=H.bi(a,"N",[b.z]):t},
eh:function(a){var t=a.y
if(t===6||t===7||t===8)return H.eh(a.z)
return t===11||t===12},
fA:function(a){return a.cy},
eL:function(a){return H.dj(v.typeUniverse,a,!1)},
a2:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.a2(a,t,c,a0)
if(s===t)return b
return H.ev(a,s,!0)
case 7:t=b.z
s=H.a2(a,t,c,a0)
if(s===t)return b
return H.dQ(a,s,!0)
case 8:t=b.z
s=H.a2(a,t,c,a0)
if(s===t)return b
return H.eu(a,s,!0)
case 9:r=b.Q
q=H.br(a,r,c,a0)
if(q===r)return b
return H.bi(a,b.z,q)
case 10:p=b.z
o=H.a2(a,p,c,a0)
n=b.Q
m=H.br(a,n,c,a0)
if(o===p&&m===n)return b
return H.dO(a,o,m)
case 11:l=b.z
k=H.a2(a,l,c,a0)
j=b.Q
i=H.hm(a,j,c,a0)
if(k===l&&i===j)return b
return H.et(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.br(a,h,c,a0)
p=b.z
o=H.a2(a,p,c,a0)
if(g===h&&o===p)return b
return H.dP(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.f(P.cs("Attempted to substitute unexpected RTI kind "+d))}},
br:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.a2(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
hn:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.a2(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
hm:function(a,b,c,d){var t,s=b.a,r=H.br(a,s,c,d),q=b.b,p=H.br(a,q,c,d),o=b.c,n=H.hn(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.c6()
t.a=r
t.b=p
t.c=n
return t},
C:function(a,b){a[v.arrayRti]=b
return a},
hv:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.eO(t)
return a.$S()}return null},
eP:function(a,b){var t
if(H.eh(b))if(a instanceof H.a7){t=H.hv(a)
if(t!=null)return t}return H.a4(a)},
a4:function(a){var t
if(a instanceof P.k){t=a.$ti
return t!=null?t:H.dS(a)}if(Array.isArray(a))return H.cm(a)
return H.dS(J.bs(a))},
cm:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
G:function(a){var t=a.$ti
return t!=null?t:H.dS(a)},
dS:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.h8(a,t)},
h8:function(a,b){var t=a instanceof H.a7?a.__proto__.__proto__.constructor:b,s=H.fZ(v.typeUniverse,t.name)
b.$ccache=s
return s},
eO:function(a){var t,s,r
H.bn(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.dj(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
hw:function(a){var t,s,r,q=a.x
if(q!=null)return q
t=a.cy
s=t.replace(/\*/g,"")
if(s===t)return a.x=new H.ch(a)
r=H.dj(v.typeUniverse,s,!0)
q=r.x
return a.x=q==null?r.x=new H.ch(r):q},
h7:function(a){var t,s,r=this,q=u.K
if(r===q)return H.bo(r,a,H.hb)
if(!H.W(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.bo(r,a,H.he)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.eD
else if(t===u.cb||t===u.b_)s=H.ha
else if(t===u.N)s=H.hc
else s=t===u.y?H.eB:null
if(s!=null)return H.bo(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.hJ)){r.r="$i"+q
return H.bo(r,a,H.hd)}}else if(q===7)return H.bo(r,a,H.h5)
return H.bo(r,a,H.h3)},
bo:function(a,b,c){a.b=c
return a.b(b)},
h6:function(a){var t,s,r=this
if(!H.W(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.h1
else if(r===u.K)s=H.h0
else s=H.h4
r.a=s
return r.a(a)},
dV:function(a){var t,s=a.y
if(!H.W(a))if(!(a===u._))if(!(a===u.G))if(s!==7)t=s===8&&H.dV(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
h3:function(a){var t=this
if(a==null)return H.dV(t)
return H.p(v.typeUniverse,H.eP(a,t),null,t,null)},
h5:function(a){if(a==null)return!0
return this.z.b(a)},
hd:function(a){var t,s=this
if(a==null)return H.dV(s)
t=s.r
if(a instanceof P.k)return!!a[t]
return!!J.bs(a)[t]},
iA:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.ez(a,t)},
h4:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.ez(a,t)},
ez:function(a,b){throw H.f(H.fP(H.en(a,H.eP(a,b),H.E(b,null))))},
en:function(a,b,c){var t=P.bz(a),s=H.E(b==null?H.a4(a):b,null)
return t+": type '"+H.e(s)+"' is not a subtype of type '"+H.e(c)+"'"},
fP:function(a){return new H.bh("TypeError: "+a)},
B:function(a,b){return new H.bh("TypeError: "+H.en(a,null,b))},
hb:function(a){return a!=null},
h0:function(a){return a},
he:function(a){return!0},
h1:function(a){return a},
eB:function(a){return!0===a||!1===a},
ip:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.f(H.B(a,"bool"))},
h_:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.B(a,"bool"))},
iq:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.B(a,"bool?"))},
ir:function(a){if(typeof a=="number")return a
throw H.f(H.B(a,"double"))},
it:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.B(a,"double"))},
is:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.B(a,"double?"))},
eD:function(a){return typeof a=="number"&&Math.floor(a)===a},
iu:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.f(H.B(a,"int"))},
bn:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.B(a,"int"))},
iv:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.B(a,"int?"))},
ha:function(a){return typeof a=="number"},
iw:function(a){if(typeof a=="number")return a
throw H.f(H.B(a,"num"))},
iy:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.B(a,"num"))},
ix:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.B(a,"num?"))},
hc:function(a){return typeof a=="string"},
iz:function(a){if(typeof a=="string")return a
throw H.f(H.B(a,"String"))},
D:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.B(a,"String"))},
ey:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.B(a,"String?"))},
hj:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.c.q(s,H.E(a[r],b))
return t},
eA:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.C([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.k(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.w(a5,j)
m=C.c.q(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.c.q(" extends ",H.E(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.E(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.c.q(a2,H.E(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.c.q(a2,H.E(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.e2(H.E(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.e(a0)},
E:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.E(a.z,b)
return t}if(m===7){s=a.z
t=H.E(s,b)
r=s.y
return J.e2(r===11||r===12?C.c.q("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.e(H.E(a.z,b))+">"
if(m===9){q=H.ho(a.z)
p=a.Q
return p.length!==0?q+("<"+H.hj(p,b)+">"):q}if(m===11)return H.eA(a,b,null)
if(m===12)return H.eA(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.w(b,o)
return b[o]}return"?"},
ho:function(a){var t,s=H.eS(a)
if(s!=null)return s
t="minified:"+a
return t},
ew:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
fZ:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.dj(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bj(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.bi(a,b,r)
o[b]=p
return p}else return n},
fX:function(a,b){return H.ex(a.tR,b)},
fW:function(a,b){return H.ex(a.eT,b)},
dj:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.er(H.ep(a,null,b,c))
s.set(b,t)
return t},
cj:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.er(H.ep(a,b,c,!0))
r.set(c,s)
return s},
fY:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.dO(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
a1:function(a,b){b.a=H.h6
b.b=H.h7
return b},
bj:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.K(null,null)
t.y=b
t.cy=c
s=H.a1(a,t)
a.eC.set(c,s)
return s},
ev:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.fU(a,b,s,c)
a.eC.set(s,t)
return t},
fU:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.W(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.K(null,null)
r.y=6
r.z=b
r.cy=c
return H.a1(a,r)},
dQ:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.fT(a,b,s,c)
a.eC.set(s,t)
return t},
fT:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.W(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.dx(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.G)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.dx(r.z))return r
else return H.fB(a,b)}}q=new H.K(null,null)
q.y=7
q.z=b
q.cy=c
return H.a1(a,q)},
eu:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.fR(a,b,s,c)
a.eC.set(s,t)
return t},
fR:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.W(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.bi(a,"N",[b])
else if(b===u.P||b===u.T)return u.bc}r=new H.K(null,null)
r.y=8
r.z=b
r.cy=c
return H.a1(a,r)},
fV:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.K(null,null)
t.y=13
t.z=b
t.cy=r
s=H.a1(a,t)
a.eC.set(r,s)
return s},
ci:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
fQ:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
bi:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.ci(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.K(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.a1(a,s)
a.eC.set(q,r)
return r},
dO:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.ci(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.K(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.a1(a,p)
a.eC.set(r,o)
return o},
et:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.ci(n)
if(k>0){t=m>0?",":""
s=H.ci(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.fQ(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.K(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.a1(a,p)
a.eC.set(r,s)
return s},
dP:function(a,b,c,d){var t,s=b.cy+("<"+H.ci(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.fS(a,b,c,s,d)
a.eC.set(s,t)
return t},
fS:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.a2(a,b,s,0)
n=H.br(a,c,s,0)
return H.dP(a,o,n,c!==n)}}m=new H.K(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.a1(a,m)},
ep:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
er:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.fK(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.eq(a,s,h,g,!1)
else if(r===46)s=H.eq(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.a0(a.u,a.e,g.pop()))
break
case 94:g.push(H.fV(a.u,g.pop()))
break
case 35:g.push(H.bj(a.u,5,"#"))
break
case 64:g.push(H.bj(a.u,2,"@"))
break
case 126:g.push(H.bj(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.dN(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.bi(q,o,p))
else{n=H.a0(q,a.e,o)
switch(n.y){case 11:g.push(H.dP(q,n,p,a.n))
break
default:g.push(H.dO(q,n,p))
break}}break
case 38:H.fL(a,g)
break
case 42:m=a.u
g.push(H.ev(m,H.a0(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.dQ(m,H.a0(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.eu(m,H.a0(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.c6()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.dN(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.et(q,H.a0(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.dN(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.fN(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.a0(a.u,a.e,i)},
fK:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
eq:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.ew(t,p.z)[q]
if(o==null)H.cp('No "'+q+'" in "'+H.fA(p)+'"')
d.push(H.cj(t,p,o))}else d.push(q)
return n},
fL:function(a,b){var t=b.pop()
if(0===t){b.push(H.bj(a.u,1,"0&"))
return}if(1===t){b.push(H.bj(a.u,4,"1&"))
return}throw H.f(P.cs("Unexpected extended operation "+H.e(t)))},
a0:function(a,b,c){if(typeof c=="string")return H.bi(a,c,a.sEA)
else if(typeof c=="number")return H.fM(a,b,c)
else return c},
dN:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.a0(a,b,c[t])},
fN:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.a0(a,b,c[t])},
fM:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.f(P.cs("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.f(P.cs("Bad index "+c+" for "+b.i(0)))},
p:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.W(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.W(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.p(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.p(a,b.z,c,d,e)
if(q===6){t=d.z
return H.p(a,b,c,t,e)}if(s===8){if(!H.p(a,b.z,c,d,e))return!1
return H.p(a,H.eg(a,b),c,d,e)}if(s===7){t=H.p(a,b.z,c,d,e)
return t}if(q===8){if(H.p(a,b,c,d.z,e))return!0
return H.p(a,b,c,H.eg(a,d),e)}if(q===7){t=H.p(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Y)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.p(a,l,c,k,e)||!H.p(a,k,e,l,c))return!1}return H.eC(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.eC(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.h9(a,b,c,d,e)}return!1},
eC:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.p(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.p(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.p(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.p(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.p(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
h9:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.p(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.ew(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.p(a,H.cj(a,b,m[q]),c,s[q],e))return!1
return!0},
dx:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.W(a))if(s!==7)if(!(s===6&&H.dx(a.z)))t=s===8&&H.dx(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hJ:function(a){var t
if(!H.W(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
W:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
ex:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
K:function K(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
c6:function c6(){this.c=this.b=this.a=null},
ch:function ch(a){this.a=a},
c4:function c4(){},
bh:function bh(a){this.a=a},
eS:function(a){return v.mangledGlobalNames[a]}},J={
e_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
co:function(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.dY==null){H.hF()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.f(P.el("Return interceptor for "+H.e(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.db
if(p==null)p=$.db=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.hK(a)
if(q!=null)return q
if(typeof a=="function")return C.F
t=Object.getPrototypeOf(a)
if(t==null)return C.n
if(t===Object.prototype)return C.n
if(typeof r=="function"){p=$.db
if(p==null)p=$.db=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
fv:function(a,b){a.fixed$length=Array
return a},
bs:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aT.prototype
return J.bD.prototype}if(typeof a=="string")return J.Y.prototype
if(a==null)return J.aq.prototype
if(typeof a=="boolean")return J.bC.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof P.k)return a
return J.co(a)},
hy:function(a){if(typeof a=="number")return J.ar.prototype
if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof P.k)return a
return J.co(a)},
ds:function(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof P.k)return a
return J.co(a)},
eM:function(a){if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof P.k)return a
return J.co(a)},
hz:function(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(!(a instanceof P.k))return J.av.prototype
return a},
bt:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof P.k)return a
return J.co(a)},
e2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hy(a).q(a,b)},
dA:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bs(a).H(a,b)},
fa:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ds(a).A(a,b)},
fb:function(a){return J.bt(a).aP(a)},
dB:function(a,b,c){return J.ds(a).b3(a,b,c)},
fc:function(a,b){return J.eM(a).G(a,b)},
fd:function(a){return J.bt(a).gb0(a)},
cq:function(a){return J.bs(a).gp(a)},
cr:function(a){return J.eM(a).gv(a)},
bu:function(a){return J.ds(a).gj(a)},
e3:function(a){return J.bt(a).bd(a)},
fe:function(a,b){return J.bt(a).saS(a,b)},
ff:function(a,b){return J.bt(a).sat(a,b)},
fg:function(a){return J.hz(a).bj(a)},
aj:function(a){return J.bs(a).i(a)},
x:function x(){},
bC:function bC(){},
aq:function aq(){},
ab:function ab(){},
bJ:function bJ(){},
av:function av(){},
P:function P(){},
r:function r(a){this.$ti=a},
cE:function cE(a){this.$ti=a},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ar:function ar(){},
aT:function aT(){},
bD:function bD(){},
Y:function Y(){}},P={
fE:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.hs()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.cn(new P.cU(r),1)).observe(t,{childList:true})
return new P.cT(r,t,s)}else if(self.setImmediate!=null)return P.ht()
return P.hu()},
fF:function(a){self.scheduleImmediate(H.cn(new P.cV(u.M.a(a)),0))},
fG:function(a){self.setImmediate(H.cn(new P.cW(u.M.a(a)),0))},
fH:function(a){P.dK(C.z,u.M.a(a))},
dK:function(a,b){var t=C.d.P(a.a,1000)
return P.fO(t<0?0:t,b)},
fO:function(a,b){var t=new P.dh()
t.aJ(a,b)
return t},
aC:function(a){return new P.c_(new P.o($.l,a.h("o<0>")),a.h("c_<0>"))},
aB:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
dR:function(a,b){P.h2(a,b)},
aA:function(a,b){var t,s
b.toString
t=b.$ti
t.h("1/?").a(a)
if(!b.b)b.a.aM(a)
else{s=b.a
if(t.h("N<1>").b(a))s.ai(a)
else s.Y(t.c.a(a))}},
az:function(a,b){var t,s=H.I(a),r=H.a3(a)
b.toString
if(r==null)r=P.e5(s)
t=b.a
if(b.b)t.I(s,r)
else t.aN(s,r)},
h2:function(a,b){var t,s,r=new P.dl(b),q=new P.dm(b)
if(a instanceof P.o)a.ar(r,q,u.z)
else{t=u.z
if(u.d.b(a))a.a9(r,q,t)
else{s=new P.o($.l,u.c)
s.a=4
s.c=a
s.ar(r,q,t)}}},
aF:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
return $.l.av(new P.dq(t),u.H,u.S,u.z)},
ct:function(a,b){var t=H.eJ(a,"error",u.K)
return new P.aL(t,b==null?P.e5(a):b)},
e5:function(a){var t
if(u.R.b(a)){t=a.gU()
if(t!=null)return t}return C.x},
eb:function(a,b){var t=new P.o($.l,b.h("o<0>"))
P.fC(a,new P.cC(null,t,b))
return t},
dL:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.N()
b.a=a.a
b.c=a.c
P.ay(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.aq(r)}},
ay:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.dn(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.ay(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.dn(d,d,l.b,k.a,k.b)
return}g=$.l
if(g!==h)$.l=h
else g=d
b=b.c
if((b&15)===8)new P.d9(q,c,p).$0()
else if(j){if((b&1)!==0)new P.d8(q,k).$0()}else if((b&2)!==0)new P.d7(c,q).$0()
if(g!=null)$.l=g
b=q.c
if(r.b(b)){l=q.a.$ti
l=l.h("N<2>").b(b)||!l.Q[1].b(b)}else l=!1
if(l){r.a(b)
f=q.a.b
if(b instanceof P.o)if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.O(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.dL(b,f)
else f.ah(b)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.O(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
hh:function(a,b){var t
if(u.U.b(a))return b.av(a,u.z,u.K,u.l)
t=u.v
if(t.b(a))return t.a(a)
throw H.f(P.e4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
hg:function(){var t,s
for(t=$.aD;t!=null;t=$.aD){$.bq=null
s=t.b
$.aD=s
if(s==null)$.bp=null
t.a.$0()}},
hl:function(){$.dT=!0
try{P.hg()}finally{$.bq=null
$.dT=!1
if($.aD!=null)$.e1().$1(P.eI())}},
eG:function(a){var t=new P.c0(a),s=$.bp
if(s==null){$.aD=$.bp=t
if(!$.dT)$.e1().$1(P.eI())}else $.bp=s.b=t},
hk:function(a){var t,s,r,q=$.aD
if(q==null){P.eG(a)
$.bq=$.bp
return}t=new P.c0(a)
s=$.bq
if(s==null){t.b=q
$.aD=$.bq=t}else{r=s.b
t.b=r
$.bq=s.b=t
if(r==null)$.bp=t}},
hN:function(a){var t=null,s=$.l
if(C.b===s){P.aE(t,t,C.b,a)
return}P.aE(t,t,s,u.M.a(s.a4(a)))},
i8:function(a,b){H.eJ(a,"stream",u.K)
return new P.cd(b.h("cd<0>"))},
fC:function(a,b){var t=$.l
if(t===C.b)return P.dK(a,u.M.a(b))
return P.dK(a,u.M.a(t.a4(b)))},
dn:function(a,b,c,d,e){P.hk(new P.dp(d,e))},
eE:function(a,b,c,d,e){var t,s=$.l
if(s===c)return d.$0()
$.l=c
t=s
try{s=d.$0()
return s}finally{$.l=t}},
eF:function(a,b,c,d,e,f,g){var t,s=$.l
if(s===c)return d.$1(e)
$.l=c
t=s
try{s=d.$1(e)
return s}finally{$.l=t}},
hi:function(a,b,c,d,e,f,g,h,i){var t,s=$.l
if(s===c)return d.$2(e,f)
$.l=c
t=s
try{s=d.$2(e,f)
return s}finally{$.l=t}},
aE:function(a,b,c,d){u.M.a(d)
if(C.b!==c)d=c.a4(d)
P.eG(d)},
cU:function cU(a){this.a=a},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a){this.a=a},
cW:function cW(a){this.a=a},
dh:function dh(){},
di:function di(a,b){this.a=a
this.b=b},
c_:function c_(a,b){this.a=a
this.b=!1
this.$ti=b},
dl:function dl(a){this.a=a},
dm:function dm(a){this.a=a},
dq:function dq(a){this.a=a},
aL:function aL(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
o:function o(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
d_:function d_(a,b){this.a=a
this.b=b},
d6:function d6(a,b){this.a=a
this.b=b},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a){this.a=a},
d8:function d8(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
c0:function c0(a){this.a=a
this.b=null},
bO:function bO(){},
cO:function cO(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
bP:function bP(){},
cd:function cd(a){this.$ti=a},
bl:function bl(){},
dp:function dp(a,b){this.a=a
this.b=b},
cb:function cb(){},
dc:function dc(a,b){this.a=a
this.b=b},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function(a,b){return new H.U(a.h("@<0>").t(b).h("U<1,2>"))},
cH:function(a){return new P.ba(a.h("ba<0>"))},
dM:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
fs:function(a,b,c){var t,s
if(P.dU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.C([],u.s)
C.a.k($.F,a)
try{P.hf(a,t)}finally{if(0>=$.F.length)return H.w($.F,-1)
$.F.pop()}s=P.ej(b,u.V.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
dG:function(a,b,c){var t,s
if(P.dU(a))return b+"..."+c
t=new P.bQ(b)
C.a.k($.F,a)
try{s=t
s.a=P.ej(s.a,a,", ")}finally{if(0>=$.F.length)return H.w($.F,-1)
$.F.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dU:function(a){var t,s
for(t=$.F.length,s=0;s<t;++s)if(a===$.F[s])return!0
return!1},
hf:function(a,b){var t,s,r,q,p,o,n,m=a.gv(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=H.e(m.gm())
C.a.k(b,t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return H.w(b,-1)
s=b.pop()
if(0>=b.length)return H.w(b,-1)
r=b.pop()}else{q=m.gm();++k
if(!m.l()){if(k<=4){C.a.k(b,H.e(q))
return}s=H.e(q)
if(0>=b.length)return H.w(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gm();++k
for(;m.l();q=p,p=o){o=m.gm();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.w(b,-1)
l-=b.pop().length+2;--k}C.a.k(b,"...")
return}}r=H.e(q)
s=H.e(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.k(b,n)
C.a.k(b,r)
C.a.k(b,s)},
ed:function(a,b){var t,s,r=P.cH(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.dz)(a),++s)r.k(0,b.a(a[s]))
return r},
ee:function(a){var t,s={}
if(P.dU(a))return"{...}"
t=new P.bQ("")
try{C.a.k($.F,a)
t.a+="{"
s.a=!0
a.a6(0,new P.cI(s,t))
t.a+="}"}finally{if(0>=$.F.length)return H.w($.F,-1)
$.F.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
ba:function ba(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c8:function c8(a){this.a=a
this.b=null},
bb:function bb(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
aX:function aX(){},
t:function t(){},
aY:function aY(){},
cI:function cI(a,b){this.a=a
this.b=b},
z:function z(){},
b5:function b5(){},
be:function be(){},
bc:function bc(){},
bm:function bm(){},
fr:function(a){if(a instanceof H.a7)return a.i(0)
return"Instance of '"+H.e(H.cN(a))+"'"},
ej:function(a,b,c){var t=J.cr(b)
if(!t.l())return a
if(c.length===0){do a+=H.e(t.gm())
while(t.l())}else{a+=H.e(t.gm())
for(;t.l();)a=a+c+H.e(t.gm())}return a},
bz:function(a){if(typeof a=="number"||H.eB(a)||null==a)return J.aj(a)
if(typeof a=="string")return JSON.stringify(a)
return P.fr(a)},
cs:function(a){return new P.aK(a)},
fh:function(a){return new P.L(!1,null,null,a)},
e4:function(a,b,c){return new P.L(!0,a,b,c)},
fz:function(a,b){return new P.b4(null,null,!0,a,b,"Value not in range")},
fy:function(a,b,c,d,e){return new P.b4(b,c,!0,a,d,"Invalid value")},
dF:function(a,b,c,d,e){var t=H.bn(e==null?J.bu(b):e)
return new P.bB(t,!0,a,c,"Index out of range")},
bY:function(a){return new P.bX(a)},
el:function(a){return new P.bV(a)},
dJ:function(a){return new P.at(a)},
aN:function(a){return new P.bw(a)},
a9:function a9(a){this.a=a},
cy:function cy(){},
cz:function cz(){},
j:function j(){},
aK:function aK(a){this.a=a},
bU:function bU(){},
bI:function bI(){},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bB:function bB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bX:function bX(a){this.a=a},
bV:function bV(a){this.a=a},
at:function at(a){this.a=a},
bw:function bw(a){this.a=a},
b6:function b6(){},
bx:function bx(a){this.a=a},
cZ:function cZ(a){this.a=a},
i:function i(){},
y:function y(){},
q:function q(){},
k:function k(){},
ce:function ce(){},
bQ:function bQ(a){this.a=a},
as:function as(){},
b:function b(){},
dC:function(){return window.navigator.userAgent}},W={
fq:function(a,b,c){var t,s,r,q=document.body
q.toString
t=C.j.u(q,a,b,c)
t.toString
q=u.ba
q=new H.af(new W.u(t),q.h("v(t.E)").a(new W.cA()),q.h("af<t.E>"))
s=q.gv(q)
if(!s.l())H.cp(H.ft())
r=s.gm()
if(s.l())H.cp(H.fu())
return u.h.a(r)},
aP:function(a){var t,s,r="element tag unavailable"
try{t=J.bt(a)
if(typeof t.gax(a)=="string")r=t.gax(a)}catch(s){H.I(s)}return r},
c5:function(a,b,c,d,e){var t=W.hq(new W.cY(c),u.B),s=t!=null
if(s&&!0){u.o.a(t)
if(s)C.J.aL(a,b,t,!1)}return new W.b9(a,b,t,!1,e.h("b9<0>"))},
eo:function(a){var t=document.createElement("a"),s=new W.cc(t,window.location)
s=new W.ah(s)
s.aH(a)
return s},
fI:function(a,b,c,d){u.h.a(a)
H.D(b)
H.D(c)
u.f.a(d)
return!0},
fJ:function(a,b,c,d){var t,s,r
u.h.a(a)
H.D(b)
H.D(c)
t=u.f.a(d).a
s=t.a
C.p.sb9(s,c)
r=s.hostname
t=t.b
if(!(r==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(r==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
es:function(){var t=u.N,s=P.ed(C.m,t),r=u.u.a(new W.dg()),q=H.C(["TEMPLATE"],u.s)
t=new W.cg(s,P.cH(t),P.cH(t),P.cH(t),null)
t.aI(null,new H.aZ(C.m,r,u.k),q,null)
return t},
hq:function(a,b){var t=$.l
if(t===C.b)return a
return t.b1(a,b)},
c:function c(){},
ak:function ak(){},
bv:function bv(){},
al:function al(){},
a6:function a6(){},
M:function M(){},
an:function an(){},
cw:function cw(){},
S:function S(){},
a8:function a8(){},
cx:function cx(){},
by:function by(){},
n:function n(){},
cA:function cA(){},
a:function a(){},
m:function m(){},
bA:function bA(){},
aS:function aS(){},
ac:function ac(){},
bH:function bH(){},
u:function u(a){this.a=a},
d:function d(){},
b_:function b_(){},
bM:function bM(){},
b7:function b7(){},
bR:function bR(){},
bS:function bS(){},
au:function au(){},
A:function A(){},
aw:function aw(){},
ax:function ax(){},
bd:function bd(){},
c1:function c1(){},
c3:function c3(a){this.a=a},
dE:function dE(a,b){this.a=a
this.$ti=b},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b9:function b9(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cY:function cY(a){this.a=a},
ah:function ah(a){this.a=a},
O:function O(){},
b0:function b0(a){this.a=a},
cK:function cK(a){this.a=a},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(){},
de:function de(){},
df:function df(){},
cg:function cg(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
dg:function dg(){},
cf:function cf(){},
aa:function aa(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cc:function cc(a,b){this.a=a
this.b=b},
bk:function bk(a){this.a=a
this.b=0},
dk:function dk(a){this.a=a},
c2:function c2(){},
c9:function c9(){},
ca:function ca(){},
ck:function ck(){},
cl:function cl(){}},B={cv:function cv(a,b){this.a=a
this.b=b}},O={ao:function ao(){},ap:function ap(a){this.a=a
this.b=null},cS:function cS(a,b){this.a=a
this.b=b}},A={T:function T(a){this.a=a
this.b=null},cB:function cB(a){this.a=a}},G={cD:function cD(){this.e=null}},U={aU:function aU(a,b,c){var _=this
_.d=a
_.e=b
_.a=c
_.b=null}},Q={cF:function cF(){this.y=this.e=this.d=null}},R={bK:function bK(a,b,c){var _=this
_.f=a
_.a=b
_.b=c
_.c=null}},E={cM:function cM(a,b){this.a=a
this.b=b}},F={
dZ:function(){var t=0,s=P.aC(u.z),r,q,p,o
var $async$dZ=P.aF(function(a,b){if(a===1)return P.az(b,s)
while(true)switch(t){case 0:o=new G.cD()
o.saG(new H.U(u.E))
o.sbc(new H.U(u.I))
r=new Q.cF()
r.sb6(H.C([],u.m))
r.e=r.d=150
q=r.y
p=new R.bK(1,r,new E.cM(0,0))
p.c=50
C.a.k(q,p)
r.a7(0)
o.e=r
new B.cv(o,new O.cS(o,document.querySelector("#player"))).K()
return P.aA(null,s)}})
return P.aB($async$dZ,s)}}
var w=[C,H,J,P,W,B,O,A,G,U,Q,R,E,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dH.prototype={}
J.x.prototype={
H:function(a,b){return a===b},
gp:function(a){return H.b3(a)},
i:function(a){return"Instance of '"+H.e(H.cN(a))+"'"}}
J.bC.prototype={
i:function(a){return String(a)},
gp:function(a){return a?519018:218159},
$iv:1}
J.aq.prototype={
H:function(a,b){return null==b},
i:function(a){return"null"},
gp:function(a){return 0},
$iq:1}
J.ab.prototype={
gp:function(a){return 0},
i:function(a){return String(a)}}
J.bJ.prototype={}
J.av.prototype={}
J.P.prototype={
i:function(a){var t=a[$.eV()]
if(t==null)return this.aE(a)
return"JavaScript function for "+H.e(J.aj(t))},
$iaR:1}
J.r.prototype={
k:function(a,b){H.cm(a).c.a(b)
if(!!a.fixed$length)H.cp(P.bY("add"))
a.push(b)},
G:function(a,b){if(b>=a.length)return H.w(a,b)
return a[b]},
as:function(a,b){var t,s
H.cm(a).h("v(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(H.aH(b.$1(a[s])))return!0
if(a.length!==t)throw H.f(P.aN(a))}return!1},
n:function(a,b){var t
for(t=0;t<a.length;++t)if(J.dA(a[t],b))return!0
return!1},
i:function(a){return P.dG(a,"[","]")},
gv:function(a){return new J.aJ(a,a.length,H.cm(a).h("aJ<1>"))},
gp:function(a){return H.b3(a)},
gj:function(a){return a.length},
$ii:1,
$iQ:1}
J.cE.prototype={}
J.aJ.prototype={
gm:function(){return this.d},
l:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.f(H.dz(r))
t=s.c
if(t>=q){s.sam(null)
return!1}s.sam(r[t]);++s.c
return!0},
sam:function(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
J.ar.prototype={
az:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.f(P.bY(""+a+".toInt()"))},
aw:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.bY(""+a+".round()"))},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
P:function(a,b){return(a|0)===a?a/b|0:this.aZ(a,b)},
aZ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.f(P.bY("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aX:function(a,b){var t
if(a>0)t=this.aW(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aW:function(a,b){return b>31?0:a>>>b},
$iai:1,
$iaI:1}
J.aT.prototype={$iH:1}
J.bD.prototype={}
J.Y.prototype={
q:function(a,b){if(typeof b!="string")throw H.f(P.e4(b,null,null))
return a+b},
aA:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
bj:function(a){return a.toLowerCase()},
b3:function(a,b,c){var t=a.length
if(c>t)throw H.f(P.fy(c,0,t,null,null))
return H.hO(a,b,c)},
i:function(a){return a},
gp:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gj:function(a){return a.length},
$ief:1,
$ih:1}
H.bG.prototype={
i:function(a){var t=this.a
return t!=null?"LateInitializationError: "+t:"LateInitializationError"}}
H.b1.prototype={
i:function(a){return"Null is not a valid value for the parameter '"+this.a+"' of type '"+H.hw(this.$ti.c).i(0)+"'"}}
H.aO.prototype={}
H.Z.prototype={
gv:function(a){var t=this
return new H.ad(t,t.gj(t),t.$ti.h("ad<Z.E>"))},
S:function(a,b){return this.aD(0,this.$ti.h("v(Z.E)").a(b))}}
H.ad.prototype={
gm:function(){return this.d},
l:function(){var t,s=this,r=s.a,q=J.ds(r),p=q.gj(r)
if(s.b!==p)throw H.f(P.aN(r))
t=s.c
if(t>=p){s.sad(null)
return!1}s.sad(q.G(r,t));++s.c
return!0},
sad:function(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
H.aZ.prototype={
gj:function(a){return J.bu(this.a)},
G:function(a,b){return this.b.$1(J.fc(this.a,b))}}
H.af.prototype={
gv:function(a){return new H.b8(J.cr(this.a),this.b,this.$ti.h("b8<1>"))}}
H.b8.prototype={
l:function(){var t,s
for(t=this.a,s=this.b;t.l();)if(H.aH(s.$1(t.gm())))return!0
return!1},
gm:function(){return this.a.gm()}}
H.cQ.prototype={
w:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.b2.prototype={
i:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bF.prototype={
i:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.e(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.e(s.a)+")"
return r+q+"' on '"+t+"' ("+H.e(s.a)+")"}}
H.bW.prototype={
i:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.cL.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.aQ.prototype={}
H.bg.prototype={
i:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$ia_:1}
H.a7.prototype={
i:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.eT(s==null?"unknown":s)+"'"},
$iaR:1,
gbk:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bT.prototype={}
H.bN.prototype={
i:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.eT(t)+"'"}}
H.am.prototype={
H:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.am))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gp:function(a){var t,s=this.c
if(s==null)t=H.b3(this.a)
else t=typeof s!=="object"?J.cq(s):H.b3(s)
return(t^H.b3(this.b))>>>0},
i:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cN(t))+"'")}}
H.bL.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.bZ.prototype={
i:function(a){return"Assertion failed: "+P.bz(this.a)}}
H.U.prototype={
gj:function(a){return this.a},
gE:function(){return new H.aV(this,H.G(this).h("aV<1>"))},
A:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.a0(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.a0(q,b)
r=s==null?o:s.b
return r}else return p.ba(b)},
ba:function(a){var t,s,r=this.d
if(r==null)return null
t=this.ao(r,J.cq(a)&0x3ffffff)
s=this.au(t,a)
if(s<0)return null
return t[s].b},
ab:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.G(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.ae(t==null?n.b=n.a1():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.ae(s==null?n.c=n.a1():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.a1()
q=J.cq(b)&0x3ffffff
p=n.ao(r,q)
if(p==null)n.a3(r,q,[n.W(b,c)])
else{o=n.au(p,b)
if(o>=0)p[o].b=c
else p.push(n.W(b,c))}}},
a6:function(a,b){var t,s,r=this
H.G(r).h("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.f(P.aN(r))
t=t.c}},
ae:function(a,b,c){var t,s=this,r=H.G(s)
r.c.a(b)
r.Q[1].a(c)
t=s.a0(a,b)
if(t==null)s.a3(a,b,s.W(b,c))
else t.b=c},
aT:function(){this.r=this.r+1&67108863},
W:function(a,b){var t=this,s=H.G(t),r=new H.cG(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else{s=t.f
s.toString
r.d=s
t.f=s.c=r}++t.a
t.aT()
return r},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.dA(a[s].a,b))return s
return-1},
i:function(a){return P.ee(this)},
a0:function(a,b){return a[b]},
ao:function(a,b){return a[b]},
a3:function(a,b,c){a[b]=c},
aR:function(a,b){delete a[b]},
a1:function(){var t="<non-identifier-key>",s=Object.create(null)
this.a3(s,t,s)
this.aR(s,t)
return s}}
H.cG.prototype={}
H.aV.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t=this.a,s=new H.aW(t,t.r,this.$ti.h("aW<1>"))
s.c=t.e
return s}}
H.aW.prototype={
gm:function(){return this.d},
l:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.f(P.aN(r))
t=s.c
if(t==null){s.saf(null)
return!1}else{s.saf(t.a)
s.c=t.c
return!0}},
saf:function(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
H.dt.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.du.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.dv.prototype={
$1:function(a){return this.a(H.D(a))},
$S:10}
H.K.prototype={
h:function(a){return H.cj(v.typeUniverse,this,a)},
t:function(a){return H.fY(v.typeUniverse,this,a)}}
H.c6.prototype={}
H.ch.prototype={
i:function(a){return H.E(this.a,null)}}
H.c4.prototype={
i:function(a){return this.a}}
H.bh.prototype={}
P.cU.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:2}
P.cT.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:11}
P.cV.prototype={
$0:function(){this.a.$0()},
$S:3}
P.cW.prototype={
$0:function(){this.a.$0()},
$S:3}
P.dh.prototype={
aJ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cn(new P.di(this,b),0),a)
else throw H.f(P.bY("`setTimeout()` not found."))}}
P.di.prototype={
$0:function(){this.b.$0()},
$S:0}
P.c_.prototype={}
P.dl.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:12}
P.dm.prototype={
$2:function(a,b){this.a.$2(1,new H.aQ(a,u.l.a(b)))},
$S:13}
P.dq.prototype={
$2:function(a,b){this.a(H.bn(a),b)},
$S:14}
P.aL.prototype={
i:function(a){return H.e(this.a)},
$ij:1,
gU:function(){return this.b}}
P.cC.prototype={
$0:function(){this.b.ak(null)},
$S:0}
P.ag.prototype={
bb:function(a){if((this.c&15)!==6)return!0
return this.b.b.a8(u.bG.a(this.d),a.a,u.y,u.K)},
b8:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.h("2/"),p=this.b.b
if(u.U.b(t))return q.a(p.bf(t,a.a,a.b,s,r,u.l))
else return q.a(p.a8(u.v.a(t),a.a,s,r))}}
P.o.prototype={
a9:function(a,b,c){var t,s,r,q=this.$ti
q.t(c).h("1/(2)").a(a)
t=$.l
if(t!==C.b){c.h("@<0/>").t(q.c).h("1(2)").a(a)
if(b!=null)b=P.hh(b,t)}s=new P.o(t,c.h("o<0>"))
r=b==null?1:3
this.X(new P.ag(s,r,a,b,q.h("@<1>").t(c).h("ag<1,2>")))
return s},
bi:function(a,b){return this.a9(a,null,b)},
ar:function(a,b,c){var t,s=this.$ti
s.t(c).h("1/(2)").a(a)
t=new P.o($.l,c.h("o<0>"))
this.X(new P.ag(t,19,a,b,s.h("@<1>").t(c).h("ag<1,2>")))
return t},
X:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.X(a)
return}s.a=r
s.c=t.c}P.aE(null,null,s.b,u.M.a(new P.d_(s,a)))}},
aq:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.aq(a)
return}n.a=t
n.c=o.c}m.a=n.O(a)
P.aE(null,null,n.b,u.M.a(new P.d6(m,n)))}},
N:function(){var t=u.F.a(this.c)
this.c=null
return this.O(t)},
O:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ah:function(a){var t,s,r,q=this
q.a=1
try{a.a9(new P.d2(q),new P.d3(q),u.P)}catch(r){t=H.I(r)
s=H.a3(r)
P.hN(new P.d4(q,t,s))}},
ak:function(a){var t,s=this,r=s.$ti
r.h("1/").a(a)
t=s.N()
r.c.a(a)
s.a=4
s.c=a
P.ay(s,t)},
Y:function(a){var t,s=this
s.$ti.c.a(a)
t=s.N()
s.a=4
s.c=a
P.ay(s,t)},
I:function(a,b){var t,s,r=this
u.l.a(b)
t=r.N()
s=P.ct(a,b)
r.a=8
r.c=s
P.ay(r,t)},
aM:function(a){var t=this.$ti
t.h("1/").a(a)
if(t.h("N<1>").b(a)){this.ai(a)
return}this.aO(t.c.a(a))},
aO:function(a){var t=this
t.$ti.c.a(a)
t.a=1
P.aE(null,null,t.b,u.M.a(new P.d1(t,a)))},
ai:function(a){var t=this,s=t.$ti
s.h("N<1>").a(a)
if(s.b(a)){if(a.a===8){t.a=1
P.aE(null,null,t.b,u.M.a(new P.d5(t,a)))}else P.dL(a,t)
return}t.ah(a)},
aN:function(a,b){this.a=1
P.aE(null,null,this.b,u.M.a(new P.d0(this,a,b)))},
$iN:1}
P.d_.prototype={
$0:function(){P.ay(this.a,this.b)},
$S:0}
P.d6.prototype={
$0:function(){P.ay(this.b,this.a.a)},
$S:0}
P.d2.prototype={
$1:function(a){var t,s,r,q=this.a
q.a=0
try{q.Y(q.$ti.c.a(a))}catch(r){t=H.I(r)
s=H.a3(r)
q.I(t,s)}},
$S:2}
P.d3.prototype={
$2:function(a,b){this.a.I(a,u.l.a(b))},
$S:15}
P.d4.prototype={
$0:function(){this.a.I(this.b,this.c)},
$S:0}
P.d1.prototype={
$0:function(){this.a.Y(this.b)},
$S:0}
P.d5.prototype={
$0:function(){P.dL(this.b,this.a)},
$S:0}
P.d0.prototype={
$0:function(){this.a.I(this.b,this.c)},
$S:0}
P.d9.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.be(u.bd.a(r.d),u.z)}catch(q){t=H.I(q)
s=H.a3(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.ct(t,s)
p.b=!0
return}if(m instanceof P.o&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.bi(new P.da(o),u.z)
r.b=!1}},
$S:0}
P.da.prototype={
$1:function(a){return this.a},
$S:16}
P.d8.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.a8(p.h("2/(1)").a(q.d),n,p.h("2/"),o)}catch(m){t=H.I(m)
s=H.a3(m)
r=this.a
r.c=P.ct(t,s)
r.b=!0}},
$S:0}
P.d7.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.aH(q.a.bb(t))&&q.a.e!=null){q.c=q.a.b8(t)
q.b=!1}}catch(p){s=H.I(p)
r=H.a3(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.ct(s,r)
m.b=!0}},
$S:0}
P.c0.prototype={}
P.bO.prototype={
gj:function(a){var t,s,r=this,q={},p=new P.o($.l,u.a)
q.a=0
t=r.$ti
s=t.h("~(1)?").a(new P.cO(q,r))
u.Z.a(new P.cP(q,p))
W.c5(r.a,r.b,s,!1,t.c)
return p}}
P.cO.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.cP.prototype={
$0:function(){this.b.ak(this.a.a)},
$S:0}
P.bP.prototype={}
P.cd.prototype={}
P.bl.prototype={$iem:1}
P.dp.prototype={
$0:function(){var t=H.f(this.a)
t.stack=J.aj(this.b)
throw t},
$S:0}
P.cb.prototype={
bg:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.b===$.l){a.$0()
return}P.eE(q,q,this,a,u.H)}catch(r){t=H.I(r)
s=H.a3(r)
P.dn(q,q,this,t,u.l.a(s))}},
bh:function(a,b,c){var t,s,r,q=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.b===$.l){a.$1(b)
return}P.eF(q,q,this,a,b,u.H,c)}catch(r){t=H.I(r)
s=H.a3(r)
P.dn(q,q,this,t,u.l.a(s))}},
a4:function(a){return new P.dc(this,u.M.a(a))},
b1:function(a,b){return new P.dd(this,b.h("~(0)").a(a),b)},
be:function(a,b){b.h("0()").a(a)
if($.l===C.b)return a.$0()
return P.eE(null,null,this,a,b)},
a8:function(a,b,c,d){c.h("@<0>").t(d).h("1(2)").a(a)
d.a(b)
if($.l===C.b)return a.$1(b)
return P.eF(null,null,this,a,b,c,d)},
bf:function(a,b,c,d,e,f){d.h("@<0>").t(e).t(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.l===C.b)return a.$2(b,c)
return P.hi(null,null,this,a,b,c,d,e,f)},
av:function(a,b,c,d){return b.h("@<0>").t(c).t(d).h("1(2,3)").a(a)}}
P.dc.prototype={
$0:function(){return this.a.bg(this.b)},
$S:0}
P.dd.prototype={
$1:function(a){var t=this.c
return this.a.bh(this.b,t.a(a),t)},
$S:function(){return this.c.h("~(0)")}}
P.ba.prototype={
gv:function(a){var t=this,s=new P.bb(t,t.r,H.G(t).h("bb<1>"))
s.c=t.e
return s},
gj:function(a){return this.a},
n:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.L.a(t[b])!=null}else{s=this.aQ(b)
return s}},
aQ:function(a){var t=this.d
if(t==null)return!1
return this.an(t[this.al(a)],a)>=0},
k:function(a,b){var t,s,r=this
H.G(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.ag(t==null?r.b=P.dM():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.ag(s==null?r.c=P.dM():s,b)}else return r.aK(b)},
aK:function(a){var t,s,r,q=this
H.G(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.dM()
s=q.al(a)
r=t[s]
if(r==null)t[s]=[q.a2(a)]
else{if(q.an(r,a)>=0)return!1
r.push(q.a2(a))}return!0},
ag:function(a,b){H.G(this).c.a(b)
if(u.L.a(a[b])!=null)return!1
a[b]=this.a2(b)
return!0},
a2:function(a){var t=this,s=new P.c8(H.G(t).c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
al:function(a){return J.cq(a)&1073741823},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.dA(a[s].a,b))return s
return-1}}
P.c8.prototype={}
P.bb.prototype={
gm:function(){return this.d},
l:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.f(P.aN(r))
else if(s==null){t.saj(null)
return!1}else{t.saj(t.$ti.h("1?").a(s.a))
t.c=s.b
return!0}},
saj:function(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
P.aX.prototype={$ii:1,$iQ:1}
P.t.prototype={
gv:function(a){return new H.ad(a,this.gj(a),H.a4(a).h("ad<t.E>"))},
G:function(a,b){return this.A(a,b)},
i:function(a){return P.dG(a,"[","]")}}
P.aY.prototype={}
P.cI.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.e(a)
s.a=t+": "
s.a+=H.e(b)},
$S:17}
P.z.prototype={
a6:function(a,b){var t,s
H.G(this).h("~(z.K,z.V)").a(b)
for(t=J.cr(this.gE());t.l();){s=t.gm()
b.$2(s,this.A(0,s))}},
gj:function(a){return J.bu(this.gE())},
i:function(a){return P.ee(this)},
$iae:1}
P.b5.prototype={
B:function(a,b){var t
for(t=J.cr(H.G(this).h("i<1>").a(b));t.l();)this.k(0,t.gm())},
i:function(a){return P.dG(this,"{","}")}}
P.be.prototype={$ii:1,$iei:1}
P.bc.prototype={}
P.bm.prototype={}
P.a9.prototype={
H:function(a,b){if(b==null)return!1
return b instanceof P.a9&&this.a===b.a},
gp:function(a){return C.d.gp(this.a)},
i:function(a){var t,s,r,q=new P.cz(),p=this.a
if(p<0)return"-"+new P.a9(0-p).i(0)
t=q.$1(C.d.P(p,6e7)%60)
s=q.$1(C.d.P(p,1e6)%60)
r=new P.cy().$1(p%1e6)
return""+C.d.P(p,36e8)+":"+H.e(t)+":"+H.e(s)+"."+H.e(r)}}
P.cy.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:4}
P.cz.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:4}
P.j.prototype={
gU:function(){return H.a3(this.$thrownJsError)}}
P.aK.prototype={
i:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bz(t)
return"Assertion failed"}}
P.bU.prototype={}
P.bI.prototype={
i:function(a){return"Throw of null."}}
P.L.prototype={
ga_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gZ:function(){return""},
i:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.ga_()+p+n
if(!r.a)return m
t=r.gZ()
s=P.bz(r.b)
return m+t+": "+s}}
P.b4.prototype={
ga_:function(){return"RangeError"},
gZ:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.e(r):""
else if(r==null)t=": Not greater than or equal to "+H.e(s)
else if(r>s)t=": Not in inclusive range "+H.e(s)+".."+H.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.e(s)
return t}}
P.bB.prototype={
ga_:function(){return"RangeError"},
gZ:function(){var t,s=H.bn(this.b)
if(typeof s!=="number")return s.bl()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.bX.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.bV.prototype={
i:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.at.prototype={
i:function(a){return"Bad state: "+this.a}}
P.bw.prototype={
i:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bz(t)+"."}}
P.b6.prototype={
i:function(a){return"Stack Overflow"},
gU:function(){return null},
$ij:1}
P.bx.prototype={
i:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.cZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.i.prototype={
S:function(a,b){var t=H.G(this)
return new H.af(this,t.h("v(i.E)").a(b),t.h("af<i.E>"))},
gj:function(a){var t,s=this.gv(this)
for(t=0;s.l();)++t
return t},
i:function(a){return P.fs(this,"(",")")}}
P.y.prototype={}
P.q.prototype={
gp:function(a){return P.k.prototype.gp.call(C.E,this)},
i:function(a){return"null"}}
P.k.prototype={constructor:P.k,$ik:1,
H:function(a,b){return this===b},
gp:function(a){return H.b3(this)},
i:function(a){return"Instance of '"+H.e(H.cN(this))+"'"},
toString:function(){return this.i(this)}}
P.ce.prototype={
i:function(a){return""},
$ia_:1}
P.bQ.prototype={
gj:function(a){return this.a.length},
i:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.ak.prototype={
sb9:function(a,b){a.href=b},
i:function(a){return String(a)},
$iak:1}
W.bv.prototype={
i:function(a){return String(a)}}
W.al.prototype={$ial:1}
W.a6.prototype={$ia6:1}
W.M.prototype={
gj:function(a){return a.length}}
W.an.prototype={
M:function(a,b){var t=$.eU(),s=t[b]
if(typeof s=="string")return s
s=this.aY(a,b)
t[b]=s
return s},
aY:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=$.eW()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.cw.prototype={}
W.S.prototype={$iS:1}
W.a8.prototype={}
W.cx.prototype={
i:function(a){return String(a)}}
W.by.prototype={
b5:function(a,b){return a.createHTMLDocument(b)}}
W.n.prototype={
gb0:function(a){return new W.c3(a)},
i:function(a){return a.localName},
u:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.ea
if(t==null){t=H.C([],u.Q)
s=new W.b0(t)
C.a.k(t,W.eo(null))
C.a.k(t,W.es())
$.ea=s
d=s}else d=t
t=$.e9
if(t==null){t=new W.bk(d)
$.e9=t
c=t}else{t.a=d
c=t}}if($.X==null){t=document
s=t.implementation
s.toString
s=C.y.b5(s,"")
$.X=s
$.dD=s.createRange()
s=$.X.createElement("base")
u.w.a(s)
t=t.baseURI
t.toString
s.href=t
$.X.head.appendChild(s)}t=$.X
if(t.body==null){s=t.createElement("body")
C.C.sb2(t,u.t.a(s))}t=$.X
if(u.t.b(a)){t=t.body
t.toString
r=t}else{t.toString
r=t.createElement(a.tagName)
$.X.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.n(C.H,a.tagName)){$.dD.selectNodeContents(r)
t=$.dD
q=t.createContextualFragment(b)}else{J.fe(r,b)
q=$.X.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}if(r!==$.X.body)J.e3(r)
c.ac(q)
document.adoptNode(q)
return q},
b4:function(a,b,c){return this.u(a,b,c,null)},
sat:function(a,b){this.T(a,b)},
T:function(a,b){this.say(a,null)
a.appendChild(this.u(a,b,null,null))},
saS:function(a,b){a.innerHTML=b},
gax:function(a){return a.tagName},
$in:1}
W.cA.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:18}
W.a.prototype={$ia:1}
W.m.prototype={
aL:function(a,b,c,d){return a.addEventListener(b,H.cn(u.o.a(c),1),!1)},
$im:1}
W.bA.prototype={
gj:function(a){return a.length}}
W.aS.prototype={
sb2:function(a,b){a.body=b}}
W.ac.prototype={$iac:1}
W.bH.prototype={
i:function(a){return String(a)},
$ibH:1}
W.u.prototype={
gL:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.f(P.dJ("No elements"))
if(s>1)throw H.f(P.dJ("More than one element"))
t=t.firstChild
t.toString
return t},
B:function(a,b){var t,s,r,q,p
u.J.a(b)
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q){p=t.firstChild
p.toString
s.appendChild(p)}return},
gv:function(a){var t=this.a.childNodes
return new W.aa(t,t.length,H.a4(t).h("aa<O.E>"))},
gj:function(a){return this.a.childNodes.length},
A:function(a,b){var t=this.a.childNodes
if(b<0||b>=t.length)return H.w(t,b)
return t[b]}}
W.d.prototype={
bd:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
aP:function(a){var t
for(;t=a.firstChild,t!=null;)a.removeChild(t)},
i:function(a){var t=a.nodeValue
return t==null?this.aC(a):t},
say:function(a,b){a.textContent=b},
$id:1}
W.b_.prototype={
gj:function(a){return a.length},
A:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.dF(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>=a.length)return H.w(a,b)
return a[b]},
$ibE:1,
$ii:1,
$iQ:1}
W.bM.prototype={
gj:function(a){return a.length}}
W.b7.prototype={
u:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.V(a,b,c,d)
t=W.fq("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.u(s).B(0,new W.u(t))
return s}}
W.bR.prototype={
u:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.V(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.o.u(t.createElement("table"),b,c,d)
t.toString
t=new W.u(t)
r=t.gL(t)
r.toString
t=new W.u(r)
q=t.gL(t)
s.toString
q.toString
new W.u(s).B(0,new W.u(q))
return s}}
W.bS.prototype={
u:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.V(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.o.u(t.createElement("table"),b,c,d)
t.toString
t=new W.u(t)
r=t.gL(t)
s.toString
r.toString
new W.u(s).B(0,new W.u(r))
return s}}
W.au.prototype={
T:function(a,b){var t,s
this.say(a,null)
t=a.content
t.toString
J.fb(t)
s=this.u(a,b,null,null)
a.content.appendChild(s)},
$iau:1}
W.A.prototype={}
W.aw.prototype={}
W.ax.prototype={$iax:1}
W.bd.prototype={
gj:function(a){return a.length},
A:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.dF(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>=a.length)return H.w(a,b)
return a[b]},
$ibE:1,
$ii:1,
$iQ:1}
W.c1.prototype={
a6:function(a,b){var t,s,r,q,p
u.aa.a(b)
for(t=this.gE(),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.dz)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gE:function(){var t,s,r,q,p,o,n=this.a.attributes
n.toString
t=H.C([],u.s)
for(s=n.length,r=u.x,q=0;q<s;++q){if(q>=n.length)return H.w(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
C.a.k(t,o)}}return t}}
W.c3.prototype={
A:function(a,b){return this.a.getAttribute(H.D(b))},
gj:function(a){return this.gE().length}}
W.dE.prototype={}
W.cX.prototype={}
W.b9.prototype={}
W.cY.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:19}
W.ah.prototype={
aH:function(a){var t
if($.c7.a===0){for(t=0;t<262;++t)$.c7.ab(0,C.G[t],W.hB())
for(t=0;t<12;++t)$.c7.ab(0,C.h[t],W.hC())}},
F:function(a){return $.f9().n(0,W.aP(a))},
C:function(a,b,c){var t=$.c7.A(0,H.e(W.aP(a))+"::"+b)
if(t==null)t=$.c7.A(0,"*::"+b)
if(t==null)return!1
return H.h_(t.$4(a,b,c,this))},
$iJ:1}
W.O.prototype={
gv:function(a){return new W.aa(a,this.gj(a),H.a4(a).h("aa<O.E>"))}}
W.b0.prototype={
F:function(a){return C.a.as(this.a,new W.cK(a))},
C:function(a,b,c){return C.a.as(this.a,new W.cJ(a,b,c))},
$iJ:1}
W.cK.prototype={
$1:function(a){return u.e.a(a).F(this.a)},
$S:5}
W.cJ.prototype={
$1:function(a){return u.e.a(a).C(this.a,this.b,this.c)},
$S:5}
W.bf.prototype={
aI:function(a,b,c,d){var t,s,r
this.a.B(0,c)
t=b.S(0,new W.de())
s=b.S(0,new W.df())
this.b.B(0,t)
r=this.c
r.B(0,C.I)
r.B(0,s)},
F:function(a){return this.a.n(0,W.aP(a))},
C:function(a,b,c){var t=this,s=W.aP(a),r=t.c
if(r.n(0,H.e(s)+"::"+b))return t.d.b_(c)
else if(r.n(0,"*::"+b))return t.d.b_(c)
else{r=t.b
if(r.n(0,H.e(s)+"::"+b))return!0
else if(r.n(0,"*::"+b))return!0
else if(r.n(0,H.e(s)+"::*"))return!0
else if(r.n(0,"*::*"))return!0}return!1},
$iJ:1}
W.de.prototype={
$1:function(a){return!C.a.n(C.h,H.D(a))},
$S:6}
W.df.prototype={
$1:function(a){return C.a.n(C.h,H.D(a))},
$S:6}
W.cg.prototype={
C:function(a,b,c){if(this.aF(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.n(0,b)
return!1}}
W.dg.prototype={
$1:function(a){return"TEMPLATE::"+H.e(H.D(a))},
$S:20}
W.cf.prototype={
F:function(a){var t
if(u.q.b(a))return!1
t=u.r.b(a)
if(t&&W.aP(a)==="foreignObject")return!1
if(t)return!0
return!1},
C:function(a,b,c){if(b==="is"||C.c.aA(b,"on"))return!1
return this.F(a)},
$iJ:1}
W.aa.prototype={
l:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.sap(J.fa(t.a,s))
t.c=s
return!0}t.sap(null)
t.c=r
return!1},
gm:function(){return this.d},
sap:function(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
W.cc.prototype={$ifD:1}
W.bk.prototype={
ac:function(a){var t,s=new W.dk(this)
do{t=this.b
s.$2(a,null)}while(t!==this.b)},
J:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.e3(a)
else b.removeChild(a)},
aV:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.fd(a)
m=n.a.getAttribute("is")
u.h.a(a)
t=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='previousSibling'||i.name=='previousSibling'||i.id=='children'||i.name=='children')return true}return false}(a)
o=H.aH(t)?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.I(q)}s="element unprintable"
try{s=J.aj(a)}catch(q){H.I(q)}try{r=W.aP(a)
this.aU(u.h.a(a),b,o,s,r,u.W.a(n),H.ey(m))}catch(q){if(H.I(q) instanceof P.L)throw q
else{this.J(a,b)
window
p="Removing corrupted element "+H.e(s)
if(typeof console!="undefined")window.console.warn(p)}}},
aU:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.J(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!n.a.F(a)){n.J(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!n.a.C(a,"is",g)){n.J(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gE()
s=H.C(t.slice(0),H.cm(t))
for(r=f.gE().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.w(s,r)
q=s[r]
p=n.a
o=J.fg(q)
H.D(q)
if(!p.C(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.e(e)+" "+q+'="'+H.e(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.bg.b(a)){t=a.content
t.toString
n.ac(t)}},
$ifw:1}
W.dk.prototype={
$2:function(a,b){var t,s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.aV(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.J(a,b)}t=a.lastChild
for(r=u.A;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){q=s.nextSibling
p=t
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.dJ("Corrupt HTML")
throw H.f(q)}}catch(o){H.I(o)
q=r.a(t);++n.b
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:21}
W.c2.prototype={}
W.c9.prototype={}
W.ca.prototype={}
W.ck.prototype={}
W.cl.prototype={}
P.as.prototype={$ias:1}
P.b.prototype={
sat:function(a,b){this.T(a,b)},
u:function(a,b,c,d){var t,s,r,q,p,o=H.C([],u.Q)
C.a.k(o,W.eo(null))
C.a.k(o,W.es())
C.a.k(o,new W.cf())
c=new W.bk(new W.b0(o))
t='<svg version="1.1">'+b+"</svg>"
o=document
s=o.body
s.toString
r=C.j.b4(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.u(r)
p=o.gL(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
$ib:1}
B.cv.prototype={
K:function(){var t=0,s=P.aC(u.z),r=this,q,p
var $async$K=P.aF(function(a,b){if(a===1)return P.az(b,s)
while(true)switch(t){case 0:t=2
return P.dR(new A.T(r.a).a5(),$async$K)
case 2:r.sb7(b)
q=r.b,p=u.z
case 3:if(!!0){t=4
break}q.aa()
t=5
return P.dR(P.eb(C.B,p),$async$K)
case 5:t=3
break
case 4:return P.aA(null,s)}})
return P.aB($async$K,s)},
sb7:function(a){u.j.a(a)}}
O.ao.prototype={}
A.T.prototype={
a5:function(){var t=0,s=P.aC(u.j),r=this,q,p,o,n
var $async$a5=P.aF(function(a,b){if(a===1)return P.az(b,s)
while(true)switch(t){case 0:p=window
o=u.O
n=o.a(new O.ap(r.a).gR())
u.Z.a(null)
q=u.C
W.c5(p,"deviceorientation",n,!1,q)
W.c5(window,"deviceorientation",o.a(new A.cB(r)),!1,q)
return P.aA(null,s)}})
return P.aB($async$a5,s)}}
A.cB.prototype={
$1:function(a){var t,s,r,q,p=u.C
p.a(a)
if(a.alpha==null&&a.beta==null&&a.gamma==null){p=u.z
p=new U.aU(P.ec(p,p),document.querySelector("#test"),this.a.a)
t=window
s=u.bH.a(p.gR())
u.Z.a(null)
W.c5(t,"keydown",s,!1,u.p)
return p}else{t=this.a
if(t.b==null){s=new O.ap(t.a)
r=window
q=u.O.a(s.gR())
u.Z.a(null)
W.c5(r,"deviceorientation",q,!1,p)
return t.b=s}}},
$S:22}
G.cD.prototype={
saG:function(a){u.a7.a(a)},
sbc:function(a){u.cY.a(a)}}
O.ap.prototype={
D:function(a){var t=0,s=P.aC(u.z),r,q=this,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$D=P.aF(function(b,c){if(b===1)return P.az(c,s)
while(true)switch(t){case 0:t=u.C.b(a)?3:4
break
case 3:t=a.alpha!=null&&a.beta!=null&&a.gamma!=null?5:6
break
case 5:p=Math.min(50,Math.max(10,H.eK(a.beta)))-30
o=Math.min(20,Math.max(-20,H.eK(a.gamma)))
n=q.a.e.y,m=n.length,l=u.z,k=0
case 7:if(!(k<n.length)){t=9
break}j=n[k]
i=j.b
h=j.f
g=i.a+=h*o
h=i.b+=h*p
f=j.a
e=f.d
d=j.c
if(typeof d!=="number"){r=d.bm()
t=1
break}if(typeof e!=="number"){r=e.aB()
t=1
break}e-=d
if(g>e){i.a=e
g=e}if(g<0)i.a=0
g=f.e
if(typeof g!=="number"){r=g.aB()
t=1
break}d=g-d
if(h>d){i.b=d
h=d}if(h<0)i.b=0
t=10
return P.dR(P.eb(C.A,l),$async$D)
case 10:case 8:n.length===m||(0,H.dz)(n),++k
t=7
break
case 9:case 6:case 4:case 1:return P.aA(r,s)}})
return P.aB($async$D,s)}}
U.aU.prototype={
D:function(a){var t=0,s=P.aC(u.H),r=this
var $async$D=P.aF(function(b,c){if(b===1)return P.az(c,s)
while(true)switch(t){case 0:if(u.p.b(a))J.ff(r.e,J.aj(a.keyCode))
return P.aA(null,s)}})
return P.aB($async$D,s)}}
Q.cF.prototype={
a7:function(a){var t=0,s=P.aC(u.H)
var $async$a7=P.aF(function(b,c){if(b===1)return P.az(c,s)
while(true)switch(t){case 0:return P.aA(null,s)}})
return P.aB($async$a7,s)},
sb6:function(a){this.y=u.cE.a(a)}}
R.bK.prototype={}
E.cM.prototype={}
O.cS.prototype={
aa:function(){var t=0,s=P.aC(u.H),r=this,q,p,o,n,m,l,k,j,i
var $async$aa=P.aF(function(a,b){if(a===1)return P.az(b,s)
while(true)switch(t){case 0:i=r.a.e.y
$loop$0:if(0<i.length){q=i[0]
i=r.b
p=C.f.aw(i.offsetLeft)
o=C.f.aw(i.offsetTop)
n=q.b
m=n.a
l=m-p
k=n.b-o
j=i.style
m=""+C.f.az(m)+"px"
j.left=m
m=i.style
n=""+C.f.az(n.b)+"px"
m.top=n
if(l!==0||k!==0)if(Math.abs(l)>Math.abs(k))if(l>=0){i=i.style
i.toString
n=C.e.M(i,"transform")
i.setProperty(n,"rotate(90deg)","")}else{i=i.style
i.toString
n=C.e.M(i,"transform")
i.setProperty(n,"rotate(270deg)","")}else if(k>=0){i=i.style
i.toString
n=C.e.M(i,"transform")
i.setProperty(n,"rotate(180deg)","")}else{i=i.style
i.toString
n=C.e.M(i,"transform")
i.setProperty(n,"rotate(0deg)","")}break $loop$0}return P.aA(null,s)}})
return P.aB($async$aa,s)}};(function aliases(){var t=J.x.prototype
t.aC=t.i
t=J.ab.prototype
t.aE=t.i
t=P.i.prototype
t.aD=t.S
t=W.n.prototype
t.V=t.u
t=W.bf.prototype
t.aF=t.C})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers._instance_1u
t(P,"hs","fF",1)
t(P,"ht","fG",1)
t(P,"hu","fH",1)
s(P,"eI","hl",0)
r(W,"hB",4,null,["$4"],["fI"],7,0)
r(W,"hC",4,null,["$4"],["fJ"],7,0)
q(O.ap.prototype,"gR","D",23)
q(U.aU.prototype,"gR","D",24)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.k,null)
r(P.k,[H.dH,J.x,J.aJ,P.j,P.i,H.ad,P.y,H.cQ,H.cL,H.aQ,H.bg,H.a7,P.z,H.cG,H.aW,H.K,H.c6,H.ch,P.dh,P.c_,P.aL,P.ag,P.o,P.c0,P.bO,P.bP,P.cd,P.bl,P.bm,P.c8,P.bb,P.bc,P.t,P.b5,P.a9,P.b6,P.cZ,P.q,P.ce,P.bQ,W.cw,W.dE,W.ah,W.O,W.b0,W.bf,W.cf,W.aa,W.cc,W.bk,B.cv,O.ao,A.T,G.cD,Q.cF,E.cM,O.cS])
r(J.x,[J.bC,J.aq,J.ab,J.r,J.ar,J.Y,W.m,W.c2,W.a,W.cx,W.by,W.bH,W.c9,W.ck])
r(J.ab,[J.bJ,J.av,J.P])
s(J.cE,J.r)
r(J.ar,[J.aT,J.bD])
r(P.j,[H.bG,H.b1,P.bU,H.bF,H.bW,H.bL,P.aK,H.c4,P.bI,P.L,P.bX,P.bV,P.at,P.bw,P.bx])
r(P.i,[H.aO,H.af])
r(H.aO,[H.Z,H.aV])
s(H.aZ,H.Z)
s(H.b8,P.y)
s(H.b2,P.bU)
r(H.a7,[H.bT,H.dt,H.du,H.dv,P.cU,P.cT,P.cV,P.cW,P.di,P.dl,P.dm,P.dq,P.cC,P.d_,P.d6,P.d2,P.d3,P.d4,P.d1,P.d5,P.d0,P.d9,P.da,P.d8,P.d7,P.cO,P.cP,P.dp,P.dc,P.dd,P.cI,P.cy,P.cz,W.cA,W.cY,W.cK,W.cJ,W.de,W.df,W.dg,W.dk,A.cB])
r(H.bT,[H.bN,H.am])
s(H.bZ,P.aK)
s(P.aY,P.z)
r(P.aY,[H.U,W.c1])
s(H.bh,H.c4)
s(P.cb,P.bl)
s(P.be,P.bm)
s(P.ba,P.be)
s(P.aX,P.bc)
r(P.L,[P.b4,P.bB])
r(W.m,[W.d,W.aw])
r(W.d,[W.n,W.M,W.a8,W.ax])
r(W.n,[W.c,P.b])
r(W.c,[W.ak,W.bv,W.al,W.a6,W.bA,W.bM,W.b7,W.bR,W.bS,W.au])
s(W.an,W.c2)
r(W.a,[W.S,W.A])
s(W.aS,W.a8)
s(W.ac,W.A)
s(W.u,P.aX)
s(W.ca,W.c9)
s(W.b_,W.ca)
s(W.cl,W.ck)
s(W.bd,W.cl)
s(W.c3,W.c1)
s(W.cX,P.bO)
s(W.b9,P.bP)
s(W.cg,W.bf)
s(P.as,P.b)
r(A.T,[O.ap,U.aU])
s(R.bK,O.ao)
t(P.bc,P.t)
t(P.bm,P.b5)
t(W.c2,W.cw)
t(W.c9,P.t)
t(W.ca,W.O)
t(W.ck,P.t)
t(W.cl,W.O)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{H:"int",ai:"double",aI:"num",h:"String",v:"bool",q:"Null",Q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~(~())","q(@)","q()","h(H)","v(J)","v(h)","v(n,h,h,ah)","@(@)","@(@,h)","@(h)","q(~())","~(@)","q(@,a_)","~(H,@)","q(k,a_)","o<@>(@)","~(k?,k?)","v(d)","~(a)","h(h)","~(d,d?)","T*(S*)","~(a*)","N<~>*(a*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.fX(v.typeUniverse,JSON.parse('{"bJ":"ab","av":"ab","P":"ab","hT":"a","i4":"a","hS":"b","i5":"b","hU":"c","i6":"c","i7":"d","i3":"d","il":"a8","hW":"A","hV":"M","i9":"M","bC":{"v":[]},"aq":{"q":[]},"r":{"Q":["1"],"i":["1"]},"cE":{"r":["1"],"Q":["1"],"i":["1"]},"aJ":{"y":["1"]},"ar":{"ai":[],"aI":[]},"aT":{"ai":[],"H":[],"aI":[]},"bD":{"ai":[],"aI":[]},"Y":{"h":[],"ef":[]},"bG":{"j":[]},"b1":{"j":[]},"aO":{"i":["1"]},"Z":{"i":["1"]},"ad":{"y":["1"]},"aZ":{"Z":["2"],"i":["2"],"Z.E":"2","i.E":"2"},"af":{"i":["1"],"i.E":"1"},"b8":{"y":["1"]},"b2":{"j":[]},"bF":{"j":[]},"bW":{"j":[]},"bg":{"a_":[]},"a7":{"aR":[]},"bT":{"aR":[]},"bN":{"aR":[]},"am":{"aR":[]},"bL":{"j":[]},"bZ":{"j":[]},"U":{"z":["1","2"],"ae":["1","2"],"z.K":"1","z.V":"2"},"aV":{"i":["1"],"i.E":"1"},"aW":{"y":["1"]},"c4":{"j":[]},"bh":{"j":[]},"o":{"N":["1"]},"aL":{"j":[]},"bl":{"em":[]},"cb":{"bl":[],"em":[]},"ba":{"b5":["1"],"ei":["1"],"i":["1"]},"bb":{"y":["1"]},"aX":{"t":["1"],"Q":["1"],"i":["1"]},"aY":{"z":["1","2"],"ae":["1","2"]},"z":{"ae":["1","2"]},"be":{"b5":["1"],"ei":["1"],"i":["1"]},"ai":{"aI":[]},"H":{"aI":[]},"h":{"ef":[]},"aK":{"j":[]},"bU":{"j":[]},"bI":{"j":[]},"L":{"j":[]},"b4":{"j":[]},"bB":{"j":[]},"bX":{"j":[]},"bV":{"j":[]},"at":{"j":[]},"bw":{"j":[]},"b6":{"j":[]},"bx":{"j":[]},"ce":{"a_":[]},"S":{"a":[]},"n":{"d":[],"m":[]},"ac":{"a":[]},"d":{"m":[]},"A":{"a":[]},"ah":{"J":[]},"c":{"n":[],"d":[],"m":[]},"ak":{"n":[],"d":[],"m":[]},"bv":{"n":[],"d":[],"m":[]},"al":{"n":[],"d":[],"m":[]},"a6":{"n":[],"d":[],"m":[]},"M":{"d":[],"m":[]},"a8":{"d":[],"m":[]},"bA":{"n":[],"d":[],"m":[]},"aS":{"d":[],"m":[]},"u":{"t":["d"],"Q":["d"],"i":["d"],"t.E":"d"},"b_":{"t":["d"],"O":["d"],"Q":["d"],"bE":["d"],"i":["d"],"t.E":"d","O.E":"d"},"bM":{"n":[],"d":[],"m":[]},"b7":{"n":[],"d":[],"m":[]},"bR":{"n":[],"d":[],"m":[]},"bS":{"n":[],"d":[],"m":[]},"au":{"n":[],"d":[],"m":[]},"aw":{"m":[]},"ax":{"d":[],"m":[]},"bd":{"t":["d"],"O":["d"],"Q":["d"],"bE":["d"],"i":["d"],"t.E":"d","O.E":"d"},"c1":{"z":["h","h"],"ae":["h","h"]},"c3":{"z":["h","h"],"ae":["h","h"],"z.K":"h","z.V":"h"},"cX":{"bO":["1"]},"b9":{"bP":["1"]},"b0":{"J":[]},"bf":{"J":[]},"cg":{"J":[]},"cf":{"J":[]},"aa":{"y":["1"]},"cc":{"fD":[]},"bk":{"fw":[]},"as":{"b":[],"n":[],"d":[],"m":[]},"b":{"n":[],"d":[],"m":[]},"ap":{"T":[]},"aU":{"T":[]},"bK":{"ao":[]}}'))
H.fW(v.typeUniverse,JSON.parse('{"aO":1,"aX":1,"aY":2,"be":1,"bc":1,"bm":1}'))
0
var u=(function rtii(){var t=H.eL
return{n:t("aL"),w:t("al"),t:t("a6"),h:t("n"),R:t("j"),B:t("a"),Y:t("aR"),d:t("N<@>"),J:t("i<d>"),V:t("i<@>"),Q:t("r<J>"),s:t("r<h>"),b:t("r<@>"),m:t("r<ao*>"),i:t("r<h*>"),T:t("aq"),g:t("P"),D:t("bE<@>"),E:t("U<H*,h*>"),I:t("U<H*,ai*>"),W:t("ae<@,@>"),k:t("aZ<h*,h>"),A:t("d"),e:t("J"),P:t("q"),K:t("k"),q:t("as"),l:t("a_"),N:t("h"),u:t("h(h*)"),r:t("b"),bg:t("au"),cr:t("av"),x:t("ax"),ba:t("u"),c:t("o<@>"),a:t("o<H>"),f:t("ah"),y:t("v"),bG:t("v(k)"),cb:t("ai"),z:t("@"),bd:t("@()"),v:t("@(k)"),U:t("@(k,a_)"),S:t("H"),C:t("S*"),j:t("T*"),p:t("ac*"),cE:t("Q<ao*>*"),a7:t("ae<H*,h*>*"),cY:t("ae<H*,ai*>*"),G:t("0&*"),_:t("k*"),bc:t("N<q>?"),X:t("k?"),F:t("ag<@,@>?"),L:t("c8?"),o:t("@(a)?"),Z:t("~()?"),O:t("~(S*)?"),bH:t("~(ac*)?"),b_:t("aI"),H:t("~"),M:t("~()"),aa:t("~(h,h)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.p=W.ak.prototype
C.j=W.a6.prototype
C.e=W.an.prototype
C.y=W.by.prototype
C.C=W.aS.prototype
C.D=J.x.prototype
C.a=J.r.prototype
C.d=J.aT.prototype
C.E=J.aq.prototype
C.f=J.ar.prototype
C.c=J.Y.prototype
C.F=J.P.prototype
C.n=J.bJ.prototype
C.o=W.b7.prototype
C.i=J.av.prototype
C.J=W.aw.prototype
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.w=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.t=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.v=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.u=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.l=function(hooks) { return hooks; }

C.b=new P.cb()
C.x=new P.ce()
C.z=new P.a9(0)
C.A=new P.a9(1e5)
C.B=new P.a9(5e4)
C.G=H.C(t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),u.i)
C.H=H.C(t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),u.i)
C.I=H.C(t([]),u.i)
C.m=H.C(t(["bind","if","ref","repeat","syntax"]),u.i)
C.h=H.C(t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),u.i)})();(function staticFields(){$.db=null
$.R=0
$.aM=null
$.e6=null
$.eN=null
$.eH=null
$.eR=null
$.dr=null
$.dw=null
$.dY=null
$.aD=null
$.bp=null
$.bq=null
$.dT=!1
$.l=C.b
$.F=H.C([],H.eL("r<k>"))
$.X=null
$.dD=null
$.ea=null
$.e9=null
$.c7=P.ec(u.N,u.Y)})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"hY","eV",function(){return H.hA("_$dart_dartClosure")})
t($,"ia","f_",function(){return H.V(H.cR({
toString:function(){return"$receiver$"}}))})
t($,"ib","f0",function(){return H.V(H.cR({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"ic","f1",function(){return H.V(H.cR(null))})
t($,"id","f2",function(){return H.V(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"ih","f5",function(){return H.V(H.cR(void 0))})
t($,"ii","f6",function(){return H.V(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"ig","f4",function(){return H.V(H.ek(null))})
t($,"ie","f3",function(){return H.V(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"ik","f8",function(){return H.V(H.ek(void 0))})
t($,"ij","f7",function(){return H.V(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"im","e1",function(){return P.fE()})
t($,"hX","eU",function(){return{}})
t($,"io","f9",function(){return P.ed(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"i1","e0",function(){return J.dB(P.dC(),"Opera",0)})
t($,"i0","eY",function(){return!H.aH($.e0())&&J.dB(P.dC(),"Trident/",0)})
t($,"i_","eX",function(){return J.dB(P.dC(),"Firefox",0)})
t($,"hZ","eW",function(){return"-"+$.eZ()+"-"})
t($,"i2","eZ",function(){if(H.aH($.eX()))var s="moz"
else if($.eY())s="ms"
else s=H.aH($.e0())?"o":"webkit"
return s})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.x,MediaError:J.x,Navigator:J.x,NavigatorConcurrentHardware:J.x,NavigatorUserMediaError:J.x,OverconstrainedError:J.x,PositionError:J.x,Range:J.x,SQLError:J.x,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.ak,HTMLAreaElement:W.bv,HTMLBaseElement:W.al,HTMLBodyElement:W.a6,CDATASection:W.M,CharacterData:W.M,Comment:W.M,ProcessingInstruction:W.M,Text:W.M,CSSStyleDeclaration:W.an,MSStyleCSSProperties:W.an,CSS2Properties:W.an,DeviceOrientationEvent:W.S,XMLDocument:W.a8,Document:W.a8,DOMException:W.cx,DOMImplementation:W.by,Element:W.n,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,EventTarget:W.m,HTMLFormElement:W.bA,HTMLDocument:W.aS,KeyboardEvent:W.ac,Location:W.bH,DocumentFragment:W.d,ShadowRoot:W.d,DocumentType:W.d,Node:W.d,NodeList:W.b_,RadioNodeList:W.b_,HTMLSelectElement:W.bM,HTMLTableElement:W.b7,HTMLTableRowElement:W.bR,HTMLTableSectionElement:W.bS,HTMLTemplateElement:W.au,CompositionEvent:W.A,FocusEvent:W.A,MouseEvent:W.A,DragEvent:W.A,PointerEvent:W.A,TextEvent:W.A,TouchEvent:W.A,WheelEvent:W.A,UIEvent:W.A,Window:W.aw,DOMWindow:W.aw,Attr:W.ax,NamedNodeMap:W.bd,MozNamedAttrMap:W.bd,SVGScriptElement:P.as,SVGAElement:P.b,SVGAnimateElement:P.b,SVGAnimateMotionElement:P.b,SVGAnimateTransformElement:P.b,SVGAnimationElement:P.b,SVGCircleElement:P.b,SVGClipPathElement:P.b,SVGDefsElement:P.b,SVGDescElement:P.b,SVGDiscardElement:P.b,SVGEllipseElement:P.b,SVGFEBlendElement:P.b,SVGFEColorMatrixElement:P.b,SVGFEComponentTransferElement:P.b,SVGFECompositeElement:P.b,SVGFEConvolveMatrixElement:P.b,SVGFEDiffuseLightingElement:P.b,SVGFEDisplacementMapElement:P.b,SVGFEDistantLightElement:P.b,SVGFEFloodElement:P.b,SVGFEFuncAElement:P.b,SVGFEFuncBElement:P.b,SVGFEFuncGElement:P.b,SVGFEFuncRElement:P.b,SVGFEGaussianBlurElement:P.b,SVGFEImageElement:P.b,SVGFEMergeElement:P.b,SVGFEMergeNodeElement:P.b,SVGFEMorphologyElement:P.b,SVGFEOffsetElement:P.b,SVGFEPointLightElement:P.b,SVGFESpecularLightingElement:P.b,SVGFESpotLightElement:P.b,SVGFETileElement:P.b,SVGFETurbulenceElement:P.b,SVGFilterElement:P.b,SVGForeignObjectElement:P.b,SVGGElement:P.b,SVGGeometryElement:P.b,SVGGraphicsElement:P.b,SVGImageElement:P.b,SVGLineElement:P.b,SVGLinearGradientElement:P.b,SVGMarkerElement:P.b,SVGMaskElement:P.b,SVGMetadataElement:P.b,SVGPathElement:P.b,SVGPatternElement:P.b,SVGPolygonElement:P.b,SVGPolylineElement:P.b,SVGRadialGradientElement:P.b,SVGRectElement:P.b,SVGSetElement:P.b,SVGStopElement:P.b,SVGStyleElement:P.b,SVGSVGElement:P.b,SVGSwitchElement:P.b,SVGSymbolElement:P.b,SVGTSpanElement:P.b,SVGTextContentElement:P.b,SVGTextElement:P.b,SVGTextPathElement:P.b,SVGTextPositioningElement:P.b,SVGTitleElement:P.b,SVGUseElement:P.b,SVGViewElement:P.b,SVGGradientElement:P.b,SVGComponentTransferFunctionElement:P.b,SVGFEDropShadowElement:P.b,SVGMPathElement:P.b,SVGElement:P.b})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DeviceOrientationEvent:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,KeyboardEvent:true,Location:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,TouchEvent:true,WheelEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=F.dZ
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
