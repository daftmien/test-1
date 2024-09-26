"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[566],{46953:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.QuickJSContext=void 0;const i=r(50618),n=r(19991),o=r(35541),s=r(39045),a=r(10302),u=r(95812);class l extends a.ModuleMemory{constructor(e){var t;super(e.module),this.scope=new s.Scope,this.copyJSValue=e=>this.ffi.QTS_DupValuePointer(this.ctx.value,e),this.freeJSValue=e=>{this.ffi.QTS_FreeValuePointer(this.ctx.value,e)},null===(t=e.ownedLifetimes)||void 0===t||t.forEach((e=>this.scope.manage(e))),this.owner=e.owner,this.module=e.module,this.ffi=e.ffi,this.rt=e.rt,this.ctx=this.scope.manage(e.ctx)}get alive(){return this.scope.alive}dispose(){return this.scope.dispose()}manage(e){return this.scope.manage(e)}consumeJSCharPointer(e){const t=this.module.UTF8ToString(e);return this.ffi.QTS_FreeCString(this.ctx.value,e),t}heapValueHandle(e){return new s.Lifetime(e,this.copyJSValue,this.freeJSValue,this.owner)}}t.QuickJSContext=class{constructor(e){this._undefined=void 0,this._null=void 0,this._false=void 0,this._true=void 0,this._global=void 0,this._BigInt=void 0,this.fnNextId=-32768,this.fnMaps=new Map,this.cToHostCallbacks={callFunction:(e,t,r,n,o)=>{if(e!==this.ctx.value)throw new Error("QuickJSContext instance received C -> JS call with mismatched ctx");const a=this.getFunction(o);if(!a)throw new Error("QuickJSContext had no callback with id ".concat(o));return s.Scope.withScopeMaybeAsync(this,(function*(e,o){const u=o.manage(new s.WeakLifetime(t,this.memory.copyJSValue,this.memory.freeJSValue,this.runtime)),l=new Array(r);for(let t=0;t<r;t++){const e=this.ffi.QTS_ArgvGetJSValueConstPointer(n,t);l[t]=o.manage(new s.WeakLifetime(e,this.memory.copyJSValue,this.memory.freeJSValue,this.runtime))}try{const t=yield*e(a.apply(u,l));if(t){if("error"in t&&t.error)throw(0,i.debugLog)("throw error",t.error),t.error;const e=o.manage(t instanceof s.Lifetime?t:t.value);return this.ffi.QTS_DupValuePointer(this.ctx.value,e.value)}return 0}catch(h){return this.errorToHandle(h).consume((e=>this.ffi.QTS_Throw(this.ctx.value,e.value)))}}))}},this.runtime=e.runtime,this.module=e.module,this.ffi=e.ffi,this.rt=e.rt,this.ctx=e.ctx,this.memory=new l({...e,owner:this.runtime}),e.callbacks.setContextCallbacks(this.ctx.value,this.cToHostCallbacks),this.dump=this.dump.bind(this),this.getString=this.getString.bind(this),this.getNumber=this.getNumber.bind(this),this.resolvePromise=this.resolvePromise.bind(this)}get alive(){return this.memory.alive}dispose(){this.memory.dispose()}get undefined(){if(this._undefined)return this._undefined;const e=this.ffi.QTS_GetUndefined();return this._undefined=new s.StaticLifetime(e)}get null(){if(this._null)return this._null;const e=this.ffi.QTS_GetNull();return this._null=new s.StaticLifetime(e)}get true(){if(this._true)return this._true;const e=this.ffi.QTS_GetTrue();return this._true=new s.StaticLifetime(e)}get false(){if(this._false)return this._false;const e=this.ffi.QTS_GetFalse();return this._false=new s.StaticLifetime(e)}get global(){if(this._global)return this._global;const e=this.ffi.QTS_GetGlobalObject(this.ctx.value);return this.memory.manage(this.memory.heapValueHandle(e)),this._global=new s.StaticLifetime(e,this.runtime),this._global}newNumber(e){return this.memory.heapValueHandle(this.ffi.QTS_NewFloat64(this.ctx.value,e))}newString(e){const t=this.memory.newHeapCharPointer(e).consume((e=>this.ffi.QTS_NewString(this.ctx.value,e.value)));return this.memory.heapValueHandle(t)}newUniqueSymbol(e){var t;const r=null!==(t="symbol"===typeof e?e.description:e)&&void 0!==t?t:"",i=this.memory.newHeapCharPointer(r).consume((e=>this.ffi.QTS_NewSymbol(this.ctx.value,e.value,0)));return this.memory.heapValueHandle(i)}newSymbolFor(e){var t;const r=null!==(t="symbol"===typeof e?e.description:e)&&void 0!==t?t:"",i=this.memory.newHeapCharPointer(r).consume((e=>this.ffi.QTS_NewSymbol(this.ctx.value,e.value,1)));return this.memory.heapValueHandle(i)}newBigInt(e){if(!this._BigInt){const e=this.getProp(this.global,"BigInt");this.memory.manage(e),this._BigInt=new s.StaticLifetime(e.value,this.runtime)}const t=this._BigInt,r=String(e);return this.newString(r).consume((e=>this.unwrapResult(this.callFunction(t,this.undefined,e))))}newObject(e){e&&this.runtime.assertOwned(e);const t=e?this.ffi.QTS_NewObjectProto(this.ctx.value,e.value):this.ffi.QTS_NewObject(this.ctx.value);return this.memory.heapValueHandle(t)}newArray(){const e=this.ffi.QTS_NewArray(this.ctx.value);return this.memory.heapValueHandle(e)}newPromise(e){const t=s.Scope.withScope((e=>{const t=e.manage(this.memory.newMutablePointerArray(2)),r=this.ffi.QTS_NewPromiseCapability(this.ctx.value,t.value.ptr),i=this.memory.heapValueHandle(r),[o,s]=Array.from(t.value.typedArray).map((e=>this.memory.heapValueHandle(e)));return new n.QuickJSDeferredPromise({context:this,promiseHandle:i,resolveHandle:o,rejectHandle:s})}));return e&&"function"===typeof e&&(e=new Promise(e)),e&&Promise.resolve(e).then(t.resolve,(e=>e instanceof s.Lifetime?t.reject(e):this.newError(e).consume(t.reject))),t}newFunction(e,t){const r=++this.fnNextId;return this.setFunction(r,t),this.memory.heapValueHandle(this.ffi.QTS_NewFunction(this.ctx.value,r,e))}newError(e){const t=this.memory.heapValueHandle(this.ffi.QTS_NewError(this.ctx.value));return e&&"object"===typeof e?(void 0!==e.name&&this.newString(e.name).consume((e=>this.setProp(t,"name",e))),void 0!==e.message&&this.newString(e.message).consume((e=>this.setProp(t,"message",e)))):"string"===typeof e?this.newString(e).consume((e=>this.setProp(t,"message",e))):void 0!==e&&this.newString(String(e)).consume((e=>this.setProp(t,"message",e))),t}typeof(e){return this.runtime.assertOwned(e),this.memory.consumeHeapCharPointer(this.ffi.QTS_Typeof(this.ctx.value,e.value))}getNumber(e){return this.runtime.assertOwned(e),this.ffi.QTS_GetFloat64(this.ctx.value,e.value)}getString(e){return this.runtime.assertOwned(e),this.memory.consumeJSCharPointer(this.ffi.QTS_GetString(this.ctx.value,e.value))}getSymbol(e){this.runtime.assertOwned(e);const t=this.memory.consumeJSCharPointer(this.ffi.QTS_GetSymbolDescriptionOrKey(this.ctx.value,e.value));return this.ffi.QTS_IsGlobalSymbol(this.ctx.value,e.value)?Symbol.for(t):Symbol(t)}getBigInt(e){this.runtime.assertOwned(e);const t=this.getString(e);return BigInt(t)}resolvePromise(e){this.runtime.assertOwned(e);const t=s.Scope.withScope((t=>{const r=t.manage(this.getProp(this.global,"Promise")),i=t.manage(this.getProp(r,"resolve"));return this.callFunction(i,r,e)}));return t.error?Promise.resolve(t):new Promise((e=>{s.Scope.withScope((r=>{const i=r.manage(this.newFunction("resolve",(t=>{e({value:t&&t.dup()})}))),n=r.manage(this.newFunction("reject",(t=>{e({error:t&&t.dup()})}))),o=r.manage(t.value),s=r.manage(this.getProp(o,"then"));this.unwrapResult(this.callFunction(s,o,i,n)).dispose()}))}))}getProp(e,t){this.runtime.assertOwned(e);const r=this.borrowPropertyKey(t).consume((t=>this.ffi.QTS_GetProp(this.ctx.value,e.value,t.value)));return this.memory.heapValueHandle(r)}setProp(e,t,r){this.runtime.assertOwned(e),this.borrowPropertyKey(t).consume((t=>this.ffi.QTS_SetProp(this.ctx.value,e.value,t.value,r.value)))}defineProp(e,t,r){this.runtime.assertOwned(e),s.Scope.withScope((i=>{const n=i.manage(this.borrowPropertyKey(t)),o=r.value||this.undefined,s=Boolean(r.configurable),a=Boolean(r.enumerable),u=Boolean(r.value),l=r.get?i.manage(this.newFunction(r.get.name,r.get)):this.undefined,h=r.set?i.manage(this.newFunction(r.set.name,r.set)):this.undefined;this.ffi.QTS_DefineProp(this.ctx.value,e.value,n.value,o.value,l.value,h.value,s,a,u)}))}callFunction(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];this.runtime.assertOwned(e);const o=this.memory.toPointerArray(i).consume((r=>this.ffi.QTS_Call(this.ctx.value,e.value,t.value,i.length,r.value))),s=this.ffi.QTS_ResolveException(this.ctx.value,o);return s?(this.ffi.QTS_FreeValuePointer(this.ctx.value,o),{error:this.memory.heapValueHandle(s)}):{value:this.memory.heapValueHandle(o)}}evalCode(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"eval.js",r=arguments.length>2?arguments[2]:void 0;const i=void 0===r?1:0,n=(0,u.evalOptionsToFlags)(r),o=this.memory.newHeapCharPointer(e).consume((e=>this.ffi.QTS_Eval(this.ctx.value,e.value,t,i,n))),s=this.ffi.QTS_ResolveException(this.ctx.value,o);return s?(this.ffi.QTS_FreeValuePointer(this.ctx.value,o),{error:this.memory.heapValueHandle(s)}):{value:this.memory.heapValueHandle(o)}}throw(e){return this.errorToHandle(e).consume((e=>this.ffi.QTS_Throw(this.ctx.value,e.value)))}borrowPropertyKey(e){return"number"===typeof e?this.newNumber(e):"string"===typeof e?this.newString(e):new s.StaticLifetime(e.value,this.runtime)}getMemory(e){if(e===this.rt.value)return this.memory;throw new Error("Private API. Cannot get memory from a different runtime")}dump(e){this.runtime.assertOwned(e);const t=this.typeof(e);if("string"===t)return this.getString(e);if("number"===t)return this.getNumber(e);if("bigint"===t)return this.getBigInt(e);if("undefined"===t)return;if("symbol"===t)return this.getSymbol(e);const r=this.memory.consumeJSCharPointer(this.ffi.QTS_Dump(this.ctx.value,e.value));try{return JSON.parse(r)}catch(i){return r}}unwrapResult(e){if(e.error){const t="context"in e.error?e.error.context:this,r=e.error.consume((e=>this.dump(e)));if(r&&"object"===typeof r&&"string"===typeof r.message){const{message:e,name:i,stack:n}=r,s=new o.QuickJSUnwrapError(""),a=s.stack;throw"string"===typeof i&&(s.name=r.name),"string"===typeof n&&(s.stack="".concat(i,": ").concat(e,"\n").concat(r.stack,"Host: ").concat(a)),Object.assign(s,{cause:r,context:t,message:e}),s}throw new o.QuickJSUnwrapError(r,t)}return e.value}getFunction(e){const t=e>>8,r=this.fnMaps.get(t);if(r)return r.get(e)}setFunction(e,t){const r=e>>8;let i=this.fnMaps.get(r);return i||(i=new Map,this.fnMaps.set(r,i)),i.set(e,t)}errorToHandle(e){return e instanceof s.Lifetime?e:this.newError(e)}}},10302:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleMemory=void 0;const i=r(39045);t.ModuleMemory=class{constructor(e){this.module=e}toPointerArray(e){const t=new Int32Array(e.map((e=>e.value))),r=t.length*t.BYTES_PER_ELEMENT,n=this.module._malloc(r);return new Uint8Array(this.module.HEAPU8.buffer,n,r).set(new Uint8Array(t.buffer)),new i.Lifetime(n,void 0,(e=>this.module._free(e)))}newMutablePointerArray(e){const t=new Int32Array(new Array(e).fill(0)),r=t.length*t.BYTES_PER_ELEMENT,n=this.module._malloc(r),o=new Int32Array(this.module.HEAPU8.buffer,n,e);return o.set(t),new i.Lifetime({typedArray:o,ptr:n},void 0,(e=>this.module._free(e.ptr)))}newHeapCharPointer(e){const t=this.module.lengthBytesUTF8(e)+1,r=this.module._malloc(t);return this.module.stringToUTF8(e,r,t),new i.Lifetime(r,void 0,(e=>this.module._free(e)))}consumeHeapCharPointer(e){const t=this.module.UTF8ToString(e);return this.module._free(e),t}}},6566:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.QuickJSWASMModule=t.applyModuleEvalRuntimeOptions=t.applyBaseRuntimeOptions=t.QuickJSModuleCallbacks=void 0;const i=r(50618),n=r(35541),o=r(39045),s=r(14309),a=r(95812);class u{constructor(e){this.callFunction=e.callFunction,this.shouldInterrupt=e.shouldInterrupt,this.loadModuleSource=e.loadModuleSource,this.normalizeModule=e.normalizeModule}}class l{constructor(e){this.contextCallbacks=new Map,this.runtimeCallbacks=new Map,this.suspendedCount=0,this.cToHostCallbacks=new u({callFunction:(e,t,r,i,n,o)=>this.handleAsyncify(e,(()=>{try{const e=this.contextCallbacks.get(t);if(!e)throw new Error("QuickJSContext(ctx = ".concat(t,') not found for C function call "').concat(o,'"'));return e.callFunction(t,r,i,n,o)}catch(e){return console.error("[C to host error: returning null]",e),0}})),shouldInterrupt:(e,t)=>this.handleAsyncify(e,(()=>{try{const e=this.runtimeCallbacks.get(t);if(!e)throw new Error("QuickJSRuntime(rt = ".concat(t,") not found for C interrupt"));return e.shouldInterrupt(t)}catch(e){return console.error("[C to host interrupt: returning error]",e),1}})),loadModuleSource:(e,t,r,i)=>this.handleAsyncify(e,(()=>{try{const e=this.runtimeCallbacks.get(t);if(!e)throw new Error("QuickJSRuntime(rt = ".concat(t,") not found for C module loader"));const n=e.loadModuleSource;if(!n)throw new Error("QuickJSRuntime(rt = ".concat(t,") does not support module loading"));return n(t,r,i)}catch(e){return console.error("[C to host module loader error: returning null]",e),0}})),normalizeModule:(e,t,r,i,n)=>this.handleAsyncify(e,(()=>{try{const e=this.runtimeCallbacks.get(t);if(!e)throw new Error("QuickJSRuntime(rt = ".concat(t,") not found for C module loader"));const o=e.normalizeModule;if(!o)throw new Error("QuickJSRuntime(rt = ".concat(t,") does not support module loading"));return o(t,r,i,n)}catch(e){return console.error("[C to host module loader error: returning null]",e),0}}))}),this.module=e,this.module.callbacks=this.cToHostCallbacks}setRuntimeCallbacks(e,t){this.runtimeCallbacks.set(e,t)}deleteRuntime(e){this.runtimeCallbacks.delete(e)}setContextCallbacks(e,t){this.contextCallbacks.set(e,t)}deleteContext(e){this.contextCallbacks.delete(e)}handleAsyncify(e,t){if(e)return e.handleSleep((e=>{try{const r=t();if(!(r instanceof Promise))return(0,i.debugLog)("asyncify.handleSleep: not suspending:",r),void e(r);if(this.suspended)throw new n.QuickJSAsyncifyError("Already suspended at: ".concat(this.suspended.stack,"\nAttempted to suspend at:"));this.suspended=new n.QuickJSAsyncifySuspended("(".concat(this.suspendedCount++,")")),(0,i.debugLog)("asyncify.handleSleep: suspending:",this.suspended),r.then((t=>{this.suspended=void 0,(0,i.debugLog)("asyncify.handleSleep: resolved:",t),e(t)}),(e=>{(0,i.debugLog)("asyncify.handleSleep: rejected:",e),console.error("QuickJS: cannot handle error in suspended function",e),this.suspended=void 0}))}catch(r){throw(0,i.debugLog)("asyncify.handleSleep: error:",r),this.suspended=void 0,r}}));const r=t();if(r instanceof Promise)throw new Error("Promise return value not supported in non-asyncify context.");return r}}function h(e,t){t.interruptHandler&&e.setInterruptHandler(t.interruptHandler),void 0!==t.maxStackSizeBytes&&e.setMaxStackSize(t.maxStackSizeBytes),void 0!==t.memoryLimitBytes&&e.setMemoryLimit(t.memoryLimitBytes)}function c(e,t){t.moduleLoader&&e.setModuleLoader(t.moduleLoader),t.shouldInterrupt&&e.setInterruptHandler(t.shouldInterrupt),void 0!==t.memoryLimitBytes&&e.setMemoryLimit(t.memoryLimitBytes),void 0!==t.maxStackSizeBytes&&e.setMaxStackSize(t.maxStackSizeBytes)}t.QuickJSModuleCallbacks=l,t.applyBaseRuntimeOptions=h,t.applyModuleEvalRuntimeOptions=c;t.QuickJSWASMModule=class{constructor(e,t){this.module=e,this.ffi=t,this.callbacks=new l(e)}newRuntime(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new o.Lifetime(this.ffi.QTS_NewRuntime(),void 0,(e=>{this.callbacks.deleteRuntime(e),this.ffi.QTS_FreeRuntime(e)})),r=new s.QuickJSRuntime({module:this.module,callbacks:this.callbacks,ffi:this.ffi,rt:t});return h(r,e),e.moduleLoader&&r.setModuleLoader(e.moduleLoader),r}newContext(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=this.newRuntime(),r=t.newContext({...e,ownedLifetimes:(0,a.concat)(t,e.ownedLifetimes)});return t.context=r,r}evalCode(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.Scope.withScope((r=>{const i=r.manage(this.newContext());c(i.runtime,t);const n=i.evalCode(e,"eval.js");if(void 0!==t.memoryLimitBytes&&i.runtime.setMemoryLimit(-1),n.error){throw i.dump(r.manage(n.error))}return i.dump(r.manage(n.value))}))}getFFI(){return this.ffi}}},14309:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.QuickJSRuntime=void 0;const i=r(72678),n=r(46953),o=r(50618),s=r(35541),a=r(39045),u=r(10302),l=r(95812);t.QuickJSRuntime=class{constructor(e){var t;this.scope=new a.Scope,this.contextMap=new Map,this.cToHostCallbacks={shouldInterrupt:e=>{if(e!==this.rt.value)throw new Error("QuickJSContext instance received C -> JS interrupt with mismatched rt");const t=this.interruptHandler;if(!t)throw new Error("QuickJSContext had no interrupt handler");return t(this)?1:0},loadModuleSource:(0,i.maybeAsyncFn)(this,(function*(e,t,r,i){var n;const s=this.moduleLoader;if(!s)throw new Error("Runtime has no module loader");if(t!==this.rt.value)throw new Error("Runtime pointer mismatch");const a=null!==(n=this.contextMap.get(r))&&void 0!==n?n:this.newContext({contextPointer:r});try{const t=yield*e(s(i,a));if("object"===typeof t&&"error"in t&&t.error)throw(0,o.debugLog)("cToHostLoadModule: loader returned error",t.error),t.error;const r="string"===typeof t?t:"value"in t?t.value:t;return this.memory.newHeapCharPointer(r).value}catch(u){return(0,o.debugLog)("cToHostLoadModule: caught error",u),a.throw(u),0}})),normalizeModule:(0,i.maybeAsyncFn)(this,(function*(e,t,r,i,n){var s;const a=this.moduleNormalizer;if(!a)throw new Error("Runtime has no module normalizer");if(t!==this.rt.value)throw new Error("Runtime pointer mismatch");const u=null!==(s=this.contextMap.get(r))&&void 0!==s?s:this.newContext({contextPointer:r});try{const t=yield*e(a(i,n,u));if("object"===typeof t&&"error"in t&&t.error)throw(0,o.debugLog)("cToHostNormalizeModule: normalizer returned error",t.error),t.error;const r="string"===typeof t?t:t.value;return u.getMemory(this.rt.value).newHeapCharPointer(r).value}catch(l){return(0,o.debugLog)("normalizeModule: caught error",l),u.throw(l),0}}))},null===(t=e.ownedLifetimes)||void 0===t||t.forEach((e=>this.scope.manage(e))),this.module=e.module,this.memory=new u.ModuleMemory(this.module),this.ffi=e.ffi,this.rt=e.rt,this.callbacks=e.callbacks,this.scope.manage(this.rt),this.callbacks.setRuntimeCallbacks(this.rt.value,this.cToHostCallbacks),this.executePendingJobs=this.executePendingJobs.bind(this)}get alive(){return this.scope.alive}dispose(){return this.scope.dispose()}newContext(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.intrinsics&&e.intrinsics!==l.DefaultIntrinsics)throw new Error("TODO: Custom intrinsics are not supported yet");const t=new a.Lifetime(e.contextPointer||this.ffi.QTS_NewContext(this.rt.value),void 0,(e=>{this.contextMap.delete(e),this.callbacks.deleteContext(e),this.ffi.QTS_FreeContext(e)})),r=new n.QuickJSContext({module:this.module,ctx:t,ffi:this.ffi,rt:this.rt,ownedLifetimes:e.ownedLifetimes,runtime:this,callbacks:this.callbacks});return this.contextMap.set(t.value,r),r}setModuleLoader(e,t){this.moduleLoader=e,this.moduleNormalizer=t,this.ffi.QTS_RuntimeEnableModuleLoader(this.rt.value,this.moduleNormalizer?1:0)}removeModuleLoader(){this.moduleLoader=void 0,this.ffi.QTS_RuntimeDisableModuleLoader(this.rt.value)}hasPendingJob(){return Boolean(this.ffi.QTS_IsJobPending(this.rt.value))}setInterruptHandler(e){const t=this.interruptHandler;this.interruptHandler=e,t||this.ffi.QTS_RuntimeEnableInterruptHandler(this.rt.value)}removeInterruptHandler(){this.interruptHandler&&(this.ffi.QTS_RuntimeDisableInterruptHandler(this.rt.value),this.interruptHandler=void 0)}executePendingJobs(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;const r=this.memory.newMutablePointerArray(1),i=this.ffi.QTS_ExecutePendingJob(this.rt.value,null!==t&&void 0!==t?t:-1,r.value.ptr),n=r.value.typedArray[0];if(r.dispose(),0===n)return this.ffi.QTS_FreeValuePointerRuntime(this.rt.value,i),{value:0};const o=null!==(e=this.contextMap.get(n))&&void 0!==e?e:this.newContext({contextPointer:n}),s=o.getMemory(this.rt.value).heapValueHandle(i);if("number"===o.typeof(s)){const e=o.getNumber(s);return s.dispose(),{value:e}}return{error:Object.assign(s,{context:o})}}setMemoryLimit(e){if(e<0&&-1!==e)throw new Error("Cannot set memory limit to negative number. To unset, pass -1");this.ffi.QTS_RuntimeSetMemoryLimit(this.rt.value,e)}computeMemoryUsage(){const e=this.getSystemContext().getMemory(this.rt.value);return e.heapValueHandle(this.ffi.QTS_RuntimeComputeMemoryUsage(this.rt.value,e.ctx.value))}dumpMemoryUsage(){return this.memory.consumeHeapCharPointer(this.ffi.QTS_RuntimeDumpMemoryUsage(this.rt.value))}setMaxStackSize(e){if(e<0)throw new Error("Cannot set memory limit to negative number. To unset, pass 0.");this.ffi.QTS_RuntimeSetMaxStackSize(this.rt.value,e)}assertOwned(e){if(e.owner&&e.owner.rt!==this.rt)throw new s.QuickJSWrongOwner("Handle is not owned by this runtime: ".concat(e.owner.rt.value," != ").concat(this.rt.value))}getSystemContext(){return this.context||(this.context=this.scope.manage(this.newContext())),this.context}}},43946:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EvalFlags=t.assertSync=void 0,t.assertSync=function(e){return function(){const t=e(...arguments);if(t&&"object"===typeof t&&t instanceof Promise)throw new Error("Function unexpectedly returned a Promise");return t}},t.EvalFlags={JS_EVAL_TYPE_GLOBAL:0,JS_EVAL_TYPE_MODULE:1,JS_EVAL_TYPE_DIRECT:2,JS_EVAL_TYPE_INDIRECT:3,JS_EVAL_TYPE_MASK:3,JS_EVAL_FLAG_STRICT:8,JS_EVAL_FLAG_STRIP:16,JS_EVAL_FLAG_COMPILE_ONLY:32,JS_EVAL_FLAG_BACKTRACE_BARRIER:64}},95812:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.concat=t.evalOptionsToFlags=t.DefaultIntrinsics=void 0;const i=r(43946);Symbol("Unstable");t.DefaultIntrinsics=Symbol("DefaultIntrinsics"),t.evalOptionsToFlags=function(e){if("number"===typeof e)return e;if(void 0===e)return 0;const{type:t,strict:r,strip:n,compileOnly:o,backtraceBarrier:s}=e;let a=0;return"global"===t&&(a|=i.EvalFlags.JS_EVAL_TYPE_GLOBAL),"module"===t&&(a|=i.EvalFlags.JS_EVAL_TYPE_MODULE),r&&(a|=i.EvalFlags.JS_EVAL_FLAG_STRICT),n&&(a|=i.EvalFlags.JS_EVAL_FLAG_STRIP),o&&(a|=i.EvalFlags.JS_EVAL_FLAG_COMPILE_ONLY),s&&(a|=i.EvalFlags.JS_EVAL_FLAG_BACKTRACE_BARRIER),a},t.concat=function(){let e=[];for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];for(const n of r)void 0!==n&&(e=e.concat(n));return e}}}]);
//# sourceMappingURL=https://s3-static-genially.genially.com/view/static/js/566.46bf15bd.chunk.js.map