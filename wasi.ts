// @deno-types="./pkg/wasmer_wasi_js.d.ts"
import baseInit, { WASI, InitInput } from "wasmer-wasi-js";
// @deno-types="./pkg/wasmer_wasi_js.d.ts"
export { WASI, MemFS, JSVirtualFile, WasmerRuntimeError } from "wasmer-wasi-js";

let inited: Promise<any> | null = null;
export const init = async (input?: InitInput | Promise<InitInput>, force?: boolean) => {
    if (inited === null || force === true) {
        inited = baseInit(input);
    }
    await inited;
}
